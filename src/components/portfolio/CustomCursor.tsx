import { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'a, button, .proj-card, .stat, .skill-card, .edu-card, .social, .cert, .xp-item';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = cursorRef.current;
    const dot = dotRef.current;
    if (!cur || !dot) return;

    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    let frameId = 0;
    const animate = () => {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cur.style.left = cx + 'px';
      cur.style.top = cy + 'px';
      frameId = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', onMove);
    animate();

    const onEnter = () => cur.classList.add('hover');
    const onLeave = () => cur.classList.remove('hover');

    const bind = () => {
      document.querySelectorAll(HOVER_SELECTOR).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Initial binding after first paint, then rebind when DOM changes (e.g. projects re-render)
    bind();
    const mo = new MutationObserver(() => bind());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
      mo.disconnect();
      document.querySelectorAll(HOVER_SELECTOR).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
};

export default CustomCursor;
