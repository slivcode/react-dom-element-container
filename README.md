# react-dom-element-container

sometimes you will need to mount the mount DOM element and it handles the lifecycle for you. 

```typescript jsx
import ReactDOMElementContainer from 'react-dom-element-container';

// tag is optional
// extend HTMLProps
// el can be null
<ReactDOMElementContainer tag={'div'} el={document.createElement('div')} style={{color: 'red'}}/>;
```