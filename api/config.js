export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  ({
    main: {
      serviceId: process.env.SERVICE_ID,
      templateOwner: process.env.TEMPLATE_OWNER,
      templateAutoReply: process.env.TEMPLATE_AUTOREPLY,
      publicKey: process.env.PUBLIC_KEY
    },
    otp: {
      serviceId: process.env.OTP_SERVICE_ID,
      templateOtp: process.env.OTP_TEMPLATE_ID,
      publicKey: process.env.OTP_PUBLIC_KEY
    }
  });
}
