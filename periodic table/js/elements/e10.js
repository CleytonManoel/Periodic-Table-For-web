var element10 = new Object();
element10.btn = '#e10';
element10.elementname = 'neon';
element10.atomicmass = '20.180 u';
element10.protons = '10';
element10.electrons = '10';
element10.neutrons = '10';
element10.fusion = '24.56 K';
element10.boiling = '27.07 K';
element10.symbolnumber = '10';
element10.symbol = 'ne';


var btn = document.querySelector(element10.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element10.elementname; 
    atomicmass.innerHTML = element10.atomicmass;
    protons.innerHTML = element10.protons;
    electrons.innerHTML = element10.electrons; 
    neutrons.innerHTML = element10.neutrons; 
    fusion.innerHTML = element10.fusion;
    boiling.innerHTML = element10.boiling; 
    symbolnumber.innerHTML = element10.symbolnumber; 
    symbol.innerHTML = element10.symbol; 
});