// import "./Copy.css";
// import { useState } from "react";
// import Quantity from "../Quantity/Quantity";

// export default function Copy() {
//   const [product, setProduct] = useState({
//     name: "Fall Limited Edition Sneakers",
//     copy: ` These low-profile sneakers are your perfect casual wear companion.
//             Featuring a durable rubber outer sole, they’ll withstand everything the
//             weather can offer.`,
//     salePrice: 125.00,
//     discount: 50,
//     oldPrice: 250.00,
//   });

//   return (
//     <div className="Copy">
//       <h1>SNEAKER COMPANY</h1>
//       <h2>{product.name}</h2>
//       <p>{product.copy}</p>
//       <div className="pricing">
//         <div className="currentprice">
//           <h2 className="saleprice">${product.salePrice}</h2>
//           <p className="discount">{product.discount}% </p>
//         </div>
//         <p className="oldprice">${product.oldPrice}</p>
//       </div>
//       <Quantity
//         salePrice={product.salePrice}
//         discount={product.discount}
//         oldPrice={product.oldPrice}
        
//       />
//     </div>
//   )
// }
