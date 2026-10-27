
# AI Assistance Log

## Assignment Information

Course: SWE 380 / CSC 580
Project: Jeremiah Briggs Portfolio
Repository: https://github.com/jbriggs06/jeremiah-briggs-portfolio
Branch: feature/portfolio-personalization

## AI Interaction 1: Implementation Planning

Date: October 27, 2026

AI Assistant Used: [Name of actual AI assistant]

### Objective

Develop a file-by-file implementation plan for
personalizing the existing vCard portfolio website.

### Original Prompt

# AI-Assisted Portfolio Website: Implementation Planning

You are acting as a senior software engineer assisting with the customization of an existing HTML, CSS, and JavaScript portfolio website.

Your role is to analyze the repository, develop an incremental implementation plan, identify technical risks, and propose verification procedures. Do not implement changes until the plan has been reviewed and approved.

## Project Context

**Repository:** https://github.com/jbriggs06/jeremiah-briggs-portfolio

**Development branch:** feature/portfolio-personalization

**Default branch:** master

**Starter template:** vCard Personal Portfolio by codewithsadee.

**Purpose:** Transform the existing portfolio template into a professional website representing Jeremiah Briggs's software engineering education, experience, technical skills, and projects.

**Intended audience:** Software engineering recruiters, hiring managers, prospective employers, internship reviewers, and technology professionals.

The website must remain a lightweight, responsive, static portfolio that can be deployed using GitHub Pages.

## Professional Content

Use `content-notes.md` as the authoritative source for all professional information.

The portfolio should present:

- Professional identity and summary.
- Educational qualifications.
- Professional experience.
- Technical skills organized into meaningful categories.
- Featured software engineering and research projects.

The featured projects must include:

1. ClassTestLinker
2. SpecMine Abandonment Analysis
3. AIDev Mining Challenge
4. Legal Incident Report Extraction / Meaning-Typed Programming Comparison

Technical skills should incorporate demonstrated competencies from these projects, including Python, Java, SQL, static analysis, software testing, machine learning, artificial intelligence, software engineering research, technical writing, and Scrum.

Preserve more specific technical skills and technologies documented in `content-notes.md`.

Do not invent credentials, projects, professional achievements, employment dates, technologies, or links.

## Existing Repository and Permitted Changes

Inspect the repository before proposing modifications.

Expected areas of modification include:

- `index.html`: Portfolio content, semantic structure, navigation, and accessibility.
- `assets/css/`: Existing stylesheets for layout, typography, responsiveness, and accessibility.
- `assets/js/`: Existing JavaScript for navigation and interactive behavior.
- `assets/images/`: Appropriate professional imagery and project visuals, if needed.
- `README.md`: Repository description, setup instructions, testing, and deployment documentation.

Review the actual repository structure and identify the relevant files before recommending changes.

Avoid modifying unrelated files.

Preserve the original license and required attribution.

## Acceptance Criteria

**AC1:** The landing page displays my name, professional title, and a concise professional summary.

**AC2:** The portfolio includes my education, professional experience, and technical skills without duplicated information.

**AC3:** The Projects section displays ClassTestLinker, SpecMine Abandonment Analysis, AIDev Mining Challenge, and Legal Incident Report Extraction, each with a title and description.

**AC4:** All navigation links work correctly, and the website remains readable and functional on desktop and mobile screens.

**AC5:** The published website contains no original template placeholders or private information, and it supports accessible navigation.

## Technical Constraints

1. Preserve the existing HTML, CSS, and JavaScript architecture.
2. Do not introduce a backend, database, authentication system, analytics tracker, or external data collection.
3. Maintain compatibility with static GitHub Pages hosting.
4. Preserve required license and attribution information.
5. Avoid unnecessary dependencies, frameworks, and major structural rewrites.
6. Do not invent professional qualifications, experience, awards, technical skills, project accomplishments, or external URLs.
7. Do not publish private or sensitive information.
8. Maintain responsive behavior on desktop and mobile screens.
9. Support keyboard navigation, readable color contrast, semantic HTML, and meaningful image alternative text.
10. Preserve existing functionality unless modification is necessary and justified.
11. Avoid redundant technical skills or duplicate project descriptions.
12. Keep implementation changes small, independently reviewable, and suitable for separate Git commits.

## Required Planning Deliverables

Before implementation, provide the following:

### 1. Repository Assessment

Identify the relevant files, the existing HTML/CSS/JavaScript architecture, reusable components, and current template content requiring replacement.

Explain any repository access limitations.

### 2. File-by-File Implementation Plan

For every proposed file modification, explain:

- What currently exists.
- What needs to change.
- Why the change is necessary.
- Which acceptance criteria the change supports.
- Any potential compatibility or accessibility considerations.

Prioritize preserving the existing template design while replacing placeholder information.

### 3. Incremental Development Plan

Divide implementation into at least three meaningful development commits:

**Commit 1: Update portfolio identity and navigation**

Replace template identity information and update the landing page, professional summary, and relevant navigation.

**Commit 2: Add education, experience, skills, and featured projects**

Populate the portfolio using `content-notes.md`, ensuring the required projects and technical skills are represented accurately.

**Commit 3: Improve responsiveness, accessibility, and documentation**

Review mobile layout, keyboard usability, semantic HTML, image alternatives, existing JavaScript behavior, and repository documentation.

You may recommend additional commits when justified.

### 4. Assumptions and Risks

Identify assumptions concerning professional content, missing project links, images, repository structure, existing dependencies, and deployment.

Identify risks such as broken navigation, inaccurate content, responsive layout regressions, accessibility issues, accidental publication of personal information, and licensing violations.

Describe how each significant risk should be mitigated.

Identify any relevant risks that may not be immediately obvious.

### 5. Test Checklist

Propose reproducible procedures for verifying:

- Homepage loading without visible errors.
- Navigation links.
- Professional identity and content accuracy.
- All four featured projects.
- External project links.
- Mobile responsiveness.
- Keyboard accessibility.
- Image alternative text.
- Absence of private information and leftover template placeholders.
- Browser console errors.
- All five acceptance criteria.
- GitHub Pages deployment.

Include recommendations for screenshots or screen recordings that can demonstrate successful testing.

### 6. Questions Requiring Human Decisions

List questions that must be answered before implementation, including unresolved assumptions, optional content, and proposed design changes.

## Final Instructions

Do not generate replacement website files yet.

Do not commit code, create pull requests, or modify the repository.

First, provide the repository assessment, file-by-file implementation plan, proposed commit sequence, assumptions, risks, test checklist, and outstanding questions.

Wait for explicit approval before implementing changes.

### AI Response

### 1. Repository Assessment

* **Files & Architecture:** Based on the standard structure of the *vCard Personal Portfolio* template by codewithsadee, the repository consists of:
* `index.html`: The central single-page application containing sidebar profile info and tab-based content sections (About, Resume, Portfolio, Blog, Contact).
* `assets/css/style.css`: Stylesheet handling layout, CSS custom properties (colors/fonts), responsive media queries, and component styling.
* `assets/js/script.js`: Client-side script managing mobile sidebar toggling, navigation tab switching, and active state management.
* `assets/images/`: Directory containing placeholder avatars, icons, and project preview thumbnails.
* `README.md`: Template documentation.


* **Reusable Components:**
* *Sidebar Profile Card:* Fixed/sticky profile container for identity, title, and contact details.
* *Tab Navigation Bar:* Clean horizontal/vertical navigation controlling view transitions.
* *Content Sections & Cards:* Structured grid and list components for skills, resume items (education/experience), and project showcases.


* **Template Content Requiring Replacement:** All references to "codewithsadee", generic web developer taglines, mock bio text, template projects, and placeholder resume items must be systematically replaced with Jeremiah Briggs's verified professional information from `content-notes.md`.
* **Repository Access Limitations:** Direct inspection of local files (`content-notes.md` and repository working files) within this environment is subject to standard workspace availability; this plan is structured around the standard codewithsadee template architecture and the explicit project requirements.

---

### 2. File-by-File Implementation Plan

#### `index.html`

* **Current State:** Contains template identity, placeholder bio, mock resume data, and generic portfolio items.
* **Proposed Changes:**
* Update document `<title>` and meta descriptions.
* Replace sidebar identity card with Jeremiah Briggs's name, professional title, and contact/social links.
* Update the About section with the professional summary.
* Populate the Resume section with educational qualifications and professional experience.
* Add the Technical Skills section categorized into meaningful groups (Python, Java, SQL, static analysis, software testing, machine learning, AI, software engineering research, technical writing, Scrum).
* Populate the Portfolio section with the four required featured projects:
1. **ClassTestLinker**
2. **SpecMine Abandonment Analysis**
3. **AIDev Mining Challenge**
4. **Legal Incident Report Extraction / Meaning-Typed Programming Comparison**


* Remove or adapt unused template sections (e.g., Blog) to maintain a streamlined presentation.


* **Why Necessary:** Fulfills Acceptance Criteria AC1, AC2, AC3, and AC5.
* **Accessibility & Compatibility Considerations:** Ensure proper semantic landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), appropriate heading hierarchies (`<h1>` through `<h3>`), and ARIA attributes for interactive elements.

#### `assets/css/style.css`

* **Current State:** Template styling rules, responsive layout breakpoints, and color variables.
* **Proposed Changes:** Retain the core stylesheet structure. Make minor adjustments only if necessary to accommodate custom project card layouts, badge tags for technical skills, or spacing for varied content lengths.
* **Why Necessary:** Maintains the professional visual design of the template while ensuring text readability and layout stability.
* **Accessibility & Compatibility Considerations:** Verify color contrast ratios meet WCAG AA standards, maintain clear focus states for keyboard navigation, and ensure responsive behavior across mobile viewports.

#### `assets/js/script.js`

* **Current State:** Standard script for toggling the mobile sidebar and switching active content tabs.
* **Proposed Changes:** Verify event listeners correctly handle tab transitions and active states for the customized sections. No major logic rewrites required.
* **Why Necessary:** Satisfies AC4 (functional navigation).
* **Accessibility & Compatibility Considerations:** Ensure keyboard activation (Enter/Space keys) works seamlessly with tab triggers.

#### `assets/images/`

* **Current State:** Template avatar and placeholder project graphics.
* **Proposed Changes:** Replace with appropriate professional imagery (e.g., professional headshot if available) and clean project visual cards or clean vector/abstract representations.
* **Why Necessary:** Satisfies AC5 (removal of template placeholders/private data).
* **Accessibility & Compatibility Considerations:** Ensure all `<img>` elements include descriptive `alt` text.

#### `README.md`

* **Current State:** Template README for codewithsadee's portfolio.
* **Proposed Changes:** Rewrite to document Jeremiah Briggs's Portfolio, local setup instructions, testing steps, and GitHub Pages deployment configuration.
* **Why Necessary:** Provides accurate repository documentation.

---

### 3. Incremental Development Plan

#### Commit 1: Update portfolio identity and navigation

* **Scope:** Modify `index.html` to update the page title, meta tags, sidebar profile card (name and professional title), and top/sidebar navigation structure. Remove template branding.
* **Verification:** Confirm header/sidebar renders correct identity and navigation links switch views correctly without errors.

#### Commit 2: Add education, experience, skills, and featured projects

* **Scope:** Populate `index.html` with the professional summary, education history, professional experience, categorized technical skills, and the four featured projects (**ClassTestLinker**, **SpecMine Abandonment Analysis**, **AIDev Mining Challenge**, and **Legal Incident Report Extraction / Meaning-Typed Programming Comparison**) using content from `content-notes.md`.
* **Verification:** Inspect content accuracy against `content-notes.md` to ensure all required technical competencies and project details are present without duplication.

#### Commit 3: Improve responsiveness, accessibility, and documentation

* **Scope:** Review and refine `assets/css/style.css` and `assets/js/script.js` for mobile responsiveness, keyboard accessibility (focus states, ARIA roles), and image alternative text. Update `README.md` with project overview, setup, and deployment instructions.
* **Verification:** Run browser responsiveness checks, keyboard navigation tests, and verify README clarity.

---

### 4. Assumptions and Risks

#### Assumptions

1. `content-notes.md` contains accurate, verified dates, descriptions, and technical stack details for education, experience, and the four required projects.
2. The GitHub repository is configured for GitHub Pages deployment (e.g., publishing from `master` or a designated release branch).
3. Any external repository links or documentation links referenced in `content-notes.md` are valid and ready to be embedded.

#### Risks & Mitigations

* **Risk 1: Broken Navigation or Tab Interactivity**
* *Impact:* Users cannot view resume or project sections.
* *Mitigation:* Test tab switching event listeners in `assets/js/script.js` across desktop and mobile viewports.


* **Risk 2: Responsive Layout Regressions**
* *Impact:* Long project descriptions or technical skill lists break on mobile screens.
* *Mitigation:* Test layout at standard mobile breakpoints (375px, 768px) using browser developer tools and adjust CSS flex/grid properties if needed.


* **Risk 3: Accessibility & Contrast Deficiencies**
* *Impact:* Fails WCAG readability standards or keyboard navigation.
* *Mitigation:* Verify semantic HTML tags, ensure visible focus rings, and check contrast ratios.


* **Risk 4: Inaccurate Professional Content or Leftover Placeholders**
* *Impact:* Template placeholders ("codewithsadee") or inaccurate credentials remain visible.
* *Mitigation:* Cross-reference all rendered content against `content-notes.md` prior to final sign-off.



---

### 5. Test Checklist

* [ ] **Homepage Load:** Website loads locally and via GitHub Pages without visible HTML/CSS/JS errors.
* [ ] **Navigation Links:** All navigation tabs (About, Resume, Portfolio, Contact) switch views correctly.
* [ ] **Identity & Content Accuracy:** Name, professional title, summary, education, and professional experience match `content-notes.md` precisely.
* [ ] **Featured Projects:** All four required projects (ClassTestLinker, SpecMine Abandonment Analysis, AIDev Mining Challenge, Legal Incident Report Extraction) are displayed with accurate titles and descriptions.
* [ ] **External Links:** All project repository links and external references open correctly in a new tab with `rel="noopener noreferrer"`.
* [ ] **Mobile Responsiveness:** Layout adapts cleanly across mobile (375px), tablet (768px), and desktop (1024px+) viewports.
* [ ] **Keyboard Accessibility:** All interactive elements (tabs, links, buttons) are reachable via the Tab key with visible focus indicators and operable via Enter/Space.
* [ ] **Image Alternatives:** All images feature concise, descriptive `alt` text.
* [ ] **Absence of Placeholders:** No template placeholders ("codewithsadee") or private information remain.
* [ ] **Console Cleanliness:** Browser developer console shows zero errors or unhandled exceptions on load and interaction.
* [ ] **Acceptance Criteria Verification:** AC1 through AC5 are fully satisfied.
* [ ] **GitHub Pages Deployment:** Site builds successfully and is accessible live.
* [ ] **Recommended Verification Artifacts:** Capture desktop and mobile screenshots (or a short GIF recording) demonstrating smooth tab navigation and responsive layout, alongside a Lighthouse audit report verifying high accessibility and performance scores.

---

### 6. Questions Requiring Human Decisions

1. **Visual Assets:** Are there specific headshot image files or project thumbnail graphics available to place in `assets/images/`, or should clean abstract card designs be used?
2. **Unused Sections:** Should the Blog section of the template be repurposed for technical articles/writings or removed entirely to keep the portfolio strictly focused on professional credentials and projects?
3. **Project URLs:** Are there specific GitHub repository links or live demo URLs for each of the four featured projects that should be linked in the portfolio cards?

## Human Review of AI Plan

## AI Implementation Plan Review

| Review Item | My Response |
|---|---|
| **Accepted plan element** | I accepted the incremental implementation strategy that divides the portfolio customization into three meaningful commits. Separating identity and navigation changes, professional content updates, and accessibility improvements makes the work easier to review, test, and troubleshoot. The approach also preserves the existing HTML, CSS, and JavaScript architecture without introducing unnecessary dependencies. |
| **Revised plan element** | I revised the recommendation to replace all references to the original template creator. While placeholder content must be removed from the published portfolio, the original project's required license and attribution must remain intact. I also decided to avoid introducing unverified project links, contact details, or images. Any unavailable project links will be omitted rather than fabricated. |
| **Risk the AI identified** | The AI identified the possibility of responsive layout regressions when longer project descriptions and technical skill lists replace the shorter template content. This could negatively affect mobile usability. I will test the website at multiple viewport widths, including 375px and 768px, and adjust the existing CSS only when necessary. |
| **Risk the AI missed** | The AI did not adequately address the risk of publishing private information through the existing Contact section or potentially nonfunctional contact-form behavior on static GitHub Pages. I will inspect the existing form and contact information, remove unsupported or unwanted functionality, and verify that no private information is exposed before deployment. |

### Implementation Status

No implementation changes approved yet.
