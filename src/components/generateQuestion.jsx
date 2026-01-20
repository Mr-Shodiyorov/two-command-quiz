import React from "react";

function generateQuestion() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const isPlus = Math.random() > 0.5;
  return {
    text: isPlus ? `${a} + ${b}` : `${a} - ${b}`,
    answer: isPlus ? a + b : a - b,
  };
}

export default generateQuestion;
