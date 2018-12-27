import React from "react";
import { connect } from "react-redux";
import { addColumn } from "../../redux/actions";

const AddColumn = ({addColumn}) => <div className="bar_item" onClick={() => addColumn("")}>Add Column</div>

// export default Todo;
export default connect(null, {addColumn})(AddColumn);