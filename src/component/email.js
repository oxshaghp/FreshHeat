import emailjs from "@emailjs/browser";
import { auth } from "../Config/Firebase";

export const sendReceipt = async (cartItems) => {
  const user = auth.currentUser;
  if (!user) return;

  const orderList = cartItems
    .map((item) => `- ${item.name} ($${item.price.toFixed(2)})`)
    .join("\n");

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const templateParams = {
    user_name: user.displayName || "Customer",
    user_email: user.email,
    order_list: orderList,
    total: total.toFixed(2),
  };

  console.log("Sending receipt to:", user.email);

  try {
    const res = await emailjs.send(
      "service_f4f0tfh", // ✅ Your working service ID
      "template_gt7yl0j", // ✅ Your template ID
      templateParams,
      "G-cVBPAdIKdMmXdC1" // ✅ Your public key (keep it safe)
    );
    console.log("✅ Email sent successfully:", res.status);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
