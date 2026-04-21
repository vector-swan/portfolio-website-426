# Prompt Engineering Studio

**Role:** Founding and sole designer
**Timeline:** March 2023 – July 2025
**Team:** Grew from 3 to 20+ over the project

---

## HERO

**Headline:** Designing the tool that taught Workday how to prompt.

**Chips:** Sole Designer · 2023–2025 · Team: 3 to 20+

---

## THE PROBLEM

**Heading:** Every prompt test needed an engineering ticket.

Every change meant another wait. Product managers had ideas for AI features but no way to build or test them without pulling in an engineer. In 2023, nobody at Workday had a faster path.

---

## THE INSIGHT

**Heading:** This was not just a tooling gap. It was a knowledge gap.

When I started, I barely understood prompt engineering myself. If I was going to design a tool that PMs could actually use, I had to learn it first — then figure out how to make that learning curve shorter for everyone else.

---

## DISCOVERY: WHAT RESEARCH ACTUALLY FOUND

**Heading:** Five PMs. Five use cases. One consistent breakdown.

Before designing anything, I ran a moderated usability study with five Product Managers across five Workday product lines: Job Descriptions, Machine Learning for Finance, VNDLY, Knowledge Base, and Growth Plans. Each came with a real use case. Each attempted to build a prompt using an early working prototype.

**What broke, consistently:**

**Action vs. Context wasn't intuitive.** Every participant struggled to distinguish the two fields — most wrote their entire prompt in one box, or put output instructions in the wrong place. The hint text was too similar between fields. The problem wasn't that the structure was wrong; it was that users had no prior mental model to attach it to.

**The guidance was valuable but invisible.** I'd designed a prompt guide panel that opened when users clicked on a segment label. Those who found it rated it highly useful. Almost no one found it on their own.

**Model selection created friction without value.** One participant put it directly: *"I feel like it almost puts more cognitive burden on me to actually see this. I don't know if this can be done behind the scenes by the ML team choosing a model based on testing they've done."* That quote became a design brief.

**Template-able domains worked. Subjective ones didn't.** Job descriptions — a structured, industry-standard format — were easy to prompt for. Performance review content, feedback quality, talent assessments — highly configurable, deeply subjective — broke the example-driven model. There's no canonical template for what "good" feedback looks like.

**Users wanted traceability.** *"Appreciated the multiple prompt outputs, would like the ability to see the prompt associated with the output."* Without a link between prompt configuration and output, iterating felt arbitrary.

**Educational helpfulness rated 3–4 out of 5** — not bad for a first prototype, but with clear gaps in discoverability and scaffolding.

---

## THE DECISION: KEEP THE STRUCTURE, FIX THE SCAFFOLDING

After research, there was pressure to simplify the prompt composer to a single free-text input. I pushed back.

The three-segment model — Action, Context, Example — was doing real work. Users who engaged with it wrote better prompts. The structured format forced PMs to articulate what they actually wanted from the model, rather than writing conversationally and hoping for the best.

The problem wasn't the structure. It was discoverability and onboarding.

My response: redesign the educational scaffolding rather than remove the structure.
- Rewrote hint text to be concrete and specific to each field
- Made guide examples copy-pasteable — research showed this was the key unlock for hesitant users
- Abstracted model selection with a smart default, keeping advanced options accessible but out of the critical path
- Addressed the guide's discoverability in the first-time user flow

---

## WHAT I BUILT

**Heading:** Six features that took a prompt from idea to production.

**01 — Prompt Builder**
Structured fields for Action, Context, and Example — with redesigned educational scaffolding based on research findings.

**02 — Variables System**
Reusable prompts with dynamic data fields so the same prompt works across different roles, locations, and inputs.

**03 — Contextual Preview**
See your prompt as the end user would, inside the actual product surface — not just raw output.

**04 — Evaluation Framework**
A structured human-in-the-loop testing system for validating prompt quality before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing was deliberate — PMs work alongside engineers, and software QA concepts gave them a bridge.

**05 — Version History**
Go back to any previous version at any point. Addresses the traceability need surfaced directly in research.

**06 — Deploy Handoff + Deploy Alerts**
Everything an engineer needs to push to test or production in one place — plus two specific warning systems (Curly Braces Warning, Variables with Hyphens) that catch technical issues before they silently break in production. Designed by working backward from engineering constraints: what does a PM need to know before they publish that they can't discover until something breaks?

---

## PROCESS

**Heading:** Seeing it built is faster than designing it blind.

Understanding LLM evaluations was genuinely hard. Rather than wireframe something I didn't fully grasp, I had an engineer build a working prototype in v0 so I could see how it functioned first. That changed how I work. For complex technical concepts, seeing the functionality first is faster than designing something I can't fully understand yet.

The Prompt Lifecycle Map — a cross-functional Miro artifact showing the full path from Studio authoring to production deployment — became the most-referenced onboarding artifact for every product team that adopted the platform. Engineers and PMs were consistently confused about dependencies and timing. Making the lifecycle visible solved that.

---

## WHAT I ADVOCATED FOR THAT DIDN'T SHIP

The Prompt Wizard was a design direction I believed in from early in the project: instead of asking PMs to understand prompt structure and fill in three blank fields, guide them through a wizard that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept.

Leadership repeatedly deprioritized it. Engineering cost was the constraint.

I include this because it's honest: I ran the research to validate the concept, made the case repeatedly, and was overruled. The research data became part of the roadmap conversation even after I transitioned. That's a form of influence that doesn't always show up in shipped features — but it's real.

---

## IMPACT

**Stats:**
- 450 unique internal users
- 34% weekly stickiness (SaaS average: 13%)
- 3,808 prompt generations in the first 30 days
- Evaluate: 8/8 users preferred the new evaluation workflow over manual testing
- ~6,200 generation runs per month by June 2025
- 17 active use cases on the platform: 7 GA, 2 EA, 8 in development

---

## OUTCOME

The team's track record on this project — shipping AI tooling that actually got adopted — was what moved us to Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.

---

## CLOSING QUOTE

*"The fastest way to understand a new technology is to design for someone who knows even less than you do."*

---

## VISUALS NEEDED

Priority images for this case study:
- Compose screen (populated, showing three segments)
- Deploy Alerts: Curly Braces Warning (yellow warning state) — shows technical precision
- Evaluate feature: Test Suite or empty state
- All Published Prompts table — shows end-to-end pipeline thinking

> **Note on the "2,000+ hackathon projects supported" stat:** This was in the previous version but not confirmed in source files. Do not include until verified.
