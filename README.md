
Error: src/app/app.module.ts:20:5 - error NG6001: The class 'ProductComponent' is listed in the declarations of the NgModule 'AppModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.

20     ProductComponent,
       ~~~~~~~~~~~~~~~~

  src/app/modules/product/product/product.component.ts:11:14
    11 export class ProductComponent extends URLLoader implements OnInit {
                    ~~~~~~~~~~~~~~~~
    'ProductComponent' is declared here.


Error: src/app/general/dashboard/dashboard.component.ts:112:21 - error TS2552: Cannot find name 'Chart'. Did you mean 'myChart'?

112   var myChart = new Chart(ctx, {
                        ~~~~~

  src/app/general/dashboard/dashboard.component.ts:112:7
    112   var myChart = new Chart(ctx, {
              ~~~~~~~
    'myChart' is declared here.


Error: src/app/main/interfaces/Service.ts:2:5 - error TS7010: 'getAll', which lacks return-type annotation, implicitly has an 'any' return type.

2     getAll()
      ~~~~~~~~


Error: src/app/main/interfaces/Service.ts:3:5 - error TS7010: 'get', which lacks return-type annotation, implicitly has an 'any' return type.

3     get(id)
      ~~~~~~~


Error: src/app/main/interfaces/Service.ts:3:9 - error TS7006: Parameter 'id' implicitly has an 'any' type.        

3     get(id)
          ~~


Error: src/app/main/interfaces/Service.ts:4:5 - error TS7010: 'create', which lacks return-type annotation, implicitly has an 'any' return type.

4     create(data)
      ~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:4:12 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

4     create(data)
             ~~~~


Error: src/app/main/interfaces/Service.ts:5:5 - error TS7010: 'update', which lacks return-type annotation, implicitly has an 'any' return type.

5     update(old, data)
      ~~~~~~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:5:12 - error TS7006: Parameter 'old' implicitly has an 'any' type.      

5     update(old, data)
             ~~~


Error: src/app/main/interfaces/Service.ts:5:17 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

5     update(old, data)
                  ~~~~


Error: src/app/main/interfaces/Service.ts:6:5 - error TS7010: 'remove', which lacks return-type annotation, implicitly has an 'any' return type.

6     remove(id)
      ~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:6:12 - error TS7006: Parameter 'id' implicitly has an 'any' type.       

6     remove(id)
             ~~


Error: src/app/main/mocks/ExpenseTestService.ts:9:45 - error TS2345: Argument of type 'null' is not assignable to 
parameter of type 'string'.

9     public ID = new BehaviorSubject<string>(null);
                                              ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:25:16 - error TS7006: Parameter 'id' implicitly has an 'any' type.
25     public get(id) {
                  ~~


Error: src/app/main/mocks/ExpenseTestService.ts:29:19 - error TS7006: Parameter 'data' implicitly has an 'any' type.

29     public create(data) {
                     ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:36:19 - error TS7006: Parameter 'data' implicitly has an 'any' type.

36     public update(data) {
                     ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:42:19 - error TS7006: Parameter 'id' implicitly has an 'any' type.
42     public remove(id) {
                     ~~


Error: src/app/main/services/HTTPService.ts:22:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

22     async update(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:22:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

22     async update(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:32:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

32     async create(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:32:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

32     async create(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:39:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

39     async remove(url) {
                    ~~~


Error: src/app/modules/expense/expense/expense.component.ts:35:9 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

35   setId(id) {
           ~~


Error: src/app/modules/expense/expense/expense.component.ts:39:8 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

39   edit(id) {
          ~~


Error: src/app/modules/expense/expense/expense.component.ts:44:10 - error TS7006: Parameter 'id' implicitly has an 'any' type.

44   delete(id) {
            ~~


Error: src/app/modules/expense/expense/expense.component.ts:62:17 - error TS2345: Argument of type '(data: Expense[]) => void' is not assignable to parameter of type '(value: Object) => void'.
  Types of parameters 'data' and 'value' are incompatible.
    The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?
      Type 'Object' is missing the following properties from type 'Expense[]': length, pop, push, concat, and 29 more.

62      .subscribe((data:Expense[])=>{
                   ~~~~~~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:33:13 - error NG2003: No suitable injection token for 
parameter 'httpService' of class 'ProductComponent'.
  Consider using the @Inject decorator to specify an injection token.

33     private httpService:HTTPService,
               ~~~~~~~~~~~

  src/app/modules/product/product/product.component.ts:33:25
    33     private httpService:HTTPService,
                               ~~~~~~~~~~~
    This type does not have a value, so it cannot be used as injection token.


Error: src/app/modules/product/product/product.component.ts:33:25 - error TS2304: Cannot find name 'HTTPService'. 

33     private httpService:HTTPService,
                           ~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:34:33 - error TS2304: Cannot find name 'ProductTestService'.

34     private productTestService: ProductTestService,
                                   ~~~~~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:35:29 - error TS2304: Cannot find name 'ProductMessage'.

35     private messageService: ProductMessage) {
                               ~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:40:9 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

40   setId(id) {
           ~~


Error: src/app/modules/product/product/product.component.ts:44:8 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

44   edit(id) {
          ~~


Error: src/app/modules/product/product/product.component.ts:49:10 - error TS7006: Parameter 'id' implicitly has an 'any' type.

49   delete(id) {
            ~~


Error: src/app/modules/product/product/product.component.ts:54:31 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

54       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/delete/"+id)
                                 ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:54:45 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

54       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/delete/"+id)
                                               ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:67:30 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

67      this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
                                ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:67:44 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

67      this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
                                              ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:71:13 - error TS2304: Cannot find name 'HttpErrorResponse'.

71      },(err:HttpErrorResponse)=>{
               ~~~~~~~~~~~~~~~~~




× Failed to compile.
✔ Browser application bundle generation complete.

Initial Chunk Files | Names   | Raw Size
main.js             | main    | 49.96 kB |
runtime.js          | runtime |  6.54 kB |

3 unchanged chunks

Build at: 2023-11-14T05:54:33.369Z - Hash: 896d60c77edff52e - Time: 2588ms

Error: src/app/app.module.ts:20:5 - error NG6001: The class 'ProductComponent' is listed in the declarations of the NgModule 'AppModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.

20     ProductComponent,
       ~~~~~~~~~~~~~~~~

  src/app/modules/product/product/product.component.ts:11:14
    11 export class ProductComponent extends URLLoader implements OnInit {
                    ~~~~~~~~~~~~~~~~
    'ProductComponent' is declared here.


Error: src/app/general/dashboard/dashboard.component.ts:112:21 - error TS2552: Cannot find name 'Chart'. Did you mean 'myChart'?

112   var myChart = new Chart(ctx, {
                        ~~~~~

  src/app/general/dashboard/dashboard.component.ts:112:7
    112   var myChart = new Chart(ctx, {
              ~~~~~~~
    'myChart' is declared here.


Error: src/app/main/interfaces/Service.ts:2:5 - error TS7010: 'getAll', which lacks return-type annotation, implicitly has an 'any' return type.

2     getAll()
      ~~~~~~~~


Error: src/app/main/interfaces/Service.ts:3:5 - error TS7010: 'get', which lacks return-type annotation, implicitly has an 'any' return type.

3     get(id)
      ~~~~~~~


Error: src/app/main/interfaces/Service.ts:3:9 - error TS7006: Parameter 'id' implicitly has an 'any' type.        

3     get(id)
          ~~


Error: src/app/main/interfaces/Service.ts:4:5 - error TS7010: 'create', which lacks return-type annotation, implicitly has an 'any' return type.

4     create(data)
      ~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:4:12 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

4     create(data)
             ~~~~


Error: src/app/main/interfaces/Service.ts:5:5 - error TS7010: 'update', which lacks return-type annotation, implicitly has an 'any' return type.

5     update(old, data)
      ~~~~~~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:5:12 - error TS7006: Parameter 'old' implicitly has an 'any' type.      

5     update(old, data)
             ~~~


Error: src/app/main/interfaces/Service.ts:5:17 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

5     update(old, data)
                  ~~~~


Error: src/app/main/interfaces/Service.ts:6:5 - error TS7010: 'remove', which lacks return-type annotation, implicitly has an 'any' return type.

6     remove(id)
      ~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:6:12 - error TS7006: Parameter 'id' implicitly has an 'any' type.       

6     remove(id)
             ~~


Error: src/app/main/mocks/ExpenseTestService.ts:9:45 - error TS2345: Argument of type 'null' is not assignable to 
parameter of type 'string'.

9     public ID = new BehaviorSubject<string>(null);
                                              ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:25:16 - error TS7006: Parameter 'id' implicitly has an 'any' type.
25     public get(id) {
                  ~~


Error: src/app/main/mocks/ExpenseTestService.ts:29:19 - error TS7006: Parameter 'data' implicitly has an 'any' type.

29     public create(data) {
                     ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:36:19 - error TS7006: Parameter 'data' implicitly has an 'any' type.

36     public update(data) {
                     ~~~~


Error: src/app/main/mocks/ExpenseTestService.ts:42:19 - error TS7006: Parameter 'id' implicitly has an 'any' type.
42     public remove(id) {
                     ~~


Error: src/app/main/services/HTTPService.ts:22:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

22     async update(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:22:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

22     async update(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:32:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

32     async create(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:32:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

32     async create(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:39:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

39     async remove(url) {
                    ~~~


Error: src/app/modules/expense/expense/expense.component.ts:35:9 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

35   setId(id) {
           ~~


Error: src/app/modules/expense/expense/expense.component.ts:39:8 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

39   edit(id) {
          ~~


Error: src/app/modules/expense/expense/expense.component.ts:44:10 - error TS7006: Parameter 'id' implicitly has an 'any' type.

44   delete(id) {
            ~~


Error: src/app/modules/expense/expense/expense.component.ts:62:17 - error TS2345: Argument of type '(data: Expense[]) => void' is not assignable to parameter of type '(value: Object) => void'.
  Types of parameters 'data' and 'value' are incompatible.
    The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?
      Type 'Object' is missing the following properties from type 'Expense[]': length, pop, push, concat, and 29 more.

62      .subscribe((data:Expense[])=>{
                   ~~~~~~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:33:13 - error NG2003: No suitable injection token for 
parameter 'httpService' of class 'ProductComponent'.
  Consider using the @Inject decorator to specify an injection token.

33     private httpService:HTTPService,
               ~~~~~~~~~~~

  src/app/modules/product/product/product.component.ts:33:25
    33     private httpService:HTTPService,
                               ~~~~~~~~~~~
    This type does not have a value, so it cannot be used as injection token.


Error: src/app/modules/product/product/product.component.ts:33:25 - error TS2304: Cannot find name 'HTTPService'. 

33     private httpService:HTTPService,
                           ~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:34:33 - error TS2304: Cannot find name 'ProductTestService'.

34     private productTestService: ProductTestService,
                                   ~~~~~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:35:29 - error TS2304: Cannot find name 'ProductMessage'.

35     private messageService: ProductMessage) {
                               ~~~~~~~~~~~~~~


Error: src/app/modules/product/product/product.component.ts:40:9 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

40   setId(id) {
           ~~


Error: src/app/modules/product/product/product.component.ts:44:8 - error TS7006: Parameter 'id' implicitly has an 
'any' type.

44   edit(id) {
          ~~


Error: src/app/modules/product/product/product.component.ts:49:10 - error TS7006: Parameter 'id' implicitly has an 'any' type.

49   delete(id) {
            ~~


Error: src/app/modules/product/product/product.component.ts:54:31 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

54       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/delete/"+id)
                                 ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:54:45 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

54       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/delete/"+id)
                                               ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:67:30 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

67      this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
                                ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:67:44 - error TS2552: Cannot find name 'URLS'. Did you mean 'URL'?

67      this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
                                              ~~~~

  node_modules/typescript/lib/lib.dom.d.ts:22481:13
    22481 declare var URL: {
                      ~~~
    'URL' is declared here.


Error: src/app/modules/product/product/product.component.ts:71:13 - error TS2304: Cannot find name 'HttpErrorResponse'.

71      },(err:HttpErrorResponse)=>{
               ~~~~~~~~~~~~~~~~~




× Failed to compile.
