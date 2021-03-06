/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
    firstName: 'Peter',
    lastName: 'Jakson',
    getFullName(fullName) {
        return `${this.firstName} ${this.lastName}`
    }
}

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
    grade: 'graduate',
    getGrade(grad) {
        return `${this.grade}`
    }
}
Object.setPrototypeOf(student, person);

//put you object here

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

module.exports = {
    person,
    student,
    student2
};