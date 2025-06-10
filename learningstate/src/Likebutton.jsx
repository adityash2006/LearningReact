import { useState } from "react";

export default function () {
  let [count, setCount] = useState(0);
  let [like, setLike] = useState(false);

  function trig() {
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => count + 1);
    setLike(!like);
  }
  return (
    <>
      <p>Clicks={count}</p>
      <h3 onClick={trig}>
        {like ? (
          <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </h3>
    </>
  );
}
