# Mr. Advisor

Mr. Advisor is a no-credit academic planning tool for Fairfield University's Dolan School of Business. It runs entirely in the browser and can be hosted as a static site on GitHub Pages.

## What It Does

- Lets users upload an APR or unofficial transcript 
- Lets users type completed and in-progress classes instead of uploading
- Parses PDF, DOCX, and TXT files client-side
- Checks Magis Core, business core, and detected major/minor requirement codes from bundled Dolan documents
- Recommends a semester load of 15 credits unless the student appears to be in the senior year and needs fewer credits to finish
- Includes a local follow-up question box
- Exports the generated plan as a Markdown download

## Privacy Warning

This tool displays a visible warning that information entered is not private, just like anything submitted online.

If a user is uncomfortable uploading an APR or unofficial transcript, they should type all completed and in-progress classes instead and use a fake name.

## Local Run

From this folder:

```powershell
cd "C:\Users\amicu\OneDrive - fairfield.edu\Documents\New project"
node .\server.mjs
```

Then open:

`http://127.0.0.1:3000`

## GitHub Pages Deployment

This project is already static-site ready.

### Option 1: Deploy from the repository root

1. Create a GitHub repository and upload the contents of this folder.
2. Push `index.html`, `styles.css`, `app.js`, `assets/`, and this `README.md`.
3. In GitHub, open:
   `Settings` -> `Pages`
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch)
   - `Folder`: `/ (root)`
5. Save.
6. GitHub Pages will publish the site at a URL like:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Option 2: Use a `docs/` folder

If you prefer GitHub Pages to publish from `docs/`, move the site files into a `docs/` directory and choose `/docs` in Pages settings.

## Files Required for Hosting

- `index.html`
- `styles.css`
- `app.js`
- `assets/mr-advisor.png`
- `assets/docs/class-2025-2027-dolan-majors-core.pdf`
- `assets/docs/class-2028-beyond-dolan-majors-core.pdf`
- `assets/docs/dolan-study-abroad-advising-sheet.pdf`
- `assets/docs/magis-courses.pdf`
- `assets/docs/details-on-internships.docx`

## Important Hosting Notes

- Do not open the app by double-clicking `index.html`.
- The app must be opened from a hosted URL or local server because the bundled PDFs are fetched by the browser.
- Relative asset paths are already set up to work on GitHub Pages from the repository root.
- The app depends on the public browser builds of `pdf.js` and `mammoth` loaded from CDNs.

## Recommended Share Language

When sharing this tool, tell users:

- The site is not private in the same way anything entered online is not private
- They can avoid uploads by typing all classes manually
- They can use a fake name if preferred
- They should verify final degree decisions with their advisor
