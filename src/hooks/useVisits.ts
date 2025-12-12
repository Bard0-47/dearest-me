import { useState, useEffect, useRef } from "react";

const useVisits = () => {
  const VISIT_KEY = "dear-me-visit-count";
  const [visits, setVisits] = useState<number>(0);
  const isFirstTime = visits === 1;

  const executed = useRef(false);

  useEffect(() => {
    if (executed.current) {
      return;
    }

    executed.current = true;

    const storedVisitKey = localStorage.getItem(VISIT_KEY);
    let newTotalVisits: number;

    if (storedVisitKey === null) {
      newTotalVisits = 1;
    } else {
      newTotalVisits = JSON.parse(storedVisitKey) + 1;
    }

    setVisits(newTotalVisits);
    localStorage.setItem(VISIT_KEY, JSON.stringify(newTotalVisits));
  }, []);

  return {
    visits,
    isFirstTime,
  };
};

export default useVisits;
