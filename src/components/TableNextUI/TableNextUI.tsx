'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const data = [
    { id: 1, name: "Tony Reichert", role: "CEO", status: "Active" },
    { id: 2, name: "Zoey Lang", role: "Technical Lead", status: "Paused" },
    { id: 3, name: "Jane Fisher", role: "Senior Developer", status: "Active" },
    { id: 4, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 5, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 6, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 7, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 8, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 9, name: "William Howard", role: "Community Manager", status: "Vacation" },
    { id: 10, name: "William Howard", role: "Community Manager", status: "Vacation" }
  ];
  
export const  TableMataerialUI = () => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {/* Utilizamos map para generar dinámicamente las filas de la tabla */}
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
