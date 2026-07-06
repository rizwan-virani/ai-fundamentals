/* CompTIA AI Fundamentals :: content/pbqs.js — 30 performance-based decisions (6 per format). Populates AIFUND.pbqs. */
window.AIFUND = window.AIFUND || {}; AIFUND.pbqs = AIFUND.pbqs || [];

AIFUND.pbqs.push(

  /* ============== FORMAT 1 : Prompt Construction (domain 3) ============== */

  { id:"PBQ-001", format:1, domain:3,
    title:"Onboarding Email for New Hires",
    brief:"An HR coordinator must draft a warm welcome email to new employees explaining first-day logistics. The reader is a nervous new hire with no company context. Build the prompt fields (Role, Task, Context, Format) that will produce the most useful draft.",
    exhibitTitle:"prompt://hr-welcome",
    exhibit:"  <span class='cy'>[ Goal ]</span> Draft a first-day welcome email\n  <span class='cy'>[ Audience ]</span> <span class='hl'>brand-new employee</span>, anxious, no context\n  <span class='cy'>[ Facts to include ]</span> start time 9:00, park in Lot C,\n     ask for reception, bring photo ID\n  <span class='cy'>[ Tone wanted ]</span> <span class='ok'>warm, reassuring, plain language</span>\n  <span class='cy'>[ Deliver as ]</span> ready-to-send email",
    fields:[
      { label:"Role field", hint:"Match the writer's job.", options:["You are a legal compliance officer","You are a friendly HR onboarding specialist","You are a database administrator","You are an anonymous assistant"], answer:1, explain:"A friendly HR onboarding specialist role primes the tone and expertise that fit a warm first-day email; a legal or database role would pull the voice in the wrong direction." },
      { label:"Task field", hint:"State one clear action.", options:["Explain company history in depth","Write a warm first-day welcome email to a new hire","Summarize the employee handbook","List every HR policy"], answer:1, explain:"The task must name the concrete deliverable: writing the welcome email. Explaining history or summarizing the handbook is a different job and would miss the goal." },
      { label:"Context field", hint:"Feed the specifics the model can't guess.", options:["No details needed","Include start time 9:00, Lot C parking, ask for reception, bring photo ID","Just say 'first day'","The company's stock price"], answer:1, explain:"Supplying the exact logistics (time, parking, reception, ID) lets the model write accurate instructions; without them it would invent or omit details." },
      { label:"Format field", hint:"Shape the output.", options:["A bulleted risk register","A short email with greeting, key details, and a friendly closing","A spreadsheet","A legal contract"], answer:1, explain:"Requesting a short email with a greeting, the key details, and a friendly close matches the deliverable; a spreadsheet or contract format would not be sendable as a welcome message." }
    ],
    summary:"Set the Role to an HR onboarding specialist, the Task to writing the welcome email, the Context to the exact first-day logistics, and the Format to a short friendly email so the model has everything it needs." },

  { id:"PBQ-002", format:1, domain:3,
    title:"Explaining a Lab Result to a Patient",
    brief:"A clinic wants a plain-language explanation of a common lab result for patients, avoiding jargon and alarm. The reader has no medical training. Construct the prompt fields for a clear, calm handout paragraph.",
    exhibitTitle:"prompt://patient-explainer",
    exhibit:"  <span class='cy'>[ Goal ]</span> Explain what a slightly high cholesterol result means\n  <span class='cy'>[ Audience ]</span> <span class='hl'>patient, no medical background</span>\n  <span class='cy'>[ Constraints ]</span> <span class='ok'>no jargon</span>, <span class='warnc'>do not diagnose or prescribe</span>\n  <span class='cy'>[ Reading level ]</span> about 8th grade\n  <span class='cy'>[ Deliver as ]</span> one short reassuring paragraph",
    fields:[
      { label:"Role field", hint:"Who should the model 'be'?", options:["You are a research statistician","You are a health educator who explains results in plain language","You are a pharmaceutical sales rep","You are a billing clerk"], answer:1, explain:"A health educator who simplifies results fits the plain-language, non-alarming goal; a statistician or sales rep role would push toward jargon or promotion." },
      { label:"Task field", hint:"One action, bounded.", options:["Diagnose the patient's condition","Explain in plain language what a slightly high cholesterol result generally means","Recommend a specific drug","Order follow-up tests"], answer:1, explain:"The task is to explain the result generally, not to diagnose or prescribe. Diagnosing or recommending a drug exceeds what AI should do and violates the stated constraints." },
      { label:"Context field", hint:"Encode the guardrails.", options:["Leave constraints out","State: 8th-grade reading level, no jargon, do not diagnose or prescribe, keep it reassuring","Add the clinic's revenue targets","Include unrelated patient names"], answer:1, explain:"Putting the reading level and the do-not-diagnose/prescribe guardrails into context keeps the output safe and appropriately simple; omitting them invites jargon or medical advice." },
      { label:"Format field", hint:"Length and shape.", options:["A 10-page report","One short, reassuring paragraph","A table of drug dosages","A slide deck"], answer:1, explain:"A single short reassuring paragraph matches a patient handout; a long report or dosage table would overwhelm and drift into clinical advice." }
    ],
    summary:"Cast the Role as a plain-language health educator, the Task as explaining the result generally, the Context as the reading level plus the do-not-diagnose guardrails, and the Format as one short reassuring paragraph." },

  { id:"PBQ-003", format:1, domain:3,
    title:"Executive Summary of a Long Report",
    brief:"An analyst must turn a 40-page quarterly report into a summary a busy executive will read in under a minute. Only the pasted report text should be used. Build the prompt fields for a tight, decision-focused summary.",
    exhibitTitle:"prompt://exec-summary",
    exhibit:"  <span class='cy'>[ Goal ]</span> Summarize the Q report for a CEO\n  <span class='cy'>[ Audience ]</span> <span class='hl'>time-pressed executive</span>\n  <span class='cy'>[ Source ]</span> <span class='ok'>the pasted 40-page report only</span>\n  <span class='cy'>[ Must surface ]</span> top results, risks, one recommendation\n  <span class='cy'>[ Deliver as ]</span> 5 bullets, under 120 words",
    fields:[
      { label:"Role field", hint:"Analytical, concise.", options:["You are a poet","You are a business analyst who writes concise executive summaries","You are a fiction writer","You are a comedian"], answer:1, explain:"A business-analyst persona that writes concise executive summaries matches the audience and purpose; a poet or comedian would produce the wrong register." },
      { label:"Task field", hint:"Bound the job to the source.", options:["Add your own market opinions","Summarize only the pasted report into an executive brief","Rewrite the whole report longer","Translate it to another language"], answer:1, explain:"The task is to summarize the pasted report into a brief; instructing the model to add outside opinions would introduce unsupported claims the executive can't trust." },
      { label:"Context field", hint:"Steer what to keep.", options:["Ignore what matters","Emphasize top results, key risks, and a single clear recommendation","List every number in the report","Include the office lunch menu"], answer:1, explain:"Telling the model to surface top results, risks, and one recommendation focuses the summary on decisions; dumping every number defeats the purpose of a brief." },
      { label:"Format field", hint:"Enforce brevity.", options:["A 5-page memo","Five bullets, under 120 words","A single run-on paragraph of 800 words","An audio script"], answer:1, explain:"Five tight bullets under 120 words honors the under-a-minute read; a 5-page memo or an 800-word paragraph would not be skimmable." }
    ],
    summary:"Use a concise business-analyst Role, a Task scoped strictly to the pasted report, Context that prioritizes results/risks/one recommendation, and a Format of five bullets under 120 words." },

  { id:"PBQ-004", format:1, domain:3,
    title:"Study Guide from Lecture Notes",
    brief:"A student wants a study guide built only from their own pasted lecture notes, formatted for quick review before an exam. Nothing beyond the notes should be introduced. Construct the prompt fields.",
    exhibitTitle:"prompt://study-guide",
    exhibit:"  <span class='cy'>[ Goal ]</span> Turn my notes into a review sheet\n  <span class='cy'>[ Audience ]</span> <span class='hl'>myself, an undergrad</span>\n  <span class='cy'>[ Source ]</span> <span class='ok'>pasted lecture notes only</span>\n  <span class='warnc'>Do not add facts that are not in my notes</span>\n  <span class='cy'>[ Deliver as ]</span> key terms + Q&A pairs",
    fields:[
      { label:"Role field", hint:"Teaching stance.", options:["You are a strict examiner who fails students","You are a supportive tutor who builds clear study guides","You are a marketing writer","You are a lawyer"], answer:1, explain:"A supportive tutor role suits producing an approachable review sheet; an examiner or marketer persona would set the wrong tone and structure." },
      { label:"Task field", hint:"Transform, don't invent.", options:["Write a brand-new textbook chapter","Convert the pasted notes into a study guide of key terms and Q&A","Grade the student's performance","Summarize a different course"], answer:1, explain:"The task is to convert the pasted notes into a study guide; writing a new chapter would add material the student never studied and can't verify against the syllabus." },
      { label:"Context field", hint:"Prevent hallucinated facts.", options:["Encourage adding outside facts","Instruct: use only the pasted notes and flag anything unclear rather than inventing","Tell it to guess missing details","Include the campus map"], answer:1, explain:"Constraining the model to the pasted notes and asking it to flag gaps prevents fabricated content; inviting outside facts risks studying wrong information." },
      { label:"Format field", hint:"Optimize for review.", options:["A single dense paragraph","Key terms with definitions plus question-and-answer pairs","A 3-hour video script","A pie chart"], answer:1, explain:"Key terms with definitions and Q&A pairs is an efficient review format; a dense paragraph or a video script is far less useful for last-minute study." }
    ],
    summary:"Set a supportive-tutor Role, a Task that converts the notes into a guide, Context that restricts the model to the notes and flags gaps, and a Format of key terms plus Q&A pairs." },

  { id:"PBQ-005", format:1, domain:3,
    title:"Customer Apology for a Shipping Delay",
    brief:"A support agent must reply to an upset customer whose order shipped late, offering a sincere apology and clear next steps without over-promising. The reader is frustrated and wants resolution. Build the prompt fields.",
    exhibitTitle:"prompt://support-apology",
    exhibit:"  <span class='cy'>[ Goal ]</span> Reply to a customer about a late order\n  <span class='cy'>[ Audience ]</span> <span class='hl'>frustrated customer</span>\n  <span class='cy'>[ Facts ]</span> order #4821 shipped 3 days late, now in transit,\n     ETA Friday, 10% credit approved\n  <span class='warnc'>Do not promise refunds beyond the approved 10%</span>\n  <span class='cy'>[ Deliver as ]</span> short empathetic email",
    fields:[
      { label:"Role field", hint:"Service voice.", options:["You are an angry manager","You are an empathetic customer-support specialist","You are a debt collector","You are a stand-up comic"], answer:1, explain:"An empathetic support-specialist role produces the calm, accountable tone this reply needs; an angry or collections voice would inflame the customer." },
      { label:"Task field", hint:"Apologize and resolve.", options:["Blame the customer","Apologize for the delay and clearly state the next steps and the approved credit","Deny the delay happened","Upsell a new product"], answer:1, explain:"The task is a sincere apology plus clear next steps and the approved credit; blaming the customer or upselling would worsen the relationship." },
      { label:"Context field", hint:"Bound the promises.", options:["Let the model offer any refund it likes","Include order #4821, ETA Friday, and cap the offer at the approved 10% credit","Omit the credit","Add the customer's password"], answer:1, explain:"Giving the exact facts and capping the offer at the approved 10% keeps the reply accurate and prevents over-promising a refund the agent can't authorize." },
      { label:"Format field", hint:"Tone and length.", options:["A legal cease-and-desist letter","A short, empathetic email with apology, status, and next steps","A 12-point terms-of-service update","A social media meme"], answer:1, explain:"A short empathetic email carrying the apology, status, and next steps fits a support reply; a legal letter or meme would be inappropriate." }
    ],
    summary:"Choose an empathetic support-specialist Role, a Task that apologizes and resolves, Context with the real order facts and the 10% cap, and a Format of a short empathetic email." },

  { id:"PBQ-006", format:1, domain:3,
    title:"Meeting Agenda for a Project Kickoff",
    brief:"A project lead needs a focused kickoff-meeting agenda for a cross-functional team with a strict 30-minute limit. Attendees are busy and unfamiliar with the project. Construct the prompt fields for a timeboxed agenda.",
    exhibitTitle:"prompt://kickoff-agenda",
    exhibit:"  <span class='cy'>[ Goal ]</span> Build a 30-minute kickoff agenda\n  <span class='cy'>[ Audience ]</span> <span class='hl'>cross-functional team</span>, new to the project\n  <span class='cy'>[ Must cover ]</span> goals, roles, timeline, next steps\n  <span class='cy'>[ Constraint ]</span> <span class='warnc'>hard 30-minute cap</span>\n  <span class='cy'>[ Deliver as ]</span> <span class='ok'>timeboxed agenda with owners</span>",
    fields:[
      { label:"Role field", hint:"Facilitation expertise.", options:["You are an intern with no context","You are an experienced project manager who runs efficient meetings","You are a novelist","You are a sports announcer"], answer:1, explain:"An experienced project-manager role brings meeting-structure expertise; an intern or novelist persona wouldn't reliably produce a disciplined agenda." },
      { label:"Task field", hint:"Produce the artifact.", options:["Write meeting minutes for a meeting that hasn't happened","Create a 30-minute kickoff agenda covering goals, roles, timeline, and next steps","Summarize last year's meetings","Draft a budget"], answer:1, explain:"The task is to create the agenda with the required sections; writing minutes for a meeting that hasn't occurred or drafting a budget misses the goal." },
      { label:"Context field", hint:"Fit the time budget.", options:["Ignore the time limit","Allocate time so all four topics fit within the hard 30-minute cap","Plan for a full-day workshop","Add unrelated HR topics"], answer:1, explain:"Telling the model to allocate minutes so every topic fits the 30-minute cap yields a realistic agenda; ignoring the limit or planning a full day breaks the constraint." },
      { label:"Format field", hint:"Assign accountability.", options:["A single sentence","A timeboxed agenda listing each item, its minutes, and an owner","A photo collage","A crossword puzzle"], answer:1, explain:"A timeboxed agenda with minutes and owners makes the meeting run on schedule and assigns accountability; a sentence or collage wouldn't guide the meeting." }
    ],
    summary:"Use an experienced project-manager Role, a Task to build the four-topic agenda, Context that fits everything in 30 minutes, and a Format of a timeboxed agenda with per-item owners." },

  /* ============== FORMAT 2 : AI Output Evaluation (domain 4) ============== */

  { id:"PBQ-007", format:2, domain:4,
    title:"A Confident but Invented Citation",
    brief:"A user asked for sources supporting a claim. The AI returned a specific-looking journal citation. Evaluate whether the output is trustworthy, name the failure type, and choose the correct fix.",
    exhibitTitle:"output://fake-citation",
    exhibit:"  <span class='cy'>[ Prompt ]</span> Give me a peer-reviewed source that says\n     green tea prevents cancer.\n  <span class='cy'>[ AI answer ]</span> \"See Smith &amp; Lee (2019), <span class='hl'>Journal of\n     Oncology Nutrition</span>, 14(3), pp. 210-225.\"\n  <span class='warnc'>The journal, authors, and DOI cannot be found anywhere.</span>",
    fields:[
      { label:"Error type", hint:"Made-up but confident.", options:["A simple typo","A hallucinated (fabricated) citation","A formatting error","A translation error"], answer:1, explain:"A detailed citation that does not exist is a hallucination: the model produced plausible-sounding but fabricated source details, a well-known AI failure mode." },
      { label:"Fitness of the output", hint:"Can it be used as-is?", options:["Fit to cite immediately","Not fit for use until an independent source is verified","Fit because it looks specific","Fit because the AI sounds confident"], answer:1, explain:"Specificity and confidence are not evidence; the output is unfit until a real, independently located source is confirmed. AI confidence does not equal accuracy." },
      { label:"Correct fix", hint:"Where does truth come from?", options:["Trust the citation because it's detailed","Search a real library/journal database and cite only a source you can open","Ask the AI to add a DOI and accept it","Publish the claim as-is"], answer:1, explain:"The fix is to verify against an authoritative database and cite only sources you can actually open; asking the AI to invent a DOI compounds the fabrication." },
      { label:"Claim status pending verification", hint:"Health claim, no real source.", options:["Confirmed true","Unsupported / must not be stated as fact","Proven by the AI","Peer-reviewed"], answer:1, explain:"With no locatable evidence, the health claim is unsupported and must not be presented as established fact, especially for a medical assertion." }
    ],
    summary:"The citation is a hallucination; treat it as unfit, verify the claim in a real journal database and cite only openable sources, and do not state the health claim as fact until verified." },

  { id:"PBQ-008", format:2, domain:4,
    title:"An Answer with a Stale Date",
    brief:"A user asked who currently holds a role. The AI answered confidently but its knowledge has a cutoff. Evaluate the reliability, identify the limitation, and pick the right verification move.",
    exhibitTitle:"output://stale-fact",
    exhibit:"  <span class='cy'>[ Prompt ]</span> Who is the current CEO of the company?\n  <span class='cy'>[ AI answer ]</span> \"The current CEO is <span class='hl'>Pat Morgan</span>.\"\n  <span class='cy'>[ Note ]</span> The model's training data <span class='warnc'>ends about a year ago</span>\n     and cannot see recent news.",
    fields:[
      { label:"Limitation at play", hint:"Time-bounded knowledge.", options:["The model is lying on purpose","A knowledge/training-data cutoff makes 'current' facts unreliable","A math error","A spelling mistake"], answer:1, explain:"Models answer from training data frozen at a cutoff, so anything described as 'current' may be outdated. This is a knowledge-cutoff limitation, not deception." },
      { label:"Fitness of the output", hint:"Time-sensitive claim.", options:["Fit as a definitive current answer","A lead to verify, not a definitive current answer","Fit because names are specific","Guaranteed up to date"], answer:1, explain:"A time-sensitive 'current' claim from a model with a cutoff is at best a lead to verify; it cannot be treated as guaranteed current fact." },
      { label:"Best verification move", hint:"Living, authoritative source.", options:["Assume it's right","Check the company's official 'Leadership' page or a recent reputable news source","Ask the same model again","Trust because it sounds confident"], answer:1, explain:"For a 'who is current' question, an official leadership page or recent reputable reporting is authoritative; re-asking the model can't overcome its cutoff." },
      { label:"How to present it to a reader", hint:"Be honest about recency.", options:["State it as certain fact","Present as 'as of the model's cutoff; verify current holder before relying'","Hide that AI was used","Delete the date entirely"], answer:1, explain:"Honest presentation flags the recency limitation and directs the reader to confirm the current holder, rather than asserting a possibly outdated name as fact." }
    ],
    summary:"The answer reflects a knowledge cutoff, so it's a lead not a fact; verify the current holder on the official leadership page or recent reporting and present it with a recency caveat." },

  { id:"PBQ-009", format:2, domain:4,
    title:"A Summary That Added a Claim",
    brief:"A user pasted an article and asked for a summary. The AI's summary includes a statistic that never appears in the source. Evaluate the summary, name the problem, and choose the correction.",
    exhibitTitle:"output://added-claim",
    exhibit:"  <span class='cy'>[ Prompt ]</span> Summarize the pasted article about remote work.\n  <span class='cy'>[ AI summary ]</span> \"...remote work improved morale, and\n     <span class='warnc'>productivity rose 42%</span>.\"\n  <span class='cy'>[ Source check ]</span> The article discusses morale but\n     <span class='hl'>contains no 42% figure or any productivity number</span>.",
    fields:[
      { label:"Error type", hint:"Content not in the source.", options:["Accurate summary","Fabricated detail / unsupported statistic inserted","Grammar mistake","Off-topic refusal"], answer:1, explain:"The 42% figure appears nowhere in the source, so the summary inserted an unsupported statistic, a fabrication. A faithful summary contains only what the source says." },
      { label:"Fitness as a faithful summary", hint:"Does it match the source?", options:["Faithful and ready to share","Not faithful; it misrepresents the source","Faithful because it's concise","Faithful because it mentions morale"], answer:1, explain:"Because it adds a claim the source never made, the summary is not faithful and would mislead a reader about what the article actually says." },
      { label:"Correct fix", hint:"Anchor to the text.", options:["Keep the 42% because it sounds plausible","Regenerate constrained to the source and remove any figure not in the article","Add more invented stats","Publish it unchanged"], answer:1, explain:"The fix is to re-summarize strictly from the source and strip any number the article doesn't contain; plausibility is not a substitute for being in the text." },
      { label:"Guardrail to prevent recurrence", hint:"Prompt-level control.", options:["Tell the model to be creative","Instruct 'use only the provided text; do not add facts or figures'","Remove the source next time","Ask for a longer summary"], answer:1, explain:"A prompt guardrail restricting the model to the provided text and forbidding added facts reduces fabrication; encouraging creativity would make it worse." }
    ],
    summary:"The summary fabricated a statistic and is unfaithful; regenerate it constrained to the source with any non-source figure removed, and add a 'use only the provided text' guardrail." },

  { id:"PBQ-010", format:2, domain:4,
    title:"Biased Tone in a Job Description",
    brief:"HR asked the AI to write a job posting. The draft uses language that could discourage some qualified applicants. Evaluate the draft, identify the issue, and choose the fix that improves fairness.",
    exhibitTitle:"output://biased-jd",
    exhibit:"  <span class='cy'>[ Prompt ]</span> Write a posting for a warehouse role.\n  <span class='cy'>[ AI draft ]</span> \"Seeking a <span class='warnc'>strong young man</span> who can be a\n     <span class='warnc'>rockstar ninja</span> and work like a machine.\"\n  <span class='cy'>[ Concern ]</span> Wording may <span class='hl'>deter women, older, or disabled\n     applicants</span> and reflect bias.",
    fields:[
      { label:"Issue type", hint:"Who gets excluded?", options:["Factual error","Biased / non-inclusive language","Broken formatting","A hallucinated citation"], answer:1, explain:"Phrases like 'young man' and 'work like a machine' signal bias and can exclude protected groups; this is a fairness/inclusivity problem, not a factual one." },
      { label:"Fitness to publish", hint:"Legal and ethical lens.", options:["Fit to post now","Not fit; the language is exclusionary and risky","Fit because it's energetic","Fit because it's short"], answer:1, explain:"Exclusionary wording is both ethically wrong and legally risky in a job posting, so the draft is unfit until the biased language is removed." },
      { label:"Correct fix", hint:"Focus on the work.", options:["Add more 'edgy' slang","Rewrite with neutral, skills-based language open to all qualified applicants","Specify an age range","Keep it but add a disclaimer"], answer:1, explain:"Rewriting around the actual skills and duties, in neutral language, makes the posting inclusive; adding an age range or a disclaimer does not remove the bias." },
      { label:"Human responsibility", hint:"Who owns the output?", options:["The AI is accountable","A human must review AI output for bias before it is published","No review needed","Blame the applicants"], answer:1, explain:"Accountability stays with the human user: AI drafts must be reviewed for bias and compliance before publication, because the organization owns the result." }
    ],
    summary:"The draft contains biased, exclusionary language and is unfit to post; rewrite it in neutral skills-based terms and have a human review AI output for bias before publishing." },

  { id:"PBQ-011", format:2, domain:4,
    title:"A Math Answer That Looks Off",
    brief:"A user asked the AI to compute a simple total for a budget. The AI returned a confident number that doesn't add up. Evaluate the result, name the limitation, and choose the verification step.",
    exhibitTitle:"output://bad-math",
    exhibit:"  <span class='cy'>[ Prompt ]</span> Add these costs: 1,250 + 980 + 3,400 + 615.\n  <span class='cy'>[ AI answer ]</span> \"The total is <span class='warnc'>$5,905</span>.\"\n  <span class='cy'>[ Quick check ]</span> 1,250 + 980 + 3,400 + 615 = <span class='ok'>6,245</span>\n     <span class='hl'>The AI's figure is wrong.</span>",
    fields:[
      { label:"Limitation at play", hint:"Language models and arithmetic.", options:["The AI hates the user","Language models can make arithmetic/calculation errors and still sound confident","A spelling issue","A network outage"], answer:1, explain:"Text-prediction models can produce arithmetic mistakes while sounding certain; numeric outputs need checking. This is a reasoning/calculation limitation." },
      { label:"Fitness of the number", hint:"It's a budget.", options:["Fit to enter into the budget","Not fit until recomputed and confirmed","Fit because it's a round-looking figure","Fit because the AI is confident"], answer:1, explain:"A financial total must be correct; the confident but wrong figure is unfit until independently recomputed and confirmed." },
      { label:"Best verification step", hint:"Deterministic tool.", options:["Ask the AI again and trust it","Re-add with a calculator or spreadsheet formula","Accept because it's close","Round it and move on"], answer:1, explain:"Re-adding with a calculator or spreadsheet gives a deterministic, correct total; re-asking the model doesn't guarantee it fixes the error." },
      { label:"General rule this illustrates", hint:"Where AI is weak.", options:["AI is always right about numbers","Always verify AI-generated calculations before relying on them","Never use AI for text","Confidence proves correctness"], answer:1, explain:"The lesson is to independently verify AI calculations before use; AI confidence is not proof of a correct number." }
    ],
    summary:"The total is wrong because models can miscalculate while sounding sure; recompute with a calculator or spreadsheet, and always verify AI-generated numbers before relying on them." },

  { id:"PBQ-012", format:2, domain:4,
    title:"An Answer to the Wrong Question",
    brief:"A user asked a specific question, but the AI answered a broader, different one and missed the actual ask. Evaluate the response, identify why it fell short, and choose the corrective action.",
    exhibitTitle:"output://off-target",
    exhibit:"  <span class='cy'>[ Prompt ]</span> What is the return window for <span class='hl'>opened</span>\n     electronics at this store?\n  <span class='cy'>[ AI answer ]</span> \"Most stores let you return items within\n     30 days.\" <span class='warnc'>(generic; ignores 'opened' and 'this store')</span>\n  <span class='cy'>[ Gap ]</span> No store-specific or opened-item policy given.",
    fields:[
      { label:"Why it fell short", hint:"Specific vs. generic.", options:["It hallucinated a citation","It gave a generic answer and missed the specific ask (opened items, this store)","It made a math error","It used biased language"], answer:1, explain:"The response answered a generic version of the question and ignored the key qualifiers 'opened' and 'this store', so it doesn't address what was asked." },
      { label:"Fitness of the answer", hint:"Did it meet the need?", options:["Fully answers the question","Does not answer the actual question; not fit as-is","Fit because it gives a number","Fit because it's polite"], answer:1, explain:"Because it omits the store-specific, opened-item policy the user needed, the answer is not fit for the actual question despite sounding reasonable." },
      { label:"Corrective action", hint:"Get the real policy.", options:["Accept the generic 30 days","Consult the store's official return policy for opened electronics","Assume all stores are the same","Ask the AI to repeat itself"], answer:1, explain:"The correct move is to check the store's own published policy for opened electronics, the authoritative source; a generic guess could be wrong for this store." },
      { label:"Prompt improvement", hint:"Reduce ambiguity.", options:["Make the prompt vaguer","Re-ask with the store named and 'opened item' emphasized, and ask it to say if unknown","Remove all details","Ask for a poem instead"], answer:1, explain:"A sharper prompt naming the store and the opened-item condition, and inviting the model to admit uncertainty, gets a more relevant answer or an honest 'I don't know'." }
    ],
    summary:"The answer is generic and misses the opened-item, store-specific ask; verify against the store's official policy and re-ask with the specifics emphasized and an option to say if unknown." },

  /* ============== FORMAT 3 : Verification Workflow (domain 4) ============== */

  { id:"PBQ-013", format:3, domain:4,
    title:"Verifying a Health Claim from AI",
    brief:"An AI stated a specific medical claim you plan to share in a wellness newsletter. Order the verification workflow and choose the source types that make the claim safe to publish or reject.",
    exhibitTitle:"verify://health-claim",
    exhibit:"  <span class='cy'>[ Claim from AI ]</span> \"<span class='hl'>Taking vitamin X daily cuts\n     the risk of illness Y in half.</span>\"\n  <span class='cy'>[ Use ]</span> wellness newsletter for the public\n  <span class='warnc'>Health claims carry real-world risk if wrong.</span>\n  <span class='cy'>[ Task ]</span> verify before publishing",
    fields:[
      { label:"First step", hint:"Don't start by publishing.", options:["Publish, then check later","Treat the claim as unverified until independently confirmed","Assume the AI is right","Ask the AI to confirm itself"], answer:1, explain:"Verification starts by treating any AI claim as unverified; publishing first or trusting the model's self-confirmation both skip the safety check." },
      { label:"Best source type", hint:"Authority for medical claims.", options:["A random blog","Peer-reviewed research or a recognized health authority (e.g., a major health agency)","A social media post","The AI's own restatement"], answer:1, explain:"Medical claims should be checked against peer-reviewed research or a recognized health authority; blogs, social posts, and the AI itself are not authoritative." },
      { label:"Cross-checking practice", hint:"One source is not enough.", options:["Trust the first hit","Corroborate across multiple independent reputable sources","Use only sources that agree with the claim","Stop after one blog"], answer:1, explain:"Corroborating across several independent reputable sources guards against a single error or outlier; cherry-picking agreeing sources is confirmation bias." },
      { label:"Decision if unconfirmed", hint:"Stakes are high.", options:["Publish anyway with a disclaimer","Do not publish the claim as fact; omit or clearly qualify it","Publish and hope","Blame the AI later"], answer:1, explain:"If reputable evidence doesn't confirm it, the claim must not be published as fact; a disclaimer doesn't make an unverified health claim safe." }
    ],
    summary:"Treat the AI health claim as unverified, check it against peer-reviewed research or a recognized health authority, corroborate across multiple independent sources, and don't publish it as fact unless confirmed." },

  { id:"PBQ-014", format:3, domain:4,
    title:"Checking a Statistic Before a Slide",
    brief:"An AI gave a specific statistic you want to put in a client presentation. Order the workflow to trace and confirm the number and pick the appropriate authoritative sources.",
    exhibitTitle:"verify://statistic",
    exhibit:"  <span class='cy'>[ Claim from AI ]</span> \"<span class='hl'>78% of small businesses use\n     cloud tools.</span>\"\n  <span class='cy'>[ Use ]</span> a slide for a paying client\n  <span class='warnc'>No source was provided with the number.</span>\n  <span class='cy'>[ Task ]</span> confirm and attribute it",
    fields:[
      { label:"First action", hint:"A number needs a home.", options:["Put it on the slide immediately","Find the original source of the statistic","Round it to 80% and move on","Assume it's fine"], answer:1, explain:"Before using a statistic you must trace it to its original source; putting an unattributed number on a client slide risks presenting a fabricated figure." },
      { label:"Preferred source type", hint:"Primary over hearsay.", options:["Another AI's guess","A primary source: the survey, report, or official dataset behind the number","A meme","A comment thread"], answer:1, explain:"The most reliable source is the primary study, report, or dataset that produced the statistic, not a secondhand mention or another AI." },
      { label:"If the number can't be traced", hint:"No source found.", options:["Use it anyway","Do not present it as fact; find a citable statistic or drop it","Make up a source","Change it slightly"], answer:1, explain:"An untraceable statistic should not be presented as fact; either substitute a properly sourced figure or remove the claim rather than invent attribution." },
      { label:"How to cite once confirmed", hint:"Enable the audience to check.", options:["No citation needed","Attribute the source and year so the client can verify it","Cite 'the internet'","Credit the AI tool"], answer:1, explain:"A confirmed statistic should carry a clear source and date so the audience can verify it; 'the internet' or crediting the AI is not a usable citation." }
    ],
    summary:"Trace the statistic to its primary source (the study or dataset), don't present it if untraceable, and cite the confirmed source and year so the client can verify it." },

  { id:"PBQ-015", format:3, domain:4,
    title:"Verifying AI-Generated Code Guidance",
    brief:"An AI suggested a configuration change for a work system. Before applying it, order the verification workflow and select the safe way to confirm it won't cause harm.",
    exhibitTitle:"verify://config-advice",
    exhibit:"  <span class='cy'>[ AI advice ]</span> \"<span class='hl'>Run this command to speed up the\n     server; it's completely safe.</span>\"\n  <span class='cy'>[ Context ]</span> a production system others rely on\n  <span class='warnc'>A wrong change could cause an outage.</span>\n  <span class='cy'>[ Task ]</span> verify before acting",
    fields:[
      { label:"First step", hint:"Trust but verify.", options:["Run it on production right now","Do not run unverified commands on production; verify first","Assume 'safe' means safe","Skip testing"], answer:1, explain:"'It's completely safe' from an AI is not assurance; unverified changes must never hit production first. Verification precedes action." },
      { label:"Authoritative reference", hint:"Vendor truth.", options:["The AI's word","Official product documentation or a trusted admin/knowledge base","A random forum reply","A rumor"], answer:1, explain:"Confirm the change against official vendor documentation or a trusted knowledge base, which describe the real effect, rather than relying on the AI's claim." },
      { label:"Safe testing practice", hint:"Contain the blast radius.", options:["Test only in production","Try it first in a test/non-production environment or a backup","Test on everyone's machines","Never test"], answer:1, explain:"Validating the change in a test environment or against a backup contains any damage; testing straight on production defeats the purpose of verification." },
      { label:"Human oversight", hint:"Who signs off?", options:["No approval needed","Follow change-control: review, approve, and back up before applying","Act alone in secret","Delete the logs"], answer:1, explain:"Production changes should go through change control, review, approval, and a backup, so a human owns the decision and rollback is possible." }
    ],
    summary:"Do not run unverified AI commands on production; confirm the change against official documentation, test it in a non-production environment or backup first, and follow change-control with human approval." },

  { id:"PBQ-016", format:3, domain:4,
    title:"Fact-Checking a Historical Detail",
    brief:"An AI gave a confident date and detail for a history article. Order the verification workflow and pick the source types that reliably confirm or refute a historical fact.",
    exhibitTitle:"verify://history-fact",
    exhibit:"  <span class='cy'>[ AI claim ]</span> \"<span class='hl'>The treaty was signed in 1847.</span>\"\n  <span class='cy'>[ Use ]</span> a published history article\n  <span class='warnc'>The AI gave no source and may be mistaken.</span>\n  <span class='cy'>[ Task ]</span> confirm the date before print",
    fields:[
      { label:"First action", hint:"Assume nothing.", options:["Print the date as given","Treat the date as a claim to verify, not a settled fact","Ask the AI to repeat it","Guess a nearby year"], answer:1, explain:"A confident but unsourced date is a claim to verify; models can state wrong dates convincingly, so it shouldn't be printed unchecked." },
      { label:"Reliable source type", hint:"Scholarly and primary.", options:["A discussion forum","Primary records or reputable academic/encyclopedic references","A social media post","The AI's paraphrase"], answer:1, explain:"Historical dates are best confirmed with primary records or reputable academic and encyclopedic references, not forum posts or the AI itself." },
      { label:"Handling conflicting sources", hint:"Sources disagree.", options:["Pick the AI's date","Weigh source reliability and note the discrepancy rather than asserting one date","Average the years","Ignore the conflict"], answer:1, explain:"When sources disagree, weigh their reliability and acknowledge the discrepancy instead of asserting a single date; averaging years is meaningless." },
      { label:"If it stays unconfirmed", hint:"Don't fake certainty.", options:["State it as fact anyway","Qualify it ('reported as') or omit it until confirmed","Invent a citation","Publish with false confidence"], answer:1, explain:"If the date can't be confirmed, qualify or omit it rather than assert false certainty or fabricate a source." }
    ],
    summary:"Verify the date against primary records or reputable academic references, weigh conflicting sources honestly, and qualify or omit the fact if it can't be confirmed rather than printing it as certain." },

  { id:"PBQ-017", format:3, domain:4,
    title:"Confirming a Legal-Sounding Requirement",
    brief:"An AI stated that a specific regulation requires a certain business action. Before advising a client, order the verification steps and pick the authoritative sources for a legal/compliance claim.",
    exhibitTitle:"verify://legal-claim",
    exhibit:"  <span class='cy'>[ AI claim ]</span> \"<span class='hl'>The law requires you to keep these\n     records for 7 years.</span>\"\n  <span class='cy'>[ Use ]</span> advice to a small-business client\n  <span class='warnc'>Wrong legal guidance can cause fines or liability.</span>\n  <span class='cy'>[ Task ]</span> verify before advising",
    fields:[
      { label:"First step", hint:"Legal stakes.", options:["Repeat it to the client as law","Treat it as unverified; confirm against the actual regulation","Assume the AI knows the law","Guess the number of years"], answer:1, explain:"Legal claims from AI must be confirmed against the actual regulation before being passed on; models can misstate or hallucinate legal requirements." },
      { label:"Authoritative source", hint:"Where laws live.", options:["A marketing blog","The official regulation text or a qualified legal professional","A social media thread","Another chatbot"], answer:1, explain:"The authoritative source is the official statute/regulation or a qualified legal professional, not blogs, threads, or another AI." },
      { label:"Scope check", hint:"Laws vary by place.", options:["One rule fits everywhere","Confirm the jurisdiction and that the rule applies to this client","Ignore location","Apply a foreign law blindly"], answer:1, explain:"Legal requirements vary by jurisdiction and situation, so confirm the rule actually applies to this client's location and circumstances." },
      { label:"Professional boundary", hint:"Know your limits.", options:["Give definitive legal advice from AI","Recommend a licensed professional for binding legal guidance","Guarantee the outcome","Hide that AI was consulted"], answer:1, explain:"For binding legal matters, direct the client to a licensed professional; presenting AI output as authoritative legal advice is inappropriate and risky." }
    ],
    summary:"Treat the legal claim as unverified, confirm it against the official regulation and the correct jurisdiction, and for binding guidance refer the client to a licensed professional rather than relying on AI." },

  { id:"PBQ-018", format:3, domain:4,
    title:"Verifying a Product Comparison",
    brief:"An AI produced a table comparing two products' specs to guide a purchase. Before buying, order the workflow to confirm the specs and choose where authoritative product data comes from.",
    exhibitTitle:"verify://product-specs",
    exhibit:"  <span class='cy'>[ AI table ]</span> Model A: <span class='hl'>12 hr battery</span>, 2 GB\n                Model B: <span class='hl'>8 hr battery</span>, 4 GB\n  <span class='cy'>[ Use ]</span> a real purchase decision\n  <span class='warnc'>Specs may be outdated or mixed up.</span>\n  <span class='cy'>[ Task ]</span> confirm before buying",
    fields:[
      { label:"First step", hint:"Don't buy on AI specs.", options:["Order Model A now","Verify each spec against the manufacturer before deciding","Trust the table fully","Flip a coin"], answer:1, explain:"Product specs from AI may be outdated or transposed, so confirm them before spending money; buying on unverified specs risks the wrong purchase." },
      { label:"Authoritative source", hint:"Official truth.", options:["The AI table","The manufacturer's official spec sheet or product page","A random review's guess","A rumor"], answer:1, explain:"The manufacturer's official spec sheet or product page is the authoritative source for current specifications, unlike an AI-generated table." },
      { label:"Cross-check with buyers", hint:"Real-world confirmation.", options:["Ignore user feedback","Corroborate with reputable independent reviews for real-world results","Only read the seller's ad","Skip all reviews"], answer:1, explain:"Reputable independent reviews corroborate real-world performance (like actual battery life); the seller's ad alone may overstate specs." },
      { label:"If specs conflict", hint:"Data disagree.", options:["Pick the AI numbers","Trust the manufacturer's current data and note where sources differ","Average the numbers","Buy both and hope"], answer:1, explain:"When the AI and official data disagree, rely on the manufacturer's current figures and note the discrepancy rather than the AI's possibly stale numbers." }
    ],
    summary:"Confirm each spec against the manufacturer's official page, corroborate with reputable independent reviews, and trust the manufacturer's current data over the AI table where they conflict before buying." },

  /* ============== FORMAT 4 : Responsible-Use Decision (domain 2) ============== */

  { id:"PBQ-019", format:4, domain:2,
    title:"Using AI to Draft a Public Blog Post",
    brief:"A marketer wants AI to draft a general, non-sensitive blog post about productivity tips. Risk-tier the task, decide whether AI use is appropriate, and determine what review and disclosure the situation calls for.",
    exhibitTitle:"decision://blog-draft",
    exhibit:"  <span class='cy'>[ Task ]</span> Draft a blog post: '5 productivity tips'\n  <span class='cy'>[ Data involved ]</span> <span class='ok'>none sensitive</span>, general advice\n  <span class='cy'>[ Stakes ]</span> low; public marketing content\n  <span class='cy'>[ Audience ]</span> general readers",
    fields:[
      { label:"Risk tier", hint:"No sensitive data, low stakes.", options:["High risk","Low risk","Prohibited","Life-safety critical"], answer:1, explain:"Drafting general, non-sensitive marketing content is a low-risk use; there's no confidential data and no safety or legal exposure." },
      { label:"Is AI use appropriate here?", hint:"Match tool to task.", options:["No, never use AI for writing","Yes, AI is well suited to drafting general content","Only with legal sign-off","Only offline"], answer:1, explain:"Drafting general content is a strong fit for AI; low-risk creative writing is one of its most appropriate uses." },
      { label:"Required review", hint:"Even low-risk drafts get checked.", options:["Publish the raw AI draft","Have a human edit for accuracy, tone, and brand fit before publishing","No review at all","Let the AI approve itself"], answer:1, explain:"Even low-risk output should get a human editing pass for accuracy, tone, and brand voice; the raw draft isn't automatically publish-ready." },
      { label:"Disclosure need", hint:"Follow policy, be honest.", options:["Always hide AI involvement","Disclose AI assistance if your organization's policy or context requires it","Claim a human wrote every word","Disclosure is illegal"], answer:1, explain:"Whether to label AI assistance depends on your organization's policy and context; the responsible default is honesty per that policy, not concealment." }
    ],
    summary:"Drafting a general blog post is low risk and a good fit for AI; still have a human edit for accuracy and brand fit, and disclose AI assistance where policy or context requires it." },

  { id:"PBQ-020", format:4, domain:2,
    title:"Pasting Customer PII into a Public Chatbot",
    brief:"An employee wants to paste a spreadsheet of customer names, emails, and card numbers into a public AI chatbot to 'clean it up'. Risk-tier this, decide whether it's acceptable, and choose the responsible alternative.",
    exhibitTitle:"decision://pii-paste",
    exhibit:"  <span class='cy'>[ Task ]</span> 'Clean up' a customer list with AI\n  <span class='cy'>[ Data involved ]</span> <span class='warnc'>names, emails, credit-card numbers (PII)</span>\n  <span class='cy'>[ Tool ]</span> a public consumer chatbot\n  <span class='warnc'>Pasted data may be stored or used for training.</span>",
    fields:[
      { label:"Risk tier", hint:"Regulated personal data.", options:["Low risk","High risk / potentially prohibited","No risk","Trivial"], answer:1, explain:"Sending regulated PII, especially card numbers, to a public tool is high risk and often prohibited by policy and privacy law due to exposure and retention." },
      { label:"Is this acceptable?", hint:"Confidentiality.", options:["Yes, it saves time","No, do not paste sensitive PII into a public AI tool","Yes, if you delete the chat","Yes, if it's fast"], answer:1, explain:"Confidential customer PII must not be entered into a public AI tool; deleting the chat afterward doesn't undo possible storage or training use." },
      { label:"Responsible alternative", hint:"Keep data protected.", options:["Email it to yourself first","Use an approved tool with appropriate data protections, or de-identify the data","Post it publicly","Print and shred it"], answer:1, explain:"Use only an organization-approved tool with proper data protections, or strip identifiers first; that preserves confidentiality while still getting help." },
      { label:"Governing principle", hint:"Data handling.", options:["Convenience over privacy","Protect confidential and personal data; follow data-handling policy","Share freely","Ignore compliance"], answer:1, explain:"The controlling principle is protecting personal and confidential data and following data-handling/privacy policy, which outweighs convenience." }
    ],
    summary:"Pasting customer PII into a public chatbot is high risk and unacceptable; use an approved, protected tool or de-identify the data first, following data-handling and privacy policy." },

  { id:"PBQ-021", format:4, domain:2,
    title:"AI-Assisted Content in an Academic Assignment",
    brief:"A student wants AI to help with a graded essay. Risk-tier the academic-integrity dimension, decide how AI may or may not be used, and determine the disclosure the situation requires.",
    exhibitTitle:"decision://academic-use",
    exhibit:"  <span class='cy'>[ Task ]</span> A graded essay for a course\n  <span class='cy'>[ Rule check ]</span> <span class='warnc'>syllabus limits AI use</span>\n  <span class='cy'>[ Temptation ]</span> submit AI text as one's own\n  <span class='cy'>[ Value at stake ]</span> <span class='hl'>academic integrity</span>",
    fields:[
      { label:"Risk tier", hint:"Integrity policy governs.", options:["No risk","Governed by academic-integrity rules; misuse is high risk","Always fine","Never allowed for anything"], answer:1, explain:"Graded work is governed by academic-integrity policy; submitting AI text as your own can be a serious violation, making misuse high risk." },
      { label:"Acceptable use", hint:"Assist vs. substitute.", options:["Submit AI output verbatim as your own","Use AI within the rules (e.g., brainstorming/feedback) and do your own work","Have AI write it all secretly","Copy a classmate instead"], answer:1, explain:"Where permitted, AI can support brainstorming or feedback, but the submitted work must be the student's own; passing off AI text as original is misconduct." },
      { label:"Disclosure obligation", hint:"Follow the policy.", options:["Never mention AI","Follow the course policy on disclosing AI assistance and cite as required","Hide it always","Claim you used no tools"], answer:1, explain:"The student must follow the course's disclosure/citation policy for AI assistance; concealing prohibited use is dishonest." },
      { label:"If the rules are unclear", hint:"When in doubt.", options:["Assume anything goes","Ask the instructor before using AI","Use it and hope","Copy from the internet"], answer:1, explain:"If the policy is ambiguous, ask the instructor first; assuming permission and guessing risks an integrity violation." }
    ],
    summary:"Graded work is governed by integrity rules, so use AI only as the policy allows, keep the submitted work your own, disclose AI assistance as required, and ask the instructor when the rules are unclear." },

  { id:"PBQ-022", format:4, domain:2,
    title:"AI Screening Job Applicants",
    brief:"A hiring team wants AI to auto-rank and reject applicants with no human review. Risk-tier the fairness and accountability concerns, decide how AI should be used, and set the required human role.",
    exhibitTitle:"decision://hiring-ai",
    exhibit:"  <span class='cy'>[ Task ]</span> Use AI to score and auto-reject applicants\n  <span class='cy'>[ Concern ]</span> <span class='warnc'>bias in training data, legal exposure</span>\n  <span class='cy'>[ Impact ]</span> <span class='hl'>people's livelihoods</span>\n  <span class='cy'>[ Proposal ]</span> no human in the loop",
    fields:[
      { label:"Risk tier", hint:"High-impact decisions about people.", options:["Low risk","High risk (consequential decisions, bias/legal exposure)","No risk","Purely cosmetic"], answer:1, explain:"Automated hiring decisions affect livelihoods and can encode bias with legal consequences, placing this in the high-risk category." },
      { label:"Should AI auto-reject with no review?", hint:"Human accountability.", options:["Yes, fully automate rejections","No; keep a human in the loop for consequential decisions","Yes, if it's faster","Yes, remove all humans"], answer:1, explain:"Consequential decisions about people should keep meaningful human oversight; fully automated rejection removes accountability and can propagate bias." },
      { label:"Bias mitigation step", hint:"Fairness check.", options:["Assume the model is fair","Audit the tool for bias and validate outcomes across groups","Ignore disparate impact","Hide the results"], answer:1, explain:"Responsible use requires auditing the tool for bias and checking outcomes across groups, since training data can embed discrimination." },
      { label:"Appropriate role for AI", hint:"Assist, don't decide alone.", options:["Sole decision-maker","A decision-support aid, with humans making final calls","Unaccountable gatekeeper","Replacement for all judgment"], answer:1, explain:"AI is appropriate as a decision-support aid to help humans, who make and own the final hiring decisions, not as an unaccountable sole decider." }
    ],
    summary:"Automated hiring is high risk; don't let AI auto-reject applicants without human review, audit the tool for bias across groups, and use AI only as decision support with humans making the final call." },

  { id:"PBQ-023", format:4, domain:2,
    title:"AI Chatbot Giving Medical Advice",
    brief:"A wellness app team wants an AI chatbot to give users specific diagnoses and treatment instructions. Risk-tier this, decide the responsible boundary, and set the disclosures and safeguards required.",
    exhibitTitle:"decision://medical-bot",
    exhibit:"  <span class='cy'>[ Task ]</span> Chatbot gives diagnoses + treatment steps\n  <span class='cy'>[ Domain ]</span> <span class='warnc'>health / medical</span>\n  <span class='cy'>[ Risk ]</span> <span class='hl'>wrong advice can harm users</span>\n  <span class='cy'>[ Model limits ]</span> can hallucinate, not a clinician",
    fields:[
      { label:"Risk tier", hint:"Safety-critical domain.", options:["Low risk","High risk (safety-critical, potential harm)","No risk","Cosmetic only"], answer:1, explain:"Medical diagnosis and treatment is safety-critical; incorrect AI advice can cause real harm, making this a high-risk use." },
      { label:"Responsible boundary", hint:"General info vs. diagnosis.", options:["Let AI diagnose and prescribe","Provide general information only and direct users to a professional for medical decisions","Guarantee cures","Replace doctors"], answer:1, explain:"The responsible boundary is general information plus a clear referral to a professional; AI should not diagnose or prescribe, which requires a licensed clinician." },
      { label:"Required disclosure", hint:"Set expectations.", options:["Imply it's a doctor","Clearly disclose it's an AI, not a medical professional, and not a substitute for care","Hide its limitations","Claim 100% accuracy"], answer:1, explain:"Users must be told they're interacting with an AI that is not a medical professional and not a substitute for care, so they don't over-rely on it." },
      { label:"Safety escalation", hint:"Emergencies.", options:["Handle emergencies with the bot","Escalate urgent/emergency situations to human help or emergency services","Ignore red flags","Delay all responses"], answer:1, explain:"For urgent or emergency signals the system must direct users to human help or emergency services rather than attempting to handle it with the chatbot." }
    ],
    summary:"A medical-advice chatbot is high risk; limit it to general information with a referral to professionals, clearly disclose it is not a clinician or a substitute for care, and escalate emergencies to human help." },

  { id:"PBQ-024", format:4, domain:2,
    title:"AI-Generated Marketing Image of Real People",
    brief:"A team wants AI to generate an ad image depicting real, identifiable public figures endorsing a product they never approved. Risk-tier the ethical and legal issues, decide whether to proceed, and set the responsible path.",
    exhibitTitle:"decision://deepfake-ad",
    exhibit:"  <span class='cy'>[ Task ]</span> AI image: real celebrities 'endorsing' us\n  <span class='cy'>[ Consent ]</span> <span class='warnc'>none obtained</span>\n  <span class='cy'>[ Issues ]</span> <span class='warnc'>likeness rights, deception, defamation</span>\n  <span class='cy'>[ Effect ]</span> <span class='hl'>misleads the public</span>",
    fields:[
      { label:"Risk tier", hint:"Consent, rights, deception.", options:["Low risk","High risk / likely prohibited","No risk","Harmless fun"], answer:1, explain:"Fabricating unapproved endorsements from identifiable real people raises likeness-rights, deception, and defamation issues, making it high risk and likely prohibited." },
      { label:"Should the team proceed?", hint:"Deceptive and non-consensual.", options:["Yes, it's eye-catching","No; it's deceptive and uses likenesses without consent","Yes, if it goes viral","Yes, celebrities won't notice"], answer:1, explain:"Creating deceptive, non-consensual endorsements is not acceptable regardless of impact; it misleads the public and violates rights." },
      { label:"Responsible alternative", hint:"Honest and licensed.", options:["Deepfake more celebrities","Use consenting talent or licensed imagery and make endorsements truthful","Hide who's depicted","Fake a testimonial"], answer:1, explain:"The responsible path is consenting talent or properly licensed imagery with truthful endorsements; fabricating testimonials repeats the violation." },
      { label:"Governing principles", hint:"Ethics + law.", options:["Attention at any cost","Honesty, consent, and respect for likeness and IP rights","Deception is fine if clever","Ignore the law"], answer:1, explain:"The controlling principles are honesty, consent, and respect for likeness and intellectual-property rights, which override the pull of attention-grabbing content." }
    ],
    summary:"Fabricating unapproved celebrity endorsements is high risk and unacceptable; don't proceed, use consenting talent or licensed imagery with truthful claims, and respect consent, honesty, and likeness/IP rights." },

  /* ============== FORMAT 5 : Context & Safety Selection (domain 3) ============== */

  { id:"PBQ-025", format:5, domain:3,
    title:"Context for a Sales Follow-Up Email",
    brief:"You'll ask AI to draft a follow-up email to a prospect. From the candidate files, choose which are safe and relevant to attach as context and which to withhold to protect confidentiality.",
    exhibitTitle:"context://sales-followup",
    exhibit:"  <span class='cy'>[ Candidate context ]</span>\n  1) <span class='ok'>This prospect's public meeting notes</span>\n  2) <span class='ok'>The product one-pager (public)</span>\n  3) <span class='warnc'>Another client's signed contract w/ pricing</span>\n  4) <span class='warnc'>Internal employee salary sheet</span>\n  <span class='cy'>[ Goal ]</span> personalized, accurate follow-up",
    fields:[
      { label:"Attach the meeting notes?", hint:"Relevant, about this prospect.", options:["No, irrelevant","Yes, relevant and about this prospect","No, it's confidential to others","Only if encrypted"], answer:1, explain:"Notes from this prospect's own meeting are relevant and appropriate context for a personalized follow-up, and they aren't someone else's confidential data." },
      { label:"Attach the public product one-pager?", hint:"Public collateral.", options:["No, never share product info","Yes, it's public and helps accuracy","No, it's secret","Only to competitors"], answer:1, explain:"A public product one-pager is safe to use and improves accuracy; it contains no confidential information." },
      { label:"Attach another client's contract?", hint:"Someone else's confidential deal.", options:["Yes, for pricing ideas","No, it's another client's confidential information","Yes, clients won't mind","Only the pricing page"], answer:1, explain:"Another client's signed contract and pricing is confidential to them and must be withheld; exposing it would breach that client's confidentiality." },
      { label:"Attach the salary sheet?", hint:"Sensitive internal HR data.", options:["Yes, it adds detail","No, it's sensitive internal data unrelated to the task","Yes, redact names only","Attach half of it"], answer:1, explain:"Employee salaries are sensitive internal HR data with no relevance to a sales email; they must be withheld." }
    ],
    summary:"Attach the prospect's own meeting notes and the public one-pager for relevant, safe context; withhold the other client's confidential contract and the internal salary sheet as sensitive and irrelevant." },

  { id:"PBQ-026", format:5, domain:3,
    title:"Context for Summarizing a Support Ticket",
    brief:"You'll ask AI to summarize a customer support ticket and suggest a reply. Choose which candidate context is safe and relevant to include and which sensitive fields to strip first.",
    exhibitTitle:"context://support-ticket",
    exhibit:"  <span class='cy'>[ Candidate context ]</span>\n  1) <span class='ok'>The customer's described problem</span>\n  2) <span class='ok'>The public product FAQ</span>\n  3) <span class='warnc'>The customer's full credit-card number</span>\n  4) <span class='warnc'>The customer's account password</span>\n  <span class='cy'>[ Goal ]</span> accurate summary + helpful reply",
    fields:[
      { label:"Include the described problem?", hint:"Core to the task.", options:["No","Yes, it's the essential, relevant content","No, it's private","Only the subject line"], answer:1, explain:"The customer's description of the problem is the essential context needed to summarize and reply; it's the point of the task." },
      { label:"Include the public FAQ?", hint:"Public reference.", options:["No, hide the FAQ","Yes, it's public and aids an accurate answer","No, it's confidential","Only for VIPs"], answer:1, explain:"A public product FAQ is safe and useful reference material that helps produce an accurate reply." },
      { label:"Include the full card number?", hint:"Highly sensitive PII.", options:["Yes, for the record","No, strip it; it's sensitive and unnecessary","Yes, mask nothing","Include the last 8 digits"], answer:1, explain:"A full credit-card number is highly sensitive and irrelevant to a support summary, so it must be stripped before sending context to AI." },
      { label:"Include the account password?", hint:"Secret credential.", options:["Yes, it helps","No, never share credentials with the tool","Yes, if hashed","Include half of it"], answer:1, explain:"Account passwords are secret credentials that should never be shared with an AI tool; they're unnecessary and dangerous to expose." }
    ],
    summary:"Include the customer's problem description and the public FAQ as safe, relevant context; strip the full card number and the password as sensitive credentials the task doesn't need." },

  { id:"PBQ-027", format:5, domain:3,
    title:"Context for a Research Literature Brief",
    brief:"You'll ask AI to help write a brief on a research topic. Choose which sources are both safe to use and reliable enough to feed as context, and which to exclude.",
    exhibitTitle:"context://research-brief",
    exhibit:"  <span class='cy'>[ Candidate sources ]</span>\n  1) <span class='ok'>Peer-reviewed articles you have rights to</span>\n  2) <span class='ok'>A reputable government dataset (public)</span>\n  3) <span class='warnc'>An anonymous forum rant, no sourcing</span>\n  4) <span class='warnc'>A paywalled book's full text you don't own</span>\n  <span class='cy'>[ Goal ]</span> accurate, credible brief",
    fields:[
      { label:"Use the peer-reviewed articles?", hint:"Credible and licensed.", options:["No, too formal","Yes, credible and you have rights to them","No, they're unreliable","Only the titles"], answer:1, explain:"Peer-reviewed articles you're licensed to use are both credible and permissible, ideal context for an accurate brief." },
      { label:"Use the public government dataset?", hint:"Authoritative and open.", options:["No, government data is biased","Yes, it's authoritative and public","No, it's copyrighted secret","Only if it's old"], answer:1, explain:"A reputable public government dataset is authoritative and openly usable, strong evidence for the brief." },
      { label:"Use the anonymous forum rant?", hint:"No sourcing, low reliability.", options:["Yes, it's a real opinion","No, it's unsourced and unreliable","Yes, quote it as fact","Use it as the main source"], answer:1, explain:"An anonymous, unsourced rant is unreliable and shouldn't be treated as evidence; feeding it as context risks importing false claims." },
      { label:"Use the paywalled book you don't own?", hint:"Rights problem.", options:["Yes, copy the whole text","No, you lack rights to use the full text","Yes, piracy is fine","Share it widely"], answer:1, explain:"Uploading the full text of a paywalled work you don't own raises copyright/rights issues, so exclude it even though it might be relevant." }
    ],
    summary:"Feed the licensed peer-reviewed articles and the public government dataset as credible, permissible context; exclude the unsourced forum rant (unreliable) and the paywalled book text you don't own (rights)." },

  { id:"PBQ-028", format:5, domain:3,
    title:"Context for an Internal Policy Rewrite",
    brief:"You'll ask AI to help rewrite a company policy in plainer language. Choose which materials are safe and relevant to attach and which to withhold because they're sensitive or off-topic.",
    exhibitTitle:"context://policy-rewrite",
    exhibit:"  <span class='cy'>[ Candidate context ]</span>\n  1) <span class='ok'>The current policy text to be rewritten</span>\n  2) <span class='ok'>The company's public style guide</span>\n  3) <span class='warnc'>Unreleased merger plans (confidential)</span>\n  4) <span class='warnc'>A list of employees on a disciplinary watch</span>\n  <span class='cy'>[ Goal ]</span> clearer policy, same meaning",
    fields:[
      { label:"Attach the current policy text?", hint:"The thing being rewritten.", options:["No","Yes, it's the necessary source to rewrite","No, it's secret","Only the title"], answer:1, explain:"The current policy is the exact material being rewritten, so it's necessary and appropriate context." },
      { label:"Attach the public style guide?", hint:"Guides tone, not sensitive.", options:["No, ignore style","Yes, it helps match tone and format","No, it's confidential","Only for executives"], answer:1, explain:"A public style guide helps the rewrite match the company's tone and formatting and contains nothing sensitive." },
      { label:"Attach the unreleased merger plans?", hint:"Highly confidential, off-topic.", options:["Yes, for background","No, they're confidential and irrelevant","Yes, everyone should know","Attach a summary"], answer:1, explain:"Unreleased merger plans are highly confidential and unrelated to a policy rewrite, so they must be withheld." },
      { label:"Attach the disciplinary watch list?", hint:"Sensitive personnel data.", options:["Yes, it adds context","No, it's sensitive personnel data with no relevance","Yes, redact later","Attach initials only"], answer:1, explain:"A disciplinary watch list is sensitive personnel information irrelevant to the task and must be withheld to protect those employees." }
    ],
    summary:"Attach the current policy text and the public style guide as the relevant, safe context; withhold the confidential merger plans and the sensitive disciplinary list as off-topic and protected." },

  { id:"PBQ-029", format:5, domain:3,
    title:"Context for a Financial Report Narrative",
    brief:"You'll ask AI to draft the narrative around already-approved financial figures. Choose which inputs are safe and relevant and which non-public or sensitive items to keep out.",
    exhibitTitle:"context://finance-narrative",
    exhibit:"  <span class='cy'>[ Candidate context ]</span>\n  1) <span class='ok'>The approved, public quarterly figures</span>\n  2) <span class='ok'>Last year's published annual report</span>\n  3) <span class='warnc'>Non-public earnings before announcement</span>\n  4) <span class='warnc'>Customers' individual bank-account numbers</span>\n  <span class='cy'>[ Goal ]</span> clear narrative around approved numbers",
    fields:[
      { label:"Use the approved public figures?", hint:"Cleared for release.", options:["No","Yes, they're approved and public","No, they're secret","Only totals"], answer:1, explain:"Figures already approved and public are the intended, safe basis for the narrative." },
      { label:"Use last year's published report?", hint:"Already public context.", options:["No, it's outdated garbage","Yes, it's public and useful for comparison","No, it's confidential","Only the cover"], answer:1, explain:"A previously published annual report is public and provides legitimate comparative context for the narrative." },
      { label:"Use non-public earnings before announcement?", hint:"Material non-public info.", options:["Yes, get ahead of it","No, it's material non-public information","Yes, leak it","Share with friends"], answer:1, explain:"Non-public earnings are material non-public information; using or exposing them early is improper (and can be illegal), so withhold until released." },
      { label:"Use customers' bank-account numbers?", hint:"Sensitive PII, irrelevant.", options:["Yes, for detail","No, they're sensitive and irrelevant","Yes, mask nothing","Include a few"], answer:1, explain:"Customer bank-account numbers are highly sensitive PII with no bearing on a report narrative and must be excluded." }
    ],
    summary:"Use the approved public figures and last year's published report as safe, relevant context; keep out the pre-announcement non-public earnings and customers' bank-account numbers as material non-public and sensitive data." },

  { id:"PBQ-030", format:5, domain:3,
    title:"Context for an IT Troubleshooting Assist",
    brief:"You'll ask AI to help diagnose a laptop error. Choose which details are safe and relevant to share and which secrets or unnecessary personal data to withhold from the tool.",
    exhibitTitle:"context://it-assist",
    exhibit:"  <span class='cy'>[ Candidate context ]</span>\n  1) <span class='ok'>The exact error message text</span>\n  2) <span class='ok'>The OS version and what you were doing</span>\n  3) <span class='warnc'>Your admin password + a VPN key</span>\n  4) <span class='warnc'>Unrelated personal photos on the device</span>\n  <span class='cy'>[ Goal ]</span> accurate troubleshooting steps",
    fields:[
      { label:"Share the exact error message?", hint:"Directly diagnostic.", options:["No, paraphrase vaguely","Yes, the exact text helps diagnose it","No, it's secret","Only the error code color"], answer:1, explain:"The precise error message is directly diagnostic and safe to share; it's the most useful clue for accurate troubleshooting." },
      { label:"Share the OS version and your actions?", hint:"Relevant technical context.", options:["No, irrelevant","Yes, environment and steps taken are relevant","No, that's private","Only the brand"], answer:1, explain:"The OS version and what you were doing give the model the technical context to suggest relevant steps, and they're not sensitive secrets." },
      { label:"Share the admin password and VPN key?", hint:"Live credentials.", options:["Yes, for full access","No, never share credentials or keys","Yes, if you rotate later","Share just the password"], answer:1, explain:"Admin passwords and VPN keys are live credentials that should never be pasted into an AI tool; they're unnecessary for diagnosis and dangerous to expose." },
      { label:"Share unrelated personal photos?", hint:"Irrelevant private data.", options:["Yes, more data is better","No, they're irrelevant private data","Yes, upload the album","Share a few"], answer:1, explain:"Personal photos are irrelevant to a technical error and are private data, so there's no reason to share them with the tool." }
    ],
    summary:"Share the exact error text and the OS/version and your actions as relevant, safe context; withhold the admin password and VPN key (live credentials) and unrelated personal photos (irrelevant private data)." }

);
