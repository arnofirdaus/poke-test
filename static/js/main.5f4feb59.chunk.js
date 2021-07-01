(this["webpackJsonppoke-test"]=this["webpackJsonppoke-test"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(20),c=n.n(s),i=(n(39),n(40),n(41),n(13)),r=n(2),l=n(1),p=function(t){var e=t.total;return Object(l.jsx)("div",{className:"page-title",children:Object(l.jsxs)("h1",{children:["Pokedex (",e,")"]})})},d=(n(43),function(t){var e=t.type;return Object(l.jsx)("div",{className:"pokemon-type bg bg--"+e,children:e})}),u=(n(44),n(32));var m=function(t){var e=t.id,n=t.name,a=t.types,o=void 0===a?[]:a;return Object(l.jsx)("div",{className:"grid-item",children:Object(l.jsx)(i.b,{to:"/pokemon/"+n,children:Object(l.jsxs)("div",{className:"pokemon-box bg-light bg-light--".concat(o[0].type.name),children:[Object(l.jsx)(u.LazyLoadImage,{className:"pokemon-box__img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+e+".png",alt:n,width:"82px",height:"82px"}),Object(l.jsxs)("p",{className:"pokemon-box__number",children:["#",e]}),Object(l.jsx)("h2",{className:"pokemon-box__name",children:n}),Object(l.jsx)("div",{className:"pokemon-box__types",children:Object(l.jsx)("div",{className:"pokemon-types",children:o.map((function(t,e){return Object(l.jsx)(d,{type:t.type.name},e)}))})})]})})})},j=n(11),b=n.n(j),g=n(14),v=n(8),h=n(23),f=n(16),_=n.n(f),k=n(17),x=Object(k.a)((function(t){return{list:[],total:0,page:0,setList:function(e){return t((function(t){return{list:[].concat(Object(h.a)(t.list),Object(h.a)(e))}}))},setTotal:function(e){return t((function(){return{total:e}}))},setPage:function(e){return t((function(){return{page:e}}))}}}));var O=function(t){var e=Object(a.useState)(!0),n=Object(v.a)(e,2),o=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(v.a)(c,2),r=i[0],l=i[1],p=x((function(t){return t.setList})),d=x((function(t){return t.setTotal})),u=x((function(t){return t.setPage})),m=x((function(t){return t.page})),j=x((function(t){return t.list})),h=x((function(t){return t.total})),f=Object(a.useCallback)(Object(g.a)(b.a.mark((function e(){var n,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s(!0),l(!1),50,n=50*(t-1),a={query:"query getPokemons {\n\t\t\t\t\tspecies: pokemon_v2_pokemonspecies(limit: ".concat(50,", offset: ").concat([n],", order_by: {id: asc}) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tpokemons: pokemon_v2_pokemons {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tspecies_aggregate: pokemon_v2_pokemonspecies_aggregate {\n\t\t\t\t\t\taggregate {\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}")},m==t){e.next=16;break}return e.next=9,_.a.post("https://beta.pokeapi.co/graphql/v1beta",a);case 9:return o=e.sent,e.next=12,u(t);case 12:return e.next=14,p(o.data.data.species);case 14:return e.next=16,d(o.data.data.species_aggregate.aggregate.count);case 16:s(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),l(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),[t]);return Object(a.useEffect)((function(){f()}),[f,t]),{loading:o,error:r,list:j,total:h}},y=Object(k.a)((function(t){return{page:1,setPage:function(){return t((function(t){return{page:t.page+1}}))}}}));var w=function(){var t=y((function(t){return t.page})),e=y((function(t){return t.setPage})),n=O(t),o=n.loading,s=n.error,c=n.list,i=n.total,r=Object(a.useRef)(null),d=Object(a.useCallback)((function(t){t[0].isIntersecting&&e()}),[]);return Object(a.useEffect)((function(){var t=new IntersectionObserver(d,{root:null,rootMargin:"100px",threshold:0});r.current&&t.observe(r.current)}),[d]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(p,{total:i}),Object(l.jsxs)("div",{className:"page-content",children:[Object(l.jsx)("div",{className:"grid",children:c.map((function(t){return Object(l.jsx)(m,{id:t.id,name:t.name,types:t.pokemons[0].types},t.id)}))}),o&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(l.jsx)("p",{className:"loading",children:"Error!"})]}),Object(l.jsx)("div",{ref:r})]})},N=(n(72),function(t){var e=t.label,n=t.value,a=n/255*100;return Object(l.jsxs)("div",{className:"statbar",children:[Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{className:"statbar__label",children:e}),Object(l.jsx)("div",{className:"statbar__value",children:n})]}),Object(l.jsx)("div",{className:"statbar__bar",children:Object(l.jsx)("div",{className:"statbar__bar__value",style:{width:a+"%"}})})]})});var P=function(t){var e=Object(a.useState)(!0),n=Object(v.a)(e,2),o=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(v.a)(c,2),r=i[0],l=i[1],p=Object(a.useState)({}),d=Object(v.a)(p,2),u=d[0],m=d[1],j=Object(a.useState)([]),h=Object(v.a)(j,2),f=h[0],k=h[1],x=Object(a.useState)([]),O=Object(v.a)(x,2),y=O[0],w=O[1],N=Object(a.useCallback)(Object(g.a)(b.a.mark((function e(){var n,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),l(!1),n={query:' query getPokemon {\n\t\t\t\t\tspecies: pokemon_v2_pokemonspecies(where: {name: { _eq: "'.concat(t,'" }} limit: 1) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tgender_rate\n\t\t\t\t\t\thatch_counter\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription: pokemon_v2_pokemonspeciesflavortexts(limit: 1 where: {pokemon_v2_language: {name: {_eq: "en"}}}) {\n\t\t\t\t\t\t\tflavor_text\n\t\t\t\t\t\t}\n\t\t\t\t\t\tevolutions: pokemon_v2_evolutionchain {\n\t\t\t\t\t\t\tspecies: pokemon_v2_pokemonspecies(order_by: {order: asc}) {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tevolves_from_species_id\n\t\t\t\t\t\t\t\tevolutions: pokemon_v2_pokemonevolutions {\n\t\t\t\t\t\t\t\t\tmin_level\n\t\t\t\t\t\t\t\t\tmin_affection\n\t\t\t\t\t\t\t\t\tmin_beauty\n\t\t\t\t\t\t\t\t\tmin_happiness\n\t\t\t\t\t\t\t\t\tgender_id\n\t\t\t\t\t\t\t\t\ttime_of_day\n\t\t\t\t\t\t\t\t\tmove: pokemon_v2_move {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tby_held_item: pokemonV2ItemByHeldItemId {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\titem: pokemon_v2_item {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tevolution_trigger: pokemon_v2_evolutiontrigger {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tlocation: pokemon_v2_location {\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tegg_groups: pokemon_v2_pokemonegggroups {\n\t\t\t\t\t\t\tgroup: pokemon_v2_egggroup {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tpokemons: pokemon_v2_pokemons {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\tweight\n\t\t\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tabilities: pokemon_v2_pokemonabilities {\n\t\t\t\t\t\t\t\tability: pokemon_v2_ability {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tstats: pokemon_v2_pokemonstats {\n\t\t\t\t\t\t\t\tbase_stat\n\t\t\t\t\t\t\t\tstat: pokemon_v2_stat {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t')},e.next=6,_.a.post("https://beta.pokeapi.co/graphql/v1beta",n);case 6:return a=e.sent,o=a.data.data.species[0],e.next=10,m({description:o.description[0].flavor_text,id:o.id});case 10:return e.next=12,w(o.pokemons[0].types);case 12:return e.next=14,k(o.pokemons[0].stats);case 14:s(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),l(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),[]);return Object(a.useEffect)((function(){N()}),[N]),{loading:o,error:r,description:u,stats:f,types:y}};var S=function(t){var e,n=t.match.params.name,o=P(n),s=o.loading,c=o.description,i=o.stats,r=o.types;return Object(a.useEffect)((function(){console.log(n)}),[]),Object(l.jsx)("div",{className:"page-detail bg-light bg-light--".concat(null===(e=r[0])||void 0===e?void 0:e.type.name),children:s?Object(l.jsx)("p",{className:"loading",children:"Loading..."}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"page-detail__header",children:[Object(l.jsx)("div",{className:"header-button",onClick:function(){t.history.goBack()},children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-left",children:[Object(l.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),Object(l.jsx)("polyline",{points:"12 19 5 12 12 5"})]})}),Object(l.jsxs)("div",{className:"header-title",children:[Object(l.jsxs)("div",{className:"page-detail__subtitle",children:["#",c.id]}),Object(l.jsx)("div",{className:"page-detail__title",children:n})]})]}),Object(l.jsxs)("div",{className:"page-detail__img",children:[Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(c.id,".png")}),Object(l.jsx)("div",{className:"page-detail__type",children:r.map((function(t,e){return Object(l.jsx)(d,{type:t.type.name},e)}))})]}),Object(l.jsx)("div",{className:"page-detail__panel",children:Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)("div",{className:"page-detail__description",children:c.description}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"page-detail__stats",children:i.map((function(t,e){return Object(l.jsx)(N,{label:t.stat.name,value:t.base_stat},e)}))})]})})]})})},L=n(34);var I=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(l.jsx)(r.a,{exact:!0,path:"/pokemon/:name",component:S})]}),Object(l.jsx)(L.Offline,{children:Object(l.jsx)("div",{className:"page",children:Object(l.jsx)("div",{className:"offline-info",children:"Anda sedang offline"})})})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),s(t),c(t)}))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/poke-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/poke-test","/service-worker.js");W?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):q(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(e,t)}))}}(),C()}},[[73,1,2]]]);
//# sourceMappingURL=main.5f4feb59.chunk.js.map