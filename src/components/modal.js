export function createModal() {
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
  
    let content = document.createElement('div');
    content.className = 'modal-content';
  
    let closeBtn = document.createElement('span');
    closeBtn.id = 'modalClose';
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    content.appendChild(closeBtn);
  
    let title = document.createElement('h2');
    title.textContent = 'Добавить задачу';
    content.appendChild(title);
  
    let form = document.createElement('form');
    form.id = 'taskForm';
  
    form.innerHTML = `
      <label for="taskTitle">Заголовок:</label>
      <input type="text" id="taskTitle" required><br>
      
      <label for="taskDesc">Описание:</label>
      <textarea id="taskDesc" required></textarea><br>
      
      <label for="taskTime">Время:</label>
      <input type="time" id="taskTime" required><br>
      
      <label for="taskDate">Дата:</label>
      <input type="date" id="taskDate" required><br>
      
      <label for="taskStatus">Статус:</label>
      <select id="taskStatus">
        <option value="done">Готово</option>
        <option value="notdone">Не выполнено</option>
        <option value="progress">В процессе</option>
      </select><br>
      
      <button type="submit">Добавить</button>
    `;
  
    content.appendChild(form);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }
  