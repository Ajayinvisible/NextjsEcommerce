import config from "@/config";

const { default: axios } = require("axios");

async function getAllProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getProductByUser() {
  return await axios.get(`${config.apiUrl}/api/products/users`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

export { getAllProducts, getCategories, getProductById, getProductByUser };
