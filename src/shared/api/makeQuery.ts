export const makeQuery = async (endpoint: string) => {
  const URL = "https://api.github.com";
  const response = await fetch(`${URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(String(response.status));
  }
  return response.json();
};
