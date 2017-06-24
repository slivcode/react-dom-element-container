"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ReactDOMElementContainer extends react_1.PureComponent {
    refresh(props) {
        const { el } = props;
        const { $el } = this;
        const { firstChild } = $el;
        if (firstChild && firstChild !== el)
            $el.removeChild(firstChild);
        if (el)
            $el.appendChild(el);
    }
    componentWillMount() {
        this._ref = (el) => el && (this.$el = el);
    }
    componentDidMount() {
        this.refresh(this.props);
    }
    componentWillReceiveProps(np) {
        this.refresh(np);
    }
    componentWillUnmount() {
        const { $el } = this;
        const { firstChild } = $el;
        if ($el.firstChild)
            $el.removeChild(firstChild);
    }
    render() {
        const _a = this.props, { tag, el } = _a, rest = __rest(_a, ["tag", "el"]);
        return react_1.createElement(tag, Object.assign({ ref: this._ref }, rest));
    }
}
ReactDOMElementContainer.defaultProps = {
    tag: 'div',
};
exports.default = ReactDOMElementContainer;
