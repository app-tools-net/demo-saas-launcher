/**
 * js/app.js
 * Core application script for the SaaS Launcher boilerplate.
 */

export const SaaSApp = {
    // INTEGRATION STEP 1: Replace this URL placeholder with your live Stripe Checkout payment link
    billingRedirectUrl: "https://stripe.com",

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindActionEvents();
        });
    },

    bindActionEvents() {
        const billingButtons = document.querySelectorAll('[data-plan]');
        
        billingButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedPlan = button.getAttribute('data-plan');
                this.executeBillingRedirect(selectedPlan, button);
            });
        });
    },

    executeBillingRedirect(planName, buttonElement) {
        console.log(`Initializing custom session checkout router for: ${planName}`);
        
        // Visual button feedback while redirection takes place
        buttonElement.innerText = "Processing Secure Link...";
        buttonElement.disabled = true;
        buttonElement.style.opacity = "0.7";

        // TESTING NOTE: For seamless out-of-the-box local testing, this script redirects to your local 
        // dashboard file after 1.5 seconds. Once your live Stripe link is dropped into the 'billingRedirectUrl' 
        // variable above, delete the setTimeout block below and uncomment: window.location.href = this.billingRedirectUrl;
        setTimeout(() => {
            window.location.href = "./dashboard.html";
        }, 1500);
    }
};

SaaSApp.init();
