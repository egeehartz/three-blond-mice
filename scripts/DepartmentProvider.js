let departments = []



export const getDepartments = () => {
    return fetch('http://localhost:3000/departments')
        .then(resp => resp.json())
        .then(parsedRes => {
            departments = parsedRes
        })

    
}


export const useDepartments = () => {
    return departments.slice()

}