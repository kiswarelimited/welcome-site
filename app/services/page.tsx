import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function Services() {
    const services = [
        {
            icon: '💻',
            title: 'Custom Software Development',
            description: 'Tailored solutions built to solve your specific business challenges and scale with your growth.',
            features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration'],
            price: 'Custom Quote'
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
            features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
            price: 'From ₦2,500,000'
        },
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Responsive, scalable web applications that drive engagement and business growth.',
            features: ['Frontend Development', 'Backend Development', 'E-commerce', 'CMS Development'],
            price: 'From ₦1,800,000'
        },
        {
            icon: '🔄',
            title: 'Digital Transformation',
            description: 'Modernize your operations with cutting-edge technology and strategic implementation.',
            features: ['Process Automation', 'Cloud Migration', 'Legacy System Upgrade', 'Digital Strategy'],
            price: 'Custom Quote'
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'User-centric design that enhances usability and drives conversion rates.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            price: 'From ₦800,000'
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Ongoing support and maintenance to keep your systems running smoothly.',
            features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support'],
            price: 'Monthly Retainer'
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
                        We offer end-to-end software development services tailored to help your business 
                        thrive in the digital landscape. From concept to deployment and beyond.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
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

                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                    <span className="text-blue-400 font-semibold">{service.price}</span>
                                    <Link
                                        href="/contact"
                                        className="text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Get Quote
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
                        Let's discuss your requirements and create a solution that drives your business forward.
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
