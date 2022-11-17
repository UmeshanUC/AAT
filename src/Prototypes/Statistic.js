import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { PieChart } from "react-minimal-pie-chart";

const Statistic = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />

      <div>
        <div className="m-5 d-flex justify-content-center">
          <div className="card w-auto mx-auto p-5">
            <h2 className="text-center mb-5">Present Now in Lecture</h2>
            <h1 style={{ fontSize: "5rem" }} className="display text-center">
              {count}/75
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            variant="outlined"
            onClick={() => setCount((prev) => prev + 1)}
            color="error"
          >
            Added new record
          </Button>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center m-5">
          <div className="w-25 h-25">
            <PieChart
                data={[
                  { title: 'Present', value: count, color: '#E38627' },
                  { title: 'Absent', value: 75-count, color: '#C13C37' },
                ]}
                />;
          </div>
      </div>
    </div>
    </div>
  );
};

export  {Statistic};
