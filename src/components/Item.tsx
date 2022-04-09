import { FC, useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { IItem } from "../pages";

interface ItemProps {
  item: IItem;
}
export const Item: FC<ItemProps> = ({ item }) => {
  const { color, name, id, price } = item;
  const [items, setItems] = useContext(ItemsContext);
  const [quantity, setQuantity] = useState(0);
  function setItem() {
    const newItems = items;
    newItems[id!] = { ...item, quantity };

    setItems(() => newItems);
  }
  return (
    <div className="border-[1px] border-gray border-solid">
      {/* className={`bg-[${i.color}]`} */}
      <div
        style={{ backgroundColor: color }}
        className="grid place-items-center text-white h-24"
      >
        <h3>LPS.{price}</h3>
      </div>
      <h2>{name}</h2>
      <input
        type="number"
        value={quantity}
        min={0}
        onChange={({ target }) => {
          setQuantity(() => Number(target.value));
          setItem();
        }}
      />
    </div>
  );
};
