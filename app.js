
/**
 * Created by wilson.campusano on 10/14/2014.
 */
var lists = {
    todo: document.getElementById('todo'),
    done: document.getElementById('done')
};
var onClickCheckBox = function onClickCheckBox(event){
    var liElement = event.target.parentNode;
    var list =lists[liElement.parentNode.id === 'todo' ? 'done':'todo'];
    list.appendChild(liElement);
};

var giveMeInputElement = function giveMeInputElement() {
    return document.getElementById('inputText');
};
var giveMeAddButton = function giveMeAddButton(){
    return document.getElementById('btnAdd');
};

var giveMeErrorMessageElement = function giveMeErrorMessageElement(){
    return document.getElementById('errorMessage');
};

var showErrorMessage = function showErrorMessage (){
    var errorElement = giveMeErrorMessageElement();
    errorElement.removeAttribute('hidden');
};

var hideErrorMessage = function hideErrorMessage(){
    var errorElement = giveMeErrorMessageElement();
    errorElement.setAttribute('hidden', 'hidden');
};

var onClick = function onClick(){
    var input = giveMeInputElement();
    var text = input.value.trim();
    if(text === ''){
        showErrorMessage();
        return;
    }
    hideErrorMessage();
    var task = makeTask(text, onClickCheckBox);
    lists.todo.appendChild(task);
    input.value = '';
    input.focus();
};
var onKeyPress = function onKeyPress(event) {
    var keyCode = event.keyCode;
    var ENTER_CODE = 13;
    if(keyCode === ENTER_CODE){
        onClick();
    }
};

var makeTask = function makeTask(str, onClick){
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('click',onClick);
    label.textContent = str;

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
};


(function(){
    var btnAdd  = giveMeAddButton();
    var inputText = giveMeInputElement();

    btnAdd.addEventListener('click', onClick);
    inputText.addEventListener('keypress', onKeyPress);
    inputText.focus();
})();