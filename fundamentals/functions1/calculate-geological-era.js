function geology(age){
   return age < 65.5 ? "cenozoic":
   (age >= 65.5 && age < 251) ? "mesozoic":
    (age >= 251 && age < 542) ? "Paleozic": "Pre-Paleozoic"
    

}

console.log(geology(50));
console.log(geology(100));
console.log(geology(500)); 
console.log(geology(1000));