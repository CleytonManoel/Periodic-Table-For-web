var element98 = new Object();
element98.btn = '#e98';
element98.elementname = 'californium';
element98.atomicmass = '251.07959 u';
element98.protons = '98';
element98.electrons = '98';
element98.neutrons = '153';
element98.fusion = '1173 K';
element98.boiling = '1743.2 K';
element98.symbolnumber = '98';
element98.symbol = 'cf';


var btn = document.querySelector(element98.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element98.elementname; 
    atomicmass.innerHTML = element98.atomicmass;
    protons.innerHTML = element98.protons;
    electrons.innerHTML = element98.electrons; 
    neutrons.innerHTML = element98.neutrons; 
    fusion.innerHTML = element98.fusion;
    boiling.innerHTML = element98.boiling; 
    symbolnumber.innerHTML = element98.symbolnumber; 
    symbol.innerHTML = element98.symbol; 
});