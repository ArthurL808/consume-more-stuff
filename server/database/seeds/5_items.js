
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "name": "Sub-Ex",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "price": 78.32,
        "manufacturer": "Digitized actuating task-force",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Tres-Zap",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "price": 12.28,
        "manufacturer": "Reverse-engineered systematic access",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Greenlam",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "price": 92.47,
        "manufacturer": "Configurable scalable interface",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Stronghold",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "price": 73.3,
        "manufacturer": "Exclusive multi-state adapter",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Ventosanzap",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "price": 79.32,
        "manufacturer": "Front-line regional workforce",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 4,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Tempsoft",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "price": 40.57,
        "manufacturer": "Business-focused analyzing open system",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Viva",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "price": 44.32,
        "manufacturer": "Optimized foreground initiative",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Keylex",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "price": 30.19,
        "manufacturer": "Visionary executive intranet",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 2,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Fix San",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "price": 5.99,
        "manufacturer": "Extended zero administration local area network",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Subin",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "price": 66.56,
        "manufacturer": "Extended transitional internet solution",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 4,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Stim",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "price": 43.91,
        "manufacturer": "Down-sized intermediate paradigm",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Stronghold",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "price": 15.25,
        "manufacturer": "Multi-channelled systematic product",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 4,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Trippledex",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "price": 19.74,
        "manufacturer": "Expanded upward-trending policy",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Konklab",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "price": 68.65,
        "manufacturer": "Fundamental 6th generation access",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Domainer",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "price": 10.36,
        "manufacturer": "Synergized static definition",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 3,
        "condition_id": 2
      }, {
        "name": "Flexidy",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "price": 77.72,
        "manufacturer": "Advanced 24 hour help-desk",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Andalax",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "price": 76.99,
        "manufacturer": "Distributed systematic software",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Ronstring",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "price": 89.08,
        "manufacturer": "Cross-group discrete process improvement",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 5,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Transcof",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "price": 73.4,
        "manufacturer": "Synergistic full-range complexity",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 5,
        "category_id": 4,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Fix San",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "price": 32.54,
        "manufacturer": "Reactive optimal synergy",
        "imageUrl": "https://consume-more-stuff-images.s3-us-west-2.amazonaws.com/1572740907680",
        "user_id": 1,
        "category_id": 4,
        "itemStatus_id": 1,
        "condition_id": 1
      }]);
    });
};
