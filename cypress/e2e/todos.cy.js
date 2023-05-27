/// <reference types="cypress" />

import { environment } from "../../src/environment.mjs";

describe("Todo List", () => {
  beforeEach(() => {
    cy.request(`${environment.baseUrl}/todos`, { method: "delete" });

    cy.visit("/");
  });

  it("should be able to add a new todo", () => {
    const newTodoText = "Go to run";
    cy.get(".new-todo-input").type(newTodoText);
    cy.get(".new-todo-button").click();

    cy.get("[data-cy='incomplete-todos'] [data-cy='todo-item-text']")
      .last()
      .contains(newTodoText);

    /* ==== Generated with Cypress Studio ==== */
    // cy.get('[data-cy="todo-complete-btn"]').click();
    // cy.get('[data-cy="todos-container"]').click();
    // cy.get('[data-cy="todo-remove-btn"]').click();
    /* ==== End Cypress Studio ==== */
  });

  describe("with an existing Todo", () => {
    const newTodoText = "existing task--";

    beforeEach(() => {
      cy.get(".new-todo-input").type(newTodoText);
      cy.get(".new-todo-button").click();
    });

    it("should be able to remove an existing incomplete todo", () => {
      cy.get('[data-cy="incomplete-todos"]')
        .contains(newTodoText)
        .as("foundTodoContainerUnderTest")
        .parent('[data-cy="todo-item-container"]')
        .find('[data-cy="todo-remove-btn"]')
        .click();

      cy.get("@foundTodoContainerUnderTest").should("not.exist");
    });

    it("should be able to mark an incomplete todo", () => {
      cy.get('[data-cy="incomplete-todos"]')
        .contains(newTodoText)
        .as("foundTodoContainerUnderTest")
        .parent('[data-cy="todo-item-container"]')
        .find('[data-cy="todo-complete-btn"]')
        .click();

      cy.get("@foundTodoContainerUnderTest").should("not.exist");

      cy.get('[data-cy="completed-todos"]')
        .contains(newTodoText)
        .parent('[data-cy="todo-item-container"]')
        .find('[data-cy="todo-complete-btn"]')
        .should("not.exist");
    });
  });
});
