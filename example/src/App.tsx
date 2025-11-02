import { SlideShow } from 'react-slideshow-lightweight';
import 'react-slideshow-lightweight/dist/style.css';

const images = [
  'https://placehold.co/600x400?text=Hello+World',
  'https://placehold.co/600x400/EEE/31343C?text=Slide+Three',
  'https://placehold.co/600x400/667BC6/FFFFFF?text=Beautiful+Gallery',
  'https://placehold.co/600x400/DA7297/FFFFFF?text=Final+Slide',
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            React SlideShow Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A lightweight, easy-to-use, and customizable slideshow component for React.
            Perfect for image galleries, hero banners, or any content rotation needs.
          </p>
        </div>

        {/* Main SlideShow */}
        <div className="mb-16">
          <SlideShow images={images} />
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Zero Dependencies</h3>
                <p className="text-gray-600">No external dependencies - keep your bundle size small</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Navigation</h3>
                <p className="text-gray-600">Simple click navigation with prev/next buttons</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fully Accessible</h3>
                <p className="text-gray-600">Built with ARIA labels and screen reader support</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">TypeScript Support</h3>
                <p className="text-gray-600">Fully typed with TypeScript for better DX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

