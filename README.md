<div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh; flex-grow: 1;">
        <!-- Background and Branding -->
        <div class="loginbackground box-background--white padding-top--64">
            <!-- ... existing background styles ... -->
        </div>

        <!-- Form Container -->
        <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
            <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1><a href="http://blog.stackfindover.com/" rel="dofollow">InvEntorYYY</a></h1>
            </div>

            <!-- Registration Form -->
            <div class="formbg-outer">
                <div class="form-container">
                    <h2>Create Your Account</h2>
                    <form (ngSubmit)="onSubmit()">
                        <!-- Username -->
                        <mat-form-field class="full-width mt">
                            <mat-label>Username</mat-label>
                            <input [(ngModel)]="user.userName" name="username" required type="text" matInput placeholder="Choose a username">
                        </mat-form-field>

                        <!-- Email -->
                        <mat-form-field class="full-width mt">
                            <mat-label>Email</mat-label>
                            <input [(ngModel)]="user.email" name="email" required type="email" matInput placeholder="Your email address">
                        </mat-form-field>

                        <!-- Password -->
                        <mat-form-field class="full-width mt">
                            <mat-label>Password</mat-label>
                            <input [(ngModel)]="user.password" name="password" required type="password" matInput placeholder="Create a password">
                        </mat-form-field>

                        <!-- Buttons -->
                        <div class="container text-center mt">
                            <button type="submit" mat-raised-button color="primary">Register</button>
                            <button style="margin-left: 10px;" type="reset" mat-raised-button color="accent">Reset</button>
                        </div>
                    </form>
                    <p class="text-center mt">Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    </div>
</div>