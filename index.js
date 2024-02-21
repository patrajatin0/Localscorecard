let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count

}
function increment2(){
    count = count + 2
    countEl.innerText = count
}
function increment3(){
    count = count + 3
    countEl.innerText = count
}
function increment4(){
    count = count + 4
    countEl.innerText = count
}
function increment6(){
    count = count + 6
    countEl.innerText = count
}
function incrementno(){
    count = count + 1
    countEl.innerText = count
}
function incrementbye(){
    count = count + 1
    countEl.innerText = count
}
function incrementwide(){
    count = count + 1
    countEl.innerText = count
}

let countTeam = document.getElementById("count-Team")
let count1 = 0
function adding() {
    count1 = count1 + 1
    countTeam.innerText = count1
}
function adding2() {
    count1 = count1 + 2
    countTeam.innerText = count1
}
function adding3() {
    count1 = count1 + 3
    countTeam.innerText = count1
}
function adding4() {
    count1 = count1 + 4
    countTeam.innerText = count1
}
function adding6() {
    count1 = count1 + 6
    countTeam.innerText = count1
}
function addingBYE() {
    count1 = count1 + 1
    countTeam.innerText = count1
}
function addingNO() {
    count1 = count1 + 1
    countTeam.innerText = count1
}
function addingWIDE() {
    count1 = count1 + 1
    countTeam.innerText = count1
}
function restart1(){
   
    countEl.innerText = countTeam.innerText=0;
    count = count1= 0 ;

}
let saveEl = document.getElementById("save-history")

function save(){
    saveEl.style.display=`block`;
    let saveNumber = count + count1
    let saveData = saveNumber + "-"
    saveEl.textContent += saveData;
    countEtextContent = 0 ;
    count = 0 ;
}


// let a = 10 ; 
// let b = 7 ;
// console.log(a)

// function display(){
//     let a = 10 ;

//     console.log(a);
// }

// function displaySome(){
//     a = 20 ; 
//     console.log(a);
// }
// displaySome() // 20 
// display();  // 10

// console.log(a)