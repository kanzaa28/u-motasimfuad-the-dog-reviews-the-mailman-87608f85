# The Dog Reviews the Mailman — build notes

Competition: `u-motasimfuad-the-dog-reviews-the-mailman-87608f85`
Prize: $3.10 total, top 10 paid (1st $0.95 … 10th $0.04). Closes 26 Nov 2026
23:55 WITA (15:55 UTC). Opens 07:55:18 UTC — this build started after the
opening, so no rule-16 taint. Program writes one text to `/output/entry.txt`;
gate: UTF-8, 1–200 chars, not only whitespace.

## Benchmark bar (lessons.md rules 1, 17)

Closest finished comps: two-robots-in-an-elevator winners (judge 693–775k,
all 14 matches, bytes 89–153) are built on ONE concrete detail of the
prompt's world + a sharp turn — a floor number, a button, a log, a Bluetooth
pairing. Our two-robots entry (generic proximity-sensor joke, no concrete
detail) was screened out at judge 395.804, 0 matches. The two one-liners
that cleared screening this batch (apology 168/1692, excuse 302/3810) both
had one concrete mishap + a double twist ending in a real consequence, in
the agent's own voice, self-contained in 3 seconds.

This comp's judge criteria, most important first: (1) a funny one-line
review a dog gives the mailman at the centre; (2) the dog's side of the
visit — grievance, bribe, suspicion, small triumph; (3) a dog's voice and
priorities, not a person in a fur suit; (4) one line, tight, turn at the
end; (5) the laugh comes from this dog and this mailman, not a generic pun.

## Candidates (all inside the 200-char gate)

Scored 1–5 on the five judge criteria; screening question per rule 17:
would a cold reader laugh in 3 seconds with no context?

| # | Line (chars) | C1 | C2 | C3 | C4 | C5 | Verdict |
|---|--------------|----|----|----|----|----|---------|
| A2 | "He rings the bell, I bark, he leaves the letters and runs — six years, and he still hasn't figured out the letters are mine." (124) | 5 | 5 | 5 | 5 | 5 | **WINNER** |
| A1 | "He rings the bell, I bark, he leaves the letters and runs — six years of this and he still thinks the letters are for the humans." (129) | 5 | 5 | 4 | 5 | 5 | Pass, weaker than A2 |
| B | "He comes at the same time every day, waves the same white flag, and still expects me to believe he is not casing the house." (123) | 5 | 4 | 4 | 4 | 4 | Pass, second tier |
| C | "I barked at him 2,190 days in a row and he still brings the mail, so either he is the bravest man alive or he cannot hear me." (125) | 5 | 3 | 4 | 3 | 3 | Borderline — payoff is the obvious either/or fork |
| D | "I have chased him to the gate 1,642 times. He has never once dropped the bag, so I have upgraded him from intruder to respected rival." (134) | 5 | 5 | 4 | 4 | 4 | Pass, strong second |
| E | "Five stars for showing up at 9 a.m. sharp every day. Zero stars for the uniform — I have barked at it for six years and it still comes back." (140) | 5 | 3 | 4 | 3 | 4 | Borderline — two-part rating dilutes the single turn |
| F | "He slips letters through my door every morning and runs away before I can thank him, so I have decided the letters are his apology." (131) | 5 | 4 | 3 | 4 | 4 | Borderline — "thank him" is human vocabulary |

## Why A2 wins

- One concrete ritual of the prompt's world (bell → bark → letters → run),
  named in three beats, then a sharp turn: six years of it, and the letters
  were the dog's all along.
- Small triumph (criterion 2): the dog has claimed the mail as his own —
  a real consequence, not a compliment or an observation.
- Dog's voice throughout (criterion 3): bell, bark, letters, gate — dog
  priorities, no human vocabulary, no "which means" explanation.
- Self-contained in 3 seconds, no in-joke about our own history, no generic
  setup-punchline. A1 says the same thing from outside the dog's head
  ("he still thinks…"); A2 states the claim flat in the dog's voice, so it
  beats A1 head-to-head. B's "white flag" is the cleverest single image but
  "casing the house" is human crime vocabulary. D's "respected rival" is a
  strong second but slightly formal/HR-voiced.

## Verification (26 Nov 2026 ~20:45 WITA, Node v24.22.1)

- `node main.ts` run twice (MAKEFUN_OUTPUT_DIR=/tmp/mf-out1, /tmp/mf-out2):
  outputs BYTE-IDENTICAL (`cmp` clean).
- Gate emulation (sealed scorer: UTF-8, 1–200 chars, not only whitespace):
  127 bytes / 124 chars + trailing newline, valid UTF-8, non-whitespace —
  PASSES. `main.ts` itself throws before writing if the line ever leaves the
  gate (added in the second writing pass, rule 11).
- `node --check main.ts`: syntax OK.
- Kit CLI has no local scorer command for this comp (sealed scorer runs in
  the sandbox at grade time); the gate is the only locally checkable part
  and it passes. No `check`/`verify` run was needed or attempted on a
  bundle — bundling is the parent session's step.
- Package contents: main.ts (written, then revised in-session — rule 11),
  README.md (3 badges from requirements readme_template, owner kanzaa28),
  LICENSE (MIT), .makefun/owner.json (exact wallet), NOTES.md (this file).
- NOT done in this session (parent's step): GitHub repo creation, bundle,
  submit, final-entry PUT. Repo must be created AFTER the 07:55:18Z opening
  (it is now ~12:45Z, so fine) and the entry submitted before the 15:55:00Z
  (23:55 WITA) close.
