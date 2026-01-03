import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function About() {
    const team = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            description: '10+ years in software development and business strategy',
            expertise: ['Leadership', 'Strategy', 'Product Development']
        },
        {
            name: 'Jane Smith',
            role: 'CTO',
            description: 'Expert in scalable architecture and emerging technologies',
            expertise: ['System Architecture', 'Cloud Computing', 'AI/ML']
        },
        {
            name: 'Mike Johnson',
            role: 'Lead Developer',
            description: 'Full-stack developer with passion for clean code',
            expertise: ['React/Next.js', 'Node.js', 'Database Design']
        },
        {
            name: 'Sarah Williams',
            role: 'UI/UX Designer',
            description: 'Creating intuitive and beautiful user experiences',
            expertise: ['User Research', 'Figma', 'Design Systems']
        }
    ]

    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
        },
        {
            icon: '🤝',
            title: 'Partnership',
            description: 'We work closely with our clients, building long-term relationships based on trust and results.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We embrace new technologies and creative approaches to solve complex business challenges.'
        },
        {
            icon: '⚡',
            title: 'Efficiency',
            description: 'We optimize processes and deliver projects on time without compromising quality.'
        }
    ]

    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '5+', label: 'Years Experience' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '100%', label: 'On-Time Delivery' }
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
                        Building The Future
                        <span className="text-blue-400 block">Through Innovation</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        We are a Nigeria-headquartered software engineering firm that designs and delivers enterprise-grade digital solutions to drive measurable business outcomes and long-term growth.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
                                <span className="text-sm font-medium text-blue-300">Our Story</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From Vision to Reality</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Founded and operated in Nigeria, we partner with organizations to design and implement robust software systems that address complex business challenges across sectors.
                                </p>
                                <p>
                                    From strategic planning to technical delivery, our multidisciplinary team combines domain expertise with engineering rigor to deliver scalable, secure, and maintainable solutions.
                                </p>
                                <p>
                                    We collaborate closely with clients to ensure measurable outcomes and sustained value over time.
                                </p>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white mb-4">Registered in Nigeria</div>
                                <p className="text-gray-300 mb-4">
                                    Operating locally with global standards
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                                    <span className="text-green-400 text-sm font-medium">Fully Licensed & Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
                            <span className="text-sm font-medium text-blue-300">Our Values</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Us</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            The principles that guide our work and define our company culture
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-300 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
                            <span className="text-sm font-medium text-blue-300">Our Team</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet The Experts</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Dedicated professionals committed to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                                <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                                <div className="space-y-1">
                                    {member.expertise.map((skill, idx) => (
                                        <span key={idx} className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mr-1 mb-1">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let us build something amazing together. Get in touch to discuss your project.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/services"
                            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-200"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
