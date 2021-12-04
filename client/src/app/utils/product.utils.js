import axios from 'axios'
const getProductDetailRoute = "http://localhost:8080/products/detail/"
const getAllProductsRoute = "http://localhost:8080/products/all"
const searchProductRoute = "http://localhost:8080/products/search?product_name="
export const getProductDetail = async (productId) => {
    const response = await axios.get(getProductDetailRoute + productId)
    console.log("response:", response.data)
    return response.data
}
export const getAllProducts = async () => {
    const response = await axios.get(getAllProductsRoute)
    console.log("response:", response)
    return response.data
}

export const searchProduct = async (productName) => {
    const response = await axios.get(searchProductRoute + productName)
    console.log("response:", response)
    return response.data
}