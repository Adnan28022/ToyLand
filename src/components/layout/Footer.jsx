import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-white pt-10">
            {/* --- The Main Curved Footer --- */}
            <div className="bg-gray-900 rounded-t-[3rem] md:rounded-t-[5rem] px-6 pt-16 pb-8 text-gray-400">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                        {/* 1. Brand & About (Compact) */}
                        <div className="space-y-5">
                            <h2 className="text-2xl font-black text-white tracking-tight">
                                TOY<span className="text-sky-400">LAND</span>
                            </h2>
                            <p className="text-sm leading-relaxed max-w-xs font-medium">
                                Bringing joy and imagination to every doorstep. Premium quality toys for the next generation of dreamers.
                            </p>
                            <div className="flex gap-3 pt-2">
                                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -4, backgroundColor: '#38bdf8', color: '#fff' }}
                                        className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center transition-all"
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* 2. Quick Links (Two Columns) */}
                        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
                                <ul className="space-y-3 text-sm font-medium">
                                    {['Shop All', 'New Arrivals', 'Best Sellers', 'Safety First'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-sky-400 transition-colors flex items-center group">
                                                <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
                                <ul className="space-y-3 text-sm font-medium">
                                    {['Help Center', 'Track Order', 'Returns', 'Contact'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-orange-400 transition-colors flex items-center group">
                                                <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 3. Contact Info */}
                        <div className="space-y-5">
                            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Get in Touch</h4>
                            <div className="space-y-4 text-sm font-medium">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-sky-400">
                                        <MapPin size={16} />
                                    </div>
                                    <span>Magic City, NY 10001</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-orange-400">
                                        <Phone size={16} />
                                    </div>
                                    <span>+1 (234) 567 890</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-pink-400">
                                        <Mail size={16} />
                                    </div>
                                    <span>hello@toyland.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* --- Bottom Bar (Copyright) --- */}
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">
                            © {new Date().getFullYear()} ToyLand Store.
                            Made with <Heart size={12} className="inline text-red-500 fill-red-500 mx-1 animate-pulse" /> for kids.
                        </p>

                        {/* Payment Cards */}
                        <div className="flex gap-3 opacity-30 grayscale hover:grayscale-0 transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3" alt="Paypal" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Floating Shape */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-12 h-12 bg-sky-400/20 rounded-full blur-xl -z-10"
            />
        </footer>
    );
};

export default Footer;