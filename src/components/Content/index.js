import './style.css';
import Examples from 'components/Examples';

export default class Content {
  static instance;

  constructor() {
    if (Content.instance) {
      return Content.instance;
    }
    Content.instance = this;
  }

  render(Component) {
    const section = document.getElementById('section');
    section.appendChild(Component);
  }

  rerender(component) {
    const section = document.getElementById('section');
    section.innerHTML = '';

    Object.getOwnPropertyDescriptor(Examples, component)
      .value()
      .then(({ default: Component }) => section.appendChild(Component()));
  }
}
