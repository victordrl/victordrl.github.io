# Tailwind CSS Expert Skill

Comprehensive guidance for implementing utility-first CSS with Tailwind, mobile-first design, and custom theme configurations.

## Triggering Conditions
- User asks for "Tailwind configuration", "responsive design", "mobile-first styles".
- When creating UI components in React.
- Adding custom colors, spacing, or fonts to Tailwind.
- Optimizing CSS for production.

## Core Instructions
- **Mobile-First Approach**: Always start with base classes (mobile) and use breakpoints (`sm:`, `md:`, `lg:`, `xl:`) for larger screens.
- **Utility Classes**: Favor standard Tailwind utilities over custom CSS. Use `theme()` function for complex values.
- **Component Pattern**: Extract repeated patterns into React components rather than `@apply` in CSS files.
- **Accessibility**: Ensure sufficient color contrast and focus states using Tailwind's `focus:`, `active:`, etc.
- **Aesthetics**: Use modern color palettes, subtle gradients, and smooth transitions.

## Examples
### Responsive Card Component
```jsx
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img.jpg" alt="Logo">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Product</div>
      <p class="mt-2 text-slate-500">Professional UI with Tailwind.</p>
    </div>
  </div>
</div>
```

## References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Responsive Design Best Practices](https://tailwindcss.com/docs/responsive-design)
