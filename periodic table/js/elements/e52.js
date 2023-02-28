var element52 = new Object();
element52.btn = '#e52';
element52.elementname = 'tellurium';
element52.atomicmass = '127.6 u';
element52.protons = '52';
element52.electrons = '52';
element52.neutrons = '75';
element52.fusion = '722.66 K';
element52.boiling = '1261 K';
element52.symbolnumber = '52';
element52.symbol = 'te';


var btn = document.querySelector(element52.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element52.elementname; 
    atomicmass.innerHTML = element52.atomicmass;
    protons.innerHTML = element52.protons;
    electrons.innerHTML = element52.electrons; 
    neutrons.innerHTML = element52.neutrons; 
    fusion.innerHTML = element52.fusion;
    boiling.innerHTML = element52.boiling; 
    symbolnumber.innerHTML = element52.symbolnumber; 
    symbol.innerHTML = element52.symbol; 
});