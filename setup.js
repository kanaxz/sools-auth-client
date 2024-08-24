const { collectionsTypesMap } = require('sools-modeling-client')
const UserCollection = require('./UserCollection')
const { User } = require('sools-auth')

collectionsTypesMap.unshift([User, UserCollection])
const LOGIN_POPUP_NAME = 'loginPopup'
const openLoginPopup = () => {
  if (window.name === LOGIN_POPUP_NAME) {
    throw new Error('Already in login popup')
  }
  const width = 400;
  const height = 700;
  const left = (screen.width / 2) - (width / 2)
  const top = (screen.height / 2) - (height / 2)
  window.open(
    '/login',
    LOGIN_POPUP_NAME,
    `width=${width},height=${height},top=${top},left=${left},resizable=false,scrollbars=yes`
  )
}

module.exports = {
  openLoginPopup
}
