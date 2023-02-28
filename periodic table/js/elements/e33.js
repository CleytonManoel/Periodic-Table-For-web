var element33 = new Object();
element33.btn = '#e33';
element33.elementname = 'arsenic';
element33.atomicmass = '74.92159 u';
element33.protons = '33';
element33.electrons = '33';
element33.neutrons = '41';
element33.fusion = '1090 K';
element33.boiling = '887 K';
element33.symbolnumber = '33';
element33.symbol = 'as';


var btn = document.querySelector(element33.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element33.elementname; 
    atomicmass.innerHTML = element33.atomicmass;
    protons.innerHTML = element33.protons;
    electrons.innerHTML = element33.electrons; 
    neutrons.innerHTML = element33.neutrons; 
    fusion.innerHTML = element33.fusion;
    boiling.innerHTML = element33.boiling; 
    symbolnumber.innerHTML = element33.symbolnumber; 
    symbol.innerHTML = element33.symbol; 
});