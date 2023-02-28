var element105 = new Object();
element105.btn = '#e105';
element105.elementname = 'dubnium';
element105.atomicmass = '268.126 u';
element105.protons = '105';
element105.electrons = '105';
element105.neutrons = '163';
element105.fusion = '---';
element105.boiling = '---';
element105.symbolnumber = '105';
element105.symbol = 'db';


var btn = document.querySelector(element105.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element105.elementname; 
    atomicmass.innerHTML = element105.atomicmass;
    protons.innerHTML = element105.protons;
    electrons.innerHTML = element105.electrons; 
    neutrons.innerHTML = element105.neutrons; 
    fusion.innerHTML = element105.fusion;
    boiling.innerHTML = element105.boiling; 
    symbolnumber.innerHTML = element105.symbolnumber; 
    symbol.innerHTML = element105.symbol; 
});