var element20 = new Object();
element20.btn = '#e20';
element20.elementname = 'calcium';
element20.latimname = '';
element20.atomicmass = '40.08 u';
element20.protons = '20';
element20.electrons = '20';
element20.neutrons = '20';
element20.fusion = '1115 K';
element20.boiling = '1757 K';
element20.symbolnumber = '20';
element20.symbol = 'ca';


var btn = document.querySelector(element20.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element20.elementname; 
    atomicmass.innerHTML = element20.atomicmass;
    protons.innerHTML = element20.protons;
    electrons.innerHTML = element20.electrons; 
    neutrons.innerHTML = element20.neutrons; 
    fusion.innerHTML = element20.fusion;
    boiling.innerHTML = element20.boiling; 
    symbolnumber.innerHTML = element20.symbolnumber; 
    symbol.innerHTML = element20.symbol; 
});