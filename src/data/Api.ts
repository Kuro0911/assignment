import axios from 'axios';

type ResponseSchema = {
    properties: object,
    tracks: any,
};
async function getData(startFrom: number) {
  try {
    const { data } = await axios.get<ResponseSchema>(
      `https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=${startFrom}`,
      {
        headers: {
          "Accept": 'application/json',
          "X-RapidAPI-Key":"9d2bf94f24msh1035a75d826e649p1e0d6bjsndb31d2a4cbfe",
          "X-RapidAPI-Host":"shazam.p.rapidapi.com"
        },
      },
    );
    return data.tracks;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export default getData;