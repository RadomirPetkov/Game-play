import * as request from "../services/requester"


export const loginHandler = async (e) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(new FormData(e.target))
    const loginInfo = await request.post(`/users/login`, { email, password })
    console.log(loginInfo);
}