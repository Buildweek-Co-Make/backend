exports.seed = function(knex, Promise) {
    return knex('issues').insert([
      {
        title: 'Leaf pile in bike lane',
        address: 'NW corner of anywhere and nowhere',
        description: 'Homeowner has created a huge leaf pile that is blocking the bike lane'
      },

      {
        title: 'Pothole',
        address: '123 Dark Matter Street',
        description: 'There is a giant soul sucking votex of evil in the middle of the street'
      },

      {
        title: 'Tree Root',
        address: '420 Ridge Road',
        description: 'There is a huge gnarled root breaking up the sidewalk',
      },

      {
        title: 'Missing manhole cover',
        address: '333 McDowell Street',
        description: 'The manhole cover has been stolen',
      },

      {
        title: 'Theiving Raccoons',
        address: '789 Country Club Drive',
        description: 'There are raccoons everywhere stealing birdseed and ransacking trashcans',
      }



    ]);
  };