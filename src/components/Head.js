import React from "react";
import { connect } from "react-redux";
import { editHead } from "../redux/actions";

class Head  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vis: false, value: this.props.item };
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
            this.props.editHead(this.state.value, this.props.number)
        }
    }
    render() {
        return (
        <th onClick={()=>this.openItem()}>
        {this.state.vis === false?
        this.props.item
        :
        <div><input onKeyPress={event => this.saveItem(event.key)} onChange={e => this.insertItem(e.target.value)} value={this.state.value} /></div>
        }
        </th>
        )
    }
}

// export default Todo;
export default connect(null, {editHead})(Head);