var element51 = new Object();
element51.btn = '#e51';
element51.elementname = 'antimony';
element51.atomicmass = '121.760 u';
element51.protons = '51';
element51.electrons = '51';
element51.neutrons = '70';
element51.fusion = '903.78 K';
element51.boiling = '1860 K';
element51.symbolnumber = '51';
element51.symbol = 'sb';


var btn = document.querySelector(element51.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element51.elementname; 
    atomicmass.innerHTML = element51.atomicmass;
    protons.innerHTML = element51.protons;
    electrons.innerHTML = element51.electrons; 
    neutrons.innerHTML = element51.neutrons; 
    fusion.innerHTML = element51.fusion;
    boiling.innerHTML = element51.boiling; 
    symbolnumber.innerHTML = element51.symbolnumber; 
    symbol.innerHTML = element51.symbol; 
});