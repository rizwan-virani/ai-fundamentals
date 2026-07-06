# CompTIA AI Fundamentals

**A comprehensive, open-source CompTIA AI Fundamentals study platform.**
In-depth coverage of all 6 exam domains, a 600-question bank with full per-distractor rationale, 600 Rapid Recall flashcards, 30 performance-based decision simulations, a drag-and-drop taxonomy classifier, 20 hands-on practice labs, and a full-length timed mock.

> Designed and authored by **Professor Rizwan Virani.**

---

## What this is

An academic preparation resource that builds practical **AI literacy** — using generative AI tools like ChatGPT, Gemini, Claude, and Copilot effectively, responsibly, and transparently. It tests your understanding **dynamically** with original, randomized questions and hands-on decision scenarios, covers every objective in the official CompTIA AI Fundamentals course outline, and is completely free, self-paced, and offline-capable once loaded.

## What this is not

- **Not** a machine-learning, data-science, or AI-engineering course. This builds practical AI **literacy** for using AI tools in any field — no coding and no math.
- **Not** a source of actual or copyrighted CompTIA content, "brain dumps," or leaked items. **Every question in this repository is original.**
- **Not** an official CompTIA product, and not affiliated with, endorsed by, or sponsored by CompTIA.
- **Not** a guarantee of course completion. It is a practice tool — the material rewards judgment, not memorization.

---

## Course at a glance

| | |
| --- | --- |
| **Credential** | CompTIA AI Fundamentals |
| **Format** | Self-paced course + final assessment |
| **Modules** | 15 (grouped into 6 study domains) |
| **Instructional time** | ~53 hours |
| **Assessment** | ~170 course-assessment questions incl. a final assessment |
| **Scoring** | Mastery-based — no scaled score (this platform targets 80%) |

## The 6 study domains

The 15 official course modules are grouped into six coherent study domains. Domain weights are derived from content share (the course publishes no official weighting) and are used only to distribute the practice mock.

| # | Domain | Weight | Source modules |
| --- | --- | --- | --- |
| 1 | AI & GenAI Foundations | 15% | 1–2 |
| 2 | Applying AI Appropriately & Responsibly | 17% | 3–4 |
| 3 | Prompting, Context & Conversation | 19% | 5, 6, 8 |
| 4 | Evaluating & Verifying AI Outputs | 14% | 7 |
| 5 | Producing & Learning with AI | 17% | 9, 10, 11 |
| 6 | AI at Work: Automation, Transparency & Careers | 18% | 12–15 |

## Features

| Area | What you get |
| --- | --- |
| **Domain study modules** | 6 rigorous reading interfaces, one per study domain, with clear explanations, comparison tables, tips, and real-world scenarios. **~86 sections** mapped to the official course outline, lazy-loaded per domain. |
| **Rapid Recall flashcards** | **600 cards** with a **Leitner spaced-repetition** scheduler, per-domain decks, a Master Term Drill, and an All Due Today review. |
| **Practice quizzes** | A bank of **600 original questions**, each graded with a full rationale that explains the correct answer **and why every individual distractor is wrong**. Domain, quick, adaptive, and missed-question modes. |
| **PBQ simulators** | **30 performance-based decision scenarios** across 5 formats — prompt construction, output evaluation, verification workflow, responsible-use, and context selection — plus a drag-and-drop **taxonomy mapping** engine. |
| **Hands-on labs** | **20 interactive AI-practice labs** with a full-screen console, guided activities, decision panels, and a progress log. |
| **Practice mock** | A full-length, timed practice assessment (80 questions / 100 minutes) across the six domains, with a countdown timer, flagging, and a domain-by-domain scoring dashboard, scored against an 80% mastery target. |
| **Supplemental hub** | An Industry Certification Explorer and a curated external-resources library. |
| **Theme** | A global light/dark toggle with all state saved to your browser. |

## How to use it

1. **Read the Course Mechanics & Career Guidance cards first** to understand how the course is structured, scored, and where AI Fundamentals fits.
2. **Deep-dive the Domain Study cards** — one rigorous reading interface per domain.
3. **Lock in terms with Rapid Recall Flashcards**, graded on a spaced-repetition scheduler.
4. **Validate with the Domain Quizzes**, drawn at random and graded with full rationale.
5. **Train practical skills in the PBQ Simulators** and the taxonomy mapping engine.
6. **Get hands-on in the Labs** — flip a card to review objectives, then launch the sandbox console.
7. **Benchmark readiness with the full-length, timed practice mock.**

## Run it locally

The site is fully static — no build step. Serve the folder with any static web server:

```bash
# from the repository root:
python -m http.server 8124
# then open http://localhost:8124
```

Best experienced on a desktop or laptop in Google Chrome; the labs, terminal simulations, and drag-and-drop activities require a mouse and keyboard.

## Project structure

```
.
├── index.html                  # shell: hero, onboarding, dashboard mount, script order
├── LICENSE                     # dual license (MIT code + CC BY-NC-SA content)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css          # theme + study-platform components, dark & light
    └── js/
        ├── contentData.js      # course facts, domain metadata, readers
        ├── quizEngine.js       # assessment + PBQ engines (question data in content/)
        ├── flashEngine.js      # spaced-repetition flashcard engine
        ├── app.js              # router, theme manager, analytics, reading UI
        └── content/            # lazy-loaded + eager content modules
            ├── domain1..6.js      # dense reading per domain
            ├── quiz1..6.js        # question banks per domain
            ├── flash1..6.js       # flashcard decks
            ├── pbqs.js            # performance-based decision scenarios
            ├── labs.js            # hands-on AI-practice labs
            ├── taxonomy.js        # drag-and-drop classification
            └── certs.js           # Industry Certification Explorer catalog
```

## License

This project is **dual-licensed**:

- The **software framework and interface code** are licensed under the **MIT License**.
- The **educational curriculum content** (study text modules, question banks, flashcards, and lab scenarios) is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

See the [LICENSE](LICENSE) file for full terms.

---

*This is a personal educational resource. All views and content are entirely my own and do not represent the views, positions, endorsements, or policies of my employer or of any other person, organization, or institution. "CompTIA" and "AI Fundamentals" are trademarks of CompTIA, Inc., used here only to identify the course this resource helps you prepare for. All practice questions are original. Released for academic use.*
