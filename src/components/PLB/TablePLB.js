/* eslint-disable eqeqeq */
import React, { useCallback, useState } from "react";
import EnchancedToolbar from "../EnchancedToolbar";
import useTable from "../useTable";
import { TableBody, TableRow, TableCell, MenuItem } from "@mui/material";
import PBLDummy from "../../dummy/plbDummy.json";
import LineApproval from "./LineApproval";
import MenuActions from "../MenuActions";
import { ReactComponent as IcView } from "../../assets/icons/ic_view.svg";
import { ReactComponent as IcDelete } from "../../assets/icons/ic_delete.svg";
import { ReactComponent as IcEdit } from "../../assets/icons/ic_edit.svg";
import { ReactComponent as IcPrint } from "../../assets/icons/ic_print.svg";

const headCells = [
  { id: "id", label: "No" },
  { id: "jenisInvetory", label: "Jenis Inventory" },
  { id: "nomorAjuan", label: "Nomor Ajuan" },
  { id: "tanggalAjuan", label: "Tanggal Ajuan" },
  { id: "noDaftar", label: "No.Daftar" },
  { id: "tanggalDaftar", label: "Tanggal Daftar" },
  { id: "pengirim", label: "Pengirim" },
  { id: "penerima", label: "Penerima" },
  { id: "jalur", label: "Jalur", disableSorting: true },
  { id: "action", label: "", disableSorting: true },
];

function TablePLB({ handleOpenModal }) {
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    page,
    rowsPerPage,
  } = useTable(PBLDummy, headCells, filterFn);

  const handleSearch = useCallback((e) => {
    let target = e.target.value;
    setFilterFn({
      fn: (items) => {
        if (target.toLowerCase() == "") return items;
        else
          return items.filter((x) => {
            return x.jenisInvetory
              .toLowerCase()
              .replace(/ /g, "")
              .includes(target.toLowerCase().replace(/ /g, ""));
          });
      },
    });
  }, []);

  return (
    <>
      <EnchancedToolbar
        handleOpenModal={handleOpenModal}
        handleChangeSearch={handleSearch}
      />
      <TblContainer size="small">
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((val, index) => {
            return (
              <TableRow key={index.toString()}>
                {/* <TableCell>{page * rowsPerPage + (index + 1)}</TableCell> */}
                <TableCell>{val.id}</TableCell>
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
                <TableCell>
                  <MenuActions placeholder={"Actions"}>
                    <MenuItem>
                      <IcView />
                      View
                    </MenuItem>
                    <MenuItem>
                      <IcEdit />
                      Edit
                    </MenuItem>
                    <MenuItem>
                      <IcDelete />
                      Delete
                    </MenuItem>
                    <MenuItem>
                      <IcPrint />
                      Print
                    </MenuItem>
                  </MenuActions>
                </TableCell>
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
