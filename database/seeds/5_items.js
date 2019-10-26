
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "name": "Sabra",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "manufacturer": "Dodge",
        "price": 71.96,
        "user_id": 5,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Brandy",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "manufacturer": "Ford",
        "price": 14.14,
        "user_id": 5,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Putnem",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "manufacturer": "Ford",
        "price": 63.95,
        "user_id": 2,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Amil",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "manufacturer": "Toyota",
        "price": 25.71,
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Fairlie",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "manufacturer": "Ford",
        "price": 85.22,
        "user_id": 5,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Hamlin",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "manufacturer": "Pontiac",
        "price": 51.66,
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Faber",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "manufacturer": "Toyota",
        "price": 98.87,
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Tatum",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "manufacturer": "Mitsubishi",
        "price": 27.53,
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Gery",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "manufacturer": "Chevrolet",
        "price": 14.98,
        "user_id": 1,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Alex",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "manufacturer": "Dodge",
        "price": 84.67,
        "user_id": 2,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Holt",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "manufacturer": "Porsche",
        "price": 82.81,
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Ari",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "manufacturer": "MINI",
        "price": 28.95,
        "user_id": 1,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Kermit",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "manufacturer": "Honda",
        "price": 69.77,
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Vaclav",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "manufacturer": "Mazda",
        "price": 64.22,
        "user_id": 1,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Alfonso",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "manufacturer": "Nissan",
        "price": 12.46,
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Tobias",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "manufacturer": "Honda",
        "price": 93.0,
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Kellen",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
        "manufacturer": "Suzuki",
        "price": 75.2,
        "user_id": 4,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Mortimer",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "manufacturer": "Dodge",
        "price": 44.91,
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Rozanne",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "manufacturer": "Plymouth",
        "price": 86.33,
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Gretna",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "manufacturer": "Aston Martin",
        "price": 13.27,
        "user_id": 5,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 1
      }]);
    });
};
