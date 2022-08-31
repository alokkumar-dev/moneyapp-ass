import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ActionCreator";
import "./Products.css";
export const ProductPage = () => {
  const dispatch = useDispatch();
  const { Data } = useSelector((store) => store);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        dispatch(getProducts(res.data.categories));
      });
  };

  return (
    <>
      <h1>Product Page</h1>
      <div className="prodContainer">
        {Data.map((el) => (
          <div className="prodBox">
            <div className="prodThumb">
              <img src={el.strCategoryThumb} alt="product image" />
            </div>
            <h3>{el.strCategory}</h3>
            <button className="a">ADD TO CART</button>
          </div>
        ))}
      </div>
    </>
  );
};
