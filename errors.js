export function createValidationError(message, details) {
    const error = new Error(message)
    error.name = 'ValidationError'
    error.status = 400
    error.details = details
    return error
}
