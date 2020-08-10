import React from 'react'
import { Link } from 'react-router-dom'
import * as API from '../api'

const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`}>Edit</Link> | <a href='#' onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
            </td>
        </tr>
    )
}

export default class ExerciseList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        API.GetExercises()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        exercises: res.data
                    })
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    deleteExercise = (id) => {
        API.DeleteExercise(id)
            .then(res => {
                console.log(res.data)
                this.setState((prevState, nextProps) => ({
                    exercises: prevState.exercises.filter(ex => ex._id !== id)
                }))
            })


    }


    exerciseList() {
        return this.state.exercises.map(ex => {
            return <Exercise exercise={ex} deleteExercise={this.deleteExercise} key={ex._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className={'table'}>
                    <thead className={'thead-light'}>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}