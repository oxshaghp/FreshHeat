import emailjs from "@emailjs/browser";
import { auth } from "../Config/Firebase";

export const sendReceipt = async (cartItems, formData) => {
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

    // 👇 New fields from your CheckOutForm
    first_name: formData.firstName,
    last_name: formData.lastName,
    phone: formData.telephone,
    address: formData.address,
    city: formData.city,
  };

  console.log("📧 Sending receipt to:", user.email);
  console.log("Form data:", formData);

  try {
    const res = await emailjs.send(
      "service_f4f0tfh",
      "template_gt7yl0j",
      templateParams,
      "G-cVBPAdIKdMmXdC1"
    );
    console.log("✅ Email sent successfully:", res.status);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
