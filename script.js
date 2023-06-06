let loader = document.querySelector(".loader")
setTimeout(() => {
    loader.style.display = "none"
}, 500)

// eventos no nav dos projetos

let previousButton = document.querySelector("#previous-button")
let nextButton = document.querySelector("#next-button")
let project = document.querySelector(".project")
let divProjects = document.querySelector("#projects div")

nextButton.addEventListener("click", () => {
    divProjects.scrollLeft += project.clientWidth + 10
})
previousButton.addEventListener("click", () => {
    if (Math.abs(divProjects.scrollLeft - (divProjects.scrollWidth - divProjects.clientWidth)) <= 1) {
        let sub
        for (let i=0; i < divProjects.clientWidth; i += project.clientWidth + 10) {
            sub = project.clientWidth - (divProjects.clientWidth - i) 
        }
        divProjects.scrollLeft -= sub
    } else {
        divProjects.scrollLeft -= project.clientWidth + 10
    }
    
})

// eventos selecionar skill
let skills = document.querySelectorAll(".bubble")
let opacity = document.querySelector("#opacity")

function skillsHide(div, opacity) {
    div.classList.remove("show")
    setTimeout(() => {
        div.classList.add("hide")
    }, 300)
    opacity.style.display = "none"
}
skills.forEach(skill => {
    skill.addEventListener("click", () => {
        let div = skill.nextElementSibling;
        opacity.style.display = "block"
        div.classList.remove("hide")
        div.classList.add("show")
        div.addEventListener("click", () => {
            skillsHide(div, opacity)
        })
    })
    
    opacity.addEventListener("click", () => {
        let div = skill.nextElementSibling
        skillsHide(div, opacity)
    })
})

// botao mostrar mais em tecnologias de cada projeto

document.addEventListener("DOMContentLoaded", function() {
    let listTechs = document.querySelectorAll(".techs")
    listTechs.forEach(list => {
        if (list.children.length > 3) {
            for (let i = 2; i < list.children.length; i++) {
                list.children[i].style.display = "none";
            }

            let verMais = document.createElement("li")
            verMais.textContent = "ver mais"
            verMais.classList.add("verMais")
            verMais.addEventListener("click", () => {
                for (let i = 2; i < list.children.length-1; i++) {
                    if (list.children[i].style.display === "none"){
                        verMais.textContent = "ver menos"
                        list.children[i].style.display = "list-item";
                    } else {
                        verMais.textContent = "ver mais"
                        list.children[i].style.display = "none";
                    }
                }
            })

            list.appendChild(verMais)
        }
    })
})
  
