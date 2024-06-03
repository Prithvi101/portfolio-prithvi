import React from "react";
import { v4 } from "uuid";

const ListCard = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <div className="p-4">
      <h3 className="text-[1.2rem] font-bold">{title}</h3>
      <ul className="pl-4 mt-4">
        {list.map((item) => (
          <li key={v4()} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
