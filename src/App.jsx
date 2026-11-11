import React from 'react'

const FUNDING_GOAL = 2500
const FUNDING_RAISED = 0
const GITHUB_URL = 'https://github.com/swipswaps/heat-recovery-explainer'
const GOFUNDME_URL = 'https://gofundme.com/'

function App() {
  const pct = Math.min(100, Math.round((FUNDING_RAISED / FUNDING_GOAL) * 100))
  return (
    <div className="container">
      <span className="badge">Open R&amp;D · R32 · 8,000 BTU</span>
      <h1>Recovering Condenser Heat from a Window AC</h1>
      <p className="lede">
        A measured, open-source experiment: can a low-cost brazed-plate heat
        exchanger on an 8,000 BTU Midea U-shaped air conditioner produce useful
        hot water without sacrificing cooling efficiency? This page funds one
        instrumented test unit, publishes the data, and either ships a kit or a
        clear negative result.
      </p>

      <h2>Funding</h2>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <strong style={{ fontSize: '1.15rem' }}>${FUNDING_RAISED.toLocaleString()} raised</strong>
          <span style={{ color: '#64748b' }}>goal ${FUNDING_GOAL.toLocaleString()}</span>
        </div>
        <div className="bar-wrap"><div className="bar" style={{ width: `${pct}%` }} /></div>
        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{pct}% funded</div>
        <p style={{ marginTop: '1rem' }}>
          <a className="btn" href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">Donate on GoFundMe →</a>
          <a className="btn btn-secondary" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">Follow on GitHub →</a>
        </p>
      </div>

      <h2>The Experiment</h2>
      <div className="grid">
        <div className="stat"><div className="num">~0.33 kW</div><div className="lbl">Midpoint heat recovery</div></div>
        <div className="stat"><div className="num">652 psi</div><div className="lbl">BPHE design pressure (R32)</div></div>
        <div className="stat"><div className="num">9–14%</div><div className="lbl">of total condenser heat</div></div>
        <div className="stat"><div className="num">$650–$965</div><div className="lbl">Lowest-cost safe build</div></div>
      </div>

      <h3>Why this is not a sure thing</h3>
      <ul>
        <li>The BPHE’s refrigerant-side internal volume and pressure drop are not published by the seller.</li>
        <li>The Midea’s exact R32 factory charge weight is on the rating plate, not the spec sheet.</li>
        <li>A wrong-sized exchanger can starve the compressor or flood it — both are compressor killers.</li>
        <li>R32 is A2L (mildly flammable). The sealed-system work must be done by an EPA-certified technician with A2L-safe recovery equipment. No exceptions.</li>
      </ul>

      <h2>How the money is spent</h2>
      <table>
        <thead><tr><th>Item</th><th>Cost</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Midea 8,000 BTU U-shaped AC</td><td>$270–$400</td><td>Restored unit is acceptable</td></tr>
          <tr><td>652 psi BPHE (2650-series)</td><td>$100–$150</td><td>Quote from PLC Toolbox</td></tr>
          <tr><td>Tank, PEX, relief valve, insulation, thermometers</td><td>$100–$170</td><td>Used water-heater tank as storage</td></tr>
          <tr><td>EPA technician: recover, purge, braze, evacuate, recharge</td><td>$900–$1,600</td><td>A2L-safe, non-negotiable</td></tr>
          <tr><td>Contingency + GoFundMe fees</td><td>~$250</td><td>2.9% + $0.30 per donation</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>$1,620–$2,570</strong></td><td>Goal: $2,500</td></tr>
        </tbody>
      </table>

      <h2>Open-source plan</h2>
      <div className="card">
        <h3>What gets published</h3>
        <ul>
          <li>Full BOM with vendor links and current prices.</li>
          <li>Instrumentation method — tank inlet/outlet temperatures, ambient, AC power draw via plug-in meter, water flow.</li>
          <li>Recovered-energy calculation: <code>Q = m·c_p·ΔT</code>, compared to theoretical superheat available.</li>
          <li>Compressor discharge temperature and AC power draw before/after the retrofit.</li>
          <li>Baseline run with the water loop valved off.</li>
          <li>All raw data, including failures.</li>
        </ul>
        <h3>Success and kill criteria</h3>
        <ul>
          <li><strong>Minimum viable:</strong> measurable tank temperature rise with no compressor fault, no leak, no significant cooling loss.</li>
          <li><strong>Good:</strong> 0.15–0.30 kW recovered, consistent with the earlier BPHE midpoint estimate.</li>
          <li><strong>Kill:</strong> any leak, compressor over-temperature, repeated high-pressure faults, or recovery below 0.05 kW.</li>
        </ul>
      </div>

      <h2>Safety and regulatory reality</h2>
      <ul>
        <li>R32 requires EPA Section 608 certification and A2L-safe recovery equipment.</li>
        <li>The BPHE must be rated for at least 652 psi design pressure for R32 service. Lower-pressure units are not safe.</li>
        <li>Any productized kit will exclude refrigerant work — installation will require a licensed technician.</li>
        <li>The project is structured as an R&amp;D / documentation effort first, an installation service only after data and insurance exist.</li>
      </ul>

      <h2>Why bother?</h2>
      <p>
        Commercial heat-recovery units start at 1.5 tons. Window ACs are the
        cheapest cooling on earth, and every one of them dumps its condenser
        heat outside. If a $150 component and a $150 technician visit can recover
        even 0.2 kW of that heat into a 10-gallon tank, it pre-heats water in
        apartments, workshops, and off-grid setups that will never buy a
        purpose-built heat-recovery system.
      </p>
      <p>
        If the experiment fails, publishing that failure prevents others from
        spending the same money on the same dead end. Both outcomes are useful.
      </p>

      <footer>
        Public R&amp;D · No refrigerant will be vented · All sealed-system work
        by EPA-certified technicians · Data published regardless of outcome.
      </footer>
    </div>
  )
}

export default App
