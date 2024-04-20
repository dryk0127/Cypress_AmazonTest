import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('url git', ()=>{
    cy.visit('https://www.bluerentalcars.com/');

})

When('login butonuna tikla', ()=>{
    cy.get(':nth-child(5) > .btn').click();
})

Then('datalari kullanarak sayfaya gidilir', (dataTable)=>{
    cy.get('#formBasicEmail').type(dataTable.rawTable[1][0]);
    cy.get('#formBasicPassword').type(dataTable.rawTable[1][1]);

    cy.get('[style="display: flex; justify-content: space-between; align-items: center;"] > .btn').click();


})

And('sayfaya girildigini onayla', ()=>{
    cy.get('#dropdown-basic-button').click();
    cy.wait(1);
    cy.get('.dropdown-menu > [role="button"]').should('exist');


})




