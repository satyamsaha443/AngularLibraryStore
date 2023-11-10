<div class="form-container">
    <div class="form signup">
        <form [formGroup]="frm" (ngSubmit)="onPost()">
        <div class="title">
           Signup
        </div>
        <div class="input-container"> 
            <input type="text" formControlName="username" name="username" class="input" placeholder="Username">
           </div>
        
           <div class="msg error" *ngIf="f['username'].invalid && (f['username'].dirty || f['username'].touched)">
            <span *ngIf="f['username'].errors?.['required']">
                Username is required  
          </span>
        </div>
       <div class="input-container"> 
           <input formControlName="email" type="email" name="email" class="input" placeholder="Email">
       </div>
    
       <div class="msg error" *ngIf="f['email'].invalid && (f['email'].dirty || f['email'].touched)">
        <span *ngIf="f['email'].errors?.['required']">
            Email is required  
      </span>
    </div>
    
    
    
       <div class="input-container"> 
           <input type="password" formControlName="password"  name="password" class="input" placeholder="Password (Format: Abc@1r)">
       </div>
    
       <div class="msg error" *ngIf="f['password'].invalid && (f['password'].dirty || f['password'].touched)">
        <span *ngIf="f['password'].errors?.['required']">
            Password is required  
      </span>
      <span *ngIf="f['password'].errors?.['invalidPattern']">
        Atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    </span>
    </div>
    

    
       <button type="submit" id="btnSubmit" [disabled]="frm.invalid">Signup</button>
       
       <div class="msg light" *ngIf="status">
          {{status.message}}
       </div>
    
         <a routerLink="/login" class="link">Already a member? Login here</a>
        </form>
        </div>
        
    <!-- </div> -->
    </div>

    import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { validPattern } from 'src/app/helpers/patter-match.validator';
import { Status } from 'src/app/models/status';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signupService:SignupService,private fb:FormBuilder) { }
  
  frm!:FormGroup;
  status!:Status;

  get f(){
    return this.frm.controls;
  }

  onPost(){
     this.status = {statusCode:0,message:"wait.."};
     this.signupService.signup(this.frm.value).subscribe({
      next: (res)=>{
        console.log(res);
        this.status=res;
        this.frm.reset();
      },
      error: (err)=>{
       this.status.statusCode=0;
       this.status.message= "some error on server side";
      console.log(err);
      },
      complete:()=>{
       
      }
     })
  }

  ngOnInit(): void {
    const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
    // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.frm= this.fb.group({
      //  'name':['',Validators.required],
      'username':['',Validators.required],
       'email':['',Validators.required],
       'password':['',[Validators.required,validPattern(patternRegex)]]
      //  'confirmPassword':['',Validators.required]
    },{
      validator:MustMatch('password','confirmPassword')
    })
  }
}


main.ts:6  ERROR TypeError: Cannot read properties of undefined (reading 'errors')
    at FormGroup.<anonymous> (must-match.validator.ts:9:29)
    at FormGroup._runValidator (forms.mjs:2182:38)
    at FormGroup.updateValueAndValidity (forms.mjs:2159:32)
    at new FormGroup (forms.mjs:2578:14)
    at FormBuilder.group (forms.mjs:6985:16)
    at SignupComponent.ngOnInit (signup.component.ts:45:23)
    at callHookInternal (core.mjs:4024:14)
    at callHook (core.mjs:4051:13)
    at callHooks (core.mjs:4006:17)
    at executeInitAndCheckHooks (core.mjs:3956:9)
handleError @ core.mjs:10614
(anonymous) @ core.mjs:28881
invoke @ zone.js:368
run @ zone.js:129
runOutsideAngular @ core.mjs:10979
(anonymous) @ core.mjs:28881
tick @ core.mjs:28745
(anonymous) @ core.mjs:28895
invoke @ zone.js:368
onInvoke @ core.mjs:11083
invoke @ zone.js:367
run @ zone.js:129
run @ core.mjs:10934
next @ core.mjs:28894
next @ Subscriber.js:91
_next @ Subscriber.js:60
next @ Subscriber.js:31
(anonymous) @ Subject.js:34
errorContext @ errorContext.js:19
next @ Subject.js:27
emit @ core.mjs:10670
checkStable @ core.mjs:11002
onHasTask @ core.mjs:11100
hasTask @ zone.js:422
_updateTaskCount @ zone.js:443
_updateTaskCount @ zone.js:272
runTask @ zone.js:190
drainMicroTaskQueue @ zone.js:581
Promise.then (async)
nativeScheduleMicroTask @ zone.js:557
scheduleMicroTask @ zone.js:568
scheduleTask @ zone.js:392
scheduleTask @ zone.js:216
scheduleMicroTask @ zone.js:236
scheduleResolveOrReject @ zone.js:1247
then @ zone.js:1442
bootstrapModule @ core.mjs:28406
4913 @ main.ts:6
__webpack_require__ @ bootstrap:19
__webpack_exec__ @ main.ts:7
(anonymous) @ main.ts:7
__webpack_require__.O @ chunk loaded:23
(anonymous) @ main.ts:7
webpackJsonpCallback @ jsonp chunk loading:34
(anonymous) @ main.js:2
Show 39 more frames
Show less
main.ts:6  ERROR Error: NG01052: formGroup expects a FormGroup instance. Please pass one in.

      Example:

      
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });
    at missingFormException (forms.mjs:1436:12)
    at FormGroupDirective._checkFormPresent (forms.mjs:4958:19)
    at FormGroupDirective.ngOnChanges (forms.mjs:4728:14)
    at FormGroupDirective.rememberChangeHistoryAndInvokeOnChangesHook (core.mjs:3032:14)
    at callHookInternal (core.mjs:4024:14)
    at callHook (core.mjs:4055:9)
    at callHooks (core.mjs:4006:17)
    at executeInitAndCheckHooks (core.mjs:3956:9)
    at selectIndexInternal (core.mjs:11780:17)
    at Module.ɵɵadvance (core.mjs:11763:5)
