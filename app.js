/* Declare the global object */
var TodoApp = {
  view: {},  
  controller: {},
  tasks: []  // ersatz model
};

/* controller stuff follows */
TodoApp.controller.createTask = function (text) {
 TodoApp.tasks.push(text);
 TodoApp.view.showTasks();
};

TodoApp.controller.removeTask = function (text) {
  TodoApp.tasks = TodoApp.tasks.filter(function(ele){
    return ele != text;
  });
 TodoApp.view.showTasks();
};

/*view */
TodoApp.view.showTasks = function(){
  var html = "";
  TodoApp.tasks.forEach(function(ele, index){
    html += '<li>' + (index +1) + '. '  + 
    ele + ' <button data-task-text="'+ ele +
    '">remove</button></li>';
  });
  document.getElementById('task_list').innerHTML = html;
};

TodoApp.view.handleNewTaskEvent = function(event){
  var input = document.getElementById('new_task');
  TodoApp.controller.createTask(input.value);
  input.value = '';
};

TodoApp.view.handleDeleteTaskEvent = function(event) {
  if (event.target.dataset.taskText) {
    TodoApp.controller.removeTask(event.target.dataset.taskText);
  }
};

/* setup */
document.addEventListener('DOMContentLoaded', function(event){
  document.getElementById('new_task_button').addEventListener('click', TodoApp.view.handleNewTaskEvent );
  document.getElementById('task_list').addEventListener('click', TodoApp.view.handleDeleteTaskEvent);
});

