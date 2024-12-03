import axios from 'axios';

const EMPLOYEE_API="http://localhost:9191/api/v1/employees";
class EmployeeService
{
    getEmployees()
    {
        return axios.get(EMPLOYEE_API);
    }
}
export default new EmployeeService();