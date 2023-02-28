var element65 = new Object();
element65.btn = '#e65';
element65.elementname = 'terbium';
element65.atomicmass = '158.92535 u';
element65.protons = '65';
element65.electrons = '65';
element65.neutrons = '93';
element65.fusion = '1629 K';
element65.boiling = '3503 K';
element65.symbolnumber = '65';
element65.symbol = 'tb';


var btn = document.querySelector(element65.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element65.elementname; 
    atomicmass.innerHTML = element65.atomicmass;
    protons.innerHTML = element65.protons;
    electrons.innerHTML = element65.electrons; 
    neutrons.innerHTML = element65.neutrons; 
    fusion.innerHTML = element65.fusion;
    boiling.innerHTML = element65.boiling; 
    symbolnumber.innerHTML = element65.symbolnumber; 
    symbol.innerHTML = element65.symbol; 
});k