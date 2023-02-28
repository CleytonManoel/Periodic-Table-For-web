var element5 = new Object();
element5.btn = '#e5';
element5.elementname = 'boron';
element5.atomicmass = '10.81 u';
element5.protons = '5';
element5.electrons = '5';
element5.neutrons = '5';
element5.fusion = '2348 K';
element5.boiling = '4273 K';
element5.symbolnumber = '5';
element5.symbol = 'b';


var btn = document.querySelector(element5.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element5.elementname; 
    atomicmass.innerHTML = element5.atomicmass;
    protons.innerHTML = element5.protons;
    electrons.innerHTML = element5.electrons; 
    neutrons.innerHTML = element5.neutrons; 
    fusion.innerHTML = element5.fusion;
    boiling.innerHTML = element5.boiling; 
    symbolnumber.innerHTML = element5.symbolnumber; 
    symbol.innerHTML = element5.symbol; 
});