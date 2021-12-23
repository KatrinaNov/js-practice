const students = [
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
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user===copyUser) //- что должно быть в консоли? false
console.log(user.friends===copyUser.friends) //- что должно быть в консоли? true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user===deepCopyUser) // - что должно быть в консоли? false
console.log(user.friends===deepCopyUser.friends) // - что должно быть в консоли? false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students===copyStudents) // - что должно быть в консоли? false
console.log(students[0]===copyStudents[0]) // - что должно быть в консоли? true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(m => ({...m}));

//Проверка:
console.log(students===deepCopyStudents) // - что должно быть в консоли? false
console.log(students[0]===deepCopyStudents[0]) // - что должно быть в консоли? false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName = [...deepCopyStudents].sort((a, b) => a.name <= b.name ? -1 : 1);
let sortedByName = [...deepCopyStudents].sort((a, b) => a.name.localeCompare(b.name));
console.log('по алфавиту', sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a,b) => b.scores-a.scores);
console.log('по успеваемости(лучший идёт первым)', sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(f => f.scores >= 100);
console.log('100 и более баллов', bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log('topstopStudents', topStudents)
console.log('deepCopyStudents', deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log('newDeepCopyStudents', newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(f => !f.isMarried);
console.log('холостые', notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(m=>m.name);
console.log('массив имён', studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = students.map(m => m.name).join(' ');
console.log('строка из имён:', nameWithSpace)
let namesWithComma = students.map(m => m.name).join(', ');
console.log('строка из имён:', namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(m => ({...m, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(m => m.name === 'Nick' ? {...m, isMarried: true} : m);
console.log('Nick женился. ', studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(f => f.name === 'Ann');
console.log('Ann: ', ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - не испльзуя методы массивов и Math.max()
// let bestStudent = students.reduce((acc, el) => acc.scores < el.scores ? el : acc);

// получить два лучших студента
let bestStudent = students[0];
let bestStudent2 = students[1];
for (let i=1; i < students.length; i++) {
    if (bestStudent.scores > bestStudent2.scores) {
        if (students[i].scores > bestStudent2.scores) {
            bestStudent2 = students[i];
        }
    }  else {
        if (students[i].scores > bestStudent.scores) {
            bestStudent = students[i];
        }
    }

}
// 2 вариант
let best1 = students[0]
let best2 = students[0]

for (let i = 0; i < students.length; i++) {
    if (students[i].scores > best1.scores) {
        best1 = students[i]

    } else  if (students[i].scores > best2.scores ){
        best2 = students[i]
    }

}

console.log('bestStudent: ', bestStudent, bestStudent2)
console.log('bestStudent: ', best1, best2)



//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
console.log('сумма баллов всех студентов:', scoresSum)


// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map(s => ({...s, friends: students.map(m => m.name).filter(f => f !== s.name)}))

console.log(addFriends(students));









