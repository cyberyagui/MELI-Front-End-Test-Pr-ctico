import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductDetails, Spinner } from "./router";
import "../Styles/searchResult.scss";

export function SearchDetails() {
  const [details, setDetails] = useState();
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItemDetails();
  }, []);

  const getItemDetails = async () => {
    const itemDetails = await axios(`http://localhost:3001/api/items/${id}`);
    setCategories(itemDetails.data.categoryName);
    setDetails(itemDetails.data.item);
  };
  return (
    <div>
      <div className="breadcrumbConteiner resultContainer">
        <ol className="breadcrumb">
          <li className="breadcrumbItem">{` ${categories}`}</li>
        </ol>
      </div>
      {details ? <ProductDetails details={details} /> : <Spinner />}
    </div>
  );
}
