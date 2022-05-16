export const getStateService = async (route) => {
    const ENDPOINT = `https://apis.datos.gob.ar/georef/api/${route}`

    try {
        const res = await fetch(ENDPOINT)
        const data = await res.json()

        if(!res.ok) throw data

        return data;
    } catch (error) {
       console.log(error) 
    }
}