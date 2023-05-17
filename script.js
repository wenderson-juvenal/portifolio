// eventos no nav dos projetos

let previousButton = document.querySelector("#previous-button")
let nextButton = document.querySelector("#next-button")
let projects = document.querySelectorAll(".project")

nextButton.addEventListener("click", () => {
    projects.forEach(project => {
        let width = project.clientWidth
        project.style.left = Number(project.style.left.replace("px", "")) - (width + 10) + "px"
        if (Number(project.style.left.replace("px", "")) < -(width + 10 )* (projects.length - 2)) {
            project.style.left = -(width + 10 ) * (projects.length - 2) + "px"
        }
    })
})

previousButton.addEventListener("click", () => {
    projects.forEach(project => {
        let width = project.clientWidth
        project.style.left = Number(project.style.left.replace("px", "")) + width + 10 + "px"
        if (Number(project.style.left.replace("px", "")) > 0) {
            project.style.left = "0"
        }
    })
})
