import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class PersonForm extends React.Component{


    render() {
        return <>            
<div className="container mt-5">
    <div className="row bg-light p-4 rounded mb-3">
        <div className="col-md-3">
            <input type="text" placeholder="First Name" className="form-control" onChange={this.props.onFirstNameTextChange} value={this.props.firstName} ></input>
        </div>
        <div className="col-md-3">
            <input type="text" placeholder="Last Name" className="form-control" onChange={this.props.onLastNameTextChange} value={this.props.lastName}></input>
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="Age" className="form-control" onChange={this.props.onAgeTextChange}value={this.props.age} ></input>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={this.props.onAddClick}>Add</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-warning ml-3"onClick={this.props.onClearAllClick}>Clear All</button>
                </div>
                </div>
</div>
</>                     
}}



export default PersonForm