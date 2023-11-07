export default function () {

    const customValidFields = (element) => {
        const input = element
        const validityState = input.validity
        
        if (validityState.valueMissing) {
            input.setCustomValidity("Please, complete this required field")
        } else if (validityState.typeMismatch) {
            input.setCustomValidity("Type Mismatch")
        } else if (validityState.patternMismatch) {
            input.setCustomValidity("Pattern Mismatch")
        } else if (validityState.rangeUnderflow) {
            input.setCustomValidity("We need a higher number!")
        } else if (validityState.rangeOverflow) {
            input.setCustomValidity("Thats too high!")
        } else if (validityState.tooShort) {
            input.setCustomValidity("4 Min characters")
        } else if (validityState.tooLong) {
            input.setCustomValidity("4 Max characters")
        } else if (validityState.stepMismatch) {
            input.setCustomValidity("Step Mismatch")
        } else {
            input.setCustomValidity("")
        }

        input.setCustomValidity('Please, complete this required field')
    }

    const customEmptyField = (element) => {
        const input = element
        input.setCustomValidity("");
    }

    return {
        customValidFields,
        customEmptyField
    }
}