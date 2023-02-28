var element77 = new Object();
element77.btn = '#e77';
element77.elementname = 'iridium';
element77.atomicmass = '192.22 u';
element77.protons = '77';
element77.electrons = '77';
element77.neutrons = '115';
element77.fusion = '2719 K';
element77.boiling = '4701 K';
element77.symbolnumber = '77';
element77.symbol = 'ir';


var btn = document.querySelector(element77.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element77.elementname; 
    atomicmass.innerHTML = element77.atomicmass;
    protons.innerHTML = element77.protons;
    electrons.innerHTML = element77.electrons; 
    neutrons.innerHTML = element77.neutrons; 
    fusion.innerHTML = element77.fusion;
    boiling.innerHTML = element77.boiling; 
    symbolnumber.innerHTML = element77.symbolnumber; 
    symbol.innerHTML = element77.symbol; 
});