const baseUrl = import.meta.env.VITE_API_URL;


function getDepartamentos() {

    
    let myHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }


    let requestOp = {
        method: 'GET',
        headers: myHeaders
    };

    return fetch(`${baseUrl}servicio/departamento`, requestOp )
        .then(res => {
            if (res.status != 200 && res.status != 401) throw new Error('Response is NOT ok')
            if (res.status == 401) {
                throw new Error('Token is NOT valid, session expired')
            }
            return res.json()
        }).then(res => {
            return res
        })

}

export default getDepartamentos

