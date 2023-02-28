var element89 = new Object();
element89.btn = '#e89';
element89.elementname = 'actinium';
element89.atomicmass = '227.02775 u';
element89.protons = '89';
element89.electrons = '89';
element89.neutrons = '138';
element89.fusion = '1324 K';
element89.boiling = '3471 K';
element89.symbolnumber = '89';
element89.symbol = 'ac';


var btn = document.querySelector(element89.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element89.elementname; 
    atomicmass.innerHTML = element89.atomicmass;
    protons.innerHTML = element89.protons;
    electrons.innerHTML = element89.electrons; 
    neutrons.innerHTML = element89.neutrons; 
    fusion.innerHTML = element89.fusion;
    boiling.innerHTML = element89.boiling; 
    symbolnumber.innerHTML = element89.symbolnumber; 
    symbol.innerHTML = element89.symbol; 
});