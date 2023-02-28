var element107 = new Object();
element107.btn = '#e107';
element107.elementname = 'bohrium';
element107.atomicmass = '270.133 u';
element107.protons = '107';
element107.electrons = '107';
element107.neutrons = '163';
element107.fusion = '---';
element107.boiling = '---';
element107.symbolnumber = '107';
element107.symbol = 'bh';


var btn = document.querySelector(element107.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element107.elementname; 
    atomicmass.innerHTML = element107.atomicmass;
    protons.innerHTML = element107.protons;
    electrons.innerHTML = element107.electrons; 
    neutrons.innerHTML = element107.neutrons; 
    fusion.innerHTML = element107.fusion;
    boiling.innerHTML = element107.boiling; 
    symbolnumber.innerHTML = element107.symbolnumber; 
    symbol.innerHTML = element107.symbol; 
});