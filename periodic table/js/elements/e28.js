var element28 = new Object();
element28.btn = '#e28';
element28.elementname = 'nickel';
element28.atomicmass = '58.693 u';
element28.protons = '28';
element28.electrons = '28';
element28.neutrons = '30';
element28.fusion = '1728 K';
element28.boiling = '3186 K';
element28.symbolnumber = '28';
element28.symbol = 'ni';


var btn = document.querySelector(element28.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element28.elementname; 
    atomicmass.innerHTML = element28.atomicmass;
    protons.innerHTML = element28.protons;
    electrons.innerHTML = element28.electrons; 
    neutrons.innerHTML = element28.neutrons; 
    fusion.innerHTML = element28.fusion;
    boiling.innerHTML = element28.boiling; 
    symbolnumber.innerHTML = element28.symbolnumber; 
    symbol.innerHTML = element28.symbol; 
});