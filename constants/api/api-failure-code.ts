export const enum ApiFailureCode {
    // FUNDAMENTAL (1XX)
    Success = 100,
    Unknown = 101,
    RequestMethodInvalid = 102,
    RequestBodyInvalid = 103,

    // BLOB (2XX)
    BlobNotFound = 201,
    BlobWithTheSameBranchAndCodeAlreadyExists = 203,
    BlobWithTheSameBranchAndNameAlreadyExists = 204
}
