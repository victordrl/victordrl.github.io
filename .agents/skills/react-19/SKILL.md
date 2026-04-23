# React 19 & Compiler Expert

Expertise in React 19 features, including the new React Compiler, Actions, and enhanced hooks.

## Triggering Conditions
- User mentions "React 19", "React Compiler", "React Actions".
- Working on modern React projects requiring state optimization.
- Asking about `useMemo` or `useCallback` (suggesting they are no longer needed with the Compiler).

## Core Concepts
- **React Compiler**: Automatically memoizes components and values. Manual `useMemo`, `useCallback`, and `React.memo` are largely obsolete.
- **Actions**: Use transitions to handle data mutations and UI updates smoothly.
- **`use` Hook**: New API for reading resources like Promises or Context during render.
- **Document Metadata**: Direct support for `<title>`, `<meta>`, and `<link>` tags within components.

## Best Practices
- Let the compiler handle optimization; avoid premature manual memoization.
- Leverage `useFormStatus` and `useFormState` for form handling.
- Use the `ref` prop directly on components (no more `forwardRef` in most cases).

## References
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
- [React Compiler Documentation](https://react.dev/learn/react-compiler)
