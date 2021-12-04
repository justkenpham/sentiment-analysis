import axios from 'axios'

const RegisterRoute = 'http://localhost:8080/register'
const LoginRoute = 'http://localhost:8080/login'
export const postRegistrationToBE = async (usernameData, passwordData, confirmPassWord) => {
    const registerData = {
        username: usernameData,
        password: passwordData,
        password_confirm: confirmPassWord
    }
    let response;
    await axios.post(RegisterRoute, registerData)
        .then(res => {
            console.log(res)
            response = res
        })
    console.log("Successfully send to server", response)
    return response.data
}

export const loginCheckInBE = async (usernameData, passwordData) => {
    const loginData = {
        username: usernameData,
        password: passwordData,
    }
    let response;
    await axios.post(LoginRoute, loginData)
        .then(res => {
            console.log(res)
            response = res
        })
    console.log("Successfully send to server", response)
    return response.data
}