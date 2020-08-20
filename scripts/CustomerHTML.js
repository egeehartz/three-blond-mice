export const customerAsHTML = (employeeObj, customerObj) => {
    return `
    
    <section>
        <header class="customer__name">
            <h1>${customerObj.name}</h1>
        </header>
        <section class="customer__employees">
        Employees that have worked for ${customerObj.name}
        <ul>
            ${
                employeeObj.map(employee => {
                    return `<li>${employee.firstName} ${employee.lastName}</li>`
                }).join("")
            }
        </ul>
    </section>
    </section>
    
    
    `
}