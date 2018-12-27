import React from "react";
import { connect } from "react-redux";
import { addRow } from "../../redux/actions";

const AddRow = ({addRow}) => <div className="bar_item" onClick={() => addRow("")}>Add Row</div>

// export default Todo;
export default connect(null, {addRow})(AddRow);