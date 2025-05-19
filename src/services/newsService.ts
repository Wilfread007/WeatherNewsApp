import axios from 'axios';

const NEWS_API_KEY = 'fc58f699d84948ed9bec1255f643ccd9';

export const getNews = async () => {
    let fullPath = `https://newsapi.org/v2/everything?q=tesla&from=2025-04-19&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    console.log(fullPath);
    
    let resp = await axios.get(fullPath)
    // console.log(resp?.data);

    return resp?.data
};
