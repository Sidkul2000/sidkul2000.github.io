import { useEffect, useRef, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let p = 0;
    let timeoutId: number;
    const step = () => {
      p += Math.random() * 18 + 6;
      if (p >= 100) p = 100;
      setProgress(p);
      if (p < 100) {
        timeoutId = window.setTimeout(step, 80 + Math.random() * 120);
      } else {
        timeoutId = window.setTimeout(() => setDone(true), 200);
      }
    };

    const kickoff = window.setTimeout(step, 100);
    return () => {
      clearTimeout(kickoff);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`preloader${done ? ' done' : ''}`}>
      <div className="pl-inner">
        <div className="pl-text">INITIALIZING · {Math.floor(progress)}%</div>
        <div className="pl-bar">
          <div className="pl-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
