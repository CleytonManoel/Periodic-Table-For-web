var element44 = new Object();
element44.btn = '#e44';
element44.elementname = 'ruthenium';
element44.atomicmass = '101.1 u';
element44.protons = '44';
element44.electrons = '44';
element44.neutrons = '57';
element44.fusion = '2607 K';
element44.boiling = '4423 K';
element44.symbolnumber = '44';
element44.symbol = 'ru';


var btn = document.querySelector(element44.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element44.elementname; 
    atomicmass.innerHTML = element44.atomicmass;
    protons.innerHTML = element44.protons;
    electrons.innerHTML = element44.electrons; 
    neutrons.innerHTML = element44.neutrons; 
    fusion.innerHTML = element44.fusion;
    boiling.innerHTML = element44.boiling; 
    symbolnumber.innerHTML = element44.symbolnumber; 
    symbol.innerHTML = element44.symbol; 
});