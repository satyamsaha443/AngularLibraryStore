generateToken(credentials: any): Observable<any> {
  return this.http.post(`${this.url}/auth/login`, credentials)
    .pipe(map(response => {
      // Assuming the token is in the response body under a property named 'token'
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        return true;
      }
      return false;
    }));
}