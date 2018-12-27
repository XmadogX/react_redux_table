import React from "react";
import Rows from "./Rows";

const Table = ({ table }) => (
    table.map((rows, index) =>
        <tr>
            <td className="nav">{index+1}</td><Rows key = {index} rows={rows} number_row={index} />
        </tr>
    )
);

// export default Todo;
export default Table;