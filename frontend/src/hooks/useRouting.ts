/**
 * Custom Hook for Routing and Navigation
 * Provides utilities for navigation, URL management, and route detection
 */

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ROUTES, scrollToSection, getCurrentPageName } from '../config/routes';

export function useRouting() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPageName, setCurrentPageName] = useState<keyof typeof ROUTES | null>(null);

  // Update current page name when location changes
  useEffect(() => {
    const pageName = getCurrentPageName(location.pathname);
    setCurrentPageName(pageName);
  }, [location.pathname]);

  /**
   * Navigate to a route
   */
  const goToRoute = (path: string) => {
    navigate(path);
  };

  /**
   * Navigate to a route with hash
   */
  const goToRouteWithHash = (path: string, hash: string) => {
    navigate(`${path}${hash}`);
    setTimeout(() => scrollToSection(hash), 100);
  };

  /**
   * Scroll to section on current page
   */
  const scrollTo = (hash: string) => {
    scrollToSection(hash);
    // Update URL with hash
    window.history.pushState(null, '', `${location.pathname}${hash}`);
  };

  /**
   * Go back to previous page
   */
  const goBack = () => {
    navigate(-1);
  };

  /**
   * Go to home
   */
  const goHome = () => {
    navigate('/');
  };

  /**
   * Check if current route matches
   */
  const isCurrentRoute = (routePath: string): boolean => {
    return location.pathname === routePath;
  };

  /**
   * Get current hash
   */
  const getCurrentHash = (): string => {
    return location.hash;
  };

  /**
   * Get current pathname
   */
  const getCurrentPath = (): string => {
    return location.pathname;
  };

  /**
   * Get full current URL
   */
  const getCurrentUrl = (): string => {
    return `${location.pathname}${location.hash}${location.search}`;
  };

  return {
    goToRoute,
    goToRouteWithHash,
    scrollTo,
    goBack,
    goHome,
    isCurrentRoute,
    getCurrentHash,
    getCurrentPath,
    getCurrentUrl,
    currentPageName,
    location,
  };
}

/**
 * Hook to handle hash-based navigation on page load
 */
export function useHashNavigation() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
}

/**
 * Hook to manage scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    scrollPosition,
    scrollToTop,
    scrollToElement,
  };
}
