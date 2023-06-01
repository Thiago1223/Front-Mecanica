'use strict'

import { carregarCardCurso } from "./course.js"
import { carregarCardTurma } from "./class.js"

const routes = {
    '/main' : '/pages/main.html',
    '/teachers' : '/pages/teachers.html',
    '/course' : '/pages/course.html',
    '/class' : '/pages/class.html',
    '/discipline' : '/pages/discipline.html',
    '/student' : '/pages/students.html',
    '/task' : '/pages/tasks.html',
    '/results' : '/pages/results_tasks.html',
    '/time' : '/pages/time_record.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (window.location.pathname == '/course') {
        carregarCardCurso()
    } else if (window.location.pathname == '/task') {
        carregarCardTurma()
    }
}

window.route = route