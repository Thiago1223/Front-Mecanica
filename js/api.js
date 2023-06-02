'use strict'

export const preencherDadosCursos = async () => {
    const url = `http://localhost:8080/v1/mecanica/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const preencherDadosTurmas = async () => {
    const url = `http://localhost:8080/v1/mecanica/turmas`
    const response = await fetch(url)
    const data = await response.json()

    return data.turmas
}

export const preencherDadosDisciplinas = async () => {
    const url = `http://localhost:8080/v1/mecanica/materias`
    const response = await fetch(url)
    const data = await response.json()

    return data.materia
}

export const preencherDadosTarefas = async () => {
    const url = `http://localhost:8080/v1/mecanica/tarefas`
    const response = await fetch(url)
    const data = await response.json()

    return data.tarefa
}