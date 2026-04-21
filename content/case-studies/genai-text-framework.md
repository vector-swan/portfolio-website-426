# GenAI Text Framework (Accelerate Component Library)

**Role:** Lead Designer (founding and sole)
**Timeline:** March 2023 – July 2025
**Context:** Workday's first shipped AI product — the component system every product team builds against

---

## HERO

**Headline:** Workday's first generative AI feature. Built to work anywhere.

**Chips:** Lead Designer · 2023–2025 · Workday's first shipped AI product

---

## THE PROBLEM

**Heading:** There was no pattern for AI in Workday. We had to build one.

By 2023, multiple Workday product teams were building AI-powered features independently. Job description generation, feedback suggestions, email drafting — each team was designing and engineering their AI UI from scratch. The result:

- No shared components. Every team's sparkle button looked different, behaved differently, was positioned differently.
- No shared interaction model. Some features used modals, some used inline text replacement, some triggered on click, some loaded automatically.
- No shared trust signals. AI disclaimers and feedback mechanisms were inconsistent or absent.
- Redundant engineering effort. Every team built the same loading states, the same popovers, the same error handling.

We needed a framework — one that gave every product team a consistent foundation without removing their ability to adapt to their specific context.

---

## TWO KINDS OF USERS. TWO SETS OF NEEDS.

We designed for two audiences at once: the application teams building AI features into their products, and the end users of those products. Our first use case was the job requisition flow — one of Workday's most-used HR tasks. The job requisition team became our primary partner: they understood their users deeply and carried feedback from real end-user testing back to us.

This two-layer model shaped everything. If the framework didn't work for the application teams trying to adopt it, it would never reach end users at all.

---

## THE INSIGHT

**Heading:** It had to feel native, not bolted on.

Workday is built on forms and fields. For AI text generation to work here it had to be invisible infrastructure, not a feature dropped into the middle of someone's workflow. The framework needed to feel like it belonged in whatever surface it lived in.

---

## THE FAAB WASN'T THE ORIGINAL IDEA

**Heading:** A constraint pushed us to a better solution.

Early concepts used standard buttons placed above or below the text field — the conventional approach. It worked, but it broke down fast. Workday's XO framework is rigid: adding elements above or below a field disrupts the page layout, and not every surface had room for it. We needed something that could appear *inside* any text field, anywhere in the product, without touching the surrounding layout.

That constraint pushed us to the Floating AI Action Button — an entry point that lives within the field itself. It could land on any surface, in any context, without requiring layout changes from the adopting teams.

---

## WHAT I BUILT

**Heading:** Three parts that became the foundation for every text generation feature at Workday.

**01 — Floating AI Action Button (FAAB)**
A context-aware button that floats 8px from the bottom-right corner of any text area. Two variants: a labeled Primary Prompt button (single AI action) and an icon-only Prompt Action button (multiple actions, opens a menu). The button reads its context — once text is present in a field, it switches variants automatically.

**02 — Generation Menu**
Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine. Context-aware: Proofread requires selected text, so it's disabled until something is highlighted.

**03 — AI Content Popover**
The workspace where users review and decide on generated text before it enters their field. Draggable and resizable. Shows the AI disclaimer, data sources used, and three actions: Insert, Replace, Regenerate.

**Required fields messaging pattern** (often overlooked, always necessary):
When a prompt requires data the user hasn't filled in yet, the button can't generate meaningfully. Rather than failing silently, I defined a specific contextual message: *"Fill in Job Posting Title and Job Profile to 'Generate Job Description'."* This prevented one-off error messages across 17+ teams and gave users a clear path forward.

---

## KEY DECISION: SEE IT BEFORE IT LANDS

The preview popover was the most important call on this project. AI output is unpredictable. Users needed to feel in control before trusting it. Seeing the result first — before it lands in their document — is what made adoption possible. Without that step, one bad output would have killed confidence in the whole feature.

**The positioning behavior came from watching users.**
Early designs placed the popover in a fixed location. In testing, users kept moving it out of the way to see the original field and the generated text simultaneously. The insight was simple: once you move it, you've told the product where you want it. So subsequent openings return to wherever the user last positioned it. A small implementation detail with a real behavioral insight behind it.

As new use cases emerged, some flows opened content in a separate screen, making the popover redundant. Knowing when to skip it without breaking the core trust pattern was one of the harder design problems on this project.

---

## RESPONSIBLE AI

**Heading:** Getting the disclosure language right mattered.

This was new territory for the company legally. I worked directly with Workday's legal team to get AI disclosure language approved. That copy went through multiple rounds of revision — the tension was between legal's need for explicit disclaimers and users' need for language that didn't feel alarming or interrupt their workflow. Getting that balance right was required before anything could ship.

> **[STRENGTHEN IF POSSIBLE:]** Any specific example of a revision round or a specific tension point you remember? One concrete moment makes this much stronger.

---

## THE SYSTEM GROWS: SUMMARIZATION

**Heading:** Naming the category is half the work.

By 2025, summarization had emerged as a major use case — recruiting needed interview feedback summaries, Learning needed content feedback summaries, Student needed registration troubleshooting summaries. But the framework wasn't built for them.

**Summarization is not generation.** Generation happens *inside* a text field — user-initiated, AI populates a field they own. Summarization happens *alongside* existing data — AI reads structured records already on the page and surfaces a synthesis. The user didn't click a button in a text field. The output doesn't go into anything they're editing. The existing FAAB + popover pattern was designed for the wrong model entirely.

Every team was solving this independently. I framed it as a platform problem and wrote a design brief scoping a Summarization component system. Defining three display modes (inline, card, popover), two trigger types (auto-load vs. button-click), and a citation pattern as a platform-level standard — so every AI surface in Workday, generation and summarization, surfaced data sources consistently.

**Summarization shipped in 25R2.** The design principle in both use cases: the summary is additive, not replacement. Source data stays visible. AI reduces time-to-insight without asking users to trust it blindly.

---

## CROSS-ORG IMPACT: RISING GUIDELINES

In my final weeks on the project, designers across multiple product teams were independently designing AI cards for demos at RISING — Workday's major public user conference — with no shared standard.

No one asked me to solve this. I solved it anyway.

I authored AI Card Guidelines for RISING: required elements, loading state variants, and eight layout variations mapped to real display contexts. The design principle I led with:

> *"The cards you design don't have to be twins, but they need to be siblings."*

That phrase did real work. It gave designers a clear mental model — consistent in required elements, voice, and trust signals; flexible in layout and content structure. It respected that product designers know their context better than a central guidelines doc can, while still establishing the non-negotiables.

---

## IMPACT

**Stats:**
- 17 active use cases as of June 2025: 7 GA, 2 EA, 8 in development
- 52,400 AI interactions per week (Feedback Suggestions — highest-usage feature)
- 587 enterprise tenants on the highest-usage feature alone
- Additional tenant reach: Talent Highlights (209), Ad Hoc Worker (233), Summarize Content Feedback (136), Job Descriptions (63)
- 70%+ feature delivery speed improvement target for Q3 FY26 — direct result of platform standardization

> **[NOTE: The portfolio currently shows "750+ enterprise customers, 4,000+ users, 7 features in GA." These are still accurate but the metrics above are more specific and compelling for Netflix. Consider updating or combining.]**

---

## OUTCOME

The framework became the backend every product team builds against. When an engineer implements a new GenAI feature on the Accelerate Platform, they're building against this spec — connected to Storybook and technical documentation, not just design mockups. The component library made consistency something engineers implement rather than designers enforce.

**Reframe the handoff:** When the project transitioned to a new team, it was because the framework was mature enough to hand off — while the team that built it moved to Workday's highest-priority agentic work. That's a success story, not a deprioritization.

---

## CLOSING QUOTE

*"AI design is not about the UI. It is about what happens when the output is wrong, unexpected, or just not quite right. Every trust pattern in this framework exists because of that question."*

---

## OPEN QUESTIONS FOR MIA

> **1. Stickiness metric discrepancy:**
> The current portfolio and resume say "34% weekly stickiness." The context files say stickiness was 15.6% in June 2025 against a 25%+ target. These may be from different time periods (34% could be an early metric, 15.6% is the more recent figure). Which is accurate for the portfolio? We should use the honest number — Netflix will ask.
>
> **2. Visuals:**
> The context files mention Figma assets covering: FAAB specs, AI Content Popover specs, component library overview, RISING guidelines, and all the generation use case screens (Job Description, Ad Hoc Worker, Talent Highlights, etc.). Even one exported screen with annotations would dramatically strengthen this case study. Do you have access to any of these Figma exports?
>
> **3. The "not twins but siblings" section:**
> Is this the right case study for the RISING guidelines story, or does it belong in a separate section about standards/influence? It could also serve as a great stand-alone moment in the About or Skills section.

---

## VISUALS WISHLIST

- FAAB component spec (even a Figma screenshot)
- AI Content Popover in results state
- Job Description generation flow (4 states)
- Summarization use case (Interview Feedback or Registration Troubleshooting)
- Anything showing the component in a real product context
