import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 border-t border-gray-800">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/kis-warelogo.png"
                                alt="Kisware Logo"
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                            <span className="text-white text-xl font-bold">Kisware Limited</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            We deliver enterprise-grade software solutions that drive efficiency,
                            accelerate growth, and transform business operations for the digital era.
                        </p>
                        <div className="flex space-x-4">
                            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                { label: 'Custom Software', href: '/services' },
                                { label: 'Web Applications', href: '/services' },
                                { label: 'Mobile Development', href: '/services' },
                                { label: 'Digital Transformation', href: '/services' },
                                { label: 'UI/UX Design', href: '/services' }
                            ].map((service) => (
                                <li key={service.label}>
                                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Careers', href: '/careers' },
                                { label: 'Contact', href: 'mailto:hello@kisware.com' },
                                { label: 'Blog', href: '/blog' }
                            ].map((item) => (
                                <li key={item.label}>
                                    {item.href.startsWith('mailto:') ? (
                                        <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">{item.label}</a>
                                    ) : (
                                        <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">{item.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Kisware Limited. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
