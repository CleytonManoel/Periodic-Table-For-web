var element109 = new Object();
element109.btn = '#e109';
element109.elementname = 'meitnerium';
element109.atomicmass = '277.154 u';
element109.protons = '109';
element109.electrons = '109';
element109.neutrons = '168';
element109.fusion = '---';
element109.boiling = '---';
element109.symbolnumber = '109';
element109.symbol = 'mt';


var btn = document.querySelector(element109.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element109.elementname; 
    atomicmass.innerHTML = element109.atomicmass;
    protons.innerHTML = element109.protons;
    electrons.innerHTML = element109.electrons; 
    neutrons.innerHTML = element109.neutrons; 
    fusion.innerHTML = element109.fusion;
    boiling.innerHTML = element109.boiling; 
    symbolnumber.innerHTML = element109.symbolnumber; 
    symbol.innerHTML = element109.symbol; 
});