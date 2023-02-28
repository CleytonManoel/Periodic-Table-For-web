var element17 = new Object();
element17.btn = '#e17';
element17.elementname = 'chlorine';
element17.atomicmass = '35.45 u';
element17.protons = '17';
element17.electrons = '17';
element17.neutrons = '18';
element17.fusion = '171.65 K';
element17.boiling = '239.11 K';
element17.symbolnumber = '17';
element17.symbol = 'cl';


var btn = document.querySelector(element17.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element17.elementname; 
    atomicmass.innerHTML = element17.atomicmass;
    protons.innerHTML = element17.protons;
    electrons.innerHTML = element17.electrons; 
    neutrons.innerHTML = element17.neutrons; 
    fusion.innerHTML = element17.fusion;
    boiling.innerHTML = element17.boiling; 
    symbolnumber.innerHTML = element17.symbolnumber; 
    symbol.innerHTML = element17.symbol; 
});