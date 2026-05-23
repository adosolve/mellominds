# MelloMinds Routing & URL Management Guide

## Overview

This guide covers the complete routing and URL management system implemented for the MelloMinds website. The system provides centralized route configuration, proper URL handling, and smooth navigation across all pages.

---

## 📋 Table of Contents

1. [Route Configuration](#route-configuration)
2. [Available Routes](#available-routes)
3. [Hash-Based Sections](#hash-based-sections)
4. [Navigation Methods](#navigation-methods)
5. [Custom Hooks](#custom-hooks)
6. [URL Patterns](#url-patterns)
7. [Implementation Examples](#implementation-examples)
8. [Best Practices](#best-practices)

---

## Route Configuration

### Location
`frontend/src/config/routes.ts`

### Route Structure
Each route has the following configuration:

```typescript
interface RouteConfig {
  path: string;              // URL path
  name: string;              // Route identifier
  label: string;             // Display label
  description: string;       // SEO description
  icon?: string;             // Optional icon
  isPublic: boolean;         // Public access
  showInNav: boolean;        // Show in navigation
  showInFooter: boolean;     // Show in footer
  breadcrumbs?: Array<...>;  // Breadcrumb trail
}
```

---

## Available Routes

### 1. Home Page
- **Path**: `/`
- **Name**: `HOME`
- **Label**: Home
- **Show in Nav**: Yes
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/`

### 2. Features Page
- **Path**: `/features`
- **Name**: `FEATURES`
- **Label**: Features
- **Show in Nav**: Yes
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/features`
- **Breadcrumbs**: Home > Features

### 3. Pricing Page
- **Path**: `/pricing`
- **Name**: `PRICING`
- **Label**: Pricing
- **Show in Nav**: Yes
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/pricing`
- **Breadcrumbs**: Home > Pricing

### 4. FAQs Page
- **Path**: `/faqs`
- **Name**: `FAQS`
- **Label**: FAQs
- **Show in Nav**: No
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/faqs`
- **Breadcrumbs**: Home > FAQs

### 5. Contact Page
- **Path**: `/contact`
- **Name**: `CONTACT`
- **Label**: Contact Us
- **Show in Nav**: No
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/contact`
- **Breadcrumbs**: Home > Contact

### 6. Privacy Policy
- **Path**: `/privacy-policy`
- **Name**: `PRIVACY_POLICY`
- **Label**: Privacy Policy
- **Show in Nav**: No
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/privacy-policy`
- **Breadcrumbs**: Home > Privacy Policy

### 7. Terms of Service
- **Path**: `/terms-of-service`
- **Name**: `TERMS_OF_SERVICE`
- **Label**: Terms of Service
- **Show in Nav**: No
- **Show in Footer**: Yes
- **URL**: `https://mellominds.co.in/terms-of-service`
- **Breadcrumbs**: Home > Terms of Service

---

## Hash-Based Sections

Hash sections enable smooth scrolling to specific sections within pages.

### Available Hashes
```typescript
#features    // Features section on home page
#pricing     // Pricing section on home page
#faqs        // FAQs section on home page
#contact     // Contact section on home page
#security    // Security section on home page
#enterprise  // Enterprise section on home page
```

### Usage Examples
```
https://mellominds.co.in/#features
https://mellominds.co.in/#pricing
https://mellominds.co.in/#contact
https://mellominds.co.in/faqs
```

---

## Navigation Methods

### 1. Using React Router Navigation
```tsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const goToFeatures = () => {
    navigate('/features');
  };

  return <button onClick={goToFeatures}>Go to Features</button>;
};
```

### 2. Using Custom Routing Hook
```tsx
import { useRouting } from '../hooks/useRouting';

const MyComponent = () => {
  const { goToRoute, goToRouteWithHash, scrollTo } = useRouting();

  return (
    <>
      <button onClick={() => goToRoute('/features')}>
        Go to Features
      </button>
      <button onClick={() => goToRouteWithHash('/', '#pricing')}>
        Go to Pricing
      </button>
      <button onClick={() => scrollTo('#contact')}>
        Scroll to Contact
      </button>
    </>
  );
};
```

### 3. Using Route Configuration
```tsx
import { ROUTES, buildFullUrl } from '../config/routes';

const MyComponent = () => {
  const featuresUrl = ROUTES.FEATURES.path;  // '/features'
  const fullUrl = buildFullUrl(ROUTES.FEATURES.path);
  // 'https://mellominds.co.in/features'

  return <a href={featuresUrl}>Features</a>;
};
```

### 4. Direct Link Navigation
```tsx
// Simple navigation
<a href="/features">Features</a>

// With hash
<a href="/#pricing">Pricing</a>

// Full URL
<a href="https://mellominds.co.in/features">Features</a>
```

---

## Custom Hooks

### useRouting Hook

Provides comprehensive routing utilities.

```tsx
import { useRouting } from '../hooks/useRouting';

const MyComponent = () => {
  const {
    goToRoute,           // Navigate to route
    goToRouteWithHash,   // Navigate with hash
    scrollTo,            // Scroll to section
    goBack,              // Go back
    goHome,              // Go to home
    isCurrentRoute,      // Check current route
    getCurrentHash,      // Get current hash
    getCurrentPath,      // Get current path
    getCurrentUrl,       // Get full URL
    currentPageName,     // Current page name
    location,            // React Router location
  } = useRouting();

  return (
    <>
      <button onClick={() => goToRoute('/features')}>
        Features
      </button>
      <button onClick={() => scrollTo('#pricing')}>
        Pricing
      </button>
      <button onClick={goBack}>Back</button>
      <p>Current page: {currentPageName}</p>
    </>
  );
};
```

### useHashNavigation Hook

Handles hash-based navigation on page load.

```tsx
import { useHashNavigation } from '../hooks/useRouting';

const MyComponent = () => {
  // Automatically handles hash navigation
  useHashNavigation();

  return <div>Content</div>;
};
```

### useScrollPosition Hook

Manages scroll position and provides scroll utilities.

```tsx
import { useScrollPosition } from '../hooks/useRouting';

const MyComponent = () => {
  const { scrollPosition, scrollToTop, scrollToElement } = useScrollPosition();

  return (
    <>
      <p>Scroll position: {scrollPosition}px</p>
      <button onClick={scrollToTop}>Back to Top</button>
      <button onClick={() => scrollToElement('contact')}>
        Go to Contact
      </button>
    </>
  );
};
```

---

## URL Patterns

### Standard URL Patterns
```
https://mellominds.co.in/                    # Home
https://mellominds.co.in/features            # Features page
https://mellominds.co.in/pricing             # Pricing page
https://mellominds.co.in/faqs                # FAQs page
https://mellominds.co.in/privacy-policy      # Privacy policy
https://mellominds.co.in/terms-of-service    # Terms of service
```

### Hash-Based Navigation
```
https://mellominds.co.in/#features           # Features section
https://mellominds.co.in/#pricing            # Pricing section
https://mellominds.co.in/#contact            # Contact section
https://mellominds.co.in/#security           # Security section
https://mellominds.co.in/#enterprise         # Enterprise section
```

### Query Parameters (Future)
```
https://mellominds.co.in/features?tab=booking
https://mellominds.co.in/pricing?plan=enterprise
```

---

## Implementation Examples

### Example 1: Navigation Link Component
```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';

interface NavLinkProps {
  routeName: keyof typeof ROUTES;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ routeName, children }) => {
  const navigate = useNavigate();
  const route = ROUTES[routeName];

  return (
    <button
      onClick={() => navigate(route.path)}
      className="nav-link"
    >
      {children}
    </button>
  );
};
```

### Example 2: Breadcrumb Component
```tsx
import { getBreadcrumbs } from '../config/routes';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
  routeName: keyof typeof ROUTES;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ routeName }) => {
  const navigate = useNavigate();
  const breadcrumbs = getBreadcrumbs(routeName);

  return (
    <nav className="breadcrumb">
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          <button onClick={() => navigate(crumb.path)}>
            {crumb.name}
          </button>
          {index < breadcrumbs.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  );
};
```

### Example 3: Scroll to Section
```tsx
import { scrollToSection } from '../config/routes';

export const ScrollButton: React.FC = () => {
  return (
    <button onClick={() => scrollToSection('#pricing')}>
      View Pricing
    </button>
  );
};
```

### Example 4: Dynamic Navigation
```tsx
import { useRouting } from '../hooks/useRouting';

export const DynamicNav: React.FC = () => {
  const { goToRouteWithHash, currentPageName } = useRouting();

  const handleFeatureClick = () => {
    if (currentPageName === 'HOME') {
      // Already on home, just scroll
      scrollToSection('#features');
    } else {
      // Navigate to home with hash
      goToRouteWithHash('/', '#features');
    }
  };

  return <button onClick={handleFeatureClick}>Features</button>;
};
```

---

## Best Practices

### 1. Use Route Configuration
✅ **Good**
```tsx
import { ROUTES } from '../config/routes';
const url = ROUTES.FEATURES.path;
```

❌ **Avoid**
```tsx
const url = '/features';  // Hard-coded
```

### 2. Use Custom Hooks for Navigation
✅ **Good**
```tsx
const { goToRoute } = useRouting();
goToRoute('/features');
```

❌ **Avoid**
```tsx
window.location.href = '/features';  // Full page reload
```

### 3. Handle Hash Navigation Properly
✅ **Good**
```tsx
const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  scrollToSection('#pricing');
};
```

❌ **Avoid**
```tsx
// Direct hash without preventing default
<a href="#pricing">Pricing</a>
```

### 4. Use Breadcrumbs for Navigation
✅ **Good**
```tsx
<Breadcrumb routeName="FEATURES" />
```

❌ **Avoid**
```tsx
// Manual breadcrumb creation
<span>Home / Features</span>
```

### 5. Scroll to Top on Route Change
✅ **Good** (Already implemented in App.tsx)
```tsx
useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);
```

❌ **Avoid**
```tsx
// User stays at same scroll position
```

### 6. Use Semantic URLs
✅ **Good**
```
/privacy-policy
/terms-of-service
/features
```

❌ **Avoid**
```
/page1
/page2
/p
```

---

## File Structure

```
frontend/src/
├── config/
│   └── routes.ts              # Route configuration
├── hooks/
│   └── useRouting.ts          # Custom routing hooks
├── components/
│   ├── Header.tsx             # Uses routing
│   ├── MobileHeader.tsx        # Uses routing
│   ├── ResponsiveLandingPage.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQs.tsx
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
└── App.tsx                    # Main routing setup
```

---

## Testing Routes

### Manual Testing Checklist
- [ ] Home page loads at `/`
- [ ] Features page loads at `/features`
- [ ] Pricing page loads at `/pricing`
- [ ] FAQs page loads at `/faqs`
- [ ] Privacy Policy loads at `/privacy-policy`
- [ ] Terms of Service loads at `/terms-of-service`
- [ ] Hash navigation works: `/#features`, `/#pricing`, `/#contact`
- [ ] Back button works
- [ ] Page scrolls to top on route change
- [ ] Mobile navigation works
- [ ] Desktop navigation works
- [ ] External links work (Log In, Get Started, Book Demo)

### Browser DevTools Testing
1. Open DevTools (F12)
2. Go to Network tab
3. Navigate between pages
4. Verify no full page reloads (SPA behavior)
5. Check URL changes in address bar

---

## SEO Considerations

### Canonical URLs
All pages have canonical URLs set via SEO component:
```tsx
<link rel="canonical" href={fullUrl} />
```

### Sitemap
Dynamic sitemap includes all routes:
- `/`
- `/features`
- `/pricing`
- `/faqs`
- `/privacy-policy`
- `/terms-of-service`

### Robots.txt
Allows crawling of all public routes.

### Meta Tags
Each page has unique:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags

---

## Performance Optimization

### Code Splitting
Routes are lazy-loaded for better performance:
```tsx
const Features = lazy(() => import('./components/Features'));
```

### Scroll Behavior
Smooth scrolling with `behavior: 'smooth'` for better UX.

### URL Updates
History API used for URL updates without full page reload.

---

## Future Enhancements

1. **Query Parameters**: Add support for filtering/sorting
2. **Dynamic Routes**: Add blog posts, case studies
3. **Route Guards**: Add authentication checks
4. **Analytics**: Track navigation patterns
5. **Deep Linking**: Support for complex URL structures
6. **Redirects**: Handle old URLs

---

## Troubleshooting

### Issue: Hash navigation not working
**Solution**: Ensure `useHashNavigation` hook is used or hash handling is in App.tsx

### Issue: Page doesn't scroll to top on navigation
**Solution**: Check that scroll-to-top effect is in App.tsx

### Issue: Links not working on mobile
**Solution**: Verify MobileHeader uses `handleNavigation` function

### Issue: URL doesn't update when scrolling
**Solution**: Use `scrollToSection` which updates URL via history API

---

## Support & Resources

- **Route Configuration**: `frontend/src/config/routes.ts`
- **Custom Hooks**: `frontend/src/hooks/useRouting.ts`
- **Main App**: `frontend/src/App.tsx`
- **React Router Docs**: https://reactrouter.com/

---

**Last Updated**: May 23, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
