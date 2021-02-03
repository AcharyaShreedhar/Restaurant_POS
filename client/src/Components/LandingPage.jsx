import React, { Fragment } from 'react'
import { Row, Table,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { isNil, isEmpty } from 'ramda'
import { getEmployees } from '../actions';
import Navbar from './NavigationBar'



const LandingPage = ({ employees, getEmployees }) => {
    console.log("Employees:", employees)
    return (
        <Fragment>
            <Row className="d-flex">
                {employees && <Table striped bordered hover className="m-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Date Of Birth</th>
                            <th>Joined Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) =>

                            <tr>
                                <td>{employee.employee_id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.address}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.date_of_birth}</td>
                                <td>{employee.joined_date}</td>
                            </tr>
                        )}

                    </tbody>
                </Table>
                }
            </Row>
            <Row className="d-flex align-center">
                <Button className="btn-success" onClick={getEmployees}>Press to see Employees</Button>
                <Navbar />
            </Row>
        </Fragment>
    )
}
const mapStateToProps = (state) => ({
    employees: state.employees
})

const mapDispatchToProps = {
    getEmployees: getEmployees,
};


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
