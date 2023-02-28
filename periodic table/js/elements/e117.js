var element117 = new Object();
element117.btn = '#e117';
element117.elementname = 'tennessine';
element117.atomicmass = '294.211 u';
element117.protons = '117';
element117.electrons = '117';
element117.neutrons = '177';
element117.fusion = '---';
element117.boiling = '---';
element117.symbolnumber = '117';
element117.symbol = 'ts';


var btn = document.querySelector(element117.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element117.elementname; 
    atomicmass.innerHTML = element117.atomicmass;
    protons.innerHTML = element117.protons;
    electrons.innerHTML = element117.electrons; 
    neutrons.innerHTML = element117.neutrons; 
    fusion.innerHTML = element117.fusion;
    boiling.innerHTML = element117.boiling; 
    symbolnumber.innerHTML = element117.symbolnumber; 
    symbol.innerHTML = element117.symbol; 
});