var element91 = new Object();
element91.btn = '#e91';
element91.elementname = 'protactinium';
element91.atomicmass = '231.03588 u';
element91.protons = '91';
element91.electrons = '91';
element91.neutrons = '170';
element91.fusion = '1845 K';
element91.boiling = '4300.1 K';
element91.symbolnumber = '91';
element91.symbol = 'pa';


var btn = document.querySelector(element91.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element91.elementname; 
    atomicmass.innerHTML = element91.atomicmass;
    protons.innerHTML = element91.protons;
    electrons.innerHTML = element91.electrons; 
    neutrons.innerHTML = element91.neutrons; 
    fusion.innerHTML = element91.fusion;
    boiling.innerHTML = element91.boiling; 
    symbolnumber.innerHTML = element91.symbolnumber; 
    symbol.innerHTML = element91.symbol; 
});