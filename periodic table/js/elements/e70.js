var element70 = new Object();
element70.btn = '#e70';
element70.elementname = 'ytterbium';
element70.atomicmass = '173.05 u';
element70.protons = '70';
element70.electrons = '70';
element70.neutrons = '103';
element70.fusion = '1092 K';
element70.boiling = '1469 K';
element70.symbolnumber = '70';
element70.symbol = 'yb';


var btn = document.querySelector(element70.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element70.elementname; 
    atomicmass.innerHTML = element70.atomicmass;
    protons.innerHTML = element70.protons;
    electrons.innerHTML = element70.electrons; 
    neutrons.innerHTML = element70.neutrons; 
    fusion.innerHTML = element70.fusion;
    boiling.innerHTML = element70.boiling; 
    symbolnumber.innerHTML = element70.symbolnumber; 
    symbol.innerHTML = element70.symbol; 
});