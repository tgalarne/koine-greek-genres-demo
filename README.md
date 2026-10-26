# Style and Sociolects: eLearning course demo

A scrolling, Rise-style course built with plain HTML, CSS and JavaScript (no build step, no dependencies).
Source material: the thesis in `TylerGalarneauStyleAndSociolects.pdf`, plus the planning files in the parent folder.

## Run it

Open `index.html` in a browser (works from `file://`; fonts load from Google Fonts when online and fall back to system fonts offline).
For a local server: `python -m http.server 8000` in this folder, then visit http://localhost:8000.

Progress, graded-item results and optional reflections are saved in the browser's `localStorage` only. "Reset saved progress" is at the foot of the cover page.

## What is in it

- 33 lessons in 10 modules (Welcome, Modules 1-8 from the learning-objectives file, Module 9 capstone and quiz).
- Thesis text reproduced **verbatim** (including footnotes, Greek and the tables as printed), pulled from the PDF. Paragraphs are split, merged or set as bullets only for layout; no text block carries a "verbatim" label or an accent bar. One wording change was made on request: in Lesson 5.2 a semicolon became a period ("in that order. The beginning of chapter four…").
- All **106 objectives** in `Activity_Assessment_Map.md` have a matching block (the design page checks this live).
- Each of Modules 1-8 opens with a **Module Overview** page (`#/lesson/4.0` and so on): a short overview, the module-level objectives ("What you will be able to do") and the completion time with a per-lesson table. Lesson-level objectives, Bloom levels, activity types, assessment codes and thesis page references are hidden from learners and shown only with the **ID view** toggle in the top bar.
- `#/design` lists the course outcomes by module, the cognitive-level and assessment-mix tables (computed from the map), every objective's mapping, and the source-data flags below.
- Reference pages: Appendix A (verbatim), Appendix B summary tables, Appendix C optative locations, Works Cited.

## Decisions taken from the planning documents

- Reflections (REF) in Modules 2-8 are optional: unscored, never gate Continue, labelled "Optional reflection".
- The Module 9 capstone is the one required reflection: write (at least 50 words), reveal the model answer, rate yourself on four criteria, submit. The lesson's Continue stays locked until the self-rating is submitted. Any rating is accepted; nothing is scored.
- Module 2 genre classification is ungraded (no single right answer). Graded sorting is used only for binary categories.
- Matching, sorting and reordering are keyboard-first (a menu per item, a button per pile, move up/down buttons). There is no drag layer.
- Charts are SVG with patterned series, direct value labels, a text alternative and a data table. Bar charts are built in-house, so the "only a pie chart was verified" limit in Rise does not apply here.
- Layout and tokens follow `Course_Layout_Specifications.md` and `Course_Branding_Guide_Starter.md` (920 px container, 4 px progress bar, drawer navigation, skip link, 44 px targets, reduced-motion support).
- The final quiz (lesson 9.4) draws 12 questions at random from the pool, with at least 1 and at most 3 from each included module, in random order and with the answer options shuffled. Questions from optional Modules 4 and 6 are off by default and can be switched on with checkboxes on the quiz start screen. Questions that refer to something shown in their lesson (a table, chart, timeline, passage or sketch) are shown with that reference material above the question. Pass mark 80%, retakeable.

## Things to know

- **Authored content.** The thesis supplies the reading text. The activity items (questions, distractors, feedback, flashcards, model answers, rubrics, English analogies in Modules 4 and 6, modern examples in Modules 1-2) were written for this demo and are for review. Illustrative examples are labelled as such.
- **Thesis figures that disagree with each other** are left as printed and surfaced as data-check tasks in subsections of "Source-data flags" on the design page, not in lessons: 7.4-2 (moved from Lesson 7.4) and 8.2-2 and 8.2-3 (moved from Lesson 8.2). The main ones: Caesar's word count (19,119 vs 16,119), Luke-Acts person shares (computed from 858.00, not the 884.25 total), the 1,994 optatives against 1,105 for all the other Lives combined, and 1,246.17 vs 1,237.05.
- **Documented vs inferred** (3.1-3, 3.2-3) uses the thesis's own wording of certainty. The thesis does not give a strict list, so the sort follows how it reports each claim.
- **Class correspondence** (1.2-2): the thesis adapts the modern four-tier model to ancient Greece but gives no one-to-one table, so the matching is flagged in feedback as the course's reading.
- **Lesson 4.4** has little thesis text of its own (the thesis passage that links Module 4 to Module 5); it leans on activities and the conclusion's claims.
- **Banners and media.** Banners are generated SVG (a Greek letter per module). No photographs, audio or video were supplied. The Mediterranean map is a simplified schematic.
- **Placeholders.** Blocks still to be authored are dashed boxes titled "Placeholder: activity to be added" or "Placeholder: assessment to be added". Currently: 1.2-1 (four-tier recall), 1.4-4 (annotate a news paragraph), 5.2-1 (six alterations recall), and 5.3-2 (reasoning stepper plus its knowledge check). The design page lists those objectives as not built.
- **Gates.** Continue gates are placed by hand in each lesson, normally after an activity or assessment. Lesson objectives have no gate. Interactive blocks are never split up.
- **Module 4 has four lessons** (4.1 Luke's Editing Habits, 4.2 Luke's Source Streamlining, 4.3 Plutarch's Sources, 4.4 What the Choices Reveal), so the optional editing module is split into shorter lessons.
- **Not built:** SCORM/xAPI packaging, a free-text scoring service, drag-and-drop layers.

## Layout

```
index.html
css/course.css              tokens, layout, components
js/core.js                  helpers, state, icons, SVG banner/chart/map, C.def
js/blocks.js                text and display blocks, flashcards, accordion, tabs, process
js/assess.js                MC/MS, matching, sorting, reordering, reflection, predict, capstone, quiz
js/app.js                   router, cover, lessons, drawer, progress, design page
js/data/thesis.js           generated: verbatim thesis text and footnotes per lesson
js/data/objectives.js       generated: objective map, modules, course outcomes
js/content/*.js             lessons: m0-m1 ... m8-m9, plus tables.js (shared builders, tables, flags)
```
