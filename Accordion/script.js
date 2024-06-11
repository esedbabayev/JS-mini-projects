const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionContent = document.querySelectorAll(".accordion-content");
const accordionIcon = document.querySelectorAll(".accordion-icon");

accordionHeader.forEach((header, index) => {
  header.addEventListener("click", () => {
    toggleAccordion(index);
  });
});

const toggleAccordion = (number) => {
  const isOpen = !accordionContent[number].classList.contains("hidden");

  resetAll();

  if (!isOpen) {    
    accordionContent[number].classList.remove("hidden");
    accordionIcon[number].classList.add("rotate-180");
    accordionHeader[number].classList.add("bg-gray-900");
  };
};

const resetAll = () => {
  for (let i = 0; i < accordionHeader.length; i++) {
    accordionContent[i].classList.add("hidden");
    accordionIcon[i].classList.remove("rotate-180");
    accordionHeader[i].classList.remove("bg-gray-900");
  }
}

