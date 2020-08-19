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

           const rep = employeeArray.map(employee => {

                const computerFound = computers.find((computer) => computer.id === employee.computerId)
                const deptFound = departments.find((department) => department.id === employee.departmentId)
                const locationFound = locations.find((location) => location.id === employee.locationId)
            
                return employeeAsHTML(employee, computerFound, deptFound, locationFound)
            
            }).join("")
            eventHub.innerHTML = rep


        })

}



export const employeeList = () => {
    getEmployees()
        .then(useEmployees)
        .then(render)
}