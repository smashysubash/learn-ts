import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo{
        id:number;
        title: string;
        completed: Boolean;
}

axios.get(url).then(res=>{
        const todo = res.data as Todo

        console.log(`
        id is ${todo.id}
        title is ${todo.title}
        is it finished ${todo.completed}
        `)
})


