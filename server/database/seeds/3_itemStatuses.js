
exports.seed = function(knex) {

  // Deletes ALL existing entries
  return knex("itemStatuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemStatuses").insert([
        { status: "pending" },
        { status: "published" },
        { status: "sold" }
      ]);
    });
};
