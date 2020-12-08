'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */

 const stripe = require("stripe")("sk_test_51Hw954FrzuwKlQAL5wOiTG7JLd8UBF62h6dwazPWOQCICFlOnuyOI3VoJlFiEM9NDPeUmkP1tBlGO3MtBDSdgyvm00TdZgfs1J");

 module.exports = {
   /**
    * Create a/an order record.
    *
    * @return {Object}
    */

  create: async (ctx) => {
    const{ address, amount, dishes, token, city, state } = JSON.parse(
      ctx.request.body
    );
  const stripeAmount = Math.floor(amount * 100);
  // charge on stripe
  const charge = await stripe.charges.create({
    amount: stripeAmount,
    currency: "gbp",
    description: `Order ${new Date()} by ${ctx.state.user._id}`,
    source: token,
  });

  // Register the order in the database
  const order = await strapi.services.order.create({
    user: ctx.state.user.id,
    charge_id: charge.id,
    amount: stripeAmount,
    address,
    dishes,
    city,
    state,
  });

  return order;
 },
};


/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

// module.exports = {};
