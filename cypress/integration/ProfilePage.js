const profile = {
    username: 'Aysenur',
    email: 'aysenur@gmail.com',
    invalidUsername: 'Aysenur%',
    invalidEmail: 'aysenur.com',
};

describe('Save button clicked without any data', () => {
    it('it should shows "required" message', function () {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=save]').click();
        cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root')
            .should('contain', 'Required')
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root'
        ).should('contain', 'Required')
    });
});

describe('Save button clicked with valid username and invalid email', () => {
    it('it should shows the "Invalid email" message', function () {
        cy.visit('http://localhost:3000');
        cy.get('input[name="username"]').type(profile.username);
        cy.get('input[name="email"]').type(profile.invalidEmail);
        cy.get('[data-cy=save]').click();
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root')
            .should('contain', 'Invalid email')
    });
});

describe('Save button clicked with invalid username and valid email', () => {
    it('it should shows the "Only alphanumeric characters are allowed" message', function () {
        cy.visit('http://localhost:3000');
        cy.get('input[name="username"]').type(profile.invalidUsername);
        cy.get('input[name="email"]').type(profile.email);
        cy.get('[data-cy=save]').click();
        cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root')
            .should('contain', 'Only alphanumeric characters are allowed')
    });
});

describe('Save button clicked with valid username and valid email', () => {
    it('it Should succeed and console logs on save clicked', function () {
        cy.visit('http://localhost:3000');
        cy.get('input[name="username"]').type(profile.username);
        cy.get('input[name="email"]').type(profile.email);
        cy.get('[data-cy=save]').click();
    });
});