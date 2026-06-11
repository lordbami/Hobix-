# HOBIX: Gamified Space Project Management Platform
## African Space-for-Good Initiative

**Status**: Private Planning Repository (MVP Development)  
**Owner**: lordbami (Alugoke Nig Ltd Engineering)  
**Timeline**: 19–25 weeks | 5 hours/day execution  
**License**: MIT

---

## 📡 Vision

**HOBIX** is a decentralized, gamified AI-augmented project management platform that enables university teams, space agencies, and Earth Observation (EO) professionals across Africa to collaborate on real space missions—from planning to launch to in-orbit operations.

**Core mechanic**: Players join teams (human + AI bots), answer role-specific scenario questions in real-time, earn "fuel" for correct/fast answers, and watch their satellite mission progress—from unpacking hardware → assembly → launch → data transmission—visualized live on their dashboard.

**Target audience**: 
- University space clubs and engineering societies (B2B2C)
- African SOEs (space agencies, meteorological departments)
- MNC-SOE joint ventures seeking collaborative training
- Global gamer community interested in space + education

**Unique angle**: Reflects authentic African space realities (procurement challenges, customs clearance, limited resources, EO applications to local CSR problems).

---

## 🎯 Core Features (MVP)

1. **Decentralized Team Formation**: Create teams, invite real humans via LinkedIn/Facebook OAuth, or assign AI bots.
2. **Role-Based Scenarios**: PM, Engineer, DevOps, QA, Designer—each role receives contextualized multi-choice questions.
3. **Fuel Economy**: Correct + fast answers → fuel meter increases. Team needs 100 fuel to "launch" mission.
4. **Live Satellite Visualization**: As team answers correctly, a 3D satellite model progresses: unpacking → assembly → launch → GNSS communication.
5. **AI Bot Teammates**: Grok-powered bots with personality, expertise, and decision memory.
6. **Mission Library**: Africa-focused Earth Observation scenarios (agriculture, disaster response, urban planning, etc.).
7. **Leaderboards & Achievements**: Global and team-based rankings.
8. **Enterprise Partnerships**: SOE pilots and educational white-labeling.

---

## 🏗️ Repository Structure

```
Hobix-/
├── README.md                          # This file
├── LICENSE                            # MIT License
├── TECH_SPEC.md                       # Detailed technical architecture & Grok integration
├── MISSION_LIBRARY.md                 # Africa-focused EO/RS and CSR scenario templates
├── ROADMAP.md                         # 5-hour/day execution plan (19–25 weeks)
├── FINANCIAL_MODEL.md                 # Budget templates and cost assumptions
├── ARCHITECTURE/
│   ├── architecture.md                # Component diagrams and system flows
│   ├── data-model.sql                 # PostgreSQL schema
│   └── api-spec.yaml                  # OpenAPI / REST endpoints
├── missions/
│   ├── samples/
│   │   ├── mission_agricultural_drought_001.json
│   │   ├── mission_flood_early_warning_001.json
│   │   └── ... (more samples)
│   └── README.md                      # Mission content guidelines
├── scripts/
│   ├── backend-starter.py             # FastAPI bootstrap
│   ├── frontend-starter.tsx           # React Native Expo bootstrap
│   └── setup.sh                       # Local dev environment setup
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                     # Basic CI pipeline (lint, test, build)
│   │   └── deploy-staging.yml         # Deploy to staging on PR
│   └── ISSUE_TEMPLATE/
│       ├── bug.md
│       ├── feature.md
│       └── scenario.md
├── CONTRIBUTING.md                    # How to contribute scenarios, code
├── CODE_OF_CONDUCT.md                 # Community guidelines
├── ISSUES.md                          # Initial backlog (links to GitHub Issues)
└── .gitignore                         # Standard Python / Node.js ignores
```

---

## 📚 Key Files in This Repo

- **TECH_SPEC.md**: Full technical architecture, Grok API integration strategy, vector DB choice, security, infra.
- **MISSION_LIBRARY.md**: Template structure, Africa use-cases (agriculture, health, disasters), CSR opportunities, SOE/MNC JV scenarios.
- **ROADMAP.md**: Week-by-week breakdown, daily 5-hour timeboxing, sprint deliverables, 19–25 week timeline.
- **FINANCIAL_MODEL.md**: Budget scenarios (lean, moderate, thorough), cost drivers, revenue model, runway calculations.
- **ARCHITECTURE/**: Entity-relationship diagrams, API routes, microservices topology.

---

## 🚀 Quick Start (Developer)

See **CONTRIBUTING.md** for full setup instructions. TL;DR:

```bash
# Clone and install
git clone https://github.com/lordbami/Hobix-.git
cd Hobix-
git checkout develop

# Backend
cd scripts
python -m venv venv
source venv/bin/activate
pip install -r backend-starter-requirements.txt
# See backend-starter.py for next steps

# Frontend (React Native)
npx create-expo-app horbix-game-mobile
# See frontend-starter.tsx for integration
```

---

## 🔒 Privacy & Security

This repository is **private**. Only authorized team members and investors have access.

### Data Practices:
- Player PII stored encrypted at rest (PostgreSQL + AES-256).
- OAuth tokens (LinkedIn, Facebook) stored with minimal footprint; refresh tokens only.
- No tracking / analytics on personal identifiers (only anonymized events).
- GDPR + relevant African data protection laws adhered to.
- Full privacy policy prepared before public launch.

---

## 💰 Funding & Partnerships

**Bootstrap Status**: Family-sponsored via Alugoke Nig Ltd Engineering.  
**Investment Target**: $8k–$60k for MVP (19–25 weeks).

**Partnership Pathways**:
1. **xAI / Grok**: Discuss API credits, partnership co-op for scenario generation.
2. **African SOEs**: Pilot contracts (early warning, agriculture insurance, port monitoring).
3. **Universities**: Educational partnerships for closed-beta testing.
4. **Space Agencies**: Potential collaboration with Project DAWN and similar initiatives.

---

## 📅 Timeline at a Glance

| Phase | Duration | Key Deliverable |
|-------|----------|-----------------||
| Prep | Week 0 | Repo, CI, initial issues |
| Sprint 1 | Weeks 2–4 | Backend skeleton + DB schema |
| Sprint 2 | Weeks 5–7 | Frontend MVP + game loop |
| Sprint 3 | Weeks 8–10 | Grok integration + scenario generation |
| Sprint 4 | Weeks 11–13 | Team mechanics + gamification |
| Sprint 5 | Weeks 14–16 | Mission flows + Africa scenarios |
| Sprint 6 | Weeks 17–20 | Beta testing + PlayStore prep |

**Full timeline**: See **ROADMAP.md** for detailed week-by-week milestones.

---

## 🎮 Gameplay Loop (Player View)

```
1. Player signs up → Selects role (PM, Engineer, QA, etc.)
2. Creates or joins team → Adds humans (OAuth) or AI bots
3. Selects mission (e.g., "Deploy agricultural drought EO satellite")
4. Receives scenario: "It's launch day. Customs cleared 2 hours late. Do you (A) delay launch, (B) proceed, (C) escalate?"
5. Player + AI bots answer → Team aggregates decision
6. Correct answer → +10 fuel | Leaderboard updated
7. Fuel meter fills → Satellite model progresses (unpacking → assembly → launch)
8. At 100 fuel → Mission complete → Unlock new scenarios / achievements
```

---

## 🤝 Contributing

We welcome contributions:
- **Scenarios**: Propose Africa-focused EO/RS missions
- **Code**: Backend, frontend, AI integrations
- **Design**: UX/UI improvements
- **Partnerships**: Introductions to SOEs, universities, space organizations

See **CONTRIBUTING.md** and **ISSUES.md** for guidelines.

---

## 📞 Contact & Governance

**Project Lead**: lordbami (GitHub)  
**Company**: Alugoke Nig Ltd Engineering  
**Vision Champion**: Building African space innovation through gamification & decentralized collaboration.

---

## 📄 License

MIT License — See LICENSE file.

---

**Last Updated**: 2026-06-11  
**Next Review**: End of Week 1 (prep phase)
