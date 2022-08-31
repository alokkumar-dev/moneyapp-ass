import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const CartPage = () => {
  const [data, setData] = useState([]);
  let { CartData } = useSelector((store) => store);
  const handleDelete = (id) => {
    let x = data.filter((e) => e.id != id);
    //  console.log("licked")
    console.log(x);
    setData(x)

  };

  useEffect(() => {
    setData(CartData);
  }, []);
  return (
    <>
      {/* <h1>CartPage</h1> */}
      {(data.length >0)? data.map((el) => (
        <>
          <div>
            <h2>{el.brand}</h2>
            {/* <h2>{el.title}</h2> */}
          </div>
          <button onClick={() => handleDelete(el.id)}>delete</button>
        </>
      )):<h2>Cart is empty</h2>
    }
    </>
  );
};
