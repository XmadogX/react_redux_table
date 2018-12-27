import { ADD_ROW, ADD_COLUMN, EDIT_HEAD, EDIT_CELL, DELETE_ROW, DELETE_COLUMN } from "./actionTypes";

export const addRow = row => {
    return ({
        type: ADD_ROW,
        row: row
    });
}

export const addColumn = column => {
    return ({
        type: ADD_COLUMN,
        column: column
    });
}

export const deleteRow = () => {
   return ({
        type: DELETE_ROW,
    });
}

export const deleteColumn = () => {
    return ({
        type: DELETE_COLUMN,
    });
}

export const editHead = (value, number) => {
    return ({
        type: EDIT_HEAD,
        value: value,
        number: number
    });
}

export const editCell = (value, number_row, number_cell) => {
    return ({
        type: EDIT_CELL,
        value: value,
        number_row: number_row,
        number_cell: number_cell
    });
}