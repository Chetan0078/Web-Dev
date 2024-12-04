/*
Create a buisness name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine 
Foods
Garments

Suffix:
Bros
Limited
Hub

by using strings only!!!
*/

//My Answer
let rand1 = Math.random()
let rand2 = Math.random()
let rand3 = Math.random()
let a = 'Crazy';
let b = 'Amazing';
let c = 'Fire';

let p = 'Engine';
let q = 'Foods';
let r = 'Garments';

let x = 'Bros';
let y = 'Limited';
let z = 'Hub';

let nam;
// console.log(nam);
if (rand1<=.33) {
    if (rand2<=.33) {
        if (rand3<=.33) {
            nam = a + p + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = a + p + y;
        }
        else{
            nam = a + p + z;
        }
    }
    else if (rand2<=.66&&rand2>.33) {
        if (rand3<=.33) {
            nam = a + q + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = a + q + y;
        }
        else{
            nam = a + q + z;
        }
    }
    else{
        if (rand3<=.33) {
            nam = a + r + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = a + r + y;
        }
        else{
            nam = a + r + z;
        }
    }
}
if (rand1<=.66&&rand1>.33) {
    if (rand2<=.33) {
        if (rand3<=.33) {
            nam = b + p + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = b + p + y;
        }
        else{
            nam = b + p + z;
        }
    }
    else if (rand2<=.66&&rand2>.33) {
        if (rand3<=.33) {
            nam = b + q + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = b + q + y;
        }
        else{
            nam = b + q + z;
        }
    }
    else{
        if (rand3<=.33) {
            nam = b + r + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = b + r + y;
        }
        else{
            nam = b + r + z;
        }
    }
}
else{
     if (rand2<=.33) {
        if (rand3<=.33) {
            nam = c + p + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = c + p + y;
        }
        else{
            nam = c + p + z;
        }
    }
    else if (rand2<=.66&&rand2>.33) {
        if (rand3<=.33) {
            nam = c + q + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = c + q + y;
        }
        else{
            nam = c + q + z;
        }
    }
    else{
        if (rand3<=.33) {
            nam = c + r + x;
        }
        else if (rand3>.33&&rand3<=.66) {
            nam = c + r + y;
        }
        else{
            nam = c + r + z;
        }
    }
}

// alert(`Your buisness name is ${nam}`);
console.log(nam);