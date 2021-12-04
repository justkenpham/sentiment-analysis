import axios from 'axios'
const getReviewRoute = "http://localhost:8080/reviews/get-reviews/"
const postReviewRoute = "http://localhost:8080/reviews/post-reviews/";


export const postReviewToBE = async (review) => {
    const post = await axios.post(postReviewRoute, review).then(res => console.log(res))
    console.log("post successfully")
}

export const getReviewFromBE = async (productId) => {
    const response = await axios.get(getReviewRoute + productId)
    console.log("response:", response)
    return response.data
}