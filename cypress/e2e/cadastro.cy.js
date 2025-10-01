/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  after(() => {
    cy.screenshot()
  });


  it('Deve fazer cadastro com os campos obrigatórios preenchidos', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Jaqueline', 'Bomm', email, '998877655', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve fazer cadastro com todos campos preenchidos', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Leonardo', 'Pattussi', email, '55998877625', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com campo nome inválido', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.preencherCadastro('Leonardo12', 'Pattussi', email, '55998877625', 'Forte12@')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Não deve aceitar fazer cadastro sem o campo NOME', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Nome não pode estar vazio")
  });

  it('Não deve aceitar fazer cadastro sem o campo SOBRENOME', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', "Sobrenome não pode estar vazio")
  });

  it('Não deve aceitar fazer cadastro sem o campo EMAIL', () => {
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  });

  it('Não deve aceitar fazer cadastro sem o campo SENHA', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')

  });

  it('Não deve aceitar senha fraca', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("senha123")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')

  });

  it('Validar senha forte', () => {
    var email = `leo${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Leonardo")
    cy.get('#signup-lastname').type("Pattu")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("09876544123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')

  });

  it('Não deve aceitar cadastro com telefone inválido (letras)', () => {
    var email = `user${Date.now()}@teste.com`
    cy.get('#signup-firstname').type("Carlos")
    cy.get('#signup-lastname').type("Alves")
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type("abc123")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  });

  it('Não deve aceitar cadastro com e-mail inválido', () => {
    cy.get('#signup-firstname').type("Ana")
    cy.get('#signup-lastname').type("Souza")
    cy.get('#signup-email').type("ana.souza.com") // sem @
    cy.get('#signup-phone').type("11999887766")
    cy.get('#signup-password').type("Forte12@")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });

  it('Não deve permitir cadastro com e-mail duplicado', () => {
    const emailDuplicado = `duplicado${Date.now()}@teste.com`

    // Primeiro cadastro
    cy.preencherCadastro("Lucas", "Ferreira", emailDuplicado, "11999887766", "Forte12@")
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')

    // Segundo cadastro com mesmo e-mail
    cy.preencherCadastro("Lucas", "Ferreira", emailDuplicado, "11999887766", "Forte12@")
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });
})