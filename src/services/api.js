import axios from 'axios'

export const api = {
  getProducts (getState) {
    let state = getState()

    const Bearer = 'Bearer ' + state.sellsukiStoreData.access_token

    const url = 'https://api.sellsuki.com/product'
    const method = 'GET'
    const data = {page: 1, search: ''}

    return axios({
      method: method,
      headers: {'Authorization': Bearer},
      url: url,
      params: method === 'GET' ? data : '',
      data: method !== 'GET' ? data : {}
    })
  }
}
