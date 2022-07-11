

const isValid = (input) => {

    if (typeof input === 'undefined' || typeof input === null)
        return false;

    if ((typeof input === 'number') || (typeof input === "string" && input.trim().length === 0))
        return false;

    return true
}

/*                                      for validating phone                                        */

const isValidPhone = function (phone) {
    return /^[6-9]\d{9}$/.test(phone);
}

/*                                      for validating Email                                        */

const isValidEmail = (input) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)
}

module.exports ={
    isValid,
    isValidPhone,
    isValidEmail
}