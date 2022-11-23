import { http } from './http'

const matches = {
      matchesToday:() => {
        return http.get('matches/today')
    },

    matchesTomorrow:() => {
        return http.get('matches/tomorrow/')
    },

    matchesByDate:(start, end) => {
        return http.get(`matches?start_date=${start}&end_date=${end}`)
    }
}
export default matches