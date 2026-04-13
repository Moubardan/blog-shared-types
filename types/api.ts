export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
