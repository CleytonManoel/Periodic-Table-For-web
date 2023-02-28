var element79 = new Object();
element79.btn = '#e79';
element79.elementname = 'gold';
element79.atomicmass = '196.96657 u';
element79.protons = '79';
element79.electrons = '79';
element79.neutrons = '117';
element79.fusion = '1337.33 K';
element79.boiling = '3129 K';
element79.symbolnumber = '79';
element79.symbol = 'au';


var btn = document.querySelector(element79.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element79.elementname; 
    atomicmass.innerHTML = element79.atomicmass;
    protons.innerHTML = element79.protons;
    electrons.innerHTML = element79.electrons; 
    neutrons.innerHTML = element79.neutrons; 
    fusion.innerHTML = element79.fusion;
    boiling.innerHTML = element79.boiling; 
    symbolnumber.innerHTML = element79.symbolnumber; 
    symbol.innerHTML = element79.symbol; 
});