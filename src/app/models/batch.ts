export class Batch {
    // Unique id
    id = 0;
    year = 0
    // The current semster
    semester = 0;
    department = 0;
    studno = 0;

    constructor(id: number, year: number, semester: number, department: number, studno: number) {
        this.id = id;
        this.year = year;
        this.semester = semester;
        this.department = department;
        this.studno = studno;
    }
}
