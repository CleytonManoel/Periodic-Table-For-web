var element27 = new Object();
element27.btn = '#e27';
element27.elementname = 'cobalt';
element27.atomicmass = '58.93319 u';
element27.protons = '27';
element27.electrons = '27';
element27.neutrons = '31';
element27.fusion = '1768 K';
element27.boiling = '3200 K';
element27.symbolnumber = '27';
element27.symbol = 'co';


var btn = document.querySelector(element27.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element27.elementname; 
    atomicmass.innerHTML = element27.atomicmass;
    protons.innerHTML = element27.protons;
    electrons.innerHTML = element27.electrons; 
    neutrons.innerHTML = element27.neutrons; 
    fusion.innerHTML = element27.fusion;
    boiling.innerHTML = element27.boiling; 
    symbolnumber.innerHTML = element27.symbolnumber; 
    symbol.innerHTML = element27.symbol; 
});