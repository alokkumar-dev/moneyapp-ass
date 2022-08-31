import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Products.css";
export const CartPage = () => {
  const [data, setData] = useState([]);
  let { CartData } = useSelector((store) => store);
  const handleDelete = (id) => {
    let x = data.filter((e) => e.id != id);
    console.log(x);
    setData(x);
  };

  useEffect(() => {
    setData(CartData);
  }, []);
  return (
    <>
      <div className="CartMain">
        <div className="leftSide">
          {data.length > 0 ? (
            data.map((el) => (
                <div className="CartProdBox" key={el.id}>
                  <div className="CartProdImgDiv">
                    <img src={el.image} alt="product image" />
                  </div>
                  <div className="CartAbout">
                    <p>{el.description}</p>
                    <h3>{el.brand}</h3>
                    <h3>₹ {el.price}.00</h3>
                    <p className="title">{el.title}</p>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(el.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
            
            ))
          ) : (
            <h2>Cart is empty</h2>
          )}
        </div>
      </div>
    </>
  );
};
