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
