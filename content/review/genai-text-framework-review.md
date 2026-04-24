# GenAI Text Framework — Case Study Review Draft

---

## HERO

**Headline:** Workday's first Generative AI feature. Built to work anywhere.
**Subhead:** Lead Designer | Workday's Generative AI Text Framework | 2023–2025

---

## THE PROBLEM

**Heading:** There was no pattern for AI in Workday.

Generative AI had just hit the scene in 2023 and multiple Workday products were already building features independently. Every team's AI button looked and behaved differently. Some lived above the field, some below. Some features used modals to display generation, others just dropped text inline. The biggest sticking point? What should our AI disclaimer be, and where should we show sources.

We needed something that could build trust with users, unify the generative AI experience across Workday, and work with any product surface.

**Images:** Two older AI buttons side by side (acceleratebutton1.png + acceleratebutton2.png)
*Caption: Two AI buttons from two Workday teams in mid-2023. Different placement, different affordance, different mental model.*

---

## TWO KINDS OF USERS

**Heading:** We designed for two audiences at once.

**Application Teams:** Product teams building Gen AI features into their products. If the framework didn't work for them, it would never reach end users at all. The Job Requisition team was one of our first partners.

**End Users:** Managers drafting job descriptions and emails, recruiters reviewing candidate feedback, HR handling comms. The people who actually have to trust what AI hands them.

The framework had to be easy enough for application teams to adopt, and trustworthy enough for end users to rely on.

---

## THE INSIGHT

**Heading:** The goal was for the Gen AI features to belong.

Workday is built on forms and fields. For AI text generation to work here, it had to feel native, not bolted on. The framework needed to fit whatever surface it lived in, across hundreds of products and every customization a customer might make. Tall order.

---

## IT'S GOT TO BE A FAAB

**Heading:** A layout constraint pushed us somewhere better.

Early concepts put the button above or below the text field. Workday's rigid XO framework made that feel disconnected, especially when someone was filling out a single form component. So we put the button inside the field itself.

**Image:** Early concepts

The Floating AI Action Button lives 8px from the bottom-right corner of any text area. It lands on any surface without requiring layout changes from adopting teams. Common now. New then.

**Image:** FAAB component spec

---

## WHAT I BUILT

**Heading:** Three parts became the foundation for every text generation feature at Workday.

The whole flow was built on Workday's Canvas design system and componentized in Figma for designers. I partnered with engineering to build a production-ready library wired into Storybook, with technical documentation, so product teams could implement without reinventing anything.

**01: Floating AI Action Button (FAAB)**
A context-aware button anchored 8px from the bottom-right corner of any text field. Two variants: a labeled Primary Prompt button for single AI actions, and an icon-only Prompt Action button for multiple. Switches automatically once text exists in the field.

**Image:** FAAB variants in context

**02: Generation Menu**
Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine. Proofread requires selected text, so it's disabled until something is highlighted. The menu always knows what's possible right now.

**Image:** Generation menu

**03: AI Content Popover**
The workspace where users review and decide on generated text before it enters their field. Draggable and resizable, it shows the AI disclaimer, data sources, and three actions: Insert, Replace, Regenerate. Nothing lands in their document without their approval.

**Images:** Popover loading state + Popover results state

---

## KEY DECISION

**Heading:** Users needed to see the output before it touched their work.

The preview popover was one of the most consequential decisions on this project. AI output is unpredictable. If something lands in your document without approval and it's wrong, you lose trust in the whole feature immediately. The popover gives users a chance to review, edit, or reject before anything touches their work.

Workday is a serious environment. Users are aware they're submitting real data in real forms. Early designs fixed the popover in one location, but testing showed users kept trying to move it out of the way so they could see their source content and the AI output side by side. We made the popover resizable and draggable so they could put it wherever made sense.

**Image:** Positioning behavior

---

## THE COMPONENT SYSTEM IN PRODUCTION

**Heading:** The same pattern plays out across 17 use cases.

The Generate Job Description flow inside Workday's Create Job Requisition task shows every component behavior end-to-end. Every state is deliberate. In State 3, Proofread is greyed out because nothing is selected, the menu knows what's possible right now. In State 2, the FAAB switches from labeled to icon-only because the available actions have changed.

**State 1: Required fields unmet.** All fields blank. Labeled Prompt button visible. Required fields message below the text field.

**State 2: Popover results.** AI Content Popover with generated text ready to review.

**State 3: Menu open, text in field.** FAAB switched to icon-only Prompt Action Button. Proofread greyed out (no selection active).

**State 4: Text inserted.** Generated text in the field. FAAB returns to resting icon-only state.

**Images:** All four states

---

## RESPONSIBLE AI

**Heading:** The disclaimer took longer to write than any component.

Legal, designers, and PMs, many rounds of revision, one line that had to fit anywhere in the product: "This content was generated by AI. Review content before use." Looks simple. Was not simple.

---

## THE SYSTEM GROWS: SUMMARIZATION

**Heading:** By 2025, summarization needed its own model entirely.

Recruiting, Learning, and Student were all independently solving summarization, and the FAAB pattern didn't fit. Generation happens inside a text field the user owns. Summarization happens alongside data the user is reading. Different model entirely. I wrote the brief: three display modes, two trigger types, citations as a platform standard. Source data always stays visible.

**Image:** Interview Feedback Summary: AI synthesis at top, full feedback matrix accessible below

---

## CROSS-ORG IMPACT

**Heading:** Nobody had a mandate to fix this. I did it anyway.

Designers across multiple teams were independently designing AI cards for RISING, Workday's biggest customer conference. Inconsistency between products would have undermined the company's AI story at its most visible moment.

I wrote AI Card Guidelines for RISING: required elements, three loading state variants, and eight layout variations mapped to real display contexts. The principle I led with:

> *"The cards you design don't have to be twins, but they need to be siblings."*

Eight layout variations (Multiple Actions, Single Action, No Actions, Horizontal, Table, Multi-Card, Sources Collapsed, Sources Expanded), each mapped to a real context product teams were designing for. Designers used my Figma components to build prototypes and demos across Search, Recruiting, mobile, and desktop.

**Image:** Card Variations

---

## IMPACT & OUTCOME
**Heading:** Product teams now build against this framework.

When an engineer implements a new Gen AI feature at Workday, they build against this spec. The component library made consistency easy for both designers and engineers.

- **52,400** Gen AI interactions per week on the highest-usage feature alone
- **580+** customer tenants implemented Gen AI
- **17** active use cases
- **70%+** delivery speed improvement from bespoke engineering

*data as of July 2025*

---

## WHAT I LEARNED

Seeing a gap and knowing I could help fill it made a real difference for the design org. For both the AI disclaimer and the designer guidelines, I had the most context and was furthest along in my thinking. I couldn't do it alone, so I pulled together designers doing AI work across teams and we built the guidelines together. The result was a consistent story at our biggest customer conference.

When you're building with a new technology, designers across a large org crave direction. A lot of people were worried about getting AI interactions wrong. I was too. My approach was to keep learning, keep experimenting, and keep listening to product teams and users. That's what let me press forward when things were still ambiguous.

---

## WHAT I'D DO DIFFERENTLY

The landscape has changed since 2023. Chat and agents have become a primary way people interact with AI, and today I'd explore what it looks like when a chat interface and text fields work together.

We only owned one part of the experience. I would have liked to zoom out to the full workflow, what it actually means to write a job description with AI, not just populate a single field. Our "one size fits all" solution meant real tradeoffs. If every text field on a page had the FAAB, it could look overwhelming. We advised against it, but we didn't own that decision.

I'd explore single-click form completion. Maybe a redesigned popover that handles multiple fields at once, or a chat interface that walks you through the whole thing.

---

## FOOTER NAV

← Back to Work | Next: Prompt Engineering Studio →
