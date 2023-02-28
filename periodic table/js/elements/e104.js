var element104 = new Object();
element104.btn = '#e104';
element104.elementname = 'rutherfordium';
element104.atomicmass = '267.122 u';
element104.protons = '104';
element104.electrons = '104';
element104.neutrons = '163';
element104.fusion = '2400 K';
element104.boiling = '5800 K';
element104.symbolnumber = '104';
element104.symbol = 'rf';


var btn = document.querySelector(element104.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element104.elementname; 
    atomicmass.innerHTML = element104.atomicmass;
    protons.innerHTML = element104.protons;
    electrons.innerHTML = element104.electrons; 
    neutrons.innerHTML = element104.neutrons; 
    fusion.innerHTML = element104.fusion;
    boiling.innerHTML = element104.boiling; 
    symbolnumber.innerHTML = element104.symbolnumber; 
    symbol.innerHTML = element104.symbol; 
});