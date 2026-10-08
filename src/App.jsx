import React, { useState } from 'react';

const PERSONAL = {
  name: "Mohammed Batar",
  title: "Cybersecurity Engineering Student | SIEM, Network Security & Security Engineering | CompTIA Security+",
  sub: "Building security systems, detection pipelines, and security-focused software.",
  motto: "I don't just study cybersecurity. I build systems that implement it.",
  loc: "Casablanca, Morocco",
  github: "https://github.com/mohamedbatar2",
  linkedin: "https://www.linkedin.com/in/mohammed-batar-262a74344/",
  email: "mohammed.batar@example.com",
  cvUrl: "https://drive.google.com/uc?export=download&id=1pLvSqGyhMkGCpm6VezGx5mS8RgJUpkTu"
};

const PROJECTS = [
  {
    title: "SentinelBridge",
    sub: "Mini-SOAR & Detection Engineering Platform",
    badge: "Personal Project • Active Development",
    desc: "End-to-end blue-team detection pipeline connecting attack simulation to telemetry ingestion, automated MITRE ATT&CK enrichment, and incident response dispatch.",
    flow: "Attack Sim → Sysmon/Wazuh → SIEM → Webhook JSON → FastAPI → Threat Enrichment → MITRE ATT&CK → Incident Creation → Automated Response",
    tech: ["Python", "FastAPI", "Wazuh", "Sysmon", "SIEM", "MITRE ATT&CK", "SOAR"],
    repo: "https://github.com/mohamedbatar2/sentinelbridge"
  },
  {
    title: "FinAudit",
    sub: "API Security Scanning Platform for Financial Applications",
    badge: "Personal Project • Tooling Prototype",
    desc: "Modular security scanner auditing REST APIs against OWASP API Security Top 10, mapping vulnerabilities to Bank Al-Maghrib Directive 2019-07 and AMMC Circular 01/2021.",
    flow: "Target API → Scanner (Python 3.12) → OWASP API Top 10 Suite → Findings → Regulatory Mapping → Audit Report",
    tech: ["Python 3.12", "OWASP API Top 10", "REST APIs", "BOLA Testing", "Bank Al-Maghrib", "AMMC"],
    repo: "https://github.com/mohamedbatar2/finaudit"
  },
  {
    title: "BankingApp Cyber Defense Lab",
    sub: "Security-Instrumented Banking API & SIEM Telemetry Lab",
    badge: "Laboratory Project • Completed",
    desc: "Deliberately instrumented .NET 8 banking application generating structured security audit logs for an ELK Stack detection environment. (QRadar was planned, but installation blocked; ELK Stack implemented).",
    flow: ".NET 8 Banking API → Serilog JSON Logs → Logstash → Elasticsearch → Kibana → Detection & Investigation",
    tech: ["C#", ".NET 8", "Clean Architecture", "Serilog", "Logstash", "Elasticsearch", "Kibana", "SQLi & Brute Force"],
    repo: "https://github.com/mohamedbatar2/BankingApp"
  },
  {
    title: "SmartCardio",
    sub: "Full-Stack Machine Learning Healthcare Application",
    badge: "Academic Final-Year Project • Completed",
    desc: "Full-stack predictive healthcare application integrating machine learning inference for cardiovascular disease risk. Presented as software engineering & ML integration.",
    flow: "React / Tailwind → ASP.NET Core .NET 8 API → ONNX Runtime → XGBoost → MongoDB",
    tech: ["React", "Tailwind CSS", "ASP.NET Core", ".NET 8", "XGBoost", "ONNX", "MongoDB"],
    repo: "https://github.com/mohamedbatar2/HeartDiseaseAPI"
  }
];

const EXPERIENCES = [
  {
    role: "IT Operations & Cybersecurity Intern",
    org: "LEONI Maroc",
    period: "September 2026 – Present",
    env: "Industrial Manufacturing, Bouskoura, Casablanca-Settat (On-site)",
    desc: "Operational IT and cybersecurity support in an industrial manufacturing environment. Managing field technical infrastructure, network troubleshooting, system reliability, and workplace cybersecurity hygiene.",
    tech: ["IT Operations", "Cybersecurity", "Field IT", "Network Security", "Endpoint Support", "Infrastructure"]
  },
  {
    role: "IT Analyst",
    org: "SYPEX",
    period: "Jan 2026 – May 2026",
    env: "Fintech, OPCI / OPCVM, AMMC-Regulated, Oracle 19c, ERP",
    desc: "Enterprise IT support and database troubleshooting in an AMMC-regulated financial environment. Managed Oracle 19c instances, tuned SQL queries, configured ERPs, and audited logs.",
    tech: ["Oracle 19c", "SQL", "ERP", "Jasper Reports", "Log Analysis", "AMMC Compliance"]
  },
  {
    role: "Cyberdefense Apprentice",
    org: "DATAPROTECT",
    period: "Oct 2025 – May 2026",
    env: "ELK Stack, IBM QRadar Lab, NGFW, WAF, EDR, NAC",
    desc: "Hands-on blue-team cyberdefense: ELK Stack SIEM telemetry parsing, network security posture analysis (NGFW, WAF, EDR, NAC), and detection investigations in an IBM QRadar laboratory environment.",
    tech: ["ELK Stack", "IBM QRadar (Lab)", "SIEM", "NGFW", "WAF", "EDR", "NAC", "Detection Engineering"]
  },
  {
    role: "Software Engineering Intern",
    org: "CFCA Maroc / Ampère-Elec",
    period: "Sep 2025 – Nov 2025",
    env: "Dynamics 365, C#, WPF, Microsoft Access",
    desc: "Modernized enterprise applications, refactored business logic in C# and WPF, maintained Access databases, and supported Dynamics 365 migration.",
    tech: ["C#", "WPF", "Dynamics 365", "Access", "Application Modernization"]
  },
  {
    role: "Cybersecurity Trainer",
    org: "FSTE IT Club",
    period: "2022 – 2024",
    env: "University Technical Club",
    desc: "Delivered technical cybersecurity workshops, introduced defensive hygiene, and mentored students on Linux administration and secure programming.",
    tech: ["Cybersecurity Training", "Workshop Facilitation", "Linux Security", "Mentoring"]
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-cyan-900/40 px-4 py-2 text-xs font-mono text-cyan-300 text-center flex flex-wrap items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>CASABLANCA, MOROCCO • OPEN TO MOBILITY, LOCAL &amp; REMOTE OPPORTUNITIES</span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="text-slate-300">CompTIA Security+ Certified • CNAM Paris Engineering (2025–2028)</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#05070d]/90 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black font-mono">MB</div>
            <div>
              <div className="font-bold text-white text-sm flex items-center gap-1.5">
                Mohammed Batar
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">Sec+</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">Cybersecurity × Software Eng.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="#projects" className="text-cyan-400 hover:underline">Projects</a>
            <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-cyan-400 font-semibold">{PERSONAL.loc}</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400">CompTIA Security+ Certified</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Cybersecurity Engineering <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              × Software Engineering
            </span>
          </h1>
          <p className="text-xl text-slate-200 font-medium">{PERSONAL.sub}</p>
          <p className="text-slate-400 text-base max-w-3xl leading-relaxed">
            Mohammed Batar — Cybersecurity Engineering Student at CNAM Paris, CompTIA Security+ certified, pairing a software engineering foundation (FST Licence Génie Logiciel) with practical experience across SIEM, cyberdefense labs (DATAPROTECT), enterprise IT (CFCA), and financial technology (SYPEX).
          </p>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-sm text-cyan-300">
            &ldquo;{PERSONAL.motto}&rdquo;
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs pt-2">
                        <a href={PERSONAL.cvUrl} target="_blank" rel="noreferrer" download className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
              <span>⬇ Download CV</span>
            </a>
            <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20">
              Explore Flagship Projects
            </a>
            <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 hover:bg-slate-800">
              GitHub: mohamedbatar2
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 hover:bg-slate-800">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Centerpiece Portfolio</div>
            <h2 className="text-3xl font-bold text-white">Flagship Engineering Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">{p.badge}</div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">{p.sub}</div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.desc}</p>
                  
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs mb-4">
                    <div className="text-cyan-400 font-bold mb-1 text-[11px]">ARCHITECTURE &amp; TELEMETRY FLOW:</div>
                    <div className="text-slate-300 text-[11px] leading-relaxed">{p.flow}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-400">✓ Architecture Verified</span>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Work History</div>
          <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {EXPERIENCES.map((e, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">{e.role} <span className="text-cyan-400">@ {e.org}</span></h3>
                  <span className="text-xs font-mono text-cyan-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">{e.period}</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-3"><span className="text-slate-500">Environment:</span> {e.env}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {e.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Academic Foundation</div>
            <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400">2025 – 2028</div>
                <h3 className="text-lg font-bold text-white">CNAM Paris (Conservatoire National des Arts et Métiers)</h3>
                <div className="text-xs text-slate-400 font-mono mb-2">Diplôme d'ingénieur CNAM Paris — Cybersécurité / Sécurité-Sûreté des Systèmes d'Information</div>
                <p className="text-slate-300 text-xs">Curriculum includes ISO 27005 risk management, PSSI, SOC operations, malware analysis, digital investigation, and systems dependability. Courses: SEC101 (ISO 27005, PSSI, SOC, Purdue model) &amp; SEC102 (Malware, cyber investigation, incident analysis).</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400">2022 – 2025</div>
                <h3 className="text-lg font-bold text-white">FST Errachidia — Moulay Ismail University</h3>
                <div className="text-xs text-slate-400 font-mono mb-2">Licence Sciences et Technologie / Génie Logiciel (Grade: 11.17/20, Graduated July 2025)</div>
                <p className="text-slate-300 text-xs">Core academic software engineering foundation in algorithms, databases, web development, networking, and software architecture.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Credentials</div>
            <h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
            <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border-2 border-cyan-500/50 mb-4">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">PRIMARY FEATURED CREDENTIAL</div>
              <h3 className="text-xl font-black text-white">CompTIA Security+</h3>
              <div className="text-xs font-mono text-slate-400 mt-1">Certified: May 2026 • Valid until 2029 • CompTIA</div>
              <p className="text-slate-300 text-xs mt-2">Enterprise risk mitigation, security architecture, threat intelligence, and incident response.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 font-mono text-xs space-y-2 text-slate-300">
              <div>• IBM AI Fundamentals</div>
              <div>• Cisco Networking Basics</div>
              <div>• Cisco Introduction to Cybersecurity</div>
              <div>• SAP S/4HANA Cloud Back-End Developer — Associate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Competencies</div>
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills &amp; Languages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-3 pb-2 border-b border-slate-800">Cybersecurity &amp; Blue Team</h3>
              <div className="text-xs font-mono text-slate-300 space-y-1">
                <div>• SIEM &amp; Telemetry Aggregation</div>
                <div>• Security Monitoring &amp; Triage</div>
                <div>• Detection Engineering</div>
                <div>• Incident Response Procedures</div>
                <div>• SOC Concepts &amp; Automation</div>
                <div>• API Security &amp; OWASP Top 10</div>
                <div>• MITRE ATT&amp;CK Mapping</div>
                <div>• ISO 27005 &amp; PSSI Governance</div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-3 pb-2 border-b border-slate-800">Security Tech &amp; Software</h3>
              <div className="text-xs font-mono text-slate-300 space-y-1">
                <div>• Wazuh &amp; Microsoft Sysmon</div>
                <div>• ELK Stack (Elasticsearch, Logstash, Kibana)</div>
                <div>• IBM QRadar (Laboratory)</div>
                <div>• NGFW, WAF, EDR, NAC</div>
                <div>• Python 3.12 (FastAPI, Automation)</div>
                <div>• C# (.NET 8, Clean Architecture)</div>
                <div>• Oracle 19c &amp; MongoDB</div>
                <div>• Zabbix &amp; Git / GitHub Actions</div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-3 pb-2 border-b border-slate-800">Languages</h3>
              <div className="font-mono text-xs space-y-2 text-slate-300">
                <div>Arabic: <span className="text-cyan-400 font-bold">Native</span></div>
                <div>English: <span className="text-cyan-400 font-bold">C1</span></div>
                <div>French: <span className="text-cyan-400 font-bold">B2</span></div>
                <div>German: <span className="text-cyan-400 font-bold">A1</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Direct Communication</div>
          <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
          <p className="text-slate-400 text-sm">
            Available for cybersecurity engineering, detection engineering, and SOC/blue-team roles in Casablanca, remote international setups, or relocation.
          </p>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs space-y-3 inline-block text-left w-full sm:w-auto">
            <div><span className="text-slate-500">Location:</span> Casablanca, Morocco</div>
            <div><span className="text-slate-500">GitHub:</span> <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/mohamedbatar2</a></div>
            <div><span className="text-slate-500">LinkedIn:</span> <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/mohammedbatar</a></div>
            <button onClick={copyEmail} className="mt-2 w-full py-2 px-3 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {copied ? "✓ Copied Email to Clipboard" : "Copy Email Address"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-950 border-t border-slate-900 text-center font-mono text-xs text-slate-500">
        © {new Date().getFullYear()} Mohammed Batar • Cybersecurity Engineering Portfolio
      </footer>

    </div>
  );
}




