import React from "react";

import BatchStateUpdate from "./components/batch-state-update/BatchStateUpdate";
import PropsUpdate from "./components/props-update/PropsUpdate";
import ContextUpdate from "./components/context-update/ContextUpdate";
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
    name: "Batch state update",
    component: BatchStateUpdate,
  },
  {
    name: "Context update",
    component: ContextUpdate,
  },
];
