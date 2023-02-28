var element85 = new Object();
element85.btn = '#e85';
element85.elementname = 'astatine';
element85.atomicmass = '209.98715 u';
element85.protons = '85';
element85.electrons = '85';
element85.neutrons = '124';
element85.fusion = '575 K';
element85.boiling = ' 610.15 K';
element85.symbolnumber = '85';
element85.symbol = 'at';


var btn = document.querySelector(element85.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element85.elementname; 
    atomicmass.innerHTML = element85.atomicmass;
    protons.innerHTML = element85.protons;
    electrons.innerHTML = element85.electrons; 
    neutrons.innerHTML = element85.neutrons; 
    fusion.innerHTML = element85.fusion;
    boiling.innerHTML = element85.boiling; 
    symbolnumber.innerHTML = element85.symbolnumber; 
    symbol.innerHTML = element85.symbol; 
});