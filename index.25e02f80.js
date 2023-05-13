var e;console.log((e="poland",new Promise(((o,t)=>{fetch(`https://restcountries.com/v3.1/name/${e}`,{method:"GET"}).then((e=>{if(e.ok)return e.json();t(`Error ${e.status}`)})).then((e=>{o(e)}))}))));
//# sourceMappingURL=index.25e02f80.js.map
