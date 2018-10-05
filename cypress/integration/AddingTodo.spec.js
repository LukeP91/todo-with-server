describe('Basic flow', function() {
  beforeEach(() => {
    Cypress.on('window:before:load', win => {
      win.fetch = null
    })
    cy.server()
    cy.fixture('todos').as('todosJson')
    cy.fixture('users').as('usersJson')
    cy.fixture('labels').as('labelsJson')
    cy.route('http://localhost:3001/todos', [])
    cy.route('http://localhost:3001/users', '@usersJson')
    cy.route('http://localhost:3001/labels', '@labelsJson')
    cy.visit('http://localhost:3000/')
  })

  it('adds todo!', () => {
    // Open modal for adding todo
    cy.get('#add-button').click()

    // Fill in data for new todo
    cy.get('input[name=title').type('Test title')
    cy.get('input[name=description').type('Some new description')
    cy.get('#users-list').click()
    cy.contains('Test user').click()
    cy.get('#labels-list').click()
    cy.contains('test').click()
    cy.get('#menu-labelsIds').click()

    // Click button to create new todo
    cy.get('#submit-button').click()

    //Verify that todo is displayed on todo list and click it
    cy.get('#todos-list')
      .contains('Test title')
      .children()
      .click()

    // Verify that you were redirected to todo's details page
    cy.url().should('contain', '/todo/')

    // Verify that todo's details page contains the same data as provided
    cy.contains('Some new description')
    cy.contains('Status: Open')
    cy.contains('User: Test user')
  })

  it('deletes todo!', () => {
    // load todos from backend
    cy.route('http://localhost:3001/todos', '@todosJson')
    cy.reload()

    //Verify that todo is displayed on todo list and click it
    cy.get('#todos-list')
      .contains('Test todo')
      .children()
      .click()

    // Verify that you were redirected to todo's details page
    cy.url().should('contain', '/todo/')

    // Remove todo
    cy.get('#delete-button').click()

    // Verify that todo was removed from the list
    cy.get('#todos-list')
      .children()
      .should('be.empty')
  })
})
