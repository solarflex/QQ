import React, { useState } from "react";

export default function FontSizeControl() {
  const [size, setSize] = useState(18);

  function changeSize(val: number) {
    setSize(s => {
      const next = Math.max(12, Math.min(36, s + val));
      document.documentElement.style.setProperty("--bible-font-size", `${next}px`);
      return next;
    });
  }

  return (
    <span style={{ marginLeft: 12 }}>
      <button onClick={() => changeSize(-2)} aria-label="글자 작게">-</button>
      <span style={{ margin: "0 6px" }}>{size}px</span>
      <button onClick={() => changeSize(2)} aria-label="글자 크게">+</button>
    </span>
  );
}