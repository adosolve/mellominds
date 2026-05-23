/**
 * Route Configuration and URL Management
 * Centralized routing configuration for the entire application
 */

export interface RouteConfig {
  path: string;
  name: string;
  label: string;
  description: string;
  icon?: string;
  isPublic: boolean;
  showInNav: boolean;
  showInFooter: boolean;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

/**
 * All application routes
 */
export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    name: 'home',
    label: 'Home',
    description: 'MelloMinds - Therapy Practice Management Software',
    isPublic: true,
    showInNav: true,
    showInFooter: true,
  },
  FEATURES: {
    path: '/features',
    name: 'features',
    label: 'Features',
    description: 'Discover MelloMinds features',
    isPublic: true,
    showInNav: true,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Features', path: '/features' },
    ],
  },
  PRICING: {
    path: '/pricing',
    name: 'pricing',
    label: 'Pricing',
    description: 'MelloMinds pricing plans',
    isPublic: true,
    showInNav: true,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  FAQS: {
    path: '/faqs',
    name: 'faqs',
    label: 'FAQs',
    description: 'Frequently Asked Questions',
    isPublic: true,
    showInNav: false,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQs', path: '/faqs' },
    ],
  },
  CONTACT: {
    path: '/contact',
    name: 'contact',
    label: 'Contact Us',
    description: 'Get in touch with MelloMinds',
    isPublic: true,
    showInNav: false,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  PRIVACY_POLICY: {
    path: '/privacy-policy',
    name: 'privacy-policy',
    label: 'Privacy Policy',
    description: 'MelloMinds Privacy Policy',
    isPublic: true,
    showInNav: false,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
  TERMS_OF_SERVICE: {
    path: '/terms-of-service',
    name: 'terms-of-service',
    label: 'Terms of Service',
    description: 'MelloMinds Terms of Service',
    isPublic: true,
    showInNav: false,
    showInFooter: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms-of-service' },
    ],
  },
};

/**
 * Hash-based sections (for smooth scrolling within pages)
 */
export const HASH_SECTIONS = {
  FEATURES: '#features',
  PRICING: '#pricing',
  FAQS: '#faqs',
  CONTACT: '#contact',
  SECURITY: '#security',
  ENTERPRISE: '#enterprise',
} as const;

/**
 * Get route by name
 */
export function getRoute(name: keyof typeof ROUTES): RouteConfig {
  return ROUTES[name];
}

/**
 * Get all navigation routes
 */
export function getNavRoutes(): RouteConfig[] {
  return Object.values(ROUTES).filter((route) => route.showInNav);
}

/**
 * Get all footer routes
 */
export function getFooterRoutes(): RouteConfig[] {
  return Object.values(ROUTES).filter((route) => route.showInFooter);
}

/**
 * Get public routes
 */
export function getPublicRoutes(): RouteConfig[] {
  return Object.values(ROUTES).filter((route) => route.isPublic);
}

/**
 * Build full URL with domain
 */
export function buildFullUrl(path: string, domain: string = 'https://mellominds.co.in'): string {
  return `${domain}${path}`;
}

/**
 * Build URL with hash section
 */
export function buildUrlWithHash(path: string, hash: string): string {
  return `${path}${hash}`;
}

/**
 * Check if current path matches route
 */
export function isCurrentRoute(currentPath: string, routePath: string): boolean {
  return currentPath === routePath || currentPath.startsWith(routePath + '/');
}

/**
 * Get breadcrumbs for current route
 */
export function getBreadcrumbs(routeName: keyof typeof ROUTES): Array<{ name: string; path: string }> {
  const route = ROUTES[routeName];
  return route.breadcrumbs || [{ name: 'Home', path: '/' }];
}

/**
 * Scroll to hash section
 */
export function scrollToSection(hash: string): void {
  if (typeof window === 'undefined') return;

  // Remove # if present
  const sectionId = hash.startsWith('#') ? hash.slice(1) : hash;
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Handle navigation with URL update
 */
export function navigateToSection(path: string, hash?: string): void {
  if (typeof window === 'undefined') return;

  const fullPath = hash ? `${path}${hash}` : path;
  window.history.pushState(null, '', fullPath);

  if (hash) {
    setTimeout(() => scrollToSection(hash), 100);
  }
}

/**
 * Get current page name from pathname
 */
export function getCurrentPageName(pathname: string): keyof typeof ROUTES | null {
  for (const [key, route] of Object.entries(ROUTES)) {
    if (route.path === pathname) {
      return key as keyof typeof ROUTES;
    }
  }
  return null;
}
