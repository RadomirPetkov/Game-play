import { loginHandler } from "../../services/authService"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    const { saveUser } = useContext(AuthContext)

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={(e) => loginHandler(e, saveUser, navigate)}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}