(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const l="PLKfed6RXZxdo",b=`https://www.youtube.com/playlist?list=${l}`,g=[{title:"Overview",pages:[{id:"introduction",title:"Introduction"}]},{title:"Getting Started",pages:[{id:"create-account",title:"Create SuperMoney Breeze Account",tag:"setup"},{id:"connect-shopify",title:"Connect Shopify Store with Breeze",tag:"setup"},{id:"payment-gateway",title:"Integrate Payment Gateway",tag:"setup"},{id:"testing-live",title:"Testing and Making Breeze Live",tag:"setup"}]},{title:"Checkout Configuration",pages:[{id:"shipping-rules",title:"Configuring Shipping Rules",tag:"config"},{id:"customize-checkout",title:"Customize Checkout",tag:"config"},{id:"social-handles",title:"Add Social Handles in Thank You Page",tag:"config"},{id:"analytics",title:"Connect Meta and Google Analytics",tag:"config"}]},{title:"Offers",pages:[{id:"offers",title:"Offers Configuration",tag:"offer"}]}],s={introduction:{section:"Overview",title:"Welcome to Breeze Docs",description:"Understand super.money Breeze, then use these guides to set up your account, connect your store, configure payments, and go live.",product:{title:"An AI-powered, one-click checkout for modern commerce",description:"super.money Breeze is a fast, frictionless checkout solution for D2C and enterprise brands. It helps stores reduce checkout effort, recover missing sales, improve conversions, and lower return-to-origin risk with shopper intelligence and smart payment experiences.",stats:[["40%","boost in conversion"],["30%","reduction in RTO rate"],["20%","increase in prepaid share"]],features:[["Faster checkout","Pre-filled addresses and automatic OTP reading remove friction from the purchase journey."],["Smarter RTO controls","Shopping signals, risk scoring, and targeted nudges help identify genuine buyers and reduce costly returns."],["Flexible payments","Use prepaid incentives, COD controls, payment links, and your existing payment gateway—or connect multiple gateways."],["Works with your stack","Connect the commerce and payment tools you already use without giving up flexibility."]]},playlist:!0,groups:[{title:"Getting Started",description:"Set up your Breeze account, connect your Shopify store, integrate a payment gateway, and go live.",items:["create-account","connect-shopify","payment-gateway","testing-live"]},{title:"Checkout Configuration",description:"Configure shipping rules, customize your checkout page, add social handles, and connect analytics.",items:["shipping-rules","customize-checkout","social-handles","analytics"]},{title:"Offers",description:"Create and manage promotional offers—auto-applied discounts, manual coupons, and free gifts.",items:["offers"]}]},"create-account":{section:"Getting Started",title:"Create SuperMoney Breeze Account",description:"Follow these steps to create a business account on Juspay and get started with Breeze.",video:{id:"Vw_I6EX4xBc",title:"Create account in Supermoney Breeze"},phases:[{title:"Phase 1: Getting Started",steps:[["Launch the Portal","Open the Juspay registration page in your preferred web browser.","https://portal.juspay.in/selfSignUp?ref=supermoney"],["Initiate Sign-Up","Locate and click the Sign Up with Email button to start the registration process for a new account."]]},{title:"Phase 2: Account Credentials",steps:[["Enter your Email ID","Provide the email address that will be associated with your business account."],["Set a Password","Create a secure password, select Send OTP, retrieve the one-time password from your email, and choose Verify and Continue."]]},{title:"Phase 3: Business Configuration",steps:[["Input Business Website","Paste your official website URL into the designated field. Your domain is used as the Merchant ID by default; keep it short and concise."]]},{title:"Phase 4: Completion",steps:[["Submit Details","Enter your phone number and select Submit Details. Your Juspay account is then provisioned and ready to use."]]}]},"connect-shopify":{section:"Getting Started",title:"Connect Shopify Store with Breeze",description:"Link your Shopify store to your Juspay account and authorize the configuration required to enable the Breeze checkout experience.",video:{id:"mJMRRiEKbz4",title:"Shop installation"},phases:[{title:"Phase 1: Store Onboarding",steps:[["Enter Store URL","Go to onboarding in your Juspay account and enter your Shopify store URL. The platform is detected automatically."],["Connect Store","Select Connect store to begin authentication."]]},{title:"Phase 2: Authentication",steps:[["Partner Authentication","Choose Partner authentication, sign in to Shopify, and follow the prompts to authorize the integration."]]},{title:"Phase 3: App Installation",steps:[["Install App","After returning to the Juspay dashboard, select the option to install the Shopify app."],["Finalize Installation","Choose your store, select Install, wait for configuration to finish, and use Open to verify that Breeze is live."]]}]},"payment-gateway":{section:"Getting Started",title:"How to Configure Your Payment Gateway in Breeze Checkout",description:"Integrate your preferred payment gateway and enable the payment methods needed to process customer transactions.",video:{id:"g7Y4nAo6juQ",title:"Payment gateway configuration"},phases:[{title:"Phase 1: Accessing Payment Settings",steps:[["Navigate to Control Center","In your dashboard, scroll to Payment and select PG control center."]]},{title:"Phase 2: Adding a Payment Method",steps:[["Select Payment Gateway","Choose Configure new PG. Add Cash on Delivery or search for a specific supported gateway."]]},{title:"Phase 3: Configuring Live Credentials",steps:[["Enter Merchant Details","Choose Live credentials and enter the Merchant ID from your payment gateway dashboard. Authorize the account connection."],["Provide API Keys","Copy the Key ID from your gateway’s API settings into the required dashboard field and select Proceed."]]},{title:"Phase 4: Setting Up Webhooks",steps:[["Synchronize Webhooks","Copy the generated URL to your provider’s Webhooks section, add the secret, and select events such as Payment captured or Refund created."]]},{title:"Phase 5: Finalizing Methods",steps:[["Enable Payment Options","Select Add methods, choose Card, Wallet, Net banking, or other options, and select Finish."]]}]},"testing-live":{section:"Getting Started",title:"Testing and Configuring Breeze Live",description:"Test your configured payment gateway and verify that checkout payment options and authentication flows are fully functional.",video:{id:"tBPFjNR5vHs",title:"GO LIVE ON Breeze"},phases:[{title:"Phase 1: Testing Payment Gateway",steps:[["Purchase Flow","Open your website, go to a product, select Buy Now, then test a method such as Cash on Delivery to place an order."],["Payment Method Selection","Confirm that the expected payment choices are visible and the order completes successfully."]]},{title:"Phase 2: Verifying Authentication Flow",steps:[["Checkout Initiation","Add a product to your cart and select Checkout."],["OTP Verification","While logged out, enter a phone number on checkout and confirm that the OTP arrives and can be verified."]]},{title:"Phase 3: Monitoring and Support",steps:[["System Review","Explore the storefront and confirm events and user flows work as expected."],["Technical Support","If an issue remains, contact your solution engineers for help."]]}]},"shipping-rules":{section:"Checkout Configuration",title:"Configuring Shipping Rules in Breeze Checkout",description:"Define fulfillment locations, shipping zones, profiles, and delivery rates for an accurate checkout experience.",video:{id:"7I95hmU9hF0",title:"Configure Shipping in checkout"},phases:[{title:"Phase 1: Setting Up Fulfillment Locations",steps:[["Create Fulfillment Location","In Shipping, select Create fulfillment location and enter the name, address, pin code, and contact number."],["Save Location","Choose whether it is a warehouse or store and select Save."]]},{title:"Phase 2: Defining Shipping Zones",steps:[["Add Shipping Zone","Enter a zone name and the pin codes for the region you cover."],["Save Zone","Select Add zone. A location cannot belong to overlapping zones."]]},{title:"Phase 3: Creating Shipping Profiles",steps:[["Create Shipping Profile","Open Profile, create a shipping profile, and connect your fulfillment locations."],["Enable Zone","Choose a zone and select Enable shipping zone."]]},{title:"Phase 4: Configuring Shipping Rates",steps:[["Add Shipping Rates","Define delivery cost based on cart value or weight, set payment availability, and confirm."],["Save Profile","Save the profile to publish the shipping configuration."]]},{title:"Phase 5: Specialized Shipping",steps:[["Add Express Shipping","Create an Express shipping rate and, if needed, restrict it to prepaid purchases with a payment group."]]}]},"customize-checkout":{section:"Checkout Configuration",title:"Configuring Your Checkout Experience",description:"Tailor checkout features, branding, and payment display options to better serve customers and improve the checkout flow.",video:{id:"74vAq5RRDxU",title:"Customize Checkout"},phases:[{title:"Phase 1: Accessing the Control Center",steps:[["Open Configuration Settings","Navigate to the Shop configuration tab to access checkout controls."]]},{title:"Phase 2: Managing Checkout Features",steps:[["Enable Checkout Features","Use toggles for features such as two-step checkout or international shipping banners, and select View Demo to preview them."]]},{title:"Phase 3: Branding and Customization",steps:[["Configure Branding","Upload a .webp store logo under 8 KB, customize announcements, and select Save and Publish."]]},{title:"Phase 4: Setting Up Payment Options",steps:[["Finalize Payment Page","Configure payment views and consumer finance options, then select Save and Publish to apply changes."]]}]},"social-handles":{section:"Checkout Configuration",title:"Adding Social Media Handles to Your Checkout",description:"Add your store logo and social links so customers can connect with your brand after completing a purchase.",video:{id:"AtEvMwWpfGU",title:"Social Media Configuration"},phases:[{title:"Phase 1: Accessing Settings",steps:[["Navigate to Settings","Open your dashboard and choose the Settings tab."]]},{title:"Phase 2: Branding Your Checkout",steps:[["Enable Store Logo","Enable the store-logo option and upload the image to show on checkout."]]},{title:"Phase 3: Adding Social Media",steps:[["Configure Social Handles","Select Add Social Handles, choose a platform such as Instagram, and enter its profile URL."],["Upload Social Icons","Upload a .webp icon no larger than 8 KB."],["Save Your Changes","Select Add Handle to finish the integration."]]},{title:"Phase 4: Customer Visibility",steps:[["Confirm Display","After saving, your branding and links appear on the post-purchase checkout page."]]}]},analytics:{section:"Checkout Configuration",title:"How to Integrate Meta and Google Analytics in Your Checkout",description:"Connect Meta and Google Analytics (GA4) to enable checkout tracking and accurate business reporting.",video:{id:"er1xaGey0p8",title:"ADS configuration"},phases:[{title:"Phase 1: Connecting Meta (Facebook Ads)",steps:[["Access Plugins","Sign in to your Juspay dashboard and open Plugins."],["Select Meta","Search for Meta and select Connect."],["Configure Pixel","Copy the Pixel ID from Meta Events Manager and paste it into the Juspay field."],["Generate Access Token","Generate an access token in Events Manager, paste it into the CAP access-token field, and proceed."]]},{title:"Phase 2: Connecting Google Analytics (GA4)",steps:[["Retrieve Measurement ID","In Google Analytics, go to Admin › Data Streams, select a stream, and copy its Measurement ID into Juspay."],["Create API Secret","Under Measurement Protocol API secrets, create a secret and enter it in the Juspay dashboard to finalize the connection."]]}]},offers:{section:"Offers",title:"How to Configure Offers in Breeze Checkout",description:"Create automated discounts, manual coupons, and free-gift promotions to improve checkout conversion.",video:{id:"BavQM9PlhPM",title:"Configure Offers in Breeze checkout"},phases:[{title:"Phase 1: Auto-Applied Offers",steps:[["Create New Offer","In Offers, choose an auto-applied offer for your store."],["Define Discount Details","Add a coupon code, discount type and value, plus any cap."],["Set Advanced Conditions","Configure usage limits, minimum order value, payment methods, products, or UTM restrictions."]]},{title:"Phase 2: Manual Offers",steps:[["Create Manual Discount","Create a manually applied offer and enter its name and discount amount."],["Review and Activate","Review the details and publish the offer."]]},{title:"Phase 3: Free Gifts",steps:[["Define Free Gift","Select eligible products or collections and add a promotion description."],["Configure Eligibility","Set product and cart conditions, then review and publish."]]}]}},u=g.flatMap(t=>t.pages.map(e=>({...e,section:t.title})));function f(){const t=window.location.hash.replace(/^#/,"");return s[t]?t:"introduction"}function d(t){return u.find(e=>e.id===t)}function p(){return'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v6H5V5h6"/></svg>'}function w(t){const e=t.playlist,i=e?`https://www.youtube-nocookie.com/embed/videoseries?list=${l}`:`https://www.youtube-nocookie.com/embed/${t.video.id}?rel=0`,n=e?b:`https://www.youtube.com/watch?v=${t.video.id}&list=${l}`,o=e?"Breeze Onboarding — full video playlist":t.video.title;return`
    <h2 id="video-tutorial">Video tutorial</h2>
    <div class="video-card">
      <div class="video-frame">
        <iframe
          src="${i}"
          title="${o}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-caption">
        <span>${o}</span>
        <a href="${n}" target="_blank" rel="noreferrer">Open on YouTube ${p()}</a>
      </div>
    </div>
  `}function C(t){return t.groups.map(e=>`
        <section>
          <h2 id="${m(e.title)}">${e.title}</h2>
          <p>${e.description}</p>
          <div class="overview-grid">
            ${e.items.map(i=>{const n=s[i],o=d(i);return`
                  <a class="overview-card" href="#${i}">
                    <span>${o.title}</span>
                    <small>${n.description}</small>
                  </a>
                `}).join("")}
          </div>
        </section>
      `).join("")}function P(t){return t?`
    <section class="product-overview" aria-labelledby="about-breeze">
      <div class="product-eyebrow">About the product</div>
      <h2 id="about-breeze">${t.title}</h2>
      <p class="product-description">${t.description}</p>
      <div class="product-stats">
        ${t.stats.map(([e,i])=>`
              <div class="product-stat">
                <strong>${e}</strong>
                <span>${i}</span>
              </div>
            `).join("")}
      </div>
      <div class="product-features">
        ${t.features.map(([e,i])=>`
              <div class="product-feature">
                <span class="product-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m7 12 3 3 7-7"/><circle cx="12" cy="12" r="9"/></svg>
                </span>
                <div>
                  <strong>${e}</strong>
                  <p>${i}</p>
                </div>
              </div>
            `).join("")}
      </div>
      <a class="product-source-link" href="https://super.money/breeze" target="_blank" rel="noreferrer">
        Explore super.money Breeze ${p()}
      </a>
    </section>
  `:""}function k(t){return`
    <h2 id="steps">Steps</h2>
    ${t.phases.map(e=>`
          <section>
            <h3 id="${m(e.title)}">${e.title}</h3>
            <ol class="phase-list">
              ${e.steps.map(([i,n,o])=>`<li>${o?`<a class="step-link" href="${o}" target="_blank" rel="noreferrer"><strong>${i}</strong>${p()}</a>`:`<strong>${i}</strong>`} — ${n}</li>`).join("")}
            </ol>
          </section>
        `).join("")}
    <div class="callout">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>
      <span>Keep the video open while working through the steps. Dashboard labels may change slightly as Breeze evolves.</span>
    </div>
  `}function $(t){const e=u.map(a=>a.id),i=e.indexOf(t),n=e[i-1],o=e[i+1];return`
    <nav class="page-nav" aria-label="Page navigation">
      ${n?`<a href="#${n}"><small>Previous</small><span>← ${d(n).title}</span></a>`:"<span></span>"}
      ${o?`<a href="#${o}"><small>Next</small><span>${d(o).title} →</span></a>`:"<span></span>"}
    </nav>
  `}function m(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function A(){const t=f(),e=document.querySelector("#sidebar-nav");e.innerHTML=g.map(i=>`
        <section class="nav-section">
          <p class="nav-section-title">${i.title}</p>
          ${i.pages.map(n=>`
                <a class="nav-link ${n.id===t?"active":""}" href="#${n.id}">
                  <span>${n.title}</span>
                  ${n.tag?`<span class="tag ${n.tag}">${n.tag.toUpperCase()}</span>`:""}
                </a>
              `).join("")}
        </section>
      `).join("")}function z(){const t=[...document.querySelectorAll("#article h2, #article h3")];document.querySelector("#toc").innerHTML=`
    <div class="toc-title">On this page</div>
    ${t.map(e=>`<a href="#${e.id}" ${e.tagName==="H3"?'style="padding-left:10px"':""}>${e.textContent}</a>`).join("")}
  `}function y(){const t=f(),e=s[t],i=document.querySelector("#article");document.title=`${e.title} — Breeze Docs`,i.innerHTML=`
    <div class="breadcrumbs">
      <a href="#introduction">Docs</a><span>/</span><span>${e.section}</span>
    </div>
    <h1>${e.title}</h1>
    <p class="lede">${e.description}</p>
    ${P(e.product)}
    ${w(e)}
    ${e.groups?C(e):k(e)}
    ${$(t)}
  `,A(),z(),h(),window.scrollTo({top:0,behavior:"instant"})}function v(){const t=document.querySelector("#search-modal");t.hidden=!1;const e=document.querySelector("#search-input");e.value="",S(""),requestAnimationFrame(()=>e.focus())}function r(){document.querySelector("#search-modal").hidden=!0}function L(t){const e=s[t],i=e.phases?e.phases.flatMap(n=>[n.title,...n.steps.flat()]).join(" "):e.groups.flatMap(n=>[n.title,n.description]).join(" ");return`${e.title} ${e.description} ${i}`}function S(t){const e=t.trim().toLowerCase(),i=u.filter(n=>L(n.id).toLowerCase().includes(e));document.querySelector("#search-results").innerHTML=i.length?i.map(n=>`
            <a class="search-result" href="#${n.id}">
              <strong>${n.title}</strong>
              <span>${s[n.id].description}</span>
            </a>
          `).join(""):`<div class="search-empty">No documentation found for “${t}”.</div>`}function h(){document.querySelector("#sidebar").classList.remove("open"),document.querySelector("#sidebar-scrim").classList.remove("visible")}document.querySelector("#theme-toggle").addEventListener("click",()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("breeze-theme",t?"dark":"light")});document.querySelector("#menu-toggle").addEventListener("click",()=>{document.querySelector("#sidebar").classList.add("open"),document.querySelector("#sidebar-scrim").classList.add("visible")});document.querySelector("#sidebar-scrim").addEventListener("click",h);document.querySelector("#search-trigger").addEventListener("click",v);document.querySelector("#search-close").addEventListener("click",r);document.querySelector("#search-input").addEventListener("input",t=>S(t.target.value));document.querySelector("#search-results").addEventListener("click",r);document.querySelector("#search-modal").addEventListener("click",t=>{t.target.id==="search-modal"&&r()});document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="k"&&(t.preventDefault(),v()),t.key==="Escape"&&(r(),h())});window.addEventListener("hashchange",y);y();
