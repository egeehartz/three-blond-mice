import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { employeeAsHTML } from "./EmployeeHTML.js"
import {getDepartments, useDepartments} from "./DepartmentProvider.js"
import {getLocations, useLocations} from "./LocationProvider.js"
import {getComputers, useComputers} from "./ComputerProvider.js"
import {useCustomers, getCustomers} from "./CustomerProvider.js"
import {useEmployeeCustomers, getEmployeeCustomers} from "./EmployeeCustomerProvider.js"




const eventHub = document.querySelector(".container")


const render = (employeeArray) => {
    

    getComputers()
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then( () => {
            const computers = useComputers()
            const departments = useDepartments()
            const locations = useLocations()
            const customers = useCustomers()
            const customerRelationships = useEmployeeCustomers()

           const rep = employeeArray.map(employee => {

                //.find() for 1 -> * because we need to find the ONE that matches
                const computerFound = computers.find((computer) => computer.id === employee.computerId)
                const deptFound = departments.find((department) => department.id === employee.departmentId)
                const locationFound = locations.find((location) => location.id === employee.locationId)

                //.filter() for * -> * because we need to find ALL that matches
                    // Find all the customer relationships, gonna return an array of 2 customers because each employee has 2
                    const customerEmployeeRelation = customerRelationships.filter(ec => ec.employeeId === employee.id)
                    const assignedCustomers = customerEmployeeRelation.map(rc => {
                      return customers.find(customer => customer.id === rc.customerId)
                    })

                    return employeeAsHTML(employee, computerFound, deptFound, locationFound, assignedCustomers)  
                    }).join("")
                    
                     eventHub.innerHTML = rep


        })

}



export const employeeList = () => {
    getEmployees()
        .then(useEmployees)
        .then(render)
}