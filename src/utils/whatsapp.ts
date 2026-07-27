const internationalPhonePattern = /^\d{10,15}$/;

export function buildWhatsAppUrl(
  phoneNumber: string,
  message: string,
): string | null {
  const normalizedPhone = phoneNumber.trim();

  if (!internationalPhonePattern.test(normalizedPhone)) {
    return null;
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
