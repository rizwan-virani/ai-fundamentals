window.TAXONOMY = [
  {
    title: "Good vs. Poor Fit for AI",
    subtitle: "Sort each task by whether a general-purpose AI assistant is a good tool for the job.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "good", label: "Good Fit" },
      { id: "poor", label: "Poor Fit" }
    ],
    items: [
      { text: "Draft a first version of a routine email", cat: "good" },
      { text: "Summarize a long meeting transcript", cat: "good" },
      { text: "Brainstorm names for a new product", cat: "good" },
      { text: "Rewrite a paragraph in a friendlier tone", cat: "good" },
      { text: "Turn rough notes into a bulleted outline", cat: "good" },
      { text: "Suggest interview questions for a role", cat: "good" },
      { text: "Explain a dense policy in plain language", cat: "good" },
      { text: "Translate a message into another language", cat: "good" },
      { text: "Confirm today's exact stock price", cat: "poor" },
      { text: "Make the final call on firing an employee", cat: "poor" },
      { text: "Diagnose a patient without a clinician", cat: "poor" },
      { text: "Cite a specific court case as legal fact", cat: "poor" },
      { text: "Do precise multi-step accounting math", cat: "poor" },
      { text: "Approve a loan with no human review", cat: "poor" },
      { text: "Report live news happening right now", cat: "poor" }
    ]
  },
  {
    title: "Low-Risk vs. High-Risk AI Use",
    subtitle: "Classify each way of using AI at work by the level of harm a mistake could cause.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "low", label: "Low Risk" },
      { id: "high", label: "High Risk" }
    ],
    items: [
      { text: "Rephrasing an internal team message", cat: "low" },
      { text: "Generating ideas for a blog post", cat: "low" },
      { text: "Drafting a personal to-do list", cat: "low" },
      { text: "Formatting notes into a table", cat: "low" },
      { text: "Suggesting a subject line for a newsletter", cat: "low" },
      { text: "Explaining a general concept to yourself", cat: "low" },
      { text: "Outlining a practice presentation", cat: "low" },
      { text: "Publishing medical advice unchecked", cat: "high" },
      { text: "Sending legal terms to a client unreviewed", cat: "high" },
      { text: "Auto-deciding who gets hired", cat: "high" },
      { text: "Posting financial guidance as fact", cat: "high" },
      { text: "Pasting customer records into a public tool", cat: "high" },
      { text: "Letting AI approve safety inspections", cat: "high" },
      { text: "Releasing product code with no human check", cat: "high" }
    ]
  },
  {
    title: "Prompt Components (Role-Task-Context-Format)",
    subtitle: "Sort each snippet by which part of a well-structured prompt it belongs to.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "role", label: "Role" },
      { id: "task", label: "Task" },
      { id: "context", label: "Context" },
      { id: "format", label: "Format" }
    ],
    items: [
      { text: "Act as an experienced HR manager", cat: "role" },
      { text: "You are a friendly customer support agent", cat: "role" },
      { text: "Respond as a patient science teacher", cat: "role" },
      { text: "Take the role of a marketing copywriter", cat: "role" },
      { text: "Write a summary of the report below", cat: "task" },
      { text: "Draft a reply declining the meeting", cat: "task" },
      { text: "List the pros and cons of this plan", cat: "task" },
      { text: "Rewrite this to sound more professional", cat: "task" },
      { text: "The audience is first-time customers", cat: "context" },
      { text: "This is for a nonprofit with a small budget", cat: "context" },
      { text: "Our brand voice is warm and casual", cat: "context" },
      { text: "The reader has no technical background", cat: "context" },
      { text: "Give the answer as three bullet points", cat: "format" },
      { text: "Keep it under 100 words", cat: "format" },
      { text: "Return the result as a table", cat: "format" },
      { text: "Use a numbered step-by-step list", cat: "format" }
    ]
  },
  {
    title: "Types of AI Output Error",
    subtitle: "Match each flawed output to the kind of AI error it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "hallucination", label: "Hallucination" },
      { id: "bias", label: "Bias" },
      { id: "outdated", label: "Outdated" },
      { id: "slop", label: "AI Slop" }
    ],
    items: [
      { text: "Invents a book title that does not exist", cat: "hallucination" },
      { text: "Cites a fake study with a made-up author", cat: "hallucination" },
      { text: "Confidently states a false statistic", cat: "hallucination" },
      { text: "Quotes a person who never said it", cat: "hallucination" },
      { text: "Assumes a nurse must be a woman", cat: "bias" },
      { text: "Favors one group in hiring suggestions", cat: "bias" },
      { text: "Uses a stereotype about an age group", cat: "bias" },
      { text: "Skews examples toward one culture only", cat: "bias" },
      { text: "Names a CEO who left the company last year", cat: "outdated" },
      { text: "Misses a law that changed recently", cat: "outdated" },
      { text: "Refers to a product version now retired", cat: "outdated" },
      { text: "Unaware of an event after its training cutoff", cat: "outdated" },
      { text: "Padded filler that says nothing new", cat: "slop" },
      { text: "Generic vague text with no real substance", cat: "slop" },
      { text: "Repetitive fluff to hit a word count", cat: "slop" },
      { text: "Bland listicle with no useful detail", cat: "slop" }
    ]
  },
  {
    title: "Safe vs. Unsafe Context to Share",
    subtitle: "Decide which kinds of information are safe to paste into a public AI tool.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "safe", label: "Safe to Share" },
      { id: "noshare", label: "Do Not Share" }
    ],
    items: [
      { text: "A published press release", cat: "safe" },
      { text: "Public marketing copy from your website", cat: "safe" },
      { text: "A generic sample outline you wrote", cat: "safe" },
      { text: "A blog draft with no private data", cat: "safe" },
      { text: "Publicly available product descriptions", cat: "safe" },
      { text: "A fictional example with made-up names", cat: "safe" },
      { text: "General questions about a concept", cat: "safe" },
      { text: "Customer names and email addresses", cat: "noshare" },
      { text: "Employee Social Security numbers", cat: "noshare" },
      { text: "Passwords or API keys", cat: "noshare" },
      { text: "Confidential financial statements", cat: "noshare" },
      { text: "Patient health records", cat: "noshare" },
      { text: "Unreleased trade secrets", cat: "noshare" },
      { text: "A signed contract with private terms", cat: "noshare" }
    ]
  },
  {
    title: "AI-Aware Team Roles",
    subtitle: "Sort each responsibility by which role on an AI-aware team owns it.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "prompter", label: "Prompter" },
      { id: "verifier", label: "Verifier" },
      { id: "editor", label: "Editor" }
    ],
    items: [
      { text: "Writes a clear, well-structured prompt", cat: "prompter" },
      { text: "Adds role and context to the request", cat: "prompter" },
      { text: "Iterates on wording to improve output", cat: "prompter" },
      { text: "Chooses the right task for the AI", cat: "prompter" },
      { text: "Supplies examples of the desired result", cat: "prompter" },
      { text: "Fact-checks every claim against sources", cat: "verifier" },
      { text: "Confirms statistics are accurate", cat: "verifier" },
      { text: "Flags anything that looks hallucinated", cat: "verifier" },
      { text: "Checks quotes and citations are real", cat: "verifier" },
      { text: "Validates the output before it ships", cat: "verifier" },
      { text: "Polishes tone to match the brand voice", cat: "editor" },
      { text: "Tightens wording and cuts filler", cat: "editor" },
      { text: "Fixes grammar and formatting", cat: "editor" },
      { text: "Adapts the draft for the audience", cat: "editor" },
      { text: "Adds the human touch and final judgment", cat: "editor" }
    ]
  },
  {
    title: "Disclosure Required vs. Not Required",
    subtitle: "Judge whether each way of using AI should be disclosed to others.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "disclose", label: "Disclose" },
      { id: "nodisclose", label: "No Disclosure Needed" }
    ],
    items: [
      { text: "AI wrote most of a published article", cat: "disclose" },
      { text: "An image in an ad was AI-generated", cat: "disclose" },
      { text: "A student submitted AI-written essay text", cat: "disclose" },
      { text: "AI drafted an official company statement", cat: "disclose" },
      { text: "A chatbot, not a person, is answering", cat: "disclose" },
      { text: "AI generated the voice in a video", cat: "disclose" },
      { text: "Research findings were produced by AI", cat: "disclose" },
      { text: "AI helped brainstorm ideas you then wrote", cat: "nodisclose" },
      { text: "You used AI to fix your own grammar", cat: "nodisclose" },
      { text: "AI summarized notes only for yourself", cat: "nodisclose" },
      { text: "Spellcheck-style edits on your draft", cat: "nodisclose" },
      { text: "AI suggested a synonym you chose to use", cat: "nodisclose" },
      { text: "You asked AI to explain a topic privately", cat: "nodisclose" },
      { text: "AI reformatted your list into a table", cat: "nodisclose" }
    ]
  }
];
