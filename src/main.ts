function calculateContainerHeight(state: string) {
  const container = document.querySelector(`.animation__container`) as HTMLElement;
  let activeViewInner = document.querySelector(`.animation__view.view--${state} .inner`) as HTMLElement;

  container.style.height = activeViewInner ? activeViewInner.offsetHeight + 'px' : void 0;
}

const menuItemsLinks: NodeListOf<Element> = document.querySelectorAll('nav ul li a');
const menuItems: NodeListOf<Element> = document.querySelectorAll('nav ul li');

class Portfolio {

  constructor(private initialState: string) {
    const d = new Date();

    document.querySelector('.current-year').textContent = d.getFullYear() + '';

    for (let index = 0; index < menuItemsLinks.length; index++) {
      const element = menuItemsLinks[index];
      element.addEventListener('click', this.stateHandler)
    }

    window.addEventListener('resize', () => {
      calculateContainerHeight(window.location.hash.replace('#', '') || this.initialState)
    })

    calculateContainerHeight(this.initialState)
    this.stateHandler();

  }

  stateHandler(e?: MouseEvent) {
    e ? e.preventDefault() : void 0;

    let state: string;

    if (e) {
      state = (e.target as Element).getAttribute('data-state')
    } else {
      state = window.location.hash ? window.location.hash.replace('#', '') : 'home';
    }

    window.location.hash = state;

    calculateContainerHeight(state);

    let animationViews = document.querySelectorAll(`.animation__view`),
      activeAnimationView = document.querySelector(`.animation__view.view--${state}`);

    for (let index = 0; index < animationViews.length; index++) {
      const element = animationViews[index];
      element.classList.remove('is-active');
    }

    for (let index = 0; index < menuItems.length; index++) {
      const element = menuItems[index];
      element.classList.remove('is-active');
    }

    if (e) {
      (e.target as Element).parentElement.classList.add('is-active');
    } else {
      document.querySelector(`nav ul li a[data-state="${window.location.hash ? window.location.hash.replace('#', '') : 'home'}"]`).parentElement.classList.add('is-active');
    }

    activeAnimationView ? activeAnimationView.classList.add('is-active') : void 0;
  }

}

new Portfolio("home");