import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  type SpyInstance,
  vi,
} from "vitest";
import { fixture, html } from "@open-wc/testing-helpers";
import { screen } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";
import { TodoService } from "Frontend/generated/endpoints";
import "Frontend/views/todo-view";

describe("TodoView", () => {
  let addTodoSpy: SpyInstance;

  beforeEach(() => {
    addTodoSpy = vi.spyOn(TodoService, "addTodo");
    addTodoSpy.mockReturnValue(Promise.resolve());
  });

  afterEach(() => {
    addTodoSpy.mockRestore();
  });

  it("should render", async () => {
    await fixture(html`<todo-view></todo-view>`);

    const title = screen.getByText("My Todos");
    expect(title).to.exist;
  });

  it("should add a todo", async () => {
    await fixture(html`<todo-view></todo-view>`);

    const textField = screen.getByLabelText("New todo");
    const button = screen.getByRole("button", { name: "Add todo" });
    await userEvent.type(textField, "Read testing guide");
    await userEvent.click(button);

    expect(screen.getByText("Read testing guide")).to.exist;
  });

  it("should call service when adding todo", async () => {
    await fixture(html`<todo-view></todo-view>`);

    const textField = screen.getByLabelText("New todo");
    const button = screen.getByRole("button", { name: "Add todo" });
    await userEvent.type(textField, "Read testing guide");
    await userEvent.click(button);

    expect(addTodoSpy).toHaveBeenCalledWith("Read testing guide");
  });
});
