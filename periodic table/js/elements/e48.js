var element48 = new Object();
element48.btn = '#e48';
element48.elementname = 'cadmium';
element48.atomicmass = '112.41 u';
element48.protons = '48';
element48.electrons = '48';
element48.neutrons = '64';
element48.fusion = '594.22 K';
element48.boiling = '1040 K';
element48.symbolnumber = '48';
element48.symbol = 'cd';


var btn = document.querySelector(element48.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element48.elementname; 
    atomicmass.innerHTML = element48.atomicmass;
    protons.innerHTML = element48.protons;
    electrons.innerHTML = element48.electrons; 
    neutrons.innerHTML = element48.neutrons; 
    fusion.innerHTML = element48.fusion;
    boiling.innerHTML = element48.boiling; 
    symbolnumber.innerHTML = element48.symbolnumber; 
    symbol.innerHTML = element48.symbol; 
});