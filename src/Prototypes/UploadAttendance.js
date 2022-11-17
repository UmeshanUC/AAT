import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavBar } from "./NavBar";
import "../styles/UploadAttendance.css";

const UploadAttendance = () => {
  const [count, setCount] = useState(0);

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

      <div className="details mt-3 mb-t">
        <div class="container">
          <div class="row">
            <div class="col-sm"><b>Date :</b> 17/11/2022 </div>
            <div class="col-sm"><b>Module:</b> EE6302</div>
            <div class="col-sm"><b>Batch:</b> 2018/2019</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
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
