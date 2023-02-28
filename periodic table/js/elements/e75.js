var element75 = new Object();
element75.btn = '#e75';
element75.elementname = 'rhenium';
element75.atomicmass = '186.207 u';
element75.protons = '75';
element75.electrons = '75';
element75.neutrons = '111';
element75.fusion = '3459 K';
element75.boiling = '5869 K';
element75.symbolnumber = '75';
element75.symbol = 're';


var btn = document.querySelector(element75.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element75.elementname; 
    atomicmass.innerHTML = element75.atomicmass;
    protons.innerHTML = element75.protons;
    electrons.innerHTML = element75.electrons; 
    neutrons.innerHTML = element75.neutrons; 
    fusion.innerHTML = element75.fusion;
    boiling.innerHTML = element75.boiling; 
    symbolnumber.innerHTML = element75.symbolnumber; 
    symbol.innerHTML = element75.symbol; 
});