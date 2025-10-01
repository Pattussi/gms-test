/// <reference types="cypress"/>


describe('US-001-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    after(() => {
        cy.screenshot()
    });

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[3].titulo)
        })
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });

    it('Deve exibir mensagem quando não houver resultados', () => {
        cy.get('#search-input').type('FilmeInexistente12345')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Filme não encontrado.')
    });

    it('Deve limpar a busca quando clicar em "Limpar Busca"', () => {
        cy.get('#search-input').type('Batman')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Batman')
        cy.get('#clear-button').click()
        cy.get('#search-input').should('have.value', '')
        cy.get('#results-section').should('not.contain', 'Batman')
    });

    it('Deve atualizar resultados em tempo real enquanto digita', () => {
        cy.get('#search-input').type('Mat')
        cy.get('#results-section').should('contain', 'Matrix') // resultado parcial
    });

    it('Deve exibir no máximo 10 resultados por página (paginação)', () => {
        cy.get('#search-input').type('bat') // pesquisa ampla que traz muitos resultados
        cy.get('#search-button').click()
        cy.get('#results-section .movie-card').should('have.length.at.most', 10)
    });
})