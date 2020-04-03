!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("leaflet"),require("esri-leaflet"),require("esri-leaflet-geocoder")):"function"==typeof define&&define.amd?define(["exports","leaflet","esri-leaflet","esri-leaflet-geocoder"],t):t(((e=e||self).L=e.L||{},e.L.esri=e.L.esri||{},e.L.esri.BootstrapGeocoder={}),e.L,e.L.esri,e.L.esri.Geocoding)}(this,function(e,h,t,s){"use strict";var i=h.Layer.extend({options:{allowMultipleResults:!0,placeholder:"Search for places or addresses",title:"Location Search",wrapperStyle:"input-group",suggestionGroupStyle:"dropdown-menu",selectedStyle:"geocoder-control-selected"},initialize:function(e){h.Util.setOptions(this,e),e.providers||(e.providers=[s.arcgisOnlineProvider()]),this._geosearchCore=s.geosearchCore(this,e),this._geosearchCore.addEventParent(this),this._geosearchCore._pendingSuggestions=[],this._geosearchCore._providers[0].addEventParent(this)},_renderSuggestions:function(e){var t,s=[];this._suggestions.style.display="block";for(var i=0;i<e.length;i++){var o=e[i];t||((t=h.DomUtil.create("ul",null,this._suggestions)).style.display="block");var r=h.DomUtil.create("li","geocoder-control-suggestion",t);r.innerHTML=o.text,r.provider=o.provider,r["data-magic-key"]=o.magicKey}return s.push(t),s},clear:function(){this._suggestions.innerHTML="",this._suggestions.style.display="none",this._input.value=""},clearSuggestions:function(){if(this._nodes)for(var e=0;e<this._nodes.length;e++)this._nodes[e].parentElement&&this._suggestions.removeChild(this._nodes[e])},onAdd:function(e){this._map=e,t.Util.setEsriAttribution(e),this._input=document.getElementById(this.options.inputTag),this._wrapper=document.createElement("div"),h.DomUtil.addClass(this._wrapper,this.options.wrapperStyle),this._input.parentNode.insertBefore(this._wrapper,this._input),this._wrapper.appendChild(this._input),this._input.title=this.options.title,this._suggestions=document.createElement("div"),h.DomUtil.addClass(this._suggestions,this.options.suggestionGroupStyle),this._input.parentNode.insertBefore(this._suggestions,null),h.DomEvent.addListener(this._input,"focus",function(e){this._input.placeholder=this.options.placeholder},this),h.DomEvent.addListener(this._suggestions,"mousedown",function(e){var t=e.target||e.srcElement;this._geosearchCore._geocode(t.innerHTML,t["data-magic-key"],t.provider),this.clear()},this),h.DomEvent.addListener(this._input,"blur",function(e){this._input.placeholder="",this.clear()},this),h.DomEvent.addListener(this._input,"keydown",function(e){for(var t,s=this.options.selectedStyle,i=this._suggestions.querySelectorAll(".geocoder-control-suggestion"),o=this._suggestions.querySelectorAll("."+s)[0],r=0;r<i.length;r++)if(i[r]===o){t=r;break}switch(e.keyCode){case 13:o?(this._geosearchCore._geocode(o.innerText,o["data-magic-key"],o.provider),this.clear()):this.options.allowMultipleResults?(this._geosearchCore._geocode(this._input.value,void 0),this.clear()):h.DomUtil.addClass(i[0],s),h.DomEvent.preventDefault(e);break;case 38:o&&L.DomUtil.removeClass(o,s);var n=i[t-1];o&&n?h.DomUtil.addClass(n,s):h.DomUtil.addClass(i[i.length-1],s),h.DomEvent.preventDefault(e);break;case 40:o&&h.DomUtil.removeClass(o,s);var a=i[t+1];o&&a?h.DomUtil.addClass(a,s):h.DomUtil.addClass(i[0],s),h.DomEvent.preventDefault(e);break;default:for(var l=0;l<this._geosearchCore._pendingSuggestions.length;l++){var d=this._geosearchCore._pendingSuggestions[l];d&&d.abort&&!d.id&&d.abort()}}},this),h.DomEvent.addListener(this._input,"keyup",h.Util.throttle(function(e){var t=e.which||e.keyCode,s=(e.target||e.srcElement).value;return s.length<2||27===t?(this._suggestions.innerHTML="",void(this._suggestions.style.display="none")):void(13!==t&&38!==t&&40!==t&&this._input.value!==this._lastValue&&(this._lastValue=this._input.value,this._geosearchCore._suggest(s)))},50,this),this)}});e.Search=i,e.search=function(e){return new i(e)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap-geocoder.js.map
