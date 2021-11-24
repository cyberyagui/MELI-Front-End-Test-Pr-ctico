import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  SearchResult,
  SearchDetails,
} from "../components/router";
import "../Styles/app.scss";

export function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/items" element={<SearchResult />} />
            <Route path="/items/:id" element={<SearchDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
