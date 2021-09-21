let mySounds = document.querySelectorAll("audio"); 
let myLi = document.querySelectorAll("li");
let myBlacks = document.querySelectorAll(".black");
myLi.forEach((li , index) => {
    li.addEventListener( "click" ,(e) => {
        console.log("w")
        console.log(e.target)
        mySounds[index].currentTime = 0; 
        mySounds[index].play();
        e.target.style.setProperty("--lcolor" , "white");
        setTimeout(() => e.target.style.setProperty("--lcolor" , "rgba(207, 207, 207, 0.945)") , 1000)
        e.target.style.setProperty("--big" , "scale(1.5)");

        setTimeout(() => e.target.style.setProperty("--big" , "scale(1)") , 600)
        e.target.style.setProperty("--text-shadow-white" , `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa
        
        `);
        
        setTimeout(() => e.target.style.setProperty("--text-shadow-white" , "unset") , 1000);

    })
})
myBlacks.forEach((black , index) => {
    black.addEventListener( "click" ,(e) => {
        console.log("b")
        mySounds[index].currentTime = 0; 
        console.log(e.target)
        mySounds[index].play()
        e.target.style.setProperty("--bcolor" , "white");
        setTimeout(() => e.target.style.setProperty("--bcolor" , "rgba(207, 207, 207, 0.945)"))
        e.target.style.setProperty("--big-black" , "scale(1.5)");
        setTimeout(() => e.target.style.setProperty("--big-black" , "scale(1)") , 600)
        e.target.style.setProperty("--text-shadow-black" , `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa
        
        `);
        setTimeout(() => e.target.style.setProperty("--big-black" , "scale(1)") , 600)
        setTimeout(() => e.target.style.setProperty("--text-shadow-black" , "unset") , 1000);
        
    })
})
let keyLettersWhite = ["A" , "S" , "D" , "F" , "G" , "H" , "J" , "K" , "L" , "P"];
let keyLettersBlack = ["W" , "R" , "T" , "U" , "I" , "O"];
let letterWhite = ["l" , "m" , "n" , "o" , "d" , "e" , "f" , "g" , "a" , "b"]; 
let letterBlack = ["c#" , "d#" , "f#" , "g#" , "a#" , "l#"];

let firstSpan = document.querySelector(".head span:first-child");
let secondSpan = document.querySelector(".head span:nth-child(2)");
firstSpan.addEventListener("click" , function(e) {
    if(e.target.classList.contains("select") === false) {
        e.target.classList.add("select");
        secondSpan.classList.remove("select")
        myLi.forEach(function(ele , index) {
            ele.setAttribute("data-l" , letterWhite[index])
        })
        myBlacks.forEach(function(ele , index) {
            ele.setAttribute("data-b" , letterBlack[index])
        })
        
    } 
})
secondSpan.addEventListener("click" , function(e) {
    if(e.target.classList.contains("select") === false) {
            e.target.classList.add("select");
            firstSpan.classList.remove("select")
            myBlacks.forEach(function(ele , index) {
                ele.setAttribute("data-b" , keyLettersBlack[index])
            })
            myLi.forEach(function(ele , index) {
                ele.setAttribute("data-l" , keyLettersWhite[index])
            })
        }
})

let audioWhite = document.querySelectorAll(".audio-white");
let audioBlack = document.querySelectorAll(".black audio");
console.log(audioBlack) 
window.addEventListener("keypress" , function(e) {
    if(keyLettersWhite.indexOf(e.key.toUpperCase()) !== -1) {  
        audioWhite[keyLettersWhite.indexOf(e.key.toUpperCase())].currentTime = 0
        audioWhite[keyLettersWhite.indexOf(e.key.toUpperCase())].play() 
        // e.target.style.setProperty("--lcolor" , "white");
        // setTimeout(() => e.target.style.setProperty("--lcolor" , "rgba(207, 207, 207, 0.945)") , 1000)
        let targetLi =  myLi[keyLettersWhite.indexOf(e.key.toUpperCase())]
        targetLi.style.setProperty("--big" , "scale(1.5)");

        setTimeout(() => targetLi.style.setProperty("--big" , "scale(1)") , 600)
        targetLi.style.setProperty("--text-shadow-white" , `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa
        
        `);
        
        setTimeout(() => targetLi.style.setProperty("--text-shadow-white" , "unset") , 1000);
    }
    if(keyLettersBlack.indexOf(e.key.toUpperCase()) !=-1) {
    audioBlack[keyLettersBlack.indexOf(e.key.toUpperCase())].currentTime = 0
    audioBlack[keyLettersBlack.indexOf(e.key.toUpperCase())].play()
    let targetBlack =myBlacks[keyLettersBlack.indexOf(e.key.toUpperCase())]
    targetBlack.style.setProperty("--big-black" , "scale(1.5)");
    setTimeout(() => targetBlack.style.setProperty("--big-black" , "scale(1)") , 600)
        targetBlack.style.setProperty("--text-shadow-black" , `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0fa,
        0 0 82px #0fa,
        0 0 92px #0fa,
        0 0 102px #0fa,
        0 0 151px #0fa
        
        `);
        setTimeout(() => targetBlack.style.setProperty("--text-shadow-black" , "unset") , 1000);
    
}
})