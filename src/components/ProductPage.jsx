import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getFilterData, getProducts } from "../Redux/ActionCreator";
import "./Products.css";
export const ProductPage = () => {
  const dispatch = useDispatch();
  const { Data } = useSelector((store) => store);
  const { FilterData } = useSelector((store) => store);
  let { CartData } = useSelector((store) => store);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios.get("./Products.json").then((res) => {
      dispatch(getProducts(res.data));
    });
  };
  const handleSort = (e) => {
    const { id, value } = e.target;
    if (value == "low") {
      let sorting = Data.sort((a, b) => a.price - b.price);
      dispatch(getProducts([...sorting]));
    }
    if (value == "high") {
      let sorting = Data.sort((a, b) => b.price - a.price);
      dispatch(getProducts([...sorting]));
    }
  };
  const handleClick = (item) => {
    if (CartData.includes(item)) {
      console.log("Yes");
      alert("Item already added");
    } else {
      dispatch(getCart(item));
      console.log("No");
      alert("Item added successfully");
    }
  };
  const handleFilter = (e) => {
    const { id, value } = e.target;
    if (id == "filter") {
      dispatch(getFilterData(value));
    }
  };

  return (
    <>
      <div className="mainDIv">
        <div className="sortingDiv">
          <select name="" id="sorting" onChange={handleSort}>
            <option value="">Sort by Price</option>
            <option value="low">High to Low</option>
            <option value="high">Low to High</option>
          </select>
          <select name="" id="filter" onChange={handleFilter}>
            <option value="">Filter by category</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="OPPO">OPPO</option>

          </select>
        </div>
        <div className="prodContainer">
          {Data &&
            FilterData.map((el) => (
              <div className="prodBox">
                <div className="prodImgDiv">
                  <img src={el.image} alt="product image" />
                </div>
                <div className="about">
                  <h3>{el.brand}</h3>
                  <h3>₹ {el.price}.00</h3>
                </div>
                <p className="title">{el.title}</p>
                <button
                  className="addToCartBtn"
                  onClick={() => handleClick(el)}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
