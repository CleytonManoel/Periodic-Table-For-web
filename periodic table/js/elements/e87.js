var element87 = new Object();
element87.btn = '#e87';
element87.elementname = 'francium';
element87.atomicmass = '223.01973 u';
element87.protons = '87';
element87.electrons = '87';
element87.neutrons = '136';
element87.fusion = '300 K';
element87.boiling = '953.15 K';
element87.symbolnumber = '87';
element87.symbol = 'fr';


var btn = document.querySelector(element87.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element87.elementname; 
    atomicmass.innerHTML = element87.atomicmass;
    protons.innerHTML = element87.protons;
    electrons.innerHTML = element87.electrons; 
    neutrons.innerHTML = element87.neutrons; 
    fusion.innerHTML = element87.fusion;
    boiling.innerHTML = element87.boiling; 
    symbolnumber.innerHTML = element87.symbolnumber; 
    symbol.innerHTML = element87.symbol; 
});