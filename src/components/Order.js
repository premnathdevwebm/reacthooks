import { useContext } from "react";
import { FoodOrderContext } from "../store/foodorder-context";
const Order = () => {
  const {isOpen} = useContext(FoodOrderContext);
  const foodOrdered = () => {
    alert("Food Ordered");
  };
  return (
    <>{isOpen && <button onClick={foodOrdered}>Order</button>}</>
  );
};

export default Order;
