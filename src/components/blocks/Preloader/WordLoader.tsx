import React from "react";
import "./Loader.scss";

const WordLoader = () => {
  return (
    <div>
      <div className="loader">
        <div className="list1 ">
          <span className="word1">Finalizing </span>
          <span className="word1">Optimizing </span>
          <span className="word1">Loading </span>

          <span className="word1">Crafting </span>
        </div>
        <div className="list2 ">
          <span className="word2">UI</span>
          <span className="word2">Components</span>
          <span className="word2">Assets</span>
          <span className="word2">Build</span>
        </div>
      </div>
    </div>
  );
};

export default WordLoader;
