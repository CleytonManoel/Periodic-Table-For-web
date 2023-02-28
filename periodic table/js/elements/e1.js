var element1 = new Object();
element1.btn = '#e1';
element1.elementname = 'hydrogen';
element1.atomicmass = '1.0080 u';
element1.protons = '1';
element1.electrons = '1';
element1.neutrons = '0';
element1.fusion = '13.81 K';
element1.boiling = '13.81 K';
element1.symbolnumber = '1';
element1.symbol = 'h';


var btn = document.querySelector(element1.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element1.elementname; 
    atomicmass.innerHTML = element1.atomicmass;
    protons.innerHTML = element1.protons;
    electrons.innerHTML = element1.electrons; 
    neutrons.innerHTML = element1.neutrons; 
    fusion.innerHTML = element1.fusion;
    boiling.innerHTML = element1.boiling; 
    symbolnumber.innerHTML = element1.symbolnumber; 
    symbol.innerHTML = element1.symbol; 
});


