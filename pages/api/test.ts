// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.9,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    // stop: [' Human:', ' AI:'],
  });
  console.log(response.data);

  res.status(200).json(response.data);
}
