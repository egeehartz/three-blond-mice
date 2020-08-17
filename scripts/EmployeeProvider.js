let employees = []



export const getEmployees = () => {
    return fetch('http://localhost:3000/employees?_expand=computer')
        .then(resp => resp.json())
        .then(parsedRes => {
            employees = parsedRes
        })

    
}


export const useEmployees = () => {
    return employees.slice()

}