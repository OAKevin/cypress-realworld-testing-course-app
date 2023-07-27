// subscribe.cy.ts

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
      })
  
    it("does NOT allow an invalid email address", () => {})
  })
  