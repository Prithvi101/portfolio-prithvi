import React, { useEffect, useState } from "react";

const Grid: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    const shuffleArray = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setItems(shuffleArray([...items]));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-gray-200 p-4 ${
            index % 2 === 0 ? "col-span-3" : "col-span-2"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Grid;
