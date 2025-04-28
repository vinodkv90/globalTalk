export const useNextFetch = async (
    slug,
    method = "GET",
    headers = { 'Content-Type': 'application/json' },
    body = null,
    credentials = 'include'
  ) => {
    const url = process.env.NEXT_PUBLIC_API_END_POINT + slug;
  
    const options = {
      method,
      headers,
      credentials,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  