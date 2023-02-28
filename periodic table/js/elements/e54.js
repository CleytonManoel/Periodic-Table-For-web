var element54 = new Object();
element54.btn = '#e54';
element54.elementname = 'xenon';
element54.atomicmass = '131.29 u';
element54.protons = '54';
element54.electrons = '54';
element54.neutrons = '77';
element54.fusion = '161.36 K';
element54.boiling = '165.03 K';
element54.symbolnumber = '54';
element54.symbol = 'xe';


var btn = document.querySelector(element54.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element54.elementname; 
    atomicmass.innerHTML = element54.atomicmass;
    protons.innerHTML = element54.protons;
    electrons.innerHTML = element54.electrons; 
    neutrons.innerHTML = element54.neutrons; 
    fusion.innerHTML = element54.fusion;
    boiling.innerHTML = element54.boiling; 
    symbolnumber.innerHTML = element54.symbolnumber; 
    symbol.innerHTML = element54.symbol; 
});