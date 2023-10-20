import { describe, it, expect } from "vitest";
import { fixture, html } from "@open-wc/testing-helpers";
import { within } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";
import "Frontend/views/todo-shadow-view";

describe("TodoShadowView", () => {
  it("should render", async () => {
    const el = await fixture(html` <todo-shadow-view></todo-shadow-view>`);
    const shadowRoot = el.shadowRoot as any as HTMLElement;

    const title = within(shadowRoot).getByText("My Todos");
    expect(title).to.exist;
  });

  it("should add a todo", async () => {
    const el = await fixture(html` <todo-shadow-view></todo-shadow-view>`);
    const shadowRoot = el.shadowRoot as any as HTMLElement;

    const textField = within(shadowRoot).getByLabelText("New todo");
    const button = within(shadowRoot).getByRole("button", { name: "Add todo" });
    await userEvent.type(textField, "Read testing guide");
    await userEvent.click(button);

    expect(within(shadowRoot).getByText("Read testing guide")).to.exist;
  });
});
