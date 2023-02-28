var element60 = new Object();
element60.btn = '#e60';
element60.elementname = 'neodymium';
element60.atomicmass = '144.24 u';
element60.protons = '60';
element60.electrons = '60';
element60.neutrons = '84';
element60.fusion = '1294 K';
element60.boiling = '3347 K';
element60.symbolnumber = '60';
element60.symbol = 'nd';


var btn = document.querySelector(element60.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element60.elementname; 
    atomicmass.innerHTML = element60.atomicmass;
    protons.innerHTML = element60.protons;
    electrons.innerHTML = element60.electrons; 
    neutrons.innerHTML = element60.neutrons; 
    fusion.innerHTML = element60.fusion;
    boiling.innerHTML = element60.boiling; 
    symbolnumber.innerHTML = element60.symbolnumber; 
    symbol.innerHTML = element60.symbol; 
});