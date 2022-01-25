const ObjectID = require('mongodb').ObjectID
module.exports = [
  {
    _id: new ObjectID(),
    name: 'Owner',
    username: 'systemOwner',
    email: '',
    password: '',
    roles: ['Owner'],
    phone: '',
    created_at:  
    updated_at:
  },
  {
    // _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    _id: new ObjectID(),
    name: 'Administrator',
    username: 'systemadmin',
    email: 'admin@admin.com',
    password: '',
    roles: ['Admin'],
    phone: '123123',
    created_at: 
    updated_at:
    created_by:
  },
  {
    _id: new ObjectID(),
    name: 'Administrator',
    username: 'systemadmin',
    email: 'admin@admin.com',
    password: '',
    roles: ['Admin'],
    phone: '123123',
    created_at: 
    updated_at:
    created_by:
  }
]