import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ticketing-dev-ingress-nginx-controller',
      headers: req.headers
    });
  }
  else {
    return axios.create({
      baseURL: '/'
    });
  }
};