import React from "react";
import Cell from "./Cell";

const Rows = ({ rows, number_row }) => (
        rows.map((cell, index) => <Cell key = {index} cell={cell} number_row={number_row} number_cell={index} />)
);

// export default Todo;
export default Rows;