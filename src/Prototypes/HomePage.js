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
      <div>
      <img  className="centerImg"
      src='https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-9/162164522_218096313434914_1009874435023468340_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SwtfkRkyD1UAX8l3sQ_&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCE_66Sfi1t2KWf8sXADCkVmCYUmVCW97Gbp-QpwiYHRg&oe=639CB04F'
     
      alt='...'
    />
      </div>
    </div>
  );
};

export default HomePage;
