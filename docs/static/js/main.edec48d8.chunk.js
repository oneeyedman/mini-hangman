(window["webpackJsonpmini-hangman"]=window["webpackJsonpmini-hangman"]||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(1),i=a(2),s=a(3),c=a(7),o=a(4),l=a(6),m=a(0),u=a.n(m),h=a(9),d=a.n(h),p=(a(16),["rule","left","css","and","comb","this","get","html","api","from"]);function v(e){var t,a=e.length;return e[(t=a,Math.floor(Math.random()*t))]}var g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"isActive",value:function(e){var t="";return this.props.tries>=e&&(t="hangman__part--active"),t}},{key:"render",value:function(){var e=this.props,t=e.rope,a=e.tries;return u.a.createElement("div",{className:"app__hangman hangman ".concat(t?"hangman--with-rope":"")},t&&u.a.createElement("div",{className:"hangman__rope ".concat(this.isActive(1))}),u.a.createElement("div",{className:"hangman__body ".concat(this.isActive(2))},u.a.createElement("div",{className:"hangman__head ".concat(this.isActive(2))},u.a.createElement("div",{className:"hangman__face ".concat(a>0?"hangman__face--sad":"")})),u.a.createElement("div",{className:"hangman__leg hangman__leg--left ".concat(this.isActive(3))}),u.a.createElement("div",{className:"hangman__leg hangman__leg--right ".concat(this.isActive(4))})))}}]),t}(u.a.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={totalTries:4,tries:0,word:[],hiddenWord:[],userKey:"",userHistory:[],gameOver:!1},a.getUserKey=a.getUserKey.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.startGame()}},{key:"startGame",value:function(){var e=v(p).split(""),t=e.map(function(e){return""});this.setState({word:e,hiddenWord:t})}},{key:"getUserKey",value:function(e){var t=this,a=e.currentTarget.value.toLowerCase();a&&this.setState(function(e){var t=e.hiddenWord,r=e.userHistory,i=e.word,s=e.totalTries,c=e.tries,o=e.gameOver,l=Object(n.a)(r),m=Object(n.a)(t);if(i.includes(a))for(var u=0;u<i.length;u++)i[u]===a&&(m[u]=a);else c<s&&++c===s&&(o=!0);return l.push(a),{tries:c,hiddenWord:m,userKey:a,userHistory:l,gameOver:o}},function(){setTimeout(function(){t.setState({userKey:""})},500)})}},{key:"emptyField",value:function(e){e.currentTarget.value=""}},{key:"render",value:function(){var e=this.state,t=e.tries,a=e.userKey;return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,{rope:!0,tries:t}),u.a.createElement("div",{className:"app__ui"},u.a.createElement("div",{className:"app__word"},this.state.hiddenWord.map(function(e,t){return u.a.createElement("div",{key:t,className:"app__letter ".concat(e?"app__letter--ok":"")},e)})),u.a.createElement("div",{className:"app__user"},u.a.createElement("div",{className:"app__user-field"},u.a.createElement("input",{className:"app__user-letter",type:"text",onChange:this.getUserKey,onClick:this.emptyField,maxLength:"1",value:a})))))}}]),t}(u.a.Component);d.a.render(u.a.createElement(_,null),document.getElementById("area"))},16:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.edec48d8.chunk.js.map