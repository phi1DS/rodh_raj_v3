describe('Dungeon crawling tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    const selectChoice = (number) => {
        cy.get('.room_choice').eq(number).click();
    };

    const startAdventure = () => {
        selectChoice(0);
    };

    context('Life changes', () => {
        beforeEach(() => {
            cy.reload();

            cy.server();
            cy.route('GET', '/api/v1.0/room/get-random', 'fixture:treasure_room.json');
            // cy.route({
            //     method: 'GET',
            //     url: '/api/v1.0/room/get-random',
            //     response: [
            //         {
            //             "code": "salle_au_tresor_1",
            //             "name": "Salle au trésor",
            //             "isStartRoomAction": "true",
            //             "text": "Devant vos yeux se tient une montagne d'or et des pierres précieuses suffisante pour que leurs reflets soient visibles sur les murs de la salle.<br/><br/> Le seul hic : l'espace restreint qu'offre vos poches et le dragon de trois charrettes de haut qui dort dessus (un détail vous me direz).",
            //             "choices": [
            //                 {
            //                     "text": "Pousser votre plus beau cri de guerre et charger le dragon !",
            //                     "target": "salle_au_tresor_2"
            //                 },
            //                 {
            //                     "text": "Réveiller le dragon puis engager une conversation.",
            //                     "target": "salle_au_tresor_3"
            //                 },
            //                 {
            //                     "text": "Passer sans le déranger.",
            //                     "target": "salle_au_tresor_4"
            //                 },
            //                 {
            //                     "text": "Chaparder discrètement une partie du trésor.",
            //                     "chanceAction": {
            //                         "chance": 4,
            //                         "successRoomActionCode": "salle_au_tresor_6",
            //                         "failureRoomActionCode": "salle_au_tresor_7"
            //                     }
            //                 },
            //                 {
            //                     "text": "Brandir les documents tels les saints écrits.",
            //                     "target": "salle_au_tresor_8",
            //                     "itemAction": {
            //                         "item": "Pile de 3 kilos de documents administratifs"
            //                     }
            //                 }
            //             ]
            //         }
            //     ]
            // })

            startAdventure();
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
