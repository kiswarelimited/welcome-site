import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function Services() {
    const services = [
        {
            icon: '💻',
            title: 'Custom Software Development',
            description: 'End-to-end custom software engineering focused on delivering scalable, secure, and maintainable systems that solve specific business problems.',
            features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications engineered for performance, usability, and long-term maintainability.',
            features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
        },
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Responsive, scalable web applications built to increase engagement, improve customer experience, and support business growth.',
            features: ['Frontend Development', 'Backend Development', 'E-commerce', 'CMS Development']
        },
        {
            icon: '🔄',
            title: 'Digital Transformation',
            description: 'Modernize operations through cloud migration, process automation, and strategic platform modernization to improve efficiency and resilience.',
            features: ['Process Automation', 'Cloud Migration', 'Legacy System Upgrade', 'Digital Strategy']
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Human-centered design to optimize user journeys, increase engagement, and improve conversion metrics.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Proactive maintenance and responsive support to ensure availability, security, and performance of mission-critical systems.',
            features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support']
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Comprehensive
                        <span className="text-blue-400 block">Digital Solutions</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We deliver strategic, outcome-focused software engineering and product delivery to improve operational efficiency and customer engagement. We partner with clients to define, build, and scale mission-critical systems.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-8 text-gray-300">
                        <p>We combine technical excellence with practical business insight to deliver measurable outcomes.</p>
                        <ul className="mt-4 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
                            <li className="font-medium">Proven delivery</li>
                            <li className="font-medium">Security-first approach</li>
                            <li className="font-medium">Scalable architecture</li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-white font-medium mb-2">Includes:</h4>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-400 text-sm flex items-center">
                                                <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-end pt-4 border-t border-gray-700">
                                    <Link
                                        href="/contact"
                                        className="text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
                            <span className="text-sm font-medium text-blue-300">Our Process</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            A structured approach to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discover', desc: 'Deep dive into your business needs and goals' },
                            { step: '02', title: 'Design', desc: 'Create optimal architecture and user experience' },
                            { step: '03', title: 'Develop', desc: 'Agile development with continuous testing' },
                            { step: '04', title: 'Deliver', desc: 'Deploy and provide ongoing support' }
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

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us to discuss your objectives and how we can design solutions that advance your strategic goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get Started Today
                        </Link>
                        <Link
                            href="/about"
                            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-200"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
