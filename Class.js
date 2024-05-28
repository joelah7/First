import { table } from "./Table.js";

class Student {
    constructor(name) {
        this.name = name;
        this.age = age;
        this.state_of_origin = state_of_origin
    }
}

const columns = ['name', 'age', 'state_of_Origin'];

const firstStudent = {
    name: 'Ada',
    age: 10,
    state_of_Origin: 'Abia'
}

const secondStudent = {
    name: 'Tosin',
    age: 11,
    state_of_Origin: 'Osun '
}

const thirdStudent = {
    name: 'Kira',
    age: 9,
    state_of_Origin: 'Plateau',
}

const fourthStudent = {
    name: 'Jack',
    age: 10,
    state_of_Origin: 'Lagos',
}

const fifthStudent = {
    name: 'Nora',
    age: 10,
    state_of_Origin: 'Delta',
}

table.setColumns(columns);

const rows = [firstStudent, secondStudent, thirdStudent, fourthStudent, fifthStudent];
table.setRows()
table.drawTable();