const validateURL = value => {
  if (!/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/.test(value)) {
    return 'Invalid URL!!!'
  }
  return true
}

export default validateURL
