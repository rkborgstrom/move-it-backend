exports.up = function(knex, Promise) {
    return knex.schema.createTable('all_users', (table) => {
        table.increments()
        table.text('mover_username');
        table.text('moving_username');
        table.text('truck_picture');
        table.text('mover_location');
        table.text('moving_location');
        table.date('mover_date');
        table.time('mover_time');
        table.date('moving_date');
        table.integer('mover_price');
        table.time('moving_time');
        table.text('moving_objects');
        table.text('mover_truck_description');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('all_users');
};



