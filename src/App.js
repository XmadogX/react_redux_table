import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { getTable, getHead} from "./redux/selectors";
import Heads from "./components/Heads";
import Table from "./components/Table";
import Menu from "./components/Menu";

const ItemsList = ({ table, head}) => (
    <div>
    <Menu/>
    <table>
        <Heads head={head} />
        <tbody><Table table={table} /></tbody>
    </table>
    </div>
)

const mapStateToProps = state => {
    const head = getHead(state)
    const table = getTable(state)
    return {table, head};
}

export default connect(mapStateToProps)(ItemsList);
