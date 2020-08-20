export const employeeAsHTML = (employeeObj, computerObj, departmentObj, locationObj, customerObj) => {
    return `
    
    <section>
        <header class="employee__name">
            <h1>${employeeObj.firstName} ${employeeObj.lastName}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${computerObj.year} ${computerObj.model}</div>
        </section>
        <section class="employee__department">
            Works in the ${departmentObj.name} department
        </section>
        <section class="employee__location">
            Works at the ${locationObj.location} office
        </section>
        <section class="employee__customers">
        Has worked for the following customers.
        <ul>
            ${
                customerObj.map(customer => {
                    return `<li>${customer.name}</li>`
                }).join("")
            }
        </ul>
    </section>
    </section>
    
    
    `
}