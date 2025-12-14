export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  res.status(200).json({
    serviceId: process.env.SERVICE_ID,
    templateOwner: process.env.TEMPLATE_OWNER,
    templateAutoReply: process.env.TEMPLATE_AUTOREPLY,
    publicKey: process.env.PUBLIC_KEY
  });
}
