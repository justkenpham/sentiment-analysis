import axios from 'axios'

const RegisterRoute = 'http://localhost:8080/register'

export const postRegistrationToBE = async (usernameData, passwordData, confirmPassWord) => {
    const registerData = {
        username: usernameData,
        password: passwordData,
        password_confirm: confirmPassWord
    }
    const response = await axios.post(RegisterRoute, registerData).then(res => console.log(res))
    console.log("post successfully")
}