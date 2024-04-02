/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
const validateURL = (value: string) => {
  if (!/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/.test(value)) {
    return 'Invalid URL!!!'
  }
  return true
}

export default validateURL
