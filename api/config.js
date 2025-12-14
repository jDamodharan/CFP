export default function handler(req, res) {
  res.status(200).json({
    serviceId: process.env.SERVICE_ID,
    templateOwner: process.env.TEMPLATE_OWNER,
    templateAutoReply: process.env.TEMPLATE_AUTOREPLY,
    publicKey: process.env.PUBLIC_KEY
  });
}
