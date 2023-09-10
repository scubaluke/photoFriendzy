import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.twilio.com/2010-04-01/Accounts',
});

export async function fetcher(url: string) {
  const { data } = await axios.get(url);
  return data;
}
