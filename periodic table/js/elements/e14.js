var element14 = new Object();
element14.btn = '#e14';
element14.elementname = 'silicon';
element14.atomicmass = '28.085 u';
element14.protons = '14';
element14.electrons = '14';
element14.neutrons = '14';
element14.fusion = '1687 K';
element14.boiling = '3538 K';
element14.symbolnumber = '14';
element14.symbol = 'si';


var btn = document.querySelector(element14.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element14.elementname; 
    atomicmass.innerHTML = element14.atomicmass;
    protons.innerHTML = element14.protons;
    electrons.innerHTML = element14.electrons; 
    neutrons.innerHTML = element14.neutrons; 
    fusion.innerHTML = element14.fusion;
    boiling.innerHTML = element14.boiling; 
    symbolnumber.innerHTML = element14.symbolnumber; 
    symbol.innerHTML = element14.symbol; 
});