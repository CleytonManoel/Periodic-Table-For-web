var element100 = new Object();
element100.btn = '#e100';
element100.elementname = 'fermium';
element100.atomicmass = '257.09511 u';
element100.protons = '100';
element100.electrons = '100';
element100.neutrons = '157';
element100.fusion = '1800 K';
element100.boiling = '---';
element100.symbolnumber = '100';
element100.symbol = 'fm';


var btn = document.querySelector(element100.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element100.elementname; 
    atomicmass.innerHTML = element100.atomicmass;
    protons.innerHTML = element100.protons;
    electrons.innerHTML = element100.electrons; 
    neutrons.innerHTML = element100.neutrons; 
    fusion.innerHTML = element100.fusion;
    boiling.innerHTML = element100.boiling; 
    symbolnumber.innerHTML = element100.symbolnumber; 
    symbol.innerHTML = element100.symbol; 
});