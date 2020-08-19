let locations = []



export const getLocations = () => {
    return fetch('http://localhost:3000/locations')
        .then(resp => resp.json())
        .then(parsedRes => {
            locations = parsedRes
        })

    
}


export const useLocations = () => {
    return locations.slice()

}