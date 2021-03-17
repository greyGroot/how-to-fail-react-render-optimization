import React from "react";

import BatchStateUpdate from "./components/batch-state-update/BatchStateUpdate";
import PropsUpdate from "./components/props-update/PropsUpdate";
import ContextUpdate from "./components/context-update/ContextUpdate";
import SmallComponents from "./components/small-components/SmallComponents";

export const routes = [
  {
    name: "Home page",
    path: "/",
    exact: true,
    component: () => <div>Home page</div>,
  },
  {
    name: "Batch state update",
    path: "/batch-state-update",
    exact: true,
    component: BatchStateUpdate,
  },
  {
    name: "Props update",
    path: "/props-update",
    exact: true,
    component: PropsUpdate,
    // unique props, functions, key
    // Don’t pass a complex data object as a prop.
    // Inline Style Attribute and Mui
    // <React.Element key='something'/>
    // https://habr.com/ru/company/yandex/blog/536682/
    // https://mobx.js.org/react-optimizations.html#dereference-values-late
    // https://youtu.be/ZJJfu2q8Kyo
  },
  {
    name: "Context update",
    path: "/context-update",
    exact: true,
    component: ContextUpdate,
    // https://koba04.medium.com/a-secret-parts-of-react-new-context-api-e9506a4578aa
    // https://habr.com/ru/company/yandex/blog/536682/
    // https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#context-updates-and-render-optimizations
    // https://dev.to/alexkhismatulin/react-context-a-hidden-power-3h8j
    // https://stackblitz.com/edit/react-context-bitmask?file=FilterItem.js
    // https://koba04.medium.com/a-secret-parts-of-react-new-context-api-e9506a4578aa
  },
  {
    name: "Use small components",
    path: "/small-components",
    exact: true,
    component: SmallComponents,
    // Don't store components in variable inside of functional component
    // https://mobx.js.org/react-optimizations.html#render-lists-in-dedicated-components
    // Conditional rendering in react https://medium.com/technofunnel/https-medium-com-mayank-gupta-6-88-21-performance-optimizations-techniques-for-react-d15fa52c2349#a1c2
    // https://overreacted.io/before-you-memo/
  },
  // {
  //   name: "It's about slow code, not about renders",
  //   path: "/slow-code",
  //   exact: true,
  //   component: <div>It's about slow code, not about renders</div>,
  //   // unique props, functions, key
  //   // https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render
  // },
  // {
  //   name: "Price of useCallback",
  //   path: "/price-of-use-callback",
  //   exact: true,
  //   component: <div>Price of useCallback</div>
  //   // https://dmitripavlutin.com/dont-overuse-react-usecallback/
  //   // https://www.youtube.com/watch?v=2Wp7QPTkpms
  //   // https://kentcdodds.com/blog/usememo-and-usecallback
  // },
  // {
  //   name: "Price of useMemo",
  //   path: "/price-of-use-memo",
  //   exact: true,
  //   component: <div>Price of useMemo</div>
  //   // what is it: https://whatthefuck.is/memoization
  //   // https://youtu.be/i6DPqqbdIyw
  //   // https://youtu.be/V426Pl3X6qQ
  // },
  // {
  //   name: "And react.memo",
  //   path: "/react-memo",
  //   exact: true,
  //   component: <div>And react.memo</div>
  //   // good example:
  //   // https://dmitripavlutin.com/use-react-memo-wisely/#1-reactmemo
  //   // Недостатки необдуманного использования Реакт Мемо:
  //   // https://dmitripavlutin.com/use-react-memo-wisely/#31-useless-props-comparison
  //   // Similarly, note that rendering <MemoizedChild><OtherComponent /></MemoizedChild> will also force the child to always render, because props.children is always a new reference.
  //   // https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/
  //   // Class components don't have to worry about accidentally creating new callback function references as much, because they can have instance methods that are always the same reference. However, they may need to generate unique callbacks for separate child list items, or capture a value in an anonymous function and pass that to a child. Those will result in new references, and so will creating new objects as child props while rendering. React doesn't have anything built-in to help optimize those cases.
  //   // https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#optimizing-props-references
  //   // https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#memoize-everything
  // },
];
