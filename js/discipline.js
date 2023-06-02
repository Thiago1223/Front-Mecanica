'use strict'

import { preencherDadosDisciplinas } from "./api.js"
const disciplinas = await preencherDadosDisciplinas()

const criarCardDisciplina = (disciplina) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '/student')
    topContainer.textContent = disciplina.sigla
    topContainer.title = disciplina.nome
    topContainer.onclick = route

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')

    const imgEdit = document.createElement('img')
    imgEdit.src = '../img/button_edit.png'
    imgEdit.classList.add('img-edit')

    const buttonDelete = document.createElement('div')
    buttonDelete.classList.add('button-delete')

    const imgDelete = document.createElement('img')
    imgDelete.classList.add('img-delete')
    imgDelete.src = '../img/button_delete.png'
   
    card.append(topContainer, bottomContainer)
    bottomContainer.append(buttonEdit, buttonDelete)
    buttonEdit.appendChild(imgEdit)
    buttonDelete.appendChild(imgDelete)

    return card

}

export const carregarCardDisciplina = () => {
    const container = document.getElementById('cards-container-discipline')
    const cards = disciplinas.map(criarCardDisciplina)
    container.replaceChildren(...cards)
}