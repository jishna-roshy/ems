import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import { BiGroup } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const history = useNavigate();
    const handleDelete = (id) => {
        alert('deleted')
        let index = (Employee.map(item => item.id).indexOf(id));
        Employee.splice(index, 1);
        console.log(Employee);
        history('/')

    }
    const handleEdit = (id, uname, age, desg, salary) => {
        localStorage.setItem("id", id);
        localStorage.setItem("uname", uname);
        localStorage.setItem("age", age);
        localStorage.setItem("desg", desg);
        localStorage.setItem("salary", JSON.stringify(salary));
    }
    return (
        <div >
            <h1 className='text-light text-center mt-5'>Employee Management</h1>
            
            <Link to={'/add'}>
                <Button className='btn btn-success'>Add<BiGroup /></Button>
            </Link>

            <h3 className='mt-5'>List of employee</h3>
            <Table className='mt-5'  striped bordered hover>
                <thead>
                    <tr>
                        <th>Uname</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employee && Employee.length > 0 ?
                            Employee.map((item) => (
                                <tr>
                                    <td>{item.uname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.desg}</td>
                                    <td>{item.salary}</td>

                                    <td>
                                        <Link to={'/edit'}>
                                            <Button className='me-3' onClick={() => handleEdit(item.id, item.uname, item.age, item.desg, item.salary)}><BsFillPencilFill /></Button></Link>
                                    </td>
                                    <td><Button onClick={() => handleDelete(item.id)} className='btn btn-danger'><ImBin /></Button></td>
                                </tr>
                            )) : 'Error'
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Home