Error: src/app/component/product/product.component.html:52:49 - error TS2339: Property 'categories' does not exist on type 'ProductComponent'.

52                 <option *ngFor="let category of categories" [ngValue]="category">{{ category.category_name }}</option>
                                                   ~~~~~~~~~~

  src/app/component/product/product.component.ts:7:16
    7   templateUrl: './product.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component ProductComponent.


Error: src/app/component/product/product.component.html:58:49 - error TS2339: Property 'suppliers' does not exist 
on type 'ProductComponent'.

58                 <option *ngFor="let supplier of suppliers" [ngValue]="supplier">{{ supplier.supplierName }}</option>
                                                   ~~~~~~~~~

  src/app/component/product/product.component.ts:7:16
    7   templateUrl: './product.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component ProductComponent.




× Failed to compile.
