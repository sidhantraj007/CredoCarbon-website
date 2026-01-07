import { Building2, FileCheck, LayoutDashboard, Search, Award, ClipboardList } from "lucide-react";

export default function RegistryGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🏛️</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                Registry Guide
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                Carbon Credit Registry Operations Manual
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Role */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Building2 className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Your Role</h2>
                    </div>

                    <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 mb-8">
                        <p className="text-slate-700 leading-relaxed text-lg">
                            As a Registry Officer, you are responsible for the final review and approval of carbon projects, issuance of carbon credits, and maintaining the integrity of the carbon credit registry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "📝",
                                title: "Project Review",
                                description: "Review validated and verified projects to ensure compliance with registry standards before credit issuance."
                            },
                            {
                                icon: "🎫",
                                title: "Credit Issuance",
                                description: "Issue carbon credits to projects that pass review, assign serial numbers, and record in the registry."
                            }
                        ].map((role, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                                <div className="text-4xl mb-3">{role.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{role.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{role.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Overview */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <LayoutDashboard className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Dashboard Overview</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "⏳",
                                title: "Pending Reviews",
                                description: "View all projects that have completed VVB validation/verification and are awaiting registry review."
                            },
                            {
                                icon: "📦",
                                title: "Issuances",
                                description: "Manage credit issuance queue and track all pending and completed issuances."
                            },
                            {
                                icon: "💎",
                                title: "Credits",
                                description: "View all credit batches issued through the registry, track status and transactions."
                            },
                            {
                                icon: "❓",
                                title: "Queries",
                                description: "Manage clarification requests and communicate with project developers."
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

            {/* Review Workflow */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Search className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Review Workflow</h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        {[
                            "Receive Project",
                            "Review Documents",
                            "Complete Checklist",
                            "Decision",
                            "Issuance"
                        ].map((stage, idx, arr) => (
                            <div key={idx} className="flex items-center">
                                <div className="bg-white border-2 border-indigo-500 rounded-lg px-6 py-3 font-semibold text-slate-900 shadow-sm">
                                    {stage}
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="mx-2 text-indigo-600 text-2xl">→</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Receive Verified Project",
                                description: "Projects arrive after VVB validation and verification are complete. Review the VVB reports."
                            },
                            {
                                number: "2",
                                title: "Review All Documentation",
                                description: "Examine project documents, validation report, verification report, and emission reduction calculations."
                            },
                            {
                                number: "3",
                                title: "Complete Review Checklist",
                                description: "Work through the registry review checklist ensuring all requirements are met."
                            },
                            {
                                number: "4",
                                title: "Issue Decision",
                                description: "Approve for issuance, approve with conditions, or reject with detailed explanation."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-indigo-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Review Checklist */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <ClipboardList className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Review Checklist</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Methodology approved for registry use",
                            "Validation report complete and acceptable",
                            "Verification report complete and acceptable",
                            "Credit calculation verified correctly",
                            "Additionality confirmed by VVB",
                            "Safeguards verified by VVB",
                            "All documentation complete",
                            "Registration fees paid",
                            "Registry-specific requirements met",
                            "Project ready for credit issuance"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-slate-200">
                                <div className="text-indigo-600 text-xl flex-shrink-0">☐</div>
                                <p className="text-slate-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credit Issuance */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Credit Issuance</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Confirm Issuance Details",
                                description: "Verify the quantity of credits to be issued based on verified emission reductions."
                            },
                            {
                                number: "2",
                                title: "Assign Serial Numbers",
                                description: "Generate unique serial numbers for each credit following registry conventions."
                            },
                            {
                                number: "3",
                                title: "Issue Credits",
                                description: "Create the credit batch and assign to the project developer's account."
                            },
                            {
                                number: "4",
                                title: "Generate Certificate",
                                description: "Create and upload the official registry certificate for the credit issuance."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-indigo-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
