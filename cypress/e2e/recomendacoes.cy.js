/// <reference types="cypress"/>

describe('US-015-Funcionalidade: Recomendações do dia', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    after(() => {
        cy.screenshot()
    });

    it('Exibe de 4 a 5 filmes recomendados do dia', () => {
        cy.get('#recomendacoes-do-dia').should('exist') // Seção existe
        cy.get('#recomendacoes-do-dia .filme').should('have.length.within', 4, 5) // Quantidade entre 4 e 5
        
        // Verifica que cada filme tem capa, título e sinopse
        cy.get('#recomendacoes-do-dia .filme').each(($el) => {
            cy.wrap($el).find('.capa').should('be.visible')
            cy.wrap($el).find('.titulo').should('not.be.empty')
            cy.wrap($el).find('.sinopse').should('not.be.empty')
        })
    });

    it('Atualiza recomendações diariamente', () => {
        // Simula um novo dia (pode ser via mock ou intercept da API)
        cy.intercept('GET', '/api/recomendacoes', { fixture: 'recomendacoes_novo_dia.json' }).as('getRecomendacoes')
        cy.reload()
        cy.wait('@getRecomendacoes')

        cy.get('#recomendacoes-do-dia .filme').should('have.length.within', 4, 5)
        cy.get('#recomendacoes-do-dia .filme .titulo').then(titulos => {
            expect(titulos[0]).to.not.be.empty
        })
    });

    it('Mantém recomendações do dia anterior caso API falhe', () => {
        // Simula falha da API
        cy.intercept('GET', '/api/recomendacoes', { statusCode: 500 }).as('getRecomendacoesFail')
        cy.reload()
        cy.wait('@getRecomendacoesFail')

        // Verifica se ainda existem filmes exibidos
        cy.get('#recomendacoes-do-dia .filme').should('have.length.within', 4, 5)
    });

});
