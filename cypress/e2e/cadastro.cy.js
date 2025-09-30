/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });


  it('Deve fazer cadastro com os campos obrigatórios preenchidos', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Jaqueline', 'Bomm', email, '998877655', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve fazer cadastro com todos campos preenchidos', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Leonardo', 'Pattussi', email, '55998877625', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
})
  it('Deve validar mensagem de erro com campo nome inválido', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Leonardo12', 'Pattussi', email, '55998877625', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
})

  it('Não deve aceitar fazer cadastro sem o campo NOME', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Nome não pode estar vazio")
  })

  it('Não deve aceitar fazer cadastro sem o campo SOBRENOME', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Sobrenome não pode estar vazio")
  })

  it('Não deve aceitar fazer cadastro sem o campo EMAIL', () => {
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  })

  it('Não deve aceitar fazer cadastro sem o campo SENHA', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
    
  })

  it('Não deve aceitar senha fraca', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("senha123")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    
  })

  it('Validar senha forte', () => {
    var email= `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
    
  })

  // it('Não deve aceitar e-mail duplicado', () => {
  //   cy.get('#signup-firstname').type("Leonardo")
  //   cy.get('#signup-lastname').type("Pattu")
  //   cy.get('#signup-email').type("teste@teste.com")
  //   cy.get('#signup-phone').type("09876544123")
  //   cy.get('#signup-password').type("Forte12@")
  //   cy.get('#signup-button').click()
  //   cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')    
  // })
})