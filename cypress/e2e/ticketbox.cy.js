describe('Ticketbox', () => {
    beforeEach(() => cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html'))

    it('Check for the initial state', () => {
        cy.percySnapshot()
    })

    it('Checks for invalid email', () => {
        cy.get('#email').type('joao-exemplo.com')
        cy.percySnapshot()
    })

    it('Enables submission after all mandatory fields are filled', () => {
        cy.fillMandatoryFields()
        cy.percySnapshot()
    })

    it('Updates agreement base on full name, tickets quantity and type', () => {
        cy.get('#first-name').type('Joao')
        cy.get('#last-name').type('Silva')
        cy.get('#ticket-quantity').select('4')
        cy.get('#vip').check()
        cy.percySnapshot()
    })

    const successfulFormSubmission = 'Shows a success message after form submission'
    it('successfulFormSubmission', () => {
        cy.fillMandatoryFields()
        cy.contains('Confirm Tickets').click()
        cy.percySnapshot(
            successfulFormSubmission,
            {
                percyCSS: `.success span { display: none }`
            }
        )
    })
})