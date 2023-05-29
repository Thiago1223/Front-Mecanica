'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_projeto_mecanica')) ?? []
const setLocalStorage = (dbProjetoMecanica) => localStorage.setItem("db_projeto_mecanica", JSON.stringify(dbProjetoMecanica))

// CRUD - create read update delete
const deleteTeacher = (index) => {
    const dbProjetoMecanica = readTeacher()
    dbProjetoMecanica.splice(index, 1)
    setLocalStorage(dbProjetoMecanica)
}

const updateTeacher = (index, teacher) => {
    const dbProjetoMecanica = readTeacher()
    dbProjetoMecanica[index] = teacher
    setLocalStorage(dbProjetoMecanica)
}

const readTeacher = () => getLocalStorage()

const createTeacher = (teacher) => {
    const dbProjetoMecanica = getLocalStorage()
    dbProjetoMecanica.push(teacher)
    setLocalStorage(dbProjetoMecanica)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
    document.querySelector(".modal-header>h1").textContent = 'SENAI'
}

const saveTeacher = () => {
    if (isValidFields()) {
        const teacher = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            data_nascimento: document.getElementById('data_nascimento').value,
            disciplina: document.getElementById('disciplina').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createTeacher(teacher)
            updateTable()
            closeModal()
        } else {
            updateTeacher(index, teacher)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (teacher, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${teacher.nome}</td>
        <td>${teacher.email}</td>
        <td>${teacher.data_nascimento}</td>
        <td>${teacher.disciplina}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableTeacher>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableTeacher>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbProjetoMecanica = readTeacher()
    clearTable()
    dbProjetoMecanica.forEach(createRow)
}

const fillFields = (teacher) => {
    document.getElementById('nome').value = teacher.nome
    document.getElementById('email').value = teacher.email
    document.getElementById('data_nascimento').value = teacher.data_nascimento
    document.getElementById('disciplina').value = teacher.disciplina
}

const editTeacher = (index) => {
    const teacher = readTeacher()[index]
    teacher.index = index
    fillFields(teacher)
    document.querySelector(".modal-header>h1").textContent = `Editando ${teacher.nome}`
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editTeacher(index)
        } else {
            const teacher = readTeacher()[index]
            const response = confirm(`Deseja realmente excluir o professor ${teacher.nome}?`)
            if (response) {
                deleteTeacher(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarProfessor')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveTeacher)

document.querySelector('#tableTeacher>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)