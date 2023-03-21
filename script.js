const textInput = document.querySelector('#new-task')
const taskFeed = document.querySelector('#task-feed')
const createTaskButton = document.querySelector('button')

createTaskButton.addEventListener('click', handleCreateTask)

function handleCreateTask() {
  if (textInput.value !== '') {
    const task = document.createElement('li')
    task.addEventListener('click', () => {
      task.classList.toggle('selecionado')
    })
    const deleteTaskButton = document.createElement('button')
    deleteTaskButton.addEventListener('click', handleDeleteTask)
    deleteTaskButton.innerHTML = 'Apagar Task'

    task.innerText = textInput.value
    task.appendChild(deleteTaskButton)

    taskFeed.appendChild(task)
  } else {
    window.alert('Escreva uma task')
  }
}

function handleDeleteTask(event) {
  taskFeed.removeChild(event.target.parentNode)
}
