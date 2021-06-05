# How to Fail React Render Optimization?

Use memo or not use memo? When do unexpected renders happen and how to avoid them? We will go through the main cases in React and discuss how to spot them during code review.

# Sources

## Must read:
* [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
* [Use React.memo() wisely](https://dmitripavlutin.com/use-react-memo-wisely/#1-reactmemo)
* [Код на React и TypeScript, который работает быстро. Доклад Яндекса](https://habr.com/ru/company/yandex/blog/536682/)
* [Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
* [Reconciliation](https://reactjs.org/docs/reconciliation.html)
  
## Must watch:
* [Я.Субботник по разработке интерфейсов](https://www.youtube.com/watch?v=wTkeS-X_OIU&t=5652s)
* [Подробно о React Reconciliation, или Как React добился 60 fps](https://youtu.be/NPXJnKytER4)
* [ReactJS под капотом](https://youtu.be/A0W2n2azH5s)

### Would be nice to read:  
* [What the fuck is memoization](https://whatthefuck.is/memoization)
* [React, Inline Functions, and Performance](https://medium.com/componentdidblog/react-inline-functions-and-performance-bdff784f5578)
* [Optimizing React Rendering](https://flexport.engineering/optimizing-react-rendering-part-1-9634469dca02#432e)
* [Avoid Inline Function Definition in the Render Function](https://www.codementor.io/blog/react-optimization-5wiwjnf9hj#7-avoid-inline-function-definition-in-the-render-function)
* [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
* [Your Guide to React.useCallback()](https://dmitripavlutin.com/dont-overuse-react-usecallback/)
* [Optimize Conditional Rendering in React](https://medium.com/technofunnel/https-medium-com-mayank-gupta-6-88-21-performance-optimizations-techniques-for-react-d15fa52c2349#a1c2)
* [When should you NOT use React memo?](https://github.com/facebook/react/issues/14463)

## How to start project?

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
