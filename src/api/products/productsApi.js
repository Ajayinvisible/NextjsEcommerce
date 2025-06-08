import config from "@/config";
import axios from "axios";
import api from "../api";

async function getAllProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getProductByUser() {
  return await api.get(`${config.apiUrl}/api/products/users`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function createProduct(data) {
  return await api.post(`${config.apiUrl}/api/products`, data);
}

async function updateProduct(id, data) {
  return await api.put(`${config.apiUrl}/api/products/${id}`, data);
}

async function deleteProduct(id) {
  return await api.delete(`${config.apiUrl}/api/products/${id}`);
}

export {
  createProduct,
  updateProduct,
  getAllProducts,
  getCategories,
  getProductById,
  getProductByUser,
  deleteProduct
};

