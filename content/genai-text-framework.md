# GenAI Text Framework — case study copy

Edit this file, then ask Cursor to sync changes to `src/pages/GenAITextFramework.tsx`.

---

## Hero

**Eyebrow:** Generative AI Text Framework

**Headline:** Workday had hundreds of products each solving the text generation problem differently.

**Role line:** Lead Designer | 2023–2025

---

## The Problem

**Label:** THE PROBLEM

**Heading:** Unite an enterprise company on a consistent AI text generation approach.

**Body:**

Generative AI had just hit the scene in 2023 and multiple Workday products were already building features independently. Every team's AI button looked and behaved differently. Some lived above the field, some below. Some features used modals to display generation, others just dropped text inline. The biggest sticking point? What should our AI disclaimer be, and where should we show sources.

We needed something that could build trust with users, unify the generative AI experience across Workday, and work with any product surface.

**Workflow caption:** Three text-generation workflows: job description, email, and SMS experiences in the Workday GenAI framework.

---

## Two Kinds of Users

**Label:** TWO KINDS OF USERS

**Heading:** We designed for two audiences at once.

### 01 — Application Teams

Product teams building Gen AI features into their products. If the framework didn't work for them, it would never reach end users at all. The Job Requisition team was one of our first partners.

### 02 — End Users

Managers drafting job descriptions and emails, recruiters reviewing candidate feedback, HR handling comms. The people who actually have to trust what AI hands them.

**Closing:** The framework had to be easy enough for application teams to adopt, and trustworthy enough for end users to rely on.

---

## The Insight

**Label:** THE INSIGHT

**Heading:** The goal was for the Gen AI features to belong.

**Body:** Workday is built on forms and fields. For AI text generation to work here, it had to feel native, not bolted on. The framework needed to fit whatever surface it lived in, across hundreds of products and every customization a customer might make. Tall order.

---

## It's Got to Be a FAAB

**Label:** IT'S GOT TO BE A FAAB

**Heading:** A layout constraint pushed us somewhere better.

**Paragraph 1:** Early concepts put the button above or below the text field. Workday's rigid XO framework made that feel disconnected, especially when someone was filling out a single form component. So we put the button inside the field itself.

**Paragraph 2:** The Floating AI Action Button lives 8px from the bottom-right corner of any text area. It lands on any surface without requiring layout changes from adopting teams. Common now. New then.

---

## What I Built

**Label:** WHAT I BUILT

**Heading:** Three parts became the foundation for every text generation feature at Workday.

**Intro:** The whole flow was built on Workday's Canvas design system and componentized in Figma for designers. I partnered with engineering to build a production-ready library wired into Storybook, with technical documentation, so product teams could implement without reinventing anything.

### 01 — Floating AI Action Button (FAAB)

A context-aware button anchored 8px from the bottom-right corner of any text field. Two variants: a labeled Primary Prompt button for single AI actions, and an icon-only Prompt Action button for multiple. Switches automatically once text exists in the field.

- **Caption (labeled):** Labeled variant: Primary Prompt. Used when the field is empty.
- **Caption (icon-only):** Icon-only variant: Prompt Action. Used once text exists in the field.

### 02 — Generation Menu

Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine. Proofread requires selected text, so it's disabled until something is highlighted. The menu always knows what's possible right now.

### 03 — AI Content Popover

The workspace where users review and decide on generated text before it enters their field. Draggable and resizable, it shows the AI disclaimer, data sources, and three actions: Insert, Replace, Regenerate. Nothing lands in their document without their approval.

**State labels:** Loading · Generated result · Data sources expanded

---

## Key Decision

**Label:** KEY DECISION

**Heading:** Users needed to see the output before it touched their work.

**Paragraph 1:** The preview popover was one of the most consequential decisions on this project. AI output is unpredictable. If something lands in your document without approval and it's wrong, you lose trust in the whole feature immediately. The popover gives users a chance to review, edit, or reject before anything touches their work.

**Paragraph 2:** Workday is a serious environment. Users are aware they're submitting real data in real forms. Early designs fixed the popover in one location, but testing showed users kept trying to move it out of the way so they could see their source content and the AI output side by side. We made the popover resizable and draggable so they could put it wherever made sense.

---

## The Component System in Production

**Label:** THE COMPONENT SYSTEM IN PRODUCTION

**Heading:** The same pattern plays out across 17 use cases.

**Body:** The Generate Job Description flow inside Workday's Create Job Requisition task shows every component behavior end-to-end. Every state is deliberate. In State 3, Proofread is greyed out because nothing is selected, the menu knows what's possible right now. In State 2, the FAAB switches from labeled to icon-only because the available actions have changed.

**States:** 1 Required fields unmet · 2 Ready to generate · 3 Generating · 4 Results ready · 5 Text inserted · 6 Contextual menu open

---

## Responsible AI

**Label:** RESPONSIBLE AI

**Heading:** The disclaimer took longer to write than any component.

**Body:** Legal, designers, and PMs, many rounds of revision, one line that had to fit anywhere in the product: "This content was generated by AI. Review content before use." Looks simple. Was not simple.

---

## The System Grows

**Label:** THE SYSTEM GROWS

**Heading:** By 2025, summarization needed its own model entirely.

**Body:** Recruiting, Learning, and Student were all independently solving summarization, and the FAAB pattern didn't fit. Generation happens inside a text field the user owns. Summarization happens alongside data the user is reading. Different model entirely. I wrote the brief: three display modes, two trigger types, citations as a platform standard. Source data always stays visible.

**Example:** Interview Feedback Summary (Recruiting): AI consolidates multiple interviewer voices into one readable synthesis. Full structured data stays accessible below. Shipped in 25R2.

---

## Cross-Org Impact

**Label:** CROSS-ORG IMPACT

**Heading:** Nobody had a mandate to fix this. I did it anyway.

**Paragraph 1:** Designers across multiple teams were independently designing AI cards for RISING, Workday's biggest customer conference. Inconsistency between products would have undermined the company's AI story at its most visible moment.

**Paragraph 2:** I wrote AI Card Guidelines for RISING: required elements, three loading state variants, and eight layout variations mapped to real display contexts. The principle I led with:

**Quote:** "The cards you design don't have to be twins, but they need to be siblings."

**Closing:** Eight layout variations (Multiple Actions, Single Action, No Actions, Horizontal, Table, Multi-Card, Sources Collapsed, Sources Expanded), each mapped to a real context product teams were designing for. Designers used my Figma components to build prototypes and demos across Search, Recruiting, mobile, and desktop.

---

## Impact & Outcome

**Label:** IMPACT & OUTCOME

**Heading:** Product teams now build against this framework.

**Body:** When an engineer implements a new Gen AI feature at Workday, they build against this spec. The component library made consistency easy for both designers and engineers.

**Stats:**

- **52,400** — Gen AI interactions per week on the highest-usage feature alone
- **580+** — customer tenants implemented Gen AI
- **17** — active use cases
- **70%+** — delivery speed improvement from bespoke engineering

**Stats note:** Data as of July 2025

---

## What I Learned

**Label:** WHAT I LEARNED

### Seeing a gap and knowing I could help fill it made a real difference for the design org.

For both the AI disclaimer and the designer guidelines, I had the most context and was furthest along in my thinking. I couldn't do it alone, so I pulled together designers doing AI work across teams and we built the guidelines together. The result was a consistent story at our biggest customer conference.

### When you're building with a new technology, designers across a large org crave direction.

A lot of people were worried about getting AI interactions wrong. I was too. My approach was to keep learning, keep experimenting, and keep listening to product teams and users. That's what let me press forward when things were still ambiguous.

---

## What I'd Do Differently

**Label:** WHAT I'D DO DIFFERENTLY

### The landscape has changed since 2023.

Chat and agents have become a primary way people interact with AI, and today I'd explore what it looks like when a chat interface and text fields work together.

### We only owned one part of the experience.

I would have liked to zoom out to the full workflow, what it actually means to write a job description with AI, not just populate a single field. Our "one-size-fits-all" solution meant real tradeoffs. If every text field on a page had the FAAB, it could look overwhelming. We advised against it, but we didn't own that decision.

### I'd explore single-click form completion.

Maybe a redesigned popover that handles multiple fields at once, or a chat interface that walks you through the whole thing.
