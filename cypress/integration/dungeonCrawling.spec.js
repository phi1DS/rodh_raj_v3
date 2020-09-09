describe('Dungeon crawling tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('Life changes', () => {
        beforeEach(() => {
            cy.reload();
        });

        it('loose life', () => {
        });

        it('gain life', () => {
        });

        it('dies', () => {
        });
    });

    context('Objects actions', () => {
        beforeEach(() => {
            cy.reload();
        });

        it('adds object', () => {
        });

        it('asks object', () => {
        });

        it('accepts object', () => {
        });
    });

    context('Game flow', () => {
        beforeEach(() => {
            cy.reload();
        });

        it('changes roomNumber', () => {
        });

        it('goes to last boss after max roomNumber', () => {
        });
    });
});
