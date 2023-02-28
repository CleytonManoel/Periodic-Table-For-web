var element8 = new Object();
element8.btn = '#e8';
element8.elementname = 'oxygen';
element8.atomicmass = '15.999 u';
element8.protons = '8';
element8.electrons = '8';
element8.neutrons = '8';
element8.fusion = '54.36 K';
element8.boiling = '90.2 K';
element8.symbolnumber = '8';
element8.symbol = 'o';


var btn = document.querySelector(element8.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element8.elementname; 
    atomicmass.innerHTML = element8.atomicmass;
    protons.innerHTML = element8.protons;
    electrons.innerHTML = element8.electrons; 
    neutrons.innerHTML = element8.neutrons; 
    fusion.innerHTML = element8.fusion;
    boiling.innerHTML = element8.boiling; 
    symbolnumber.innerHTML = element8.symbolnumber; 
    symbol.innerHTML = element8.symbol; 
});