import { HelpCircle, ChevronDown, Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        question: "What does CredoCarbon do?",
        answer: "CredoCarbon manages the execution of carbon credit, renewable energy certificate (REC), and emissions compliance workflows—covering registration, monitoring, issuance, and coordination across global registries and schemes.",
        keywords: ["carbon credit platform", "carbon credit registration", "MRV execution"]
    },
    {
        question: "Who is CredoCarbon built for?",
        answer: "CredoCarbon is built for carbon project developers, renewable energy generators, corporate buyers, energy market participants, and regulated entities participating in voluntary and compliance carbon markets.",
        keywords: ["carbon project developers", "corporate carbon buyers", "compliance markets"]
    },
    {
        question: "Is CredoCarbon a software platform or a consultancy?",
        answer: "CredoCarbon is an execution platform. We combine professional carbon market expertise with structured digital workflows to replace fragmented, manual consulting—without offering self-serve SaaS or acting as a broker.",
        keywords: ["carbon consulting platform", "carbon execution platform"]
    },
    {
        question: "Which carbon and energy markets does CredoCarbon support?",
        answer: "CredoCarbon supports voluntary carbon markets, renewable energy certificate (REC) systems, and emissions trading and compliance schemes across multiple regions.",
        keywords: ["voluntary carbon market", "REC platform", "emissions trading"]
    },
    {
        question: "Which registries and schemes are supported?",
        answer: "CredoCarbon works across leading global carbon registries, REC systems, and compliance registries. Registry and scheme coverage depends on project type, geography, and regulatory applicability.",
        keywords: ["Verra", "Gold Standard", "carbon registries"]
    },
    {
        question: "Does CredoCarbon operate internationally?",
        answer: "Yes. CredoCarbon supports cross-border carbon and energy market workflows, coordinating with international registries, verification bodies, and regulators.",
        keywords: ["international carbon projects", "global carbon markets"]
    },
    {
        question: "How does an engagement with CredoCarbon typically start?",
        answer: "Engagements typically begin with a feasibility and eligibility assessment. Once scope is confirmed, CredoCarbon executes the required registration, issuance, or compliance workflows.",
        keywords: ["carbon project feasibility", "carbon credit registration process"]
    },
    {
        question: "Can CredoCarbon work alongside existing consultants or partners?",
        answer: "Yes. CredoCarbon can integrate with existing consultants, EPCs, technical advisors, or internal teams, with responsibilities clearly defined to avoid duplication or scope overlap.",
        keywords: ["carbon consulting support", "EPC carbon projects"]
    },
    {
        question: "How long do carbon projects or transactions usually take?",
        answer: "Timelines vary by registry, methodology, and project type. CredoCarbon focuses on reducing coordination delays, but final timelines depend on external registry and verification review cycles.",
        keywords: ["carbon credit timeline", "MRV timeline"]
    },
    {
        question: "How is data and confidential information handled?",
        answer: "CredoCarbon operates under strict confidentiality standards and executes non-disclosure agreements (NDAs) where required.",
        keywords: ["carbon data security", "MRV confidentiality"]
    },
    {
        question: "Does CredoCarbon guarantee issuance or regulatory approval?",
        answer: "No. Issuance and approvals are determined by registries and regulators. CredoCarbon supports compliant documentation and execution through each required stage.",
        keywords: ["carbon credit issuance process"]
    },
    {
        question: "How is CredoCarbon different from traditional carbon consultants?",
        answer: "CredoCarbon replaces fragmented, manual consulting with structured execution, standardized workflows, and reduced coordination overhead—while remaining independent from trading and brokerage activities.",
        keywords: ["carbon consulting alternative", "MRV platform"]
    }
];

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFAQs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 mb-8 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Frequently Asked Questions
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
                        Everything you need to know
                        <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                            about CredoCarbon
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Get quick answers to common questions about our carbon credit execution platform, workflows, and market coverage.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/50"
                            />
                        </div>
                        <p className="mt-4 text-sm text-slate-400">
                            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    {filteredFAQs.length > 0 ? (
                        <div className="space-y-4">
                            {filteredFAQs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:border-emerald-400/30 hover:bg-slate-900/60 transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex items-start justify-between w-full p-6 md:p-8 text-left"
                                        >
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all">
                                                    <HelpCircle className="w-5 h-5 text-emerald-400" />
                                                </div>
                                                <span className="text-lg md:text-xl font-semibold text-slate-50 group-hover:text-emerald-100 transition-colors pr-4">
                                                    {faq.question}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className={`flex-shrink-0 w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}
                                            />
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                                                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                                {faq.keywords.length > 0 && (
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {faq.keywords.map((keyword, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs text-emerald-400 font-medium"
                                                            >
                                                                {keyword}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-slate-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-300 mb-3">No results found</h3>
                            <p className="text-slate-400 mb-6">Try adjusting your search query</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-all"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="relative rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-sm p-10 md:p-12 text-center overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 blur-2xl" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                Still have questions?
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                Our team is here to help you understand how CredoCarbon can streamline your carbon credit workflows.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/help"
                                    className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/30"
                                >
                                    <span>Visit Help Center</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="mailto:info@credocarbon.com"
                                    className="px-8 py-4 rounded-xl border border-emerald-400/30 bg-slate-900/40 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-all duration-300"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Keywords Section (Hidden) */}
            <div className="sr-only">
                <h2>Carbon Credit Platform FAQs</h2>
                <p>carbon credit platform, carbon credit registration, MRV execution, carbon project developers, corporate carbon buyers, compliance markets, carbon consulting platform, carbon execution platform, voluntary carbon market, REC platform, emissions trading, Verra, Gold Standard, carbon registries, international carbon projects, global carbon markets, carbon project feasibility, carbon credit registration process, carbon consulting support, EPC carbon projects, carbon credit timeline, MRV timeline, carbon data security, MRV confidentiality, carbon credit issuance process, carbon consulting alternative, MRV platform</p>
            </div>
        </div>
    );
}
