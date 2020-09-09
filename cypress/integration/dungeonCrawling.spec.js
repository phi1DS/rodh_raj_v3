const selectChoice = (number) => {
    cy.get('.room_choice').eq(number).click();
};

const startAdventure = () => {
    selectChoice(0);
};

describe('Dungeon crawling tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    // context('Life changes', () => {
    //     beforeEach(() => {
    //         cy.reload();
    //     });
    //
    //     it('loose life', () => {
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'treasure_room.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(0);
    //
    //         cy.get('.room_title > h1').contains('Salle au trésor');
    //         selectChoice(0);
    //
    //         cy.get('.character_title').contains('0');
    //     });
    //
    //     it('gain life', () => {
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'potion_room.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(2);
    //         cy.get('.character_title').contains('4');
    //     });
    //
    //     it('dies', () => {
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'treasure_room.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(0);
    //
    //         cy.get('.room_title > h1').contains('Salle au trésor');
    //         selectChoice(0);
    //         selectChoice(0);
    //
    //         cy.get('.room_title > h1').contains('VOUS ETES MORT');
    //     });
    // });

    // context('Objects actions', () => {
    //     beforeEach(() => {
    //         cy.reload();
    //     });
    //
    //     it('adds object', () => {
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'dortoir_room.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(3);
    //
    //         cy.get('#objects').contains('Baton');
    //     });
    //
    //     it('accepts object', () => {
    //         // object added in stub result
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'harpies_room_object_added.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(0);
    //
    //         selectChoice(3);
    //
    //         cy.get('.room_txt').contains('Du sang et des plumes. C\'est tout ce qu\'il reste des harpies après votre passage.');
    //     });
    //
    //     it('asks object', () => {
    //         cy.route2('GET', '/api/v1.0/room/get-random', { fixture: 'harpies_room.json' }).as('getRoom');
    //         startAdventure();
    //
    //         selectChoice(0);
    //
    //         cy.get('.roomLock').click();
    //         cy.get('.roomLock').should('exist');
    //     });
    // });

    // context('Game flow', () => {
    //     beforeEach(() => {
    //         cy.reload();
    //     });
    //
    //     it('changes roomNumber', () => {
    //     });
    //
    //     it('goes to last boss after max roomNumber', () => {
    //     });
    // });
});
