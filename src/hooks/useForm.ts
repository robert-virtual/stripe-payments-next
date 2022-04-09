import { ChangeEvent, useState } from "react";

export function useForm(initValues: any) {
  const [vals, setVals] = useState(initValues);
  return {
    values: vals,
    setValues({ target: { name, value } }: ChangeEvent<HTMLInputElement>) {
      setVals({ ...vals, [name]: value });
    },
  };
}
