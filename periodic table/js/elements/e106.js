var element106 = new Object();
element106.btn = '#e106';
element106.elementname = 'seaborgium';
element106.atomicmass = '269.128 u';
element106.protons = '106';
element106.electrons = '106';
element106.neutrons = '163';
element106.fusion = '---';
element106.boiling = '---';
element106.symbolnumber = '106';
element106.symbol = 'sg';


var btn = document.querySelector(element106.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element106.elementname; 
    atomicmass.innerHTML = element106.atomicmass;
    protons.innerHTML = element106.protons;
    electrons.innerHTML = element106.electrons; 
    neutrons.innerHTML = element106.neutrons; 
    fusion.innerHTML = element106.fusion;
    boiling.innerHTML = element106.boiling; 
    symbolnumber.innerHTML = element106.symbolnumber; 
    symbol.innerHTML = element106.symbol; 
});