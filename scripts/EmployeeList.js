import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { employeeAsHTML } from "./EmployeeHTML.js"
import {getDepartments, useDepartments} from "./DepartmentProvider.js"
import {getLocations, useLocations} from "./LocationProvider.js"
import {getComputers, useComputers} from "./ComputerProvider.js"




const eventHub = document.querySelector(".container")


const render = (employeeArray) => {
    

    getComputers()
        .then(getDepartments)
        .then(getLocations)
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
                    const customerEmployeeRelation = customerRelationships.filter(ec => ec.employee.id === employeeId)

                    // Find the related customer for each relationship
                    const assignedCustomers = customerEmployeeRelation.map(rel => {
                        return customers.find(customer => customer.id === rel.customerId)

            
                        
                    }).join("")
                    employeeAsHTML(employee, computerFound, deptFound, locationFound, assignedCustomers)
                    return eventHub.innerHTML = rep


        })

}



export const employeeList = () => {
    getEmployees()
        .then(useEmployees)
        .then(render)
}