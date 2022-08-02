import * as request from "../services/requester"

export const loginHandler = async (e, saveUser, navigate) => {
   
    e.preventDefault()
    const { email, password } = Object.fromEntries(new FormData(e.target))

    try {
        const loginInfo = await request.post(`/users/login`, { email, password })
     
        saveUser(loginInfo)
        navigate(`/`)

    } catch (error) {
        console.log(error);
    }

}