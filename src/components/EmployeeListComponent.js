import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService.js';

export default class EmployeeListComponent extends Component 
{
  constructor(props)
  {
        super(props);

        this.state={
            employees:[]
        }
  }  
  componentDidMount()
  {
    EmployeeService.getEmployees().then((res)=>{
        this.setState({employees:res.data});
    })
  }
  render() 
  {
    return (
      <div className='container mt-3'>
            <h4 className='text-center'> Employee List </h4>
            <div className='row mt-4'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST-NAME</th>
                            <th>LAST-NAME</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee)=>{
                                return <tr>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
      </div>
    )
  }
}
