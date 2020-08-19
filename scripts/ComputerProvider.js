let computers = []



export const getLocations = () => {
    return fetch('http://localhost:3000/computers')
        .then(resp => resp.json())
        .then(parsedRes => {
            computers = parsedRes
        })

    
}


export const useLocations = () => {
    return computers.slice()

}