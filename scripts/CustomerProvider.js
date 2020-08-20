let customers = []



export const getCustomers = () => {
    return fetch('http://localhost:3000/customers')
        .then(resp => resp.json())
        .then(parsedRes => {
            customers = parsedRes
        })

    
}


export const useCustomers = () => {
    return customers.slice()

}