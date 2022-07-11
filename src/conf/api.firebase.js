import * as axios from 'axios'

const apiFirebase = axios.create({
    baseURL : 'https://todo-list-6eff5-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default apiFirebase;

