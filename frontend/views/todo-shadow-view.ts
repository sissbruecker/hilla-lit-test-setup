import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@vaadin/button";
import "@vaadin/text-field";
import { TextFieldValueChangedEvent } from "@vaadin/text-field";
import { View } from "Frontend/views/view";

@customElement("todo-shadow-view")
export class TodoShadowView extends LitElement {
  @state()
  private newTodo: string = "";
  @state()
  private todos: string[] = [];

  render() {
    return html`
      <div>
        <h2>My Todos</h2>
        <div class="flex gap-s items-baseline">
          <vaadin-text-field
            label="New todo"
            .value=${this.newTodo}
            @value-changed=${(e: TextFieldValueChangedEvent) =>
              (this.newTodo = e.detail.value)}
          ></vaadin-text-field>
          <vaadin-button
            @click=${() => {
              this.todos = [...this.todos, this.newTodo];
              this.newTodo = "";
            }}
            >Add todo
          </vaadin-button>
        </div>
        <ul>
          ${this.todos.map((todo) => html` <li>${todo}</li>`)}
        </ul>
      </div>
    `;
  }
}
