var element114 = new Object();
element114.btn = '#e114';
element114.elementname = 'flerovium';
element114.atomicmass = '290.192 u';
element114.protons = '114';
element114.electrons = '114';
element114.neutrons = '176';
element114.fusion = '---';
element114.boiling = '---';
element114.symbolnumber = '114';
element114.symbol = 'fl';


var btn = document.querySelector(element114.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element114.elementname; 
    atomicmass.innerHTML = element114.atomicmass;
    protons.innerHTML = element114.protons;
    electrons.innerHTML = element114.electrons; 
    neutrons.innerHTML = element114.neutrons; 
    fusion.innerHTML = element114.fusion;
    boiling.innerHTML = element114.boiling; 
    symbolnumber.innerHTML = element114.symbolnumber; 
    symbol.innerHTML = element114.symbol; 
});