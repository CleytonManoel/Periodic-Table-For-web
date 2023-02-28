var element12 = new Object();
element12.btn = '#e12';
element12.elementname = 'magnesium';
element12.atomicmass = '24.305 u';
element12.protons = '12';
element12.electrons = '12';
element12.neutrons = '12';
element12.fusion = '923 K';
element12.boiling = '1363 K';
element12.symbolnumber = '12';
element12.symbol = 'mg';


var btn = document.querySelector(element12.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element12.elementname; 
    atomicmass.innerHTML = element12.atomicmass;
    protons.innerHTML = element12.protons;
    electrons.innerHTML = element12.electrons; 
    neutrons.innerHTML = element12.neutrons; 
    fusion.innerHTML = element12.fusion;
    boiling.innerHTML = element12.boiling; 
    symbolnumber.innerHTML = element12.symbolnumber; 
    symbol.innerHTML = element12.symbol; 
});