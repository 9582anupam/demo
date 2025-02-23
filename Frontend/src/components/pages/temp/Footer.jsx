import React from 'react';
import { Github, Twitter, Brain } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold">GenAI</span>
                </div>
                <p className="text-gray-400">
                Pushing the boundaries of what's possible with artificial intelligence.
                </p>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-purple-400">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400">About</a></li>
                <li><a href="/register" className="text-gray-400 hover:text-purple-400">Register</a></li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                <li><a href="/docs" className="text-gray-400 hover:text-purple-400">Documentation</a></li>
                <li><a href="/api" className="text-gray-400 hover:text-purple-400">API Reference</a></li>
                <li><a href="/support" className="text-gray-400 hover:text-purple-400">Support</a></li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                    <Twitter className="h-6 w-6" />
                </a>
                </div>
            </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GenAI Challenge. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;