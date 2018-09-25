# cypress-mousemove-issue
The simplest code to show a strange mouse-related Cypress behaviour.

Run it with
```bash
npm install
npm run server:create

# in another tab/window
npm test
```

## Description

The simple `index.html` page contains an unclickable button (try to manually move the mouse and click it) but Cypress can do that because it doesn't trigger any `mousemove` events.
I created this repo with the only goal of opening an issue to the Cypress team providing them a simple repo to reproduce it.

If you want to test the Puppeteer behaviour just checkout the puppeteer branch.
TestCafè behaves like Puppeteer: it moves the cursor to the button triggering different `mousemove` events ([read here some more details](https://github.com/NoriSte/stackoverflow-52383438-cypress-issue)).

## TLDR;

All began with [this](https://stackoverflow.com/questions/52383438/why-i-cannot-display-available-milestones-in-new-issue-form-inside-chrome-cypre?noredirect=1#comment91788007_52383438) question on StackOverflow and then I [wrote some tests in Puppeteer, TextCafé and Cypress](https://github.com/NoriSte/stackoverflow-52383438-cypress-issue) to check the strang Cypress's behaviour.
