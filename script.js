function newItem()

//1. Adding a new item to the list of items:
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);