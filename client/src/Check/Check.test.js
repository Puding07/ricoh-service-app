import Cookies from "js-cookie";
import { deleteCookie, isLogged } from "./Check";

describe("Check.js test", () => {
  before(() => {
    cy.setCookie("authcookie", "bar");
  });

  it("Gets cookie", () => {
    cy.wrap(isLogged()).should("equal", "bar");
  });

  it("Deletes auth cookie", () => {
    deleteCookie();
    cy.wrap(isLogged()).should("equal", false);
  });
});
