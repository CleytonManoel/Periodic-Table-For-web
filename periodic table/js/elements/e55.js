var element55 = new Object();
element55.btn = '#e55';
element55.elementname = 'cesium';
element55.atomicmass = '132.9054520 u';
element55.protons = '55';
element55.electrons = '55';
element55.neutrons = '77';
element55.fusion = '301.59 K';
element55.boiling = '944 K';
element55.symbolnumber = '55';
element55.symbol = 'cs';


var btn = document.querySelector(element55.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element55.elementname; 
    atomicmass.innerHTML = element55.atomicmass;
    protons.innerHTML = element55.protons;
    electrons.innerHTML = element55.electrons; 
    neutrons.innerHTML = element55.neutrons; 
    fusion.innerHTML = element55.fusion;
    boiling.innerHTML = element55.boiling; 
    symbolnumber.innerHTML = element55.symbolnumber; 
    symbol.innerHTML = element55.symbol; 
});