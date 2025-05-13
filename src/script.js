import { render } from './libs/utils.js';
import { createModal } from './components/modal.js';
import { TRow } from './components/TRow.js';

let tasksData = [];
let currentView = 'table';
let editingTaskIndex = null;

createModal();

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    tasksData = data.slice(0, 10);
    render(tasksData, currentView, openEditModal)
  });

document.getElementById('tableBtn').onclick = function() {
  currentView = 'table';
  render(tasksData, currentView, openEditModal)

};

document.getElementById('cardBtn').onclick = function() {
  currentView = 'card';
  render(tasksData, currentView, openEditModal)

};

document.getElementById('add').onclick = function() {
  document.getElementById('modal').style.display = 'flex';
};

document.getElementById('modalClose').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};

document.getElementById('taskForm').onsubmit = function(e) {
  e.preventDefault();

  let title = document.getElementById('taskTitle').value;
  let desc = document.getElementById('taskDesc').value;
  let time = document.getElementById('taskTime').value;
  let date = document.getElementById('taskDate').value;
  let status = document.getElementById('taskStatus').value;

  let completed = status === 'done';

  let newTask = {
    title: desc,
    completed: completed,
    time: time,
    date: date,
    header: title,
    status: status
  };

  tasksData.unshift(newTask);
  document.getElementById('modal').style.display = 'none';
  e.target.reset();
  render(tasksData, currentView, openEditModal)

};

function openEditModal(index) {
  const task = tasksData[index];
  editingTaskIndex = index;

  document.getElementById('editTaskTitle').value = task.header;
  document.getElementById('editTaskDesc').value = task.title;
  document.getElementById('editTaskTime').value = task.time;
  document.getElementById('editTaskDate').value = task.date;
  document.getElementById('editTaskStatus').value = task.status;

  document.getElementById('editModal').style.display = 'flex';
}

document.getElementById('editModalClose').onclick = function() {
  document.getElementById('editModal').style.display = 'none';
};

document.getElementById('editTaskForm').onsubmit = function(e) {
  e.preventDefault();

  let title = document.getElementById('editTaskTitle').value;
  let desc = document.getElementById('editTaskDesc').value;
  let time = document.getElementById('editTaskTime').value;
  let date = document.getElementById('editTaskDate').value;
  let status = document.getElementById('editTaskStatus').value;

  let completed = status === 'done';

  tasksData[editingTaskIndex] = {
    title: desc,
    completed: completed,
    time: time,
    date: date,
    header: title,
    status: status
  };

  document.getElementById('editModal').style.display = 'none';
  render(tasksData, currentView, openEditModal)
};

document.getElementById('deleteTaskBtn').onclick = function() {
  tasksData.splice(editingTaskIndex, 1);
  document.getElementById('editModal').style.display = 'none';
  render(tasksData, currentView, openEditModal)
};
