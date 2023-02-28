var element45 = new Object();
element45.btn = '#e45';
element45.elementname = 'rhodium';
element45.atomicmass = '102.9055 u';
element45.protons = '45';
element45.electrons = '45';
element45.neutrons = '57';
element45.fusion = '2237 K';
element45.boiling = '3968 K';
element45.symbolnumber = '45';
element45.symbol = 'rh';


var btn = document.querySelector(element45.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element45.elementname; 
    atomicmass.innerHTML = element45.atomicmass;
    protons.innerHTML = element45.protons;
    electrons.innerHTML = element45.electrons; 
    neutrons.innerHTML = element45.neutrons; 
    fusion.innerHTML = element45.fusion;
    boiling.innerHTML = element45.boiling; 
    symbolnumber.innerHTML = element45.symbolnumber; 
    symbol.innerHTML = element45.symbol; 
});