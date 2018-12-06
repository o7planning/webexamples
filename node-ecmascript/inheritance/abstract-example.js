// (1)
// (en)
// An abstract class.
// (vi)
// Một lớp trừu tượng (Abstract class).
class AbstractDocument {

    constructor(name) {
        this.name = name
    }

    // (2)
    // (en)
    // A method can not be used, because it always throws an error.
    // (vi)
    // Một phương thức không thể sử dụng được, vì nó luôn ném ra lỗi.
    show() {
        // Not Implemented Error
        throw "Subclass must implement abstract method";
    }
}

class PDF extends AbstractDocument {

    // (3)
    // (en)
    // Override method of parent class
    // (vi)
    // Ghi đè phương thức của lớp cha
    show() {
        console.log("Show PDF document:", this.name);
    }
}



class Word extends AbstractDocument {
    show() {
        console.log("Show Word document:", this.name)
    }
}



// -------------------- TEST -------------------------

let doc1 = new PDF("Python tutorial");
let doc2 = new Word("Java IO Tutorial");
let doc3 = new PDF("ECMAScript Date & Time Tutorial");

let documents = [doc1, doc2, doc3];


for (let i = 0; i < documents.length; i++) {
    documents[i].show();
}

let doc4 = new AbstractDocument("An Abstract Document");

doc4.show(); // Throw Error!!!
