/**
 * Centralized image alt text management for SEO optimization
 * Ensures all images have descriptive, accessible alt text
 */

export const imageAltTexts: Record<string, string> = {
  // Feature images
  'Images/1-1.png': 'MelloMinds appointment scheduling feature interface',
  'Images/2-2.png': 'Client management dashboard with contact information',
  'Images/3-3071.png': 'Session notes and documentation tools for therapists',
  'Images/4-7589.png': 'Payment and billing management system',
  'Images/5-137477988.png': 'Therapy practice analytics and reporting dashboard',
  'Images/6-333899.png': 'Secure chat and communication features',
  'Images/9.png': 'MelloMinds platform overview',
  'Images/2345678o9p.png': 'Therapy practice management workflow',

  // Service images
  'Images/Booking & Calendar Management.webp': 'Booking and calendar management for therapy appointments',
  'Images/Client Management.webp': 'Comprehensive client management system',
  'Images/Secure Chat.webp': 'Encrypted secure chat for therapist-client communication',
  'Images/Session Notes.webp': 'Digital session notes and documentation',
  'Images/Payments & Invoicing.webp': 'Payment processing and invoice generation',
  'Images/Analytics & Reports.webp': 'Practice analytics and performance reports',

  // Logo and branding
  'Images/MelloFevicon.png': 'MelloMinds logo - therapy practice management platform',
  'Images/og-image-mellominds.png': 'MelloMinds - therapy practice management software for Indian professionals',

  // Mascot
  'Images/Mascot.png': 'Mello mascot character representing MelloMinds brand',
};

/**
 * Get alt text for an image
 * @param imagePath - Path to the image
 * @returns Alt text for the image, or a default descriptive text if not found
 */
export function getImageAltText(imagePath: string): string {
  return imageAltTexts[imagePath] || generateDefaultAltText(imagePath);
}

/**
 * Generate a default alt text from image filename
 * @param imagePath - Path to the image
 * @returns Generated alt text
 */
function generateDefaultAltText(imagePath: string): string {
  const filename = imagePath.split('/').pop() || 'image';
  const name = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  return `MelloMinds ${name}`;
}

/**
 * Image component with automatic alt text
 * Usage: <OptimizedImage src="Images/1-1.png" />
 */
export interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  ...props
}) => {
  const altText = alt || getImageAltText(src);
  return <img src={src} alt={altText} {...props} />;
};
