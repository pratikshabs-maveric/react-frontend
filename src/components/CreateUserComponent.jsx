import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            middleName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            address: '',
            gender: '',
            phoneNumber: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);


        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    middleName:employee.middleName,
                    lastName: employee.lastName,
                    dateOfBirth: employee.dateOfBirth,
                    email : employee.email,
                    address: employee.address,
                    gender: employee.gender,
                    phoneNumber: employee.phoneNumber
                });
            });
        }        
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, middleName: this.state.middleName,lastName: this.state.lastName ,dateOfBirth: this.state.dateOfBirth,email: this.state.email, address: this.state.address, gender: this.state.gender, phoneNumber: this.state.phoneNumber,Password: this.state.Password};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(employee).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(employee, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeMiddleNameHandler= (event) => {
        this.setState({middleName: event.target.value});
    }
    
    changeDateOfBirthHandler= (event) => {
        this.setState({dateOfBirth: event.target.value});
    }
    
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    
    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({Password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }

    render() {
      
                return (
            <div>
          
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Middle Name: </label>
                                            <input placeholder="Middle Name" name="middleName" className="form-control" 
                                                value={this.state.middleName} onChange={this.changeMiddleNameHandler}/>
                                        </div>
                                        

                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="DOB" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.emailId} onChange={this.changePhoneNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="Password" className="form-control" 
                                                value={this.state.Password} onChange={this.changePasswordrHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent;