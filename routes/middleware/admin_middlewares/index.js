
const createRole = require('./createRole')
const updateRole = require('./updateRole')
const deleteRole = require('./deleteRole')
const createRight = require('./createRight')
const updateRight = require('./updateRight')
const deleteRight = require('./deleteRight')
const createProduct = require('./createProduct')
const updateProduct = require('./updateProduct')
const deleteProduct = require('./deleteProduct')
const setStaffStatus = require('./setStaffStatus')
const registerAdmin = require('./registerAdmin')
const validateAdminRegistration = require('./validateAdminRegistration')
const verify = require('./verify')
const sendSingleRegistrationLink = require('./sendSingleRegsitrationLink')
const sendMultipleRegistrationLinks = require('./sendMultipleRegistrationLinks')

module.exports = {
    sendMultipleRegistrationLinks,
    sendSingleRegistrationLink,
    registerAdmin,
    validateAdminRegistration,
    setStaffStatus,
    createRole,
    verify,
    updateRole,
    deleteRole,
    createRight,
    updateRight,
    deleteRight,
    createProduct,
    updateProduct,
    deleteProduct
}