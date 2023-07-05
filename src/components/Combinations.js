import { memo } from "react";
const Combinations = memo(({ countBooks }) => {
  console.log("number of times Comination component renders");
  let arragements = 1;
  for (let i = 2; i <= countBooks; i++) {
    arragements *= i;
  }
  return (
    <>The total number of ways you can arrange the book by {arragements} </>
  );
});

export default Combinations;
