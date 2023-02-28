var element86 = new Object();
element86.btn = '#e86';
element86.elementname = 'radon';
element86.atomicmass = '222.01758 u';
element86.protons = '86';
element86.electrons = '86';
element86.neutrons = '136';
element86.fusion = '202 K';
element86.boiling = '211.45 K';
element86.symbolnumber = '86';
element86.symbol = 'rn';


var btn = document.querySelector(element86.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element86.elementname; 
    atomicmass.innerHTML = element86.atomicmass;
    protons.innerHTML = element86.protons;
    electrons.innerHTML = element86.electrons; 
    neutrons.innerHTML = element86.neutrons; 
    fusion.innerHTML = element86.fusion;
    boiling.innerHTML = element86.boiling; 
    symbolnumber.innerHTML = element86.symbolnumber; 
    symbol.innerHTML = element86.symbol; 
});