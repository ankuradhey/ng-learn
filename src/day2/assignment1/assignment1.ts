const Todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "suscipit repellat esse quibusdam voluptatem incidunt",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "distinctio vitae autem nihil ut molestias quo",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "et itaque necessitatibus maxime molestiae qui quas velit",
      "completed": false
    }
    
  ];

type TodoType = {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
}

// const url = 'https://jsonplaceholder.typicode.com/todos';

/**
 * TodoService - service contains api for todo fetch, create operations
 */
class TodoService {

    private data: TodoType[] = Todos;

    constructor(){}

    // fetching todos
    fetchTodos(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(this.data);
            }, 100);
        })
        
        // fetch(url).then(response => response.json());
    }

    // save todos
    addTodo(body: TodoType){
        return new Promise ((resolve) => {

            this.data = [...this.data, body];
            setTimeout(() => {
                resolve(body);
            }, 100)
        })
        
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // }).then(response => response.json());
    }

    // Update todo
    updateTodo(id: number, body: TodoType){
        // const updateUrl = `${url}/${id}`;

        return new Promise((resolve) => {
            this.data = this.data.map((val)=>{
                if(val.id === id){
                    return {...body, id: id}
                }
                return val;
            });
            resolve(body)
        })

        // return fetch(updateUrl, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // }).then(response => response.json());
    }

    // fetch all completed todos
    async fetchCompletedTodo(){
        const response: any = await this.fetchTodos();
        return new Promise((resolve, reject) => {
            const completedTodos = response.filter((val: TodoType) => {
                return val.completed === true;
            });
            resolve(completedTodos);
        });
    }
}

class TodoComponent{
    private todos: TodoType[];
    private completedTodos: TodoType[];

    constructor(private service: TodoService){

    }

    listTodos() {
        this.service.fetchTodos()
        .then((json)=>{
            this.todos = json as TodoType[];
            console.log('todos list - ', JSON.stringify(json));
        })
        .catch((err) => err);
    }

    saveTodo(data: TodoType, callback?){
        this.service.addTodo(data)
        .then((res) => {
            console.log('record successfully added');
            if(callback)
            callback();
        });
    }

    updateTodo(id: number, body: TodoType, callback?){
        this.service.updateTodo(id, body)
        .then((res) => {
            console.log('record successfully updated');
            if(callback)
                callback();
        });
    }

    listCompletedTodos() {
        this.service.fetchCompletedTodo()
        .then((json)=>{
            console.log('completed todos list - ', JSON.stringify(json));
        })
        .catch((err) => err);
    }
}

const todoObj = new TodoComponent(new TodoService());
// Listing all todos
// todoObj.listTodos();

// // listing completed todos

// Updating todo
todoObj.updateTodo(1, {"userId":1, "title":"ank shsarmmmmssss hoooo", "completed":false});

// Adding todo
todoObj.saveTodo({"userId":100, "title":"anksssssssssssdsdsd shsarmmmmssss hoooo", "completed":false}, function(){
    todoObj.listTodos();
    todoObj.listCompletedTodos();
})





