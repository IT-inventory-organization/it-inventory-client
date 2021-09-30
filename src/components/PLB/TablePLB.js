import React, { useState } from "react";
import EnchancedToolbar from "../EnchancedToolbar";
import useTable from "../useTable";
import { TableBody, TableRow, TableCell } from "@mui/material";
import PBLDummy from "../../dummy/plbDummy.json";
import LineApproval from "./LineApproval";

const headCells = [
  { id: "no", label: "No" },
  { id: "jenisInventory", label: "Jenis Inventory" },
  { id: "nomorAjuan", label: "Nomor Ajuan" },
  { id: "tanggalAjuan", label: "Tanggal Ajuan" },
  { id: "noDaftar", label: "No.Daftar" },
  { id: "tanggalDaftar", label: "Tanggal Daftar" },
  { id: "pengirim", label: "Pengirim" },
  { id: "penerima", label: "Penerima" },
  { id: "jalur", label: "Jalur", disableSorting: true },
  // { id: "action", label: "", disableSorting: true },
];

function TablePLB({ handleOpenModal }) {
  const { TblContainer, TblHead, TblPagination } = useTable(
    PBLDummy,
    headCells
  );
  return (
    <>
      <EnchancedToolbar handleOpenModal={handleOpenModal} />
      <TblContainer>
        <TblHead />
        <TableBody>
          {PBLDummy.map((val, index) => {
            return (
              <TableRow key={index.toString()}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{val.jenisInvetory}</TableCell>
                <TableCell>{val.nomorAjuan}</TableCell>
                <TableCell>{val.tanggalAjuan}</TableCell>
                <TableCell>{val.noDaftar}</TableCell>
                <TableCell>{val.tanggalDaftar}</TableCell>
                <TableCell>{val.pengirim}</TableCell>
                <TableCell>{val.penerima}</TableCell>
                <TableCell>
                  <LineApproval approval={val.jenisInvetory} />
                </TableCell>
                {/* <TableCell>action</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </>
  );
}

export default TablePLB;
