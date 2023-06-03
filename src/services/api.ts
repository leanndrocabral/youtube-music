import axios from 'axios';

export const playlistItems = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems/',
});

export const videos = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/videos/',
});
