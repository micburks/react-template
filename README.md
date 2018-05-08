
## react-template


### POC limiting JSX in React

> FJSX

`import dom from 'dom'` is still necessary in every jsx file

This gives the ability to parse special attributes (e.g. `if` or `each`),
to limit the ugly parts of JSX (i.e. inline array maps and other logic). It
also allows using `class` instead of the `className` attribute.

The difficulty with the `each` attribute is that we need to create a new
context for variables indexed out of the array. This is accomplished by having
children that are functions, which is not entirely obvious.


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
