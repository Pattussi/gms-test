/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
//   it('Deve fazer cadastro com os campos obrigatórios preenchidos', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste121@teste.com")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
//   })

//     it('Deve fazer cadastro com todos campos preenchidos', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste131@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
// })

//     it('Não deve aceitar fazer cadastro sem o campo NOME', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste141@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', "Nome não pode estar vazio")
//   })

//     it('Não deve aceitar fazer cadastro sem o campo SOBRENOME', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-email').type("teste151@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('[data-layer="Content"]').should('contain', "Sobrenome não pode estar vazio")
//   })

//     it('Não deve aceitar fazer cadastro sem o campo EMAIL', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
//   })

//     it('Não deve aceitar fazer cadastro sem o campo SENHA', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste161@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
    
//   })

//     it('Não deve aceitar senha fraca', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste171@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("senha123")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    
//   })

//     it('Validar senha forte', () => {
//     cy.visit('http://localhost:8080/')
//     cy.get('#signup-firstname').type("Leonardo")
//     cy.get('#signup-lastname').type("Pattu")
//     cy.get('#signup-email').type("teste181@teste.com")
//     cy.get('#signup-phone').type("09876544123")
//     cy.get('#signup-password').type("Forte12@")
//     cy.get('#signup-button').click()
//     cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
    
//   })

    it('Não deve aceitar e-mail duplicado', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type("teste181@teste.com")
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')    
  })
})