# HorbiX: CubeSat Project Management Game
## Multiplayer AI-Driven Serious Game for University Teams

**Status**: Active Development (MVP Phase)  
**Version**: 2.0 — CubeSat Focus  
**Last Updated**: July 8, 2026

---

## 1) Executive Summary

**HorbiX** is a collaborative serious game where **5–10 teammates** take on **real CubeSat project roles** (human players + optional AI bots). Each round, players receive **role-specific multiple-choice questions concurrently**. Correct decisions advance the mission; wrong decisions create **subsystem faults** that appear visually in a **live 3D CubeSat simulation**.

Teams win by successfully navigating phase gates: **Mission Definition → Design → AIT → Launch → Early Ops → Routine Ops**.

### Key Innovation
- **Live 3D fault visualization**: Wrong decisions trigger realistic CubeSat anomalies (power blackouts, thermal overheat, pointing errors, comms loss)
- **Concurrent role-based gameplay**: Each subsystem lead makes independent decisions that cascade into team outcomes
- **Africa-first context**: Realistic constraints (procurement delays, customs clearance, resource limits, local EO applications)
- **Educational + competitive**: Teaches real CubeSat project management while maintaining engaging gameplay

---

## 2) Target Users & Use Cases

**Primary Users:**
- University CubeSat teams
- Space clubs and engineering cohorts
- STEM programs and innovation hubs
- Hackathons and incubation programs

**Secondary Users:**
- Training facilitators
- Corporate team-building programs
- African SOEs (space agencies, meteorological departments)

**Deployment Modes:**
- **Classroom/Lab**: Projector-based shared mission screen + player devices for answers
- **Remote Teams**: Web-based multiplayer room (any location)
- **Enterprise Pilot**: White-labeled scenarios for SOE training

---

## 3) Core Experience

### 3.1 Room Setup Flow

1. **Space Project Manager (SPM)** creates a room and configures:
   - Mission theme (agriculture monitoring, disaster response, climate tracking, etc.)
   - Difficulty tier (Junior / Steady / Expert)
   - Number of AI bots to fill missing roles

2. SPM assigns **6–10 roles** to human players and bots

3. Optional: SPM selects mission constraints (budget, schedule, risk tolerance)

### 3.2 Round Loop (Concurrent Play)

Each round (60–90 seconds):

1. **Game announces** current phase and round objective
2. **Each role receives a different MCQ** (tagged to subsystem + phase)
3. **Players submit answers** before timer ends
4. **Backend resolves**:
   - Correctness per player
   - Subsystem health changes
   - Team progress / risk changes
   - Anomaly/fault triggers
5. **3D Simulation updates** to show faults in real-time
6. **Mission Control summary** displays outcome
7. **Next round begins** or **gate evaluation** if phase complete

---

## 4) Roles (MVP: 6 Core, Expansion: 8–10)

### 4.1 MVP Core Roles (Recommended for First Release)

| Role | Subsystem | Key Responsibilities |
|------|-----------|---------------------|
| **SPM** (Space Project Manager) | Program | Role assignment, gate decisions, mitigation actions, schedule management |
| **SE Lead** (Systems Engineering) | Integration | Requirements, interfaces, verification planning, integration coordination |
| **EPS Lead** (Electrical Power System) | Power | Power budget, battery/solar/PDU, safe modes, brownout prevention |
| **ADCS Lead** (Attitude Determination & Control) | Pointing | Detumble, pointing accuracy, mode selection, sensor/actuator health |
| **Thermal/Structures Lead** | Thermal & Mechanical | Thermal margins, material selection, load analysis, TVAC readiness |
| **Comms/Ground Lead** | Communications | Link budget, ground passes, ops constraints, telemetry / commanding |

### 4.2 Optional Expansion Roles (v2+)

- **Payload/Remote Sensing Lead** – mission objectives, data collection, imaging modes
- **OBC/Flight Software Lead** – flight code, memory, compute resources, boot sequences
- **Mission Ops / Flight Dynamics Lead** – orbital mechanics, collision avoidance, maneuver planning
- **QA / Test & Verification Lead** – acceptance criteria, test procedures, compliance tracking

### 4.3 AI Bot Personalities

Bots fill missing roles and can be tuned:

- **Junior** (needs guidance, teaches leadership) – 40% correct answer rate
- **Steady** (reliable baseline) – 75% correct answer rate
- **Noisy** (occasionally wrong; increases teamwork demand) – 60% correct answer rate with personality quirks

---

## 5) Game Systems: Progress, Risk & Faults

### 5.1 Key Team Metrics (Shared Dashboard)

| Metric | Purpose | Range |
|--------|---------|-------|
| **Mission Progress (%)** | How many phases/gates completed | 0–100% |
| **Mission Risk (%)** | Aggregate fault severity across subsystems | 0–100% |
| **Schedule / Time Remaining** | Rounds remaining in current phase | T-rounds |
| **Mission Success Probability** | Derived from health + risk + schedule | 0–100% |
| **Fuel Level** | Cumulative score for leaderboards | 0–∞ |

### 5.2 Per-Subsystem State

For each subsystem (EPS, ADCS, Thermal, Comms, SE, Ops):

| Stat | Definition | Range |
|------|-----------|-------|
| **Health** | Overall subsystem readiness | 0–100 |
| **Failure Streak** | Consecutive wrong answers by role | 0–N |
| **Fault State** | Progression of degradation | None → Minor → Major → Critical |

### 5.3 Fault Progression Rules (Tunable)

| Outcome | Health Change | Streak Change | Effect |
|---------|---------------|---------------|--------|
| **Correct Answer** | +2 (capped at 100) | Reset to 0 | Confidence boost |
| **Wrong Answer** | −8 | +1 | Subsystem degrades |
| **Streak = 2** | — | — | **Minor Fault**: Warning icon; small performance penalty |
| **Streak = 3** | — | — | **Major Fault**: Blocks next gate unless resolved |
| **Health ≤ 20** | — | — | **Critical Fault**: High chance of mission failure |

### 5.4 3D Simulation Coupling (Signature Feature)

Wrong decisions trigger **visible, realistic faults** in the 3D CubeSat window:

**EPS Faults:**
- Undervoltage warning (red indicator)
- Payload shutdown cascade
- Reboot loop (flashing lights)
- Brownout during ground pass

**Thermal Faults:**
- Overheating zones (color gradient: yellow → orange → red)
- Component derating (performance drop in simulation)
- TVAC failure condition (ice crystal formation visualization)

**ADCS Faults:**
- Tumble (satellite spinning out of control)
- Pointing error (target tracking misalignment)
- Image blur (for imaging payload)
- Missed target acquisition

**Comms Faults:**
- Missed ground pass (icon dimming)
- Low SNR (signal noise visualization)
- Telemetry loss (data gaps in stream)

**Systems/Integration Faults:**
- Interface mismatch (disconnected lines in diagram)
- Test failures (red X marks)
- Schedule slip cascades (timeline compression)

---

## 6) Difficulty Scaling

Difficulty increases by expanding question scope and adding constraints:

### Progression Path

**Easy Mode:**
- Pure subsystem questions
- Long timers (90 seconds per round)
- Lenient gate thresholds (Health ≥ 50)

**Medium Mode:**
- Cross-subsystem dependencies introduced
- Standard timers (60 seconds)
- Moderate gate thresholds (Health ≥ 70, Risk < 30%)

**Hard Mode:**
- Heavy integration focus
- Short timers (45 seconds)
- Strict gate thresholds (Health ≥ 85, Risk < 10%)
- Anomaly cards increase frequency

### Question Tag Expansion

1. **Phase 1 (Design)**: Concept & requirement questions
2. **Phase 2 (AIT)**: Testing, verification, troubleshooting
3. **Phase 3+ (Launch/Ops)**: Integration, operations, anomaly response

---

## 7) Mission Phases & Gate Criteria

### Phase Structure

| Phase | Rounds | Goal | Gate Criteria |
|-------|--------|------|---------------|
| **1. Mission Definition & Requirements** | 5–8 | Capture need, define mission profile | All subsystems Health ≥ 50 |
| **2. Subsystem Design** | 8–10 | Trade studies, select architectures | All subsystems Health ≥ 70, no Major faults |
| **3. AIT (Assembly, Integration & Test)** | 10–15 | Build, integrate, verify | Verification checklist passed, Risk < 20% |
| **4. Launch & LEOP** | 5–8 | Ground pass, early orbit | No Critical faults, comms acquired |
| **5. Routine Operations** | 8–12 | Execute mission objectives | Schedule met, mission success > 80% |
| **6. Decommission** (optional) | 3–5 | Safe disposal, archive data | Data archived, no debris risk |

### Gate Decision Rules

**Design Ready Gate:**
- ✓ Each subsystem Health ≥ 70
- ✓ No Major or Critical faults
- ✓ Risk < 30%

**AIT Ready Gate:**
- ✓ Verification checklist 100% passed
- ✓ Risk < 20%
- ✓ No critical test failures

**Launch Gate:**
- ✓ No Critical faults
- ✓ Comms acquisition plan confirmed
- ✓ Weather / scheduling aligned

**Ops Success Gate:**
- ✓ Mission objectives completed on schedule
- ✓ Data quality > 90%
- ✓ Team achieved success probability > 80%

---

## 8) Question Content Design

### 8.1 Card Template (JSON Structure)

```json
{
  "id": "cubesat-eps-design-001",
  "roleOwner": "EPS Lead",
  "phase": "Design",
  "category": "Power Budget",
  "priority": "Core",
  "prompt": "Your satellite needs 50W peak power during imaging ops. Battery is 10 Ah at 7.4V nominal. How long can you sustain 50W on battery alone before hitting safe mode (25% DOD limit)?",
  "options": [
    { "letter": "A", "text": "~45 minutes", "isCorrect": false },
    { "letter": "B", "text": "~27 minutes", "isCorrect": true },
    { "letter": "C", "text": "~90 minutes", "isCorrect": false },
    { "letter": "D", "text": "~15 minutes", "isCorrect": false }
  ],
  "correctOption": "B",
  "outcomes": {
    "A": { "healthDelta": -8, "riskDelta": +5, "faultType": "brownout" },
    "B": { "healthDelta": +2, "riskDelta": -2, "faultType": null },
    "C": { "healthDelta": -6, "riskDelta": +3, "faultType": "over_discharge" },
    "D": { "healthDelta": -10, "riskDelta": +8, "faultType": "critical_undervolt" }
  },
  "explanation": "Battery capacity = 10 Ah × 7.4V = 74 Wh. 25% DOD = 18.5 Wh usable. At 50W, 18.5 Wh ÷ 50W = 0.37 hours ≈ 22 minutes. Add margin = ~27 minutes realistic.",
  "faultTriggers": {
    "brownout": "EPS voltage drops; payload resets",
    "over_discharge": "Battery deeply discharged; lifespan reduced",
    "critical_undervolt": "Comms blackout; mission lost"
  }
}
```

### 8.2 Content Principles

- **Prefer tradeoffs** (progress vs risk) over obvious trivia
- **Use realistic CubeSat constraints** (power/thermal/comms windows)
- **Keep prompts short** (2–4 lines) for timed gameplay
- **Always provide "why" feedback** after reveal
- **Africa-first scenarios**: procurement delays, customs clearance, local EO applications
- **Escalating difficulty**: Questions build on prior phase knowledge

### 8.3 Content Categories (per Subsystem)

**EPS:**
- Power budgets, battery chemistry, solar panel sizing, mode transitions, brownout scenarios

**ADCS:**
- Detumble strategies, pointing accuracy, gyro/sun-sensor selection, maneuver planning

**Thermal:**
- Heat dissipation, material selection, radiator sizing, TVAC prep

**Comms:**
- Link budget, antenna selection, modulation trade-offs, ground pass planning

**SE/Integration:**
- Interface compatibility, test planning, change management, risk assessment

**Ops:**
- Ground pass scheduling, command discipline, anomaly response trees

---

## 9) UX / UI Architecture

### 9.1 Two-Screen Model (Recommended)

#### A) Shared Mission Screen (Projector / Host Display)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Phase: DESIGN | Round: 7/10 | ⏱️ 60s    │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────────┐  ┌──────────────┐│
│  │   EPS Lead       │  │ 3D CubeSat   ││
│  │ Health: 75 █████░  │ Simulation   ││
│  │ Streak: 0        │  │ [ROTATING]   ││
│  │ Fault: None      │  │              ││
│  │                  │  └──────────────┘│
│  ├──────────────────┤                  │
│  │  ADCS Lead       │  Anomaly Feed:   │
│  │ Health: 82 ██████  ├─ EPS voltage   │
│  │ Streak: 0        │  │  dip detected │
│  │ Fault: None      │  └─ Recovery:    │
│  │                  │     Mode 2       │
│  └──────────────────┘                  │
│                                         │
│ Status: Waiting for Thermal, Comms     │
│ Team Health: 71% | Risk: 18% | Fuel: 65│
└─────────────────────────────────────────┘
```

**Components:**
- Phase bar + team metrics + countdown timer
- Role cards (one per subsystem) showing health/streak/fault state
- 3D CubeSat simulation + anomaly event feed
- Round status indicator ("Waiting for: Thermal, Comms…")
- Post-round outcome summary (hidden MCQ text)

#### B) Player Answer Screen (Individual Device)

**Layout:**
```
┌─────────────────────┐
│ 🛰️ EPS Lead          │
│ Health: 75/100      │
│ Streak: 0 | Role: ★ │
├─────────────────────┤
│                     │
│ Q: Your satellite   │
│ needs 50W peak.     │
│ Battery: 10 Ah,     │
│ 7.4V. How long on   │
│ battery @ 25% DOD?  │
│                     │
│ ☐ A) ~45 min        │
│ ☑ B) ~27 min        │
│ ☐ C) ~90 min        │
│ ☐ D) ~15 min        │
│                     │
│ [ SUBMIT ]          │
│                     │
├─────────────────────┤
│ Correct! +2 Health  │
│                     │
│ Why: Battery cap    │
│ = 74Wh. 25% DOD =   │
│ 18.5Wh. 18.5÷50W    │
│ = 22 min + margin   │
│ = 27 min.           │
└─────────────────────┘
```

**Components:**
- Role header + personal health/streak
- MCQ + 4 options + timer
- "Mitigation suggestion" hint button (optional)
- Post-submit: explanation + health delta feedback

### 9.2 UI/UX Principles

- **Consistency**: All role cards follow same template
- **Traffic lights**: Red/Yellow/Green for fault state only (not overloaded)
- **CubeSat accuracy**: Metrics are real (battery SOC, thermal margin, link margin, etc.)
- **Anomaly feed**: Real-time updates as decisions cascade
- **Clear feedback**: Every decision instantly shows health delta + visual change

---

## 10) MVP Scope

### MVP Goal

A playable demo where 5–10 players can:
- Join a multiplayer room
- Get assigned roles (mix of humans + AI bots)
- Answer concurrently for ~15–25 rounds across 3–4 phases
- See faults in the 3D simulation in real-time
- Complete AIT phase and reach launch decision
- Calculate final mission success probability

### MVP Feature Checklist

#### Core Gameplay
- ✓ Multiplayer room creation + role assignment (SPM controls)
- ✓ Concurrent MCQ delivery (role-specific, phase-tagged)
- ✓ Per-role health/streak/fault model
- ✓ Gate-based phase progression (Design → AIT → Launch)
- ✓ Real-time 3D fault visualization (simplified at first)

#### Content
- ✓ Basic question set (10–15 cards per MVP role, 6 roles)
- ✓ Covering Design → AIT → Launch phases
- ✓ Realistic CubeSat scenarios (power budget, thermal, comms, etc.)

#### AI Bots
- ✓ 3 difficulty levels (Junior, Steady, Noisy)
- ✓ Bot decision-making tied to role expertise

#### Presentation
- ✓ Shared mission screen (browser or projector-compatible)
- ✓ Player answer screens (mobile-first responsive web)
- ✓ Anomaly feed + 3D satellite visualization

### Nice-to-Have (v1.1+)

- Routine Ops + Decommission phases
- Adaptive difficulty personalization per player
- Post-game teamwork scorecard
- Scenario generator for custom missions
- Offline play mode
- Mobile app (React Native)
- Leaderboard integration

---

## 11) Technical Architecture Overview

### Stack (Recommended)

**Backend:**
- FastAPI (Python) – game engine, websocket multiplayer
- PostgreSQL – mission state, leaderboards, content library
- Redis – session/cache for real-time gameplay

**Frontend:**
- React / Next.js – shared mission screen + player UI
- Three.js – 3D CubeSat visualization
- Socket.io – real-time multiplayer sync

**AI Integration:**
- xAI Grok API – scenario generation, bot decision-making
- Vector DB (Pinecone / Weaviate) – semantic search for scenarios

**Infrastructure:**
- AWS / GCP – containerized deployment (Docker + Kubernetes)
- GitHub Actions – CI/CD pipeline

### Data Model (Simplified)

```sql
Teams → Missions → Rounds → PlayerAnswers
Players → Roles → RoleHealth
Questions → QuestionLibrary
Anomalies → EventLog
```

---

## 12) Content Strategy

### Q1 (MVP): Core 6 Roles
- ~60–80 questions total
- Cover Design → AIT → Launch
- Earth Observation mission theme (agriculture monitoring)

### Q2+ (v1.1): Expansion
- Optional roles (Payload, OBC, Flight Dynamics)
- New mission libraries (disaster response, maritime, climate)
- Advanced scenarios (contingency recovery, budget reallocation)

---

## 13) Open Decisions (To Finalize)

- [ ] Final MVP role set: 6 roles (current) vs 8–10 roles (full team)?
- [ ] First mission scenario: Agriculture drought monitoring or maritime navigation?
- [ ] 3D simulation fidelity: Simplified 3D model vs detailed CubeSat CAD?
- [ ] Gate strictness: Tuned for university cohorts or competitive esports-style teams?
- [ ] Leaderboard scope: Team-only or cross-team global rankings?
- [ ] Monetization: Free + IAP, freemium, or B2B enterprise licenses?

---

## 14) Success Metrics (Post-MVP)

| Metric | Target |
|--------|--------|
| Players per session | 5–10 (concurrent) |
| Session duration | 45–60 minutes |
| Player satisfaction | 4.5+ / 5 stars |
| Retention (7-day) | 60%+ |
| Learning outcome gain | Pre/post knowledge +20% |
| Mission success rate | 70–80% (balanced difficulty) |

---

## 15) Appendix A: CubeSat Dashboard Metrics

Real-time metrics displayed on shared mission screen:

| Metric | Unit | Normal Range | Alert Threshold |
|--------|------|--------------|-----------------|
| Battery SOC | % | 70–100 | < 25 |
| Power Margin | W | 2–10 | < 0 |
| Thermal Margin | °C to limit | 10–30 | < 5 |
| Pointing Error | deg | 0–2 | > 3 |
| Link Margin | dB | 3–10 | < 0 |
| Data Storage Used | % | 0–80 | > 90 |
| Next Ground Pass | T-mm:ss | 5–100 min | Imminent |

---

## 16) Appendix B: Glossary

| Term | Definition |
|------|-----------|
| **AIT** | Assembly, Integration & Test |
| **LEOP** | Launch and Early Orbit Phase |
| **ADCS** | Attitude Determination & Control System |
| **EPS** | Electrical Power System |
| **OBC** | On-Board Computer |
| **SPM** | Space Project Manager (player role) |
| **MCQ** | Multiple-Choice Question |
| **Fault** | Subsystem degradation state (Minor → Major → Critical) |
| **Gate** | Phase completion criterion (must meet health/risk thresholds) |
| **Fuel** | Cumulative team score for leaderboards |
| **Anomaly** | Visible fault event in 3D simulation |
| **Streak** | Consecutive wrong answers by a role |

---

## 17) Appendix C: Reference Implementation Timeline

**Weeks 1–3**: Backend game engine + DB schema  
**Weeks 4–6**: Frontend UI + player answer screens  
**Weeks 7–9**: 3D CubeSat simulation + anomaly triggers  
**Weeks 10–12**: AI bot integration + question library  
**Weeks 13–15**: Beta testing + scenario refinement  
**Weeks 16–19**: Deployment, Polish, Launch prep  

---

**Document Author**: HorbiX Product Team  
**Last Updated**: July 8, 2026  
**Next Review**: End of MVP Phase (Week 12)
