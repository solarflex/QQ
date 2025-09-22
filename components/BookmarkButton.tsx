import React, { useState } from "react";

export default function BookmarkButton({ verseId }: { verseId: string }) {
  const [bookmarked, setBookmarked] = useState(false);

  function toggleBookmark() {
    setBookmarked((prev) => {
      const next = !prev;
      if (next) {
        localStorage.setItem(`bookmark-${verseId}`, "1");
      } else {
        localStorage.removeItem(`bookmark-${verseId}`);
      }
      return next;
    });
  }

  return (
    <button
      onClick={toggleBookmark}
      aria-label="즐겨찾기"
      style={{ marginLeft: 8, background: bookmarked ? "gold" : "#eee", borderRadius: "50%", border: "none", width: 32, height: 32 }}
    >
      {bookmarked ? "★" : "☆"}
    </button>
  );
}