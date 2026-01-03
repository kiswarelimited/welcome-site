import React from 'react'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative py-16 bg-gray-900 overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                {/* Professional Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
                    <span className="text-sm font-medium text-blue-300">Get Started</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                </h2>

                <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                    Contact our team to explore how we can support your strategic objectives with tailored software and delivery expertise.
                </p>

                {/* Modern Classic Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/20 border border-blue-500/30 hover:scale-105"
                    >
                        Start Your Project
                    </Link>

                    <Link
                        href="/services"
                        className="bg-transparent text-gray-300 px-8 py-3 rounded-lg font-semibold border border-gray-600 hover:border-gray-400 transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
                    >
                        Our Services
                    </Link>
                </div>
            </div>
        </section>
    )
}
