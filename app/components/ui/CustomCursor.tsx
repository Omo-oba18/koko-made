'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef   = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos         = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const raf         = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor   = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.1;
      follower.style.left = `${followerPos.current.x}px`;
      follower.style.top  = `${followerPos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => follower.classList.add('is-hovering');
    const onLeave = () => follower.classList.remove('is-hovering');

    const attach = () => {
      document.querySelectorAll<HTMLElement>(
        'a, button, [data-cursor="hover"], label, input, textarea, select'
      ).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    document.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);
    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef}   className="cursor"          aria-hidden="true" />
      <div ref={followerRef} className="cursor-follower" aria-hidden="true" />
    </>
  );
}