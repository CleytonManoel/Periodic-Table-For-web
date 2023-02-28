var element23 = new Object();
element23.btn = '#e23';
element23.elementname = 'vadanium';
element23.atomicmass = '50.9415 u';
element23.protons = '23';
element23.electrons = '23';
element23.neutrons = '27';
element23.fusion = '2183 K';
element23.boiling = '3680 K';
element23.symbolnumber = '23';
element23.symbol = 'v';


var btn = document.querySelector(element23.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element23.elementname; 
    atomicmass.innerHTML = element23.atomicmass;
    protons.innerHTML = element23.protons;
    electrons.innerHTML = element23.electrons; 
    neutrons.innerHTML = element23.neutrons; 
    fusion.innerHTML = element23.fusion;
    boiling.innerHTML = element23.boiling; 
    symbolnumber.innerHTML = element23.symbolnumber; 
    symbol.innerHTML = element23.symbol; 
});