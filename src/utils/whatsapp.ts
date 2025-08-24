export const openWhatsApp = (phoneNumber: string, message?: string) => {
  const formattedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  const whatsappUrl = `https://wa.me/${phoneNumber}${formattedMessage}`;
  
  // Try multiple methods to ensure WhatsApp opens
  try {
    // Method 1: Standard wa.me link
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Method 2: If blocked, try WhatsApp protocol (mobile)
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message || '')}`;
    }
  } catch (error) {
    // Method 3: Fallback to direct URL assignment
    window.location.href = whatsappUrl;
  }
};