import axios from 'axios';

const USER_BASE_URL = "http://localhost:3005/api/v1/users";
class UserService {

        getUserList(){
            return axios.get(USER_BASE_URL);
        }

        createUser(employeeId){
            return axios.post(USER_BASE_URL, employeeId);
        }
    
        getUserById(employeeId){
            return axios.get(USER_BASE_URL + '/' + employeeId);
        }
    
        updateUser(employee, employeeId){
            return axios.put(USER_BASE_URL + '/' + employeeId, employee);
        }
    
        deleteUser(employeeId){
            return axios.delete(USER_BASE_URL + '/' + employeeId);
        }
}

export default new UserService();