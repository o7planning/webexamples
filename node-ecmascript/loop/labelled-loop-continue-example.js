let i = 0;

label1: while (i < 5) {
    console.log("outer i= " + i);
    i++;

    label2: for (let j = 0; j < 3; j++) {
        if (j > 0) {

            continue label2;
        }
        if (i > 1) {

            continue label1;
        }
        console.log("inner i= " + i + ", j= " + j);
    }

}
