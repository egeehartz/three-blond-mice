export const employeeAsHTML = (employeeObj) => {
    return `
    
    <section>
        <div>Name: ${employeeObj.firstName} ${employeeObj.lastName}</div>
        <div>Age: ${employeeObj.age}</div>
        <div>Computer: ${employeeObj.computer.model}</div>
        <div>Year: ${employeeObj.computer.year}</div>
    </section>
    
    
    `
}