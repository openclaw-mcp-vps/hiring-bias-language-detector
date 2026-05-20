export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          HR &amp; Recruiting Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Remove Biased Language from<br />
          <span className="text-[#58a6ff]">Job Descriptions Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste any job posting and instantly detect gender, age, and cultural bias. Get inclusive alternatives that attract more diverse, qualified candidates.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Demo preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4 font-semibold">Live Example</p>
          <div className="space-y-3">
            {[
              { biased: '"rockstar developer"', fix: '"skilled developer"', type: 'Gender bias' },
              { biased: '"young and energetic"', fix: '"motivated and driven"', type: 'Age bias' },
              { biased: '"culture fit"', fix: '"values alignment"', type: 'Cultural bias' },
            ].map((item) => (
              <div key={item.biased} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-[#0d1117] rounded-lg px-4 py-3">
                <span className="text-red-400 line-through text-sm flex-1">{item.biased}</span>
                <span className="text-[#58a6ff] text-xs font-mono">→</span>
                <span className="text-green-400 text-sm flex-1">{item.fix}</span>
                <span className="text-[#8b949e] text-xs bg-[#161b22] px-2 py-0.5 rounded">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited job description scans',
              'Gender, age & cultural bias detection',
              'Inclusive language suggestions',
              'One-click export of cleaned text',
              'Bias score & summary report',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What types of bias does it detect?',
              a: 'The tool identifies gender-coded language (e.g. "ninja", "dominant"), age-biased phrases (e.g. "young team", "digital native"), and culturally exclusive terms that may deter qualified applicants.'
            },
            {
              q: 'How does it suggest alternatives?',
              a: 'Each flagged phrase is matched against a curated dictionary of inclusive alternatives. Suggestions are context-aware and ready to copy directly into your job posting.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no hidden fees.'
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl px-6 py-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Hiring Bias Detector. All rights reserved.
      </footer>
    </main>
  )
}
