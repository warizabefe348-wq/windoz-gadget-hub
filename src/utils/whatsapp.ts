export const openWhatsApp = (phoneNumber: string, message?: string) => {
  const formattedMessage = message ? encodeURIComponent(message) : '';
  
  // Create different URL formats
  const wameUrl = `https://wa.me/${phoneNumber}${message ? `?text=${formattedMessage}` : ''}`;
  const whatsappProtocol = `whatsapp://send?phone=${phoneNumber}${message ? `&text=${formattedMessage}` : ''}`;
  
  console.log('Attempting to open WhatsApp with:', { phoneNumber, message, wameUrl });
  
  // Try multiple methods
  try {
    // Method 1: Try wa.me in new tab
    const newWindow = window.open(wameUrl, '_blank', 'noopener,noreferrer');
    
    if (newWindow && !newWindow.closed) {
      console.log('WhatsApp opened successfully');
      return;
    }
  } catch (error) {
    console.log('Method 1 failed:', error);
  }
  
  try {
    // Method 2: Try WhatsApp protocol
    window.location.href = whatsappProtocol;
    console.log('Trying WhatsApp protocol');
    return;
  } catch (error) {
    console.log('Method 2 failed:', error);
  }
  
  try {
    // Method 3: Force navigation to wa.me
    window.location.href = wameUrl;
    console.log('Forcing navigation to wa.me');
    return;
  } catch (error) {
    console.log('Method 3 failed:', error);
  }
  
  // Method 4: Show user-friendly fallback
  const phoneDisplay = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
  const fallbackMessage = `WhatsApp couldn't open automatically in this environment.\n\nPlease contact us directly on WhatsApp:\n📱 ${phoneDisplay}\n\n${message ? `Message: ${message}` : 'Let us know what product you\'re interested in!'}`;
  
  alert(fallbackMessage);
  
  // Try to copy phone number to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      console.log('Phone number copied to clipboard');
    }).catch(() => {
      console.log('Failed to copy to clipboard');
    });
  }
};