import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.querySelector('#react-app'));

const h1 =(<div className="hello">
  <h1>HELLO FROM REACT</h1>
</div>);

root.render(h1)
