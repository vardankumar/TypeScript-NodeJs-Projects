class School {
    name : string;
    students : Student[] = [];
    teachers : Teacher[] = [];
    addStudent(student : Student) {
        this.students.push(student);
    }

    addTeacher(teacher : Teacher) {
        this.teachers.push(teacher);
    }

    constructor(name : string){
        this.name = name;
    }
}

class Student{
    name : string;
    age : number;
    schoolName : string;

    constructor(name : string, age : number, schoolName : string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }

}


class Teacher extends Student{
    email : string = '';
    contact : string = '';
    addInfo(email : string, contact : string){
        this.email = email;
        this.contact = contact;
    }
}


let school1 = new School('RTS')
let school2 = new School('Tameer - e - Nau')

let teacher1 = new Teacher('Imran', 30, school1.name)
let teacher2 = new Teacher('Alam', 30, school1.name)

teacher1.addInfo('vardantharwani@gmail.com', '0300-1234567')

let student1 = new Student('Ali', 20, school1.name)
let student2 = new Student('Hassan', 20, school2.name)


school1.addStudent(student1)
school2.addStudent(student2)

school1.addTeacher(teacher1)
school2.addTeacher(teacher2)

console.log(student1)
console.log(student2)

console.log(school1)
console.log(school2)

console.log(teacher1)
console.log(teacher2)