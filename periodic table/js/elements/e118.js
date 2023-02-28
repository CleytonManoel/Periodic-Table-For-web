var element118 = new Object();
element118.btn = '#e118';
element118.elementname = 'oganesson';
element118.atomicmass = '295.216 u';
element118.protons = '118';
element118.electrons = '118';
element118.neutrons = '177';
element118.fusion = '---';
element118.boiling = '---';
element118.symbolnumber = '118';
element118.symbol = 'og';


var btn = document.querySelector(element118.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element118.elementname; 
    atomicmass.innerHTML = element118.atomicmass;
    protons.innerHTML = element118.protons;
    electrons.innerHTML = element118.electrons; 
    neutrons.innerHTML = element118.neutrons; 
    fusion.innerHTML = element118.fusion;
    boiling.innerHTML = element118.boiling; 
    symbolnumber.innerHTML = element118.symbolnumber; 
    symbol.innerHTML = element118.symbol; 
});