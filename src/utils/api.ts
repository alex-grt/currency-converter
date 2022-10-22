const handleRequest = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res);
};

export const executeGet = (url: string): Promise<any> => {
  return fetch(url)
    .then(res => handleRequest(res));
}
