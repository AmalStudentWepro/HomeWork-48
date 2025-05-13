export function createEditModal() {
    let modal = document.createElement('div')
    modal.id = 'editModal'
    modal.className = 'modal'
    modal.innerHTML = `
      <div class="modal-content">
        <span id="editModalClose" class="close">&times;</span>
        <h2>Изменить задачу</h2>
        <form id="editTaskForm">
          <label for="editTaskTitle">Заголовок:</label>
          <input type="text" id="editTaskTitle" required><br>
  
          <label for="editTaskDesc">Описание:</label>
          <textarea id="editTaskDesc" required></textarea><br>
  
          <label for="editTaskTime">Время:</label>
          <input type="time" id="editTaskTime" required><br>
  
          <label for="editTaskDate">Дата:</label>
          <input type="date" id="editTaskDate" required><br>
  
          <label for="editTaskStatus">Статус:</label>
          <select id="editTaskStatus">
            <option value="done">Готово</option>
            <option value="notdone">Не выполнено</option>
            <option value="progress">В процессе</option>
          </select><br>
  
          <button type="submit">Изменить</button>
          <button type="button" id="deleteTaskBtn" class="delete-btn">Удалить</button>
        </form>
      </div>
    `
    document.body.appendChild(modal)
  }
  