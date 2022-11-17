import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavBar } from "./NavBar";
import "../styles/UploadAttendance.css";

const UploadAttendance = () => {
  const [count, setCount] = useState(0);

 const student = [
    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
    {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
    {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
    {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
    {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
    {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
    {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
    {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
];

  return (
    <div>
      <NavBar />

      <div class="form-outline " className="board">
        <div class="container mt-3">
          <div class="row">
            <div class="col-sm">
              <label class="form-label" for="Enter Board">
                Board
              </label>
            </div>
            <div class="col-sm">
              <input type="text" class="form-control" />
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-primary">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="details mt-3 mb-2">
        <div class="container">
          <div class="row">
            <div class="col-sm"><h4><b>Date :</b> 17/11/2022</h4></div>
            <div class="col-sm"><h4><b>Module:</b> EE6302</h4></div>
            <div class="col-sm"><h4><b>Batch:</b> 2018/2019</h4></div>
            {/* <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div> */}
          </div>
        </div>
      </div>

      <div className="table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Student Id</th>
              <th scope="col">Attendance</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { UploadAttendance };
