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
                <a href="#">Create an account</a>
                <button type="submit">LOG IN</button>
        </form>
    </div>
  )
}

export default Login