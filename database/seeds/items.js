
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
        "name": "Gwyn",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "manufacturer": "Chevrolet",
        "price": "$0.25",
        "user_id": 5,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Lorianna",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "manufacturer": "Maybach",
        "price": "$6.39",
        "user_id": 1,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Frannie",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "manufacturer": "Hyundai",
        "price": "$2.59",
        "user_id": 2,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Mord",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "manufacturer": "Honda",
        "price": "$3.04",
        "user_id": 5,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Ania",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "manufacturer": "Lincoln",
        "price": "$2.30",
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Engelbert",
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "manufacturer": "Jeep",
        "price": "$5.87",
        "user_id": 3,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "West",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "manufacturer": "Toyota",
        "price": "$5.70",
        "user_id": 2,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Ahmed",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "manufacturer": "Ford",
        "price": "$1.50",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Lianna",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        "manufacturer": "Oldsmobile",
        "price": "$5.70",
        "user_id": 5,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Michel",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "manufacturer": "Toyota",
        "price": "$6.86",
        "user_id": 3,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Madonna",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "manufacturer": "Cadillac",
        "price": "$9.00",
        "user_id": 2,
        "category_id": 1,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Lucio",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "manufacturer": "Chrysler",
        "price": "$0.40",
        "user_id": 5,
        "category_id": 3,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Chastity",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "manufacturer": "Audi",
        "price": "$1.84",
        "user_id": 4,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Marget",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "manufacturer": "Audi",
        "price": "$7.02",
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Margret",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "manufacturer": "Chrysler",
        "price": "$4.26",
        "user_id": 5,
        "category_id": 3,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Ricky",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "manufacturer": "Toyota",
        "price": "$1.08",
        "user_id": 2,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 2
      }, {
        "name": "Hamil",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "manufacturer": "Aston Martin",
        "price": "$9.12",
        "user_id": 5,
        "category_id": 2,
        "itemStatus_id": 1,
        "condition_id": 2
      }, {
        "name": "Anitra",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "manufacturer": "Austin",
        "price": "$3.11",
        "user_id": 5,
        "category_id": 1,
        "itemStatus_id": 1,
        "condition_id": 1
      }, {
        "name": "Braden",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "manufacturer": "Mazda",
        "price": "$5.02",
        "user_id": 3,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 1
      }, {
        "name": "Skipper",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "manufacturer": "Dodge",
        "price": "$9.39",
        "user_id": 5,
        "category_id": 2,
        "itemStatus_id": 2,
        "condition_id": 2
      }]);
    });
};
