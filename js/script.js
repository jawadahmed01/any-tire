let accordionTitle = document.querySelectorAll(".accodion-item-title")
let accordionContent = document.querySelectorAll(".accordion-item-content")
let accordionIcon = document.querySelectorAll(".acordion-icon-bar-2")

accordionTitle.forEach((elm, index) => {
  elm.addEventListener("click", () => {
    accordionContent[index].classList.toggle("accordion-active")
    accordionIcon[index].classList.toggle("accordion-icon-active")
  })
})
