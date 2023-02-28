var element68 = new Object();
element68.btn = '#e68';
element68.elementname = 'erbium';
element68.atomicmass = '167.26 u';
element68.protons = '68';
element68.electrons = '68';
element68.neutrons = '99';
element68.fusion = '1802 K';
element68.boiling = '3141 K';
element68.symbolnumber = '68';
element68.symbol = 'er';


var btn = document.querySelector(element68.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element68.elementname; 
    atomicmass.innerHTML = element68.atomicmass;
    protons.innerHTML = element68.protons;
    electrons.innerHTML = element68.electrons; 
    neutrons.innerHTML = element68.neutrons; 
    fusion.innerHTML = element68.fusion;
    boiling.innerHTML = element68.boiling; 
    symbolnumber.innerHTML = element68.symbolnumber; 
    symbol.innerHTML = element68.symbol; 
});