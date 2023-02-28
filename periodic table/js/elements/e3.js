var element3 = new Object();
element3.btn = '#e3';
element3.elementname = 'lithium';
element3.atomicmass = '6.941 u';
element3.protons = '3';
element3.electrons = '3';
element3.neutrons = '3';
element3.fusion = '453.65 K';
element3.boiling = '1615 K';
element3.symbolnumber = '3';
element3.symbol = 'li';


var btn = document.querySelector(element3.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element3.elementname; 
    atomicmass.innerHTML = element3.atomicmass;
    protons.innerHTML = element3.protons;
    electrons.innerHTML = element3.electrons; 
    neutrons.innerHTML = element3.neutrons; 
    fusion.innerHTML = element3.fusion;
    boiling.innerHTML = element3.boiling; 
    symbolnumber.innerHTML = element3.symbolnumber; 
    symbol.innerHTML = element3.symbol; 
});



