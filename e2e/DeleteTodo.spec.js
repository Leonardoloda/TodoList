describe("DeleteTODO", () => {
    it("Should delete the right TODO", () => {
        cy.visit("http://localhost:8080");

        cy.get("input").type("My first TODO");
        cy.contains("Agregar").click();
        
        cy.get("input").type("My second TODO");
        cy.contains("Agregar").click();

        cy.get("input").type("My third TODO");
        cy.contains("Agregar").click();

        cy.get("li").should("have.length", 3);
        cy.contains("My second TODO").click();
        cy.get("li").should("have.length", 2);

        cy.contains("My first TODO").should("exist");
        cy.contains("My second TODO").should("not.exist");
        cy.contains("My third TODO").should("exist");
    });
})