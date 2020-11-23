import axios from 'axios'
// http://desafioonline.webmotors.com.br/api

const http = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge'
})

export default http
