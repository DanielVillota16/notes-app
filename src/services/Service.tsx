type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const makeRequest = async (url: string, method: RequestMethod, body?: any) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(body)
  });
  return res.text();
}

export default makeRequest;