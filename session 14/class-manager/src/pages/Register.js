import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/signin.css'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            fullname: '',
            age: 0
        }
        this.processLogin = this.processLogin.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    processLogin(e) {
        axios.post('http://localhost:8080/api/users', {
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
            age: this.state.age
        })
        .then((response) => {
            console.log(response)
            // this.props.history.push('/login')
        })
        .catch(function(err) {
            console.error(err)
        })

        e.preventDefault()
    }

    handleChangeInput(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form className="form-signin">
                    <h1 className="h3 text-center mb-3 font-weight-normal">Please sign in</h1>
                    <label className="sr-only">Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChangeInput(e, 'username')} />
                    <label className="sr-only">Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChangeInput(e, 'password')} />
                    <label className="sr-only">Fullname</label>
                    <input type="text" className="form-control" placeholder="Fullname" value={this.state.fullname} onChange={(e) => this.handleChangeInput(e, 'fullname')} />
                    <label className="sr-only">Age</label>
                    <input type="number" className="form-control" placeholder="Age" value={this.state.age} onChange={(e) => this.handleChangeInput(e, 'age')} />
                    <button className="btn btn-lg btn-primary btn-block my-5" type="submit" onClick={this.processLogin}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
                </form>
            </div>
        )
    }
}

export default withRouter(Register)
