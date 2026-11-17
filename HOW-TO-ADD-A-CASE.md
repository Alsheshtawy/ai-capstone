# How to add the next case

Where it goes: the "Work" section of index.html (one new card),
plus its own page at work/<case-name>.html. [adjust to your real paths]

Steps (about 45 minutes):
1. Open the Claude Project and say: "New case: <name>. Interview me
   one question at a time, then draft it in my voice."
2. Answer the three beats:
   - Problem: who needed what, and why it was hard
   - What I did: stack, my part, one decision and one thing that broke
   - What came of it: one real number or outcome
3. Copy the card markup from the last case, paste it below it,
   swap in the new text and link.
4. Copy the previous case page as the template for the new one.
5. Open locally, check it on mobile width, then
   git checkout -b case/<name>, commit, push, merge to deploy.
6. Preview the share link at opengraph.xyz.