import { translations } from "./translations.js";
import {
  LANGUAGE_STORAGE_KEY,
  MILESTONE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  slug,
  createTr,
  parseHash,
  isValidLanguage,
  readMilestoneState as readMilestoneStateUtil,
  milestoneIsUnlocked as milestoneIsUnlockedUtil,
  cascadeUncheck,
  searchableText as searchableTextUtil,
  filterSearchResults,
} from "./utils.js";

const PLAYLIST_ID = "PLKahf_QP41Lk";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
let currentLanguage = isValidLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY))
  ? localStorage.getItem(LANGUAGE_STORAGE_KEY)
  : "en";

function tr(value) {
  return translations[currentLanguage]?.[value] ?? value;
}

const sections = [
  {
    title: "Overview",
    pages: [{ id: "introduction", title: "Introduction" }],
  },
  {
    title: "Getting Started",
    journey: true,
    pages: [
      { id: "create-account", title: "Create SuperMoney Breeze Account" },
      { id: "connect-shopify", title: "Connect Shopify Store with Breeze" },
      { id: "shipping-rules", title: "Configuring Shipping Rules" },
      { id: "offers", title: "Offers Configuration" },
      { id: "payment-gateway", title: "Integrate Payment Gateway" },
      { id: "analytics", title: "Connect Meta and Google Analytics" },
      { id: "customize-checkout", title: "Customize Checkout" },
      { id: "social-handles", title: "Add Social Handles in Thank You Page" },
      { id: "testing-live", title: "Testing and Making Breeze Live" },
    ],
  },
  {
    title: "Breeze Apps",
    pages: [{ id: "apps", title: "Install Breeze Apps", tag: "app" }],
  },
];

const pages = {
  introduction: {
    section: "Overview",
    title: "Welcome to Breeze Docs",
    description:
      "Understand super.money Breeze, then use these guides to set up your account, connect your store, configure payments, and go live.",
    product: {
      title: "An AI-powered, one-click checkout for modern commerce",
      description:
        "super.money Breeze is a fast, frictionless checkout solution for D2C and enterprise brands. It helps stores reduce checkout effort, recover missing sales, improve conversions, and lower return-to-origin risk with shopper intelligence and smart payment experiences.",
      stats: [
        ["40%", "boost in conversion"],
        ["30%", "reduction in RTO rate"],
        ["20%", "increase in prepaid share"],
      ],
      features: [
        ["Faster checkout", "Pre-filled addresses and automatic OTP reading remove friction from the purchase journey."],
        ["Smarter RTO controls", "Shopping signals, risk scoring, and targeted nudges help identify genuine buyers and reduce costly returns."],
        ["Flexible payments", "Use prepaid incentives, COD controls, payment links, and your existing payment gateway—or connect multiple gateways."],
        ["Works with your stack", "Connect the commerce and payment tools you already use without giving up flexibility."],
      ],
    },
    playlist: true,
    groups: [
      {
        title: "Getting Started",
        description:
          "Set up your Breeze account, connect your Shopify store, integrate a payment gateway, and go live.",
        items: ["create-account", "connect-shopify", "payment-gateway", "testing-live"],
      },
      {
        title: "Checkout Configuration",
        description:
          "Configure shipping rules, customize your checkout page, add social handles, and connect analytics.",
        items: ["shipping-rules", "customize-checkout", "social-handles", "analytics"],
      },
      {
        title: "Offers",
        description:
          "Create and manage promotional offers—auto-applied discounts, manual coupons, and free gifts.",
        items: ["offers"],
      },
    ],
  },
  "create-account": {
    section: "Getting Started",
    title: "Create SuperMoney Breeze Account",
    description: "Follow these steps to create a business account on Juspay and get started with Breeze.",
    portalUrl: "https://portal.juspay.in/selfSignUp?ref=supermoney",
    video: { id: "NQ-w6iyv_cE", title: "Create account in Supermoney Breeze" },
    phases: [
      {
        title: "Phase 1: Getting Started",
        steps: [
          [
            "Launch the Portal",
            "Open the Juspay registration page in your preferred web browser.",
            "https://portal.juspay.in/selfSignUp?ref=supermoney",
          ],
          ["Initiate Sign-Up", "Locate and click the Sign Up with Email button to start the registration process for a new account."],
        ],
      },
      {
        title: "Phase 2: Account Credentials",
        steps: [
          ["Enter your Email ID", "Provide the email address that will be associated with your business account."],
          ["Set a Password", "Create a secure password, select Send OTP, retrieve the one-time password from your email, and choose Verify and Continue."],
        ],
      },
      {
        title: "Phase 3: Business Configuration",
        steps: [
          ["Input Business Website", "Paste your official website URL into the designated field. Your domain is used as the Merchant ID by default; keep it short and concise."],
        ],
      },
      {
        title: "Phase 4: Completion",
        steps: [
          ["Submit Details", "Enter your phone number and select Submit Details. Your Juspay account is then provisioned and ready to use."],
        ],
      },
    ],
  },
  "connect-shopify": {
    section: "Getting Started",
    title: "Connect Shopify Store with Breeze",
    description:
      "Link your Shopify store to your Juspay account and authorize the configuration required to enable the Breeze checkout experience.",
    video: { id: "8qnY2UxuZtQ", title: "Shop installation" },
    phases: [
      {
        title: "Phase 1: Store Onboarding",
        steps: [
          ["Enter Store URL", "Go to onboarding in your Juspay account and enter your Shopify store URL. The platform is detected automatically."],
          ["Connect Store", "Select Connect store to begin authentication."],
        ],
      },
      {
        title: "Phase 2: Authentication",
        steps: [
          ["Partner Authentication", "Choose Partner authentication, sign in to Shopify, and follow the prompts to authorize the integration."],
        ],
      },
      {
        title: "Phase 3: App Installation",
        steps: [
          ["Install App", "After returning to the Juspay dashboard, select the option to install the Shopify app."],
          ["Finalize Installation", "Choose your store, select Install, wait for configuration to finish, and use Open to verify that Breeze is live."],
        ],
      },
      {
        title: "Phase 4: Breeze Theme Setup",
        steps: [
          [
            "Duplicated Breeze Theme",
            "We duplicate your current live Shopify theme and create a separate theme named “Breeze <> [your theme name]”. All Breeze integration code is added only to this duplicated theme.",
          ],
          [
            "Your Live Theme Remains Unchanged",
            "We do not change your existing live theme. Apart from adding the Breeze integration code to the duplicated theme, we do not change its design, content, or other storefront configuration.",
          ],
        ],
      },
    ],
  },
  "payment-gateway": {
    section: "Getting Started",
    title: "How to Configure Your Payment Gateway in Breeze Checkout",
    description:
      "Integrate your preferred payment gateway and enable the payment methods needed to process customer transactions.",
    video: { id: "pStSaXPnM-Q", title: "Payment gateway configuration" },
    phases: [
      {
        title: "Phase 1: Accessing Payment Settings",
        steps: [
          [
            "Navigate to Control Center",
            "In your dashboard, scroll to Payment and select PG control center.",
            "https://portal.juspay.in/gateways",
          ],
        ],
      },
      {
        title: "Phase 2: Adding a Payment Method",
        steps: [["Select Payment Gateway", "Choose Configure new PG. Add Cash on Delivery or search for a specific supported gateway."]],
      },
      {
        title: "Phase 3: Configuring Live Credentials",
        steps: [
          ["Enter Merchant Details", "Choose Live credentials and enter the Merchant ID from your payment gateway dashboard. Authorize the account connection."],
          ["Provide API Keys", "Copy the Key ID from your gateway’s API settings into the required dashboard field and select Proceed."],
        ],
      },
      {
        title: "Phase 4: Setting Up Webhooks",
        steps: [["Synchronize Webhooks", "Copy the generated URL to your provider’s Webhooks section, add the secret, and select events such as Payment captured or Refund created."]],
      },
      {
        title: "Phase 5: Finalizing Methods",
        steps: [["Enable Payment Options", "Select Add methods, choose Card, Wallet, Net banking, or other options, and select Finish."]],
      },
    ],
  },
  "testing-live": {
    section: "Getting Started",
    title: "Testing and Configuring Breeze Live",
    description:
      "Test your configured payment gateway and verify that checkout payment options and authentication flows are fully functional.",
    video: { id: "z2DFQ75qARQ", title: "GO LIVE ON Breeze" },
    phases: [
      {
        title: "Phase 1: Testing Payment Gateway",
        steps: [
          ["Purchase Flow", "Open your website, go to a product, select Buy Now, then test a method such as Cash on Delivery to place an order."],
          ["Payment Method Selection", "Confirm that the expected payment choices are visible and the order completes successfully."],
        ],
      },
      {
        title: "Phase 2: Verifying Authentication Flow",
        steps: [
          ["Checkout Initiation", "Add a product to your cart and select Checkout."],
          ["OTP Verification", "While logged out, enter a phone number on checkout and confirm that the OTP arrives and can be verified."],
        ],
      },
      {
        title: "Phase 3: Monitoring and Support",
        steps: [
          ["System Review", "Explore the storefront and confirm events and user flows work as expected."],
          ["Technical Support", "If an issue remains, contact your solution engineers for help."],
        ],
      },
      {
        title: "Phase 4: Publish the Approved Theme",
        steps: [
          [
            "Wait for Breeze Approval",
            "Keep the duplicated “Breeze <> [your theme name]” theme unpublished while the Breeze team completes its detailed quality review.",
          ],
          [
            "Publish the Breeze Theme",
            "After you receive approval from the Breeze team, publish the duplicated Breeze theme from Shopify. Your original live theme is not changed during setup or review.",
          ],
        ],
      },
    ],
  },
  "shipping-rules": {
    section: "Checkout Configuration",
    title: "Configuring Shipping Rules in Breeze Checkout",
    description:
      "Define fulfillment locations, shipping zones, profiles, and delivery rates for an accurate checkout experience.",
    video: { id: "c-b0Y8oCezA", title: "Configure Shipping in checkout" },
    phases: [
      {
        title: "Phase 1: Setting Up Fulfillment Locations",
        steps: [
          [
            "Create Fulfillment Location",
            "In Shipping, select Create fulfillment location and enter the name, address, pin code, and contact number.",
            "https://portal.juspay.in/breeze-shipping",
          ],
          ["Save Location", "Choose whether it is a warehouse or store and select Save."],
        ],
      },
      {
        title: "Phase 2: Defining Shipping Zones",
        steps: [
          ["Add Shipping Zone", "Enter a zone name and the pin codes for the region you cover."],
          ["Save Zone", "Select Add zone. A location cannot belong to overlapping zones."],
        ],
      },
      {
        title: "Phase 3: Creating Shipping Profiles",
        steps: [
          ["Create Shipping Profile", "Open Profile, create a shipping profile, and connect your fulfillment locations."],
          ["Enable Zone", "Choose a zone and select Enable shipping zone."],
        ],
      },
      {
        title: "Phase 4: Configuring Shipping Rates",
        steps: [
          ["Add Shipping Rates", "Define delivery cost based on cart value or weight, set payment availability, and confirm."],
          ["Save Profile", "Save the profile to publish the shipping configuration."],
        ],
      },
      {
        title: "Phase 5: Specialized Shipping",
        steps: [["Add Express Shipping", "Create an Express shipping rate and, if needed, restrict it to prepaid purchases with a payment group."]],
      },
    ],
  },
  "customize-checkout": {
    section: "Checkout Configuration",
    title: "Configuring Your Checkout Experience",
    description:
      "Tailor checkout features, branding, and payment display options to better serve customers and improve the checkout flow.",
    video: { id: "OVvJEofC1-o", title: "Customize Checkout" },
    phases: [
      {
        title: "Phase 1: Accessing the Control Center",
        steps: [
          [
            "Open Configuration Settings",
            "Navigate to the Shop configuration tab to access checkout controls.",
            "https://portal.juspay.in/breeze-shop-configuration",
          ],
        ],
      },
      {
        title: "Phase 2: Managing Checkout Features",
        steps: [["Enable Checkout Features", "Use toggles for features such as two-step checkout or international shipping banners, and select View Demo to preview them."]],
      },
      {
        title: "Phase 3: Branding and Customization",
        steps: [["Configure Branding", "Upload a .webp store logo under 8 KB, customize announcements, and select Save and Publish."]],
      },
      {
        title: "Phase 4: Setting Up Payment Options",
        steps: [["Finalize Payment Page", "Configure payment views and consumer finance options, then select Save and Publish to apply changes."]],
      },
    ],
  },
  "social-handles": {
    section: "Checkout Configuration",
    title: "Adding Social Media Handles to Your Checkout",
    description:
      "Add your store logo and social links so customers can connect with your brand after completing a purchase.",
    video: { id: "SCL7sIDaqoM", title: "Social Media Configuration" },
    phases: [
      {
        title: "Phase 1: Accessing Settings",
        steps: [
          [
            "Navigate to Settings",
            "Open your dashboard and choose the Settings tab.",
            "https://portal.juspay.in/breeze-settings",
          ],
        ],
      },
      {
        title: "Phase 2: Branding Your Checkout",
        steps: [["Enable Store Logo", "Enable the store-logo option and upload the image to show on checkout."]],
      },
      {
        title: "Phase 3: Adding Social Media",
        steps: [
          ["Configure Social Handles", "Select Add Social Handles, choose a platform such as Instagram, and enter its profile URL."],
          ["Upload Social Icons", "Upload a .webp icon no larger than 8 KB."],
          ["Save Your Changes", "Select Add Handle to finish the integration."],
        ],
      },
      {
        title: "Phase 4: Customer Visibility",
        steps: [["Confirm Display", "After saving, your branding and links appear on the post-purchase checkout page."]],
      },
    ],
  },
  analytics: {
    section: "Checkout Configuration",
    title: "How to Integrate Meta and Google Analytics in Your Checkout",
    description:
      "Connect Meta and Google Analytics (GA4) to enable checkout tracking and accurate business reporting.",
    video: { id: "SCcmkY_iIuI", title: "ADS configuration" },
    phases: [
      {
        title: "Phase 1: Connecting Meta (Facebook Ads)",
        steps: [
          [
            "Access Plugins",
            "Sign in to your Juspay dashboard and open Plugins.",
            "https://portal.juspay.in/breeze-plugins",
          ],
          ["Select Meta", "Search for Meta and select Connect."],
          ["Configure Pixel", "Copy the Pixel ID from Meta Events Manager and paste it into the Juspay field."],
          ["Generate Access Token", "Generate an access token in Events Manager, paste it into the CAP access-token field, and proceed."],
        ],
      },
      {
        title: "Phase 2: Connecting Google Analytics (GA4)",
        steps: [
          ["Retrieve Measurement ID", "In Google Analytics, go to Admin › Data Streams, select a stream, and copy its Measurement ID into Juspay."],
          ["Create API Secret", "Under Measurement Protocol API secrets, create a secret and enter it in the Juspay dashboard to finalize the connection."],
        ],
      },
    ],
  },
  offers: {
    section: "Offers",
    title: "How to Configure Offers in Breeze Checkout",
    description:
      "Create automated discounts, manual coupons, and free-gift promotions to improve checkout conversion.",
    video: { id: "ei1lijlBukg", title: "Configure Offers in Breeze checkout" },
    phases: [
      {
        title: "Phase 1: Auto-Applied Offers",
        steps: [
          [
            "Create New Offer",
            "In Offers, choose an auto-applied offer for your store.",
            "https://portal.juspay.in/breeze-shop-offer",
          ],
          ["Define Discount Details", "Add a coupon code, discount type and value, plus any cap."],
          ["Set Advanced Conditions", "Configure usage limits, minimum order value, payment methods, products, or UTM restrictions."],
        ],
      },
      {
        title: "Phase 2: Manual Offers",
        steps: [
          ["Create Manual Discount", "Create a manually applied offer and enter its name and discount amount."],
          ["Review and Activate", "Review the details and publish the offer."],
        ],
      },
      {
        title: "Phase 3: Free Gifts",
        steps: [
          ["Define Free Gift", "Select eligible products or collections and add a promotion description."],
          ["Configure Eligibility", "Set product and cart conditions, then review and publish."],
        ],
      },
    ],
  },
  apps: {
    section: "Breeze Apps",
    title: "Install Breeze Apps",
    description:
      "Extend your commerce stack with AI-powered business insights and a smarter Shopify cart experience.",
    apps: [
      {
        name: "Breeze Buddy",
        label: "Shopify App",
        description:
          "An automated COD verification tool that uses voice AI to call customers, confirm their orders, and validate address details. It helps merchants reduce RTO by identifying genuine COD orders post purchase, with customizable call triggers, retry logic, and an analytics dashboard for pickup rates, confirmation outcomes, and RTO impact.",
        url: "https://apps.shopify.com/breeze-buddy",
        cta: "Install on Shopify",
        altUrl: "https://breezebuddy.ai/",
        altCta: "Visit website",
        kind: "shopify",
        icon: "/breeze-buddy-favicon.png",
        image: "/breeze-buddy.svg",
        imageAlt: "Breeze Buddy automated COD verification",
        features: [
          "Detects customer language and speaks in the same language automatically.",
          "Full control over calling window, retries, and scheduling rules.",
          "Captures detailed address changes from customers and updates them accurately.",
        ],
      },
      {
        name: "Cart by Breeze",
        label: "Shopify App",
        description:
          "Turn your cart into a sales tool with personalized upsells, cross-sells, a rewards progress bar, and a customizable mobile-responsive cart drawer.",
        url: "https://apps.shopify.com/cart-by-breeze",
        cta: "Install on Shopify",
        kind: "shopify",
        icon: "/cart-by-breeze-icon.png",
        image: "/cart-by-breeze-drawer.png",
        imageAlt: "Cart by Breeze cart drawer with offers and discounts",
        features: ["Upsells and cross-sells", "Rewards progress bar", "Customizable cart drawer"],
      },
      {
        name: "Breeze Automatic",
        label: "AI Copilot for D2C",
        description:
          "Understand your D2C business data with clear, actionable insights powered by AI.",
        url: "https://breezeautomatic.com/",
        cta: "Explore Breeze Automatic",
        kind: "automatic",
        image: "/breeze-automatic.svg",
        imageAlt: "Breeze Automatic",
        features: ["AI-powered insights", "D2C analytics", "Actionable business intelligence"],
      },
    ],
  },
};

const milestones = [
  {
    id: "account",
    title: "Create your Breeze account",
    description: "Create and verify the business account used for Breeze.",
    page: "create-account",
    required: true,
  },
  {
    id: "shopify",
    title: "Install Breeze on Shopify",
    description: "Connect your Shopify store and finish the Breeze app installation.",
    page: "connect-shopify",
    required: true,
  },
  {
    id: "shipping",
    title: "Configure shipping",
    description: "Set up fulfillment locations, zones, profiles, and shipping rates.",
    page: "shipping-rules",
    required: true,
  },
  {
    id: "offers",
    title: "Configure offers",
    description: "Add automatic discounts, coupons, or free gifts if your store needs them.",
    page: "offers",
    required: false,
  },
  {
    id: "analytics",
    title: "Connect Meta and GA4",
    description: "Connect Meta Pixel and Google Analytics for checkout reporting.",
    page: "analytics",
    required: false,
  },
  {
    id: "payment",
    title: "Connect a payment gateway",
    description: "Add live gateway credentials, webhooks, and payment methods.",
    page: "payment-gateway",
    required: true,
  },
  {
    id: "review",
    title: "Request Breeze review",
    description:
      "When the required setup is complete, reach out to the Breeze team through your communication channel. The team will perform a detailed quality check on your Shopify storefront to make sure everything works as expected.",
    required: true,
    prerequisites: ["account", "shopify", "shipping", "payment"],
  },
  {
    id: "publish",
    title: "Publish your store",
    description: "After the Breeze team completes its review, manually confirm that your store is ready to publish.",
    required: true,
    prerequisites: ["review"],
  },
];

const reviewChecks = [
  {
    title: "Storefront and checkout entry",
    description: "Verify that Add to cart, Buy now, and Checkout open Breeze correctly from the Shopify storefront.",
  },
  {
    title: "Shipping configuration",
    description: "Review fulfillment locations, shipping zones, serviceability, delivery rates, and prepaid or COD availability.",
  },
  {
    title: "Offers and checkout experience",
    description: "Validate active coupons, automatic offers, free gifts, branding, announcements, and social links.",
  },
  {
    title: "Payments and authentication",
    description: "Check live payment gateway credentials, payment methods, webhooks, COD controls, phone entry, and OTP verification.",
  },
  {
    title: "Analytics and advertising",
    description: "Confirm Meta Pixel and GA4 configuration and verify that important checkout events are captured correctly.",
  },
  {
    title: "End-to-end test order",
    description: "Place test orders on desktop and mobile, then verify payment, confirmation, thank-you page, and Shopify order creation.",
  },
];

const flatPages = sections.flatMap((section) =>
  section.pages.map((page) => ({ ...page, section: section.title })),
);

function currentId() {
  const id = parseHash(window.location.hash);
  return pages[id] ? id : "introduction";
}

function pageMeta(id) {
  return flatPages.find((page) => page.id === id);
}

function externalIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v6H5V5h6"/></svg>`;
}

function videoCard(page) {
  const isPlaylist = page.playlist;
  const embed = isPlaylist
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`
    : `https://www.youtube-nocookie.com/embed/${page.video.id}?rel=0`;
  const href = isPlaylist ? PLAYLIST_URL : `https://www.youtube.com/watch?v=${page.video.id}&list=${PLAYLIST_ID}`;
  const title = tr(isPlaylist ? "Breeze Onboarding — full video playlist" : page.video.title);

  return `
    <h2 id="video-tutorial">${tr("Video tutorial")}</h2>
    <div class="video-card">
      <div class="video-frame">
        <iframe
          src="${embed}"
          title="${title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-caption">
        <span>${title}</span>
        <a href="${href}" target="_blank" rel="noreferrer">${tr("Open on YouTube")} ${externalIcon()}</a>
      </div>
    </div>
  `;
}

function renderIntroduction(page) {
  return page.groups
    .map(
      (group) => `
        <section>
          <h2 id="${slug(group.title)}">${tr(group.title)}</h2>
          <p>${tr(group.description)}</p>
          <div class="overview-grid">
            ${group.items
              .map((id) => {
                const item = pages[id];
                const meta = pageMeta(id);
                return `
                  <a class="overview-card" href="#${id}">
                    <span>${tr(meta.title)}</span>
                    <small>${tr(item.description)}</small>
                  </a>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderProductOverview(product) {
  if (!product) return "";

  return `
    <section class="product-overview" aria-labelledby="about-breeze">
      <div class="product-eyebrow">${tr("About the product")}</div>
      <h2 id="about-breeze">${tr(product.title)}</h2>
      <p class="product-description">${tr(product.description)}</p>
      <div class="product-stats">
        ${product.stats
          .map(
            ([value, label]) => `
              <div class="product-stat">
                <strong>${value}</strong>
                <span>${tr(label)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="product-features">
        ${product.features
          .map(
            ([title, description]) => `
              <div class="product-feature">
                <span class="product-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m7 12 3 3 7-7"/><circle cx="12" cy="12" r="9"/></svg>
                </span>
                <div>
                  <strong>${tr(title)}</strong>
                  <p>${tr(description)}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
      <a class="product-source-link" href="https://super.money/breeze" target="_blank" rel="noreferrer">
        ${tr("Explore super.money Breeze")} ${externalIcon()}
      </a>
    </section>
  `;
}

function renderPhases(page) {
  return `
    <h2 id="steps">${tr("Steps")}</h2>
    ${page.phases
      .map(
        (phase) => `
          <section>
            <h3 id="${slug(phase.title)}">${tr(phase.title)}</h3>
            <ol class="phase-list">
              ${phase.steps
                .map(
                  ([title, copy, href]) =>
                    `<li>${
                      href
                        ? `<a class="step-link" href="${href}" target="_blank" rel="noreferrer"><strong>${tr(title)}</strong>${externalIcon()}</a>`
                        : `<strong>${tr(title)}</strong>`
                    } — ${tr(copy)}</li>`,
                )
                .join("")}
            </ol>
          </section>
        `,
      )
      .join("")}
    <div class="callout">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>${tr("Keep the video open while working through the steps. Dashboard labels may change slightly as Breeze evolves.")}</span>
    </div>
  `;
}

function renderApps(page) {
  return `
    <section class="apps-intro">
      <h2 id="available-apps">${tr("Available apps")}</h2>
      <p>${tr("Choose an app below to open its official website or Shopify listing. Installation and account setup happen on the destination site.")}</p>
    </section>
    <div class="app-install-grid">
      ${page.apps
        .map(
          (app) => `
            <article class="app-install-card ${app.kind}">
              <div class="app-card-visual">
                <img src="${app.image}" alt="${tr(app.imageAlt)}" loading="lazy" />
              </div>
              <div class="app-install-topline">
                <span class="app-symbol${app.icon ? " custom-icon" : ""}" aria-hidden="true">
                  ${
                    app.icon
                      ? `<img src="${app.icon}" alt="" />`
                      : app.kind === "shopify"
                        ? `<svg viewBox="0 0 24 24"><path d="M7 8h10l1 12H6L7 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>`
                        : `<svg viewBox="0 0 24 24"><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"/><path d="m18 16 .7 2.3L21 19l-2.3.7L18 22l-.7-2.3L15 19l2.3-.7L18 16Z"/></svg>`
                  }
                </span>
                <span class="app-type">${tr(app.label)}</span>
              </div>
              <h3>${app.name}</h3>
              <p>${tr(app.description)}</p>
              <ul>
                ${app.features.map((feature) => `<li>${tr(feature)}</li>`).join("")}
              </ul>
              <div class="app-install-cta">
                <a href="${app.url}" target="_blank" rel="noreferrer">
                  ${tr(app.cta)} ${externalIcon()}
                </a>
                ${
                  app.altUrl
                    ? `<a class="secondary" href="${app.altUrl}" target="_blank" rel="noreferrer">
                        ${tr(app.altCta)} ${externalIcon()}
                      </a>`
                    : ""
                }
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="callout app-note">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>${tr("Cart by Breeze requires a Shopify store. Shopify will ask you to sign in and select a compatible store before installation.")}</span>
    </div>
  `;
}

function renderPageNav(id) {
  const order = flatPages.map((page) => page.id);
  const index = order.indexOf(id);
  const previous = order[index - 1];
  const next = order[index + 1];

  return `
    <nav class="page-nav" aria-label="${tr("Page navigation")}">
      ${previous ? `<a href="#${previous}"><small>${tr("Previous")}</small><span>← ${tr(pageMeta(previous).title)}</span></a>` : "<span></span>"}
      ${next ? `<a href="#${next}"><small>${tr("Next")}</small><span>${tr(pageMeta(next).title)} →</span></a>` : "<span></span>"}
    </nav>
  `;
}

function renderSidebar() {
  const id = currentId();
  const nav = document.querySelector("#sidebar-nav");
  nav.innerHTML = sections
    .map(
      (section) => `
        <section class="nav-section ${section.journey ? "journey" : ""}">
          <p class="nav-section-title">${tr(section.title)}</p>
          ${section.pages
            .map(
              (page, pageIndex) => `
                <a class="nav-link ${page.id === id ? "active" : ""}" href="#${page.id}">
                  ${section.journey ? `<span class="nav-step-number">${pageIndex + 1}</span>` : ""}
                  <span>${tr(page.title)}</span>
                  ${page.tag ? `<span class="tag ${page.tag}">${page.tag.toUpperCase()}</span>` : ""}
                </a>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");
}

function renderToc() {
  const headings = [...document.querySelectorAll("#article h2, #article h3")];
  document.querySelector("#toc").innerHTML = `
    <div class="toc-title">${tr("On this page")}</div>
    ${headings
      .map(
        (heading) =>
          `<a href="#${heading.id}" ${heading.tagName === "H3" ? 'style="padding-left:10px"' : ""}>${heading.textContent}</a>`,
      )
      .join("")}
  `;
}

function render() {
  const id = currentId();
  const page = pages[id];
  const article = document.querySelector("#article");
  document.title = `${tr(page.title)} — Breeze Docs`;

  article.innerHTML = `
    <div class="breadcrumbs">
      <a href="#introduction">${tr("Docs")}</a><span>/</span><span>${tr(pageMeta(id).section)}</span>
    </div>
    <h1>${tr(page.title)}</h1>
    <p class="lede">${tr(page.description)}</p>
    ${
      page.portalUrl
        ? `<a class="portal-signup-cta" href="${page.portalUrl}" target="_blank" rel="noreferrer">
            ${tr("Open Juspay self-signup portal")} ${externalIcon()}
          </a>`
        : ""
    }
    ${renderProductOverview(page.product)}
    ${page.playlist || page.video ? videoCard(page) : ""}
    ${page.groups ? renderIntroduction(page) : page.apps ? renderApps(page) : renderPhases(page)}
    ${renderPageNav(id)}
  `;

  renderSidebar();
  renderToc();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function openSearch() {
  const modal = document.querySelector("#search-modal");
  modal.hidden = false;
  const input = document.querySelector("#search-input");
  input.value = "";
  filterSearch("");
  requestAnimationFrame(() => input.focus());
}

function closeSearch() {
  document.querySelector("#search-modal").hidden = true;
}

function searchableText(id) {
  return searchableTextUtil(id, pages, tr);
}

function filterSearch(query) {
  const results = filterSearchResults(query, flatPages, pages, tr);
  document.querySelector("#search-results").innerHTML = results.length
    ? results
        .map(
          (page) => `
            <a class="search-result" href="#${page.id}">
              <strong>${tr(page.title)}</strong>
              <span>${tr(pages[page.id].description)}</span>
            </a>
          `,
        )
        .join("")
    : `<div class="search-empty">${tr("No documentation found")} "${query}".</div>`;
}

function readMilestoneState() {
  return readMilestoneStateUtil(milestones, MILESTONE_STORAGE_KEY);
}

let milestoneState = readMilestoneState();

function milestoneIsUnlocked(milestone) {
  return milestoneIsUnlockedUtil(milestone, milestoneState);
}

function renderMilestones() {
  const completed = milestones.filter(({ id }) => milestoneState[id]).length;
  const reviewUnlocked = milestoneIsUnlocked(milestones.find(({ id }) => id === "review"));
  const percent = Math.round((completed / milestones.length) * 100);

  document.querySelector("#milestone-badge").textContent = `${completed}/${milestones.length}`;
  document.querySelector("#milestone-progress-label").textContent =
    `${completed} ${tr("of")} ${milestones.length} ${tr("complete")}`;
  document.querySelector("#milestone-ready-label").textContent = reviewUnlocked
    ? tr("Required setup complete. You can now request a Breeze review.")
    : tr("Complete the required steps to unlock review.");
  document.querySelector("#milestone-progress-bar").style.width = `${percent}%`;
  document.querySelector("#milestone-review-note").textContent =
    tr(milestones.find(({ id }) => id === "review").description);

  document.querySelector("#milestone-list").innerHTML = milestones
    .map((milestone, index) => {
      const checked = milestoneState[milestone.id];
      const unlocked = milestoneIsUnlocked(milestone);
      return `
        <article class="milestone-item ${checked ? "complete" : ""} ${unlocked ? "" : "locked"}">
          <div class="milestone-step-number" aria-hidden="true">${index + 1}</div>
          <div class="milestone-item-copy">
            <div class="milestone-item-topline">
              ${
                milestone.page
                  ? `<a href="#${milestone.page}" class="milestone-title-link">${tr(milestone.title)}</a>`
                  : milestone.id === "review"
                    ? `<button class="milestone-title-button" type="button" data-open-review>${tr(milestone.title)}</button>`
                    : `<strong>${tr(milestone.title)}</strong>`
              }
              ${milestone.required ? "" : `<span class="milestone-status optional">${tr("Optional")}</span>`}
            </div>
          </div>
          <label class="milestone-complete-control">
            <input
              type="checkbox"
              data-milestone-id="${milestone.id}"
              ${checked ? "checked" : ""}
              ${unlocked ? "" : "disabled"}
            />
            <span>${tr(checked ? "Completed" : "Mark complete")}</span>
          </label>
        </article>
      `;
    })
    .join("");
}

function celebrateMilestone() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.querySelector("#celebration-layer");
  const colors = ["#42a2ff", "#10b981", "#f97316", "#a855f7", "#facc15"];
  const burst = document.createElement("div");
  burst.className = "celebration-burst";
  burst.innerHTML = Array.from({ length: 14 }, (_, index) => {
    const angle = (360 / 14) * index;
    const distance = 45 + (index % 3) * 12;
    return `<i style="--angle:${angle}deg;--distance:${distance}px;--color:${colors[index % colors.length]}"></i>`;
  }).join("");
  const popper = document.createElement("span");
  popper.className = "celebration-popper";
  popper.textContent = "🎉";
  burst.append(popper);
  layer.append(burst);
  window.setTimeout(() => burst.remove(), 950);
}

function renderReviewModal() {
  document.querySelector("#review-modal-content").innerHTML = `
    <div class="review-modal-header">
      <div>
        <span>${tr("Breeze quality review")}</span>
        <h2 id="review-modal-title">${tr("How we review your Shopify storefront")}</h2>
      </div>
      <button class="icon-button" id="review-modal-close" aria-label="${tr("Close review details")}">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <p class="review-modal-intro">${tr("After you complete the required setup, contact the Breeze team through your usual communication channel. We will perform a detailed quality check covering the following areas.")}</p>
    <ol class="review-check-list">
      ${reviewChecks
        .map(
          (check) => `
            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>${tr(check.title)}</strong>
                <p>${tr(check.description)}</p>
              </div>
            </li>
          `,
        )
        .join("")}
    </ol>
    <div class="review-modal-outcome">
      <strong>${tr("What happens after the review?")}</strong>
      <p>${tr("The Breeze team will share any issues or recommended changes through your communication channel. Once all critical checks pass, we will confirm that the storefront is ready to publish.")}</p>
    </div>
    <button class="review-modal-confirm" id="review-modal-confirm">${tr("I understand")}</button>
  `;
}

function openReviewModal() {
  const modal = document.querySelector("#review-modal");
  modal.hidden = false;
  requestAnimationFrame(() => document.querySelector("#review-modal-close").focus());
}

function closeReviewModal() {
  document.querySelector("#review-modal").hidden = true;
}

function updateStaticUi() {
  document.documentElement.lang = currentLanguage;
  document.querySelector(".documentation-label").textContent = tr("Documentation");
  document.querySelector("#search-trigger span").textContent = tr("Search documentation...");
  document.querySelector(".apps-header-link span").textContent = tr("Breeze Apps");
  document.querySelector(".playlist-header-link span").textContent = tr("Video playlist");
  document.querySelector(".sidebar-footer span").textContent = tr("Go to Breeze");
  document.querySelector("#search-input").placeholder = tr("Search guides and topics...");
  document.querySelector("#search-close").setAttribute("aria-label", tr("Close search"));
  document.querySelector("#search-trigger").setAttribute("aria-label", tr("Search documentation"));
  document.querySelector("#search-modal .search-modal-card").setAttribute("aria-label", tr("Search documentation"));
  document.querySelector("#sidebar-nav").setAttribute("aria-label", tr("Documentation"));
  document.querySelector("#menu-toggle").setAttribute("aria-label", tr("Open navigation"));
  document.querySelector("#sidebar-scrim").setAttribute("aria-label", tr("Close navigation"));
  document.querySelector("#theme-toggle").setAttribute("aria-label", tr("Toggle color theme"));
  document.querySelector("#language-select").setAttribute("aria-label", tr("Choose language"));
  document.querySelector(".language-picker .sr-only").textContent = tr("Choose language");
  document.querySelector("#milestone-trigger span").textContent = tr("Milestones");
  document.querySelector("#milestone-trigger").setAttribute("aria-label", tr("Setup milestones"));
  document.querySelector("#milestone-panel").setAttribute("aria-label", tr("Setup milestones"));
  document.querySelector(".milestone-eyebrow").textContent = tr("Setup progress");
  document.querySelector(".milestone-panel-header h2").textContent = tr("Merchant milestones");
  renderReviewModal();
  renderMilestones();
}

function closeSidebar() {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#sidebar-scrim").classList.remove("visible");
}

document.querySelector("#theme-toggle").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("breeze-theme", isDark ? "dark" : "light");
});

document.querySelector("#language-select").value = currentLanguage;
document.querySelector("#language-select").addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  updateStaticUi();
  render();
});

document.querySelector("#milestone-list").addEventListener("change", (event) => {
  const input = event.target.closest("[data-milestone-id]");
  if (!input) return;
  milestoneState = cascadeUncheck(input.dataset.milestoneId, input.checked, milestones, milestoneState);
  localStorage.setItem(MILESTONE_STORAGE_KEY, JSON.stringify(milestoneState));
  if (input.checked) celebrateMilestone();
  renderMilestones();
});
document.querySelector("#milestone-list").addEventListener("click", (event) => {
  if (event.target.closest("[data-open-review]")) openReviewModal();
});
document.querySelector("#review-modal").addEventListener("click", (event) => {
  if (
    event.target.id === "review-modal" ||
    event.target.closest("#review-modal-close") ||
    event.target.closest("#review-modal-confirm")
  ) {
    closeReviewModal();
  }
});

document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.add("open");
  document.querySelector("#sidebar-scrim").classList.add("visible");
});

document.querySelector("#sidebar-scrim").addEventListener("click", closeSidebar);
document.querySelector("#search-trigger").addEventListener("click", openSearch);
document.querySelector("#search-close").addEventListener("click", closeSearch);
document.querySelector("#search-input").addEventListener("input", (event) => filterSearch(event.target.value));
document.querySelector("#search-results").addEventListener("click", closeSearch);
document.querySelector("#search-modal").addEventListener("click", (event) => {
  if (event.target.id === "search-modal") closeSearch();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
  if (event.key === "Escape") {
    closeSearch();
    closeSidebar();
    closeReviewModal();
  }
});

window.addEventListener("hashchange", render);
updateStaticUi();
render();
