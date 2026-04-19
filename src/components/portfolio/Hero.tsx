import { useEffect, useRef, useState } from 'react';
import ThreeScene from './ThreeScene';

const roles = [
  'AI Engineer',
  'Building LLM Pipelines',
  'Cloud & Data Architecture',
  'Full-Stack AI Systems',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ i: 0, j: 0, del: false, timer: 0 });

  useEffect(() => {
    const s = stateRef.current;
    const tick = () => {
      const cur = roles[s.i];
      if (!s.del) {
        s.j += 1;
        setDisplayText(cur.slice(0, s.j));
        if (s.j === cur.length) {
          s.del = true;
          s.timer = window.setTimeout(tick, 1800);
          return;
        }
      } else {
        s.j -= 1;
        setDisplayText(cur.slice(0, s.j));
        if (s.j === 0) {
          s.del = false;
          s.i = (s.i + 1) % roles.length;
        }
      }
      s.timer = window.setTimeout(tick, s.del ? 30 : 65);
    };
    s.timer = window.setTimeout(tick, 400);
    return () => clearTimeout(s.timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-tag reveal">
          <span className="dot"></span> AVAILABLE · NEW YORK, NY
        </div>
        <h1 className="reveal d1">
          AI&nbsp;<span className="grad">Engineer</span>
          <br />
          <span className="outline">shipping</span>&nbsp;at scale.
        </h1>
        <div className="hero-sub reveal d2">
          <span className="typed">{displayText}</span>
          <span className="cursor-blink"></span>
        </div>
        <p className="hero-desc reveal d3">
          I'm Siddhant — an AI Engineer building production multi-agent LLM pipelines,
          RAG systems, and cloud-native AI architectures for institutional investors.
          NYU CS, shipping at BEL Capital, Capital Group, Jefferies.
        </p>
        <div className="hero-ctas reveal d4">
          <a href="#projects" className="btn btn-primary">
            Explore Work <span>→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-meta reveal d4">
          <span>
            Processed<strong>1M+ filings</strong>
          </span>
          <span>
            Serving<strong>9,000+ analysts</strong>
          </span>
          <span>
            Precision<strong>92.4%</strong>
          </span>
          <span>
            Latency<strong>1.8s median</strong>
          </span>
        </div>
      </div>

      <ThreeScene />

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="bar"></div>
      </div>
    </section>
  );
};

export default Hero;
