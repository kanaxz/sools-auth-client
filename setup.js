require('sools-management/setup')
const { collectionsTypesMap } = require('sools-modeling-client')
const UserCollection = require('./UserCollection')
const { User } = require('sools-management')

collectionsTypesMap.unshift([User, UserCollection])