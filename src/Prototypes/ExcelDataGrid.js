import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { randomUpdatedDate } from "@mui/x-data-grid-generator";
import { NavBar } from "./NavBar";

const columns = [
  { field: "id", headerName: "RegNo", width: 150 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "attendance",
    headerName: "Attendance",
    type: "bool",
    width: 110,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "time",
    headerName: "Recorded Time",
    type: "dateTime",
    width: 220,
    editable: false,
  },
];

const rows = [
  {
    id: "EG/2018/3312",
    lastName: "Snow",
    firstName: "Jon",
    attendance: true,
    time: "10/12/2022, 3:36:48 AM",
  },
  {
    id: "EG/2018/3313",
    lastName: "Lannister",
    firstName: "Cersei",
    attendance: true,
    time: "10/12/2022, 3:06:54 PM",
  },
  {
    id: "EG/2018/3314",
    lastName: "Lannister",
    firstName: "Jaime",
    attendance: false,
    time: "10/12/2022, 3:04:54 PM",
  },
  {
    id: "EG/2018/3315",
    lastName: "Stark",
    firstName: "Arya",
    attendance: true,
    time: "10/12/2022, 3:11:54 PM",
  },
  {
    id: "EG/2018/3316",
    lastName: "Targaryen",
    firstName: "Daenerys",
    attendance: true,
    time: "10/12/2022, 3:12:54 PM",
  },
  {
    id: "EG/2018/3317",
    lastName: "Melisandre",
    firstName: null,
    attendance: true,
    time: "10/12/2022, 3:13:54 PM",
  },
  {
    id: "EG/2018/3318",
    lastName: "Clifford",
    firstName: "Ferrara",
    attendance: true,
    time: "10/12/2022, 3:14:54 PM",
  },
  {
    id: "EG/2018/3319",
    lastName: "Frances",
    firstName: "Rossini",
    attendance: true,
    time: "10/12/2022, 3:15:54 PM",
  },
  {
    id: "EG/2018/3320",
    lastName: "Roxie",
    firstName: "Harvey",
    attendance: true,
    time: "10/12/2022, 3:16:54 PM",
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ExcelDataGrid() {
  return (
    <div>
      <NavBar />

      <div className="m-5">
        <h1 className="display-6 mb-4 fe-normal ">
          Attendance of EE6211 on 17/11/2022
        </h1>
        <div>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pattendanceStrue={5}
            rowsPerPattendanceOtrueons={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            components={{ Toolbar: CustomToolbar }}
          />
        </Box>
        </div>
      </div>
    </div>
  );
}
