import { useState } from "react";
import DeveloperGuide from "./DeveloperGuide";
import BuyerGuide from "./BuyerGuide";
import VVBGuide from "./VVBGuide";
import RegistryGuide from "./RegistryGuide";

const guides = [
    {
        id: "developer",
        icon: "🌿",
        title: "Developer Guide",
        description: "Learn how to register projects and submit monitoring reports.",
        color: "from-emerald-500 to-emerald-600",
        hoverColor: "hover:border-emerald-400",
        component: DeveloperGuide
    },
    {
        id: "buyer",
        icon: "💎",
        title: "Buyer Guide",
        description: "Browse, purchase, and retire carbon credits from the marketplace.",
        color: "from-blue-500 to-blue-600",
        hoverColor: "hover:border-blue-400",
        component: BuyerGuide
    },
    {
        id: "vvb",
        icon: "🔍",
        title: "VVB Guide",
        description: "Conduct validation and verification audits efficiently.",
        color: "from-purple-500 to-purple-600",
        hoverColor: "hover:border-purple-400",
        component: VVBGuide
    },
    {
        id: "registry",
        icon: "🏛️",
        title: "Registry Guide",
        description: "Manage credit issuance and maintain registry operations.",
        color: "from-indigo-500 to-indigo-600",
        hoverColor: "hover:border-indigo-400",
        component: RegistryGuide
    }
];

export default function Documentation() {
    const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

    // If a guide is selected, show its component
    if (selectedGuide) {
        const guide = guides.find(g => g.id === selectedGuide);
        if (guide) {
            const GuideComponent = guide.component;
            return (
                <div>
                    {/* Back button */}
                    <div className="bg-slate-900 border-b border-slate-800">
                        <div className="mx-auto max-w-6xl px-4 py-4">
                            <button
                                onClick={() => setSelectedGuide(null)}
                                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <span>←</span>
                                <span>Back to Documentation</span>
                            </button>
                        </div>
                    </div>
                    <GuideComponent />
                </div>
            );
        }
    }

    // Show guide selection grid
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            Documentation
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Platform Guides
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive guides for developers, buyers, VVBs, and registry operators
                    </p>
                </div>
            </section>

            {/* Guide Cards */}
            <section className="relative py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {guides.map((guide) => (
                            <button
                                key={guide.id}
                                onClick={() => setSelectedGuide(guide.id)}
                                className={`group relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm p-8 transition-all duration-300 ${guide.hoverColor} hover:bg-slate-800 hover:scale-105 text-left`}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-700/20 to-slate-900/20" />

                                <div className="relative">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${guide.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-3xl">{guide.icon}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {guide.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {guide.description}
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-emerald-400 transition-colors">
                                        <span>View Guide</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need Additional Support?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Our team is here to help you succeed with the CredoCarbon platform.
                        </p>
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
