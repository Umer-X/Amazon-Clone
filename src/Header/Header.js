import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebaseConfig";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAut = () => {
      if (user) {
        auth.signOut();
      }
  }

  return (
    <div className="header"> 
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAut} className="header_option">
            <span className="header_optionLineon">Hello Guest</span>
            <span className="header_optionLineTw">
              {user ? "Log Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineon">Returns</span>
          <span className="header_optionLineTw">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineon">Your</span>
          <span className="header_optionLineTw"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
