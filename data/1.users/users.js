const ObjectID = require('mongodb').ObjectID
module.exports = [
  {
    // _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    _id: new ObjectID(),
    name: 'Administrator',
    username: 'systemadmin',
    email: 'admin@admin.com',
    password: '$2a$05$2KOSBnbb0r.0TmMrvefbluTOB735rF/KRZb4pmda4PdvU9iDvUB26',
    roles: ['Admin'],
    phone: '123123',
  },
]