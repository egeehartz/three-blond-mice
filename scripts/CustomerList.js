import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { customerAsHTML } from "./CustomerHTML.js"
import {useCustomers, getCustomers} from "./CustomerProvider.js"
import {useEmployeeCustomers, getEmployeeCustomers} from "./EmployeeCustomerProvider.js"




const contentTarget = document.querySelector(".customerContainer")


const render = () => {
    
        getCustomers()
        .then(getEmployeeCustomers)
        .then( () => {
            const employees = useEmployees()
            const customers = useCustomers()
            const customerRelationships = useEmployeeCustomers()

           const rep = customers.map(customer => {

                //.filter() for * -> * because we need to find ALL that matches
                    // Find all the customer relationships, gonna return an array of 2 customers because each employee has 2
                    const customerEmployeeRelation = customerRelationships.filter(ec => ec.customerId === customer.id)
                    const assignedEmployees = customerEmployeeRelation.map(rc => {
                      return employees.find(employee => employee.id === rc.employeeId)
                    })
                    return customerAsHTML(assignedEmployees, customer)  
                    }).join("")

                    contentTarget.innerHTML = rep


        })

}



export const customerList = () => {
    getEmployees()
        .then(render)
}