var element37 = new Object();
element37.btn = '#e37';
element37.elementname = 'rubidium';
element37.atomicmass = '85.468 u';
element37.protons = '37';
element37.electrons = '37';
element37.neutrons = '48';
element37.fusion = '312.46 K';
element37.boiling = '961 K';
element37.symbolnumber = '37';
element37.symbol = 'rb';


var btn = document.querySelector(element37.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element37.elementname; 
    atomicmass.innerHTML = element37.atomicmass;
    protons.innerHTML = element37.protons;
    electrons.innerHTML = element37.electrons; 
    neutrons.innerHTML = element37.neutrons; 
    fusion.innerHTML = element37.fusion;
    boiling.innerHTML = element37.boiling; 
    symbolnumber.innerHTML = element37.symbolnumber; 
    symbol.innerHTML = element37.symbol; 
});