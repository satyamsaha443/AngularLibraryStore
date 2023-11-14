<div *ngIf="submitted && f.get('name')?.errors" class="alert alert-danger">
  <div *ngIf="submitted && f.get('name')?.errors?.required">
    {{ msg.validations.name }}
  </div>
</div>
