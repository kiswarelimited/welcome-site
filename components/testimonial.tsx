import React from 'react'

export default function Testimonial() {
    return (
        <section className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black"></div>

            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    {/* Professional Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
                        <span className="text-sm font-medium text-blue-300">Client Testimonials</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Do not just take our word for it — read what our clients say about working with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "Their team delivered exceptional results that exceeded our expectations. The project was completed on time and within budget.",
                            name: "Sarah Johnson",
                            position: "CTO, TechCorp"
                        },
                        {
                            quote: "The software solution transformed our operations and increased efficiency by 40%. Highly recommended!",
                            name: "Michael Chen",
                            position: "Operations Director, GlobalBiz"
                        },
                        {
                            quote: "Professional, reliable, and incredibly skilled. They understood our vision and brought it to life perfectly.",
                            name: "Emily Rodriguez",
                            position: "CEO, InnovateCo"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 transition-all duration-300">
                            <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div>
                                <p className="text-white font-semibold">{testimonial.name}</p>
                                <p className="text-blue-400 text-sm">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}