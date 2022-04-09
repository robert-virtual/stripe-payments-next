import Head from "next/head";
import { useContext, useState } from "react";
import { Item } from "../components/Item";
import { ItemsContext } from "../context/ItemsContext";
import { useForm } from "../hooks/useForm";

export interface IItem {
  id?: number;
  name: string;
  color: string;
  price?: number;
  quantity?: number;
}
export default function Home() {
  const [items, setItems] = useContext(ItemsContext);
  // const [items, setItems] = useState<Item[]>(new Array());
  const { setValues, values } = useForm({ name: "", color: "", price: 0 });
  const [modal, setModal] = useState(false);
  async function pay() {
    console.log(items);

    // const res = await fetch("/api/stripe", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     items,
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);
  }
  function addItem() {
    setModal(false);
    setItems([...items, values]);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Head>
        <title>Paymemnts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col bg-slate-50 items-center justify-center w-full flex-1 px-20 text-center">
        <div className={modal ? "blur-md" : ""}>
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <button
            onClick={() => setModal(true)}
            className="bg-green-500 rounded-md text-xl text-white p-2 hover:bg-green-400"
          >
            addItem
          </button>
          <div className="w-[80vw] gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {items.map((i, id) => (
              <Item key={id.toString()} item={{ ...i, id }} />
            ))}
          </div>

          {items.length > 0 && (
            <button
              onClick={pay}
              className="bg-blue-600 rounded-md text-xl text-white p-2 hover:bg-blue-500"
            >
              checkout
            </button>
          )}
        </div>
        {/* modal form */}
        {modal && (
          <div className="bg-slate-300 w-full h-full grid place-content-center bg-opacity-80 absolute p-6">
            <div className="relative blur-none bg-white rounded-md p-6 text-xl">
              <button
                onClick={() => setModal(false)}
                className="relative -top-1/3 -right-2/3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  onChange={setValues}
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  onChange={setValues}
                  type="number"
                  name="price"
                  placeholder="price"
                />
              </div>
              <div>
                <label htmlFor="color">Color:</label>
                <input onChange={setValues} type="color" name="color" />
              </div>
              <div className="flex items-center justify-end">
                {false && (
                  <button
                    className="hover:text-white hover:bg-gray-500 bg-gray-300 text-gray-500 p-1 rounded-md "
                    onClick={() => setModal(false)}
                  >
                    Cancelar
                  </button>
                )}
                <button
                  onClick={addItem}
                  className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
