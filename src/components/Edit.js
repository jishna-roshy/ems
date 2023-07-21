import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';




function Edit() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desg, setDesg] = useState('')
  const [salary, setSalary] = useState('0')


  useEffect(() => {
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary(JSON.parse(localStorage.getItem('salary')))
  }, [])
  console.log(uname);
  console.log(age);
  console.log(desg);
  console.log(salary);

  var index = Employee.map(item => item.id).indexOf(id);
  console.log(index);

  let history = useNavigate()


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e);
    let emp = Employee[index]
    emp.uname = uname;
    emp.age = age;
    emp.desg = desg;
    emp.salary = salary;

    console.log(emp);
    history('/')
  }
  return (
    <>
      <h1 className='text-light text-center mt-5'>update Employee Management</h1>
      <p className='text-center'>
        “Employees who feel valued and appreciated by their leaders are infinitely more likely to go above and beyond for the company and hold themselves accountable .
      </p>
      <Row>
        <Col>
          <img width={'500px'} height={'450px'} src='https://www.commbox.io/wp-content/uploads/2019/10/32-1-1024x597.jpg' />
        </Col>
        <Col>
          <Form className='border border-3 p-4'>


            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Username</Form.Label>
              <Form.Control value={uname} type="password" onChange={(e) => setUname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" value={desg} onChange={(e) => setDesg(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>salary</Form.Label>
              <Form.Control type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
            </Form.Group>



            <Button onClick={(e) => handleUpdate(e)} variant="dark" type="submit">
              update
            </Button>
          </Form>
        </Col>
      </Row>
    </>

  )
}


export default Edit