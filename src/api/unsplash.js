import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID BdMSEpWlxVfKS8Lek2Ton6vnuvk8VzvQ3IdcHWXFra4',
  },
});
