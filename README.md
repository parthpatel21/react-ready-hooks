# react-ready-hooks

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/react-ready-hooks)

# Install

```bash
yarn add react-ready-hooks
```

## Hooks

- [`useToggle`](https://github.com/parthpatel21/react-ready-hooks) Hook for handling boolean state.
- [`useTimeout`](https://github.com/parthpatel21/react-ready-hooks) Hook for executing function after some delay
- [`useUpdateEffect`](https://github.com/parthpatel21/react-ready-hooks) Hook for executing function only when their dependencies gets change

### useToggle

```jsx
const [value, toggleValue] = useToggle(false);
```

Methods:

- `toggleValue()` - allow you to toggle state and you can also pass boolean value to set state.

Properties:

- `value` - the current state

### useTimeout

```jsx
const { clear, reset } = useTimeout(() => {}, 1000);
```

This hook accept two parameter -> function to be execute and delay in milli second.

Methods:

- `clear()` - allow you to clear timeout.
- `reset()` - allow you to reset timeout.

### useUpdateEffect

```jsx
const [count, setCount] = useState(100);
useUpdateEffect(() => alert(count), [count]);
```

This hook accept two parameter -> function to be execute and dependencies array.
