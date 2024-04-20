import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('url gidilir', ()=>{
    cy.visit('https://www.google.com/');

})

Then('arama yapilacak {string}', (capitals)=>{
    cy.get('#APjFqb').type(capitals);
    cy.get('.FPdoLc > center > .gNO89b').click({force:true});
    //click yapmiyorsa =>>  click({force:true});


   // cy.get('#APjFqb').type(capitals + '{enter}');
    /*
    =>input alanına metin yazdıktan sonra Enter tuşunu basmak için aşağıdaki gibi bir kod kullanabilirsiniz:
    cy.get('#inputId').type('Merhaba Cypress{enter}');
    */
})


And('arama yapildigini kontrol et {string}', (capitals)=>{
    cy.wait(2);
  //  cy.title().should('include', capitals);
    cy.get('[name="q"]').should('have.value', capitals);

})