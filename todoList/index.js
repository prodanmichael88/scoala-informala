

var root = 'https://jsonplaceholder.typicode.com/todos';
let todoList = document.getElementById('myList');
let addBtn = document.getElementById('add-btn');



window.addEventListener('load',getData()) 

function getData(){

fetch(root,{ method: 'GET'})
    .then(function(data){
        return data.json();})
    .then(function(data) {

    for(let i=0;i < data.length;i++){

        let listItem = document.createElement('li');
        let listItemParagraph = document.createElement('p');
            listItemParagraph.textContent = data[i].title;
        let editBtn = document.createElement('button');
            editBtn.id = 'edit-btn';
        let deleteBtn = document.createElement('button');
            deleteBtn.id = 'delete-btn';
        let editSpan = document.createElement('span');
            editSpan.classList.add('material-icons-sharp');
            editSpan.textContent = 'edit';
        let deleteSpan = document.createElement('span');
            deleteSpan.classList.add('material-icons-sharp');
            deleteSpan.textContent = 'delete';
        editBtn.appendChild(editSpan);
        deleteBtn.appendChild(deleteSpan);
        listItem.appendChild(listItemParagraph);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        deleteBtn.onclick=function (){

                deleteBtn.style.backgroundColor='blue';
                listItem.style.backgroundColor='grey';
                listItem.style.transition='500ms';
                listItem.style.transform= 'translateY(-20px)';
                setTimeout(() =>{todoList.removeChild(listItem)},500)
    }

        editBtn.onclick=function (){
        
                editBtn.style.backgroundColor='blue';
                listItem.style.transition='500ms';
                listItem.style.transform='translateX(30px)';
                setTimeout(()=>{
                listItem.style.transform='translateX(0)';
                editBtn.style.backgroundColor='red';
                listItemParagraph.textContent='edit';
                },700)
        }

    }
    });  
}

addBtn.onclick=function addFunction(){
        
        var addTitle = document.getElementById('AddTitle').value;
        fetch(root,{
            method:'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 10,
                title: addTitle,
                completed: "false",
            })
        }).then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
            
        let listItem = document.createElement('li');
        let listItemParagraph = document.createElement('p');
            listItemParagraph.textContent = data.title;
        let editBtn = document.createElement('button');
            editBtn.id = 'edit-btn';
        let deleteBtn = document.createElement('button');
            deleteBtn.id = 'delete-btn';
        let editSpan = document.createElement('span');
            editSpan.classList.add('material-icons-sharp');
            editSpan.textContent = 'edit';
        let deleteSpan = document.createElement('span');
            deleteSpan.classList.add('material-icons-sharp');
            deleteSpan.textContent = 'delete';
        editBtn.appendChild(editSpan);
        deleteBtn.appendChild(deleteSpan);
        listItem.appendChild(listItemParagraph);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);
            
        deleteBtn.onclick=function(){
                    
                    deleteBtn.style.backgroundColor='blue';
                    listItem.style.backgroundColor='grey';
                    listItem.style.transition='500ms';
                    listItem.style.transform= 'translateY(-20px)';
                    setTimeout(() =>{todoList.removeChild(listItem)},500)
        }


        editBtn.onclick=function (){
        
                    editBtn.style.backgroundColor='blue';
                    listItem.style.transition='500ms';
                    listItem.style.transform='translateX(30px)';
                    setTimeout(()=>{
                    listItem.style.transform='translateX(0)';
                    editBtn.style.backgroundColor='red';
                    listItemParagraph.textContent='edit';
                    },700)
        }    
        
        listItem.scrollIntoView();
        listItem.scrollIntoView({behavior:'smooth'});

        reset()
    
        })
    }


function reset(){
            var addTitle = document.getElementById('AddTitle')
            addTitle.value='';
    }


    


    









