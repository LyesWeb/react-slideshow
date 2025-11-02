# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned Features
- Auto-play functionality
- Slide indicators/dots
- Keyboard navigation (arrow keys)
- Touch/swipe gestures for mobile
- Custom transitions
- Thumbnail navigation
- Video support
- Lazy loading for images

## [0.1.0] - 2025-11-02

### Added
- Initial release of React SlideShow component
- Basic slideshow functionality with image support
- Previous/Next navigation buttons
- Mouse click navigation
- Slide counter display
- TypeScript support with full type definitions
- Responsive design
- Accessibility features (ARIA labels, screen readers)
- Focus management
- Bundled Tailwind CSS styles (zero dependencies for consumers)
- Atomic design architecture (Atoms, Molecules, Organisms)
- Demo application with examples
- Comprehensive documentation

### Features
- Zero external dependencies
- Lightweight bundle (~5KB)
- ESM and UMD builds
- Customizable via className prop
- `defaultIndex` prop for starting slide
- Smooth transitions between slides
- Disabled state for navigation buttons at boundaries

### Components
- `SlideShow` - Main slideshow organism
- `NavigationControls` - Navigation molecule
- `Button` - Reusable button atom
- `Icon` - SVG icon atom

[Unreleased]: https://github.com/LyesWeb/react-slideshow/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/LyesWeb/react-slideshow/releases/tag/v0.1.0

