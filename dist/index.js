function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},o.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var i,p=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseurl||"https://jsonplaceholder.typicode.com"}return t.prototype.invoke=function(t,r){var n=""+this.baseUrl+t,i=o({},r,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return e.default(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}(),s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getPostById=function(t){return this.invoke("/posts/"+t)},o.getPosts=function(){return this.invoke("/posts")},o.createPost=function(t){return this.invoke("/posts",{method:"POST",body:JSON.stringify(t)})},e}(p),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(p);i=c,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(i.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})}),module.exports=c;
