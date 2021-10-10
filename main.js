function addElement(parentId, elementTag, elementId, html) {
    const parent = document.getElementById(parentId)
    const newElement = document.createElement(elementTag)
    newElement.setAttribute('id', elementId)
    newElement.innerHTML = html
    parent.appendChild(newElement)
}

function getDay(i) {
    let text = '/'

    if (i === 1) text = 'Понеделник'
    else if (i === 2) text = 'Вторник'
    else if (i === 3) text = 'Среда'
    else if (i === 4) text = 'Четврток'
    else if (i === 5) text = 'Петок'

    return text
}

const subjects = [
    [],
    [ // Ponedelnik
        {
            startTime: 13,
            endTime: 16,
            name: 'Веројатност Предавање (Марија Михова)',
            bg: 'white'
        }
    ],
    [ // Vtornik
        {
            startTime: 13,
            endTime: 15,
            name: 'Алгоритми Аудиториски (Ана Тодоровска)',
            bg: 'white'
        }
    ],
    [ // Sreda
        {
            startTime: 8,
            endTime: 10,
            name: 'Алгоритми Аудиториски [Снимени] (TBA)',
            bg: '#E680B3'
        },
        {
            startTime: 10,
            endTime: 12,
            name: 'Алгоритми Предавање (Владимир Трајковиќ)',
            bg: '#E6FFB3'
        },
        {
            startTime: 12,
            endTime: 14,
            name: 'Напреден Веб Предавање (Гоце Арменски)',
            bg: '#B3B3FF'
        },
        {
            startTime: 14,
            endTime: 15,
            name: 'Напреден Веб Аудиториски (Бобан Јоксимоски)',
            bg: '#C0C080'
        },
        {
            startTime: 17,
            endTime: 19,
            name: 'Веројатност Аудиториски (Јована Добрева)',
            bg: 'white'
        }
    ],
    [ // Cetvrtok
        {
            startTime: 8,
            endTime: 10,
            name: 'Клиенстка Предавање (Гоце Арменски)',
            bg: '#C0FFC0'
        },
        {
            startTime: 10,
            endTime: 12,
            name: 'Мрежи Предавање [Снимено] (Игор Мишковски)',
            bg: '#E6E6FF'
        },
        {
            startTime: 12,
            endTime: 14,
            name: 'Мрежи Аудиториски [Снимени] (TBA)',
            bg: '#FFE080'
        },
        {
            startTime: 14,
            endTime: 16,
            name: 'Мрежи Предавање (Мирослав Мирче)',
            bg: 'white'
        },
        {
            startTime: 16,
            endTime: 18,
            name: 'Мрежи Аудиториски (Костадин Мишев)',
            bg: 'white'
        }
    ],
    [ // Petok
        {
            startTime: 8,
            endTime: 9,
            name: 'Клиентска Аудиториски (Влатко Спасев)',
            bg: '#FFB3B3'
        },
        {
            startTime: 9,
            endTime: 12,
            name: 'Веројатност Предавање [Снимено] (Верица Бакева)',
            bg: '#FFFF80'
        },
        {
            startTime: 12,
            endTime: 14,
            name: 'Веројатност Аудиториски [Снимени] (TBA)',
            bg: '#8AE0E0'
        }
    ],
]

const rowHeight = 50

for (let i = 0; i <= 5; i++) {
    const columnId = 'column' + i

    let text = getDay(i)

    addElement('container', 'div', columnId, text)

    for (let j = 8; j <= 20; j++) {
        let text = ''
        if (i === 0 && j !== 7) text = `${j}:00 - ${j}:45`

        const rowId = 'row' + (100*i+j)
        addElement(columnId, 'div', rowId, text)

        if (i === 0) continue
        
        const el = document.getElementById(rowId)

        subjects[i].forEach(subject => {
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
