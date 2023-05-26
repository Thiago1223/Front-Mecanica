'use strict'

const routes = {
    '/main' : '/pages/main.html',
    '/teachers' : '/pages/teachers.html',
    '/course' : '/pages/course.html',
    '/class' : '/pages/class.html',
    '/discipline' : '/pages/discipline.html',
    '/student' : '/pages/students.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route