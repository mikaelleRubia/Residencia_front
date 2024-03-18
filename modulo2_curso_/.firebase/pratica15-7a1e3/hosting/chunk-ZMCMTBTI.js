import{a as ye,b as Ee,d as be,e as Ce,f as xe,g as De,h as Te,i as Ie,j as we,k as Fe,l as He,m as Me,o as Ae,q as E}from"./chunk-ONUFSXD5.js";import{a as he,b as fe}from"./chunk-MOHDV2DC.js";import{a as H,c as Pe,d as Se,e as _e,f as M,g as R}from"./chunk-KN3ZW43U.js";import{$a as z,$b as I,A as S,Aa as N,D as U,Da as G,E as q,Ea as W,Eb as T,Fa as J,Hb as Y,Ia as K,J as V,Jb as ee,Kb as C,Mb as te,Nb as ie,Pb as oe,Qb as se,R as d,Rb as re,S as l,Sb as ne,Tb as ae,Ub as me,Vb as pe,Wb as de,b as x,ca as D,dc as w,ea as c,fb as Z,hc as le,ib as Q,j as $,ja as r,ka as p,kb as X,kc as ce,la as u,lc as ue,pa as y,qa as h,r as g,ra as f,sc as ve,tc as F,u as j,uc as ge,w as _,x as L,z as P,za as b}from"./chunk-ILUHHQLF.js";import{a as k,b as B}from"./chunk-CQCHLVVT.js";var O=(()=>{let i=class i{constructor(e,t){this.http=e,this.cookieService=t,this.API_URL=pe.fireDatabase,this.JWT_TOKEN=this.cookieService.get("USER_INFO")}getAllPeso(e){let t=this.cookieService.get("USER_INFO");return this.http.get(this.API_URL+"pesos.json",{headers:{Authorization:`Bearer ${t}`}}).pipe($(o=>{let m=[];for(let n in o)o.hasOwnProperty(n)&&o[n].id_suino===e&&m.push(B(k({},o[n]),{id:n}));return m}))}deletePeso(e){return this.http.delete(this.API_URL+`pesos/${e}.json`)}addPeso(e){return this.http.post(this.API_URL+"pesos.json",e)}editPeso(e,t){return this.http.put(this.API_URL+`pesos/${t}.json`,e)}};i.\u0275fac=function(t){return new(t||i)(V(Q),V(de))},i.\u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();function Ue(s,i){if(s&1){let a=y();r(0,"div")(1,"form",1),h("ngSubmit",function(){P(a);let t=f();return S(t.handleSubmitAddPeso())}),r(2,"div",2),u(3,"input",3)(4,"input",4),r(5,"div",5),u(6,"p-button",6),p()()()()}if(s&2){let a=f();d(),c("formGroup",a.addPesoForm),d(5),c("disabled",!a.addPesoForm.valid)}}function qe(s,i){if(s&1){let a=y();r(0,"div")(1,"form",1),h("ngSubmit",function(){P(a);let t=f();return S(t.handleSubmitEditPeso())}),r(2,"div",2),u(3,"input",3)(4,"input",4),r(5,"div",5),u(6,"p-button",6),p()()()()}if(s&2){let a=f();d(),c("formGroup",a.editPesoForm),d(5),c("disabled",!a.editPesoForm.valid)}}var Ve=(()=>{let i=class i{constructor(e,t,o,m,n,v){this.historicoService=e,this.messageService=t,this.formBuilder=o,this.router=m,this.ref=n,this.suinosDtService=v,this.destroy$=new x,this.pesoDatas=[],this.pesoListaDatas=[],this.addPesoForm=this.formBuilder.group({dataPesagem:["",C.required],pesoKg:["",C.required]}),this.editPesoForm=this.formBuilder.group({dataPesagem:["",C.required],pesoKg:["",C.required]}),this.addPesoEvent=E.ADD_PESO_EVENT,this.editPesoEvent=E.EDIT_PESO_EVENT}ngOnInit(){this.PesoSuinoAction=this.ref.data,this.pesoAction=this.ref.data?.event?.peso,this.PesoSuinoAction?.event?.action==this.editPesoEvent&&this.getPesoSelectedDatas(this.ref.data?.event?.peso),this.getAllPesos()}getAllPesos(){this.historicoService.getAllPeso(this.suinosDtService.id_suino).pipe(g(this.destroy$)).subscribe({next:e=>{e.length>0&&(this.pesoDatas=e)},error:e=>{console.log(e),this.router.navigate(["/dashboard"]),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao buscar animais",life:2500})}})}handleSubmitAddPeso(){if(this.addPesoForm?.value&&this.addPesoForm?.valid){let{dataPesagem:e,pesoKg:t}=this.addPesoForm.value;if(this.pesoDatas.some(m=>m.dataPesagem==e))this.messageService.add({severity:"error",summary:"Erro",detail:"O Suino j\xE1 tem pesagem para esse data",life:3e3});else{let n={dataPesagem:e||"",pesoKg:Number(this.addPesoForm.value?.pesoKg),id_suino:this.suinosDtService.id_suino};this.historicoService.addPeso(n).pipe().subscribe({next:v=>{v&&(this.messageService.add({severity:"success",summary:"Sucesso",detail:"Peso adicionado com sucesso!",life:2500}),this.pesoDatas=[])},error:v=>{console.log(v),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao adicionar Peso",life:2e3})}})}}this.addPesoForm.reset()}handleSubmitEditPeso(){if(this.editPesoForm?.valid)if(this.pesoDatas.some(t=>t.dataPesagem==this.editPesoForm.value.dataPesagem&&t.pesoKg==Number(this.editPesoForm.value.pesoKg)))this.messageService.add({severity:"error",summary:"Erro",detail:"O Suino j\xE1 tem pesagem para esse data.",life:3e3});else{let t={dataPesagem:this.editPesoForm.value.dataPesagem??"",pesoKg:Number(this.editPesoForm.value.pesoKg),id_suino:this.ref.data?.event?.peso?.id_suino};this.historicoService.editPeso(t,this.ref.data?.event?.peso?.id).pipe(g(this.destroy$)).subscribe({next:()=>{this.messageService.add({severity:"sucess",summary:"Sucesso",detail:"Peso editado com sucesso",life:2500}),this.editPesoForm.reset(),this.getAllPesos()},error:o=>{console.log(o),this.router.navigate(["/suino"]),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao buscar peso",life:2500})}})}}getPesoSelectedDatas(e){e&&this.editPesoForm.setValue({dataPesagem:e.dataPesagem,pesoKg:String(e.pesoKg)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(l(O),l(w),l(ne),l(T),l(Se),l(H))},i.\u0275cmp=_({type:i,selectors:[["app-historicopeso-form"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"card","flex","flex-column","md:flex-column","gap-3"],["pInputText","","placeholder","Peso do animal","formControlName","pesoKg"],["pInputText","","type","date","placeholder","Data da pesagem","formControlName","dataPesagem"],[1,"flex","flex-row","justify-content-center","align-content-center","align-items-center","m-1"],["type","submit","label","Concluir",3,"disabled"]],template:function(t,o){t&1&&D(0,Ue,7,2,"div",0)(1,qe,7,2,"div",0),t&2&&(c("ngIf",o.ref.data.event.action===o.addPesoEvent),d(),c("ngIf",o.ref.data.event.action===o.editPesoEvent))},dependencies:[z,oe,ee,te,ie,se,re,F,he]});let s=i;return s})();function Ge(s,i){if(s&1){let a=y();r(0,"tr")(1,"th",7)(2,"div",8)(3,"div",8),b(4," Data Pesagem "),p(),r(5,"div",8),u(6,"p-sortIcon",9)(7,"p-columnFilter",10),p()()(),r(8,"th",11)(9,"div",8)(10,"div",8),b(11," Peso Kg "),p(),r(12,"div",8),u(13,"p-sortIcon",12)(14,"p-columnFilter",13),p()()(),r(15,"div",14)(16,"p-button",15),h("onClick",function(){P(a);let t=f();return S(t.handlePesoEvent(t.addPesoEvent))}),p()()()}s&2&&(d(7),c("showMatchModes",!1)("showOperator",!1)("showAddButton",!1),d(7),c("showMatchModes",!1)("showOperator",!1)("showAddButton",!1))}function We(s,i){if(s&1){let a=y();r(0,"tr")(1,"td"),b(2),p(),r(3,"td"),b(4),p(),r(5,"td")(6,"div",16)(7,"button",17),h("click",function(){let o=P(a).$implicit,m=f();return S(m.handlePesoEvent(m.editPesoEvent,o))}),p(),r(8,"button",18),h("click",function(){let o=P(a).$implicit,m=f();return S(m.handleDeletePeso(o.id,o.pesoKg))}),p()()()()}if(s&2){let a=i.$implicit;d(2),N(a.pesoKg),d(2),N(a.dataPesagem)}}var Je=()=>["dataPesagem","pesoKg"],ze=()=>({"min-width":"75rem"}),Ne=(()=>{let i=class i{constructor(){this.Pesos=[],this.historicoEvent=new j,this.deletePesoHistorico=new j,this.addPesoEvent=E.ADD_PESO_EVENT,this.editPesoEvent=E.EDIT_PESO_EVENT}handlePesoEvent(e,t){if(e&&e!==" "){let o=t&&t!==null?{action:e,peso:t}:{action:e};console.log("suinoEventDataPeso",o),this.historicoEvent.emit(o)}}handleDeletePeso(e,t){e!==null&&this.deletePesoHistorico.emit({id:e,pesoKg:t})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=_({type:i,selectors:[["app-historico-peso-table"]],inputs:{Pesos:"Pesos"},outputs:{historicoEvent:"historicoEvent",deletePesoHistorico:"deletePesoHistorico"},decls:7,vars:11,consts:[[1,"grid"],[1,"col-12"],["header","Historico de Peso","styleClass","shadow-3 m-5 text-indigo-800"],["data","id","currentPageReportTemplate","Mostrando {first} de {last} de pesos",3,"value","rows","paginator","responsive","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","selectionChange"],["HistoricoTable",""],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","dataPesagem"],[1,"flex","justify-content-between","align-items-center"],["field","dataPesagem"],["type","text","field","dataPesagem","display","menu","matchMode","contains",3,"showMatchModes","showOperator","showAddButton"],["pSortableColumn","pesoKg"],["field","pesoKg"],["type","text","field","pesoKg","display","menu","matchMode","contains",3,"showMatchModes","showOperator","showAddButton"],[1,"flex","justify-content-center"],["styleClass","p-button-info","icon","pi pi-plus","label","Adicionar","pTooltip","Adicionar produto","tooltipPosition","top",3,"onClick"],[1,"flex","justify-content-center","grap-3","align-content-center","align-items-center"],["pButton","","pRipple","","icon","pi pi-pencil","pTooltip","Editar","tooltipPosition","top",1,"p-button-secondary",3,"click"],["pButton","","pRipple","","icon","pi pi-trash","pTooltip","Remover","tooltipPosition","top",1,"p-button-danger",3,"click"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"p-card",2)(3,"p-table",3,4),J("selectionChange",function(n){return W(o.HistoricoSelected,n)||(o.HistoricoSelected=n),n}),D(5,Ge,17,6,"ng-template",5)(6,We,9,2,"ng-template",6),p()()()()),t&2&&(d(3),c("value",o.Pesos)("rows",10)("paginator",!0)("responsive",!0)("globalFilterFields",K(9,Je))("tableStyle",K(10,ze)),G("selection",o.HistoricoSelected),c("rowHover",!0)("showCurrentPageReport",!0))},dependencies:[ce,le,ve,F,xe,De,Te,Ie,ye]});let s=i;return s})();var Ke=(()=>{let i=class i{constructor(e,t,o,m,n,v){this.messageService=e,this.suinosDtService=t,this.dialogService=o,this.pesoSuinoService=m,this.confirmationService=n,this.router=v,this.destroy$=new x,this.pesoSuinoList=[],this.id="",this.suino=null}ngOnInit(){this.getServiceHistoricoData(this.suinosDtService.id_suino)}getServiceHistoricoData(e){let t=this.suinosDtService.getPesoDatas(e);t.length>0?(this.pesoSuinoList=t,console.log("DADOS DOS PESOS",this.pesoSuinoList)):this.getAPIPesoSuinoDtas()}getAPIPesoSuinoDtas(){this.pesoSuinoService.getAllPeso(this.suinosDtService.id_suino).pipe(g(this.destroy$)).subscribe({next:e=>{e.length>0&&(this.pesoSuinoList=e)},error:e=>{console.log(e),this.router.navigate(["/dashboard"]),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao buscar pesos",life:2500})}})}handlepesoEvent(e){e&&(e.suino_id=this.suinosDtService.id_suino,this.ref=this.dialogService.open(Ve,{header:e?.action,width:"70%",contentStyle:{overflow:"auto"},baseZIndex:1e4,maximizable:!0,data:{event:e,peso:this.pesoSuinoList}}),this.ref.onClose.pipe(g(this.destroy$)).subscribe({next:()=>this.getAPIPesoSuinoDtas()}))}handleDeletePeso(e){if(e){this.deletePeso(e.id);let t=e.id}}deletePeso(e){e&&this.pesoSuinoService.deletePeso(e).pipe(g(this.destroy$)).subscribe({next:t=>{t&&this.messageService.add({severity:"success",summary:"Sucesso",detail:"Peso removido com sucesso!",life:2500}),this.getAPIPesoSuinoDtas()},error:t=>{console.log(t),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao deletar Suino",life:2e3})}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(t){return new(t||i)(l(w),l(H),l(M),l(O),l(I),l(T))},i.\u0275cmp=_({type:i,selectors:[["app-historicopeso-home"]],decls:2,vars:1,consts:[[3,"Pesos","historicoEvent","deletePesoHistorico"]],template:function(t,o){t&1&&(u(0,"app-toolbar-navigation"),r(1,"app-historico-peso-table",0),h("historicoEvent",function(n){return o.handlepesoEvent(n)})("deletePesoHistorico",function(n){return o.handleDeletePeso(n)}),p()),t&2&&(d(),c("Pesos",o.pesoSuinoList))},dependencies:[Pe,Ne]});let s=i;return s})();var Re=[{path:"",component:Ke}];var Jt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=L({type:i}),i.\u0275inj=q({providers:[M,I],imports:[Z,ae,me,Y.forChild(Re),R,X,ue,ge,we,Fe,He,fe,Me,Ce,_e,be,Ae,Ee,R]});let s=i;return s})();export{Jt as HistoricoPesoModule};
