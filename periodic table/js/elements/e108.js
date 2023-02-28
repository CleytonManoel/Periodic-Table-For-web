var element108 = new Object();
element108.btn = '#e108';
element108.elementname = 'hassium';
element108.atomicmass = '269.1336 u';
element108.protons = '108';
element108.electrons = '108';
element108.neutrons = '160';
element108.fusion = '---';
element108.boiling = '---';
element108.symbolnumber = '108';
element108.symbol = 'hs';


var btn = document.querySelector(element108.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element108.elementname; 
    atomicmass.innerHTML = element108.atomicmass;
    protons.innerHTML = element108.protons;
    electrons.innerHTML = element108.electrons; 
    neutrons.innerHTML = element108.neutrons; 
    fusion.innerHTML = element108.fusion;
    boiling.innerHTML = element108.boiling; 
    symbolnumber.innerHTML = element108.symbolnumber; 
    symbol.innerHTML = element108.symbol; 
});