export const employeeAsHTML = (employeeObj) => {
    return `
    
    <section>
        <header class="employee__name">
            <h1>Name: ${employeeObj.firstName} ${employeeObj.lastName}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${employeeObj.computer.year} ${employeeObj.computer.model}</div>
        </section>
        <section class="employee__department">
            Works in the ${employeeObj.department.name} department
        </section>
    </section>
    
    
    `
}