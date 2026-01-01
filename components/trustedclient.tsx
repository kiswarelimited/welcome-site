import React from 'react'

export default function TrustedClient() {
    return (
        <section className="py-16 bg-linear-to-br from-gray-50 to-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-gray-600 text-sm font-semibold mb-12 tracking-wider uppercase">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {['TechCorp', 'GlobalBiz', 'InnovateCo', 'EnterpriseX', 'FutureSystems'].map((client, index) => (
                        <div 
                            key={index} 
                            className="text-gray-700 font-bold text-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}