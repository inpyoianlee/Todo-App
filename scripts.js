const l = (item) => console.log(item);

let updateLi;

let submitButton = document.querySelector('.submit-button');
let list = document.querySelector('.ol-item');
// let xButton = document.querySelector('.item-X');
let refreshButtons = document.querySelectorAll('.item-refresh');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let inputBox = document.querySelector('.inputbox');
    // console.log(inputBox.value);
    if (submitButton.innerText == 'Update') {
        updateLi.firstChild.innerText = inputBox.value;
        console.log(updateLi.firstChild.innerText);
        submitButton.innerText = 'Submit';
    } else {
        list.append(generateTodo(inputBox.value));
    }
    inputBox.value = '';
});


const generateTodo = (str) => {
    // creates new list item
    let newLi = document.createElement('li');
    newLi.className = 'list-item';
    // newLi.id = 
    // new textDiv for the list item
    let newTextDiv = document.createElement('div');
    newTextDiv.className = 'list-item-text';
    // new button div for the list item
    let newButtonDiv = document.createElement('div');
    newButtonDiv.className = 'list-item-buttons';
    // new buttons for the button div in the list item
    let newRefreshButton = document.createElement('button');
    newRefreshButton.className = 'item-refresh';
    newRefreshButton.innerHTML = '↻';
    let newXButton = document.createElement('button');
    newXButton.className = 'item-X';
    newXButton.innerHTML = '❌';
    
    newXButton.addEventListener('click', (e) => {
        newLi.remove();
    });

    newRefreshButton.addEventListener('click', (e) => {
        submitButton.innerHTML = "Update";
        updateLi = e.target.parentNode.parentNode;
        let inputBox = document.querySelector('.inputbox');
        inputBox.value = updateLi.firstChild.innerText;
    });



    newButtonDiv.append(newRefreshButton);
    newButtonDiv.append(newXButton);

    newLi.append(newTextDiv);
    newLi.append(newButtonDiv);

    newTextDiv.innerText = str;
    return newLi
};


// xButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   l(xButton.parentNode())
  
// });



