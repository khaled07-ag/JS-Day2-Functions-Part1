function printName() {
    console.log("Khaled")
}

printName();

function printAge(CurrentYear){
    let age = 2024 - CurrentYear;
    console.log(age)
}
printAge(2001);

function printAgeAndName(printName, age){
    let ageName = `Hello ${printName} you are ${age} years old`;
    console.log(ageName);
}
printAgeAndName("Khaled","23");

function printHello(Name, language){
    if(language == "en"){
        console.log(`Hello ${Name}`)
    }else if(language == "es"){
        console.log(`Hola ${Name}`)
    }else if(language == "fr"){
        console.log(`Bonjour ${Name}`)
    }else if(language == "tr"){
        console.log(`Merhaba ${Name}`)
    }

}
printHello("Khaled","es");

function printMax(Num1, Num2){
    if(Num1>Num2){
        console.log(Num1)
    }else{
        console.log(Num2)
    }
    

}
printMax(3,4);
