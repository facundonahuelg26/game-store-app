"use strict";(self.webpackChunkgame_store_app=self.webpackChunkgame_store_app||[]).push([[905],{4391:function(e,t,r){r.r(t);var a=r(5861),n=r(885),i=r(7757),o=r.n(i),s=r(2791),c=r(5705),d=r(8016),u=r(330),l=r(2292),h=r(7131),p=r(6030),m=r(6871),f=r(8414),x=r(3118),y=r(6284),g=r(8257),v=r(184);t.default=function(){var e=(0,p.v9)((function(e){return e.login})).userData.data.userId,t=(0,p.v9)((function(e){return e.shipping})).shippingData,r=(0,g.dO)(),i=s.useState(!1),b=(0,n.Z)(i,2),_=b[0],j=b[1],q=(0,x.c)(),S=q.textError,Z=q.setTextError,E=s.useState([]),T=(0,n.Z)(E,2),k=T[0],C=T[1],D=s.useState([]),L=(0,n.Z)(D,2),w=L[0],A=L[1],I=(0,m.UO)().id,$=(0,m.s0)();return s.useEffect((function(){localStorage.setItem("shipping",JSON.stringify(t))}),[t]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(d.W2,{children:[(0,v.jsxs)(d.im,{marginTop:"150px",children:[(0,v.jsx)(f.Ee,{title:"Datos de envio",route:l._.home,myText:"Ir al Inicio",condition:_}),(0,v.jsx)(c.J9,{initialValues:{address:t.result.address,height:t.result.height,state:t.result.state,city:t.result.city,areacode:t.result.areacode,phone:t.result.phone},validationSchema:u.K,onSubmit:function(){var r=(0,a.Z)(o().mark((function r(a,n){var i,s,c,d,u,p,m;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=n.resetForm,s=k.filter((function(e){return e.id===a.state&&e})),c=s.length>0&&s.reduce((function(e){return e})),d=w.filter((function(e){return e.id===a.city&&e})),u=d.length>0&&d.reduce((function(e){return e})),i(),r.prev=6,p={address:a.address,height:a.height,state:c.nombre||t.result.state,city:u.nombre||t.result.city,areacode:a.areacode,phone:a.phone,userData:e},r.next=10,(0,h.AR)(p,"user-info/".concat(e));case 10:if(200!==(m=r.sent).statuscode){r.next=17;break}console.log("success update",m),j(!0),$(l._.account),r.next=19;break;case 17:throw j(!1),m;case 19:r.next=25;break;case 21:r.prev=21,r.t0=r.catch(6),console.log(r.t0),Z(r.t0);case 25:case"end":return r.stop()}}),r,null,[[6,21]])})));return function(e,t){return r.apply(this,arguments)}}(),children:function(e){var t=e.handleSubmit;return(0,v.jsxs)(c.l0,{onSubmit:t,onKeyDown:r,children:[":1"===I&&y.Bl.map((function(e){return(0,v.jsx)(f.xT,{item:e,condition:_},e.id)})),":2"===I&&(0,v.jsx)(f.mg,{setDataState:C,dataState:k,route:"provincias?campos=id,nombre",dataCity:w,setDataCity:A}),":3"===I&&y.mh.map((function(e){return(0,v.jsx)(f.xT,{item:e,condition:_},e.id)})),(0,v.jsx)(f.N5,{condition:_,myText:"Siguiente"})]})}}),(0,v.jsx)(f.X5,{condition:_,myText:"Volver a mi cuenta",route:l._.account})]}),""!==S&&(0,v.jsx)(d.D1,{children:S})]})})}},6284:function(e,t,r){r.d(t,{Bl:function(){return n},l:function(){return a},mh:function(){return i}});var a=[{id:1,name:"address",type:"text",placeholder:"Calle"},{id:2,name:"height",type:"text",placeholder:"Altura"},{id:3,name:"areacode",type:"text",placeholder:"C\xf3digo de \xc1rea"},{id:4,name:"phone",type:"text",placeholder:"T\xe9lefono"}],n=[{id:1,name:"address",type:"text",placeholder:"Calle"},{id:2,name:"height",type:"text",placeholder:"Altura"}],i=[{id:3,name:"areacode",type:"text",placeholder:"C\xf3digo de \xc1rea"},{id:4,name:"phone",type:"text",placeholder:"T\xe9lefono"}]},330:function(e,t,r){r.d(t,{K:function(){return n}});var a=r(4386),n=a.Ry().shape({address:a.Z_().required("La calle es requerida").min(3,"La calle debe tener mas de 2 caracteres").max(16,"La calle debe tener menos de 16 caracteres").matches(/^[a-zA-Z\xc0-\xff\s]{1,40}$/," Letras y espacios, puede llevar acentos").trim(),height:a.Z_().required("La altura es requerida").matches(/^\d{4,6}$/,"Entre 4 y 6 n\xfameros").trim(),state:a.Z_().required("La provincia es requerida").trim(),city:a.Z_().required("La ciudad es requerida").trim(),areacode:a.Z_().required("El c\xf3digo de \xe1rea es requerido").matches(/^\d{4,6}$/,"Entre 4 y 6 n\xfameros").trim(),phone:a.Z_().required("El tel\xe9fono es requerido").matches(/^\d{6,14}$/,"Entre 6 y 14 n\xfameros").trim()})}}]);
//# sourceMappingURL=905.403a0454.chunk.js.map