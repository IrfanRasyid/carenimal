import axios from "axios";

const product = process.env.PRODUCT_API;
export const getProduct = () => {
    return fetch(`${product}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getProductWithID = (id) => {
    return fetch(`${product}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}