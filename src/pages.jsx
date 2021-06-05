import React from "react";

import BatchStateUpdate from "./components/batch-state-update/BatchStateUpdate";
import PropsUpdate from "./components/props-update/PropsUpdate";
import ContextUpdate from "./components/context-update/ContextUpdate";
import SmallComponents from "./components/small-components/SmallComponents";
import Presentation from "./components/presentation/Presentation"

export const pages = [
  {
    name: "Presentation",
    component: Presentation,
  },
  {
    name: "Props update",
    component: PropsUpdate,
  },
  {
    name: "Context update",
    component: ContextUpdate,
  },
  {
    name: "Batch state update",
    component: BatchStateUpdate,
  },
  {
    name: "Use small components",
    component: SmallComponents,
    disabled: true,
  },
];
