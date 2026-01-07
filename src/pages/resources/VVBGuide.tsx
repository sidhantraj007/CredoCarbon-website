import { Shield, FileCheck, LayoutDashboard, CheckCircle, ClipboardList, BarChart3 } from "lucide-react";

export default function VVBGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🔍</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                                VVB Guide
                            </h1>
                            <p className="text-lg text-slate-600 mt-2">
                                Validation & Verification Body Operations Manual
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Role */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Your Role</h2>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
                        <p className="text-slate-700 leading-relaxed text-lg">
                            As a VVB (Validation & Verification Body), you are responsible for independently assessing carbon projects to ensure they meet the required standards and accurately report emission reductions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "✅",
                                title: "Validation",
                                description: "Review project design documents, methodology application, and baseline calculations before project implementation."
                            },
                            {
                                icon: "📊",
                                title: "Verification",
                                description: "Verify actual emission reductions achieved during monitoring periods against claimed reductions."
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
                        <LayoutDashboard className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Dashboard Overview</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "⏳",
                                title: "Pending Tasks",
                                description: "View all assigned validations and verifications awaiting your review."
                            },
                            {
                                icon: "📁",
                                title: "My Projects",
                                description: "Browse all projects assigned to you, organized by task type and status."
                            },
                            {
                                icon: "❓",
                                title: "Queries",
                                description: "Manage clarification requests sent to developers and review their responses."
                            },
                            {
                                icon: "🔔",
                                title: "Notifications",
                                description: "Receive alerts for new assignments, query responses, and deadline reminders."
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

            {/* Validation Workflow */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <CheckCircle className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Validation Workflow</h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        {[
                            "Assignment",
                            "Document Review",
                            "Checklist",
                            "Queries",
                            "Decision"
                        ].map((stage, idx, arr) => (
                            <div key={idx} className="flex items-center">
                                <div className="bg-white border-2 border-purple-500 rounded-lg px-6 py-3 font-semibold text-slate-900 shadow-sm">
                                    {stage}
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="mx-2 text-purple-600 text-2xl">→</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Receive Assignment",
                                description: "Projects are assigned by the platform administrator. You'll receive a notification with project details."
                            },
                            {
                                number: "2",
                                title: "Review Documents",
                                description: "Access and review all project documentation including PDD, methodology, baseline, and monitoring plan."
                            },
                            {
                                number: "3",
                                title: "Complete Checklist",
                                description: "Work through the validation checklist, marking items as compliant or raising queries as needed."
                            },
                            {
                                number: "4",
                                title: "Submit Decision",
                                description: "Approve the project for the next phase or reject with detailed justification."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-purple-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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

            {/* Validation Checklist */}
            <section className="relative py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <ClipboardList className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Validation Checklist</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Methodology appropriate and correctly applied",
                            "Project boundaries correctly defined",
                            "Additionality adequately demonstrated",
                            "Baseline scenario conservative",
                            "Emission calculations accurate",
                            "Monitoring plan adequate",
                            "Social safeguards addressed",
                            "Environmental safeguards verified",
                            "Stakeholder consultation complete",
                            "Documentation complete and accurate"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-slate-200">
                                <div className="text-purple-600 text-xl flex-shrink-0">☐</div>
                                <p className="text-slate-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verification Process */}
            <section className="relative py-16 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl font-bold text-slate-900">Verification Process</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "1",
                                title: "Review Monitoring Data",
                                description: "Examine data collected during the monitoring period, including generation records and emission calculations."
                            },
                            {
                                number: "2",
                                title: "Verify Calculations",
                                description: "Cross-check claimed emission reductions against monitoring data. Apply any necessary adjustments."
                            },
                            {
                                number: "3",
                                title: "Account for Deductions",
                                description: "Calculate leakage deductions and buffer pool contributions as per methodology requirements."
                            },
                            {
                                number: "4",
                                title: "Issue Verification Report",
                                description: "Document verified emission reductions and submit for registry review."
                            }
                        ].map((step) => (
                            <div key={step.number} className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-purple-400 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
