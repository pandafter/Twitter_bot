import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET_KEY!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN!,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

const rwClient = client.readWrite;

async function tweet(message: string) {
    try {
        const response = await rwClient.v2.tweet(message);
        console.log('Tweet publicado:', response.data);
    } catch (e) {
        console.error('Error al publicar el tweet:', e);
    }
}

tweet('Hola mundo desde mi bot');
