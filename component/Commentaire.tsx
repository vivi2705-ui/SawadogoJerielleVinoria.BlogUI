"use client";
import React, { useEffect, useState } from "react";

const Commentaire = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error loading comments:", err));
  }, []);

  return (
   <div className="mt-12 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
    💬 Community Comments
  </h2>

  {comments.map((comment: any, index: number) => (
    <div
      key={comment.id}
      className="collapse mb-3 border border-blue-200 bg-blue-50 rounded-xl"
    >
      <input
        type="radio"
        name="comments-accordion"
        defaultChecked={index === 0}
      />

      <div className="collapse-title font-semibold text-blue-700">
        {comment.name}
      </div>

      <div className="collapse-content text-sm text-blue-600">
        {comment.message}
      </div>
    </div>
  ))}
</div>
  );
};

export default Commentaire;