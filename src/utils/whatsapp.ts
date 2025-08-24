export const openWhatsApp = (phoneNumber: string, message?: string) => {
  const formattedMessage = message ? encodeURIComponent(message) : '';
  
  // Create different URL formats
  const wameUrl = `https://wa.me/${phoneNumber}${message ? `?text=${formattedMessage}` : ''}`;
  const whatsappProtocol = `whatsapp://send?phone=${phoneNumber}${message ? `&text=${formattedMessage}` : ''}`;
  const webWhatsapp = `https://web.whatsapp.com/send?phone=${phoneNumber}${message ? `&text=${formattedMessage}` : ''}`;
  
  // Function to try opening URL
  const tryOpenUrl = (url: string, target: string = '_blank') => {
    try {
      const newWindow = window.open(url, target, 'noopener,noreferrer');
      if (newWindow && !newWindow.closed) {
        return true;
      }
    } catch (error) {
      console.log('Failed to open:', url);
    }
    return false;
  };
  
  // Method 1: Try wa.me in new tab
  if (tryOpenUrl(wameUrl)) return;
  
  // Method 2: Try WhatsApp protocol (for mobile apps)
  if (tryOpenUrl(whatsappProtocol, '_self')) return;
  
  // Method 3: Try web WhatsApp
  if (tryOpenUrl(webWhatsapp)) return;
  
  // Method 4: Force navigation to wa.me
  try {
    window.location.href = wameUrl;
  } catch (error) {
    // Method 5: Ultimate fallback - copy number and show alert
    navigator.clipboard?.writeText(phoneNumber).then(() => {
      alert(`WhatsApp couldn't open automatically. Phone number ${phoneNumber} has been copied to clipboard. You can paste it in WhatsApp manually.`);
    }).catch(() => {
      alert(`Please contact us via WhatsApp at: ${phoneNumber}${message ? `\n\nMessage: ${message}` : ''}`);
    });
  }
};