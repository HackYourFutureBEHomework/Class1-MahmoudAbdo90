
let TODOS = [];


function update() {
    const $ul = document.querySelector('.todo-list');
    $ul.innerHTML = "";
    
    for(const item of TODOS){
        const $li = document.createElement('li');
        $ul.appendChild($li);
        if(item.done){
            $li.setAttribute('class', 'completed');
        }
       
        const $input = document.createElement('input')
        $input.setAttribute('class', 'toggle');
        $input.setAttribute('type', 'checkbox');
        if (item.done) {
            $input.setAttribute('checked', 'checked');
        }
        $input.addEventListener('change', funToggle.bind(null, item.id));
        $li.appendChild($input);

        const $label = document.createElement('label');
        $label.innerHTML = item.title;
        $li.appendChild($label);

        const $button = document.createElement('button');
        $button.setAttribute('class', 'destroy');
        $button.addEventListener('click', onDeleteItem.bind(null, item.id));
        $li.appendChild($button);
       
        
//the counter to count how many elements are left or marked (using filter)
//it could be shorter but i prefer it that way to have better understanding 
       const $count = document.querySelector('.todo-count');
       const $filter = TODOS.filter(function(counting){
           return !counting.done;
       });

       if ($filter.length === 1) {
        $count.innerHTML = ($filter.length + ' item left');
    } else {
        $count.innerHTML = ($filter.length + ' items left');
    }

    const $clear = document.querySelector('.clear-completed');
    const clearDone = TODOS.filter(function(clearing){
        return clearing.done;
    });
    if (clearDone.length > 0) {
        $clear.style.display = 'block';
    } else { 
        $clear.style.display = 'none';
    }
    $clear.addEventListener('click', onClearItem.bind(null, item.id));
        

    }

    document.querySelector('.main').style.display = 'block';
}

function doNewToDo(e) {
    const title = e.target.value
    console.log(title);
    TODOS.push({
        id: Date.now(),
        title,
        done: false
    });
    update();
    e.target.value = "";
}

function funToggle(id){
    const todo = TODOS.find(function(todo){
        return todo.id === id;
    });
    todo.done = !todo.done;
    update();
}

function onDeleteItem(id) {
    TODOS = TODOS.filter(function (item){
        return item.id !== id;
    });
    update();
}

function onClearItem(id){
    TODOS = TODOS.filter(function(item){
        return !item.done;

    });
    update();
}

const newTodo = document.querySelector('.new-todo');
newTodo.addEventListener('change', doNewToDo);
