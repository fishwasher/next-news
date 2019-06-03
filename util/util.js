const isValidName = name => typeof name === 'string' && !!name.match(/^[a-z]+[a-z0-9\s]*$/i)

export default {isValidName}