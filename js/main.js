const AddTodo = document.getElementById('AddButton')
const ListTodo =  document.getElementById('todoList')
const Inputtxt = document.getElementById('formInput')
const DeleteTodo = document.getElementById('deleteBtn')


AddTodo.addEventListener('click', function(){
const liste = document.createElement('p');
liste.classList.add('liste');
ListTodo.appendChild(liste);
liste.innerHTML = Inputtxt.value;
Inputtxt.value = "";

liste.addEventListener('click' , function(){
    liste.style.textDecoration= 'line-through'
    liste.style.background ='black';
    liste.style.color = 'white';
    
    })

    liste.addEventListener('dblclick' , function(){
        ListTodo.removeChild(liste);    
    })

    DeleteTodo.addEventListener('click', function(){
        liste.remove();
    })

})

