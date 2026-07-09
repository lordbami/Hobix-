# HorbiX: Gamified CubeSat Project Management Platform
## African Space-for-Good Initiative

**Status**: Private Planning Repository (MVP Development)  
**Owner**: lordbami (Alugoke Nig Ltd Engineering)  
**Timeline**: 19–25 weeks | 5 hours/day execution  
**License**: MIT

---

## 📡 Vision

**HorbiX** is a multiplayer, AI-driven **CubeSat Project Management Game** where university teams and space professionals collaborate in real-time to manage realistic satellite missions. Players take on authentic **CubeSat subsystem roles** (human players + optional AI bots), answer role-specific scenario questions concurrently, and watch their mission progress through live 3D visualization. Wrong decisions trigger cascading subsystem faults—teaching real project management tradeoffs.

**Core mechanic**: 5–10 players per team, 60–90 second rounds, phase-gate progression from Design → AIT → Launch → Operations. Teams succeed by balancing **mission progress**, **technical health**, and **risk management**.

**Target audience**: 
- University space clubs and engineering cohorts (Africa-first, globally scalable)
- African SOEs (space agencies, meteorological departments, EO providers)
- Global STEM programs and space innovation hackathons
- Corporate team-building and professional development

**Unique angle**: Authentic African space realities (procurement delays, customs clearance, resource constraints, locally-relevant EO applications). Multilingual, culturally adaptive content designed for global university teams.

---

## 🎮 Gameplay Snapshot

```
1. Space Project Manager (SPM) creates room → assigns 5–10 players to roles
2. Each round: Concurrent MCQs per subsystem (EPS, ADCS, Thermal, Comms, SE, Ops)
3. Correct decisions → +health, mission progresses
4. Wrong decisions → faults visualized in live 3D CubeSat model
5. Phase gates enforce readiness (Design ≥70% health → AIT Ready)
6. Win condition: Complete all phases with >80% mission success probability
```

---

## 📖 Design Documentation

### Core Design Spec
**→ [`CUBESAT_GAME_DESIGN.md`](./CUBESAT_GAME_DESIGN.md)**

Comprehensive 17-section design document covering:
- Executive summary & target users
- 6 MVP roles (Space Project Manager, Systems Engineering Lead, EPS Lead, ADCS Lead, Thermal/Structures Lead, Comms/Ground Lead)
- Game systems (health, fault progression, 3D visualization)
- Mission phases & gate criteria (Design → AIT → Launch → Ops)
- MCQ card template & content principles
- 2-screen UI architecture (shared mission screen + player devices)
- MVP feature checklist & nice-to-have features
- Open decisions & success metrics
- Appendices: CubeSat dashboard metrics, glossary, implementation timeline

**Start here** for complete gameplay mechanics and feature overview.

---

## 🎯 Core Features (MVP)

1. **Multiplayer Room Management**: SPM creates games, assigns roles, configures difficulty
2. **Concurrent Role-Based MCQs**: Each subsystem lead answers different questions simultaneously
3. **Real-Time 3D Fault Visualization**: Wrong decisions trigger visible CubeSat anomalies (power loss, thermal overheat, pointing error, comms blackout)
4. **Subsystem Health Tracking**: Per-role health (0–100), failure streaks, fault states (None → Minor → Major → Critical)
5. **Phase-Gate Progression**: Design → AIT → Launch → Early Ops → Routine Ops (gate thresholds enforce readiness)
6. **AI Bot Teammates**: xAI Grok-powered bots with 3 personality modes (Junior, Steady, Noisy)
7. **Shared Mission Dashboard**: Real-time team metrics (Progress %, Risk %, Success Probability)
8. **Leaderboards & Achievements**: Team and individual rankings

---

## 📚 Supporting Documentation & Assets

### Question Bank & Content
**→ [`content/question-bank.json`](./content/question-bank.json)**
- 60+ questions across 6 MVP roles
- Beihang University academic standards (rigorous CubeSat engineering)
- Culturally adaptive scenarios: African EO applications, global best practices
- MCQ template: prompt, options, correctness, outcomes, explanations, fault triggers
- Categories: Power Budget, Thermal Design, ADCS Control, Comms Link Budget, Systems Integration, Operations Planning

**→ [`content/question-generation-guide.md`](./content/question-generation-guide.md)**
- Question design best practices
- Integration with xAI Grok for scenario generation
- Guidelines for Africa-localized contexts
- Quality review checklist

### Role Playbooks
**→ [`playbooks/`](./playbooks/) directory**

Each role has a detailed playbook covering responsibilities, decision frameworks, and region-specific considerations:

- **[`SPM_Space_Project_Manager.md`](./playbooks/SPM_Space_Project_Manager.md)** – Program leadership, gate decisions, risk mitigation
- **[`SE_Systems_Engineering_Lead.md`](./playbooks/SE_Systems_Engineering_Lead.md)** – Requirements, interfaces, verification planning
- **[`EPS_Electrical_Power_System.md`](./playbooks/EPS_Electrical_Power_System.md)** – Power budget, safe modes, brownout response
- **[`ADCS_Attitude_Determination_Control.md`](./playbooks/ADCS_Attitude_Determination_Control.md)** – Pointing control, detumble, anomaly recovery
- **[`Thermal_Structures_Lead.md`](./playbooks/Thermal_Structures_Lead.md)** – Thermal margins, material selection, TVAC readiness
- **[`Comms_Ground_Lead.md`](./playbooks/Comms_Ground_Lead.md)** – Link budget, ground passes, telemetry operations

Each playbook includes:
- Role overview (responsibilities, key decisions)
- Decision framework (how to approach questions)
- Common failure modes & recovery strategies
- Africa-specific context (e.g., limited ground station coverage, power constraints)
- Learning objectives

### Mission Scenarios
**→ [`missions/`](./missions/) directory**

Pre-built mission templates aligned with African space applications:

- **[`missions/agriculture_drought_monitoring_001.json`](./missions/agriculture_drought_monitoring_001.json)** – EO for drought early warning
- **[`missions/flood_early_warning_001.json`](./missions/flood_early_warning_001.json)** – Disaster response monitoring
- **[`missions/maritime_shipping_lanes_001.json`](./missions/maritime_shipping_lanes_001.json)** – Maritime domain awareness
- **[`missions/climate_monitoring_001.json`](./missions/climate_monitoring_001.json)** – Climate science payload
- **[`missions/template_mission.json`](./missions/template_mission.json)** – Blank template for custom scenarios

Each mission includes:
- Scenario name, theme, difficulty
- Phase-by-phase objectives
- Constraints (budget, schedule, risk thresholds)
- Success criteria

### AI Bot Personality Profiles
**→ [`ai-bots/bot-profiles.json`](./ai-bots/bot-profiles.json)**

Pre-configured AI bot personalities with multicultural names and expertise:

```json
{
  "junior_bots": [
    {"name": "Amara (Nigeria)", "expertise": "Comms", "accuracy": 40},
    {"name": "Juma (Kenya)", "expertise": "Thermal", "accuracy": 40},
    {"name": "Zainab (Morocco)", "expertise": "ADCS", "accuracy": 40}
  ],
  "steady_bots": [
    {"name": "Chen (Singapore)", "expertise": "EPS", "accuracy": 75},
    {"name": "Priya (India)", "expertise": "SE", "accuracy": 75},
    {"name": "Pablo (Brazil)", "expertise": "OPS", "accuracy": 75}
  ],
  "noisy_bots": [
    {"name": "Anya (Russia)", "expertise": "Systems", "accuracy": 60},
    {"name": "Sofia (Greece)", "expertise": "Power", "accuracy": 60}
  ]
}
```

### Academic Standards Reference
**→ [`ACADEMIC_STANDARDS.md`](./ACADEMIC_STANDARDS.md)**

Alignment with Beihang University and international CubeSat standards:
- Beihang CubeSat course curriculum mapping
- International space engineering competencies (AIAA, SSC)
- Learning outcomes per role
- Assessment rubrics

---

## 🏗️ Repository Structure

```
Hobix-/
├── README.md                                    # This file
├── LICENSE                                      # MIT License
├── CUBESAT_GAME_DESIGN.md                       # ⭐ PRIMARY DESIGN DOC (START HERE)
├── ACADEMIC_STANDARDS.md                        # Beihang/international alignment
│
├── content/
│   ├── question-bank.json                       # 60+ MCQ questions (MVP)
│   ├── question-bank-extended.json              # Additional scenarios (v1.1+)
│   ├── question-generation-guide.md             # How to write questions
│   └── README.md                                # Content strategy & guidelines
│
├── playbooks/
│   ├── SPM_Space_Project_Manager.md             # Role: Program leadership
│   ├── SE_Systems_Engineering_Lead.md           # Role: Integration & verification
│   ├── EPS_Electrical_Power_System.md           # Role: Power subsystem
│   ├── ADCS_Attitude_Determination_Control.md  # Role: Pointing & control
│   ├── Thermal_Structures_Lead.md               # Role: Thermal & mechanical
│   ├── Comms_Ground_Lead.md                     # Role: Communications & ops
│   └── README.md                                # Playbook guide
│
├── missions/
│   ├── agriculture_drought_monitoring_001.json  # Mission: Agricultural EO
│   ├── flood_early_warning_001.json             # Mission: Disaster response
│   ├── maritime_shipping_lanes_001.json         # Mission: Maritime awareness
│   ├── climate_monitoring_001.json              # Mission: Climate science
│   ├── template_mission.json                    # Blank mission template
│   └── README.md                                # Mission content guidelines
│
├── ai-bots/
│   ├── bot-profiles.json                        # AI personality definitions
│   ├── bot-decision-engine.md                   # How bots make decisions
│   └── README.md
│
├── TECH_SPEC.md                                 # Technical architecture & Grok integration
├── MISSION_LIBRARY.md                           # Scenario templates
├── ROADMAP.md                                   # 5-hour/day execution plan (19–25 weeks)
├── FINANCIAL_MODEL.md                           # Budget & revenue model
│
├── ARCHITECTURE/
│   ├── architecture.md                          # Component diagrams & system flows
│   ├── data-model.sql                           # PostgreSQL schema
│   └── api-spec.yaml                            # OpenAPI / REST endpoints
│
├── scripts/
│   ├── backend-starter.py                       # FastAPI bootstrap
│   ├── frontend-starter.tsx                     # React Native Expo bootstrap
│   └── setup.sh                                 # Local dev environment setup
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                               # CI pipeline (lint, test, build)
│   │   └── deploy-staging.yml                   # Deploy to staging on PR
│   └── ISSUE_TEMPLATE/
│       ├── bug.md
│       ├── feature.md
│       └── scenario.md
│
├── CONTRIBUTING.md                              # How to contribute scenarios, code
├── CODE_OF_CONDUCT.md                           # Community guidelines
├── ISSUES.md                                    # Initial backlog (links to GitHub Issues)
└── .gitignore                                   # Standard Python / Node.js ignores
```

---

## 🚀 Quick Start (Developer)

See **CONTRIBUTING.md** for full setup. TL;DR:

```bash
# Clone and setup
git clone https://github.com/lordbami/Hobix-.git
cd Hobix-
git checkout develop

# Read design first
cat CUBESAT_GAME_DESIGN.md

# Backend setup
cd scripts
python -m venv venv
source venv/bin/activate
pip install -r backend-starter-requirements.txt

# Frontend setup (React/Next.js + Three.js)
npx create-next-app horbix-web
# See frontend-starter.tsx for integration
```

### Local Testing

```bash
# Run question bank validation
python validate_question_bank.py content/question-bank.json

# Test AI bot decision logic
python test_bot_profiles.py ai-bots/bot-profiles.json

# Validate mission scenarios
python validate_missions.py missions/
```

---

## 📊 MVP Checklist

- [ ] **Game Engine**: Multiplayer room, role assignment, concurrent MCQ delivery
- [ ] **Core Mechanics**: Health tracking, fault progression, gate evaluation
- [ ] **Question Bank**: 60+ validated MCQs (6 roles × 10–15 questions)
- [ ] **3D Visualization**: Basic CubeSat model + fault animation
- [ ] **UI/UX**: Shared mission screen + player answer screens
- [ ] **AI Bots**: Grok integration for decision-making
- [ ] **First Mission Set**: Agriculture drought monitoring scenario (complete Design → AIT → Launch)
- [ ] **Deployment**: Staging environment ready for closed-beta

See **CUBESAT_GAME_DESIGN.md § 10** for detailed MVP scope.

---

## 🌍 Global & Africa-First Design Principles

### Multicultural & Accessible
- **Playbooks**: Roles feature leaders from diverse African, Asian, European, and Latin American backgrounds
- **Question contexts**: Scenarios drawn from global space practices + Africa-specific applications
- **Localizable**: Content pipeline ready for translation (French, Arabic, Portuguese, Swahili)
- **Accessibility**: WCAG 2.1 AA compliance, dyslexia-friendly fonts, screen reader support

### Africa-Centric Space Applications
- **EO for Development**: Agricultural monitoring, disaster early warning, maritime domain awareness, climate science
- **Resource Awareness**: Realistic constraints (limited ground stations, power intermittency, procurement delays)
- **Partnerships**: Built for SOEs, university cohorts, and MNC-SOE joint ventures
- **Learning Export**: Playbooks and scenarios transferable to other regions

### Academic Rigor
- **Beihang Alignment**: Questions meet university CubeSat curriculum standards
- **STEM Competencies**: Aligns with AIAA and international space engineering frameworks
- **Assessment Ready**: Post-game reports track learning outcomes per role

---

## 💰 Funding & Partnerships

**Bootstrap Status**: Family-sponsored via Alugoke Nig Ltd Engineering.  
**Investment Target**: $8k–$60k for MVP (19–25 weeks).

**Partnership Pathways**:
1. **xAI / Grok**: API credits for scenario generation & bot decision-making
2. **Beihang University**: Academic partnership for curriculum integration
3. **African SOEs**: Pilot contracts (Nigeria NigComSat, Kenya Dedan Kimathi, etc.)
4. **University Networks**: Regional space clubs (Nairobi Space Club, All Africa Satellite Forum)
5. **Global Platforms**: Game festivals, hackathons, esports integration

---

## 📖 Documentation Guide

| Document | Purpose | Audience |
|----------|---------|----------|
| **CUBESAT_GAME_DESIGN.md** | Complete gameplay & feature spec | Developers, stakeholders |
| **ACADEMIC_STANDARDS.md** | Curriculum & learning alignment | Educators, institutions |
| **content/question-bank.json** | MCQ questions & feedback | Content teams, reviewers |
| **playbooks/** | Role guidance & decision frameworks | Players, facilitators |
| **missions/** | Pre-built scenarios | Game designers, educators |
| **ai-bots/bot-profiles.json** | Bot personalities & decision logic | AI engineers, testers |
| **TECH_SPEC.md** | Backend architecture & integrations | Developers, DevOps |
| **ROADMAP.md** | Week-by-week execution plan | Project managers |

---

## 🔒 Privacy & Security

This repository is **private**. Only authorized team members and investors have access.

### Data Practices:
- Player PII stored encrypted at rest (PostgreSQL + AES-256)
- OAuth tokens (LinkedIn, Google) minimal footprint; refresh tokens only
- No tracking / analytics on personal identifiers (anonymized events only)
- GDPR + African data protection laws (POPIA, GDPR) adhered to
- Full privacy policy prepared before public launch

---

## 🤝 Contributing

We welcome contributions:

### Content
- **Questions**: Submit MCQs with Africa-centric contexts
- **Scenarios**: Propose new mission templates
- **Playbooks**: Expand role guides with regional insights

### Code
- **Backend**: Game engine, bot logic, API
- **Frontend**: UI/UX, 3D visualization, accessibility
- **AI**: Grok integration, scenario generation

### Partnerships
- **Introductions**: Space organizations, universities, SOEs
- **Pilots**: Early access feedback

See **CONTRIBUTING.md** for process.

---

## 📅 Timeline at a Glance

| Phase | Duration | Key Deliverable |
|-------|----------|-----------------|
| **Prep** | Week 0 | Repo, CI, initial issues |
| **Sprint 1** | Weeks 1–3 | Backend skeleton + DB schema |
| **Sprint 2** | Weeks 4–6 | Frontend MVP + game loop |
| **Sprint 3** | Weeks 7–9 | 3D visualization + fault system |
| **Sprint 4** | Weeks 10–12 | AI bots + question bank |
| **Sprint 5** | Weeks 13–15 | Mission flows + testing |
| **Sprint 6** | Weeks 16–19 | Beta polish + launch prep |

**Full timeline**: See **ROADMAP.md** for detailed week-by-week milestones.

---

## 📞 Contact & Governance

**Project Lead**: [@lordbami](https://github.com/lordbami) (GitHub)  
**Company**: Alugoke Nig Ltd Engineering  
**Vision**: Building African space innovation through gamification, collaboration, and rigorous engineering education.

---

## 📄 License

MIT License — See [LICENSE](./LICENSE) file.

---

**Last Updated**: July 9, 2026  
**Next Review**: End of Sprint 1 (Week 3)

**Quick Links**:
- 📖 [Full Game Design](./CUBESAT_GAME_DESIGN.md)
- 🎓 [Academic Standards](./ACADEMIC_STANDARDS.md)
- 📝 [Question Bank](./content/question-bank.json)
- 👥 [Role Playbooks](./playbooks/)
- 🎮 [Sample Missions](./missions/)
