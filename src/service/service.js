const rootRoute = 'https://game-store-application.herokuapp.com/'

export const createService = async (value, route) => {
  const ENDPOINT = `${rootRoute}${route}`;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const data = await res.json(); 
    
    if(!res.ok) throw data
    return data;
  } catch (error) {
    return error;
  }
};

export const getService = async (route) => {
  const ENDPOINT = `${rootRoute}${route}`;

  try {
    const res = await fetch(ENDPOINT);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const getServiceById = async (route) => {
  const ENDPOINT = `${rootRoute}${route}`;

  try {
    const res = await fetch(ENDPOINT);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const updateServiceById = async (value, route) => {
  const ENDPOINT = `${rootRoute}${route}`;

  try {
    const res = await fetch(ENDPOINT, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
