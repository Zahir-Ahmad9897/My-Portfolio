import { useState, useEffect, useRef } from 'react';

/**
 * Returns the id of the section currently in the viewport.
 * Uses IntersectionObserver for performance — no scroll listeners.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '');
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      // Section is "active" when its top is between 0-50% of viewport height
      rootMargin: '-10% 0px -50% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [ids]);

  return active;
}
