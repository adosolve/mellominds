import dotenv from 'dotenv';

dotenv.config();

export const sarvamConfig = {
  apiKey: process.env.SARVAM_API_KEY,
  baseUrl: 'https://api.sarvam.ai/v1',
  model: 'sarvam-30b',
};

export default sarvamConfig;
