(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{22:function(e,t,n){e.exports=n(47)},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(19),c=n.n(r),u=(n(27),n(6)),l=n(7),i=n(9),s=n(8),m=n(49),h=n(50),f=n(51),d=(n(28),n(20)),g=n.n(d),b=(n(46),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).getNewQuote=function(){o.getQuote()},o.state={quote:"",author:""},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;g.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){var n=t.data.quotes,o=n[Math.floor(Math.random()*n.length)];e.setState({quote:o.quote,author:o.author})}))}},{key:"render",value:function(){var e=this.state,t=e.quote,n=e.author;return a.a.createElement(m.a,null,a.a.createElement(h.a,{className:"shadow bg-white rounded card"},a.a.createElement(h.a.Body,null,a.a.createElement("blockquote",{className:"blockquote mb-0"},t,a.a.createElement("footer",{className:"blockquote-footer"},a.a.createElement("cite",null,n)))),a.a.createElement(h.a.Body,null,a.a.createElement("a",{href:'https://twitter.com/intent/tweet?text= "'.concat(t,'" -').concat(n),"data-toggle":"share on twitter",rel:"noopener noreferrer",target:"_blank",id:"tweet-quote"},a.a.createElement("i",{className:"fa fa-twitter twitter-icon fa-2x m-2"})),a.a.createElement(f.a,{variant:"outline-primary",className:"float-right button",onClick:this.getNewQuote},"New Quote"))))}}]),n}(o.Component)),w=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(u.a)(this,n),o=t.call(this,e),console.log("constructor runs"),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount runs")}},{key:"render",value:function(){return console.log("render method runs"),a.a.createElement("div",null,a.a.createElement(b,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9212e28e.chunk.js.map