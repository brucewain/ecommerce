import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart(props) {
  const [menu, setMenu] = useState("none");

  function handleClick() {
    return setMenu((current) => !current);
  }

  function Test(fallsneaker) {
    const cart = [
      { item: fallsneaker.name, quanity: addQuantity, count: cartCount },
    ];

    if (props.cartCount > 0) {
      console.log(props.cartCount);
      console.log(props.addQuantity);
      console.log(props.cartCount);
    } else {
      console.log("test");
    }

    // return(

    // )
  }

  return (
    <div className="shoppingcart-menu">
      <button className="shoppingcart-button" onClick={handleClick}>
        <img
          src="images/icon-cart.svg"
          alt="shopping cart"
          className="shoppingcart-logo"
        />
        {props.cartCount > 0 && (
          <span className="cart-count">{props.cartCount}</span>
        )}
      </button>
      <div className="shoppingcart" style={{ display: menu ? "none" : "flex" }}>
        <h4>Cart</h4>
        <div className="items">
          <p>{props.cartCount == 0 ? "Your cart is empty." : props.cart}</p>
        </div>

        {props.cartCount == 0 ? (
          ""
        ) : (
          <button className="checkout">
            <p className="addtocartbuttoncopy">Checkout</p>
          </button>
        )}
      </div>
    </div>
  );
}
