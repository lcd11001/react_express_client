import React from 'react'
import * as API from '../api'

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: this.state.username
        }

        console.log(user)
        API.AddUser(user)
            .then(res => {
                console.log(res.data)
                this.setState({
                    username: ''
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={'form-group'}>
                        <label>Username:</label>
                        <input type={'text'}
                            required
                            className={'form-control'}
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                        </input>
                    </div>

                    <div className={'form-group'}>
                        <input type={'submit'} value={'Create User'} className={'btn btn-primary'} />
                    </div>
                </form>
            </div>
        )
    }
}