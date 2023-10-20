import { html, render } from "lit";
import "Frontend/views/todo-view";

render(
  html` <div class="p-l">
    <todo-view></todo-view>
  </div>`,
  document.querySelector("#outlet") as HTMLElement,
);
