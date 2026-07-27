const PLAYLIST_ID = "PLKfed6RXZxdo";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

const sections = [
  {
    title: "Overview",
    pages: [{ id: "introduction", title: "Introduction" }],
  },
  {
    title: "Getting Started",
    pages: [
      { id: "create-account", title: "Create SuperMoney Breeze Account", tag: "setup" },
      { id: "connect-shopify", title: "Connect Shopify Store with Breeze", tag: "setup" },
      { id: "payment-gateway", title: "Integrate Payment Gateway", tag: "setup" },
      { id: "testing-live", title: "Testing and Making Breeze Live", tag: "setup" },
    ],
  },
  {
    title: "Checkout Configuration",
    pages: [
      { id: "shipping-rules", title: "Configuring Shipping Rules", tag: "config" },
      { id: "customize-checkout", title: "Customize Checkout", tag: "config" },
      { id: "social-handles", title: "Add Social Handles in Thank You Page", tag: "config" },
      { id: "analytics", title: "Connect Meta and Google Analytics", tag: "config" },
    ],
  },
  {
    title: "Offers",
    pages: [{ id: "offers", title: "Offers Configuration", tag: "offer" }],
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
    video: { id: "Vw_I6EX4xBc", title: "Create account in Supermoney Breeze" },
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
    video: { id: "mJMRRiEKbz4", title: "Shop installation" },
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
    ],
  },
  "payment-gateway": {
    section: "Getting Started",
    title: "How to Configure Your Payment Gateway in Breeze Checkout",
    description:
      "Integrate your preferred payment gateway and enable the payment methods needed to process customer transactions.",
    video: { id: "g7Y4nAo6juQ", title: "Payment gateway configuration" },
    phases: [
      {
        title: "Phase 1: Accessing Payment Settings",
        steps: [["Navigate to Control Center", "In your dashboard, scroll to Payment and select PG control center."]],
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
    video: { id: "tBPFjNR5vHs", title: "GO LIVE ON Breeze" },
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
    ],
  },
  "shipping-rules": {
    section: "Checkout Configuration",
    title: "Configuring Shipping Rules in Breeze Checkout",
    description:
      "Define fulfillment locations, shipping zones, profiles, and delivery rates for an accurate checkout experience.",
    video: { id: "7I95hmU9hF0", title: "Configure Shipping in checkout" },
    phases: [
      {
        title: "Phase 1: Setting Up Fulfillment Locations",
        steps: [
          ["Create Fulfillment Location", "In Shipping, select Create fulfillment location and enter the name, address, pin code, and contact number."],
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
    video: { id: "74vAq5RRDxU", title: "Customize Checkout" },
    phases: [
      {
        title: "Phase 1: Accessing the Control Center",
        steps: [["Open Configuration Settings", "Navigate to the Shop configuration tab to access checkout controls."]],
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
    video: { id: "AtEvMwWpfGU", title: "Social Media Configuration" },
    phases: [
      {
        title: "Phase 1: Accessing Settings",
        steps: [["Navigate to Settings", "Open your dashboard and choose the Settings tab."]],
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
    video: { id: "er1xaGey0p8", title: "ADS configuration" },
    phases: [
      {
        title: "Phase 1: Connecting Meta (Facebook Ads)",
        steps: [
          ["Access Plugins", "Sign in to your Juspay dashboard and open Plugins."],
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
    video: { id: "BavQM9PlhPM", title: "Configure Offers in Breeze checkout" },
    phases: [
      {
        title: "Phase 1: Auto-Applied Offers",
        steps: [
          ["Create New Offer", "In Offers, choose an auto-applied offer for your store."],
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
};

const flatPages = sections.flatMap((section) =>
  section.pages.map((page) => ({ ...page, section: section.title })),
);

function currentId() {
  const id = window.location.hash.replace(/^#/, "");
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
  const title = isPlaylist ? "Breeze Onboarding — full video playlist" : page.video.title;

  return `
    <h2 id="video-tutorial">Video tutorial</h2>
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
        <a href="${href}" target="_blank" rel="noreferrer">Open on YouTube ${externalIcon()}</a>
      </div>
    </div>
  `;
}

function renderIntroduction(page) {
  return page.groups
    .map(
      (group) => `
        <section>
          <h2 id="${slug(group.title)}">${group.title}</h2>
          <p>${group.description}</p>
          <div class="overview-grid">
            ${group.items
              .map((id) => {
                const item = pages[id];
                const meta = pageMeta(id);
                return `
                  <a class="overview-card" href="#${id}">
                    <span>${meta.title}</span>
                    <small>${item.description}</small>
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
      <div class="product-eyebrow">About the product</div>
      <h2 id="about-breeze">${product.title}</h2>
      <p class="product-description">${product.description}</p>
      <div class="product-stats">
        ${product.stats
          .map(
            ([value, label]) => `
              <div class="product-stat">
                <strong>${value}</strong>
                <span>${label}</span>
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
                  <strong>${title}</strong>
                  <p>${description}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
      <a class="product-source-link" href="https://super.money/breeze" target="_blank" rel="noreferrer">
        Explore super.money Breeze ${externalIcon()}
      </a>
    </section>
  `;
}

function renderPhases(page) {
  return `
    <h2 id="steps">Steps</h2>
    ${page.phases
      .map(
        (phase) => `
          <section>
            <h3 id="${slug(phase.title)}">${phase.title}</h3>
            <ol class="phase-list">
              ${phase.steps
                .map(
                  ([title, copy, href]) =>
                    `<li>${
                      href
                        ? `<a class="step-link" href="${href}" target="_blank" rel="noreferrer"><strong>${title}</strong>${externalIcon()}</a>`
                        : `<strong>${title}</strong>`
                    } — ${copy}</li>`,
                )
                .join("")}
            </ol>
          </section>
        `,
      )
      .join("")}
    <div class="callout">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>Keep the video open while working through the steps. Dashboard labels may change slightly as Breeze evolves.</span>
    </div>
  `;
}

function renderPageNav(id) {
  const order = flatPages.map((page) => page.id);
  const index = order.indexOf(id);
  const previous = order[index - 1];
  const next = order[index + 1];

  return `
    <nav class="page-nav" aria-label="Page navigation">
      ${previous ? `<a href="#${previous}"><small>Previous</small><span>← ${pageMeta(previous).title}</span></a>` : "<span></span>"}
      ${next ? `<a href="#${next}"><small>Next</small><span>${pageMeta(next).title} →</span></a>` : "<span></span>"}
    </nav>
  `;
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderSidebar() {
  const id = currentId();
  const nav = document.querySelector("#sidebar-nav");
  nav.innerHTML = sections
    .map(
      (section) => `
        <section class="nav-section">
          <p class="nav-section-title">${section.title}</p>
          ${section.pages
            .map(
              (page) => `
                <a class="nav-link ${page.id === id ? "active" : ""}" href="#${page.id}">
                  <span>${page.title}</span>
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
    <div class="toc-title">On this page</div>
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
  document.title = `${page.title} — Breeze Docs`;

  article.innerHTML = `
    <div class="breadcrumbs">
      <a href="#introduction">Docs</a><span>/</span><span>${page.section}</span>
    </div>
    <h1>${page.title}</h1>
    <p class="lede">${page.description}</p>
    ${renderProductOverview(page.product)}
    ${videoCard(page)}
    ${page.groups ? renderIntroduction(page) : renderPhases(page)}
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
  const page = pages[id];
  const phaseText = page.phases
    ? page.phases.flatMap((phase) => [phase.title, ...phase.steps.flat()]).join(" ")
    : page.groups.flatMap((group) => [group.title, group.description]).join(" ");
  return `${page.title} ${page.description} ${phaseText}`;
}

function filterSearch(query) {
  const value = query.trim().toLowerCase();
  const results = flatPages.filter((page) =>
    searchableText(page.id).toLowerCase().includes(value),
  );
  document.querySelector("#search-results").innerHTML = results.length
    ? results
        .map(
          (page) => `
            <a class="search-result" href="#${page.id}">
              <strong>${page.title}</strong>
              <span>${pages[page.id].description}</span>
            </a>
          `,
        )
        .join("")
    : `<div class="search-empty">No documentation found for “${query}”.</div>`;
}

function closeSidebar() {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#sidebar-scrim").classList.remove("visible");
}

document.querySelector("#theme-toggle").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("breeze-theme", isDark ? "dark" : "light");
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
  }
});

window.addEventListener("hashchange", render);
render();
