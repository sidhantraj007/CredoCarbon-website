import { FileText, Rocket, LayoutDashboard, Hammer, RefreshCw, Gem, CheckCircle } from "lucide-react";

export default function DeveloperGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🌿</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                Developer Guide
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                Complete guide to creating and managing carbon offset projects
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Rocket className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Getting Started</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Register Your Account",
                                description: "Navigate to /developer/signup and complete the registration form with your email, password, organization name, and country."
                            },
                            {
                                number: "2",
                                title: "Verify Your Email",
                                description: "Check your inbox for a verification email and click the confirmation link to activate your account."
                            },
                            {
                                number: "3",
                                title: "Complete KYC Verification",
                                description: "Submit your identity documents and organization details for verification. This is required before creating projects."
                            },
                            {
                                number: "4",
                                title: "Access Your Dashboard",
                                description: "Log in at /developer/login to access your developer dashboard and start creating projects."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Features */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <LayoutDashboard className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Dashboard Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "📁",
                                title: "My Projects",
                                description: "View all your projects organized by status - Draft, Submitted, Validation, Verification, and Issued."
                            },
                            {
                                icon: "📋",
                                title: "Tasks",
                                description: "See pending actions requiring your attention, such as document uploads or query responses."
                            },
                            {
                                icon: "💰",
                                title: "Revenue",
                                description: "Track your credit sales, marketplace listings, and total revenue from carbon credit transactions."
                            },
                            {
                                icon: "🔔",
                                title: "Notifications",
                                description: "Stay updated with real-time alerts for project status changes, offers, and system messages."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creating a Project */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Hammer className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Creating a Project</h2>
                    </div>

                    <div className="bg-slate-50 rounded-xl border-2 border-slate-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th className="text-left px-6 py-4 font-bold text-slate-900">Step</th>
                                    <th className="text-left px-6 py-4 font-bold text-slate-900">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        step: "1. Project Type",
                                        description: "Select category: Renewable Energy, Energy Efficiency, Forestry/AFOLU, Waste Management, or Industrial Processes"
                                    },
                                    {
                                        step: "2. Basic Information",
                                        description: "Enter project name, description, location, start date, and crediting period"
                                    },
                                    {
                                        step: "3. Generation Data",
                                        description: "Upload emission reduction data, specify monitoring methodology, add baseline calculations"
                                    },
                                    {
                                        step: "4. Stakeholder Consultation",
                                        description: "Upload consultation records, meeting minutes, and community engagement documentation"
                                    },
                                    {
                                        step: "5. Compliance",
                                        description: "Complete social and environmental safeguards checklists"
                                    },
                                    {
                                        step: "6. Registry Submission",
                                        description: "Select target registry (GCC, VCS, Gold Standard) and submit for validation"
                                    }
                                ].map((item, idx) => (
                                    <tr key={idx} className="border-t border-slate-200">
                                        <td className="px-6 py-4 font-semibold text-emerald-700">{item.step}</td>
                                        <td className="px-6 py-4 text-slate-600">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Project Lifecycle */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <RefreshCw className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Project Lifecycle</h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            "Draft",
                            "Submitted to VVB",
                            "Validation",
                            "Verification",
                            "Registry Review",
                            "Credits Issued"
                        ].map((stage, idx, arr) => (
                            <div key={idx} className="flex items-center">
                                <div className="bg-white border-2 border-emerald-500 rounded-lg px-6 py-3 font-semibold text-slate-900 shadow-sm">
                                    {stage}
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="mx-2 text-emerald-600 text-2xl">→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Managing Credits */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Gem className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Managing Credits</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "📦",
                                title: "Portfolio",
                                description: "View all issued credits from your projects, track available balance, and see credits by vintage year."
                            },
                            {
                                icon: "🏪",
                                title: "Marketplace",
                                description: "List credits for sale, set pricing, manage active listings, and track buyer interest."
                            },
                            {
                                icon: "💸",
                                title: "Transactions",
                                description: "View complete transaction history including sales, transfers, and revenue details."
                            },
                            {
                                icon: "📊",
                                title: "Analytics",
                                description: "Monitor sales trends, portfolio value, and market performance over time."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-emerald-400 transition-colors">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="relative py-12 bg-slate-900">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">CredoCarbon</h3>
                    <p className="text-slate-400 mb-4">Carbon Credit Management Platform</p>
                    <p className="text-slate-500 text-sm">© 2024 Credo Carbon. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
}
