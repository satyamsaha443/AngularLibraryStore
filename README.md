<div class="container mt--8 pb-5">
    <!-- Animation section -->
    <div class="login-root">
        <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
            <div class="loginbackground box-background--white padding-top--64">
                <div class="loginbackground-gridContainer">
                    <!-- Animation blocks -->
                    <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
                        <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;"></div>
                    </div>
                    <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
                        <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
                    </div>
                    <!-- More animation blocks -->
                    <!-- ... -->
                </div>
            </div>
            <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
                <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                    <h1><a href="http://blog.stackfindover.com/" rel="dofollow">InvEntorYYY</a></h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Main login page -->
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary border-0 mb-0">
                <!-- ... -->
                <div class="card-header bg-transparent pb-5">
                    <!-- ... -->
                </div>
                <div class="login-container">
                    <!-- Login form -->
                    <form #loginForm="ngForm" (ngSubmit)="doLogin(loginForm)">
                        <!-- Form fields -->
                        <!-- ... -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>