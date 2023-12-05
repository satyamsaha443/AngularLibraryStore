interface AuthResponse {
  token: string;
  // Add other properties that you expect in the response, if any
}



generateToken(credentials: any): Observable<boolean> {
  return this.http.post(`${this.url}/auth/login`, credentials)
    .pipe(map((response: any) => {
      const res = response as { token: string }; // Type assertion here
      if (res.token) {
        localStorage.setItem("token", res.token);
        return true;
      }
      return false;
    }));
}