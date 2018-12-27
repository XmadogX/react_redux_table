import React from "react";
import AddRow from "./menu/AddRow";
import AddColumn from "./menu/AddColumn";
import DeleteRow from "./menu/DeleteRow";
import DeleteColumn from "./menu/DeleteColumn";

class Menu  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { row : false, column : false};
    }
    viewRow = () => {
        this.setState({ row: !this.state.row, column: false })
    }
    viewColumn = () => {
        this.setState({ column: !this.state.column, row: false })
    }
    render() {
        return (
            <div>
                <div className="nav_item" onClick={()=>this.viewRow()}>Row
                {
                    this.state.row === true?
                    <div className="bar"><AddRow /><DeleteRow /></div>:""
                }
                </div>
                <div className="nav_item" onClick={()=>this.viewColumn()}>Column
                {
                    this.state.column === true?
                    <div className="bar"><AddColumn /><DeleteColumn /></div>:""
                }
                </div>
            </div>
        )
    }
}

// export default Todo;
export default Menu;