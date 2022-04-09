// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
router.get((req, res) => {
  res.json({ msg: "Hola mundo" });
});

export default router;

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
