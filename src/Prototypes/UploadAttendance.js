import { Button } from "@mui/material";
import React, { useState,useEffect } from "react";
import { NavBar } from "./NavBar";
import "../styles/UploadAttendance.css";
import { globalData } from './globle';

const UploadAttendance = () => {
  const [count, setCount] = useState(0);
  const [array, setData] = useState([]);
  useEffect(() => {
      
      globalData.testArr =array ;
}, [array])
 console.log(globalData.testArr);

 var stream = [];

 const handleSend = () => {
     alert();
 };
 
 document.addEventListener('DOMContentLoaded', () => {
     GetEl('btn').addEventListener('click', handleSend);
     GetEl('connect').addEventListener('click', handleConnect);
 });
 
 const GetEl = (id) => {
     return document.getElementById(id);
 };
 
 const handleConnect = () => {
     (async () => {
         const port = await navigator.serial.requestPort();
         await port.open({ baudRate: 9600 });
         ListenToSerial(port);
     })();
 };
 
 const ListenToSerial = (port) => {
     (async () => {
         const reader = port.readable.getReader();
         // const textDecoder = new TextDecoderStream();
         // const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
         // const reader = textDecoder.readable.getReader();
 
         while (true) {
             const { value, done } = await reader.read();
             if (done) {
                 // Allow the serial port to be closed later.
                 reader.releaseLock();
                 break;
             }
             // value is a Uint8Array.
 
             if (String(value).includes('10') || String(value).includes('13')) {
                 console.log(value);
             }
             stream.push(value);
             // AppendLineToCli(stream.join(''));
         }
     })();
 };
 
 const AppendLineToCli = (value) => {
     const node = document.createElement('div');
     const textnode = document.createTextNode(value);
     node.appendChild(textnode);
     node.classList.add('cli-line');
     const cli = GetEl('cli');
     cli.appendChild(node);
     cli.scrollBy(0, 100);
 };



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
            <div class="col-sm"><h4><b>Module:</b> EE6211</h4></div>
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
              <th scope="col">Student ReNo.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Full Name</th>
              <th scope="col">Attendance</th>
            </tr>
          </thead>
          <tbody>
          {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { UploadAttendance };
