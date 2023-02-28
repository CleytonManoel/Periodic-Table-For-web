var element73 = new Object();
element73.btn = '#e73';
element73.elementname = 'tantalum';
element73.atomicmass = '180.9479 u';
element73.protons = '73';
element73.electrons = '73';
element73.neutrons = '107';
element73.fusion = '3290 K';
element73.boiling = '5731 K';
element73.symbolnumber = '73';
element73.symbol = 'ta';


var btn = document.querySelector(element73.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element73.elementname; 
    atomicmass.innerHTML = element73.atomicmass;
    protons.innerHTML = element73.protons;
    electrons.innerHTML = element73.electrons; 
    neutrons.innerHTML = element73.neutrons; 
    fusion.innerHTML = element73.fusion;
    boiling.innerHTML = element73.boiling; 
    symbolnumber.innerHTML = element73.symbolnumber; 
    symbol.innerHTML = element73.symbol; 
});