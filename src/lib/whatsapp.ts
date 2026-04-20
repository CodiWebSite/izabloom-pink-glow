// Centralized WhatsApp helper. Number is read from site_settings (contact.whatsapp).
// Fallback to the owner's number if settings haven't loaded yet.
export const DEFAULT_WHATSAPP = "+40769291604";

const sanitize = (n: string) => n.replace(/[^\d]/g, "");

export const buildWhatsAppLink = (phone: string, message: string) => {
  return `https://wa.me/${sanitize(phone)}?text=${encodeURIComponent(message)}`;
};

export const buildProductOrderMessage = (productName: string, price: number) => {
  return `Bună! Aș dori să comand:\n\n🕯️ ${productName}\n💰 Preț: ${price} RON\n\nVă rog să-mi confirmați disponibilitatea și detaliile de livrare. Mulțumesc!`;
};
