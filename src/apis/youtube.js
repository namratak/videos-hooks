import axios from 'axios';

const KEY = 'AIzaSyDJyEJ89xvv_4FbPqd-rS3wVOzymbSv63Y';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
