import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLogged: false,
    messages: {},
    items: [],
  }),
  actions: {
    login() {
      this.isLogged = true
    },
    logout() {
      this.isLogged = false
    },
    changeMessages(props) {
      this.messages = props || {}
    },
    async getItems() {
      const getOMDB = await fetch(`${import.meta.env.VITE_OMDB_API_URL}?s=house&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
      const result = await getOMDB.json()
      this.items = result.Search
    },
    async getItemInfo(id) {
      const getOMDB = await fetch(`${import.meta.env.VITE_OMDB_API_URL}?i=${id}&plot=full&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
      const result = await getOMDB.json()
      return result
    }
  }
})
