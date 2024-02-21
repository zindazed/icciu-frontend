import React, { useState, useEffect, useRef } from "react";

const MyComponent = () => {
  const [isOffsetZero, setIsOffsetZero] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(100);
  const [word, setWord] = useState("zindazed");
  const myElementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentOffset(myElementRef.current.scrollTop);
      if (currentOffset <= 100) {
        setWord("Kasauli");
      } else {
        setWord("Mahad");
      }
      setIsOffsetZero(currentOffset <= 5);
    };

    if (myElementRef.current) {
      myElementRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (myElementRef.current) {
        myElementRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={myElementRef}
        style={{ height: "100px", overflow: "auto", border: "1px solid black" }}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <div>
          <p>Content special</p>
        </div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
      {isOffsetZero ? <p>Offset is zero</p> : <p>Offset is not zero</p>}
      {currentOffset <= 100 ? <p>Offset is zero</p> : <p>Offset is not zero</p>}
      <h1>{currentOffset}</h1>
      <h1>{word}</h1>
    </div>
  );
};

export default MyComponent;
