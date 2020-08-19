let departments = []



export const getLocations = () => {
    return fetch('http://localhost:3000/departments')
        .then(resp => resp.json())
        .then(parsedRes => {
            departments = parsedRes
        })

    
}


export const useLocations = () => {
    return departments.slice()

}