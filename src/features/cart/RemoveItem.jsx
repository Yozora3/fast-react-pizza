import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

function RemoveItem({ itemId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(itemId))}>
      Delete
    </Button>
  );
}

export default RemoveItem;
