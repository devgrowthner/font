import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const SampleReportModal = ({ isOpen, onClose, onRequestReport }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl my-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group z-10"
              >
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
                {/* Header */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-lg mb-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-500/30 text-blue-600 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        Sample Report Preview
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-extrabold text-foreground mb-4 leading-tight">
                        What your report{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          looks like
                        </span>
                      </h2>
                      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Designed for directors: clear comparisons, no jargon, real actions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benchmark Snapshot Table */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Benchmark Snapshot
                      </span>
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50/80 via-cyan-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-200/50 shadow-inner">
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <table className="w-full text-sm sm:text-base min-w-[600px] sm:min-w-0">
                          <thead>
                            <tr className="border-b-2 border-blue-300/50">
                              <th className="text-left py-4 px-3 sm:px-6 font-bold text-foreground text-base">Metric</th>
                              <th className="text-center py-4 px-3 sm:px-6 font-bold text-foreground text-base">You</th>
                              <th className="text-center py-4 px-3 sm:px-6 font-bold text-foreground text-base">Competitor A</th>
                              <th className="text-center py-4 px-3 sm:px-6 font-bold text-foreground text-base">Competitor B</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-blue-100/50 hover:bg-white/50 transition-colors">
                              <td className="py-4 px-3 sm:px-6 text-muted-foreground font-medium">SEO Visibility</td>
                              <td className="py-4 px-3 sm:px-6 text-center">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                                  <span>65%</span>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              </td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">78%</td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">82%</td>
                            </tr>
                            <tr className="border-b border-blue-100/50 hover:bg-white/50 transition-colors">
                              <td className="py-4 px-3 sm:px-6 text-muted-foreground font-medium">Ad Spend Efficiency</td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">Medium</td>
                              <td className="py-4 px-3 sm:px-6 text-center">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                                  <span>High</span>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              </td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">High</td>
                            </tr>
                            <tr className="hover:bg-white/50 transition-colors">
                              <td className="py-4 px-3 sm:px-6 text-muted-foreground font-medium">Reputation Score</td>
                              <td className="py-4 px-3 sm:px-6 text-center">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                                  <span>4.2/5</span>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              </td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">4.5/5</td>
                              <td className="py-4 px-3 sm:px-6 text-center text-muted-foreground">4.6/5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitor Weakness → My Opportunity */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        Competitor Weakness → My Opportunity
                      </span>
                    </h3>
                    <div className="space-y-4">
                      {[
                        { weakness: "Competitor A: Weak content on pricing page", opportunity: "Create transparent pricing page with clear value props" },
                        { weakness: "Competitor B: Slow page load times", opportunity: "Optimize site speed to outperform (target: <2s load)" },
                        { weakness: "Both: Limited customer testimonials", opportunity: "Showcase 20+ case studies and reviews prominently" },
                      ].map((item, index) => (
                        <div key={index} className="group relative bg-gradient-to-br from-cyan-50/80 via-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-cyan-200/50 shadow-md hover:shadow-lg hover:border-cyan-300/70 transition-all duration-300">
                          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                </div>
                                <div className="text-xs sm:text-sm font-bold text-red-700 uppercase tracking-wide">Weakness</div>
                              </div>
                              <div className="text-sm sm:text-base text-muted-foreground font-medium pl-8">{item.weakness}</div>
                            </div>
                            <div className="flex-shrink-0 self-center lg:self-auto">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)' }}>
                                  <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="text-xs sm:text-sm font-bold uppercase tracking-wide" style={{ color: '#5a7529' }}>Your Opportunity</div>
                              </div>
                              <div className="text-sm sm:text-base text-foreground font-semibold pl-8">{item.opportunity}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5×3 Owner Summary */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #ef4444, #719334, #3b82f6)' }}></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6 text-center">
                      <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                        Owner Summary: 5 Weaknesses • 5 Strengths • 5 Actions
                      </span>
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                      {/* 5 Weaknesses */}
                      <div className="group relative bg-gradient-to-br from-red-50/80 via-red-50/60 to-red-50/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-red-200/50 shadow-lg hover:shadow-xl hover:border-red-300/70 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <h4 className="font-heading font-bold text-foreground text-lg">5 Weaknesses</h4>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Lower SEO visibility vs competitors",
                              "Fewer backlinks (quality gap)",
                              "Slower page load times",
                              "Limited content depth on key topics",
                              "Lower social proof signals"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground group-hover:text-gray-700 transition-colors">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-red-600 font-bold text-xs">•</span>
                                </div>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 5 Strengths */}
                      <div className="group relative bg-gradient-to-br backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 shadow-lg transition-all duration-300" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)', borderColor: 'rgba(113, 147, 52, 0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.7)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.5)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'; }}>
                        <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl -mr-10 -mt-10" style={{ backgroundColor: 'rgba(113, 147, 52, 0.05)' }}></div>
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #719334, #5a7529)' }}>
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="font-heading font-bold text-foreground text-lg">5 Strengths</h4>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Strong brand messaging clarity",
                              "Better mobile experience",
                              "Higher conversion rate on landing pages",
                              "More engaging visual content",
                              "Stronger email marketing performance"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground group-hover:text-gray-700 transition-colors">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)' }}>
                                  <span className="font-bold text-xs text-brand-green">•</span>
                                </div>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 5 Actions */}
                      <div className="group relative bg-gradient-to-br from-blue-50/80 via-blue-50/60 to-blue-50/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-blue-200/50 shadow-lg hover:shadow-xl hover:border-blue-300/70 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="relative">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                            </div>
                            <h4 className="font-heading font-bold text-foreground text-lg">5 Actions</h4>
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Build 50+ quality backlinks (Q1)",
                              "Optimize 20 key pages for speed",
                              "Create 10 pillar content pieces",
                              "Launch customer testimonial campaign",
                              "Improve technical SEO foundation"
                            ].map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground group-hover:text-gray-700 transition-colors">
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-blue-600 font-bold text-xs">•</span>
                                </div>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Battlecard */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Battlecard: How to Win vs Competitor A & B
                      </span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      {[
                        {
                          competitor: "Competitor A",
                          strategy: "Attack their weak content depth. They rank but content is thin—outrank with comprehensive guides.",
                          tactics: [
                            "Create 5x longer, better-researched content on their top keywords",
                            "Target their weak backlink profile with outreach",
                            "Leverage their slow site speed as a differentiator"
                          ]
                        },
                        {
                          competitor: "Competitor B",
                          strategy: "Beat them on user experience and conversion. They have traffic but lower conversion rates.",
                          tactics: [
                            "Optimize landing pages to convert 2x better",
                            "Improve mobile experience (they're weak here)",
                            "Build stronger social proof and trust signals"
                          ]
                        }
                      ].map((battle, index) => (
                        <div key={index} className="group relative bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-purple-50/90 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-purple-200/50 shadow-lg hover:shadow-xl hover:border-purple-300/70 transition-all duration-300">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                          <div className="relative">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {battle.competitor === "Competitor A" ? "A" : "B"}
                              </div>
                              <h4 className="font-heading font-bold text-foreground text-lg sm:text-xl">{battle.competitor}</h4>
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground mb-5 font-medium leading-relaxed bg-white/60 rounded-lg p-3 border border-purple-100/50">{battle.strategy}</p>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent"></div>
                                <div className="text-xs sm:text-sm font-bold text-purple-700 uppercase tracking-wider px-3 py-1 bg-purple-100 rounded-full">Tactics</div>
                                <div className="h-px flex-1 bg-gradient-to-l from-purple-200 to-transparent"></div>
                              </div>
                              {battle.tactics.map((tactic, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg border border-purple-100/50 hover:bg-white/80 hover:border-purple-200/70 transition-all duration-200">
                                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <span className="text-sm sm:text-base text-muted-foreground flex-1 leading-relaxed">{tactic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 30/60/90-day Action Plan */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        30/60/90-Day Action Plan
                      </span>
                    </h3>
                    <div className="space-y-5">
                      {[
                        {
                          period: "30 Days",
                          color: "from-blue-500 to-cyan-500",
                          bgColor: "from-blue-50/90 to-cyan-50/90",
                          borderColor: "border-blue-200/50",
                          actions: [
                            "Complete technical SEO audit and fix critical issues",
                            "Launch 5 high-quality backlink campaigns",
                            "Optimize top 10 pages for page speed"
                          ]
                        },
                        {
                          period: "60 Days",
                          color: "from-cyan-500 to-blue-500",
                          bgColor: "from-cyan-50/90 to-blue-50/90",
                          borderColor: "border-cyan-200/50",
                          actions: [
                            "Publish 10 comprehensive content pieces",
                            "Implement conversion rate optimization on key pages",
                            "Build customer testimonial and case study library"
                          ]
                        },
                        {
                          period: "90 Days",
                          color: "from-blue-600 to-cyan-600",
                          bgColor: "from-blue-100/90 to-cyan-100/90",
                          borderColor: "border-blue-300/50",
                          actions: [
                            "Scale content production to 20 pieces/month",
                            "Achieve 50+ quality backlinks",
                            "Monitor and optimize based on performance data"
                          ]
                        }
                      ].map((plan, index) => (
                        <div key={index} className={`group relative bg-gradient-to-br ${plan.bgColor} backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 ${plan.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.color} opacity-5 rounded-full blur-3xl -mr-16 -mt-16`}></div>
                          <div className="relative">
                            <div className="flex items-center gap-4 mb-5">
                              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                {plan.period.split(" ")[0]}
                              </div>
                              <h4 className="font-heading font-bold text-foreground text-lg sm:text-xl">{plan.period}</h4>
                            </div>
                            <ul className="space-y-3">
                              {plan.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg border border-white/50 hover:bg-white/90 hover:shadow-md transition-all duration-200">
                                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <span className="text-sm sm:text-base text-muted-foreground flex-1 leading-relaxed">{action}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust/Credibility Strip */}
                <div className="mb-10 sm:mb-12">
                  <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 rounded-2xl p-6 sm:p-8 border-2 border-slate-200/50 shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-slate-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-6 text-center">
                        Why This Report Works
                      </h3>
                      <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div className="group flex flex-col items-center gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-md hover:shadow-lg hover:border-blue-200/70 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                            Uses reputable sources<br />(SEO tools + ad transparency libraries)
                          </p>
                        </div>
                        <div className="group flex flex-col items-center gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-md hover:shadow-lg hover:border-blue-200/70 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                            Director-friendly,<br />not technical
                          </p>
                        </div>
                        <div className="group flex flex-col items-center gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-md hover:shadow-lg hover:border-blue-200/70 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                            Built for decisions<br />and execution
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="relative bg-gradient-to-r from-blue-50/50 via-cyan-50/50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border-2 border-blue-200/50 shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center">
                    <button
                      onClick={() => {
                        onClose();
                        if (onRequestReport) {
                          setTimeout(() => onRequestReport(), 300);
                        }
                      }}
                      className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3.5 sm:px-10 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] shadow-xl w-full sm:w-auto min-h-[48px]"
                    >
                      <span>Request a Report</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SampleReportModal;

