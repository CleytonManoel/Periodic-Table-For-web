var element101 = new Object();
element101.btn = '#e101';
element101.elementname = 'mendelevium';
element101.atomicmass = '258.09843 u';
element101.protons = '101';
element101.electrons = '101';
element101.neutrons = '157';
element101.fusion = '1100 K';
element101.boiling = '---';
element101.symbolnumber = '101';
element101.symbol = 'md';


var btn = document.querySelector(element101.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element101.elementname; 
    atomicmass.innerHTML = element101.atomicmass;
    protons.innerHTML = element101.protons;
    electrons.innerHTML = element101.electrons; 
    neutrons.innerHTML = element101.neutrons; 
    fusion.innerHTML = element101.fusion;
    boiling.innerHTML = element101.boiling; 
    symbolnumber.innerHTML = element101.symbolnumber; 
    symbol.innerHTML = element101.symbol; 
});