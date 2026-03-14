import { useState, useEffect, useRef } from "react";

// Custom hook for scroll position
export const useScrollY = () => {
  const [s, setS] = useState(0);
  useEffect(() => {
    const h = () => setS(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return s;
};

// Custom hook for intersection observer (fade in on scroll)
export const useInView = (t = 0.12) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setV(true);
    }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
};

// Secret trigger for admin (type "admin" anywhere)
export const useSecretTrigger = (callback) => {
  const buf = useRef("");
  useEffect(() => {
    const h = (e) => {
      buf.current = (buf.current + e.key).slice(-5);
      if (buf.current === "admin") callback();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [callback]);
};
