(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(4),o=a(7),r=a(6),c=a(1),l=a(0),d=function(e){var t=e.defaultList;return Object(l.jsx)("ul",{className:"todo__list",children:t.map((function(e){var t=e.person.name,a=e.id,n=e.userId,i=e.completed;return Object(l.jsxs)("li",{className:"todo__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"todo__title",children:e.title}),Object(l.jsxs)("div",{className:"user__info",children:[Object(l.jsx)("p",{children:"name: ".concat(t)}),Object(l.jsx)("p",{children:"userID: ".concat(n)}),Object(l.jsx)("p",{children:"ID: ".concat(a)})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:e.completed?"completed!":"not completed..."}),Object(l.jsx)("input",{type:"checkbox",id:"completed",name:"completed",checked:i})]})]},e.id)}))})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],u=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],h=(a(14),Object(r.a)(u).map((function(e){var t=m.find((function(t){return t.id===e.userId}))||null;if(null===t)throw new Error("choose someone");return Object(o.a)(Object(o.a)({},e),{},{person:t})}))),b=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),u=o[0],b=o[1],p=Object(c.useState)(h),j=Object(s.a)(p,2),g=j[0],y=j[1],f=function(){var e=m.find((function(e){return a.includes(e.name)}))||null;if(""===a||""===u)alert(u.length?"Please, choose a user":'Please, add the title"');else{if(null===e)throw new Error;var t={person:e,id:g.length+1,userId:e.id,title:u,completed:!1};b(""),y([].concat(Object(r.a)(g),[t]))}e=null};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"",className:"form",onSubmit:f,children:[Object(l.jsx)("div",{className:"input",children:Object(l.jsxs)("select",{name:"users names",className:"form__selector",value:a,onChange:function(e){n(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Choose user"}),m.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]})}),!a&&Object(l.jsx)("span",{children:"Please choose a user"}),Object(l.jsx)("input",{type:"text",className:"form__input",placeholder:"What to do?",value:u,onChange:function(e){b(e.target.value)}}),!u&&Object(l.jsx)("span",{children:"Please enter the title"}),Object(l.jsx)("button",{type:"button",className:"form__button",onClick:f,children:"add"})]}),Object(l.jsx)(d,{defaultList:g})]})};i.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f658aa42.chunk.js.map