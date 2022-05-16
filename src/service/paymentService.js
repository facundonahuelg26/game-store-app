
const ENDPOINT = 'https://game-store-application.herokuapp.com/orders';

  export const getPaymentService = async (client, userId, count) => {
    try {
      const res  = await fetch(`${ENDPOINT}/?client=${client}&user=${userId}&count=${count}`)
      const data = await res.json()

      return data;
    } catch (error) {
      return error 
    }
  }

  