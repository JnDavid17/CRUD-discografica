const baseUrl = import.meta.env.VITE_API_URL;


function deleteById(id, group, type) {

    
    let myHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    
    let requestOp = {
        method: 'DELETE',
        headers: myHeaders
    };

    console.log(`${baseUrl}${group}/${type}/${id}`);
    return fetch(`${baseUrl}${group}/${type}/${id}`, requestOp)
        .then(res => {
            if (res.status != 200 && res.status != 401) throw new Error('Response is NOT ok')
            if (res.status == 401) {
                throw new Error('Token is NOT valid, session expired')
            }
            return res.json()
        }).then(res => {
            // const { status } = res
            return res
        })
}

export default deleteById

