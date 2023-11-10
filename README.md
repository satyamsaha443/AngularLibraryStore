onPost() {
  this.status = {statusCode: 0, message: "wait...."};
  this.signupService.login(this.frm.value).subscribe({
    next: (res) => {
      // Convert accessToken to string if necessary
      const accessToken = typeof res.accessToken === 'string' ? res.accessToken : JSON.stringify(res.accessToken);
      localStorage.setItem('accessToken', accessToken);

      // Other code...
    },
    error: (err) => {
      console.log(err);
      this.status.message = "some error on server side";
    }
  });
}