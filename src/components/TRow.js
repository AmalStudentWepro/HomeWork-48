export function TRow(task, index, currentView, onEdit) {
  let element

  if (currentView === 'table') {
    element = document.createElement('tr')
    element.innerHTML = `
      <td>${task.header || 'Переписать проект на Vue 3'}</td>
      <td>${task.title || '-'}</td>
      <td>${task.date || '21.10.21'}</td>
      <td>${task.time || '14:31'}</td>
      <td class="${task.completed ? 'status-done' : 'status-notdone'}">
        ${task.completed ? 'Готово' : task.status === 'progress' ? 'В прогрессе' : 'Не выполнено'}
      </td>
      <td><button class="edit-btn">Изменить</button></td>
    `
  } else {
    element = document.createElement('div')
    element.className = 'card'
    element.innerHTML = `
      <h3>${task.header || 'Переписать проект на Vue 3'}</h3>
      <p>${task.title || '-'}</p>
      <p>${task.date || '21.10.21'} <b>${task.time || '14:31'}</b></p>
      <p class="${task.completed ? 'status-done' : 'status-notdone'}">
        ${task.completed ? 'Готово' : task.status === 'progress' ? 'В прогрессе' : 'Не выполнено'}
      </p>
      <button class="edit-btn">Изменить</button>
    `
  }

  let editButton = element.querySelector('.edit-btn')
  editButton.onclick = function () {
    onEdit(index)
  }

  return element
}
