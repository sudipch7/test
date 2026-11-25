# Offset poster studio
Prose word count: 263 (headings included, setup commands excluded).

## Project status
A browser prototype for a designer comparing two event posters. Switch layouts, select the title, move it vertically, undo a move and return to either draft. Selection opens the local controls. Each layout keeps its own edits until the page reloads. Two authored compositions simulate generative suggestions. Selection handling and editing are implemented. Cursor-based intent prediction and model-generated artwork are future work.

## Running the prototype
Open `index.html` in a modern browser with `model.js` beside it. No install, account or API key is needed. For the optional checks, run the following command with Node.js in this directory.

```sh
node check.cjs
```

## Technology
HTML and CSS present the controls. JavaScript stores session state and applies interaction rules. Inline SVG keeps the title independently editable. The prototype runs entirely on the device.

## Development record
- [Working interaction](https://github.com/sudipch7/test/commit/a3f3fd306de937c2562575487b7fcd73668b6c2f). Assignment 1 proposed inferring creative phase from browsing behaviour. Selecting an object gave the prototype a clearer trigger. A keyboard-accessible button invokes the same action as clicking the title.
- [Behaviour checks](https://github.com/sudipch7/test/commit/f45f858a44e202350708a6a224d9c8338dfa5c98). Separate histories prevent undo in one layout from disturbing the other. Checks compare the SVG outside the title, revisit edited layouts and exercise the movement limit.
- The illustrations in `evidence/` were exported from the same artwork function as the preview. Replay Relay, Select title, Move up, Undo move to compare them.

## AI assistance
OpenAI Codex drafted the implementation, checks, illustrations and report using the supplied review and tutor feedback. It checked publication details against primary sources and ran state and artwork comparisons with Node.js. These are automated checks. A designer usability study and course-specific terminology review remain outstanding.
