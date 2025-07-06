# Project Structure

## Clean File Organization

### Main Application Files
- `src/App.jsx` - Main app component with LanguageProvider wrapper
- `src/main.jsx` - Entry point
- `src/index.css` - Global styles

### Components (All following PascalCase naming)
- `src/components/Navbar.jsx` - Navigation bar with multi-level dropdowns
- `src/components/Hero.jsx` - Hero section
- `src/components/Slider.jsx` - Image/content slider
- `src/components/About.jsx` - About section
- `src/components/Schemes.jsx` - Schemes section
- `src/components/Map.jsx` - Map component
- `src/components/Footer.jsx` - Footer component

### Context & Translations
- `src/contexts/LanguageContext.jsx` - Language context provider
- `src/translations/index.js` - Translation definitions (mr, en, hi)

### Assets
- `src/assets/` - Static assets (images, icons)

## Removed Files
- `src/App-test.jsx` - Test file (unused)
- `src/components/Hero_old.jsx` - Old version (unused)
- `src/components/Hero_new.jsx` - New version (unused)
- `src/components/LanguageDemo.jsx` - Demo component (unused)

## File Naming Conventions
- All React components use PascalCase (e.g., `Navbar.jsx`, `Footer.jsx`)
- Context files use PascalCase with descriptive names
- Translation files use lowercase with descriptive names

## Key Features
- Multi-language support (Marathi, English, Hindi)
- Responsive navigation with nested dropdowns
- Clean component structure
- Proper context provider setup
