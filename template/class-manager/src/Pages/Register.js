import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            fullname: '',
            age: 0
        }
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.processLogin = this.processLogin.bind(this)
    }

    processLogin(e) {
        axios.post('http://localhost:8080/api/users', {
            username: this.state.username,
            password: this.state.password,
            fullname: this.state.fullname,
            age: this.state.age
        })
        .then((response) => {
            alert('Bạn đã đăng kí thành công')
            this.props.history.push('/login')
        })
        .catch(function(err) {
            alert(err)
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
                    <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <input type="text" className="form-control" value={this.state.username} onChange={(e) => this.handleChangeInput(e, 'username')} placeholder="Username" required />
                    <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.handleChangeInput(e, 'password')} placeholder="Password" required />
                    <input type="text" className="form-control" value={this.state.fullname} onChange={(e) => this.handleChangeInput(e, 'fullname')} placeholder="Fullname" required />
                    <input type="number" className="form-control" value={this.state.age} onChange={(e) => this.handleChangeInput(e, 'age')} placeholder="Age" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.processLogin}>Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                </form>
            </div>
        )
    }
}

export default withRouter(Register)
