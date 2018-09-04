
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getItems = () => dispatch => {
    // type: GET_ITEMS,
    dispatch(setItemsLoading());
    axios({method: "get", url: "https://shopping-list-happitt.c9users.io:8081/api/items"})
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data,
            })
        );
};

export const addItem = (item) => dispatch => {
    // type: ADD_ITEM,
    // payload: item,
    axios({
        method: "post", 
        url: "https://shopping-list-happitt.c9users.io:8081/api/items",
        data: item
    })
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data,
            })
        );
};

export const deleteItem = (id) => dispatch => {
    // type: DELETE_ITEM,
    // payload: id,
    axios({
        method: "delete", 
        url: `https://shopping-list-happitt.c9users.io:8081/api/items/${id}`,
    })
        .then(res => 
            dispatch({
                type: DELETE_ITEM,
                payload: id,
            })
        );
};

export const setItemsLoading = () => ({
    type: ITEMS_LOADING,
});






