import React from 'react'
import * as API from '../api'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class EditExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        API.GetExercise(this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date),
                    users: [res.data.username]
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuaration = (e) => {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)
        API.UpdateExercise(this.props.match.params.id, exercise)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={'form-group'}>
                        <label>Username:</label>
                        <select
                            /*ref={'userInput'}*/
                            required
                            className={'form-control'}
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                            {
                                this.state.users.map(user => {
                                    return (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className={'form-group'}>
                        <label>Description:</label>
                        <input type={'text'}
                            required
                            className={'form-control'}
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        >
                        </input>
                    </div>

                    <div className={'form-group'}>
                        <label>Duration (in minutes):</label>
                        <input type={'text'}
                            required
                            className={'form-control'}
                            value={this.state.duration}
                            onChange={this.onChangeDuaration}
                        >
                        </input>
                    </div>

                    <div className={'form-group'}>
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className={'form-group'}>
                        <input type={'submit'} value={'Edit Exercise Log'} className={'btn btn-primary'} />
                    </div>
                </form>
            </div>
        )
    }
}