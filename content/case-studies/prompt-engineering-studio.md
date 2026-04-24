# Prompt Engineering Studio

**Role:** Founding and Sole Designer
**Timeline:** March 2023 – July 2025
**Team:** Grew from 3 to 20+ over the project

---

## HERO

**Headline:** Designing the tool that taught Workday how to prompt.

**Chips:** Sole Designer · 2023–2025 · Team: 3 to 20+

---

## THE PROBLEM

**Heading:** Every prompt test needed an engineering ticket.

Every change meant another wait. Product managers had ideas for AI features but no way to build or test them without pulling in an engineer and 2023, nobody at Workday had a good path.

---

## THE INSIGHT

**Heading:** This was both a tooling and knowledge gap.

When I started, I barely understood AI or prompt engineering myself. If I was going to design a tool that PMs could actually use, I had to learn it first and then figure out how to make that learning curve shorter for everyone else.

---

## DISCOVERY: WHAT RESEARCH ACTUALLY FOUND

**Heading:** Five PMs and five use cases

Before designing anything, I ran a moderated usability study with five Product Managers across five Workday product lines: Job Descriptions, Finance, VNDLY, Knowledge Base, and Growth Plans. Each came with a real use case, and attempted to build a prompt using an early working prototype.

**Our Research Goal:**

Understand if PMs could successfully create and test a prompt. We wanted to know could they grasp concepts like context, action, and examples within the product? 

**The Results** 

Every participant struggled to distinguish the different fields in the product. Most wrote their entire prompt in one box, or put instructions in the wrong place. The hint text we had was not explicit enough to distinguish between the fields. I could see that the problem came down to users having no prior mental model to attach to the structure.

**The guidance was invisible.** I'd designed a prompt guide panel that opened when users clicked on a segment label. Those who found it rated it highly useful, however, almost no one found it on their own.

**Model selection created friction without value.** One participant put it directly: *"I feel like it almost puts more cognitive burden on me to actually see this. I don't know if this can be done behind the scenes by the ML team choosing a model based on testing they've done."

**Template-able domains worked.** Job descriptions were a structured, industry-standard format and easy to prompt. Performance review content, feedback quality, talent assessments were highly configurable, deeply subjective space and broke the example-driven model. There's no real template for what "good" feedback looks like because it was so subjective.

**Users wanted to see their run history.** *"Appreciated the multiple prompt outputs, would like the ability to see the prompt associated with the output."* This led us to add a prompt history and version management capability so iteration was better supported.

**Over all the Educational helpfulness rated 3–4 out of 5**  This is not bad for a first prototype, but we clearly had some discoverability and scaffolding gaps.

---

## THE DECISION: KEEP THE STRUCTURE, FIX THE SCAFFOLDING

After research, I had thought that removing the 3 segment structure and simplifying the prompt composer to a single free-text input would be the answer. Engineering pushed back, and after discussion we decided to enhance the educational scaffolding instead of removing the structure.

The three-segment model including Action, Context, Example, an important structure to keep. Users who engaged with it wrote better prompts and got better output. The structured format forced PMs to articulate what they actually wanted from the model, rather than writing conversationally and hoping for the best.

The solution:
- Rewrite hint text to be concrete and specific to each field
- Create guide examples copy-pasteable, research showed this was the key unlock for hesitant users
- Keeping advanced options accessible but less obvious and out of the critical path
- Addressed the guide's discoverability by creating a first-time user flow

---

## WHAT I BUILT

**Heading:** The six features that took a prompt from idea to production.

Our goal was to built the entire prompt lifecycle within the studio so it was the one stop to build, test and ship prompts to production.

**1 Prompt Builder**
Structured fields for Action, Context, and Example with  educational scaffolding based on research findings.

**2 Variables System**
Reusable prompts with dynamic data fields so the same prompt works across different roles, locations, and inputs. This also set us up for when we could bring in actual data fields from Workday.

**3 Contextual Preview**
See your prompt as the end user would, inside the actual product surface to help with understanding and story telling.

**4 Evaluation Framework**
A structured human-in-the-loop testing system for validating prompt quality before shipping. 

The mental model we used was: a teacher grading a quiz. 
	Test Suite = the quiz. 
	Test Case = a single question. 
	Running an Evaluation = grading. 

This framing gave this concept of evaluations a universally known mental model and helped us with naming parts of the evaluation when the market had not set a standard industry term.

**5 Version History**
Go back to any previous version at any point, restore it and iterate.

**6 Deploy Handoff + Deploy Alerts**
Everything an engineer needs to push to test or production in one place, plus warnings that catch technical issues before they ship resulting in breaking production.

---

## LEARNING MOMENT

**Heading:** Seeing how it worked was faster

Understanding LLM evaluations was genuinely hard for both me and the PM I was working with at the time. Rather than wireframe something I didn't fully grasp, I had an engineer build a working prototype in v0 so I could see how it functioned first. 

That changed how I work with AI from that moment. 

For complex AI technical concepts, seeing the functionality gave me the information I needed to design an intuitive solution.

The Prompt Lifecycle Map, a cross-functional Miro artifact showing the full path from Studio authoring to production deployment and became the most-referenced onboarding artifact for every product team that adopted the platform. Engineers and PMs were consistently confused about dependencies and timing. Making the lifecycle visible solved that.

---

## WHAT I ADVOCATED FOR THAT DIDN'T SHIP

The Prompt Wizard was a design direction I believed in from early in the project: instead of asking PMs to understand prompt structure and fill in three blank fields, have them upload a PRD or describe the ideal output and it would generate a well-formed prompt. I ran a research study with my PM at the time and it was a validated concept.

Leadership sadly deprioritized it with other priorities taking precedent.

I include this because it's a part of the real process. While the research backed it up, and we had a working POC there was a lot of stress and pressure at the time to ship fast. I still beleive it would have been a tremendous help to give PMs a kick start.

While I was not able to influence the roadmap in that moment, I still feel validated in my concept and at the same time respect the decision of leadership.

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

The team's track record on this project and shipping AI tooling that actually got adopted was what put my team on the map to develop Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.
