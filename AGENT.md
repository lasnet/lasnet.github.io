# Project guide

## Purpose

This is Levin Aleksandr's static cybersecurity portfolio for GitHub Pages. It is a bilingual English/Russian single-page site.

## Structure

- `index.html`: all page sections and the default English content
- `assets/style.css`: theme, components and responsive rules
- `assets/script.js`: Russian translations, language switch, mobile navigation and mailto form
- `assets/favicon.svg`: favicon
- `README.md`: basic setup and publication notes

Personal information, services, skills, case studies and contact placeholders are in `index.html`. Russian copies are in the `translations.ru` object in `assets/script.js`.

## Change rules

- Keep the project dependency-free and compatible with direct GitHub Pages hosting.
- Preserve the dark portfolio design and responsive behavior unless a task requires otherwise.
- Use relative asset paths; do not add a build system, backend or framework without a clear need.
- Keep English and Russian content in sync.
- Do not add secrets, internal infrastructure details or invented personal information.
- Check links, mobile layout and both languages after changes.

## Publishing

GitHub Pages serves committed files directly from the configured repository branch. No build command is required.

## Current status

The portfolio homepage, bilingual content, responsive navigation, cases and contact section are implemented. Contact details remain explicit placeholders and must be replaced with real values before public use.
