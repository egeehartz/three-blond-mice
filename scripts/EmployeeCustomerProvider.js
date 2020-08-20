let employeeCustomers = []



export const getEmployeeCustomers = () => {
    return fetch('http://localhost:3000/employeeCustomers')
        .then(resp => resp.json())
        .then(parsedRes => {
            employeeCustomers = parsedRes
        })

    
}


export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()

}