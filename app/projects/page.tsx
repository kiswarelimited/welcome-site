import Link from 'next/link'
import Footer from '@/components/footer'

export default function Projects() {
    const services = [
        {
            icon: '💻',
            title: 'Custom Software Development',
            description: 'Tailor-made solutions that solve your unique business challenges with scalable architecture and future-proof technology.',
            features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
        },
        {
            icon: '📱',
            title: 'Web & Mobile Applications',
            description: 'Responsive, high-performance apps built with modern frameworks that engage users and drive results.',
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
            description: 'Intuitive, beautiful interfaces crafted through user research, wireframing, and prototyping for maximum engagement.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Ongoing optimization, updates, and technical support to keep your digital assets running smoothly.',
            features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Technical Support']
        }
    ]

    const projects = [
        {
            title: 'Sash Lounge',
            description: 'Premium window treatment showroom featuring elegant product displays and booking system.',
            category: 'E-commerce & Showcase',
            url: 'https://sashlounge.co.uk',
            tech: ['Next.js', 'React', 'Tailwind CSS'],
            imageColor: 'from-purple-500 to-pink-500'
        },
        {
            title: 'OLA 247',
            description: 'On-demand logistics and delivery platform connecting businesses with reliable transport services.',
            category: 'Logistics Platform',
            url: 'https://www.ola247.co.uk',
            tech: ['React', 'Node.js', 'MongoDB'],
            imageColor: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Etherstaff Solutions',
            description: 'Healthcare staffing solutions platform matching medical professionals with healthcare facilities.',
            category: 'Healthcare Staffing',
            url: 'https://etherstaff.solutions',
            tech: ['Vue.js', 'Laravel', 'MySQL'],
            imageColor: 'from-green-500 to-teal-500'
        },
        {
            title: 'MedBridge Afrik',
            description: 'Medical equipment procurement and healthcare solutions platform for African healthcare providers.',
            category: 'Healthcare E-commerce',
            url: 'https://www.medbridgeafrik.com',
            tech: ['React', 'Django', 'PostgreSQL'],
            imageColor: 'from-red-500 to-orange-500'
        },
        {
            title: 'Cidali Travel',
            description: 'Luxury travel and tour packages with seamless booking experience and destination management.',
            category: 'Travel & Tourism',
            url: 'https://cidalitravel.com',
            tech: ['Next.js', 'Strapi', 'GraphQL'],
            imageColor: 'from-amber-500 to-yellow-500'
        },
        {
            title: 'Positive Impacts Healthcare',
            description: 'Healthcare services platform providing nursing and healthcare staffing solutions across Ireland.',
            category: 'Healthcare Services',
            url: 'https://www.positiveimpactshealthcare.ie',
            tech: ['React', 'Express.js', 'MongoDB'],
            imageColor: 'from-indigo-500 to-blue-500'
        },
        {
            title: 'Visit Lamu',
            description: 'Tourism promotion platform showcasing Lamu archipelago attractions, culture, and accommodations.',
            category: 'Tourism Portal',
            url: 'https://www.visitlamu.co',
            tech: ['WordPress', 'PHP', 'JavaScript'],
            imageColor: 'from-emerald-500 to-green-500'
        },
        {
            title: 'Nimbus LMS',
            description: 'Cloud-based Learning Management System with Canvas integration for educational institutions.',
            category: 'Education Technology',
            url: 'https://nimbuslms.cloud/login/canvas',
            tech: ['React', 'Python', 'AWS'],
            imageColor: 'from-gray-700 to-gray-900'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Our Portfolio
                        <span className="text-cyan-400 block">Real Solutions • Proven Results • Client Success</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Explore our portfolio of successful projects across various industries. Each project showcases our commitment to quality, innovation, and client satisfaction.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">A selection of our recent work across different industries and technologies.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                            >
                                <div className={`h-40 bg-linear-to-br ${project.imageColor} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="bg-gray-700/50 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:underline"
                                    >
                                        View Live Project
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Case Studies</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">Examples of how we deliver measurable business outcomes through software and digital strategy.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-teal-500/30 transition-all duration-300">
                            <h3 className="text-white font-semibold mb-2">Global logistics provider</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Fragmented legacy systems caused delays and operational complexity.</p>
                            <p className="text-gray-300 text-sm">Solution: Designed and delivered a centralized logistics platform integrating tracking, automation, and real-time reporting.</p>
                            <p className="text-teal-400 text-sm mt-3 font-medium">Result: Reduced processing time and improved on-time deliveries.</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/30 transition-all duration-300">
                            <h3 className="text-white font-semibold mb-2">Fintech startup</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Low user activation due to friction in onboarding and product complexity.</p>
                            <p className="text-gray-300 text-sm">Solution: Delivered a streamlined onboarding flow and optimized mobile experience focused on conversion.</p>
                            <p className="text-cyan-400 text-sm mt-3 font-medium">Result: Improved activation and engagement metrics.</p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-blue-500/30 transition-all duration-300">
                            <h3 className="text-white font-semibold mb-2">Regional retail chain</h3>
                            <p className="text-gray-300 text-sm mb-2">Challenge: Inventory inaccuracies and stockouts impacted sales and customer experience.</p>
                            <p className="text-gray-300 text-sm">Solution: Implemented a centralized inventory and forecasting system integrated with point-of-sale.</p>
                            <p className="text-blue-400 text-sm mt-3 font-medium">Result: Reduced stockouts and improved inventory turnover.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-cyan-400/20 mb-8">
                            <span className="text-sm font-medium text-teal-300">Our Process</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss your next project. No obligation, just a friendly conversation about your needs.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-700 transition-colors duration-200"
                        >
                            Schedule a Free Consultation
                        </Link>
                        <Link
                            href="https://wa.me/message/5WGMY6PC2CO2B1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-200"
                        >
                            Chat with Our Team
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}