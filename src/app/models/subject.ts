export class Subject {
    // Unique id
    id = 0;
    // The name of subject
    name = ''
    // The cource code of subject
    cource_code = '';
    // The credit of subject
    credit = 0;
    // The current semster of subject
    semester = 0;
    // Difficulty level
    difficulty = 0;

    constructor(id: number, name: string, cource_code: string, credit: number, semester: number, difficulty: number) {
        this.id = id;
        this.name = name;
        this.cource_code = cource_code;
        this.credit = credit;
        this.semester = semester;
        this.difficulty = difficulty;
    }
}
