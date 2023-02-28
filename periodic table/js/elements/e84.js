var element84 = new Object();
element84.btn = '#e84';
element84.elementname = 'polonium';
element84.atomicmass = '208.98243 u';
element84.protons = '84';
element84.electrons = '84';
element84.neutrons = '124';
element84.fusion = '527 K';
element84.boiling = '1235 K';
element84.symbolnumber = '84';
element84.symbol = 'po';


var btn = document.querySelector(element84.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element84.elementname; 
    atomicmass.innerHTML = element84.atomicmass;
    protons.innerHTML = element84.protons;
    electrons.innerHTML = element84.electrons; 
    neutrons.innerHTML = element84.neutrons; 
    fusion.innerHTML = element84.fusion;
    boiling.innerHTML = element84.boiling; 
    symbolnumber.innerHTML = element84.symbolnumber; 
    symbol.innerHTML = element84.symbol; 
});