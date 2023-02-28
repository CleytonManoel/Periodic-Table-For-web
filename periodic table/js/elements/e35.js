var element35 = new Object();
element35.btn = '#e35';
element35.elementname = 'bromine';
element35.atomicmass = '79.90 u';
element35.protons = '35';
element35.electrons = '35';
element35.neutrons = '44';
element35.fusion = '265.95 K';
element35.boiling = '331.95 K';
element35.symbolnumber = '35';
element35.symbol = 'br';


var btn = document.querySelector(element35.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element35.elementname; 
    atomicmass.innerHTML = element35.atomicmass;
    protons.innerHTML = element35.protons;
    electrons.innerHTML = element35.electrons; 
    neutrons.innerHTML = element35.neutrons; 
    fusion.innerHTML = element35.fusion;
    boiling.innerHTML = element35.boiling; 
    symbolnumber.innerHTML = element35.symbolnumber; 
    symbol.innerHTML = element35.symbol; 
});