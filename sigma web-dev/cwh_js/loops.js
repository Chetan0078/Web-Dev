let details = {b40 :"chetan", b41:"soni", b12:"akash", b42:"daksh", b39:"bunty", b38:"mittal" };
console.log("hello")
for (const key in details) {
    if (Object.hasOwnProperty.call(details, key)) {
        const element = details[key];
        console.log("element")
    }
}
let i,j;

for (i = 1; i <= 4; i++) {
        console.log("\n")
        for(j= 1;j<=i;j++){
            console.log("*")
        }
}

