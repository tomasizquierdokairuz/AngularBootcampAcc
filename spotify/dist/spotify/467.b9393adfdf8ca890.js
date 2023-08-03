"use strict";(self.webpackChunkspotify=self.webpackChunkspotify||[]).push([[467],{1467:(M,g,r)=>{r.r(g),r.d(g,{AuthModule:()=>P});var u=r(6814),l=r(2413),e=r(95),o=r(4946),d=r(553),p=r(9862),s=r(459);let m=(()=>{class n{constructor(t,i){this.http=t,this.cookie=i,this.URL=d.N.api}sendCredentials(t,i){return this.http.post("https://backend-spotify-bootcamps-tribe.onrender.com/api/1.0/auth/login",{email:t,password:i})}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(p.eN),o.LFG(s.N))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function h(n,a){1&n&&(o.TgZ(0,"div"),o._uU(1," Ocurrio un error con tu email o password "),o.qZA())}const f=[{path:"login",component:(()=>{class n{constructor(t,i,c){this.authService=t,this.cookie=i,this.router=c,this.errorSession=!1,this.formLogin=new e.cw({})}ngOnInit(){this.formLogin=new e.cw({email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required,e.kI.minLength(6),e.kI.maxLength(12)])})}sendLogin(){const{email:t,password:i}=this.formLogin.value;console.log(t+i),this.authService.sendCredentials(t,i).subscribe({next:c=>{console.log("sesion correcta",c);const{tokenSession:v}=c;this.cookie.set("token",v,4,"/")},error:c=>{console.log("ocurrio error"),this.errorSession=!0}})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(m),o.Y36(s.N),o.Y36(l.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login-page"]],decls:31,vars:3,consts:[[1,"login-auth-page"],[1,"login-auth-wrapper"],[1,"login-social-zone"],[1,"social-btn","btn-fb"],[1,"uil","uil-facebook-f"],[1,"social-btn","btn-apple"],[1,"uil","uil-apple"],[1,"social-btn"],[1,"uil","uil-google"],[1,"separator"],[1,"login-auth-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["formControlName","email","type","text","placeholder","Direcci\xf3n de correo o nombre de usuario",1,"form-input"],["for","password"],["formControlName","password","type","password","placeholder","Contrase\xf1a",1,"form-input"],[1,"form-steps"],["href","",1,"link"],[4,"ngIf"],[1,"form-action"],[1,"login","social-btn",3,"disabled"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h3"),o._uU(3,"Para continuar, inicia sesi\xf3n en Spotify."),o.qZA(),o.TgZ(4,"div",2)(5,"button",3),o._UZ(6,"i",4),o._uU(7," Continuar con Social"),o.qZA(),o.TgZ(8,"button",5),o._UZ(9,"i",6),o._uU(10," Continuar con Apple"),o.qZA(),o.TgZ(11,"button",7),o._UZ(12,"i",8),o._uU(13," Continuar con Google"),o.qZA()(),o._UZ(14,"div",9),o.TgZ(15,"form",10),o.NdJ("ngSubmit",function(){return i.sendLogin()}),o.TgZ(16,"div",11)(17,"label",12),o._uU(18,"Direcci\xf3n de correo o nombre de usuario"),o.qZA(),o._UZ(19,"input",13),o.qZA(),o.TgZ(20,"div",11)(21,"label",14),o._uU(22,"Contrase\xf1a"),o.qZA(),o._UZ(23,"input",15),o.qZA(),o.TgZ(24,"div",16)(25,"a",17),o._uU(26,"\xbfSe te ha olvidado la contrase\xf1a?"),o.qZA()(),o.YNc(27,h,2,0,"div",18),o.TgZ(28,"div",19)(29,"button",20),o._uU(30,"Iniciar sesi\xf3n"),o.qZA()()()()()),2&t&&(o.xp6(15),o.Q6J("formGroup",i.formLogin),o.xp6(12),o.Q6J("ngIf",i.errorSession),o.xp6(2),o.Q6J("disabled",i.formLogin.invalid))},dependencies:[u.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:[".login-auth-page[_ngcontent-%COMP%]{position:absolute;width:100vw;height:100vh;background-color:var(--color-4);color:var(--color-3);display:flex;justify-content:center;flex-direction:column;align-items:center;align-content:center}.login-auth-page[_ngcontent-%COMP%]   .login-auth-wrapper[_ngcontent-%COMP%]{width:25%;display:flex;justify-content:center;flex-direction:column;align-items:center}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;width:100%}.login-auth-page[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]{border:0;padding:.5rem 2rem;width:100%;font-size:var(--font-size-2);border-radius:var(--border-radius-2);box-shadow:var(--shadow-1);border:solid 1px var(--color-4);background-color:var(--color-4);font-weight:600}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-fb[_ngcontent-%COMP%]{background-color:#3a61b3;color:var(--color-4)}.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-apple[_ngcontent-%COMP%]{background-color:#1a1a1a;color:var(--color-4)}.login-auth-page[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{width:100%;margin:2rem 0;border-bottom:solid 1px var(--color-2);opacity:.2}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-start;flex-direction:column}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:column}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:solid 1px #e7e7e7;border-radius:var(--border-radius-1);height:30px;padding:.25rem .5rem;font-size:90%}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-bottom:.35rem;font-weight:600;display:inline-block;margin:0}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]{padding:.5rem 0}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--color-2);font-size:85%;font-weight:500;text-decoration:underline}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{color:var(--color-1)}.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{color:var(--color-4);margin:1rem 0;background-color:var(--color-1)}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:solid 2px red!important}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:solid 2px lime!important}"]}),n})()},{path:"**",redirectTo:"/auth/login"}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.Bz.forChild(f),l.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.ez,C,e.UX]}),n})()}}]);