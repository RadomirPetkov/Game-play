import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import * as request from "../../services/requester"
import { useNavigate } from "react-router-dom"


export const Logout = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        request.logout(user.accessToken)
            .then(res => console.log(res))
            .then(localStorage.clear())
        logoutUser()
        navigate(`/`)
    }, [])

    return null

}