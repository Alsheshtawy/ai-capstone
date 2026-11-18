# How to add the next case

**Where it goes:** `front capstone/index.html`, inside the Projects section (`<section class="block" id="projects">`).
Each case is one card there. There is no separate page per case.
Styles live in `front capstone/style.css`; behavior in `front capstone/script.js` (only if the card needs it).

## Steps (about 45 minutes)

1. Open the Claude Project and say: "New case: `<name>`. Interview me one question at a time, then draft it in my voice."
2. Answer the three beats:
   - **Problem:** who needed what, and why it was hard
   - **What I did:** stack, my part, one decision, and one thing that broke
   - **What came of it:** one real number or outcome
3. In `front capstone/index.html`, copy the last card inside the Projects section, paste it right below, and replace the title, the three beats, and the link.
4. Reuse existing classes in `style.css`. Add new CSS only if the card needs a new look.
5. Open `index.html` in the browser and check it at 375px and 1280px width.
6. Branch, commit, push, merge:
   `git checkout -b case/<name>`, `git add .`, `git commit -m "feat: add <name> case"`, `git push -u origin case/<name>`, then merge to `main`.

## Next case

**Movie Search app (AI-assisted React build)**

## Reminder

Calendar event "Add Movie Search app (AI-assisted React build) case to portfolio (45 min)", Sunday, November 22, 2026, 8:00 PM, repeating weekly until it is done.

## Build context

The Claude Project is kept as is (it knows my voice, stack and identity kit), so each new case is a short conversation, not a rebuild.

