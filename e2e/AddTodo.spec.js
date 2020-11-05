describe("AddTodo", () => {
    it("Should add the right amount of TODOs", () => {
        cy.visit("http://localhost:8080");

        cy.get("input").type("My first TODO");
        cy.contains("Agregar").click();
        
        cy.get("input").type("My second TODO");
        cy.contains("Agregar").click();

        cy.get("input").type("My third TODO");
        cy.contains("Agregar").click();

        expect(cy.contains("TODO List")).to.exist;
        cy.get("li").should("have.length", 3)
    });

    it("Should add the right TODO", () => {
        cy.visit("http://localhost:8080");

        cy.get("input").type("My first TODO");
        cy.contains("Agregar").click();

        cy.contains("My first TODO").exists;
    });
})