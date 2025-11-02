# React SlideShow

[![npm version](https://img.shields.io/npm/v/react-slideshow-lightweight.svg)](https://www.npmjs.com/package/react-slideshow-lightweight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/LyesWeb/react-slideshow/actions/workflows/ci.yml/badge.svg)](https://github.com/LyesWeb/react-slideshow/actions/workflows/ci.yml)
[![GitHub Stars](https://img.shields.io/github/stars/LyesWeb/react-slideshow?style=social)](https://github.com/LyesWeb/react-slideshow)

A lightweight, easy-to-use, and customizable slideshow component for React. Perfect for image galleries, hero banners, or any content rotation needs — with zero external dependencies.

## ✨ Features

- 🪶 **Lightweight** - Zero external dependencies, minimal bundle size
- ⚡ **Fast & Performant** - Built with React best practices
- ♿ **Accessible** - Screen reader support with ARIA labels
- 🎨 **Customizable** - Easily style with className prop
- 📱 **Responsive** - Works great on all screen sizes
- 🔧 **TypeScript** - Fully typed for better developer experience
- 🎯 **Simple API** - Easy to integrate and use

## 🎬 Live Demo

Check out the live demo: **[https://lyesweb.github.io/react-slideshow/](https://lyesweb.github.io/react-slideshow/)**

## 📦 Installation

```bash
npm install react-slideshow-lightweight
```

or with pnpm:

```bash
pnpm add react-slideshow-lightweight
```

or with yarn:

```bash
yarn add react-slideshow-lightweight
```

## 🛠 Usage

```tsx
import SlideShow from 'react-slideshow-lightweight';
import 'react-slideshow-lightweight/dist/style.css';

const images = [
  'https://placehold.co/600x400/png',
  'https://placehold.co/600x400?text=Hello+World',
];

function App() {
  return (
    <div>
      <SlideShow images={images} />
    </div>
  );
}

export default App;
```

### With Custom Starting Index

```tsx
<SlideShow images={images} defaultIndex={2} />
```

### With Custom Styling

```tsx
<SlideShow 
  images={images} 
  className="my-custom-slideshow"
/>
```

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | **required** | Array of image URLs to display |
| `defaultIndex` | `number` | `0` | Starting slide index |
| `className` | `string` | `''` | Additional CSS class names |

## ♿ Accessibility Features

- Full ARIA labels and roles
- Screen reader announcements for slide changes
- Focus management
- Visible focus indicators
- Semantic HTML structure

## 🏗 Architecture

Built with atomic design principles:

- **Atoms**: Button, Icon
- **Molecules**: NavigationControls
- **Organisms**: SlideShow

This modular structure makes the component easy to maintain and extend.

## 🚀 Development

### Clone and Install

```bash
git clone https://github.com/LyesWeb/react-slideshow.git
cd react-slideshow
pnpm install
```

### Build the Library

```bash
pnpm build
```

### Run Demo App Locally

```bash
cd example
pnpm dev
```

The demo app will be available at `http://localhost:5173`

### Project Structure

```
react-slideshow/
├── src/
│   ├── components/
│   │   ├── atoms/          # Button, Icon
│   │   ├── molecules/      # NavigationControls
│   │   └── organisms/      # SlideShow
│   ├── index.ts            # Main export
│   └── styles.css          # Tailwind styles
├── example/                # Demo React app
├── dist/                   # Build output
└── package.json
```

## 📝 Publishing to npm

1. Update version in `package.json`
2. Build the library:
   ```bash
   pnpm build
   ```
3. Publish to npm:
   ```bash
   npm publish
   ```

## 🗺 Roadmap

Future features planned:

- [ ] Auto-play functionality
- [ ] Slide indicators/dots
- [ ] Keyboard navigation (arrow keys)
- [ ] Touch/swipe gestures
- [ ] Custom transitions
- [ ] Thumbnail navigation
- [ ] Video support
- [ ] Lazy loading

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

MIT © [LyesWeb](https://github.com/LyesWeb)

See [LICENSE](LICENSE) for more details.

## 💖 Support

If you like this project:
- Give it a ⭐️ on [GitHub](https://github.com/LyesWeb/react-slideshow)
- Share it with others
- [Report bugs](https://github.com/LyesWeb/react-slideshow/issues) or [suggest features](https://github.com/LyesWeb/react-slideshow/issues/new?template=feature_request.md)
- Contribute code via [Pull Requests](https://github.com/LyesWeb/react-slideshow/pulls)

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/LyesWeb/react-slideshow?style=social)
![GitHub forks](https://img.shields.io/github/forks/LyesWeb/react-slideshow?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/LyesWeb/react-slideshow?style=social)

---

Made with ❤️ by [LyesWeb](https://github.com/LyesWeb)
