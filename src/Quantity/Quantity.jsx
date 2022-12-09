import "./Quantity.css";

export default function Quantity({
  count,
  setCount,
  fallsneaker,
  cartCount,
  setCartCount,
  addQuantity,
  setAddQuantity,
  
  setCart
}) {
  function handleClickAdd() {
    setCount(prevState => prevState + 1);
    setAddQuantity(prevState=>prevState + 1);
    // console.log('Add to Cart: ' + (count+1) );
  }

  function handleClickMinus() {
    setCount((prevState) => Math.max(prevState - 1, 1));
    setAddQuantity(Math.max(prevState => prevState - 1, 1));
    // console.log('Add to Cart: ' + Math.max(count - 1, 1) );
  }

  function handleClickAddToCart() {
    // console.log("addQuantity:" + addQuantity + " Current/cartCount:" + cartCount);
    // console.log(
    //   "Updated Cart: $" +
    //     fallsneaker.salePrice +
    //     " x " +
    //     (addQuantity + cartCount) +
    //     " $" +
    //     fallsneaker.salePrice * (addQuantity + cartCount)
    // );

    setCartCount(cartCount + addQuantity);

    setCart(
      fallsneaker.name + " $" +
    fallsneaker.salePrice +
    " x " +
    (addQuantity + cartCount) +
    " $" +
    fallsneaker.salePrice * (addQuantity + cartCount))




  }

  return (
    <>
      <div className="quantity">
        <button className="plusminus minus" onClick={handleClickMinus}>
          -{" "}
        </button>
        <div className="count"> {count} </div>
        <button className="plusminus plus" onClick={handleClickAdd}>
          +
        </button>
      </div>

      <button className="addtocartbutton" onClick={handleClickAddToCart}>
        <img src="images/icon-cart.svg" alt="" className="addcartlogo" />
        <p className="addtocartbuttoncopy">Add to cart</p>
      </button>
    </>
  );
}
