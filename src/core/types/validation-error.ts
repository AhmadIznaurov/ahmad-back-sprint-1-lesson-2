export interface ValidationErrorMessage {
    message: string;
    field: string;
}

export interface ValidationErrorResponse {
    errorsMessages: ValidationErrorMessage[];
}