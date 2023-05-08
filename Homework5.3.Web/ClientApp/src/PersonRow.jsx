import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonRow extends React.Component {

    render() {

        return (<tr className={this.props.currentPerson.age >= 65 ? 'table-danger' : ""}>
            <th>{this.props.currentPerson.firstName}</th>
            <th>{this.props.currentPerson.lastName}</th>
            <th>{this.props.currentPerson.age}</th>
        </tr>)

    }
}
export default PersonRow