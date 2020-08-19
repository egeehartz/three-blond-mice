let computers = []



export const getComputers = () => {
    return fetch('http://localhost:3000/computers')
        .then(resp => resp.json())
        .then(parsedRes => {
            computers = parsedRes
        })

    
}


export const useComputers = () => {
    return computers.slice()

}