'use client';

import { GridColDef } from "@mui/x-data-grid";
import { DashBoard } from "../../../types/dashborad/dashBoard";

export const dashboradColumnDef:GridColDef<DashBoard>[] = [
    {
        field: "name",
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: 'Age',
        width: 150,
        editable: true,
    },
];

export default dashboradColumnDef;