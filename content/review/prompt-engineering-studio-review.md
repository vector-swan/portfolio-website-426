# Prompt Engineering Studio — Case Study Review Draft
> Edit this file, then tell me what changed and I'll update the site.

---

## HERO

**Headline:** Designing the tool that taught Workday how to prompt.

**Chips:** Sole Designer · Founding · 2023–2025 · Team: 3 to 20+

---

## THE PROBLEM

**Heading:** Every prompt test needed an engineering ticket.

Before this tool existed, PMs had no independent path to building or testing AI features. Every prompt idea, every tweak, every iteration, required pulling an engineer off something else. There was no way to see if a prompt worked without filing a ticket and waiting. I was hired to change that. By the time we shipped, the feedback loop that had taken a month took a week.

I joined as the sole designer on a founding team of four. No PM, which meant I was deciding what to build, not just designing it. When our first PM joined I shifted into roadmap collaboration, but in those early months I was making both product and design calls.

---

## DISCOVERY

**Heading:** Five PMs and five different use cases.

I used a working POC engineering and I had built to run a usability study with five PMs across five Workday product lines.

The tool structured prompts into three fields:
- **Action:** what you want the AI to do
- **Context:** background information
- **Example:** a sample of the ideal output

**Each PM came with a real use case and tried to build a prompt from scratch. Here's what we found.**

- **The three fields weren't clearly distinct:** most participants put everything into one box.
- **Guidance was there but nobody found it:** almost no one discovered the help panel on their own.
- **Too many advanced controls:** model settings overwhelmed PMs who lacked the context to choose.
- **No way to track iterations:** every prompt version felt like starting over.


---

## THE DECISION

**Heading:** After research, I wanted one box. Engineering pushed back.

My read of the research was to simplify the composer to a single free-text input. Engineering disagreed. They'd seen what structured prompts produced versus unstructured ones, and the data backed them up. So we found a middle ground: default to showing one segment, with the option to expand to the full three-part structure for users who wanted more control.

> *"Our biggest issue was onboarding and discoverability."*

So instead of removing the structure, I redesigned the scaffolding around it.

**What changed:**
- Rewrote hint text to be concrete and specific to each field
- Made guide examples copy-pasteable; that was the thing that got hesitant users moving
- Abstracted model selection with a smart default, keeping advanced options available without putting them in everyone's way
- Fixed guide discoverability in the first-time user flow

---

## WHAT I BUILT

**Heading:** Four features that took a prompt from idea to production.

**01: Prompt Builder**
Structured fields for Action, Context, and Example, with rewritten hint text and copy-pasteable guide examples based on research findings. The copy-pasteable examples were what finally got hesitant users moving.

**02: Evaluation Framework**
Structured prompt testing before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing was deliberate: it gave PMs a bridge from software QA concepts they already knew.

**03: Version History**
Go back to any previous version at any point. Came directly from research: participants wanted to see which prompt version generated which output. Without that link, iterating felt arbitrary.

**04: Deploy Handoff + Deploy Alerts**
Everything an engineer needs to push to test or production in one place, plus two warning systems (Curly Braces Warning, Variables with Hyphens) that catch technical issues before they silently break in production. Syntax errors in prompts fail silently. These alerts are a quality gate between the Studio and production.

**Images:** Compose screen (populated, three segments) + Deploy screen (published prompts)

---

## PROCESS

**Heading:** I'd rather see it working than wireframe something I don't fully understand.

The bigger cross-functional move was the Prompt Lifecycle Map. Engineers and PMs had completely different pictures of how a prompt went from idea to production, and that confusion showed up as bugs, missed handoffs, and rework. I mapped the full lifecycle from Studio authoring through deployment and made it the shared reference. It became the first thing every new product team saw when they adopted the platform.

---

## WHAT I ADVOCATED FOR THAT DIDN'T SHIP

**Heading:** I ran the research to validate the concept. I was overruled.

**The Prompt Wizard was a design direction I believed in.**
Instead of asking PMs to understand prompt structure and fill in three blank fields, guide them through a wizard that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept. Leadership deprioritized it. Engineering cost was the constraint.

**That kind of influence doesn't show up in shipped features, but it's real.**
I ran the research, made the case, and was overruled. The research data became part of the roadmap conversation even after I transitioned. Looking at how many prompt engineering tools exist today, I still believe the concept was right. The Prompt Wizard would have mattered.

---

## IMPACT & OUTCOME

**Heading:** Now PMs can build and test prompts.

- **450** unique internal users
- **34%** weekly stickiness, more than 2x the SaaS average of 13%
- **3,808** prompt generations in the first 30 days
- **~6,200** generation runs per month by June 2025
- **8/8** users preferred the new Evaluate workflow over manual testing
- **17** active use cases on the platform by mid-2025

This started as a POC. Four people, no roadmap guarantee, no dedicated PM. The adoption numbers made the case for investment and the team grew from four to more than twenty. That track record was what moved us to Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.

---

## FOOTER NAV

← Back to Work | Next: Multi-Surface Agent Design →
