import React from 'react'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative py-16 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-1/4 w-4 h-4 bg-teal-400 rounded-full"></div>
                <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-cyan-400/20 mb-6">
                    <span className="text-sm font-medium text-teal-300">Get Started</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Build Something Amazing?
                </h2>

                <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                    Let's discuss your project. No obligation, just a friendly conversation about your needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 border border-transparent hover:scale-105"
                    >
                        Schedule a Free Consultation
                    </Link>

                    <Link
                        href="https://wa.me/message/5WGMY6PC2CO2B1"
                        className="bg-transparent text-gray-300 px-8 py-3 rounded-lg font-semibold border border-gray-600 hover:border-gray-400 transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
                    >
                        Chat with Our Team
                    </Link>
                </div>
            </div>
        </section>
    )
}
