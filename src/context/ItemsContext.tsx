import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { IItem } from "../pages";

export const ItemsContext = createContext<
  [IItem[], Dispatch<SetStateAction<IItem[]>>]
>([new Array<IItem>(), () => {}]);

export const ItemsProvider: FC = ({ children }) => {
  const itemsState = useState<IItem[]>(new Array<IItem>());

  return (
    <ItemsContext.Provider value={itemsState}>{children}</ItemsContext.Provider>
  );
};
