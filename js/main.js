class AccordionElement extends HTMLElement {
  constructor() {
    super();

    const accordionQuestion = this.querySelector('.accordion__question');
    const accordionAnswer = this.querySelector('.accordion__answer');
    const accordionFlag = this.querySelector('.accordion__flag');

    accordionQuestion.addEventListener('click', () => {
      const expanded = accordionAnswer.getAttribute('aria-expanded') === 'true' || false;

      accordionAnswer.setAttribute('aria-expanded', !expanded);

      if (!expanded) {
        accordionFlag.innerHTML = '-';
      } else {
        accordionFlag.innerHTML = '+';
      }
    });

    // Set the initial state of the accordion content
    accordionAnswer.setAttribute('aria-expanded', 'false');
  }
}

// Define the custom element tag name
customElements.define('custom-accordion', AccordionElement);
