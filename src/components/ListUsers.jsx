import React from 'react';
import UserService from '../services/UserService';
// import { withRouter } from "react-router";
import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
class ListUsers extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
         
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserList().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    render() {
     
        return (
            <div>
                <h2 className='text-center'> Users List</h2>
                <div className='row'>
                    <button className = 'btn btn-primary' onClick = {this.addUser}>Add User</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Address</th>  
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.users.map(
                                user => 
                                <tr key ={user.id}>
                                    <td> {user.firstName}</td>
                                    <td> {user.middleName}</td>
                                    <td> {user.lastName}</td>
                                    <td> {user.dateOfBirth}</td>
                                    <td> {user.email}</td>
                                    <td> {user.address}</td>
                                    <td> {user.gender}</td>
                                    <td> {user.phoneNumber}</td>
                                    <td>
                                                 <button className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                                             </td>
                                </tr>
                            )
                         }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListUsers);
// export default ListUsers;
