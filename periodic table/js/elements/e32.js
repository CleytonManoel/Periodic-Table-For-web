var element32 = new Object();
element32.btn = '#e32';
element32.elementname = 'germanium';
element32.atomicmass = '72.63 u';
element32.protons = '32';
element32.electrons = '32';
element32.neutrons = '40';
element32.fusion = '1211.4 K';
element32.boiling = '3106 K';
element32.symbolnumber = '32';
element32.symbol = 'ge';


var btn = document.querySelector(element32.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element32.elementname; 
    atomicmass.innerHTML = element32.atomicmass;
    protons.innerHTML = element32.protons;
    electrons.innerHTML = element32.electrons; 
    neutrons.innerHTML = element32.neutrons; 
    fusion.innerHTML = element32.fusion;
    boiling.innerHTML = element32.boiling; 
    symbolnumber.innerHTML = element32.symbolnumber; 
    symbol.innerHTML = element32.symbol; 
});