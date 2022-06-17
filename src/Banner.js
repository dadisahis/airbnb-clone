import { Button } from "@mui/material";
import React from "react";
import "./Banner.css";
import DatePicker from "./DatePicker";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? <p>Hide</p> : <p>Search Dates</p>}
        </Button>
        {showSearch && <DatePicker />}
      </div>
      <div className="banner__info">
        <h2>"A journey of a thousand miles begins with a single step"</h2>
        <h4>- Lao Tzu</h4>
        <Button variant="outlined" onClick={() => navigate("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
