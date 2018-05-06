
## react-template


### POC forgoing JSX in React

> FJSX

Template are still JSX, but are stored in separate file to limit the amount of
painfully ugly javascript that can be written. Container components and HOCs
would still be written in jsx

All necessary React utilities are accessible on a single default export (from
'dom'). This helps to make sure dom is imported everywhere, so the unused
import `import dom from 'dom'` is now only necessary in jsx files with
functional components. 

This could give the ability to parse special attributes (e.g. `if` or `each`),
to limit inline array maps and other javascript in the template but these are
also tasks that can be accomplished with utility components or HOCs. It does
help us get rid of the `className` attribute.


#### Install

```bash
npm i
cd src/dom
npm i
npm link
cd ../..
npm link dom
```


#### Demo

`npm run demo`
