var element7 = new Object();
element7.btn = '#e7';
element7.elementname = 'nitrogen';
element7.atomicmass = '14.007 u';
element7.protons = '7';
element7.electrons = '7';
element7.neutrons = '7';
element7.fusion = '63.15 K';
element7.boiling = '77.36 K';
element7.symbolnumber = '7';
element7.symbol = 'n';


var btn = document.querySelector(element7.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element7.elementname; 
    atomicmass.innerHTML = element7.atomicmass;
    protons.innerHTML = element7.protons;
    electrons.innerHTML = element7.electrons; 
    neutrons.innerHTML = element7.neutrons; 
    fusion.innerHTML = element7.fusion;
    boiling.innerHTML = element7.boiling; 
    symbolnumber.innerHTML = element7.symbolnumber; 
    symbol.innerHTML = element7.symbol; 
});