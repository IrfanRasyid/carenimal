import axios from "axios";

const url = process.env.URL_APP;
export const getProduct = () => {
    return fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getProductWithID = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}