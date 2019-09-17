(window["webpackJsonpcurrency-exchange-rates"]=window["webpackJsonpcurrency-exchange-rates"]||[]).push([[0],{114:function(e,t,a){e.exports=a(262)},119:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(31),c=a.n(r),i=(a(119),a(6)),o=a(7),s=a(8),u=a(9),d=a(10),h=a(263),m=a(279),f=a(101),p=a(277),y=a(280),E=a(94),g=a.n(E),v=a(98),S=a.n(v),R=a(99),D=(a(182),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchRates=function(){a.setState({loading:!0});var e=a.state,t=e.selected,n=e.dateFilter,l="https://api.exchangeratesapi.io/latest?base=".concat(t);if(null!=n){var r=n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+n.getDate();l="https://api.exchangeratesapi.io/".concat(r,"?base=").concat(t)}S.a.get(l).then((function(e){a.setState({data:e.data})})).catch((function(e){console.log(e)})).finally((function(){a.setState({loading:!1})}))},a.handleCurrencySelect=function(e){a.setState({selected:e},(function(){a.fetchRates()}))},a.handleDateFilter=function(e){a.setState({dateFilter:e},(function(){a.fetchRates()}))},a.clearFilter=function(){a.setState({dateFilter:null},(function(){a.fetchRates()}))},a.state={data:{},loading:!1,selected:"USD",dateFilter:null,yesterday:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;e.setDate(e.getDate()-1),this.setState({yesterday:e}),this.fetchRates()}},{key:"isEmpty",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.loading,r=t.dateFilter,c=t.yesterday;return l.a.createElement("div",{className:"container"},n&&l.a.createElement("div",{className:"spinner"},l.a.createElement(h.a,null)),!n&&l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(m.a,{title:"Select Currency",options:R.all.map((function(e){return{label:e,value:e}})),selected:this.state.selected,closeOnSelect:!0,onSelect:function(t){return e.handleCurrencySelect(t.value)}},l.a.createElement(f.a,null,this.state.selected||"Select name...")),null!=r&&l.a.createElement(f.a,{marginLeft:4,appearance:"primary",intent:"warning",iconBefore:"filter-remove",onClick:function(){return e.clearFilter()}},"Reset Filter")),l.a.createElement("div",null,l.a.createElement(g.a,{selected:r,onChange:this.handleDateFilter,maxDate:c,placeholderText:"Date Filter"})),l.a.createElement(p.a,{is:"h3",className:"heading"},"Available Results"),l.a.createElement(y.a,null,l.a.createElement(y.a.Head,null,l.a.createElement(y.a.TextHeaderCell,null,"Currency"),l.a.createElement(y.a.TextHeaderCell,null,"Rate")),l.a.createElement(y.a.Body,{height:440},!this.isEmpty(a)&&Object.keys(a.rates).map((function(e,t){return l.a.createElement(y.a.Row,{key:t,isSelectable:!0,onSelect:function(){return alert(e)}},l.a.createElement(y.a.TextCell,null,e),l.a.createElement(y.a.TextCell,{isNumber:!0},a.rates[e]))}))))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e){e.exports=JSON.parse('{"all":["USD","JPY","BGN","CZK","DKK","GBP","HUF","PLN","RON","SEK","CHF","ISK","NOK","HRK","RUB","TRY","AUD","BRL","CAD","CNY","HKD","IDR","ILS","INR","KRW","MXN","MYR","NZD","PHP","SGD","THB","ZAR"]}')}},[[114,1,2]]]);
//# sourceMappingURL=main.9cd7b1e8.chunk.js.map