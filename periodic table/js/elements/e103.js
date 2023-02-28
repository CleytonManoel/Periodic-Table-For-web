var element103 = new Object();
element103.btn = '#e103';
element103.elementname = 'lawrencium';
element103.atomicmass = '266.120 u';
element103.protons = '103';
element103.electrons = '103';
element103.neutrons = '163';
element103.fusion = '1900 K';
element103.boiling = '---';
element103.symbolnumber = '103';
element103.symbol = 'lr';


var btn = document.querySelector(element103.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element103.elementname; 
    atomicmass.innerHTML = element103.atomicmass;
    protons.innerHTML = element103.protons;
    electrons.innerHTML = element103.electrons; 
    neutrons.innerHTML = element103.neutrons; 
    fusion.innerHTML = element103.fusion;
    boiling.innerHTML = element103.boiling; 
    symbolnumber.innerHTML = element103.symbolnumber; 
    symbol.innerHTML = element103.symbol; 
});