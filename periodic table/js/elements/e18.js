var element18 = new Object();
element18.btn = '#e18';
element18.elementname = 'argon';
element18.atomicmass = '39.9 u';
element18.protons = '18';
element18.electrons = '18';
element18.neutrons = '21';
element18.fusion = '83.8 K';
element18.boiling = '87.3 K';
element18.symbolnumber = '18';
element18.symbol = 'ar';


var btn = document.querySelector(element18.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element18.elementname; 
    atomicmass.innerHTML = element18.atomicmass;
    protons.innerHTML = element18.protons;
    electrons.innerHTML = element18.electrons; 
    neutrons.innerHTML = element18.neutrons; 
    fusion.innerHTML = element18.fusion;
    boiling.innerHTML = element18.boiling; 
    symbolnumber.innerHTML = element18.symbolnumber; 
    symbol.innerHTML = element18.symbol; 
});