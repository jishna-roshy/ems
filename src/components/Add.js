import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desg, setDesg] = useState('')
  const [salary, setSalary] = useState('0')

  let history = useNavigate()
  const handleAdd = (e) => {
    e.preventDefault()
    let ids = uuid()
    console.log(ids);
    let uniqueId = ids.slice(0, 8)
    console.log(uniqueId);

    Employee.push({
      id: uniqueId,
      uname: uname,
      age: age,
      desg: desg,
      salary: salary
    })
    history('/')


  }
  return (
    <>
    
      <h1 className='text-light text-center mt-5'>Add Employee Management</h1>
      <p className='text-center'>
        “Employees who feel valued and appreciated by their leaders are infinitely more likely to go above and beyond for the company and hold themselves accountable .
      </p>
      <Row>
        <Col>
          <img  width={'500px'} height={'450px'} src='https://www.commbox.io/wp-content/uploads/2019/10/32-1-1024x597.jpg' />
        </Col>
        <Col>
          <Form className='border border-3 p-4'>


            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="password"
                onChange={(e) => setUname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text"
                onChange={(e) => setDesg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>salary</Form.Label>
              <Form.Control type="text"
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>



            <Button
              onClick={(e) => handleAdd(e)} variant="dark" type="submit"
            >
              ADD
            </Button>
          </Form>
        </Col>
      </Row>
    </>

  )
}

export default Add