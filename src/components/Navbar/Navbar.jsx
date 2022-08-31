import { useNavigate } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h2 onClick={() => navigate("/")}>MONEY APP</h2>
      <h2 onClick={() => navigate("/cart")}>Cart</h2>
    </div>
  );
};
