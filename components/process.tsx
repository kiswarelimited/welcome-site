import React from 'react'

export default function Process() {
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
                        <span className="text-sm font-medium text-teal-300">Our Process</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        A structured approach to delivering exceptional results
                    </p>
                </div>
                
                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        { step: '01', title: 'Discover', desc: 'We dive deep into your goals, audience, and requirements to build the right strategy.' },
                        { step: '02', title: 'Design', desc: 'Our UI/UX team creates wireframes and prototypes for your approval.' },
                        { step: '03', title: 'Develop', desc: 'Our full-stack team codes with clean architecture and best practices.' },
                        { step: '04', title: 'Deliver', desc: 'Thorough testing, deployment, and launch with full documentation.' },
                        { step: '05', title: 'Support', desc: 'Continuous maintenance, updates, and improvements.' }
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
