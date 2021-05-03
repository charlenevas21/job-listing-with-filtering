(this["webpackJsonpstatic-job-listings-master"]=this["webpackJsonpstatic-job-listings-master"]||[]).push([[0],{14:function(e,t,o){"use strict";o.r(t);var a=o(1),l=o.n(a),n=o(7),s=o.n(n),r=o(2),c=o(6),i=o(8),d=o(0),u=function(e){var t=e.job,o=e.handleTagClick,a=[t.role,t.level];return t.languages&&a.push.apply(a,Object(r.a)(t.languages)),t.tools&&a.push.apply(a,Object(r.a)(t.tools)),Object(d.jsxs)("div",{className:"bg-white shadow-md my-16 mx-4 p-6 rounded sm:my-8 ".concat(t.featured&&"border-l-8 border-blue-900"," sm:flex"),children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"w-16 h-16 -mt-14 sm:w-32 sm:h-32 sm:m-0 sm:mr-6",src:t.logo,alt:t.company})}),Object(d.jsxs)("div",{className:"pb-4 pt-2 border-b-2 sm:border-0 sm:flex sm:flex-col sm:justify-between",children:[Object(d.jsxs)("h3",{className:"text-blue-900 text-lg font-bold my-1",children:[t.company,t.new&&Object(d.jsx)("span",{className:"bg-blue-light font-bold text-white ml-4 rounded-full text-sm py-1 px-2",children:"NEW!"}),t.featured&&Object(d.jsx)("span",{className:"bg-black font-bold text-white ml-2 rounded-full text-sm py-1 px-2",children:"FEATURED"})]}),Object(d.jsx)("h2",{className:"font-bold text-xl my-2 sm:text-2xl",children:t.position}),Object(d.jsxs)("p",{className:"text-gray-600 my-1",children:[t.postedAt," \xb7 ",t.contract," \xb7 ",t.location]})]}),Object(d.jsx)("div",{className:"flex-wrap flex sm:ml-auto sm:items-center",children:a?a.map((function(e){return Object(d.jsx)("span",{onClick:function(){return o(e)},className:"py-1 mt-4 px-2 bg-blue-50 text-blue-900 font-bold text-base mr-2 rounded cursor-pointer sm:mt-0",children:e},e)})):""})]})};var m=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),o=t[0],l=t[1],n=Object(a.useState)([]),s=Object(c.a)(n,2),m=s[0],p=s[1];Object(a.useEffect)((function(){l(i)}),[]);var g=function(e){m.includes(e)||p([].concat(Object(r.a)(m),[e]))},b=o.filter((function(e){var t=e.role,o=e.level,a=e.tools,l=e.languages;if(0===m.length)return!0;var n=[t,o];return l&&n.push.apply(n,Object(r.a)(l)),a&&n.push.apply(n,Object(r.a)(a)),n.some((function(e){return m.includes(e)}))}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"bg-blue-100 relative",children:[Object(d.jsx)("img",{src:"./images/jobfinder-header.jpg",alt:"",className:"w-full"}),Object(d.jsx)("h1",{className:"font-bold text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-5xl",children:"JobFinder"})]}),m.length>0&&Object(d.jsx)("div",{className:"lg:container md:mx-auto",children:Object(d.jsxs)("div",{className:"bg-white shadow-md pt-6 pb-0 px-6 mx-4 mx-4 mb-12 -m-6 rounded z-20 relative flex flex-wrap",children:[m.map((function(e){return Object(d.jsx)("div",{className:"mb-5 mr-5",children:Object(d.jsxs)("div",{className:"flex flex-wrap",children:[Object(d.jsx)("span",{className:"bg-blue-50 text-blue-900 px-2 font-bold text-base rounded",children:e}),Object(d.jsx)("span",{onClick:function(){return function(e){p(m.filter((function(t){return t!==e})))}(e)},className:"bg-blue-900 text-xl font-bold text-white rounded-r px-2 cursor-pointer hover:bg-black",children:"\xd7"})]})},e)})),Object(d.jsx)("button",{onClick:function(){p([])},className:"font-bold text-gray-700 ml-auto mb-5 mr-5 ",children:"Clear"})]})}),Object(d.jsx)("div",{className:"lg:container md:mx-auto",children:0===o.length?Object(d.jsx)("p",{children:"There are no Jobs"}):b.map((function(e){return Object(d.jsx)(u,{job:e,handleTagClick:g},e.id)}))})]})};s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.a3e771d8.chunk.js.map