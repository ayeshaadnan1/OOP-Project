#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "To whome you want to talk?",
            name: "select",
            choices: ["Yourself", "student"]
        });
        if (ans.select == "Yourself") {
            console.log("Hello i'm talking to my self");
            console.log("I'm absoloutly fit");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Do you want to talk to a student?",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, and i'm alright`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, and i'm alright....`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
