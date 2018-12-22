class Portfolio {

  state: string;

  constructor() {
    const menuItems = document.querySelectorAll('nav ul li a');
    const d = new Date();

    document.querySelector('.current-year').textContent = d.getFullYear() + '';

    for (let index = 0; index < menuItems.length; index++) {
      const element = menuItems[index];
      element.addEventListener('click', this.onMenuItemClick)
    }
  }

  onMenuItemClick(e: MouseEvent) {
    e.preventDefault();

    let animationBlocks = document.querySelectorAll(`.animation__block`),
      activeAnimationBlocks = document.querySelectorAll(`.animation__block.${(e as any).target.getAttribute('data-state')}`);

    for (let index = 0; index < animationBlocks.length; index++) {
      const element = animationBlocks[index];

      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    }

    for (let index = 0; index < activeAnimationBlocks.length; index++) {
      const element = activeAnimationBlocks[index];

      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    }

    animationBlocks[0].addEventListener("transitionend", function (event) {
      console.log("DONE");
    }, false);

  }

}

new Portfolio();