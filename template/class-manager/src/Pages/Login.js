import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {withRouter} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <input type="text" className="form-control" placeholder="Username" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)
