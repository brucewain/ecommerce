import "./MobileHeader.css";
import { useState } from "react";
import "/Users/admin/React/ecommerce/src/ShoppingCart/ShoppingCart.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function MobileHeader(props) {
  // Cart Menu
  
  const [cart, setCart] = useState("Your cart is empty.");

  // Cart Menu
  // Collections

  const [menu, setMenu] = useState(false);
  const open = "./images/icon-menu.svg";
  const close = "./images/icon-close.svg";
  const [toggle, setToggle] = useState(open);
  const navBarSite = ["Collection", "Men", "Women", "About", "Contact"];

  function handleClickOpenBar() {
    if (toggle == open) {
      setToggle(close);
      setMenu(true);
      
    } else if (toggle == close) {
      setToggle(open);
      setMenu(false);
    
    } else {
      console.log("broken");
    }
  }
  ("");

  

  return (
    <header>
      {/* HAMBURGER MENU - MOBILE ONLY */}
      <button
        className="mobile-menu"
        id="mobile-menu"
        onClick={handleClickOpenBar}
      >
        <img src={toggle} alt="hamburger menu" className="hamburger-menu" />
      </button>
      {/* HAMBURGER MENU - MOBILE ONLY */}
      {/* LOGO */}
      <img src="images/logo.svg" alt="" className="logo" />
      {/* LOGO */}
      {/* NAV LIST */}
      {menu && (
        <ul className="navlist" id="navlist" style={{ display: "inline" }}>
          {navBarSite.map((site) => (
            <ul className="navitem" key={navBarSite.id}>
              <h3>{site}</h3>
            </ul>
          ))}
        </ul>
      )}

      {/* NAV LIST */}
      {/* SHOPPING CART */}
      <ShoppingCart
        count={props.count}
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        
        name={props.name}
        product={props.product}
        setProduct={props.setProduct}
        setCount={props.setCount}
        // Cart #
        num={props.num}
        setNum={props.setNum}
        addQuantity={props.addQuantity}
        setAddQuantity={props.setAddQuantity}
        cart={props.cart}
        setCart={props.setCart}

        

      />
      {/* SHOPPING CART */}
      {/* AVATAR */}
      <img src="images/image-avatar.png" alt="avatar" className="avatar" />
      {/* AVATAR */}
    </header>
  );
}
