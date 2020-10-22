exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'Moss', 
      password: 'pw',
      first_name: 'Maurice',
      last_name: 'Moss',
      email: 'Moss@itcrowd.com'  
  },

  {
    username: 'Roy', 
    password: 'pw',
    first_name: 'Roy',
    last_name: 'Trenneman',
    email: 'Roy@itcrowd.com'   
  },

  {
    username: 'jen', 
    password: 'pw',
    first_name: 'Jen',
    last_name: 'Barber',
    email: 'Jen@itcrowd.com'  
  },

  {
    username: 'Richmond', 
    password: 'pw',
    first_name: 'Richmond',
    last_name: 'Richmond',
    email: 'Richmond@itcrowd.com'   
  },

  {
    username: 'Douglas', 
    password: 'pw',
    first_name: 'Douglas',
    last_name: 'Reynholm',
    email: 'Electricpants@itcrowd.com'   
  }

  ]);
};

