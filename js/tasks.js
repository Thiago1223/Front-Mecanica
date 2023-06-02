'use strict'

import { preencherDadosTarefas } from "./api.js"
const tarefas = await preencherDadosTarefas()
console.log(tarefas)

const criarCardTarefa = (tarefa) => {

    const containerTasks = document.createElement('div')
    containerTasks.classList.add('container_tasks')

    const studentName = document.createElement('p')
    studentName.classList.add('student_name')

    const tasksNumber = document.createElement('div')
    tasksNumber.classList.add('tasks_number')

    const numberTasks = document.createElement('span')
    numberTasks.classList.add('number_tasks')
    numberTasks.textContent = tarefa.quantidade

    const textTasks = document.createElement('p')
    textTasks.classList.add('text_tasks')
    textTasks.textContent = 'Tarefas'

    const studentClass = document.createElement('p')
    studentClass.classList.add('student_class')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const button = document.createElement('a')
    button.classList.add('button')
    button.setAttribute('href', '/results')
    button.textContent = tarefa.nome
    button.onclick = route
   
    containerTasks.append(studentName, tasksNumber, studentClass)
    tasksNumber.appendChild(numberTasks)
    numberTasks.appendChild(textTasks)
    buttonContainer.appendChild(button)

    return containerTasks

}

export const carregarCardTarefa = () => {
    const container = document.getElementById('cards-container-tasks')
    const cards = tarefas.map(criarCardTarefa)
    container.replaceChildren(...cards)
}