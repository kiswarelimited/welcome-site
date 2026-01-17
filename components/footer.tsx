import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="relative bg-background border-t border-gray-800">
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-10 left-10 w-4 h-4 bg-teal-400 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/icon/steadyflowlogo.png"
                                alt="Steadyflow Logo"
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                            <span className="text-white ml-3 text-xl font-bold">Steadyflow</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            We turn your vision into powerful digital solutions — custom software,
                            stunning websites, and seamless mobile apps built with precision engineering and creative design.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 mt-6">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Portfolio', href: '/portfolio' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Careers', href: '/careers' },
                                { label: 'Privacy Policy', href: '/privacy' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">📍 Remote</li>
                            <li>
                                <a href="mailto:steadflowdevelopment@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    📧 steadflowdevelopment@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:09155326252" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    📞 09155326252
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Steadyflow. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
