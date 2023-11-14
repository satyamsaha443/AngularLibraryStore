<form class="form-horizontal" [formGroup]="employeeForm">
    <div class="row">
        <div class="col-sm-6">
            <!-- Name Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="text" class="form-control" formControlName="name" 
                           [ngClass]="{'is-invalid': submitted && f.get('name')?.errors}" 
                           placeholder="Nom de l'employé" />
                    <div *ngIf="submitted && f.get('name')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('name')?.errors?.required">
                            {{ msg.validations.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Email Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="email" class="form-control" formControlName="email" 
                           [ngClass]="{'is-invalid': submitted && f.get('email')?.errors}" 
                           placeholder="Courriel des employés" />
                    <div *ngIf="submitted && f.get('email')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('email')?.errors?.required">
                            {{ msg.validations.email }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Phone Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="tel" class="form-control" formControlName="phone" 
                           [ngClass]="{'is-invalid': submitted && f.get('phone')?.errors}" 
                           placeholder="Téléphone de l'employé" />
                    <div *ngIf="submitted && f.get('phone')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('phone')?.errors?.required">
                            {{ msg.validations.phone }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gender Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <select class="form-control" formControlName="gender" 
                            [ngClass]="{'is-invalid': submitted && f.get('gender')?.errors}">
                        <option value="">Sélectionnez le sexe</option>
                        <option value="male">Masculin</option>
                        <option value="female">Femme</option>
                    </select>
                    <div *ngIf="submitted && f.get('gender')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('gender')?.errors?.required">
                            {{ msg.validations.gender }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- NID Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="text" class="form-control" formControlName="nid" 
                           [ngClass]="{'is-invalid': submitted && f.get('nid')?.errors}" 
                           placeholder="NID" />
                    <div *ngIf="submitted && f.get('nid')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('nid')?.errors?.required">
                            {{ msg.validations.nid }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <!-- Status Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <select class="form-control" formControlName="status" 
                            [ngClass]="{'is-invalid': submitted && f.get('status')?.errors}">
                        <option value="">Sélectionnez le statut</option>
                        <option value="inactive">Inactif</option>
                        <option value="active">Actif</option>
                    </select>
                    <div *ngIf="submitted && f.get('status')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('status')?.errors?.required">
                            {{ msg.validations.status }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Birthday Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="date" class="form-control" formControlName="birthday" 
                           [ngClass]="{'is-invalid': submitted && f.get('birthday')?.errors}" 
                           placeholder="AAAA-MM-JJ" />
                    <div *ngIf="submitted && f.get('birthday')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('birthday')?.errors?.required">
                            {{ msg.validations.birthday }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Address Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <textarea class="form-control" formControlName="address" rows="3" 
                              [ngClass]="{'is-invalid': submitted && f.get('address')?.errors}" 
                              placeholder="Entrer ..."></textarea>
                    <div *ngIf="submitted && f.get('address')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('address')?.errors?.required">
                            {{ msg.validations.address }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Salary Field -->
            <div class="form-group">
                <!-- Label -->
                <div class="col-sm-8">
                    <input type="number" class="form-control" formControlName="salary" 
                           [ngClass]="{'is-invalid': submitted && f.get('salary')?.errors}" 
                           placeholder="Un salaire" step="any" />
                    <div *ngIf="submitted && f.get('salary')?.errors" class="alert alert-danger">
                        <div *ngIf="f.get('salary')?.errors?.required">
                            {{ msg.validations.salary }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Action Buttons -->
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group">
                <button (click)="add()" type="button" class="btn btn-info">
                    <i class="fas fa-save"></i> Save
                </button>
                <button (click)="reset()" type="button" class="btn btn-danger">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </div>
    </div>
</form>
