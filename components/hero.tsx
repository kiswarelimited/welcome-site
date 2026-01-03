import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <div className="flex flex-col items-center">

                    {/* Clean Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Transform Your Business
                        <span className="text-blue-400 block mt-3">With Digital Innovation</span>
                    </h1>

                    {/* Professional Subheading */}
                    {/* i want to reduce the text font */}

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
                        We build scalable software solutions that optimize operations,
                        drive measurable results, and position your business for future growth.
                    </p>
                </div>
            </div>
        </section>
    );
}