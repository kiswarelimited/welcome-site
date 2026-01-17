import React from 'react'

export default function Testimonial() {
    return (
        <section className="relative py-20 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-cyan-400/20 mb-8">
                        <span className="text-sm font-medium text-teal-300">Testimonial</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Do not just take our word for it — here is what our clients say about working with us.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-teal-500/30 transition-all duration-300">
                        <p className="text-gray-300 mb-6 italic">
                            &ldquo;Steadyflow transformed our business with a custom CRM that exceeded expectations. Their team was professional, communicative, and delivered ahead of schedule.&rdquo;
                        </p>
                        <div>
                            <p className="text-white font-semibold">Patrick</p>
                            <p className="text-cyan-400 text-sm">CEO, Accessmade Limited</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
