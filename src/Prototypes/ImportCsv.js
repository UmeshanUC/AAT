import React, { useState } from "react";
import { NavBar } from "./NavBar";
import Table from "react-bootstrap/Table";
import "../styles/UploadAttendance.css";

function ImportCsv() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h2>Create New Module</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="row">
                <h5> Add Module</h5>
              </div>
              <div class="row">
                <div class="col-sm" className="moduleInput">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="row">
                <h5>UPLOAD FILE</h5>
              </div>
              <div class="row">
                <form>
                  <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                  />
                  <button
                    onClick={(e) => {
                      handleOnSubmit(e);
                    }}
                  >
                    IMPORT CSV
                  </button>
                </form>
              </div>
            </div>
            <div >
            <button type="button" class="btn btn-primary">Add</button>
              </div>
          </div>

        </div>

        <br />

        <Table striped bordered hover>
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
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
        </Table>
      </div>
    </div>
  );
}

export { ImportCsv };
