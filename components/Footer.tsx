import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuMail, LuMapPin } from 'react-icons/lu';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 glass-card-enhanced">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/cpc-logo.png"
                                alt="DIU CPC Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <h3 className="text-xl font-bold text-foreground">DIU CPC</h3>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                            Dhaka International University Computer Programming Club -
                            Empowering students through coding, innovation, and technology.
                        </p>
                        <div className="flex gap-4">
                          <a href="https://www.facebook.com/diucsecpc" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary-light transition-colors">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="w-6 h-6" />
                          </a>
                          <a href="https://www.linkedin.com/company/diucsecpc" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary-light transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="w-6 h-6" />
                          </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="https://diu.ac/" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank">
                                    Dhaka International University Official Website
                                </Link>
                            </li>
                            <li>
                                <Link href="/membership" className="text-foreground/70 hover:text-foreground transition-colors">
                                    Join DIU CPC
                                </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link href="/events" className="text-foreground/70 hover:text-foreground transition-colors">*/}
                            {/*        Events*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link href="/committee" className="text-foreground/70 hover:text-foreground transition-colors">*/}
                            {/*        Committee*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li className="flex items-start gap-2">
                                <LuMail className="w-4 h-4 mt-1 flex-shrink-0" />
                                <a href="mailto:diucsecpc.official@gmail.com"
                                   className="hover:text-foreground transition-colors">diucsecpc.official@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <LuMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <Link href="https://maps.app.goo.gl/qLKKS733QhyQxFz3A" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Satarkul, Dhaka, Bangladesh</Link>
                            </li>
                            <li className="pt-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6995444499275!2d90.44343160959619!3d23.793711224889247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631%3A0x97f48a5be913a9fc!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1775791150328!5m2!1sen!2sbd"
                                    className="w-full h-32 rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/10 text-center">
                    <p className="text-foreground/60 text-sm">
                        © {currentYear} DIU Computer Programming Club. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
