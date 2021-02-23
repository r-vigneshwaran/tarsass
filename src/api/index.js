import axios from 'axios';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';


const url = `https://api.unsplash.com`;
const source = axios.CancelToken.source();

export const getList=(pageNo)=>axios.get(`${url}/photos?page=${pageNo}&per_page=8&client_id=${process.env.REACT_APP_CLIENT_ID}`);

export const searchImages=(pageNo,query)=>axios.get(`${url}/search/photos?page=${pageNo}&per_page=8&query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`, {
    cancelToken: source.token,
})

export const unsplash = createApi({
    accessKey: `${process.env.REACT_APP_CLIENT_ID}`,
    fetch: nodeFetch,
  });