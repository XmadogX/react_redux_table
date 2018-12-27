import React from "react";
import { connect } from "react-redux";
import {deleteRow} from "../../redux/actions";

const DeleteRow = ({deleteRow}) => <div className="bar_item" onClick={() => deleteRow("")}>Delete Row</div>

// export default Todo;
export default connect(null, {deleteRow})(DeleteRow);