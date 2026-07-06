/* ============================================================================
   CompTIA AI Fundamentals  ::  contentData.js
   Course facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Course-Mechanics and Career-Guidance readers,
   and the textbook-dense domain reading content (AIFUND.reading[1..6],
   appended from content/domain1..6.js).

   This file loads first and establishes the global AIFUND namespace consumed
   by quizEngine.js and app.js.

   NOTE: CompTIA AI Fundamentals is a self-paced COURSE (15 modules), not a
   scaled proctored exam. There is no exam code, no 100–900 scaled score, and no
   published cost. Figures below are course-accurate; the mock is scored by
   percentage against an 80% mastery target.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.AIFUND = window.AIFUND || {};

AIFUND.exam = {
  code: "AI Fundamentals",           // no version code exists; the name doubles as the code
  name: "CompTIA AI Fundamentals",
  fullName: "CompTIA AI Fundamentals",
  vendor: "CompTIA",
  body: "CompTIA",
  format: "Course + final assessment",
  modules: 15,                       // official course modules (1.0–15.0)
  instructionalHours: "~53 hours",   // lesson-plan aggregate (52:45)
  assessmentQuestions: 170,          // total questions across course assessments
  minutes: 100,                      // full-length practice-mock time limit
  maxQuestions: 80,                  // full-length practice-mock length
  passing: 80,                       // MASTERY TARGET as a percentage (no official cut score exists)
  passPercent: 80,
  domains: 6,                        // the site's 6-domain study grouping of the 15 modules
  launched: "2025"
};

/* Per-domain metadata. The 15 official modules are grouped into 6 study domains.
   `weight` has no official source — it is derived from each domain's authored
   section share so the mock distributes sensibly. `short` is the dashboard card
   blurb (keep it ~20–30 words). */
AIFUND.domainMeta = [
  { id: 1, weight: 15, color: "d1", icon: "🧠", title: "AI & GenAI Foundations", sectionCount: 13,
    short: "What modern AI and generative AI actually are, how they differ from traditional software and search, and the major tools and models you meet every day.",
    objectives: [
      { id: "1.1", t: "Explain how AI already appears in everyday tools and workplaces" },
      { id: "1.2", t: "Define AI, machine learning, and generative AI and how they relate" },
      { id: "1.3", t: "Describe, at a conceptual level, how generative AI produces its output" },
      { id: "1.4", t: "Identify major AI tools, assistants, and models (ChatGPT, Gemini, Claude, Copilot)" },
      { id: "1.5", t: "Distinguish generative AI from traditional software and from web search" }
    ] },
  { id: 2, weight: 17, color: "d2", icon: "⚖", title: "Applying AI Appropriately & Responsibly", sectionCount: 15,
    short: "Judging which tasks fit AI and which do not, weighing low- versus high-risk use, and applying ethics, privacy, and security to everyday AI decisions.",
    objectives: [
      { id: "2.1", t: "Classify tasks as good or poor candidates for AI, including when AI should not be used" },
      { id: "2.2", t: "Distinguish lower-risk from higher-risk ways of using AI" },
      { id: "2.3", t: "Identify key AI risks: bias, hallucinations, privacy, and intellectual property" },
      { id: "2.4", t: "Analyze the ethical impact of AI use on individuals, communities, and society" },
      { id: "2.5", t: "Apply basic privacy and security practices, and recognize when disclosure and caution are required" }
    ] },
  { id: 3, weight: 19, color: "d3", icon: "💬", title: "Prompting, Context & Conversation", sectionCount: 16,
    short: "The core skill: writing clear role–task–context–format prompts, supplying safe and relevant context, and steering multi-turn conversations to better output.",
    objectives: [
      { id: "3.1", t: "Identify the components of an effective prompt" },
      { id: "3.2", t: "Construct role–task–context–format prompts and compare weak versus strong prompts" },
      { id: "3.3", t: "Define context files and select safe, relevant context sources" },
      { id: "3.4", t: "Add and manage context in AI tools while avoiding oversharing and context-window limits" },
      { id: "3.5", t: "Conduct multi-turn conversations, using follow-up prompts to refine, correct, and deepen output" },
      { id: "3.6", t: "Maintain focus and control across a sustained AI session" }
    ] },
  { id: 4, weight: 14, color: "d4", icon: "🔍", title: "Evaluating & Verifying AI Outputs", sectionCount: 12,
    short: "Spotting hallucinations, bias, and low-quality 'AI slop,' then verifying AI output for accuracy and fitness using a simple, repeatable checking workflow.",
    objectives: [
      { id: "4.1", t: "Identify common AI errors, hallucinations, and outdated information" },
      { id: "4.2", t: "Detect bias and low-quality content ('AI slop') in AI output" },
      { id: "4.3", t: "Evaluate AI output for accuracy, quality, and fitness for purpose" },
      { id: "4.4", t: "Select appropriate methods and sources to verify AI responses" },
      { id: "4.5", t: "Apply a step-by-step verification toolkit and workflow" }
    ] },
  { id: 5, weight: 17, color: "d5", icon: "✍", title: "Producing & Learning with AI", sectionCount: 15,
    short: "Using AI to brainstorm, draft, revise, and critique work; to learn and study with integrity; and to analyze scenarios while keeping human judgment in charge.",
    objectives: [
      { id: "5.1", t: "Use AI to overcome creative blocks and generate initial ideas" },
      { id: "5.2", t: "Draft and revise communications, shaping audience, tone, and format" },
      { id: "5.3", t: "Generate media safely and ethically, and use AI to critique your own work" },
      { id: "5.4", t: "Use AI as a tutor and study partner and create study aids, maintaining academic integrity" },
      { id: "5.5", t: "Use AI as a thought partner to analyze scenarios and data and evaluate suggested options" },
      { id: "5.6", t: "Communicate clearly how AI contributed to a decision or output" }
    ] },
  { id: 6, weight: 18, color: "d6", icon: "💼", title: "AI at Work: Automation, Transparency & Careers", sectionCount: 15,
    short: "Bringing AI into everyday workflows and automation with human-in-the-loop oversight, disclosing AI use transparently, and preparing for AI-shaped careers.",
    objectives: [
      { id: "6.1", t: "Identify everyday tasks suited to basic AI-enabled automation" },
      { id: "6.2", t: "Describe common AI-supported workflow patterns" },
      { id: "6.3", t: "Explain human-in-the-loop oversight for AI agents and automation" },
      { id: "6.4", t: "Determine when and how to disclose AI use and write clear AI-use statements" },
      { id: "6.5", t: "Recognize AI-aware team roles (prompter, verifier, editor) and explain AI to nonexperts" },
      { id: "6.6", t: "Recognize how AI is reshaping work, and apply AI ethically to career preparation" }
    ] }
];

/* The five performance-based decision formats. AI Fundamentals has no live sims —
   each PBQ is a graded, field-by-field judgment task. `domainColor` tints the badge. */
AIFUND.pbqFormats = [
  { id: 1, icon: "✍", domainColor: 3, obj: "3.1 / 3.2", badge: "PROMPT BUILD", title: "Prompt Construction (Role–Task–Context–Format)",
    desc: "Assemble an effective prompt field by field — role, task, context, and format/constraints — to hit a stated goal for a given audience.",
    long: "Each scenario gives you a goal and an audience. Build the prompt field by field: the <b>role</b> the AI should adopt, the <b>task</b> to perform, the <b>context</b> that grounds it, and the <b>format</b> and constraints for the output. Strong prompts are specific, scoped, and testable." },
  { id: 2, icon: "🔍", domainColor: 4, obj: "4.1 / 4.3", badge: "OUTPUT REVIEW", title: "AI Output Evaluation",
    desc: "Read a prompt and its AI output, flag the error type (hallucination, bias, outdated, AI slop), rate fitness for purpose, and choose the fix.",
    long: "You are the reviewer. Inspect the AI output against the prompt: identify the <b>error type</b> (fabricated fact, bias, outdated information, vague 'slop'), judge <b>fitness for purpose</b>, and select the correct <b>remediation</b> — reprompt, verify, edit, or reject." },
  { id: 3, icon: "✅", domainColor: 4, obj: "4.4 / 4.5", badge: "VERIFY", title: "Verification Workflow",
    desc: "Given an AI claim, choose and order the right verification steps and trusted sources to confirm or refute it before you rely on it.",
    long: "A claim needs checking. Select and sequence the <b>verification steps</b> — isolate the checkable claims, choose <b>authoritative sources</b>, cross-check, and decide whether to trust, revise, or discard — applying the verification toolkit methodically rather than accepting output at face value." },
  { id: 4, icon: "⚖", domainColor: 2, obj: "2.1 / 2.2 / 2.5", badge: "RESPONSIBLE USE", title: "Appropriate & Responsible-Use Decision",
    desc: "Risk-tier a scenario, decide whether and how AI should be used, and determine whether disclosure or extra caution is required.",
    long: "For each scenario decide: is this a <b>good or poor</b> candidate for AI? What is the <b>risk tier</b>? Should AI be used at all, and with what <b>privacy and security</b> guardrails? Is <b>disclosure</b> required? Balance the benefit against bias, privacy, and intellectual-property risk." },
  { id: 5, icon: "📎", domainColor: 3, obj: "3.3 / 3.4", badge: "CONTEXT", title: "Context & Safety Selection",
    desc: "Choose which files and sources are safe and relevant to attach as context — and which to withhold for privacy or oversharing reasons.",
    long: "A context workspace. For a given task, decide which <b>sources</b> to attach — relevant, authoritative, and safe — and which to <b>withhold</b> because they contain sensitive data, exceed the context window, or would mislead the model. Justify each include and exclude." }
];

/* Curated free study resources. External links point at stable public pages. */
AIFUND.resources = [
  { icon: "📄", title: "Official CompTIA AI Fundamentals", host: "comptia.org",
    url: "https://www.comptia.org/",
    desc: "The authoritative course page — the modules, objectives, and what the credential covers. Use the official outline as your master checklist." },
  { icon: "🎓", title: "Elements of AI — Free Online Course", host: "elementsofai.com",
    url: "https://www.elementsofai.com/",
    desc: "A free, non-technical introduction to what AI is and can do, from the University of Helsinki and MinnaLearn. Excellent grounding for the Foundations domain." },
  { icon: "✍", title: "Learn Prompting — Free, Open-Source Guide", host: "learnprompting.org",
    url: "https://learnprompting.org/",
    desc: "A practical, vendor-neutral guide to writing prompts — structure, roles, and iteration — that reinforces the Prompting, Context & Conversation domain." },
  { icon: "🧭", title: "Anthropic — Prompt Engineering Overview", host: "docs.anthropic.com",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    desc: "Clear guidance on structuring prompts (role, task, context, format) and refining output through conversation — cross-reference for Domains 3 and 5." },
  { icon: "🛡", title: "NIST AI Risk Management Framework", host: "nist.gov",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    desc: "The authoritative reference for AI risk, trustworthiness, bias, and governance — grounding for the responsible-use and verification domains." },
  { icon: "🔎", title: "Google — Fact Check Tools", host: "toolbox.google.com",
    url: "https://toolbox.google.com/factcheck/explorer",
    desc: "A searchable index of published fact-checks. The verification habits it encourages transfer directly to checking AI-generated claims (Domain 4)." }
];

/* ---- Reader: Course Mechanics card ---- */
AIFUND.examMechanics = [
  { heading: "How the course is structured", body:
    "<p><strong>CompTIA AI Fundamentals</strong> is a self-paced course built from <strong>15 modules</strong> (1.0–15.0) totaling roughly <strong>53 hours</strong> of instruction. Each module breaks into short <strong>lessons</strong>, and each lesson into <strong>text topics</strong>, videos, and hands-on activities. This platform reorganizes those 15 modules into <strong>6 study domains</strong> so related skills sit together, but the underlying learning outcomes are identical to the official course.</p>" +
    "<p>Unlike a proctored certification exam, AI Fundamentals has <strong>no exam code, no time-boxed sitting, and no 100–900 scaled score</strong>. You progress through the material, check yourself with quizzes, and finish with a capstone assessment. Treat it as building a durable, transferable skill set rather than cramming for a single test day.</p>" +
    "<div class='callout exam'><div class='lbl'>Study tip</div>The skills compound. Foundations (Domain 1) makes the prompting work (Domain 3) click; verification (Domain 4) makes everything you produce (Domain 5) trustworthy. Work the domains in order the first time through.</div>" },
  { heading: "Assessments and scoring on this platform", body:
    "<p>The official course includes short <strong>lesson reviews</strong>, <strong>module quizzes</strong> (about 20 questions each), a mid-course <strong>checkpoint</strong>, and a <strong>final assessment</strong> — roughly <strong>170 assessment questions</strong> in all, plus a large practice bank. This platform mirrors that with a <strong>600-question bank</strong> (100 per domain), spaced-repetition flashcards, performance-based decisions, and a full-length practice mock.</p>" +
    "<p>Because the course has no official scaled score, this platform scores by <strong>percentage against an 80% mastery target</strong>. The mock draws <strong>80 questions</strong> across the six domains with a <strong>100-minute</strong> suggested limit; anything at or above <strong>80%</strong> signals you are ready to move on. There is <strong>no penalty for guessing</strong>, so never leave an item blank.</p>" +
    "<blockquote>The 80% mastery line is a learning target set by this study platform, not an official CompTIA passing score — no such cut score exists for AI Fundamentals. Use it as a relative readiness signal.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>Questions here reward <strong>judgment</strong>, not trivia. Many items describe a realistic situation and ask for the <strong>best</strong>, <strong>safest</strong>, or <strong>most appropriate</strong> way to use AI. Read the <strong>last sentence first</strong> — it usually contains the actual ask ('which prompt is <em>most</em> effective…', 'what should you do <em>first</em>…'). Words like <strong>first</strong>, <strong>best</strong>, <strong>most</strong>, and <strong>least</strong> are decisive.</p>" +
    "<ul><li><strong>Scenario</strong> items bury the relevant detail in a short paragraph — identify the goal, the audience, and the risk before looking at the options.</li><li><strong>Performance-based</strong> tasks reward methodical work; complete every field you can, since partial credit is available.</li><li><strong>Responsible-use</strong> items often hinge on privacy, disclosure, or verification — when in doubt, favor the more cautious, more transparent option.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use a <strong>flag-and-review</strong> pass on the mock. Answer everything you know cold, flag the rest, then spend remaining minutes only on flagged items so you never run out of time with easy points unanswered.</div>" },
  { heading: "Who the course is for", body:
    "<p>AI Fundamentals is written for <strong>learners and professionals in any field</strong> — not just IT. It assumes <strong>no coding, no math, and no prior AI background</strong>. If you can use a web browser and a word processor, you can take this course. The goal is practical <em>AI fluency</em>: using tools like ChatGPT, Gemini, Claude, and Copilot confidently, responsibly, and transparently in academic and workplace tasks.</p>" +
    "<p>Because it is foundational, it pairs naturally with almost any major or role. A nurse, an accountant, a marketing student, and a help-desk technician all benefit from the same core skills — write a good prompt, check the output, and disclose AI use appropriately.</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>You are always the human in the loop. AI drafts, suggests, and speeds you up; <strong>you</strong> verify, decide, and take responsibility for the result. Keep that division of labor and the rest of the course follows.</div>" },
  { heading: "Getting the most from the practice", body:
    "<p>Reading alone will not build the skill — AI fluency is a <em>doing</em> skill. As you study each domain, open a real AI tool in a second window and try the ideas immediately: rewrite a weak prompt, ask a follow-up to refine an answer, or verify a claim the model made. The reading gives you the vocabulary and the judgment; the practice makes it stick.</p>" +
    "<div class='callout exam'><div class='lbl'>Habit to build</div>For anything that matters, run the loop: <strong>prompt → read critically → verify → edit → disclose</strong>. Every domain in this course is one part of that single loop.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
AIFUND.careerGuidance = [
  { heading: "Where AI Fundamentals sits", body:
    "<p><strong>AI Fundamentals is a foundational, vendor-neutral AI-literacy credential.</strong> It is not a cybersecurity or engineering certification — it sits at the entry of the 'Foundations' track and is designed to be one of the <em>first</em> things any learner does, in any discipline, before AI becomes central to their coursework or job. Its value is breadth and transferability: it proves you can use generative AI effectively, responsibly, and transparently.</p>" +
    "<p>For employers and instructors, AI Fundamentals is shorthand for 'this person can use AI tools well and safely — they know how to prompt, when to be skeptical, and when to disclose.' That baseline is quickly becoming an expectation rather than a bonus.</p>" },
  { heading: "Why AI literacy matters across every industry", body:
    "<p>AI is reshaping work far beyond tech. Marketing, healthcare admin, education, finance, logistics, and the trades are all absorbing AI into everyday tools. What changes is rarely the <em>whole</em> job — it is the <strong>tasks</strong>: drafting, summarizing, researching, and first-pass analysis increasingly start with an AI assistant and finish with a human.</p>" +
    "<p>That shift creates new shared responsibilities on almost every team. Someone has to write the prompts, someone has to check the output, and someone has to own the final result. AI Fundamentals prepares you to do all three competently.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>The people who thrive with AI are not the ones who use it the most — they are the ones who use it <strong>well</strong>: good prompts, hard verification, honest disclosure. That is exactly what this course builds.</div>" },
  { heading: "Roles and skills AI Fundamentals supports", body:
    "<p>Because it is field-agnostic, AI Fundamentals strengthens almost any early-career profile. Concretely, it helps you:</p>" +
    "<ul>" +
    "<li><strong>Act as the 'prompter'</strong> on a team — turning a goal into a clear, well-scoped request an AI tool can actually deliver on.</li>" +
    "<li><strong>Act as the 'verifier' and 'editor'</strong> — catching hallucinations and bias, checking facts, and polishing AI drafts into trustworthy work.</li>" +
    "<li><strong>Use AI as a study and productivity partner</strong> — brainstorming, drafting, learning, and analyzing while staying inside academic-integrity and workplace rules.</li>" +
    "<li><strong>Read job postings for AI-related skills</strong> and speak to them credibly in resumes, cover letters, and interviews.</li>" +
    "<li><strong>Bring AI into everyday workflows safely</strong> — with human-in-the-loop oversight and appropriate disclosure.</li>" +
    "</ul>" },
  { heading: "Building the path beyond AI Fundamentals", body:
    "<p>Treat AI Fundamentals as a launch point. The most valuable next step is usually not another AI course but <strong>applying these skills inside your own field</strong> — becoming the person on your team who uses AI thoughtfully. From there, learners with an IT or security interest can move toward credentials like <strong>CompTIA AI Essentials</strong>, security-focused AI tracks such as <strong>SecAI+</strong>, or the broader CompTIA stack (A+, Network+, Security+).</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Keep a small <strong>AI portfolio</strong>: a few before/after prompts, a verification you caught, and a short AI-use disclosure you wrote. Concrete examples of <em>responsible</em> AI use stand out far more than simply claiming you 'know AI.'</div>" }
];

/* Reading content (AIFUND.reading[1..6]) is appended from content/domain1..6.js. */
AIFUND.reading = AIFUND.reading || {};
