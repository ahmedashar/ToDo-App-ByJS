var currentUpdateItem;
function addItems() {

    
    var input = document.getElementById('take_input');
    var ul = document.getElementById('unordered_list');
    

    if (input.value == ""){
        alert('Empty item not allowed')
    }
    else{
    // create li
    var li = document.createElement('li');
    li.setAttribute('class','list_items')
    li.innerHTML = input.value;
    
    var br = document.createElement('br')


    // make div element for styling btn
    var div = document.createElement('div')
    
    // create delete button
    var btn1 = document.createElement('i');
    btn1.setAttribute('class', 'fa-regular fa-trash-can deleteIcon')
    btn1.setAttribute('onclick', 'deleteItem(event)')
    
    // create update button
    var btn2 = document.createElement('i');
    btn2.setAttribute('class', 'fa-solid fa-pen-to-square editIcon')
    btn2.setAttribute('onclick', 'updateItem(event)')
    
    
    ul.appendChild(li);
    li.appendChild(br);
    li.appendChild(btn1);
    li.appendChild(btn2);
    
    
    // empty input field after adding an item.
    input.value = '';
    }
}

function deleteItem(event) {
    var btn = event.target;
    var li = btn.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
}
//// edit item by prompt

// function updateItem(event){
    //     // var btn2 = event.target;
    //     // var li = btn2.parentElement;
//     // var firstChildNode = li.firstChild.nodeValue;

//     var firstChildNode = event.target.parentElement.firstChild.nodeValue;

//     // console.log(firstChildNode)
    
//     var updatedValue = prompt('update the value' , firstChildNode);
//     // li.firstChild.nodeValue  = updatedValue;
//     event.target.parentElement.firstChild.nodeValue  = updatedValue;
// }

function updateItem(event){
    var input = document.getElementById('take_input');
    
    // get the text of li 
    var firstChildNode = event.target.parentElement.firstChild.nodeValue;

    // currentUpdateItem is a globle variable, assign li to it.
    currentUpdateItem = event.target.parentElement;

    currentUpdateItem.style.border = '2px solid #DC799F'
    document.getElementsByClassName('input_field')[0].style.borderColor = '#DC799F'
    input.value = firstChildNode;
    
    // get buttons of inputField (for toggle purpose)
    var inputFieldBtn = document.getElementsByClassName('input_button');
    var addBtn = inputFieldBtn[0];
    var editBtn = inputFieldBtn[1];
    
    addBtn.style.display = 'none'
    editBtn.style.display = 'inline'

    
}


// input field edit button

function addEditedItem(){
       

    document.getElementsByClassName('input_field')[0].style.borderColor = 'white'
       var input = document.getElementById('take_input');
       currentUpdateItem.style.border = 'none';
       currentUpdateItem.firstChild.nodeValue = input.value

       // get buttons of inputField
       var inputFieldBtn = document.getElementsByClassName('input_button');
       var addBtn = inputFieldBtn[0];
       var editBtn = inputFieldBtn[1];
   
       editBtn.style.display = 'none'
       addBtn.style.display = 'inline'
       
       input.value = ''
      

}
