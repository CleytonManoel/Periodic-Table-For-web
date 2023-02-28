var element61 = new Object();
element61.btn = '#e61';
element61.elementname = 'promethium';
element61.atomicmass = '144.91276 u';
element61.protons = '61';
element61.electrons = '61';
element61.neutrons = '83';
element61.fusion = '1315 K';
element61.boiling = '3273 K';
element61.symbolnumber = '61';
element61.symbol = 'pm';


var btn = document.querySelector(element61.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element61.elementname; 
    atomicmass.innerHTML = element61.atomicmass;
    protons.innerHTML = element61.protons;
    electrons.innerHTML = element61.electrons; 
    neutrons.innerHTML = element61.neutrons; 
    fusion.innerHTML = element61.fusion;
    boiling.innerHTML = element61.boiling; 
    symbolnumber.innerHTML = element61.symbolnumber; 
    symbol.innerHTML = element61.symbol; 
});