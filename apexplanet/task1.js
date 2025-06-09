const introSection = document.getElementById('intro');
const benefitsSection = document.getElementById('benefits');
const consSection = document.getElementById('cons');
const tipsSection = document.getElementById('tips');

const benefitsButton = document.getElementById('btn-benefits');
const consButton = document.getElementById('btn-cons');
const tipsButton = document.getElementById('btn-tips');
const backButton = document.getElementById('back-button');
function showSection(sectionToShow) {
  [introSection, benefitsSection, consSection, tipsSection].forEach(section => {
    section.classList.remove('active');
  });

  sectionToShow.classList.add('active');
  [benefitsButton, consButton, tipsButton].forEach(button => {
    button.classList.remove('active');
  });

  if (sectionToShow === benefitsSection) {
    benefitsButton.classList.add('active');
  } else if (sectionToShow === consSection) {
    consButton.classList.add('active');
  } else if (sectionToShow === tipsSection) {
    tipsButton.classList.add('active');
  }
}
benefitsButton.addEventListener('click', () => showSection(benefitsSection));
consButton.addEventListener('click', () => showSection(consSection));
tipsButton.addEventListener('click', () => showSection(tipsSection));

backButton.addEventListener('click', () => {
  alert('Returning to the Intro section!');
  showSection(introSection);
});
