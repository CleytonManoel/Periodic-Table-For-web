var element74 = new Object();
element74.btn = '#e74';
element74.elementname = 'tungsten';
element74.atomicmass = '183.84 u';
element74.protons = '74';
element74.electrons = '74';
element74.neutrons = '109';
element74.fusion = '3695 K';
element74.boiling = '5828 K';
element74.symbolnumber = '74';
element74.symbol = 'w';


var btn = document.querySelector(element74.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element74.elementname; 
    atomicmass.innerHTML = element74.atomicmass;
    protons.innerHTML = element74.protons;
    electrons.innerHTML = element74.electrons; 
    neutrons.innerHTML = element74.neutrons; 
    fusion.innerHTML = element74.fusion;
    boiling.innerHTML = element74.boiling; 
    symbolnumber.innerHTML = element74.symbolnumber; 
    symbol.innerHTML = element74.symbol; 
});