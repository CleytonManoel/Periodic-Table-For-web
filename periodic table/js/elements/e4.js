var element4 = new Object();
element4.btn = '#e4';
element4.elementname = 'beryllium';
element4.atomicmass = '9.012183 u';
element4.protons = '4';
element4.electrons = '4';
element4.neutrons = '5';
element4.fusion = '1560 K';
element4.boiling = '2744 K';
element4.symbolnumber = '4';
element4.symbol = 'be';


var btn = document.querySelector(element4.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element4.elementname; 
    atomicmass.innerHTML = element4.atomicmass;
    protons.innerHTML = element4.protons;
    electrons.innerHTML = element4.electrons; 
    neutrons.innerHTML = element4.neutrons; 
    fusion.innerHTML = element4.fusion;
    boiling.innerHTML = element4.boiling; 
    symbolnumber.innerHTML = element4.symbolnumber; 
    symbol.innerHTML = element4.symbol; 
});