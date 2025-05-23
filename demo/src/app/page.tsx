"use client";

import React, { useState } from 'react';
import BlurEffect from 'react-progressive-blur';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            React Progressive Blur
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A lightweight React component for smooth, progressive blur effects with customizable intensity and positioning
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.npmjs.com/package/react-progressive-blur"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              npm install
            </a>
            <a 
              href="https://github.com/rakib86/react-progressive-blur"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Video Demo */}
          <VideoDemo />
          
          {/* Image Demo */}
          <ImageDemo />
          
          {/* Interactive Demo */}
          <InteractiveDemo />
        </div>

        {/* Code Examples */}
        <CodeExamples />
      </div>
    </main>
  );
}

function VideoDemo() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-4">Video Overlay</h3>
      <div className="relative rounded-xl overflow-hidden">
        <video
          className="w-full h-48 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/demo-video.mp4" type="video/mp4" />
          {/* Fallback gradient for demo */}
          <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600"></div>
        </video>
        
        <BlurEffect
          className="h-16 bg-gradient-to-b from-black/30 to-transparent"
          intensity={100}
          position="top"
        />
        
        <BlurEffect
          className="h-20 bg-gradient-to-t from-black/50 to-transparent"
          intensity={150}
          position="bottom"
        />
        
        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="font-semibold">Beautiful Overlay</h4>
          <p className="text-sm opacity-90">Progressive blur in action</p>
        </div>
      </div>
    </div>
  );
}

function ImageDemo() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-4">Image Overlay</h3>
      <div className="relative rounded-xl overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600"></div>
        
        <BlurEffect
          className="h-24 bg-gradient-to-t from-black/60 to-transparent"
          intensity={80}
          position="bottom"
        />
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h4 className="font-semibold text-lg">Stunning Visuals</h4>
          <p className="text-sm opacity-90">Smooth gradient transitions</p>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [intensity, setIntensity] = useState(50);
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo</h3>
      
      {/* Controls */}
      <div className="mb-4 space-y-3">
        <div>
          <label className="block text-white text-sm font-medium mb-1">
            Intensity: {intensity}
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-medium mb-1">
            Position
          </label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as any)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-600"
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      
      {/* Preview */}
      <div className="relative h-32 rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse"></div>
        <BlurEffect
          intensity={intensity}
          position={position}
          className={`bg-gradient-to-${position === 'top' ? 'b' : position === 'bottom' ? 't' : position === 'left' ? 'r' : 'l'} from-black/30 to-transparent ${
            position === 'top' || position === 'bottom' ? 'h-16' : 'w-16'
          }`}
        />
      </div>
    </div>
  );
}

function CodeExamples() {
  return (
    <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Usage Examples</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Installation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Installation</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-green-400">npm install react-progressive-blur</code>
          </pre>
        </div>
        
        {/* Basic Usage */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Basic Usage</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-gray-300">
{`import BlurEffect from 'react-progressive-blur';

<div className="relative">
  <img src="/image.jpg" alt="Background" />
  <BlurEffect 
    position="top" 
    intensity={50} 
    className="h-32" 
  />
</div>`}
            </code>
          </pre>
        </div>
        
        {/* Video Example */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Video Overlay</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-gray-300">
{`<div className="relative">
  <video src="/video.mp4" />
  <BlurEffect 
    position="bottom" 
    intensity={150}
    className="h-20 bg-gradient-to-t 
               from-black/50 to-transparent" 
  />
</div>`}
            </code>
          </pre>
        </div>
        
        {/* Props Table */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Props</h3>
          <div className="bg-gray-900 rounded-lg p-4">
            <table className="w-full text-sm text-gray-300">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Prop</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-1">position</td>
                  <td className="py-1 text-blue-400">'top'|'bottom'|'left'|'right'</td>
                  <td className="py-1">'top'</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-1">intensity</td>
                  <td className="py-1 text-blue-400">number</td>
                  <td className="py-1">50</td>
                </tr>
                <tr>
                  <td className="py-1">className</td>
                  <td className="py-1 text-blue-400">string</td>
                  <td className="py-1">''</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}