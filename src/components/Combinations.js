import { memo } from "react";
import useFactorial from "../Hooks/useFactorial";

const Combinations = memo(({ countBooks, checkSpace }) => {
  let space = "";
  switch (countBooks) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      space = "Free Space Available";
      break;
    case 6:
    case 7:
    case 8:
      space = "Prefect Storage";
      break;
    case 9:
    case 10:
      space = "Need Extra Storage";
      break;
    default:
      space = "Not Sufficient Space";
  }

  let arragements = useFactorial(countBooks)
  return (
    <>
      The total number of ways you can arrange the book {arragements}
      <br />
      <button onClick={checkSpace(space)}>Storage</button>
    </>
  );
});

export default Combinations;
