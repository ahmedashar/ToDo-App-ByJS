function addItems() {

    
    var input = document.getElementById('take_input');
    var ul = document.getElementById('unordered_list');
    

    if (input.value == ""){
        alert('Empty item not allowed')
    }
    else{
    // create li
    var li = document.createElement('li');
    li.innerHTML = input.value;

    // create delete button
    var btn1 = document.createElement('button');
    btn1.innerHTML = 'Delete';
    btn1.setAttribute('onclick', 'deleteItem(event)')

    // create update button
    var btn2 = document.createElement('button');
    btn2.innerHTML = 'Update';
    btn2.setAttribute('onclick', 'updateItem(event)')

    
    ul.appendChild(li);

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

function updateItem(event){
    // var btn2 = event.target;
    // var li = btn2.parentElement;
    // var firstChildNode = li.firstChild.nodeValue;

    var firstChildNode = event.target.parentElement.firstChild.nodeValue;

    // console.log(firstChildNode)
    
    var updatedValue = prompt('update the value' , firstChildNode);
    // li.firstChild.nodeValue  = updatedValue;
    event.target.parentElement.firstChild.nodeValue  = updatedValue;
}

