/// <reference types="cypress"/>

describe('Visitando a página', () => {
  before(() => {
    cy.visit('https://homologacao.restrita.agencianet.fazenda.df.gov.br/Extranet/')
  })

  it('Realizando o login', () => {
    cy.get('h3').click()
    cy.get('#Cpf').type('03249595160')
    cy.get('#Senha').type('123456')
    cy.get('.btn').click()
    cy.get('h3').click()
  })

  it.only('Listando lançamentos', () => {
    cy.get('h3').click()
    cy.get('#Cpf').type('03249595160')
    cy.get('#Senha').type('123456')
    cy.get('.btn').click()
    cy.get('h3').click()
    cy.get('[href="Sislanca#/ListagemLancamentos"]').click({force:true})
  })
})

