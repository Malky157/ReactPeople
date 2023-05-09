import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';


class PeopleTable extends React.Component {
    state = {
        people: [],
        firstName: "",
        lastName: "",
        age: ""

    }

    onFirstNameTextChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    onLastNameTextChange = (e) => {
        this.setState({ lastName: e.target.value })
    }
    onAgeTextChange = (e) => {
        this.setState({ age: e.target.value })
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        copy.push(person)
        this.setState({ people: copy, firstName: "", lastName: "", age: "" })
    }

    onClearAllClick = () => {
        this.setState({ people: [], firstName: "", lastName: "", age: "" })

    }

    render() {

        return <>
            <PersonForm
                onAddClick={this.onAddClick}
                onClearAllClick={this.onClearAllClick}
                onFirstNameTextChange={this.onFirstNameTextChange}
                onLastNameTextChange={this.onLastNameTextChange}
                onAgeTextChange={this.onAgeTextChange}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
            />
            {this.state.people.length === 0 ?
                <div className='container md-3'>
                    <h1>No people added yet! add some people!</h1>
                </div> :
                <div className='container md-3'>
                    <table className='table table hover table striped table borderd'>
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </thead>
                        <tbody>
                            {this.state.people.map(p => <PersonRow currentPerson={p} />)}
                        </tbody>
                    </table>
                </div>
            }
        </>;
    }
}
export default PeopleTable