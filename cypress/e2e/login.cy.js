describe('Teste de Login', () => {

  it('Deve realizar login com sucesso', () => {
    
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.contains('Logged In Successfully').should('be.visible')
    cy.url().should('include', '/logged-in-successfully/')
    cy.contains('Log out').should('be.visible')
    cy.contains('Log out').click()
    cy.url().should('eq', 'https://practicetestautomation.com/practice-test-login/')
    cy.get('#login h2').should('contain.text', 'Test login')
    cy.get('#submit').should('contain.text', 'Submit')
    cy.contains('Test login').should('be.visible')
    
  })

  it('Não deve realizar login com senha incorreta', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('#username').type('student')
cy.get('#password').type('senhaErrada123')
cy.get('#submit').click()
cy.contains('Your password is invalid!').should('be.visible')
})
it('Não deve realizar login com usuário incorreto', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('#username').type('usuarioerrado')
cy.get('#password').type('senhaerrada')
cy.get('#submit').click()
cy.contains('Your username is invalid!').should('be.visible')

})
it('Não deve realizar login com usuário vazio', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')

cy.get('#password').type('Password123')
cy.get('#submit').click()
cy.contains('Your username is invalid!').should('be.visible')
})
it('Não deve realizar login com senha vazia', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('#username').type('student')
cy.get('#submit').click()
cy.contains('Your password is invalid!').should('be.visible')
})
it('Deve realizar logout com sucesso', () => {
 cy.visit('https://practicetestautomation.com/practice-test-login/')
  cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.contains('Logged In Successfully').should('be.visible')
    cy.contains('Log out').click()
    cy.contains('Test login').should('be.visible')
    cy.url().should('include', '/practice-test-login')
})
it('Não deve realizar login com usuário e senha vazios', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('#submit').click()
cy.contains('Your username is invalid!').should('be.visible')
  })

})