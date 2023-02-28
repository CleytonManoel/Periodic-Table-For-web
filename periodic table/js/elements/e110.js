var element110 = new Object();
element110.btn = '#e110';
element110.elementname = 'darmstadtium';
element110.atomicmass = '282.166 u';
element110.protons = '110';
element110.electrons = '110';
element110.neutrons = '172';
element110.fusion = '---';
element110.boiling = '---';
element110.symbolnumber = '#e110';
element110.symbol = 'ds';


var btn = document.querySelector(element110.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element110.elementname; 
    atomicmass.innerHTML = element110.atomicmass;
    protons.innerHTML = element110.protons;
    electrons.innerHTML = element110.electrons; 
    neutrons.innerHTML = element110.neutrons; 
    fusion.innerHTML = element110.fusion;
    boiling.innerHTML = element110.boiling; 
    symbolnumber.innerHTML = element110.symbolnumber; 
    symbol.innerHTML = element110.symbol; 
});