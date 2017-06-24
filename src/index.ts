import { createElement, HTMLProps, PureComponent } from 'react';

export type IReactDOMElementContainerProps = {
  tag?: string;
  el: Element;
} & Partial<HTMLProps<any>>;

export default class ReactDOMElementContainer
  extends PureComponent<IReactDOMElementContainerProps, {}> {
  $el: Element;
  _ref;
  static defaultProps = {
    tag: 'div',
  };

  refresh (props: IReactDOMElementContainerProps) {
    const { el } = props;
    const { $el } = this;
    const { firstChild } = $el;
    if (firstChild && firstChild !== el) $el.removeChild(firstChild);
    if (el) $el.appendChild(el);
  }

  componentWillMount () {
    this._ref = (el) => el && (this.$el = el);
  }

  componentDidMount () {
    this.refresh(this.props);
  }

  componentWillReceiveProps (np) {
    this.refresh(np);
  }

  componentWillUnmount () {
    const { $el } = this;
    const { firstChild } = $el;
    if ($el.firstChild) $el.removeChild(firstChild);
  }

  render () {
    const { tag, el, ...rest } = this.props;
    return createElement(tag, { ref: this._ref, ...rest });
  }
}