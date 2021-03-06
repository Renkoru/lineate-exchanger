'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
          name: 'John Doe',
          isBetaMember: false
          }], {});
        */
        const collection = await queryInterface.rawSelect(
            {
                tableName: 'collections',
                schema: 'exchange',
            }, {
                where: {
                    name: 'Lenta Harry Potter 2018',
                },
            },
            ['id'],
        );

        const insertPromise = await queryInterface.bulkInsert(
            {
                tableName: 'collectionItems',
                schema: 'exchange',
            },
            [{
                name: 'Гарри Поттер',
                description: '',
                imageUrl: '/static/images/harry.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Гарри-невидимка',
                description: '',
                imageUrl: '/static/images/harry-invisible.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Гермиона Грейнджер',
                description: '',
                imageUrl: '/static/images/germiona.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Гермиона-невидимка',
                description: '',
                imageUrl: '/static/images/germiona-invisible.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Рон Уизли',
                description: '',
                imageUrl: '/static/images/ron.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Рон-невидимка',
                description: '',
                imageUrl: '/static/images/ron-invisible.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Джинни Уизли',
                description: '',
                imageUrl: '/static/images/djinny.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Джордж Уизли',
                description: '',
                imageUrl: '/static/images/djordj.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Фред Уизли',
                description: '',
                imageUrl: '/static/images/fred.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Букля',
                description: '',
                imageUrl: '/static/images/bukla.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Полумна Лавгуд',
                description: '',
                imageUrl: '/static/images/polumna.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Седрик Диггори',
                description: '',
                imageUrl: '/static/images/sedrik.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Невилл Долгопупс',
                description: '',
                imageUrl: '/static/images/nevil.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Драко Малфой',
                description: '',
                imageUrl: '/static/images/darko.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Минерва Макгонагалл',
                description: '',
                imageUrl: '/static/images/minerva.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Римус Люпин',
                description: '',
                imageUrl: '/static/images/rimus.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Сириус Блэк',
                description: '',
                imageUrl: '/static/images/sirius.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Рубеус Хагрид',
                description: '',
                imageUrl: '/static/images/rubeus.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Северус Снегг',
                description: '',
                imageUrl: '/static/images/severus.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Альбус Дамблдор',
                description: '',
                imageUrl: '/static/images/dumbledore.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Добби',
                description: '',
                imageUrl: '/static/images/dobby.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Беллатриса',
                description: '',
                imageUrl: '/static/images/belatrice.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Светящаяся Беллатриса',
                description: '',
                imageUrl: '/static/images/belatrice-glow.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Лорд Волан-де-Морт',
                description: '',
                imageUrl: '/static/images/volan.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Светящийся Волан-де-Морт',
                description: '',
                imageUrl: '/static/images/volan-glow.png',
                collectionId: collection,
                createdAt: new Date(),
                updatedAt: new Date(),
            }],
            {}
        );

        return insertPromise;
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete(
            {
                tableName: 'collectionItems',
                schema: 'exchange',
            },
            null,
            {}
        );
    }
};
