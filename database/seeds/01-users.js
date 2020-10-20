exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Moss', password: 'password'}
  ]);
};

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([
//         {issueId: 1, name: "Moss", 
//         password: 'password'},
//         ]);
//     });
// };