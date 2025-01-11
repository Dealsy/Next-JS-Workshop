"use client";

import { useEffect, useState } from "react";

export default function DateFooter() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <p>&copy; {year} Next.js Learning Workshop</p>;
}
