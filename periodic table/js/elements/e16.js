var element16 = new Object();
element16.btn = '#e16';
element16.elementname = 'sulfur';
element16.atomicmass = '32.07 u';
element16.protons = '16';
element16.electrons = '16';
element16.neutrons = '16';
element16.fusion = '388.36 K';
element16.boiling = '717.75 K';
element16.symbolnumber = '16';
element16.symbol = 's';


var btn = document.querySelector(element16.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element16.elementname; 
    atomicmass.innerHTML = element16.atomicmass;
    protons.innerHTML = element16.protons;
    electrons.innerHTML = element16.electrons; 
    neutrons.innerHTML = element16.neutrons; 
    fusion.innerHTML = element16.fusion;
    boiling.innerHTML = element16.boiling; 
    symbolnumber.innerHTML = element16.symbolnumber; 
    symbol.innerHTML = element16.symbol; 
});