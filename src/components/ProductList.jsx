import icShipping from "../Utils/ic_shipping.png";
import { Link } from "react-router-dom";
import { priceFormat, decimalsFormat } from "../Utils/priceFormat.js";

export function ProductList({ itemList }) {
  return (
    <ul className="productCard" id="productCard">
      {itemList.length
        ? itemList.map((item, i) => {
            return (
              <li key={i} className="Container">
                <div className="grid-01">
                  <Link to={"/items/" + item.id}>
                    <img
                      className="productImg"
                      src={item.picture}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="grid-02">
                  <span className="productPrice">
                    {`${priceFormat(item.price)}`}
                  </span>
                  <span id="decimals">{`${decimalsFormat(item.price)}`}</span>
                  {item.free_shipping ? (
                    <img
                      className="shippingIco"
                      src={icShipping}
                      alt="icShipping"
                    />
                  ) : null}
                </div>
                <div className="grid-03">
                  <span className="productTitle">{item.title}</span>
                </div>
                <div className="grid-04">
                  <span className="productCity">{`${item.address}`}</span>
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
}
