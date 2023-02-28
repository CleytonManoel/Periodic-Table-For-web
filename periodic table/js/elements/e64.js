var element64 = new Object();
element64.btn = '#e64';
element64.elementname = 'gadolinium';
element64.atomicmass = '157.2 u';
element64.protons = '64';
element64.electrons = '64';
element64.neutrons = '93';
element64.fusion = '1586 K';
element64.boiling = '3546 K';
element64.symbolnumber = '64';
element64.symbol = 'gd';


var btn = document.querySelector(element64.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element64.elementname; 
    atomicmass.innerHTML = element64.atomicmass;
    protons.innerHTML = element64.protons;
    electrons.innerHTML = element64.electrons; 
    neutrons.innerHTML = element64.neutrons; 
    fusion.innerHTML = element64.fusion;
    boiling.innerHTML = element64.boiling; 
    symbolnumber.innerHTML = element64.symbolnumber; 
    symbol.innerHTML = element64.symbol; 
});