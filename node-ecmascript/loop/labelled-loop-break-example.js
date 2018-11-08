console.log("Labelled Loop Break example");

let i = 0;

label1: while (i < 5) {

    console.log("----------------------\n");
    console.log("i = " + i);
    i++;

    label2: for (let j = 0; j < 3; j++) {

        console.log("  --> " + j);
        if (j > 0) {
            // Exit the loop with label1.
            break label1;
        }
    }

}

console.log("Done!");
