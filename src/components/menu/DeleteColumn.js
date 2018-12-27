import React from "react";
import { connect } from "react-redux";
import { deleteColumn } from "../../redux/actions";

const DeleteColumn = ({deleteColumn}) => <div className="bar_item" onClick={() => deleteColumn("")}>Delete Column</div>

// export default Todo;
export default connect(null, {deleteColumn})(DeleteColumn);