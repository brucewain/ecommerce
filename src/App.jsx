import "./App.css";
import MobileHeader from "./MobileHeader/MobileHeader";
// import Copy from "./Copy/Copy";
import Quantity from "./Quantity/Quantity";
import "./Lightbox/Lightbox.css";
import "./PDP/PDP.css";
import "./Copy/Copy.css";
import { useState} from "react";

function App() {
  const fallsneaker = {
    image1: "images/image-product-1.jpg",
    image1Thumb: "images/image-product-1-thumbnail.jpg",
    image2: "images/image-product-2.jpg",
    image2Thumb: "images/image-product-2-thumbnail.jpg",
    image3: "images/image-product-3.jpg",
    image3Thumb: "images/image-product-3-thumbnail.jpg",
    image4: "images/image-product-4.jpg",
    image4Thumb: "images/image-product-4-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    copy: ` These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.`,
    salePrice: 125.0,
    discount: 50,
    oldPrice: 250.0,
  };

  const [count, setCount] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const [num, setNum] = useState("none");
  const [addQuantity, setAddQuantity] = useState(1);

  const [cart, setCart] = useState([]);

  function HeaderSwap() {
    if (window.innerWidth <= 350) {
      console.log("350");
    } else if (window.innerWidth <= 1440) {
      console.log("1440");
    } else {
      console.log("broken");
    }
  }

  return (
    <div className="App">



      <MobileHeader
      productName={fallsneaker.name}
        count={count}
        cartCount={cartCount}
        setCartCount={setCartCount}

        salePrice={fallsneaker.salePrice}
        discount={ fallsneaker.discount}
        oldPrice={ fallsneaker.oldPrice}
        // Cart #
        num={num}
        setNum={setNum}
        addQuantity={addQuantity}
        setAddQuantity={setAddQuantity}
        cart={cart}
        setCart={setCart}
      />

      <div className="PDP">
        <div className="lightbox">
          <img src={ fallsneaker.image1} alt="" className="firstimage" />
        </div>
        <div className="Copy">
          <h1>SNEAKER COMPANY</h1>
          <h2>{ fallsneaker.name}</h2>
          <p>{ fallsneaker.copy}</p>
          <div className="pricing">
            <div className="currentprice">
              <h2 className="saleprice">${ fallsneaker.salePrice}</h2>
              <p className="discount">{ fallsneaker.discount}% </p>
            </div>
            <p className="oldprice">${ fallsneaker.oldPrice}</p>
          </div>
          <Quantity
             fallsneaker={fallsneaker}
            cartCount={cartCount}
            setCartCount={setCartCount}
            
            setCount={setCount}
            count={count}
            // Cart #
            num={num}
            setNum={setNum}
            addQuantity={addQuantity}
            setAddQuantity={setAddQuantity}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
