(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1848:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var r=a(7294),l=(a(9008),a(8492)),s=a(1664),o=a(1565),n=r.createElement;function c(){return n("div",{className:"bg-[#F1F1F1] -mt-40 dark:bg-gray-900"},n("div",{className:"max-w-6xl mx-auto"},n("header",{className:"flex flex-col md:flex-row justify-between items-center pt-12 md:pt-40 mx-10 md:my-20 lg:my-0"},n("h1",{className:"text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center"},"Favorite Projects"),n(s.default,{href:"/projects"},n("a",{className:"mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"},n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up-right-square",stroke:"4",strokeWidth:"4",viewBox:"0 0 16 16"},n("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"})),n("p",null,"View all")))),n("div",{className:"grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40"},n("a",{href:o.Z.projects[0].link,className:"w-full block col-span-3 shadow-2xl max-h-[600px] overflow-hidden"},n("div",{className:"relative overflow-hidden"},n("img",{src:o.Z.projects[0].imgUrl,alt:"portfolio project screenshot",className:"transform hover:scale-125 transition duration-2000 ease-out"}),n("h1",{className:"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2"},o.Z.projects[0].title),n("h1",{className:"absolute bottom-10 left-10 text-gray-50 font-bold text-xl"},"01"))),n("a",{href:o.Z.projects[1].link,className:"w-full block col-span-3 sm:col-span-2 sm:row-span-1 object-cover"},n("div",{className:"relative overflow-hidden shadow-2xl"},n("img",{src:o.Z.projects[1].imgUrl,alt:"portfolio project screenshot",className:"transform hover:scale-125 transition duration-2000 ease-out"}),n("h1",{className:"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2"},o.Z.projects[1].title),n("h1",{className:"absolute bottom-10 left-10 text-gray-50 font-bold text-xl"},"02"))),n("a",{href:o.Z.projects[2].link,className:"w-full block col-span-3 sm:col-span-1 object-cover "},n("div",{className:"relative overflow-hidden shadow-2xl"},n("img",{src:o.Z.projects[2].imgUrl,alt:"portfolio project screenshot",className:"transform hover:scale-125 transition duration-2000 ease-out"}),n("h1",{className:"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2"},o.Z.projects[2].title),n("h1",{className:"absolute bottom-10 left-10 text-gray-50 font-bold text-xl"},"03"))))))}var i=a(7757),m=a.n(i),d=a(2137),u=a(9669),x=a.n(u),p=function(){var e=(0,d.Z)(m().mark((function e(t,a){var r,l,s,o,n,c,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=t.githubUsername,!a){e.next=11;break}return e.next=5,x().get("https://api.github.com/users/".concat(r,"/repos?sort=created-date-asc"),{headers:{Authorization:"token ".concat(a)}});case 5:return l=e.sent,s=l.data,o=s.splice(0,6),e.abrupt("return",o);case 11:return e.next=13,x().get("https://api.github.com/users/".concat(r,"/repos?sort=created-date-asc"));case 13:return n=e.sent,c=n.data,i=c.splice(0,6),e.abrupt("return",i);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,a){return e.apply(this,arguments)}}(),f=r.createElement;function g(e){e.repositories;var t=(0,r.useState)([]),a=t[0],l=t[1];return(0,r.useEffect)((0,d.Z)(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(o.Z);case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)}))),[]),f("section",{className:"bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40"},f("div",{className:"max-w-6xl mx-auto"},f("div",{className:"flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10"},f("h1",{className:"text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center lg:text-left"},"Latest Code"),f("a",{href:"https://github.com/".concat(o.Z.githubUsername),className:"mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"},f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up-right-square",stroke:"4",strokeWidth:"4",viewBox:"0 0 16 16"},f("path",{fillRule:"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"})),f("p",null,"View GitHub")))),f("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20"},a&&a.map((function(e,t){return f(h,{latestRepo:e,key:"idx"})}))))}var h=function(e){var t=e.latestRepo,a=t.name.replace(/-/g," ");return f("div",{className:"github-repo"},f("h1",{className:"font-semibold text-xl dark:text-gray-200 text-gray-700"},a.replace(/\b\S/g,(function(e){return e.toUpperCase()}))),f("p",{className:"text-base font-normal my-4 text-gray-500"},t.description),f("a",{href:t.clone_url,className:"font-semibold group flex flex-row space-x-2 w-full items-center"},f("p",null,"View Repository "),f("div",{className:"transform group-hover:translate-x-2 transition duration-300"},"\u2192")))},w=a(350),b=(r.createElement,r.createElement);function v(){return b("div",{className:"flex flex-col md:flex-row justify-center items-start overflow-hidden pb-56"},b("div",{className:"w-full md:w-1/2 mx-auto text-center md:text-left my-auto"},b("p",{className:"text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200"},b("span",null,"Hi, I'm "),b(w.c,{type:"highlight",show:!0,color:"#"+((1<<24)*Math.random()|0).toString(16).padStart(6,"0")},b("span",null," Eric."))),b(w.m,{show:!0}),b("p",{className:"text-lg md:text-xl text-gray-700 dark:text-gray-200 pt-12"},o.Z.homepageDescription)),b("div",{className:"hidden lg:block relative w-full md:w-1/2 md:-mr-40"},b("div",{className:"w-1/2"},b("img",{src:o.Z.avatarUrl,alt:"avatar",className:" shadow rounded-full "}),b("div",{className:"flex flex-row justify-between mt-4"},b("div",{className:"flex flex-row space-x-4"})))))}var N=r.createElement;function y(e){e.repositories;return N(l.Z,{title:"Eric Bello - Developer, Engineer, Programmer, and Adventurer",description:"Portfolio built using Next.js and TailwindCSS."},N(v,null),N(c,null),N(g,null))}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1848)}])}},function(e){e.O(0,[523,290,492,888,774,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);