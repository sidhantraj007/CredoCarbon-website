import { ShoppingCart, Rocket, LayoutDashboard, Store, Globe, CheckCircle } from "lucide-react";

export default function BuyerGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">💎</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                Buyer Guide
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                Complete guide to purchasing and retiring carbon credits
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Rocket className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Getting Started</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Create Your Account",
                                description: "Navigate to /buyer/signup and complete registration. Choose Individual or Corporate account type based on your needs."
                            },
                            {
                                number: "2",
                                title: "Verify Your Identity",
                                description: "Complete KYC verification by submitting required documents. Corporate accounts need business registration documents."
                            },
                            {
                                number: "3",
                                title: "Fund Your Wallet",
                                description: "Add funds to your wallet using available payment methods. Your balance will be used for credit purchases."
                            },
                            {
                                number: "4",
                                title: "Start Browsing",
                                description: "Access the marketplace at /dashboard/buyer/marketplace to explore available carbon credits."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Dashboard Overview */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <LayoutDashboard className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Dashboard Overview</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "📦",
                                title: "Portfolio",
                                description: "View your total holdings, credit distribution by project type, and portfolio value over time."
                            },
                            {
                                icon: "💳",
                                title: "Wallet",
                                description: "Manage your balance, view transaction history, add funds, and track all credit movements."
                            },
                            {
                                icon: "📜",
                                title: "Orders",
                                description: "Track active purchase orders, pending offers, and completed transactions."
                            },
                            {
                                icon: "🌱",
                                title: "Impact",
                                description: "See your carbon offset statistics, total tonnes retired, and environmental impact metrics."
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

            {/* Browsing the Marketplace */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Store className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Browsing the Marketplace</h2>
                    </div>

                    <div className="bg-slate-50 rounded-xl border-2 border-slate-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th className="text-left px-6 py-4 font-bold text-slate-900">Filter</th>
                                    <th className="text-left px-6 py-4 font-bold text-slate-900">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        filter: "Project Type",
                                        options: "Solar, Wind, Hydro, Forestry, Waste Management, Industrial"
                                    },
                                    {
                                        filter: "Registry",
                                        options: "VCS, Gold Standard, CDM, GCC, ACR"
                                    },
                                    {
                                        filter: "Vintage Year",
                                        options: "Filter by year credits were issued (2020-2024+)"
                                    },
                                    {
                                        filter: "Price Range",
                                        options: "Set minimum and maximum price per credit"
                                    },
                                    {
                                        filter: "Location",
                                        options: "Filter by project country or region"
                                    }
                                ].map((item, idx) => (
                                    <tr key={idx} className="border-t border-slate-200">
                                        <td className="px-6 py-4 font-semibold text-blue-700">{item.filter}</td>
                                        <td className="px-6 py-4 text-slate-600">{item.options}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Purchasing Credits */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <ShoppingCart className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Purchasing Credits</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Select Credits",
                                description: "Browse listings and click on credits you want to purchase. Review project details, documentation, and pricing."
                            },
                            {
                                number: "2",
                                title: "Review & Confirm",
                                description: "Verify quantity, total price, and seller information. Check that you have sufficient wallet balance."
                            },
                            {
                                number: "3",
                                title: "Complete Purchase",
                                description: "Confirm the transaction. Credits are transferred to your portfolio immediately upon successful payment."
                            },
                            {
                                number: "4",
                                title: "Receive Confirmation",
                                description: "Get email confirmation with transaction details and receipt. Credits appear in your Portfolio."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Retiring Credits */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Globe className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Retiring Credits</h2>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">What is Credit Retirement?</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Retiring credits permanently removes them from circulation, representing a genuine carbon offset. Once retired, credits cannot be transferred or sold again.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Go to Portfolio",
                                description: "Navigate to your Portfolio and select the credits you wish to retire."
                            },
                            {
                                number: "2",
                                title: "Enter Retirement Details",
                                description: "Specify beneficiary name (company or individual), retirement purpose, and date."
                            },
                            {
                                number: "3",
                                title: "Confirm Retirement",
                                description: "Review details and confirm. This action is permanent and cannot be undone."
                            },
                            {
                                number: "4",
                                title: "Download Certificate",
                                description: "Receive a retirement certificate that can be used for sustainability reporting and public claims."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
