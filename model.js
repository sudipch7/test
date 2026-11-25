const layouts = [
  {name:'Orbit', paper:'#f4d46a', ink:'#252842', bands:false},
  {name:'Relay', paper:'#deece8', ink:'#883b2f', bands:true}
];
function newSession(){
  return {active:0, selected:false, offsets:[0,0], history:[[],[]]};
}
function update(s, action, value){
  const i=s.active;
  switch(action){
    case 'select': s.selected=true; break;
    case 'browse': s.selected=false; break;
    case 'layout':
      if(Number.isInteger(value) && layouts[value]){s.active=value;s.selected=false}
      break;
    case 'move': {
      if(!s.selected || ![-10,10].includes(value))break;
      const next=Math.max(-20,Math.min(20,s.offsets[i]+value));
      if(next!==s.offsets[i]){s.history[i].push(s.offsets[i]);s.offsets[i]=next}
      break;
    }
    case 'undo':
      if(s.selected && s.history[i].length)s.offsets[i]=s.history[i].pop();
      break;
  }
}
function artwork(i,offset,selected=false){
  const l=layouts[i], y=109+offset;
  const motif=l.bands?'<path d="M165 30h89v15h-89zm0 23h89v15h-89zm0 23h89v15h-89z"/>':'<circle cx="208" cy="66" r="35"/><circle cx="208" cy="66" r="18" fill="'+l.paper+'"/>';
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 186" aria-hidden="true"><rect width="280" height="186" fill="'+l.paper+'"/><g fill="'+l.ink+'" font-family="sans-serif">'+motif+'<text x="17" y="22" font-size="8" letter-spacing="2">OPEN STUDIO   /   08</text><g data-title="true" cursor="pointer"><rect x="12" y="'+(y-32)+'" width="142" height="39" fill="transparent" stroke="'+(selected?l.ink:'none')+'" stroke-dasharray="3 3"/><text x="17" y="'+y+'" font-size="34" font-weight="bold">OFFSET</text></g><path d="M17 149h245" stroke="'+l.ink+'"/><text x="17" y="167" font-size="10">SAT 08 AUG   /   PRINT ROOM</text></g></svg>';
}
if(typeof module!=='undefined')module.exports={newSession,update,artwork,layouts};
