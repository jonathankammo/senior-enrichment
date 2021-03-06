const db = require('./db');
const {User, Campus} = require('./db/models');

const users = [
  {
    name: 'Joe Ortiz',
    email: 'joe@gmail.com',
    campusId: '1'
  },
  {
    name: 'George Johnson',
    email: 'george@gmail.com',
    campusId: '3'
  },
  {
    name: 'Chris Superman',
    email: 'chris@gmail.com',
    campusId: '2'
  },
  {
    name: 'James Jefferson',
    email: 'james@gmail.com',
    campusId: '3'
  },
  {
    name: 'Anita Watt',
    email: 'anita@gmail.com',
    campusId: '2'
  },
  {
    name: 'Sarah Sarahson',
    email: 'sarah@gmail.com',
    campusId: '1'
  },
  {
    name: 'Joann Hansen',
    email: 'joann@gmail.com',
    campusId: '2'
  },
  {
    name: 'Stef Smith',
    email: 'stef@gmail.com',
    campusId: '3'
  },
];

const campuses = [
  {
    name: 'Illinois Tech'
  },
  {
    name: 'Texas State'
  },
  {
    name: 'University of Florida'
  },
  {
    name: 'California State'
  }
];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  )
);

const seedDb = () => {
  console.log('syncing db---');
  db.sync( {force: false })
  .then(() => {
    console.log('seeding db');
    return seed();
  })
  .catch(err => {
    console.log('seeding error');
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    return null;
  });
};

seedDb();
