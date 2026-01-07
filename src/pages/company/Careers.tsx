import { Mail, Sparkles, Heart, Users, Rocket } from "lucide-react";

export default function Careers() {
    return (
        <div className="min-h-screen bg-[#05080f] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Main Content */}
            <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
                <div className="max-w-5xl mx-auto">

                    {/* Badge */}
                    <div className="flex justify-center mb-8 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-xl shadow-lg shadow-emerald-500/20">
                            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
                                Join Our Mission
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-8 leading-[1.1] animate-fade-in-up">
                        <span className="text-slate-50">We're building </span>
                        <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                            climate infrastructure
                        </span>
                        <span className="text-slate-50">for the planet</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-slate-300 text-center leading-relaxed mb-16 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Join a team of passionate innovators, engineers, and climate advocates
                        working to make carbon markets transparent, verifiable, and impactful.
                    </p>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {[
                            { icon: Heart, title: "Mission-Driven", desc: "Climate impact at the core" },
                            { icon: Users, title: "Collaborative", desc: "Build together, grow together" },
                            { icon: Rocket, title: "Innovation", desc: "Push boundaries, solve hard problems" }
                        ].map((value, idx) => (
                            <div key={value.title} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-xl p-6 text-center hover:border-emerald-400/40 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-50 mb-2">{value.title}</h3>
                                    <p className="text-sm text-slate-400">{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="relative max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-[3rem] blur-3xl opacity-50" />

                        <div className="relative rounded-[3rem] border border-emerald-400/40 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90 backdrop-blur-2xl overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl" />

                            <div className="relative p-12 md:p-16 text-center">
                                {/* Icon */}
                                <div className="flex justify-center mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                                        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-teal-500/30 border-2 border-emerald-400/50 flex items-center justify-center">
                                            <Mail className="w-10 h-10 text-emerald-400" />
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                    Ready to make an impact?
                                </h2>

                                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
                                    We're always looking for talented individuals who are passionate about climate action.
                                    Drop us a line with your resume and let's talk!
                                </p>

                                {/* Email Button */}
                                <a
                                    href="mailto:info@credocarbon.com"
                                    className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <Mail className="w-6 h-6 relative z-10" />
                                    <span className="relative z-10">info@credocarbon.com</span>
                                </a>

                                {/* Additional Info */}
                                <p className="text-sm text-slate-500 mt-8">
                                    We review all applications and respond within 48 hours
                                </p>
                            </div>

                            {/* Bottom gradient accent */}
                            <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
            `}</style>
        </div>
    );
}
