var element67 = new Object();
element67.btn = '#e67';
element67.elementname = 'holmium';
element67.atomicmass = '164.93033 u';
element67.protons = '67';
element67.electrons = '67';
element67.neutrons = '97';
element67.fusion = '1747 K';
element67.boiling = '2973 K';
element67.symbolnumber = '67';
element67.symbol = 'ho';


var btn = document.querySelector(element67.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element67.elementname; 
    atomicmass.innerHTML = element67.atomicmass;
    protons.innerHTML = element67.protons;
    electrons.innerHTML = element67.electrons; 
    neutrons.innerHTML = element67.neutrons; 
    fusion.innerHTML = element67.fusion;
    boiling.innerHTML = element67.boiling; 
    symbolnumber.innerHTML = element67.symbolnumber; 
    symbol.innerHTML = element67.symbol; 
});