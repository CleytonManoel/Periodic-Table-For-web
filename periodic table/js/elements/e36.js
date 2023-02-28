var element36 = new Object();
element36.btn = '#e36';
element36.elementname = 'krypton';
element36.atomicmass = '83.80 u';
element36.protons = '36';
element36.electrons = '36';
element36.neutrons = '47';
element36.fusion = '115.79 K';
element36.boiling = '119.93 K';
element36.symbolnumber = '36';
element36.symbol = 'kr';


var btn = document.querySelector(element36.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element36.elementname; 
    atomicmass.innerHTML = element36.atomicmass;
    protons.innerHTML = element36.protons;
    electrons.innerHTML = element36.electrons; 
    neutrons.innerHTML = element36.neutrons; 
    fusion.innerHTML = element36.fusion;
    boiling.innerHTML = element36.boiling; 
    symbolnumber.innerHTML = element36.symbolnumber; 
    symbol.innerHTML = element36.symbol; 
});