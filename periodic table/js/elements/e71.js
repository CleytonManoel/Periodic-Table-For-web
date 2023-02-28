var element71 = new Object();
element71.btn = '#e71';
element71.elementname = 'lutetium';
element71.atomicmass = '174.9668 u';
element71.protons = '71';
element71.electrons = '71';
element71.neutrons = '103';
element71.fusion = '1936 K';
element71.boiling = '3675 K';
element71.symbolnumber = '71';
element71.symbol = 'lu';


var btn = document.querySelector(element71.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element71.elementname; 
    atomicmass.innerHTML = element71.atomicmass;
    protons.innerHTML = element71.protons;
    electrons.innerHTML = element71.electrons; 
    neutrons.innerHTML = element71.neutrons; 
    fusion.innerHTML = element71.fusion;
    boiling.innerHTML = element71.boiling; 
    symbolnumber.innerHTML = element71.symbolnumber; 
    symbol.innerHTML = element71.symbol; 
});