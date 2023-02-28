var element63 = new Object();
element63.btn = '#e63';
element63.elementname = 'europium';
element63.atomicmass = '151.964 u';
element63.protons = '63';
element63.electrons = '63';
element63.neutrons = '88';
element63.fusion = '1095 K';
element63.boiling = '1802 K';
element63.symbolnumber = '63';
element63.symbol = 'eu';


var btn = document.querySelector(element63.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element63.elementname; 
    atomicmass.innerHTML = element63.atomicmass;
    protons.innerHTML = element63.protons;
    electrons.innerHTML = element63.electrons; 
    neutrons.innerHTML = element63.neutrons; 
    fusion.innerHTML = element63.fusion;
    boiling.innerHTML = element63.boiling; 
    symbolnumber.innerHTML = element63.symbolnumber; 
    symbol.innerHTML = element63.symbol; 
});