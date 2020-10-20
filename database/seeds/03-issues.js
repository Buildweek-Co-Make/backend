exports.seed = function(knex, Promise) {
    return knex('issues').insert([
      {
        Title: 'Leaf pile in bike lane',
        description:
          'Neighbor has created a huge leaf pile that is blocking the bike lane',
      },
    ]);
  };