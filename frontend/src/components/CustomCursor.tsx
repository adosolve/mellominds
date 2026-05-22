import React, { useState, useEffect, useRef, useCallback } from 'react';

type CursorMode = 'default' | 'hover' | 'text' | 'click';

export const CustomCursor: React.FC = () => {
  const [mode, setMode] = useState<CursorMode>('default');
  const [opacity, setOpacity] = useState(0);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  // Animate ring trailing behind dot
  const animateRing = useCallback(() => {
    const ease = 0.12;
    ringPos.current.x += (dotPos.current.x - ringPos.current.x) * ease;
    ringPos.current.y += (dotPos.current.y - ringPos.current.y) * ease;
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
    }
    rafRef.current = requestAnimationFrame(animateRing);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animateRing]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      clearTimeout(hideTimer.current);
      setOpacity(1);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'SPAN';
      const isText =
        target.tagName === 'P' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'LABEL';

      if (isClickable) setMode('hover');
      else if (isText) setMode('text');
      else setMode('default');
    };

    const handleMouseDown = () => {
      setMode('click');
    };

    const handleMouseUp = (e: MouseEvent) => {
      // re-evaluate mode after click
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button');
      setMode(isClickable ? 'hover' : 'default');
    };

    const handleMouseLeave = () => {
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setOpacity(0), 300);
    };

    const handleMouseEnter = () => {
      clearTimeout(hideTimer.current);
      setOpacity(1);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(hideTimer.current);
    };
  }, []);

  const isHover = mode === 'hover';
  const isClick = mode === 'click';
  const isText = mode === 'text';

  // dot size: shrinks to caret-like bar in text mode, grows on hover, pulses on click
  const dotWidth = isText ? 3 : isClick ? 28 : isHover ? 10 : 10;
  const dotHeight = isText ? 22 : isClick ? 28 : isHover ? 10 : 10;
  const dotOpacity = isText ? 0.9 : 0.85;

  // ring size
  const ringSize = isClick ? 20 : isHover ? 44 : 36;
  const ringOpacity = isText ? 0 : isClick ? 0.6 : 0.35;

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '2px solid #ffe642',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: opacity * ringOpacity,
          transition: 'width 200ms ease, height 200ms ease, opacity 300ms ease, border-color 200ms ease',
          willChange: 'transform',
        }}
      />
      {/* Main dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: dotWidth,
          height: dotHeight,
          borderRadius: isText ? '2px' : '50%',
          backgroundColor: '#ffe642',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: opacity * dotOpacity,
          transition: 'width 150ms ease, height 150ms ease, border-radius 150ms ease, opacity 300ms ease, transform 80ms ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};
