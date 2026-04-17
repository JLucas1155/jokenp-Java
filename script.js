console.log("Deus é bom")

const options = document.querySelectorAll(".option-image");
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const logicIMg = ['img/./pedra.png','img/./papel.png','img/./tesoura.png']
const computerResult = document.querySelector(".computer-results img")
const userResul = document.querySelector(".user-results img")

const winner = {
    RR: "Empate",
    PP: "Empate",
    SS: "Empate",
    RP: "Computador",
    RS: "Usuário",
    PR: "Usuário",
    PS: "Computador",
    SR: "Computador",
    SP: "Usuário"
}

function handleroptionclick(event) {
    console.log(event.currentTarget)
    const clickedOption = event.currentTarget
    const clickedindex = Array.from(options).indexOf(clickedOption)

    console.log(clickedindex)

    container.classList.add("start")
    resultText.textContent = "Wait..."

    userResul.src = computerResult.src = 'img/./pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userResul.src = logicIMg[clickedindex]
        console.log(logicIMg[clickedindex])

        const randomnumber = Math.floor(Math.random() * 3)
        computerResult.src = logicIMg[randomnumber]
        console.log(randomnumber)

        const userValue = ['R', 'P', 'S'][clickedindex]
        const computerValue = ['R', 'P', 'S'][randomnumber]
        
        const result = winner[userValue + computerValue]

        console.log(result)
        console.log(userValue)
        console.log(computerValue)

        resultText.textContent = userValue === computerValue ? "Empate" : result + " venceu!"
    }, 2000);
}

options.forEach(img => {
    img.addEventListener("click", handleroptionclick)
})