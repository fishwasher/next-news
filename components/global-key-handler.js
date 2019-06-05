import {PureComponent} from 'react';

export default class GlobalKeyHandler extends PureComponent {

  constructor(props) {
    super(props);
    this.eventType = props.eventType || 'keyup';
    this.keyCode = props.keyCode || 27; // Esc

    this.handler = e => {
      if (e.keyCode !== this.keyCode) return;
      if (typeof props.callback === 'function') props.callback();
      else console.log(`${this.eventType} fired - key code is ${e.keyCode}`);
      e.preventDefault;
    };
  }

  componentDidMount() {
    window.addEventListener(this.eventType, this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener(this.eventType, this.handler);
  }

  render() {
    return this.props.children || null;
  }
}
