require('sools-auth/setup')
const { collectionsTypesMap } = require('sools-modeling-client')
const UserCollection = require('./UserCollection')
const { User } = require('sools-auth')

collectionsTypesMap.unshift([User, UserCollection])