(window["webpackJsonpmini-hangman"]=window["webpackJsonpmini-hangman"]||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(1),c=a(2),i=a(3),s=a(6),o=a(4),l=a(5),p=a(0),m=a.n(p),u=a(9),d=a.n(u),_=(a(16),["rule","left","css","and","comb","this","get","html","api","from"]);function h(e){var t,a=e.length;return e[(t=a,Math.floor(Math.random()*t))]}var v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"isActive",value:function(e){var t="";return this.props.tries>=e&&(t="hangman__part--active"),t}},{key:"render",value:function(){var e=this.props,t=e.rope,a=e.tries;return m.a.createElement("div",{className:"app__hangman hangman ".concat(t?"hangman--with-rope":"")},t&&m.a.createElement("div",{className:"hangman__rope ".concat(this.isActive(1))}),m.a.createElement("div",{className:"hangman__body ".concat(this.isActive(2))},m.a.createElement("div",{className:"hangman__head ".concat(this.isActive(2))},m.a.createElement("div",{className:"hangman__face ".concat(a>0?"hangman__face--sad":"")})),m.a.createElement("div",{className:"hangman__leg hangman__leg--left ".concat(this.isActive(3))}),m.a.createElement("div",{className:"hangman__leg hangman__leg--right ".concat(this.isActive(4))})))}}]),t}(m.a.Component),g=function(e){var t=e.hiddenWord;return m.a.createElement("ol",{className:"app__word"},t.map(function(e,t){return m.a.createElement("li",{key:t,className:"app__letter ".concat(e?"app__letter--ok":"")},e)}))},f=function(e){var t=e.getUserKey,a=e.handleFieldClick,n=e.userKey,r=e.gameOver;return m.a.createElement("div",{className:"app__user"},m.a.createElement("div",{className:"app__user-field"},m.a.createElement("input",{className:"app__user-letter",type:"text",onChange:t,onClick:a,maxLength:"1",value:n,disabled:r})))},y=function(e){var t=e.page,a=e.index,n=e.tries,r=e.hiddenWord,c=e.getUserKey,i=e.handleFieldClick,s=e.userKey,o=e.gameOver;return m.a.createElement("div",{className:"app__screen app__screen--game ".concat(t===a?"app__screen--active":"")},m.a.createElement(v,{rope:!0,tries:n}),m.a.createElement("div",{className:"app__ui"},m.a.createElement(g,{hiddenWord:r}),m.a.createElement(f,{getUserKey:c,handleFieldClick:i,userKey:s,gameOver:o})))},b=function(e){var t=e.page,a=e.index,n=e.action;return m.a.createElement("div",{className:"app__screen app__screen--splash ".concat(t===a?"app__screen--active":"")},m.a.createElement("h1",{className:"app__title"},"Mini Hangman"),m.a.createElement("div",{className:"app__version"},"v0.9.0"),m.a.createElement("button",{className:"app__button app__play",onClick:function(){n(1)}},"Play"))},E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.index,n=e.action,r=e.word;return m.a.createElement("div",{className:"app__screen app__screen--ok ".concat(t===a?"app__screen--active":"")},m.a.createElement(v,{rope:!0,tries:4}),m.a.createElement("div",{className:"app__result"},"Word: ",r.join("")),m.a.createElement("button",{className:"app__button app__play",onClick:function(){n(1)},"data-next":1},"Play Again"))}}]),t}(m.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.index,n=e.action,r=e.word;return m.a.createElement("div",{className:"app__screen app__screen--ko ".concat(t===a?"app__screen--active":"")},m.a.createElement(v,{rope:!1,tries:4}),m.a.createElement("h2",{className:"app__screen-title"},"Loser!"),m.a.createElement("div",{className:"app__result"},"Word: ",r.join("")),m.a.createElement("button",{className:"app__button app__play",onClick:function(){n(1)},"data-next":1},"Play Again"))}}]),t}(m.a.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={page:0,totalTries:4,lettersLeft:0,tries:0,word:[],hiddenWord:[],userKey:"",userHistory:[],gameOver:!1},a.getUserKey=a.getUserKey.bind(Object(r.a)(a)),a.gotoScreen=a.gotoScreen.bind(Object(r.a)(a)),a.resetGame=a.resetGame.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.startGame()}},{key:"resetGame",value:function(){var e=this;this.setState({page:1,tries:0,lettersLeft:0,userKey:"",userHistory:[],gameOver:!1},function(){e.startGame()})}},{key:"gotoScreen",value:function(e){this.setState({page:e})}},{key:"startGame",value:function(){var e=h(_).split(""),t=e.map(function(e){return""}),a=e.length;this.setState({word:e,hiddenWord:t,lettersLeft:a})}},{key:"getUserKey",value:function(e){var t=this,a=e.currentTarget.value.toLowerCase();a&&this.setState(function(e){var r=e.hiddenWord,c=e.userHistory,i=e.word,s=e.totalTries,o=e.tries,l=e.gameOver,p=e.lettersLeft,m=Object(n.a)(c),u=Object(n.a)(r);if(i.includes(a))for(var d=0;d<i.length;d++)i[d]===a&&(u[d]=a,p--);else o<s&&++o===s&&(l=!0);return m.push(a),l&&setTimeout(function(){t.setState({page:3})},1e3),0===p&&setTimeout(function(){t.setState({page:2})},1e3),{tries:o,hiddenWord:u,userKey:a,userHistory:m,gameOver:l,lettersLeft:p}},function(){setTimeout(function(){t.setState({userKey:""})},500)})}},{key:"emptyField",value:function(e){e.currentTarget.value=""}},{key:"render",value:function(){var e=this.state,t=e.tries,a=e.userKey,n=e.hiddenWord,r=e.page,c=e.gameOver,i=e.word;return m.a.createElement(m.a.Fragment,null,m.a.createElement(b,{page:r,index:0,action:this.gotoScreen}),m.a.createElement(y,{page:r,index:1,tries:t,hiddenWord:n,userKey:a,handleFieldClick:this.emptyField,getUserKey:this.getUserKey,gameOver:c}),m.a.createElement(E,{page:r,index:2,word:i,action:this.resetGame}),m.a.createElement(O,{page:r,index:3,word:i,action:this.resetGame}))}}]),t}(m.a.Component);d.a.render(m.a.createElement(j,null),document.getElementById("area"))},16:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.434b1a5a.chunk.js.map