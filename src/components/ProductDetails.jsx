import "../Styles/ProductDetails.scss";
import icShipping from "../Utils/ic_shipping@2x.png.png.png";
import { priceFormat, decimalsFormat } from "../Utils/priceFormat.js";

export function ProductDetails({ details }) {
  let condicion;
  if (details.condition === "new") {
    condicion = "Nuevo";
  } else {
    condicion = "Usado";
  }
  return (
    <div className="background-details">
      <div className="categories-details"></div>
      <div className="container-details">
        <div>
          <div>
            <span className="details01">{`${condicion} - ${details.sold_quantity} vendidos`}</span>
          </div>
          <div className="titleDetails">
            <span className="details02">{details.title}</span>
          </div>
        </div>

        <div className="details03">
          <span>{`${priceFormat(details.price)}`}</span>
          <span className="decimals">{`${decimalsFormat(details.price)}`}</span>{" "}
          {details.free_shipping ? (
            <img className="shippingIco" src={icShipping} alt="icShipping" />
          ) : null}
        </div>
        <div className="details04">
          <button>Comprar</button>
        </div>
        <div className="details05">
          <img src={details.picture} alt={details.title} />
        </div>
        <div className="details06">
          <span>Descripción del producto</span>
        </div>
        <div className="details07">
          <span>{details.description}</span>
        </div>
      </div>
    </div>
  );
}
