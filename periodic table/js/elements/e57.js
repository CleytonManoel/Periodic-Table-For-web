var element57 = new Object();
element57.btn = '#e57';
element57.elementname = 'lanthanum';
element57.atomicmass = '138.9055 u';
element57.protons = '57';
element57.electrons = '57';
element57.neutrons = '81';
element57.fusion = '1191 K';
element57.boiling = '3737 K';
element57.symbolnumber = '57';
element57.symbol = 'la';


var btn = document.querySelector(element57.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element57.elementname; 
    atomicmass.innerHTML = element57.atomicmass;
    protons.innerHTML = element57.protons;
    electrons.innerHTML = element57.electrons; 
    neutrons.innerHTML = element57.neutrons; 
    fusion.innerHTML = element57.fusion;
    boiling.innerHTML = element57.boiling; 
    symbolnumber.innerHTML = element57.symbolnumber; 
    symbol.innerHTML = element57.symbol; 
});