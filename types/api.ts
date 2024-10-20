export interface ApiSucess<Data> {
    ok: boolean;
    data: Data;
}
export interface ApiError {
    error: unknown;
}

export type ApiResponse<Data = unknown> = ApiSucess<Data> | ApiError;