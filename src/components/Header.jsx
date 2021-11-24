import logoML from "../Utils/Logo_ML.png";
import icSearch from "../Utils/ic_Search.png";
import "../Styles/header.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?search=${search}`);
  };

  return (
    <div className="background">
      <div className="searchContainer">
        <Link to="/">
          {" "}
          <img src={logoML} alt="logo" className="item1" />{" "}
        </Link>
        <form action="" className="item2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className="serchInput"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="searchIc">
            <img src={icSearch} alt="searchIc" />
          </button>
        </form>
      </div>
    </div>
  );
}
