import { TRow } from '../components/TRow.js'

export function render(arr, currentView, onEdit) {
  let container = document.getElementById('tasks')
  container.innerHTML = ''

  if (currentView === 'table') {
    let table = document.createElement('table')
    table.className = 'table'
    table.innerHTML = `
      <thead>
        <tr>
          <th>Заголовок</th>
          <th>Описание</th>
          <th>Дата</th>
          <th>Время</th>
          <th>Выполнено</th>
          <th>Действия</th>
        </tr>
      </thead>
    `

    let tbody = document.createElement('tbody')

    arr.forEach(function(task, index) {
      let tr = TRow(task, index, 'table', onEdit)
      tbody.appendChild(tr)
    })

    table.appendChild(tbody)
    container.appendChild(table)
  } else {
    let cards = document.createElement('div')
    cards.className = 'cards'

    arr.forEach(function(task, index) {
      let card = TRow(task, index, 'card', onEdit)
      cards.appendChild(card)
    })

    container.appendChild(cards)
  }
}
