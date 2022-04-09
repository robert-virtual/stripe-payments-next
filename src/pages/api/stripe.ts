import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import nc from "next-connect";
const router = nc<NextApiRequest, NextApiResponse>();
let stripe: Stripe;
try {
  stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, {
    typescript: true,
    apiVersion: "2020-08-27",
  });
} catch (error) {
  throw new Error("No se ncontro la clave privada de stripe");
}

const storeItems = new Map([
  [1, { priceInCents: 1000, name: "Learn next js Course" }],
  [2, { priceInCents: 2000, name: "Learn Vue js Course" }],
]);

router.post((req, res) => {
  res.json({ msg: "create checkout session" });
});
router.get((req, res) => {
  res.json({ msg: "Hola mundo" });
});

export default router;
