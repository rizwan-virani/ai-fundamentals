window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "FOUNDATIONS",
    "title": "What AI Can and Cannot Do",
    "desc": "Build an accurate mental model of generative AI: sort tasks into good fits and poor fits, and tell apart the everyday AI terms people mix up. You classify real requests and probe the assistant's own boundaries so your expectations match reality.",
    "objectives": [
      "Distinguish tasks generative AI does well from tasks it does poorly.",
      "Tell apart AI, machine learning, and generative AI in plain language.",
      "Recognize that a chatbot predicts likely text rather than looking up facts."
    ],
    "console": {
      "host": "ai-lab-foundations",
      "boot": [
        "[SYS] AI literacy sandbox online.",
        "[SYS] Assistant model loaded, no live account required."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the task a chatbot is well suited to"
        },
        {
          "id": "t2",
          "label": "Identify what a language model actually does under the hood"
        },
        {
          "id": "t3",
          "label": "Ask the assistant to describe its own limits"
        },
        {
          "id": "t4",
          "label": "List broad categories of AI capability"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Task a text assistant handles well",
          "options": [
            "Reporting today's exact stock price",
            "Rewriting a paragraph in a friendlier tone",
            "Guaranteeing a legally binding contract",
            "Counting site visitors in real time"
          ],
          "correct": "Rewriting a paragraph in a friendlier tone",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "What a language model does to answer you",
          "options": [
            "Searches a database of verified facts",
            "Predicts the most likely next words",
            "Runs a calculator for every reply",
            "Copies text from a fixed manual"
          ],
          "correct": "Predicts the most likely next words",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ASK ABOUT LIMITS",
        "placeholder": "What kinds of questions should I double-check your answers on?",
        "button": "Ask",
        "response": "[AI] I can draft, summarize, and brainstorm quickly.\n[AI] I can be confidently wrong on facts, math, and recent events.\n[AI] Verify anything important against a trusted source.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list capabilities",
          "out": "[AI] Generate text\n[AI] Summarize and rephrase\n[AI] Translate and explain\n[AI] Brainstorm and outline",
          "task": "t4"
        },
        {
          "cmd": "define terms",
          "out": "[AI] AI = broad field, ML = learns from data, GenAI = creates new content."
        },
        {
          "cmd": "show status",
          "out": "Foundations sandbox nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "FOUNDATIONS",
    "title": "How a Chatbot Turns Words Into Answers",
    "desc": "Peek behind the chat window to see how your message becomes a reply: tokens, context, and the reason two identical prompts can give different wording. You inspect how the assistant reads input and why it sometimes sounds sure of a wrong answer.",
    "objectives": [
      "Explain that models read text as tokens and predict a continuation.",
      "Describe why responses can vary and are not looked-up records.",
      "Connect the prediction process to why hallucinations happen."
    ],
    "console": {
      "host": "ai-lab-howitworks",
      "boot": [
        "[SYS] Model internals explainer online.",
        "[SYS] Tokenizer and prediction demo loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the unit a model reads text in"
        },
        {
          "id": "t2",
          "label": "Explain why the same prompt can give different wording"
        },
        {
          "id": "t3",
          "label": "Run a sample prompt through the tokenizer"
        },
        {
          "id": "t4",
          "label": "Show why a confident answer can still be wrong"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Unit a language model reads text in",
          "options": [
            "Whole documents at once",
            "Tokens (word pieces)",
            "Pixels",
            "Database rows"
          ],
          "correct": "Tokens (word pieces)",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Why two identical prompts can differ",
          "options": [
            "The model looks up a new fact each time",
            "It samples among likely next words",
            "The internet changed the answer",
            "It never actually differs"
          ],
          "correct": "It samples among likely next words",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "TOKENIZE PROMPT",
        "placeholder": "Summarize this report for my manager",
        "button": "Tokenize",
        "response": "[TOK] Input split into 8 tokens.\n[TOK] Model predicts a continuation token by token.\n[TOK] No lookup table is consulted, only learned patterns.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "explain hallucination",
          "out": "[AI] The model always produces fluent text.\n[AI] When patterns point the wrong way, it states false info confidently.\n[AI] Fluency is not the same as accuracy.",
          "task": "t4"
        },
        {
          "cmd": "show context-window",
          "out": "[AI] Only text inside the current context influences the reply."
        },
        {
          "cmd": "show status",
          "out": "Explainer nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "RESPONSIBLE USE",
    "title": "Keep Private Data Out of Prompts",
    "desc": "Practice safe input hygiene: decide what is fine to paste into a public AI tool and what must be removed or kept out. You screen sample text for sensitive details and rewrite a risky prompt into a safe one.",
    "objectives": [
      "Identify sensitive data that should not be pasted into public AI tools.",
      "Redact or generalize information before sending it.",
      "Explain why prompts may be retained or used for training."
    ],
    "console": {
      "host": "ai-lab-privacy",
      "boot": [
        "[SYS] Privacy screening console online.",
        "[SYS] Sample prompts loaded for review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Spot the detail that should not go in a public prompt"
        },
        {
          "id": "t2",
          "label": "Choose the safest way to include needed context"
        },
        {
          "id": "t3",
          "label": "Redact a risky prompt into a safe version"
        },
        {
          "id": "t4",
          "label": "Review what a public tool may do with your input"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Item that should NOT be pasted into a public chatbot",
          "options": [
            "A generic question about grammar",
            "A customer's full name and account number",
            "A made-up example sentence",
            "A public news headline"
          ],
          "correct": "A customer's full name and account number",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Safest way to give the model needed context",
          "options": [
            "Paste the whole confidential file",
            "Replace real names and IDs with placeholders",
            "Include passwords for completeness",
            "Attach the client's contract unedited"
          ],
          "correct": "Replace real names and IDs with placeholders",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REDACT PROMPT",
        "placeholder": "Draft a reply to John Ramirez, SSN 123-45-6789, about his overdue invoice",
        "button": "Redact",
        "response": "[PRIV] Personal identifiers detected: name, SSN.\n[PRIV] Safe rewrite: Draft a reply to [CUSTOMER] about an overdue invoice.\n[PRIV] Same task, no sensitive data exposed.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show data-handling",
          "out": "[PRIV] Public tools may log prompts.\n[PRIV] Inputs can be reviewed or used to improve models.\n[PRIV] Assume anything pasted could be seen by others.",
          "task": "t4"
        },
        {
          "cmd": "list sensitive-types",
          "out": "[PRIV] Names, IDs, health, financial, credentials, trade secrets."
        },
        {
          "cmd": "show status",
          "out": "Privacy console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "RESPONSIBLE USE",
    "title": "Spot Bias and Unfair Output",
    "desc": "Learn to notice when AI output reflects skewed data or stereotypes, and what to do about it. You review generated text for bias, pick the fairer alternative, and flag output that needs a human check before use.",
    "objectives": [
      "Recognize that models can reproduce bias present in training data.",
      "Identify stereotyped or unfair phrasing in AI output.",
      "Decide when output needs human review before it is used."
    ],
    "console": {
      "host": "ai-lab-bias",
      "boot": [
        "[SYS] Fairness review console online.",
        "[SYS] Sample generated passages loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify where AI bias originates"
        },
        {
          "id": "t2",
          "label": "Pick the fairer version of a job description"
        },
        {
          "id": "t3",
          "label": "Submit a passage for a bias review"
        },
        {
          "id": "t4",
          "label": "Decide the right response to biased output"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Most common source of AI bias",
          "options": [
            "Patterns learned from skewed training data",
            "The user's internet speed",
            "The color of the interface",
            "The length of the prompt"
          ],
          "correct": "Patterns learned from skewed training data",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Fairer phrasing for a job posting",
          "options": [
            "We want a young, energetic salesman",
            "We seek a motivated sales professional",
            "Ideal for guys who love a challenge",
            "Perfect for recent grads only"
          ],
          "correct": "We seek a motivated sales professional",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "BIAS REVIEW",
        "placeholder": "Nurses are naturally caring women who put patients first",
        "button": "Review",
        "response": "[BIAS] Gender stereotype detected: nurses assumed female.\n[BIAS] Neutral rewrite: Nurses provide attentive, patient-centered care.\n[BIAS] Recommend human review before publishing.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show response-options",
          "out": "[FAIR] Edit the wording to remove the assumption.\n[FAIR] Re-prompt for a neutral version.\n[FAIR] Escalate to a human for sensitive uses.",
          "task": "t4"
        },
        {
          "cmd": "list bias-types",
          "out": "[FAIR] Gender, age, cultural, socioeconomic, ability."
        },
        {
          "cmd": "show status",
          "out": "Fairness console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "RESPONSIBLE USE",
    "title": "Write an AI-Use Disclosure",
    "desc": "Be transparent about AI assistance: decide when to disclose, and write a short, honest statement that fits the context. You choose which situations require disclosure and draft a disclosure line for a real deliverable.",
    "objectives": [
      "Judge when AI assistance should be disclosed to others.",
      "Write a clear, honest disclosure statement.",
      "Distinguish acceptable assistance from misrepresentation."
    ],
    "console": {
      "host": "ai-lab-disclosure",
      "boot": [
        "[SYS] Transparency console online.",
        "[SYS] Sample deliverables loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the situation that clearly needs disclosure"
        },
        {
          "id": "t2",
          "label": "Choose the honest description of AI's role"
        },
        {
          "id": "t3",
          "label": "Draft a disclosure line for a report"
        },
        {
          "id": "t4",
          "label": "Review principles of honest AI use"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Situation that most clearly requires disclosure",
          "options": [
            "Using AI to brainstorm private grocery ideas",
            "Submitting AI-drafted text as your own graded essay",
            "Asking AI to define a word for yourself",
            "Practicing a language on your own"
          ],
          "correct": "Submitting AI-drafted text as your own graded essay",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Honest way to describe AI's contribution",
          "options": [
            "Claim you wrote every word unaided",
            "State that AI helped draft and you edited it",
            "Hide the tool entirely",
            "Credit a coworker who was not involved"
          ],
          "correct": "State that AI helped draft and you edited it",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DRAFT DISCLOSURE",
        "placeholder": "context: quarterly report, AI helped outline and I verified all figures",
        "button": "Draft",
        "response": "[DISC] Suggested line: Portions of this report were drafted with AI assistance and reviewed and verified by the author.\n[DISC] Clear, honest, and appropriately placed near the byline.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show principles",
          "out": "[HONEST] Do not pass AI work off as fully your own where that matters.\n[HONEST] Keep responsibility for accuracy.\n[HONEST] Follow your school or employer policy.",
          "task": "t4"
        },
        {
          "cmd": "list contexts",
          "out": "[DISC] Academic, workplace, published, client-facing."
        },
        {
          "cmd": "show status",
          "out": "Transparency console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "PROMPTING & CONTEXT",
    "title": "Build a Clear Prompt From Scratch",
    "desc": "Turn a vague request into a strong prompt using role, task, and format. You pick the ingredient a weak prompt is missing, then assemble a complete instruction that gets a usable result on the first try.",
    "objectives": [
      "Identify the parts of an effective prompt: role, task, context, format.",
      "Convert a vague request into a specific instruction.",
      "Specify the desired output format explicitly."
    ],
    "console": {
      "host": "ai-lab-promptbuild",
      "boot": [
        "[SYS] Prompt builder online.",
        "[SYS] Weak sample prompt loaded for improvement."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Spot what a vague prompt is missing"
        },
        {
          "id": "t2",
          "label": "Choose the most specific version of a request"
        },
        {
          "id": "t3",
          "label": "Assemble a complete role-task-format prompt"
        },
        {
          "id": "t4",
          "label": "Review the ingredients of a good prompt"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "What the prompt 'Write something about dogs' most lacks",
          "options": [
            "Correct spelling",
            "A specific task, audience, and format",
            "A greeting",
            "An emoji"
          ],
          "correct": "A specific task, audience, and format",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most effective version of a request",
          "options": [
            "Tell me about email",
            "Help with email",
            "Write a 3-sentence polite reply declining a meeting",
            "Email stuff please"
          ],
          "correct": "Write a 3-sentence polite reply declining a meeting",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "ASSEMBLE PROMPT",
        "placeholder": "role=career coach task=review my resume summary format=3 bullet tips",
        "button": "Build",
        "response": "[PROMPT] Built: Acting as a career coach, review the resume summary below and give three specific improvement tips as bullet points.\n[PROMPT] Role, task, and format all present.\n[PROMPT] Ready to send.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list ingredients",
          "out": "[PROMPT] Role (who the AI acts as)\n[PROMPT] Task (what to do)\n[PROMPT] Context (details it needs)\n[PROMPT] Format (how to reply)",
          "task": "t4"
        },
        {
          "cmd": "show example",
          "out": "[PROMPT] Good: Summarize this email in 2 bullets for a busy manager."
        },
        {
          "cmd": "show status",
          "out": "Prompt builder nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "PROMPTING & CONTEXT",
    "title": "Iterate a Prompt to a Better Answer",
    "desc": "First drafts from AI are rarely perfect, so practice refining. You diagnose why a reply missed, choose the best follow-up, and use a refinement request to steer the assistant toward what you actually need.",
    "objectives": [
      "Diagnose why an AI response missed the mark.",
      "Write a targeted follow-up instead of restarting.",
      "Use iteration to steer tone, length, and focus."
    ],
    "console": {
      "host": "ai-lab-iterate",
      "boot": [
        "[SYS] Iteration workbench online.",
        "[SYS] First-draft response loaded: too long and too formal."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Diagnose why the first answer was unsatisfying"
        },
        {
          "id": "t2",
          "label": "Pick the most useful follow-up move"
        },
        {
          "id": "t3",
          "label": "Send a refinement request to improve the draft"
        },
        {
          "id": "t4",
          "label": "Review ways to steer a response"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best reason the reply missed",
          "options": [
            "The AI is broken",
            "The prompt did not specify length or tone",
            "The internet was slow",
            "The topic is impossible"
          ],
          "correct": "The prompt did not specify length or tone",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most effective follow-up",
          "options": [
            "Start a brand-new unrelated chat",
            "Say 'make it better' with no detail",
            "Ask it to shorten to 2 sentences and sound casual",
            "Give up on the task"
          ],
          "correct": "Ask it to shorten to 2 sentences and sound casual",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REFINE REQUEST",
        "placeholder": "Shorten to two sentences, friendly tone, keep the meeting time",
        "button": "Refine",
        "response": "[ITER] Refinement applied to the existing draft.\n[ITER] New reply is 2 sentences, casual, meeting time retained.\n[ITER] Iterating beats re-asking from zero.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list steering-moves",
          "out": "[ITER] Shorten or lengthen\n[ITER] Change tone\n[ITER] Add or drop detail\n[ITER] Ask for an example",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[ITER] Build on the last reply; the model keeps the conversation context."
        },
        {
          "cmd": "show status",
          "out": "Iteration workbench nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "PROMPTING & CONTEXT",
    "title": "Assemble Safe, Useful Context",
    "desc": "Good answers need the right background, given safely. You decide what context genuinely helps the task, strip out what should not be shared, and paste a well-scoped brief that improves the result without oversharing.",
    "objectives": [
      "Select context that actually improves the answer.",
      "Exclude sensitive or irrelevant details from context.",
      "Structure background so the model can use it."
    ],
    "console": {
      "host": "ai-lab-context",
      "boot": [
        "[SYS] Context assembly console online.",
        "[SYS] Task: draft a reply to a customer complaint."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose context that helps the task"
        },
        {
          "id": "t2",
          "label": "Identify context to leave out"
        },
        {
          "id": "t3",
          "label": "Paste a scoped brief for the assistant"
        },
        {
          "id": "t4",
          "label": "Review what makes context useful"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Context that improves a complaint reply",
          "options": [
            "The customer's private medical history",
            "The nature of the complaint and desired tone",
            "Your home address",
            "An unrelated internal password"
          ],
          "correct": "The nature of the complaint and desired tone",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Detail to exclude from the prompt",
          "options": [
            "The product name in question",
            "A short summary of the issue",
            "The customer's full credit card number",
            "The tone you want (apologetic)"
          ],
          "correct": "The customer's full credit card number",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "PASTE BRIEF",
        "placeholder": "Issue: late shipment. Tone: apologetic. Goal: offer a discount code. No personal data included.",
        "button": "Submit",
        "response": "[CTX] Brief accepted: relevant, scoped, no sensitive data.\n[CTX] Model can now draft an on-target apology.\n[CTX] Good context is enough, not everything.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show context-rules",
          "out": "[CTX] Include: goal, audience, tone, key facts.\n[CTX] Exclude: secrets, personal IDs, unrelated noise.\n[CTX] Structure it as short labeled points.",
          "task": "t4"
        },
        {
          "cmd": "show example",
          "out": "[CTX] Audience: new customer. Goal: explain refund steps simply."
        },
        {
          "cmd": "show status",
          "out": "Context console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "PROMPTING & CONTEXT",
    "title": "Guide Tone, Length, and Audience",
    "desc": "The same idea should sound different for a CEO, a customer, or a child. You match phrasing to an audience, set an explicit length, and steer the assistant to adapt one message for very different readers.",
    "objectives": [
      "Adapt tone and vocabulary to a specific audience.",
      "Set explicit length and reading-level constraints.",
      "Reframe one message for different readers."
    ],
    "console": {
      "host": "ai-lab-audience",
      "boot": [
        "[SYS] Audience tuning console online.",
        "[SYS] Source message loaded: a policy update."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Match the tone to an executive audience"
        },
        {
          "id": "t2",
          "label": "Choose a clear length constraint"
        },
        {
          "id": "t3",
          "label": "Ask the assistant to rewrite for a new audience"
        },
        {
          "id": "t4",
          "label": "Review audience-tuning levers"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best tone for a one-line note to a busy executive",
          "options": [
            "Long and highly technical",
            "Concise, plain, outcome-focused",
            "Casual with lots of slang",
            "Vague and open-ended"
          ],
          "correct": "Concise, plain, outcome-focused",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A clear length instruction",
          "options": [
            "Make it good",
            "Keep it to about 50 words",
            "Write a lot",
            "Whatever length works"
          ],
          "correct": "Keep it to about 50 words",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REWRITE FOR AUDIENCE",
        "placeholder": "Rewrite the policy update for new employees, friendly tone, under 60 words",
        "button": "Rewrite",
        "response": "[AUD] Audience set: new employees.\n[AUD] Tone friendly, length under 60 words applied.\n[AUD] Same facts, reader-appropriate phrasing.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list levers",
          "out": "[AUD] Tone (formal to casual)\n[AUD] Vocabulary (expert to beginner)\n[AUD] Length\n[AUD] Reading level",
          "task": "t4"
        },
        {
          "cmd": "show example",
          "out": "[AUD] For kids: use short words and a simple example."
        },
        {
          "cmd": "show status",
          "out": "Audience console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "EVALUATE & VERIFY",
    "title": "Name That AI Error",
    "desc": "Not every wrong answer fails the same way. You learn to label common AI mistakes, hallucination, outdated info, and misread instructions, then match each faulty reply to the error type so you know how to respond.",
    "objectives": [
      "Recognize common AI failure modes by their symptoms.",
      "Distinguish a hallucination from an outdated or misread answer.",
      "Match each error type to the right corrective action."
    ],
    "console": {
      "host": "ai-lab-errors",
      "boot": [
        "[SYS] Error-classification console online.",
        "[SYS] Sample faulty responses loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Classify an invented citation"
        },
        {
          "id": "t2",
          "label": "Classify an answer about last week's news"
        },
        {
          "id": "t3",
          "label": "Submit a faulty reply for diagnosis"
        },
        {
          "id": "t4",
          "label": "Review the corrective action per error"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "The model cites a study and author that do not exist",
          "options": [
            "Hallucination",
            "Slow response",
            "Formatting error",
            "Typo"
          ],
          "correct": "Hallucination",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "It confidently describes an event after its training cutoff",
          "options": [
            "Hallucination",
            "Outdated or missing knowledge",
            "Bias",
            "Refusal"
          ],
          "correct": "Outdated or missing knowledge",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DIAGNOSE REPLY",
        "placeholder": "It answered a different question than I asked",
        "button": "Diagnose",
        "response": "[ERR] Symptom matches: misread or ignored instruction.\n[ERR] Fix: restate the request more explicitly and re-ask.\n[ERR] Not every error is a hallucination.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list error-fixes",
          "out": "[ERR] Hallucination -> verify against a source\n[ERR] Outdated -> check current data yourself\n[ERR] Misread -> clarify the prompt\n[ERR] Biased -> re-prompt neutrally",
          "task": "t4"
        },
        {
          "cmd": "list error-types",
          "out": "[ERR] Hallucination, outdated, misread, biased, refusal."
        },
        {
          "cmd": "show status",
          "out": "Error console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "EVALUATE & VERIFY",
    "title": "Run a Fact-Check Workflow",
    "desc": "Treat AI output as a draft to verify, not a final source. You follow a simple verification workflow, decide which claims need checking, and confirm a factual statement against an independent trusted source.",
    "objectives": [
      "Decide which AI claims require independent verification.",
      "Apply a step-by-step fact-checking workflow.",
      "Choose trustworthy sources over the model's word alone."
    ],
    "console": {
      "host": "ai-lab-factcheck",
      "boot": [
        "[SYS] Verification workflow console online.",
        "[SYS] Draft answer with 3 factual claims loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify the claim that most needs checking"
        },
        {
          "id": "t2",
          "label": "Pick the most trustworthy way to verify it"
        },
        {
          "id": "t3",
          "label": "Run a claim through the verification workflow"
        },
        {
          "id": "t4",
          "label": "Review the verification steps"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Claim that most needs verification",
          "options": [
            "A general definition of teamwork",
            "A specific statistic with a precise number",
            "An opinion on a movie",
            "A common greeting"
          ],
          "correct": "A specific statistic with a precise number",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Most trustworthy verification method",
          "options": [
            "Ask the same chatbot if it is sure",
            "Check an authoritative primary source",
            "Assume it is right because it sounds confident",
            "Ask a friend to guess"
          ],
          "correct": "Check an authoritative primary source",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "VERIFY CLAIM",
        "placeholder": "Claim: the policy takes effect in January. Source: official company handbook.",
        "button": "Verify",
        "response": "[VERIFY] Claim cross-checked against the official handbook.\n[VERIFY] Effective date confirmed as stated.\n[VERIFY] Claim marked verified; unverifiable claims stay flagged.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show workflow",
          "out": "[VERIFY] 1 Identify checkable claims\n[VERIFY] 2 Find an independent source\n[VERIFY] 3 Compare and confirm\n[VERIFY] 4 Correct or flag mismatches",
          "task": "t4"
        },
        {
          "cmd": "list good-sources",
          "out": "[VERIFY] Official docs, primary data, reputable references."
        },
        {
          "cmd": "show status",
          "out": "Verification console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "EVALUATE & VERIFY",
    "title": "Judge Source and Citation Quality",
    "desc": "AI may offer sources, but they are not all real or reliable. You evaluate a citation, spot a fabricated reference, and decide whether the evidence behind a claim is strong enough to rely on.",
    "objectives": [
      "Evaluate whether an AI-provided source is real and credible.",
      "Recognize signs of a fabricated or misattributed citation.",
      "Weigh evidence quality before trusting a claim."
    ],
    "console": {
      "host": "ai-lab-sources",
      "boot": [
        "[SYS] Source-quality console online.",
        "[SYS] Two candidate citations loaded for review."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the more credible source"
        },
        {
          "id": "t2",
          "label": "Spot the sign of a fabricated citation"
        },
        {
          "id": "t3",
          "label": "Submit a citation for a credibility check"
        },
        {
          "id": "t4",
          "label": "Review source-evaluation criteria"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "More credible source for a health claim",
          "options": [
            "An anonymous forum post",
            "A national public health agency",
            "A random social media reply",
            "A comment with no author"
          ],
          "correct": "A national public health agency",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "A red flag that a citation may be fabricated",
          "options": [
            "It has a real, findable URL",
            "The article and author cannot be found anywhere",
            "It is on a well-known site",
            "It matches other reliable sources"
          ],
          "correct": "The article and author cannot be found anywhere",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "CHECK CITATION",
        "placeholder": "Smith et al. 2029, Journal of Everything, page 4200",
        "button": "Check",
        "response": "[SRC] No matching record for this title, author, or journal.\n[SRC] Likely a fabricated citation.\n[SRC] Do not cite; find a verifiable source instead.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show criteria",
          "out": "[SRC] Author and publisher known?\n[SRC] Findable and dated?\n[SRC] Independent and reputable?\n[SRC] Corroborated elsewhere?",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[SRC] If you cannot locate a cited source, treat the claim as unverified."
        },
        {
          "cmd": "show status",
          "out": "Source console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "EVALUATE & VERIFY",
    "title": "Compare Two AI Answers",
    "desc": "When answers disagree, you need a way to choose. You compare two responses on accuracy, completeness, and clarity, apply simple evaluation criteria, and pick the stronger one with a reason you can defend.",
    "objectives": [
      "Apply criteria such as accuracy, completeness, and clarity.",
      "Compare two competing answers objectively.",
      "Justify which response is stronger and why."
    ],
    "console": {
      "host": "ai-lab-compare",
      "boot": [
        "[SYS] Answer-comparison console online.",
        "[SYS] Response A and Response B loaded for the same question."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the top criterion for a factual question"
        },
        {
          "id": "t2",
          "label": "Identify the weakness in an overlong answer"
        },
        {
          "id": "t3",
          "label": "Submit both answers for a scored comparison"
        },
        {
          "id": "t4",
          "label": "Review the evaluation criteria"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Most important criterion for a factual question",
          "options": [
            "Longest answer wins",
            "Accuracy of the information",
            "Most emojis",
            "Fanciest vocabulary"
          ],
          "correct": "Accuracy of the information",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Weakness of a long, rambling answer",
          "options": [
            "It is too clear",
            "It buries the key point and is hard to use",
            "It is always more accurate",
            "It has no downside"
          ],
          "correct": "It buries the key point and is hard to use",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "COMPARE ANSWERS",
        "placeholder": "A: concise and correct. B: longer but includes an unverified stat.",
        "button": "Score",
        "response": "[CMP] A scores higher on accuracy and clarity.\n[CMP] B loses points for an unverified statistic.\n[CMP] Winner: A, with a defensible reason.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list criteria",
          "out": "[CMP] Accuracy\n[CMP] Completeness\n[CMP] Clarity\n[CMP] Relevance to the question",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[CMP] Prefer the answer you can verify and act on, not the longest one."
        },
        {
          "cmd": "show status",
          "out": "Comparison console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "PRODUCE & LEARN",
    "title": "Brainstorm, Draft, Revise",
    "desc": "Use AI across a whole creative pass: generate options, pick a direction, draft, then revise toward quality. You move through brainstorm to draft to revision and see how each stage sharpens the result.",
    "objectives": [
      "Use AI to generate a range of options quickly.",
      "Select a direction and produce a first draft.",
      "Revise the draft against a clear goal."
    ],
    "console": {
      "host": "ai-lab-create",
      "boot": [
        "[SYS] Create workflow console online.",
        "[SYS] Task: a newsletter subject line."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the best use of a brainstorm step"
        },
        {
          "id": "t2",
          "label": "Pick the right prompt for the drafting step"
        },
        {
          "id": "t3",
          "label": "Run a brainstorm-to-draft-to-revise pass"
        },
        {
          "id": "t4",
          "label": "Review the create workflow stages"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best use of a brainstorming prompt",
          "options": [
            "Ask for one final answer immediately",
            "Ask for ten varied options to choose from",
            "Ask nothing and wait",
            "Ask for a single yes or no"
          ],
          "correct": "Ask for ten varied options to choose from",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Good prompt for the drafting stage",
          "options": [
            "Make words",
            "Expand option 3 into a full subject line and preview text",
            "Do the whole newsletter alone",
            "Never mind"
          ],
          "correct": "Expand option 3 into a full subject line and preview text",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RUN CREATE PASS",
        "placeholder": "brainstorm 10 lines -> pick 1 -> draft -> revise for a warmer tone",
        "button": "Run",
        "response": "[MAKE] 10 subject lines generated.\n[MAKE] Option chosen and drafted with preview text.\n[MAKE] Revised for a warmer tone; each stage improved it.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show workflow",
          "out": "[MAKE] 1 Brainstorm options\n[MAKE] 2 Select a direction\n[MAKE] 3 Draft it out\n[MAKE] 4 Revise to the goal",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[MAKE] You stay the editor; AI speeds up the drafts."
        },
        {
          "cmd": "show status",
          "out": "Create console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "PRODUCE & LEARN",
    "title": "Summarize a Long Document",
    "desc": "Turn a wall of text into something usable. You choose the right kind of summary for your goal, set the level of detail, and produce a summary you then sanity-check against the source for accuracy.",
    "objectives": [
      "Match the summary type to the reader's goal.",
      "Control summary length and level of detail.",
      "Check a summary against the source for accuracy."
    ],
    "console": {
      "host": "ai-lab-summarize",
      "boot": [
        "[SYS] Summarization console online.",
        "[SYS] Source document loaded: a 12-page report."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the summary type for a quick decision"
        },
        {
          "id": "t2",
          "label": "Pick the right detail level for busy readers"
        },
        {
          "id": "t3",
          "label": "Generate a scoped summary"
        },
        {
          "id": "t4",
          "label": "Review how to sanity-check a summary"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best summary type for a fast go/no-go decision",
          "options": [
            "A word-for-word transcript",
            "Three bullet key takeaways",
            "A longer version of the report",
            "No summary at all"
          ],
          "correct": "Three bullet key takeaways",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Right detail level for a busy executive",
          "options": [
            "Every minor footnote",
            "Only the decisions and their impact",
            "A random paragraph",
            "The full appendix"
          ],
          "correct": "Only the decisions and their impact",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "GENERATE SUMMARY",
        "placeholder": "Summarize the report in 3 bullets focused on cost and timeline",
        "button": "Summarize",
        "response": "[SUM] 3-bullet summary produced, focused on cost and timeline.\n[SUM] Key figures pulled from the source.\n[SUM] Reminder: verify figures against the original.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show verify-steps",
          "out": "[SUM] Do the bullets match the source?\n[SUM] Any numbers altered or invented?\n[SUM] Is anything critical missing?",
          "task": "t4"
        },
        {
          "cmd": "list summary-types",
          "out": "[SUM] Key points, TL;DR, action items, abstract."
        },
        {
          "cmd": "show status",
          "out": "Summarization console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "PRODUCE & LEARN",
    "title": "Use AI as a Study Tutor",
    "desc": "Learn faster with AI without letting it do the thinking for you. You ask it to explain a concept simply, generate practice questions, and check your understanding, keeping yourself in the driver's seat.",
    "objectives": [
      "Prompt AI to explain a concept at your level.",
      "Generate practice questions to test yourself.",
      "Use AI to check understanding without offloading the learning."
    ],
    "console": {
      "host": "ai-lab-tutor",
      "boot": [
        "[SYS] Study tutor console online.",
        "[SYS] Topic loaded: the water cycle."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the best 'explain it simply' prompt"
        },
        {
          "id": "t2",
          "label": "Choose the healthiest way to use AI for homework"
        },
        {
          "id": "t3",
          "label": "Ask the tutor to quiz you"
        },
        {
          "id": "t4",
          "label": "Review good study-with-AI habits"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best prompt to understand a hard concept",
          "options": [
            "Just give me the final answer",
            "Explain it like I am 12, then give an example",
            "Write my whole assignment",
            "Say it in one confusing word"
          ],
          "correct": "Explain it like I am 12, then give an example",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Healthiest way to use AI for schoolwork",
          "options": [
            "Copy its answer and submit it",
            "Use it to explain and quiz, then do the work yourself",
            "Let it take the test for you",
            "Never check what it says"
          ],
          "correct": "Use it to explain and quiz, then do the work yourself",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "REQUEST QUIZ",
        "placeholder": "Give me 3 practice questions on the water cycle, then check my answers",
        "button": "Quiz",
        "response": "[TUTOR] 3 practice questions generated.\n[TUTOR] It will check your answers and explain misses.\n[TUTOR] You do the thinking; AI is the coach.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show habits",
          "out": "[TUTOR] Ask for explanations, not just answers.\n[TUTOR] Self-test before checking.\n[TUTOR] Verify facts; tutors can be wrong too.",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[TUTOR] Ask 'why' follow-ups to deepen understanding."
        },
        {
          "cmd": "show status",
          "out": "Tutor console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "AI AT WORK",
    "title": "Design a Simple AI Workflow",
    "desc": "Fit AI into a real task instead of using it ad hoc. You break a job into steps, decide which steps AI should handle and which stay human, and lay out a small workflow that saves time safely.",
    "objectives": [
      "Break a task into steps suited to AI or to humans.",
      "Decide where AI adds value and where it does not.",
      "Sequence a simple human-plus-AI workflow."
    ],
    "console": {
      "host": "ai-lab-workflow",
      "boot": [
        "[SYS] Workflow design console online.",
        "[SYS] Task: produce a weekly customer FAQ update."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Pick the step best suited to AI"
        },
        {
          "id": "t2",
          "label": "Pick the step that should stay human"
        },
        {
          "id": "t3",
          "label": "Lay out the human-plus-AI workflow"
        },
        {
          "id": "t4",
          "label": "Review where AI fits in a workflow"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Step AI handles well in this task",
          "options": [
            "Approving the final published FAQ",
            "Drafting answers from provided notes",
            "Signing off on legal accuracy",
            "Deciding company policy"
          ],
          "correct": "Drafting answers from provided notes",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Step that should stay with a human",
          "options": [
            "Generating a rough first draft",
            "Suggesting wording options",
            "Final review and approval before publishing",
            "Rephrasing a sentence"
          ],
          "correct": "Final review and approval before publishing",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "DESIGN WORKFLOW",
        "placeholder": "1 human gathers notes 2 AI drafts 3 human edits 4 human approves",
        "button": "Design",
        "response": "[FLOW] Workflow accepted: AI drafts, humans decide.\n[FLOW] Time saved on drafting, control kept on approval.\n[FLOW] Clear handoffs at each step.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show fit-guide",
          "out": "[FLOW] AI is good at: drafting, summarizing, options.\n[FLOW] Humans own: judgment, approval, accountability.\n[FLOW] Keep a human checkpoint before anything ships.",
          "task": "t4"
        },
        {
          "cmd": "show example",
          "out": "[FLOW] Draft with AI, verify facts, then a person approves."
        },
        {
          "cmd": "show status",
          "out": "Workflow console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "AI AT WORK",
    "title": "Design a Human-in-the-Loop Agent",
    "desc": "AI agents can take actions, so they need guardrails. You decide which actions an agent may take on its own and which require human approval, then set an approval checkpoint for a risky step.",
    "objectives": [
      "Explain what an AI agent is and why oversight matters.",
      "Separate low-risk actions from actions needing approval.",
      "Place a human approval checkpoint before risky actions."
    ],
    "console": {
      "host": "ai-lab-agent",
      "boot": [
        "[SYS] Agent oversight console online.",
        "[SYS] Agent role: schedule meetings and send emails."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the action an agent may take unattended"
        },
        {
          "id": "t2",
          "label": "Choose the action that needs human approval"
        },
        {
          "id": "t3",
          "label": "Set an approval checkpoint for a risky step"
        },
        {
          "id": "t4",
          "label": "Review why oversight matters"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Action safe for the agent to take on its own",
          "options": [
            "Deleting the customer database",
            "Drafting a calendar invite for review",
            "Wiring company funds",
            "Firing an employee"
          ],
          "correct": "Drafting a calendar invite for review",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Action that should require human approval",
          "options": [
            "Suggesting three meeting times",
            "Formatting a draft email",
            "Sending a mass email to all customers",
            "Summarizing a thread"
          ],
          "correct": "Sending a mass email to all customers",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "SET CHECKPOINT",
        "placeholder": "require human approval before agent sends any external email",
        "button": "Set",
        "response": "[AGENT] Checkpoint set: external sends pause for approval.\n[AGENT] Low-risk drafting stays automatic.\n[AGENT] Human stays in the loop for consequential actions.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show oversight-why",
          "out": "[AGENT] Agents can act, so mistakes have real effects.\n[AGENT] Approval gates catch errors before harm.\n[AGENT] Match the gate to the risk of the action.",
          "task": "t4"
        },
        {
          "cmd": "list risk-tiers",
          "out": "[AGENT] Auto (low), review (medium), block-until-approved (high)."
        },
        {
          "cmd": "show status",
          "out": "Agent console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "AI AT WORK",
    "title": "Map AI Skills in a Job Posting",
    "desc": "AI literacy is now a workplace skill. You read a job posting, identify where AI competence is expected, and match responsibilities to the specific AI abilities they call for, so you can speak to them.",
    "objectives": [
      "Spot where AI skills appear in job requirements.",
      "Match a responsibility to the AI ability it needs.",
      "Describe your own AI competencies in workplace terms."
    ],
    "console": {
      "host": "ai-lab-jobskills",
      "boot": [
        "[SYS] Job-mapping console online.",
        "[SYS] Sample posting loaded: Marketing Coordinator."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Identify an AI-related requirement in the posting"
        },
        {
          "id": "t2",
          "label": "Match a duty to the AI skill it needs"
        },
        {
          "id": "t3",
          "label": "Submit a duty for AI-skill mapping"
        },
        {
          "id": "t4",
          "label": "Review common workplace AI skills"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Line that signals an AI skill expectation",
          "options": [
            "Must lift 50 pounds",
            "Uses AI tools to draft and refine marketing copy",
            "Owns a reliable car",
            "Available on weekends"
          ],
          "correct": "Uses AI tools to draft and refine marketing copy",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "AI skill behind 'verify AI-generated content before publishing'",
          "options": [
            "Fact-checking and evaluating AI output",
            "Typing speed",
            "Filing paperwork",
            "Answering phones"
          ],
          "correct": "Fact-checking and evaluating AI output",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "MAP DUTY",
        "placeholder": "Duty: create first-draft social posts and summarize campaign results",
        "button": "Map",
        "response": "[JOB] Duty maps to: prompting for drafts + summarizing data with AI.\n[JOB] Also implies verifying output before it goes live.\n[JOB] These are teachable AI-literacy skills.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "list ai-skills",
          "out": "[JOB] Prompting, verifying, summarizing, responsible use, tool selection.",
          "task": "t4"
        },
        {
          "cmd": "show tip",
          "out": "[JOB] On a resume, name the task and the AI skill it used."
        },
        {
          "cmd": "show status",
          "out": "Job console nominal."
        }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "AI AT WORK",
    "title": "Choose the Right Tool for the Task",
    "desc": "Not every job needs a chatbot, and not every chatbot fits every job. You match a task to the appropriate kind of AI tool, recognize when AI is the wrong choice, and justify your pick for a workplace scenario.",
    "objectives": [
      "Match a task to a suitable type of AI tool.",
      "Recognize when a non-AI tool or a human is the better choice.",
      "Justify tool selection for a workplace scenario."
    ],
    "console": {
      "host": "ai-lab-toolchoice",
      "boot": [
        "[SYS] Tool-selection console online.",
        "[SYS] Several workplace tasks loaded for matching."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Match a drafting task to the right tool type"
        },
        {
          "id": "t2",
          "label": "Identify a task where AI is the wrong choice"
        },
        {
          "id": "t3",
          "label": "Submit a task for a tool recommendation"
        },
        {
          "id": "t4",
          "label": "Review tool-selection guidance"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Best tool for 'draft a first version of a blog post'",
          "options": [
            "A text-generation assistant",
            "A calculator",
            "A label printer",
            "A stopwatch"
          ],
          "correct": "A text-generation assistant",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Task where AI is the wrong choice",
          "options": [
            "Brainstorming slogan ideas",
            "Making a final legal or medical decision alone",
            "Summarizing meeting notes",
            "Rephrasing an email"
          ],
          "correct": "Making a final legal or medical decision alone",
          "task": "t2"
        }
      ],
      "payload": {
        "label": "RECOMMEND TOOL",
        "placeholder": "Task: total this month's expenses exactly from a spreadsheet",
        "button": "Recommend",
        "response": "[TOOL] Exact totals belong in a spreadsheet, not a chatbot.\n[TOOL] Use AI to explain the formula, not to do the arithmetic.\n[TOOL] Right tool, right job.",
        "task": "t3"
      },
      "commands": [
        {
          "cmd": "show guidance",
          "out": "[TOOL] Text tasks -> assistant.\n[TOOL] Exact math/data -> spreadsheet or app.\n[TOOL] High-stakes calls -> human decides.",
          "task": "t4"
        },
        {
          "cmd": "list tool-types",
          "out": "[TOOL] Chat assistant, image generator, spreadsheet, search, human expert."
        },
        {
          "cmd": "show status",
          "out": "Tool console nominal."
        }
      ]
    }
  }
];
