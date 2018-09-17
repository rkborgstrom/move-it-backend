exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_users').insert([{
        mover_username: 'ryno3000',
        moving_username: 'bigben200',
        truck_picture: 'a dog',
        mover_location: 'Denver, CO',
        moving_location: 'Denver, CO',
        mover_date: '07/08/2018',
        mover_time: '5:20',
        moving_date: '06/28/2018',
        mover_price: 12,
        moving_time: '4:23',
        moving_objects: 'couch',
      }]);
    });
};
