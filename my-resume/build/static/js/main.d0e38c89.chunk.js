(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),l=a.n(s),i=(a(22),a(12)),c=a(13),o=a(16),m=a(15),u=(a(23),a(24),a(14)),h=a.n(u);var p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={resume:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return h.a.get("https://einthiri-resume.herokuapp.com/resume").then((function(t){e.setState({resume:t.data})})),r.a.createElement("div",{className:"container"},null==this.state.resume?r.a.createElement("h4",null," Resume is loading "):r.a.createElement("div",null,r.a.createElement("h2",null," ",this.state.resume.name," "),r.a.createElement("h4",null," Age: ",this.state.resume.age," "),r.a.createElement("h4",null," Gpa: ",this.state.resume.gpa," "),r.a.createElement("h4",{className:"bg-warning"}," Hobbies "),r.a.createElement("ul",{className:"list-group"},this.state.resume.hobbies.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("h4",null," Courses "),r.a.createElement("ul",{className:"list-group"},this.state.resume.courses.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("h4",null," Awards "),r.a.createElement("ul",{className:"list-group"},this.state.resume.awards.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}))),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"Profile.jpg",className:"profile-image",alt:"Profile"}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d0e38c89.chunk.js.map