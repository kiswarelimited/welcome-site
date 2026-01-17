import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <div className="flex flex-col items-center">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        We turn your vision into powerful digital solutions.
                        <span className="text-cyan-400 block mt-3">From concept to launch and beyond</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
                        Steadyflow delivers custom software, stunning websites, and seamless mobile apps
                        with precision engineering and creative design.
                    </p>
                </div>
            </div>
        </section>
    );
}
