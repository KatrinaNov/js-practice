// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// console.log(students.map(item => `Hi! ${item.name}! How are you?`))
//
// const names = students.map(s => s.name)



const todoListId_1 = "4934-fg33"
const todoListId_2 = "6434-fg33"

const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: "all",
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: "all",
    }
]

const tasks = {
    [todoListId_1]: [
        {id: 11, title: 'HTML', isDone: true},
        {id: 12, title: 'CSS', isDone: true},
        {id: 13, title: 'JS', isDone: true},
        {id: 14, title: 'REACT', isDone: false},
    ],
    [todoListId_2]: [
        {id: 21, title: 'Butter', isDone: true},
        {id: 22, title: 'Milk', isDone: false},
    ]
}
console.log(tasks[todoListId_1].find(t => t.title==="CSS"))
console.log(tasks[todoListId_1].map(t => ({...t, isDone: false})))
console.log(tasks[todoListId_1])

const result = []
for (let key in tasks) {
    tasks[key].forEach(t => {
        if (t.isDone) {
            return result.push(t)
        }
        return t
    })
}
console.log(result)


const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((acc, el) => acc + el))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => {
    if (el.age > 20 ) {
        acc.push(el.name)
    }
    return acc
}, []))

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc :  el))
