var element47 = new Object();
element47.btn = '#e47';
element47.elementname = 'silver';
element47.atomicmass = '107.868 u';
element47.protons = '47';
element47.electrons = '47';
element47.neutrons = '60';
element47.fusion = '1234.93 K';
element47.boiling = '2435 K';
element47.symbolnumber = '47';
element47.symbol = 'ag';


var btn = document.querySelector(element47.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element47.elementname; 
    atomicmass.innerHTML = element47.atomicmass;
    protons.innerHTML = element47.protons;
    electrons.innerHTML = element47.electrons; 
    neutrons.innerHTML = element47.neutrons; 
    fusion.innerHTML = element47.fusion;
    boiling.innerHTML = element47.boiling; 
    symbolnumber.innerHTML = element47.symbolnumber; 
    symbol.innerHTML = element47.symbol; 
});