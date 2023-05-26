import axios from "axios";

export default async function handler(req: any, res: any) {
  const nasaResponse = await axios(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );
  res.status(200).json({ response: nasaResponse.data });

  //   res.status(200).json();
}
//   const res = await fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
//   );
//   const data = await res.json();
//   return data;
// };
