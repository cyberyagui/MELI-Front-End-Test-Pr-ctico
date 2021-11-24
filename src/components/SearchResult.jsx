import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/searchResult.scss";
import { useLocation } from "react-router";
import { Breadcrumb, ProductList, Spinner } from "./router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function SearchResult() {
  const [itemList, setitemList] = useState([]);
  const [categories, setCategories] = useState([]);

  const query = useQuery();
  const barra = query.get("search");

  useEffect(() => {
    getData();
  }, [barra]);

  const getData = async () => {
    const products = await axios(`http://localhost:3001/api/items?${barra}`);
    setitemList(products.data.items);
    setCategories(products.data.categories.slice(0, 5));
  };

  return (
    <div className="resultContainer">
      <div className="breadcrumbConteiner">
        <Breadcrumb categories={categories} />
      </div>

      {itemList ? <ProductList itemList={itemList} /> : <Spinner />}
    </div>
  );
}
