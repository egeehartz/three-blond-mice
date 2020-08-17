import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { employeeAsHTML } from "./EmployeeHTML.js"



const eventHub = document.querySelector(".container")


const render = (employeeArray) => {
    
    let representation = ''
    employeeArray.forEach(employee => {
        representation += employeeAsHTML(employee)
    })

    eventHub.innerHTML = `
    <h2>Employees</h2>
    <article>
    ${representation}
    </article>
    `

}



export const employeeList = () => {
    getEmployees()
        .then(useEmployees)
        .then(render)
}