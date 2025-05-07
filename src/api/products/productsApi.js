import config from "@/config";

const { default: axios } = require("axios");

async function getAllProducts() {
   return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductById(id) {
   return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

export { getAllProducts, getProductById }