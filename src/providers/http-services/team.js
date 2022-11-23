import { http } from './http'

const httpteams = {
        allTeams:() => {
        return http.get('teams')
    }
}
export default httpteams