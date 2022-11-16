import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavBar } from "./NavBar";
import "../styles/Home.css";
const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />

      <div>
         <h3 className="centertxt">Department of Electrical and Information Engineering</h3>
          <h4 className="centertxt">University of Ruhuna</h4>


      </div>
    </div>
  );
};

export default HomePage;
