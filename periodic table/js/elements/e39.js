var element39 = new Object();
element39.btn = '#e39';
element39.elementname = 'yttrium';
element39.atomicmass = '88.90584 u';
element39.protons = '39';
element39.electrons = '39';
element39.neutrons = '49';
element39.fusion = '1795 K';
element39.boiling = '3618 K';
element39.symbolnumber = '39';
element39.symbol = 'y';


var btn = document.querySelector(element39.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element39.elementname; 
    atomicmass.innerHTML = element39.atomicmass;
    protons.innerHTML = element39.protons;
    electrons.innerHTML = element39.electrons; 
    neutrons.innerHTML = element39.neutrons; 
    fusion.innerHTML = element39.fusion;
    boiling.innerHTML = element39.boiling; 
    symbolnumber.innerHTML = element39.symbolnumber; 
    symbol.innerHTML = element39.symbol; 
});