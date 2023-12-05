
Build at: 2023-12-05T06:27:55.966Z - Hash: dae674f2eda61d52 - Time: 1795ms

Error: src/app/main/services/login.service.ts:21:36 - error TS2339: Property 'token' does not exist on type 
'Object'.

21           if (response && response.token) {
                                      ~~~~~


Error: src/app/main/services/login.service.ts:22:52 - error TS2339: Property 'token' does not exist on type 
'Object'.

22             localStorage.setItem("token", response.token);
                                                      ~~~~~




× Failed to compile.
