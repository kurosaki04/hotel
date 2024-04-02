import axios from "axios"

const useAuth = () => {
  
    const createNewUser = data => {
        const url = 'https://booking-db-ngao.onrender.com/users'
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const loginUser = data => {
        const url = 'https://booking-db-ngao.onrender.com/users/login'
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        })
        .catch(err => console.log(err))
    }

    return {createNewUser, loginUser}

}

export default useAuth