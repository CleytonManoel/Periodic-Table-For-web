var element6 = new Object();
element6.btn = '#e6';
element6.elementname = 'carbon';
element6.atomicmass = '12.011 u';
element6.protons = '6';
element6.electrons = '6';
element6.neutrons = '6';
element6.fusion = '3823 K';
element6.boiling = '4098 K';
element6.symbolnumber = '6';
element6.symbol = 'c';


var btn = document.querySelector(element6.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element6.elementname; 
    atomicmass.innerHTML = element6.atomicmass;
    protons.innerHTML = element6.protons;
    electrons.innerHTML = element6.electrons; 
    neutrons.innerHTML = element6.neutrons; 
    fusion.innerHTML = element6.fusion;
    boiling.innerHTML = element6.boiling; 
    symbolnumber.innerHTML = element6.symbolnumber; 
    symbol.innerHTML = element6.symbol; 
});