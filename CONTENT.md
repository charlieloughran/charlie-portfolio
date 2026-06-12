# Content guide

This guide explains how to update the content on charlieloughran.co.uk
without needing to know how to code. Everything here can be done by
editing plain text files.

If you get stuck, the worst that can happen is a typo causes the site
not to build — your changes are safe in the file, and you (or a
developer) can fix the formatting and try again.

---

## 1. Running the site on your computer

You only need to do this once:

1. Install [Node.js](https://nodejs.org) (the LTS version).
2. Open a terminal in this project folder and run:

   ```
   npm install
   ```

To preview the site while you make changes:

```
npm run dev
```

Then open the address it prints (usually `http://localhost:4321`) in
your browser. The page updates automatically as you save files.

To build the final version of the site (the files that get deployed):

```
npm run build
```

---

## 2. Adding a new case study

Case studies live in `src/content/projects/`. Each one is a single
`.md` (Markdown) file.

**To add a new case study:**

1. Duplicate an existing file in `src/content/projects/`, e.g.
   `Harvest.md`, and rename it (the filename itself doesn't matter,
   but use something descriptive like `MyNewProject.md`).
2. Update the section at the top of the file between the `---` lines
   (this is called the "frontmatter"). Each field controls something
   on the page:

   | Field        | What it controls                                              |
   | ------------ | -------------------------------------------------------------- |
   | `id`         | A short unique identifier for the project (lowercase, no spaces) |
   | `slug`       | The web address for the project, e.g. `harvest` → `/projects/harvest` |
   | `title`      | The big heading on the case study page and the card title      |
   | `subtitle`   | The smaller line under the title                                |
   | `category`   | The small pill/tag shown on the card and case study (e.g. "UX/UI") |
   | `featured`   | Set to `true` for the one project that should appear large at the top of the grid (only one project should have this) |
   | `year`       | The year shown on the card and case study                      |
   | `client`     | The client or company name, shown in the sidebar               |
   | `coverImage` | The path to the main image, e.g. `/images/MyImage.png` (see below) |
   | `accent`     | A hex colour (e.g. `"#000000"`) used as a highlight colour on that project's page |
   | `tags`       | A list of skill/technology tags shown on the card and sidebar  |
   | `role`       | Your role on the project, shown in the sidebar                 |
   | `timeline`   | How long the project took, shown in the sidebar                |
   | `metrics`    | A list of short text highlights/results, shown in the sidebar  |

3. Below the second `---`, write the body of the case study using
   Markdown:
   - `## Heading` for section headings
   - Plain paragraphs for body text
   - `- item` for bullet lists
   - `**bold**` for bold text, `*italic*` for italics
   - `![Description of image](/images/MyImage.png)` to insert an image

4. Save the file. The new case study will automatically appear in the
   portfolio grid on the homepage and at `/projects/<slug>`.

**To remove a case study**, delete its `.md` file from
`src/content/projects/`.

---

## 3. Adding images

1. Put image files (JPG, PNG, or WebP) into the `public/images/`
   folder.
2. Reference them with a path starting `/images/`, for example
   `/images/MyNewScreenshot.png`.
3. Use them as a project's `coverImage`, or inline in the case study
   body with `![Alt text](/images/MyNewScreenshot.png)`.

Always write a short, descriptive alt text (the bit in square
brackets) — this is read aloud by screen readers and helps search
engines understand the image.

---

## 4. Updating your CV

The "Download CV" buttons link to:

```
public/Charlie_Loughran_UX_CV.pdf
```

To update your CV, replace that file with your new PDF, **keeping the
exact same filename** (`Charlie_Loughran_UX_CV.pdf`). No other changes
are needed — both download buttons (in the hero section and the
contact section) point at this one file.

---

## 5. Changing the accent colour

All colours are defined in one place:
`src/styles/_variables.scss`.

Near the top of the file you'll find a `:root` block (used for dark
mode, the default) and a `[data-theme="light"]` block (used for light
mode). The main brand colour is:

```scss
--color-accent: #{$color-teal-500};
```

`$color-teal-500` is defined a little further up the file. Change its
value (e.g. to a different hex code) and the new colour will be used
everywhere the accent colour appears — buttons, links, highlights,
hover states — in both light and dark mode.

---

## 6. Adding a new spacing value

Spacing (margins, padding, gaps) follows a consistent scale defined in
`src/styles/_variables.scss`:

```scss
$space-1: 4px;
$space-2: 8px;
$space-3: 12px;
$space-4: 16px;
$space-5: 24px;
$space-6: 32px;
$space-7: 48px;
$space-8: 64px;
$space-9: 96px;
$space-10: 128px;
$space-11: 160px;
$space-12: 192px;
```

If you need a new size, add it to this list following the same
naming pattern (e.g. `$space-13: 224px;`), then use `$space-13`
wherever you need that spacing in the styles. Avoid typing one-off
pixel or rem values directly into component styles — keeping
everything on this scale is what keeps spacing consistent across the
whole site.

---

## 7. Running the automated tests

The project includes a set of automated checks (using Playwright) that
verify the site works correctly — pages load, links work, the theme
toggle works, images have alt text, and so on.

To run them:

```
npm run test
```

This will start the site automatically and run through each check,
printing a pass/fail summary. If something fails after you've made a
change, the output will tell you which page and which check failed,
which is a good starting point for tracking down what broke.

---

## 8. Deploying

The site is set up to deploy automatically on [Netlify](https://www.netlify.com).
Pushing changes to the connected Git repository's main branch will
trigger a new build and deploy — no extra configuration needed.
