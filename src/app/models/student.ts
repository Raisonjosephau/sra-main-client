export class Student {

    name = '';
    regno = '';
    dob = '';
    email = '';
    phone = 0;
    semester = 0;
    department = 0;

    constructor(name: string, regno: string, dob: string, email: string,  phone: number, semester: number, department: number) {
        this.name = name;
        this.regno = regno;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.semester = semester;
        this.department = department;
    }
}
