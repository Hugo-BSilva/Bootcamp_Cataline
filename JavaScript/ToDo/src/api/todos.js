import axios from '../utils/axios'

export default class Todos {
    async index() {
        const { data } = await axios.get('/todos')
        return { data }
    }
    async create({text, done}) {
        const { data } = await axios.post('/todos', {text, done})
        return { data }
    }
    async update({id, text, done}) {
        const { data } = await axios.put(`/todos/${id}`, {text, done})
        return { data }
    }
    async del({id}) {
        const { data } = await axios.delete(`/todos/${id}`)
    }
}