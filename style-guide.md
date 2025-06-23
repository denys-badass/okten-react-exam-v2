# MovieHub Style Guide

## Color Palette

### Light Theme
- Primary Background: `bg-gray-50`
- Secondary Background: `bg-white`
- Text Primary: `text-gray-900`
- Text Secondary: `text-gray-600`
- Accent: `text-indigo-600`
- Hover Accent: `hover:text-indigo-700`
- Border: `border-gray-200`

### Dark Theme
- Primary Background: `bg-gray-900`
- Secondary Background: `bg-gray-800`
- Text Primary: `text-gray-100`
- Text Secondary: `text-gray-400`
- Accent: `text-indigo-400`
- Hover Accent: `hover:text-indigo-300`
- Border: `border-gray-700`

## Component Styles

### Header
```tailwind
// Light Theme
header {
  @apply bg-gray-50 border-b border-gray-200 shadow-sm;
}

// Dark Theme
.dark header {
  @apply bg-gray-800 border-gray-700;
}

// Navigation Links
.nav-link {
  @apply px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 
  transition-colors duration-200;
}

// Search Bar
.search-input {
  @apply bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
  rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent;
}
```

### Movie Cards
```tailwind
.movie-card {
  @apply bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md 
  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1;
}

.movie-card-title {
  @apply text-lg font-semibold text-gray-900 dark:text-gray-100;
}

.movie-card-description {
  @apply text-sm text-gray-600 dark:text-gray-400;
}
```

### Buttons
```tailwind
// Primary Button
.btn-primary {
  @apply bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md
  transition-colors duration-200 shadow-sm hover:shadow-md;
}

// Secondary Button
.btn-secondary {
  @apply bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
  text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md transition-colors duration-200;
}

// Pagination Button
.btn-pagination {
  @apply px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700
  hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200;
}
```

### Welcome Page
```tailwind
.welcome-container {
  @apply max-w-4xl mx-auto text-center py-16 px-4;
}

.welcome-title {
  @apply text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6;
}

.welcome-text {
  @apply text-lg text-gray-600 dark:text-gray-400 mb-8;
}
```

### Login Form
```tailwind
.login-form {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-md mx-auto;
}

.form-input {
  @apply w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700
  focus:ring-2 focus:ring-indigo-500 focus:border-transparent
  bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100;
}
```

### Footer
```tailwind
.footer {
  @apply bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700
  py-8 mt-12;
}

.footer-text {
  @apply text-gray-600 dark:text-gray-400 text-sm;
}
```

## Animations
```tailwind
// Card Hover Animation
.hover-animation {
  @apply transition-all duration-300 ease-in-out;
}

// Dropdown Animation
.dropdown {
  @apply transition-all duration-200 transform origin-top-right;
}

.dropdown-enter {
  @apply opacity-0 scale-95;
}

.dropdown-enter-active {
  @apply opacity-100 scale-100;
}
```

## Special Effects
```tailwind
// Glass Effect (for modals or dropdowns)
.glass-effect {
  @apply bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm;
}

// Gradient Text (for logo or important titles)
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r 
  from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400;
}
```

## Responsive Grid
```tailwind
.masonry-grid {
  @apply grid gap-6;
  @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
}
```