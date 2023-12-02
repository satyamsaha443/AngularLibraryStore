.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: 4 / 2 / auto / 5; /* Adjust this as per your grid layout */
}


.mat-form-field {
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px; /* Adjust the width as needed */
}

.container {
    text-align: center;
    margin-top: 20px;
}

<div class="formbg-outer">
    <div class="form-container"> <!-- New container for centering -->
        <form (ngSubmit)="onSubmit()">
            <!-- Form fields here -->
        </form>
    </div>
</div>