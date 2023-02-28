var element34 = new Object();
element34.btn = '#e34';
element34.elementname = 'selenium';
element34.atomicmass = '78.97 u';
element34.protons = '34';
element34.electrons = '34';
element34.neutrons = '44';
element34.fusion = '493.65 K';
element34.boiling = '958 K';
element34.symbolnumber = '34';
element34.symbol = 'se';


var btn = document.querySelector(element34.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element34.elementname; 
    atomicmass.innerHTML = element34.atomicmass;
    protons.innerHTML = element34.protons;
    electrons.innerHTML = element34.electrons; 
    neutrons.innerHTML = element34.neutrons; 
    fusion.innerHTML = element34.fusion;
    boiling.innerHTML = element34.boiling; 
    symbolnumber.innerHTML = element34.symbolnumber; 
    symbol.innerHTML = element34.symbol; 
});