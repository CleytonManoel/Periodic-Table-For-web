var element22 = new Object();
element22.btn = '#e22';
element22.elementname = 'titanium';
element22.atomicmass = '47.867 u';
element22.protons = '22';
element22.electrons = '22';
element22.neutrons = '25';
element22.fusion = '1941 K';
element22.boiling = '3560 K';
element22.symbolnumber = '22';
element22.symbol = 'ti';


var btn = document.querySelector(element22.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element22.elementname; 
    atomicmass.innerHTML = element22.atomicmass;
    protons.innerHTML = element22.protons;
    electrons.innerHTML = element22.electrons; 
    neutrons.innerHTML = element22.neutrons; 
    fusion.innerHTML = element22.fusion;
    boiling.innerHTML = element22.boiling; 
    symbolnumber.innerHTML = element22.symbolnumber; 
    symbol.innerHTML = element22.symbol; 
});