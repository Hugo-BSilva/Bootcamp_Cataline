import Todos from './api/todos'
import './assets/css/main.css'

const apiTodos = new Todos()

/*<li class="todo">
<label class="checkbox-input">
  <input type="checkbox" checked="true" />
  <span class="checkmark"></span>
</label>
<span class="todo-text">Lavar Roupa</span>
<a class="todo-delete"></a>
</li>*/

async function exec(){
    

    const response = await apiTodos.index()
    // const update = await todos.update({
    //     id: 5,
    //     text: 'Sair com namorada',
    //     done: true})
    //const create = await todos.create({text:'Cortar cabelo', done: true})
    //const del = await todos.del({id:0})
    //console.log(del)
    //console.log(create)
    console.log(response)
}

exec()