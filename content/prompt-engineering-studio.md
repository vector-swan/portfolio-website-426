# Prompt Engineering Studio — case study copy

Edit this file, then ask Cursor to sync changes to `src/pages/PromptEngineeringStudio.tsx`.

---

## Hero

**Eyebrow:** Prompt Engineering Studio

**Headline:** Designing the tool that *taught* Workday how to prompt. *(italic on “taught”)*

**Role line:** Sole Designer · Founding | 2023–2025 | Team: 3 to 20+

---

## The Problem

**Label:** THE PROBLEM

**Heading:** Gen AI didn't exist in Workday.

**Body:** Before the text framework existed, there was no way for non-technical teams to build or test product features without an engineering ticket.

---

## Discovery

**Label:** DISCOVERY

**Heading:** Five PMs and five different use cases.

**Body:** I used a working POC that engineering and I had built to run a usability study with five PMs across five Workday product lines. The tool structured prompts into three fields: Action, Context, and Example. Each PM came with a real use case and tried to build from scratch.

**Findings label:** What we found

**Findings:**

- **The three fields weren't clearly distinct** — most participants put everything into one box.
- **Guidance was there but nobody found it** — almost no one discovered the help panel on their own.
- **Too many advanced controls** — model settings overwhelmed PMs who lacked the context to choose.
- **No way to track iterations** — every prompt version felt like starting over.

---

## The Decision

**Label:** THE DECISION

**Heading:** After research, I wanted one box. / Engineering pushed back.

**Body:** My read of the research was to simplify the composer to a single free-text input. Engineering disagreed. They'd seen what structured prompts produced versus unstructured ones, and the data backed them up. So we found a middle ground: default to showing one segment, with the option to expand to the full three-part structure for users who wanted more control.

**Outcomes:**

- Rewrote hint text to be concrete and specific to each field
- Made guide examples copy-pasteable; that was the thing that got hesitant users moving
- Abstracted model selection with a smart default, keeping advanced options available without putting them in everyone's way
- Fixed guide discoverability in the first-time user flow

---

## What I Built

**Label:** WHAT I BUILT

**Heading:** Four features that took a prompt from idea to production.

### 01 — Prompt Builder

Structured fields for Action, Context, and Example, with rewritten hint text and copy-pasteable guide examples based on research findings. The copy-pasteable examples were what finally got hesitant users moving.

### 02 — Evaluation Framework

Structured prompt testing before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing gave PMs a bridge from software QA concepts they already knew.

### 03 — Version History

Go back to any previous version at any point. Came directly from research: participants wanted to see which prompt version generated which output. Without that link, iterating felt arbitrary.

### 04 — Deploy Handoff + Deploy Alerts

A single place to publish, track, and monitor prompts in production. Alerts notified owners when something changed downstream so nothing shipped silently.

---

## Process

**Label:** PROCESS

**Heading:** Getting everyone to the same picture.

**Body:** The bigger cross-functional move was the Prompt Lifecycle Map. Engineers and PMs had completely different pictures of how a prompt went from idea to production, and that confusion showed up as bugs, missed handoffs, and rework. I mapped the full lifecycle from Studio authoring through deployment and made it the shared reference. It became the first thing every new product team saw when they adopted the platform.

---

## What I Advocated For That Didn't Ship

**Label:** WHAT I ADVOCATED FOR THAT DIDN'T SHIP

**Heading:** I ran the research to validate the concept. I was overruled.

### The Prompt Wizard was a design direction I believed in.

Instead of asking PMs to fill in three blank fields, present them an interface that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept, but leadership deprioritized it. Engineering costs and competing priorities were the constraint.

### That kind of influence doesn't show up in shipped features, but I believe it is worth highlighting.

I ran the research, made the case, and was overruled. I still believe Prompt Wizard would have mattered.

---

## Impact

**Label:** IMPACT

**Heading:** Now PMs can build and test prompts.

**Stats:**

- **450** — unique internal users
- **34%** — weekly stickiness, more than 2x the SaaS average of 13%
- **3,808** — prompt generations in the first 30 days
- **~6,200** — generation runs per month by June 2025
- **8/8** — users preferred the new Evaluate workflow over manual testing
- **17** — active use cases on the platform by mid-2025

---

## Outcome

**Label:** OUTCOME

**Heading:** A POC that became a platform.

**Body:** This started as a POC. Four people, no roadmap guarantee, no dedicated PM. The adoption numbers made the case for investment and the team grew from four to more than twenty. That track record was what moved us to Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.

---

## Footer

**Back to Work:** ← Back to Work

*(No “Next” link on this page.)*
