# Jeremiah Briggs | Software Engineering Portfolio

A responsive, static portfolio presenting my background in software engineering, database systems, software testing, machine learning, and AI-assisted development.

## Featured Projects

- **ClassTestLinker:** Python-based static analysis linking Java classes to human-written and LLM-generated tests, with testing metrics and heuristic test-smell indicators.
- **SpecMine Abandonment Analysis:** Mining repository and specification data to investigate abandoned or incomplete software specifications. [Research repository](https://github.com/mhage82/specmine-abandonment-analysis).
- **AIDev Mining Challenge:** Data analysis and predictive modeling of pull-request outcomes and review effort.
- **Legal Incident Report Extraction:** Comparison of Meaning-Typed Programming and conventional SDK-based structured extraction.

## Technology

HTML, CSS, and JavaScript, using the original vCard responsive template. This website is static and does not collect submissions or use a backend.

## Running Locally

Clone this repository, then open `index.html` in a browser. Alternatively, run a local static server such as `python -m http.server 8000` and open `http://localhost:8000`.

## Test Checklist

- Confirm About, Resume, and Portfolio navigation works with mouse and keyboard.
- Confirm all four project descriptions and education/experience details match `content-notes.md`.
- Test portfolio filters and profile links.
- Check 375px, 768px, and desktop viewports for overflow and legibility.
- Verify images or icons have appropriate accessible names or are decorative.
- Check browser console for unexpected errors and examine repository for secrets or template placeholders.
- Repeat checks using the published GitHub Pages URL after merging.

## Acceptance Criteria

| # | Acceptance criterion | How I will verify it |
|---|---|---|
| 1 | The landing page displays my name, professional title, and a concise professional summary. | Inspect homepage content. |
| 2 | The portfolio includes education, experience, and technical skills without duplication. | Compare to `content-notes.md`. |
| 3 | All four required projects appear with titles and descriptions. | Inspect Portfolio and filter options. |
| 4 | Navigation works and layout is responsive. | Test controls and mobile viewports. |
| 5 | No template placeholders or private information remain, and navigation is accessible. | Inspect rendered content, source, and keyboard interaction. |

## GitHub Pages

After reviewing and merging the feature branch, use repository **Settings > Pages > Deploy from a branch** and select **master** and **/(root)**. Verify the resulting public URL in a browser.

## Credits and License

Based on [vCard Personal Portfolio by codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio). Original project license and attribution are preserved; see the repository's `LICENSE` file. This fork's new portfolio content is a customization of that template.
