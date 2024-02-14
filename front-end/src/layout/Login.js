import { Link } from "react-router-dom";

function Login() {

    function submitLogin(e){
        e.preventDefault();
    }


  return (
    <div className="page">
        <h1>Log in</h1>
        <form onSubmit={submitLogin}>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input required type="text" name="email" placeholder="Enter your email address" />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input required type="text" name="password" placeholder="Enter your password" />
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="/register">Create an account</Link>
                <button type="submit">LOG IN</button>
        </form>
    </div>
  )
}

export default Login