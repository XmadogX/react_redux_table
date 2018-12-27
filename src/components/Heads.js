import React from "react";
import Head from "./Head";

const Heads = ({ head }) => (
    <thead>
        <tr>
            <td className="nav" ></td>
            {           
                head.map((item, index) => <td className="nav" key = {index}>{index+1}</td>)
            }
        </tr>
        <tr>
            <td className="nav">0</td>
            {           
                head.map((item, index) => <Head key = {index} item={item} number = {index} />)
            }
        </tr>
    </thead>
)

// export default Todo;
export default Heads;