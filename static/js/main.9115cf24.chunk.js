(this["webpackJsonpsuper-hero"]=this["webpackJsonpsuper-hero"]||[]).push([[0],{29:function(e,t,a){},38:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),c=a.n(s),o=(a(48),a(11)),i=a(2),l=(a(49),a(3)),d=a(21),u=a(0);var b=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(u.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(u.jsx)("div",{children:"Error: E-mail y/o contrase\xf1a incorrectos."})]})})},j=r.a.createContext({});function m(e){var t=e.children,a=Object(n.useState)("challenge@alkemy.org"),r=Object(l.a)(a,2),s=r[0],c=r[1];return Object(u.jsx)(j.Provider,{value:{usuario:s,setUsuario:c},children:t})}var h=j,p={heroeBueno1:"",heroeBueno2:"",heroeBueno3:"",heroeMalo1:"",heroeMalo2:"",heroeMalo3:""},x=function(e){null===localStorage.getItem("".concat(e))&&localStorage.setItem(e,JSON.stringify(p))},O=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Direcci\xf3n de e-mail inv\xe1lida"):t.email="Campo obligatorio",e.password||(t.password="Campo obligatorio"),t},g=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useContext)(h).setUsuario,c=Object(i.g)(),o=Object(d.a)({initialValues:{email:"",password:""},validate:O,onSubmit:function(e){"challenge@alkemy.org"===e.email&&"react"===e.password?(s("challenge@alkemy.org"),x("challenge@alkemy.org"),localStorage.setItem("TOKEN","123456"),c.push("/miEquipo")):r(!0)}});return localStorage.TOKEN?Object(u.jsx)(i.a,{to:"/MiEquipo"}):Object(u.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(u.jsxs)("form",{onSubmit:o.handleSubmit,className:"w-75 d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Direccion de e-mail"}),Object(u.jsx)("input",{id:"email",name:"email",type:"email",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,onClick:function(){return r(!1)}}),o.touched.email&&o.errors.email?Object(u.jsx)("div",{className:"text-danger fw-bold",children:o.errors.email}):null,Object(u.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(u.jsx)("input",{id:"password",name:"password",type:"password",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.password,onClick:function(){return r(!1)}}),o.touched.password&&o.errors.password?Object(u.jsx)("div",{className:"text-danger fw-bold",children:o.errors.password}):null,Object(u.jsx)("button",{className:"m-2 w-50 mx-auto btn btn-outline-success",type:"submit",children:"Enviar"})]}),a?Object(u.jsx)(b,{}):null,Object(u.jsxs)("div",{className:" m-2 border border-4 rounded border-success",children:[Object(u.jsx)("p",{className:" text-center m-0 text-dark fw-bold",children:"Con motivos de mostrar la aplicaci\xf3n, la autenticaci\xf3n ha sido simplificada."}),Object(u.jsxs)("p",{className:"m-0 d-flex justify-content-between mx-4 text-dark",children:["E-mail : ",Object(u.jsx)("span",{className:"text-primary ",children:"challenge@alkemy.org"})," "]}),Object(u.jsxs)("p",{className:"m-0 d-flex justify-content-between mx-4 text-dark",children:["Contrase\xf1a: ",Object(u.jsx)("span",{className:"text-primary ",children:"react"})," "]})]})]})},f=a.p+"static/media/blackFist.3db0e8e6.png",N=(a(29),function(){return Object(u.jsxs)("div",{className:"login-container",children:[Object(u.jsxs)("section",{className:"title-container h-25 d-flex flex-row justify-content-center align-items-center",children:[Object(u.jsx)("h1",{className:"text-center",children:"Super-App"}),Object(u.jsx)("img",{src:f,alt:"\xcdcono pu\xf1o color negro",className:"h-25"})]}),Object(u.jsx)("p",{className:"text-center",children:"Logueate para ingresar"}),Object(u.jsx)(g,{})]})}),v=a.p+"static/media/whiteFist.7a7025a0.png";var w=function(e){var t=e.children;return Object(u.jsxs)("div",{className:"text-success",children:[t,Object(u.jsxs)("footer",{className:"bg-dark fixed-bottom d-flex flex-row justify-content-around w-100",style:{height:"2.3rem"},children:[Object(u.jsx)("p",{className:"my-auto",children:"Hecho para challenge de Alkemy"}),Object(u.jsx)("img",{src:v,alt:"Loco pu\xf1o de color blanco",className:"h-100"})]})]})},y=(a(58),r.a.createContext("".concat("https://superheroapi.com/api.php/").concat("10227367807479577"))),S=a(20),k=a.n(S),C=function(e,t,a){if("good"===t){var n=localStorage.getItem("".concat(a)),r=JSON.parse(n);""===r.heroeBueno1?r.heroeBueno1=e:""===r.heroeBueno2?r.heroeBueno2=e:""===r.heroeBueno3?r.heroeBueno3=e:window.alert("Equipo de super-heroes buenos lleno, intenta borrar un super-heroe e intenta nuevamente."),localStorage.setItem("".concat(a),JSON.stringify(r))}else{var s=localStorage.getItem("".concat(a)),c=JSON.parse(s);""===c.heroeMalo1?c.heroeMalo1=e:""===c.heroeMalo2?c.heroeMalo2=e:""===c.heroeMalo3?c.heroeMalo3=e:window.alert("Equipo de super-heroes malos lleno, intenta borrar un super-heroe e intenta nuevamente."),localStorage.setItem("".concat(a),JSON.stringify(c))}},I=function(e,t,a){if("good"===t){var n=localStorage.getItem("".concat(a)),r=JSON.parse(n);r.heroeBueno1===e?r.heroeBueno1="":r.heroeBueno2===e?r.heroeBueno2="":r.heroeBueno3===e?r.heroeBueno3="":console.log("Error, no encontrado. Contactar al creador de app"),localStorage.setItem("".concat(a),JSON.stringify(r))}else{var s=localStorage.getItem("".concat(a)),c=JSON.parse(s);c.heroeMalo1===e?c.heroeMalo1="":c.heroeMalo2===e?c.heroeMalo2="":c.heroeMalo3===e?c.heroeMalo3="":console.log("Error, no encontrado. Contactar al creador de app"),localStorage.setItem("".concat(a),JSON.stringify(c))}},B=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(void 0),o=Object(l.a)(c,2),i=o[0],d=o[1];Object(n.useEffect)((function(){"good"===e.bando?d("border-success"):d("border-danger")}),[]);return Object(u.jsxs)("div",{className:"col-md-5 d-flex flex-row align-items-center border border-3 rounded ".concat(i," p-1 justify-content-between m-1"),style:{maxWidth:"90vw"},children:[Object(u.jsx)("div",{style:{height:"25vh"},className:"align-middle",children:Object(u.jsx)("img",{src:e.imagen,alt:"Im\xe1gen Super-heroe",className:"img-fluid h-100 "})}),Object(u.jsx)("p",{className:"fw-bold",children:e.nombre}),-1===localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))?Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return C(e.id,e.bando,e.usuario),void(-1!==localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))&&!0!==r&&s(!0))},children:"Agregar"}):Object(u.jsx)("button",{className:" btn btn-danger",onClick:function(){return I(e.id,e.bando,e.usuario),void(-1===localStorage.getItem("".concat(e.usuario)).search('"'.concat(e.id,'"'))&&s(!1))},children:"Quitar"})]})},_=function(){return Object(u.jsx)("h3",{className:"text-center cargando m-2",children:"Cargando . . ."})},q=(a(38),function(e){var t={};return e.nombre||(t.nombre="Ingres\xe1 alg\xfan caracter"),t}),M=function(e){var t=Object(n.useContext)(y),a=Object(n.useState)(null),r=Object(l.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(!1),b=Object(l.a)(o,2),j=b[0],m=b[1];var h=Object(d.a)({initialValues:{nombre:""},validate:q,onSubmit:function(e){!function(e){k.a.get(e).then((function(e){c(e.data.results),m(!1)})).catch((function(e){console.log(e)}))}("".concat(t,"/search/").concat(e.nombre)),m(!0)}});return localStorage.TOKEN?Object(u.jsxs)("div",{className:"w-100",children:[Object(u.jsxs)("form",{onSubmit:h.handleSubmit,children:[Object(u.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:[Object(u.jsx)("label",{htmlFor:"nombre",children:"Nombre:"}),Object(u.jsx)("input",{className:"w-50 m-2",id:"nombre",name:"nombre",type:"text",onChange:h.handleChange,value:h.values.nombre}),Object(u.jsx)("button",{type:"submit",className:" btn btn-outline-primary",children:"Buscar"})]}),h.errors.nombre?Object(u.jsx)("div",{className:"text-danger fw-bold text-center",children:h.errors.nombre}):null]}),Object(u.jsx)("div",{className:"row d-flex justify-content-evenly ",children:j?Object(u.jsx)(_,{}):null==s?null:s.map((function(t){return Object(u.jsx)(B,{nombre:t.name,imagen:t.image.url,bando:t.biography.alignment,id:t.id,usuario:e.usuario},t.id)}))})]}):Object(u.jsx)(i.a,{to:"/"})};var T=function(){return Object(u.jsxs)("div",{className:"d-flex justify-content-around align-items-center bg-dark border border-1 fixed-top",style:{height:"4rem"},children:[Object(u.jsx)("p",{className:"m-0",children:"Superhero app"}),Object(u.jsx)("a",{className:"link-light",href:"./",onClick:function(){localStorage.removeItem("TOKEN")},children:"Cerrar sesi\xf3n"})]})},E=function(){var e=Object(n.useContext)(h).usuario;return Object(u.jsxs)("div",{className:"buscador__contenedor mw-100",style:{marginBottom:"2.3rem"},children:[Object(u.jsx)(T,{}),Object(u.jsx)(o.b,{to:"/miEquipo",className:"btn btn-outline-secondary d-block mx-auto",style:{width:"10rem"},children:"Volver al Home"}),Object(u.jsx)("h1",{className:"text-center m-4",children:"Buscador de heroes"}),Object(u.jsx)("p",{className:"text-center text-dark",children:"Busc\xe1 a tus super-heroes preferidos."}),Object(u.jsx)("p",{className:"text-center text-success ",children:"\u2022 color borde heroes Buenos"}),Object(u.jsx)("p",{className:"text-center text-danger",children:"\u2022 color borde heroes malos"}),Object(u.jsx)(M,{usuario:e})]})},F=a(43),J=a(15),A=a.n(J),L=a(27),D=function(e){return Object(u.jsxs)("div",{className:"mb-4",children:[Object(u.jsx)("h6",{className:"text-center mt-3",children:"Estad\xedsticas de tu equipo:"}),Object(u.jsxs)("section",{style:{maxWidth:"35rem"},className:"border border-3 rounded border-success w-75 mx-auto text-dark d-flex justify-content-around",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Total inteligencia: "}),Object(u.jsx)("p",{children:"Total fuerza: "}),Object(u.jsx)("p",{children:"Total velocidad: "}),Object(u.jsx)("p",{children:"Total durabilidad: "}),Object(u.jsx)("p",{children:"Total poder: "}),Object(u.jsx)("p",{children:"Total combate: "}),Object(u.jsx)("p",{children:"Peso promedio: "}),Object(u.jsx)("p",{children:"Altura promedio:  "})]}),Object(u.jsxs)("div",{className:"text-secondary fw-bold",children:[Object(u.jsx)("p",{children:e.int[0]}),Object(u.jsx)("p",{children:e.str[0]}),Object(u.jsx)("p",{children:e.vel[0]}),Object(u.jsx)("p",{children:e.dur[0]}),Object(u.jsx)("p",{children:e.pow[0]}),Object(u.jsx)("p",{children:e.com[0]}),Object(u.jsxs)("p",{children:[e.peso," Kg"]}),Object(u.jsxs)("p",{children:[e.altura," Cms"]})]})]})]})},K=function(e,t,a,n,r,s){return[e,t,a,n,r,s].sort((function(e,t){return t[0]-e[0]}))[0][1]},P=function(e,t,a,n,r,s){var c=0,o=0,i=0;return null!==e&&(i+=1,c+=parseInt(e.appearance.weight[1]),o+=parseInt(e.appearance.height[1])),null!==t&&(i+=1,c+=parseInt(t.appearance.weight[1]),o+=parseInt(t.appearance.height[1])),null!==a&&(i+=1,c+=parseInt(a.appearance.weight[1]),o+=parseInt(a.appearance.height[1])),null!==n&&(i+=1,c+=parseInt(n.appearance.weight[1]),o+=parseInt(n.appearance.height[1])),null!==r&&(i+=1,c+=parseInt(r.appearance.weight[1]),o+=parseInt(r.appearance.height[1])),null!==s&&(i+=1,c+=parseInt(s.appearance.weight[1]),o+=parseInt(s.appearance.height[1])),[0!==c?c/i:0,0!==o?o/i:0]},Q=function(e,t,a,n,r,s,c){var o=0;return null!==t&&"null"!==t.powerstats[e]&&(o+=parseInt(t.powerstats[e])),null!==a&&"null"!==a.powerstats[e]&&(o+=parseInt(a.powerstats[e])),null!==n&&"null"!==n.powerstats[e]&&(o+=parseInt(n.powerstats[e])),null!==r&&"null"!==r.powerstats[e]&&(o+=parseInt(r.powerstats[e])),null!==s&&"null"!==s.powerstats[e]&&(o+=parseInt(s.powerstats[e])),null!==c&&"null"!==c.powerstats[e]&&(o+=parseInt(c.powerstats[e])),o},z=a(42),V=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],c=function(){return s(!1)};return Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(u.jsxs)("section",{className:"d-flex flex-column border border-3 rounded border-dark p-2 mi-equipo__tarjeta-stats",children:[Object(u.jsx)("h1",{className:"text-center",children:e.nombre}),Object(u.jsx)("div",{className:"mi-equipo__tarjeta-imagen",children:Object(u.jsx)("img",{src:e.imagen,alt:"Imagen de Super-heroe",className:" img-fluid w-50 mx-auto rounded"})}),Object(u.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("p",{children:"Inteligencia:"}),Object(u.jsx)("p",{children:"Fuerza:"}),Object(u.jsx)("p",{children:"Velocidad:"}),Object(u.jsx)("p",{children:"Durabilidad:"}),Object(u.jsx)("p",{children:"Poder:"}),Object(u.jsx)("p",{children:"Combate: "})]}),Object(u.jsxs)("div",{className:"fw-bold",children:[Object(u.jsx)("p",{children:"null"===e.estadisticas.intelligence?"n/a":e.estadisticas.intelligence}),Object(u.jsx)("p",{children:"null"===e.estadisticas.strength?"n/a":e.estadisticas.strength}),Object(u.jsx)("p",{children:"null"===e.estadisticas.speed?"n/a":e.estadisticas.speed}),Object(u.jsx)("p",{children:"null"===e.estadisticas.durability?"n/a":e.estadisticas.durability}),Object(u.jsx)("p",{children:"null"===e.estadisticas.power?"n/a":e.estadisticas.power}),Object(u.jsx)("p",{children:"null"===e.estadisticas.combat?"n/a":e.estadisticas.combat})]})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",className:"button btn btn-primary m-1 boton",onClick:function(){return s((function(e){return!e}))},children:"Detalles"}),Object(u.jsx)(z.a,{open:r,closeOnDocumentClick:!0,onClose:c,children:Object(u.jsx)("div",{className:"modo",children:Object(u.jsxs)("div",{className:"tarjeta-heroe__detalles bg-dark text-light rounded p-3",children:[Object(u.jsx)("h1",{children:e.nombre}),Object(u.jsxs)("p",{className:"m-2",children:["Nombre completo: ",e.biografia["full-name"]]}),Object(u.jsxs)("p",{className:"m-2",children:["Peso: ",e.apariencia.weight[1]]}),Object(u.jsxs)("p",{className:"m-2",children:["Altura: ",e.apariencia.height[1]]}),Object(u.jsxs)("p",{className:"m-2",children:["Color de ojos: ",e.apariencia["eye-color"]]}),Object(u.jsxs)("p",{className:"m-2",children:["Color de pelo: ",e.apariencia["hair-color"]]}),Object(u.jsxs)("p",{className:"m-2",children:["Lugar de Trabajo: ",e.lugarTrabajo]}),"Aliases: ",e.biografia.aliases.map((function(e){return Object(u.jsxs)("p",{className:"m-1",children:["- ",e,Object(u.jsx)("br",{})]},e)})),Object(u.jsx)("button",{onClick:c,className:"btn btn-dark boton d-block mx-auto",children:"Cerrar"})]})})})]})]})},W=function(e){var t=Object(n.useState)("success"===e.datos[0].response?e.datos[0]:null),a=Object(l.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)("success"===e.datos[1].response?e.datos[1]:null),o=Object(l.a)(c,2),i=o[0],d=o[1],b=Object(n.useState)("success"===e.datos[2].response?e.datos[2]:null),j=Object(l.a)(b,2),m=j[0],h=j[1],p=Object(n.useState)("success"===e.datos[3].response?e.datos[3]:null),x=Object(l.a)(p,2),O=x[0],g=x[1],f=Object(n.useState)("success"===e.datos[4].response?e.datos[4]:null),N=Object(l.a)(f,2),v=N[0],w=N[1],y=Object(n.useState)("success"===e.datos[5].response?e.datos[5]:null),S=Object(l.a)(y,2),k=S[0],C=S[1],B=[Q("intelligence",r,i,m,O,v,k),"Inteligencia"],_=[Q("strength",r,i,m,O,v,k),"Fuerza"],q=[Q("speed",r,i,m,O,v,k),"Velocidad"],M=[Q("durability",r,i,m,O,v,k),"Durabilidad"],T=[Q("power",r,i,m,O,v,k),"Poder"],E=[Q("combat",r,i,m,O,v,k),"Combate"],F=P(r,i,m,O,v,k)[0].toFixed(1),J=P(r,i,m,O,v,k)[1].toFixed(1),A=K(B,_,q,M,T,E),L=function(t,a){I(t,a<3?"good":"noGood",e.usuario)};return Object(u.jsxs)("div",{className:"mi-equipo__contenedor",children:[Object(u.jsxs)("h4",{className:"text-center",children:["Tu equipo es de tipo: ",Object(u.jsx)("span",{className:"fw-bolder text-primary",children:A})]}),Object(u.jsx)(D,{int:B,str:_,vel:q,dur:M,pow:T,com:E,peso:F,altura:J}),Object(u.jsxs)("div",{className:"mi-equipo__contenedor-equipo",children:[null===r?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(u.jsx)(V,{nombre:r.name,estadisticas:r.powerstats,biografia:r.biography,apariencia:r.appearance,imagen:r.image.url,lugarTrabajo:r.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(r.id,0),s(null)},children:"Quitar"})]}),null===i?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(u.jsx)(V,{nombre:i.name,estadisticas:i.powerstats,biografia:i.biography,apariencia:i.appearance,imagen:i.image.url,lugarTrabajo:i.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(i.id,1),d(null)},children:"Quitar"})]}),null===m?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-success p-2 m-2",children:[Object(u.jsx)(V,{nombre:m.name,estadisticas:m.powerstats,biografia:m.biography,apariencia:m.appearance,imagen:m.image.url,lugarTrabajo:m.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(m.id,2),h(null)},children:"Quitar"})]})]}),Object(u.jsxs)("div",{className:"mi-equipo__contenedor-equipo",children:[null===O?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(u.jsx)(V,{nombre:O.name,estadisticas:O.powerstats,biografia:O.biography,apariencia:O.appearance,imagen:O.image.url,lugarTrabajo:O.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(O.id,3),g(null)},children:"Quitar"})]}),null===v?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(u.jsx)(V,{nombre:v.name,estadisticas:v.powerstats,biografia:v.biography,apariencia:v.appearance,imagen:v.image.url,lugarTrabajo:v.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(v.id,4),w(null)},children:"Quitar"})]}),null===k?null:Object(u.jsxs)("div",{className:"mi-equipo__contenedor-tarjetas border border-3 rounded border-danger p-2 m-2",children:[Object(u.jsx)(V,{nombre:k.name,estadisticas:k.powerstats,biografia:k.biography,apariencia:k.appearance,imagen:k.image.url,lugarTrabajo:k.work.base}),Object(u.jsx)("button",{className:"btn btn-danger w-50 m-1 align-items-center",onClick:function(){L(k.id,5),C(null)},children:"Quitar"})]})]})]})},Z=function(e){var t=localStorage.getItem("".concat(e)),a=JSON.parse(t),n=[];return n.push(a.heroeBueno1,a.heroeBueno2,a.heroeBueno3,a.heroeMalo1,a.heroeMalo2,a.heroeMalo3),n},H=(a(79),function(){var e=Object(n.useContext)(h).usuario,t=Z(e),a=Object(n.useContext)(y),r=Object(n.useState)(!0),s=Object(l.a)(r,2),c=s[0],d=s[1],b=Object(n.useState)([]),j=Object(l.a)(b,2),m=j[0],p=j[1];function x(){return O.apply(this,arguments)}function O(){return O=Object(L.a)(A.a.mark((function e(){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<6)){e.next=7;break}return e.next=4,k.a.get("".concat(a,"/").concat(t[n])).then((function(e){p((function(t){return[].concat(Object(F.a)(t),[e.data])}))})).catch((function(e){console.log(e)}));case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){var e=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:d(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),localStorage.TOKEN?Object(u.jsxs)("div",{className:"mi-equipo__contenedor",children:[Object(u.jsx)(T,{}),Object(u.jsx)(o.b,{to:"busqueda",className:"btn btn-outline-secondary d-block mx-auto",style:{width:"10rem"},children:"Buscar heroes!"}),Object(u.jsx)("h1",{className:"text-center m-4",children:"\xa1Mi equipo!"}),Object(u.jsx)("h6",{className:"text-center m-4 text-dark",children:"Aqu\xed encontrar\xe1s estad\xedsticas y tu equipo. Recuerda que puedes elegir 3 super-heroes buenos y 3 malos."}),!0===c?Object(u.jsx)(_,{}):Object(u.jsx)(W,{datos:m,usuario:e})]}):Object(u.jsx)(i.a,{to:"/"})}),U=function(){return localStorage.TOKEN?Object(u.jsx)(H,{}):Object(u.jsx)(i.a,{to:"/"})};var G=function(){return Object(u.jsx)(o.a,{basename:"/super-app",children:Object(u.jsx)(w,{children:Object(u.jsx)(m,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/miEquipo",component:U}),Object(u.jsx)(i.b,{exact:!0,path:"/busqueda",component:E}),Object(u.jsx)(i.b,{path:"/",component:N})]})})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),R()}},[[80,1,2]]]);
//# sourceMappingURL=main.9115cf24.chunk.js.map