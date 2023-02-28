var element112 = new Object();
element112.btn = '#e112';
element112.elementname = 'copernicium';
element112.atomicmass = '286.179 u';
element112.protons = '112';
element112.electrons = '112';
element112.neutrons = '174';
element112.fusion = '---';
element112.boiling = '---';
element112.symbolnumber = '112';
element112.symbol = 'cn';


var btn = document.querySelector(element112.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element112.elementname; 
    atomicmass.innerHTML = element112.atomicmass;
    protons.innerHTML = element112.protons;
    electrons.innerHTML = element112.electrons; 
    neutrons.innerHTML = element112.neutrons; 
    fusion.innerHTML = element112.fusion;
    boiling.innerHTML = element112.boiling; 
    symbolnumber.innerHTML = element112.symbolnumber; 
    symbol.innerHTML = element112.symbol; 
});