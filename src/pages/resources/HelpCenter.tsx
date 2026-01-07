import {
    Mail, Search, BookOpen, FileText, ArrowRight, Headphones
} from "lucide-react";
import { useState } from "react";

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 mb-8 backdrop-blur-sm shadow-lg shadow-violet-500/10">
                        <Headphones className="w-4 h-4 text-violet-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
                            Support Hub
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
                        Welcome to the
                        <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mt-2">
                            CredoCarbon Help Center
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Explore resources and get support for your carbon credit workflows.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-violet-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search help resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-400/50 focus:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="relative py-16 md:py-20 border-y border-slate-800/50">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-slate-300">
                            Our team is here to help you succeed
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm p-10 md:p-12 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5" />

                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-400/30 flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-violet-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-50 mb-3">
                                Email Support
                            </h3>

                            <p className="text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                                Send us your questions, feedback, or support requests. Our team will get back to you as soon as possible.
                            </p>

                            <a
                                href="mailto:info@credocarbon.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-slate-950 font-bold hover:from-violet-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/30"
                            >
                                <Mail className="w-5 h-5" />
                                <span>info@credocarbon.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Explore Resources
                        </h2>
                        <p className="text-lg text-slate-300">
                            Find the information you need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Documentation */}
                        <a
                            href="/docs"
                            className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-violet-400/40 hover:bg-slate-900/60 hover:scale-105"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 to-purple-500/10" />

                            <div className="relative text-center">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <BookOpen className="w-7 h-7 text-blue-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-violet-100 transition-colors">
                                    Documentation
                                </h3>

                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Comprehensive guides and technical documentation
                                </p>
                            </div>
                        </a>

                        {/* FAQ */}
                        <a
                            href="/faq"
                            className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-900/60 hover:scale-105"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />

                            <div className="relative text-center">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FileText className="w-7 h-7 text-emerald-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors">
                                    FAQ
                                </h3>

                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Quick answers to common questions
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="relative py-16 md:py-20 bg-slate-900/30">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                            Quick Links
                        </h2>
                        <p className="text-lg text-slate-300">
                            Navigate to key platform pages
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-violet-400 mb-4">
                                Platform
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { title: "Platform Overview", href: "/platform" },
                                    { title: "For Developers", href: "/developers" },
                                    { title: "For VVBs", href: "/vvb" },
                                    { title: "For Buyers", href: "/buyers" }
                                ].map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                {link.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-violet-400 mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { title: "Documentation", href: "/docs" },
                                    { title: "Registries", href: "/registries" },
                                    { title: "Pricing", href: "/pricing" },
                                    { title: "About Us", href: "/about" }
                                ].map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                {link.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-violet-400 mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { title: "Terms of Service", href: "/terms" },
                                    { title: "Privacy Policy", href: "/privacy" },
                                    { title: "Cookie Policy", href: "/cookies" },
                                    { title: "Compliance", href: "/compliance" }
                                ].map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                {link.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="relative rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm p-10 md:p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 blur-2xl" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                Need More Help?
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                Can't find what you're looking for? Reach out to our team directly.
                            </p>
                            <a
                                href="mailto:info@credocarbon.com"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-slate-950 font-bold hover:from-violet-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/30"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Contact Support</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
