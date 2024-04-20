import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('url gidilir', () =>{
cy.visit('https://www.amazon.com/')

})

When('amazon sayfasinin acildigi dogrulanir', () =>{
    cy.get('#nav-logo-sprites').should('be.visible');



    /*
    =>Eğer bir öğenin görünürlüğünü kontrol etmek istiyorsanız, should fonksiyonu içinde be.visible kullanabilirsiniz:
    cy.get('#elementId').should('exist');

    =>Eğer bir öğenin sadece var olup olmadığını kontrol etmek istiyorsanız, yine should fonksiyonunu kullanabilirsiniz:
    cy.get('#elementId').should('exist');

    */

})    

Then('searchBox kutusunda kitap aratilir', () =>{
    cy.get('#twotabsearchtextbox').type('kitap')
    cy.get('#nav-search-submit-button').click()

})   

And('kitap aramasini dogrula', ( )=> {
    cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section').should('contain', 'kitap')
})

