export interface UserDTO {
  id: string;
  name: string;
  email: string;
}

export interface JwtPayload {
  sub: string;
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
