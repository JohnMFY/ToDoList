/*effect typewritter when landing on page for the placeholder in input
j'aimerai bien looper cette marde lô ! */
let i = 0;
let placeholder = "";
const text = " Write your tasks here !";
const speed = 150;

function type(){
    placeholder += text.charAt(i);
    document.getElementById("placeholder-id").setAttribute("placeholder",placeholder);
    i++;
    setTimeout (type, speed);
}

type ();

console.log(" Write your tasks here !".length);//24 characters


/*CONST*/
const addButton = document.querySelector('.add_btn');
const inputText = document.querySelector('#placeholder-id'); // 3 consts pour ADD TODOS
const todolist = document.querySelector('#todo')

/*ADD TODOS*/

addButton.addEventListener('click', function(event){
    const newTodo = inputText.value //newTodo est maintenant = à ce que l'utilisateur ecris dans l'input
    inputText.value = '' //remet la value à vide
    console.log(newTodo)

    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerHTML =` 
        <button class="validate"><i class="far fa-check-circle icon"></i></button>
        <h4>${newTodo}</h4>
        <button class="delete"><i class="far fa-times-circle icon"></i></button>
    `// avec $ je génére un bloc dynamique

    todolist.appendChild(divItem) //j'ajoute des taches
})

/*DELETE 'ITEM'*/
// <button class="delete"><i class="far fa-times-circle icon"></i></button>
//envent.target.parentNode.remove()



/* VALIDATE TODO */