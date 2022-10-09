function addElement(parentId, elementTag, elementId, html) {
    const parent = document.getElementById(parentId)
    const newElement = document.createElement(elementTag)
    newElement.setAttribute('id', elementId)
    newElement.innerHTML = html
    parent.appendChild(newElement)
}

function getDay(i) {
    let text = '/'

    if (i === 2) text = 'Понеделник'
    else if (i === 4) text = 'Вторник'
    else if (i === 6) text = 'Среда'
    else if (i === 8) text = 'Четврток'
    else if (i === 10) text = 'Петок'

    return text
}

const subjects = [
    [],
    [ // Ponedelnik
        {
            startTime: 8,
            endTime: 10,
            name: '🧑‍🏫 Веб програмирање (223 ФЕИТ)',
            bg: '#E680B3',
        }
    ],
    [ // Vtornik
        {
            startTime: 8,
            endTime: 10,
            name: '🧑‍🏫 Дизајн и архитектура на софтвер (315 ТМФ)',
            bg: '#B3B3FF',
        },
        {
            startTime: 17,
            endTime: 19,
            name: '🧑‍🏫 Основи на роботика (online)',
            bg: '#8AE0E0',
        },
        {
            startTime: 19,
            endTime: 20,
            name: '🏋️ Основи на роботика (online)',
            bg: '#8AE0E0',
        }
    ],
    [ // Sreda
        {
            startTime: 13,
            endTime: 15,
            name: '🏋️ Бази на податоци (117 ТМФ)',
            bg: '#C0FFC0',
        },
        {
            startTime: 15,
            endTime: 17,
            name: '🧑‍🏫 Бази на податоци (117 ТМФ)',
            bg: '#C0FFC0',
        },
        {
            startTime: 17,
            endTime: 19,
            name: '🏋️ Вовед во науката за податоци (АМФ-МФ)',
            bg: '#FFB3B3',
        }
    ],
    [ // Cetvrtok
        {
            startTime: 8,
            endTime: 10,
            name: '🧑‍🏫 Вовед во науката за податоци (Б3.2)',
            bg: '#FFB3B3',
        },
        {
            startTime: 13,
            endTime: 14,
            name: '🏋️ Дизајн и архитектура на софтвер (Б2.2)',
            bg: '#B3B3FF',
        },
    ],
    [ // Petok
        
    ],
]

const rowHeight = 50

for (let i = 0; i <= 10; i++) {
    const columnId = 'column' + i

    let text = getDay(i)

    addElement('container', 'div', columnId, text)
    if (i % 2 === 1) document.getElementById(columnId).classList.add('hideOnDesktop');

    for (let j = 8; j <= 20; j++) {
        let text = ''
        if (i === 0 || i % 2 === 1) text = `${j}:00 - ${j}:45`

        const rowId = 'row' + (100*i+j)
        addElement(columnId, 'div', rowId, text)

        if (i === 0 || i % 2 === 1) continue
        
        const el = document.getElementById(rowId)

        subjects[i/2].forEach(subject => {
            if (j === subject.startTime) {
                const diff = subject.endTime - subject.startTime
                j += diff-1
                el.style.height = (rowHeight * diff) + 'px'
                el.style.backgroundColor = subject.bg
                el.innerHTML = subject.name
            }
        })
    }
}
