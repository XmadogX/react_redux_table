import React from "react";
import { connect } from "react-redux";
import { editCell } from "../redux/actions";

class Cell  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vis: false, value: this.props.cell };
    }
    openItem = () =>{
        this.setState({ vis: true })
    }
    insertItem = value =>{
        this.setState({ value: value })
    }
    saveItem = event =>{
        if(event === "Enter") {
            this.setState({ vis: false })
            this.props.editCell(this.state.value, this.props.number_row, this.props.number_cell)
        }
    }

    render() {
        return (
            <td onClick={()=>this.openItem()}>
            {this.state.vis === false?
            this.props.cell
            :
            <input onKeyPress={event => this.saveItem(event.key)} onChange={e => this.insertItem(e.target.value)} value={this.state.value} />
            }
            </td>
       )
    }
}

// export default Todo;
export default connect(null, {editCell})(Cell);