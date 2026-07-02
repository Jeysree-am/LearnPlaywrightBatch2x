/**
 * Callback Hell / Pyramid of Doom
 *
 * A full end-to-end purchase flow with 20 steps,
 * demonstrating how deeply nested callbacks become
 * unreadable and unmaintainable.
 */

function step1_openBrowser(cb) {
    setTimeout(() => {
        console.log("Step 1: Browser opened");
        cb();
    }, 500);
}

function step2_navigateToSite(cb) {
    setTimeout(() => {
        console.log("Step 2: Navigated to store.com");
        cb();
    }, 500);
}

function step3_searchProduct(cb) {
    setTimeout(() => {
        console.log("Step 3: Searched for 'wireless keyboard'");
        cb();
    }, 500);
}

function step4_selectProduct(cb) {
    setTimeout(() => {
        console.log("Step 4: Selected product from results");
        cb();
    }, 500);
}

function step5_addToCart(cb) {
    setTimeout(() => {
        console.log("Step 5: Added product to cart");
        cb();
    }, 500);
}

function step6_viewCart(cb) {
    setTimeout(() => {
        console.log("Step 6: Viewed cart summary");
        cb();
    }, 500);
}

function step7_applyCoupon(cb) {
    setTimeout(() => {
        console.log("Step 7: Applied coupon code SAVE10");
        cb();
    }, 500);
}

function step8_proceedToCheckout(cb) {
    setTimeout(() => {
        console.log("Step 8: Proceeded to checkout");
        cb();
    }, 500);
}

function step9_enterShippingAddress(cb) {
    setTimeout(() => {
        console.log("Step 9: Entered shipping address");
        cb();
    }, 500);
}

function step10_selectShippingMethod(cb) {
    setTimeout(() => {
        console.log("Step 10: Selected express shipping");
        cb();
    }, 500);
}

function step11_enterPaymentInfo(cb) {
    setTimeout(() => {
        console.log("Step 11: Entered credit card details");
        cb();
    }, 500);
}

function step12_applyBillingAddress(cb) {
    setTimeout(() => {
        console.log("Step 12: Applied billing address");
        cb();
    }, 500);
}

function step13_reviewOrder(cb) {
    setTimeout(() => {
        console.log("Step 13: Reviewed order summary");
        cb();
    }, 500);
}

function step14_placeOrder(cb) {
    setTimeout(() => {
        console.log("Step 14: Order placed");
        cb();
    }, 500);
}

function step15_processPayment(cb) {
    setTimeout(() => {
        console.log("Step 15: Payment processed successfully");
        cb();
    }, 500);
}

function step16_confirmOrder(cb) {
    setTimeout(() => {
        console.log("Step 16: Order confirmed — ID #12345");
        cb();
    }, 500);
}

function step17_sendConfirmationEmail(cb) {
    setTimeout(() => {
        console.log("Step 17: Confirmation email sent");
        cb();
    }, 500);
}

function step18_updateInventory(cb) {
    setTimeout(() => {
        console.log("Step 18: Inventory updated");
        cb();
    }, 500);
}

function step19_generateInvoice(cb) {
    setTimeout(() => {
        console.log("Step 19: Invoice generated");
        cb();
    }, 500);
}

function step20_logout(cb) {
    setTimeout(() => {
        console.log("Step 20: Logged out. Purchase flow complete!");
        cb();
    }, 500);
}

// ============================================================
// CALLBACK HELL / PYRAMID OF DOOM
//
// 20 levels of nesting — impossible to read, debug, or maintain.
// This is why Promises and async/await exist.
// ============================================================

step1_openBrowser(function () {
    step2_navigateToSite(function () {
        step3_searchProduct(function () {
            step4_selectProduct(function () {
                step5_addToCart(function () {
                    step6_viewCart(function () {
                        step7_applyCoupon(function () {
                            step8_proceedToCheckout(function () {
                                step9_enterShippingAddress(function () {
                                    step10_selectShippingMethod(function () {
                                        step11_enterPaymentInfo(function () {
                                            step12_applyBillingAddress(function () {
                                                step13_reviewOrder(function () {
                                                    step14_placeOrder(function () {
                                                        step15_processPayment(function () {
                                                            step16_confirmOrder(function () {
                                                                step17_sendConfirmationEmail(function () {
                                                                    step18_updateInventory(function () {
                                                                        step19_generateInvoice(function () {
                                                                            step20_logout(function () {
                                                                                console.log("\n✓ All 20 steps completed!");
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
