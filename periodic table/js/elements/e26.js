var element26 = new Object();
element26.btn = '#e26';
element26.elementname = 'iron';
element26.atomicmass = '55.84 u';
element26.protons = '26';
element26.electrons = '26';
element26.neutrons = '29';
element26.fusion = '1811 K';
element26.boiling = '3134 K';
element26.symbolnumber = '26';
element26.symbol = 'fe';


var btn = document.querySelector(element26.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element26.elementname; 
    atomicmass.innerHTML = element26.atomicmass;
    protons.innerHTML = element26.protons;
    electrons.innerHTML = element26.electrons; 
    neutrons.innerHTML = element26.neutrons; 
    fusion.innerHTML = element26.fusion;
    boiling.innerHTML = element26.boiling; 
    symbolnumber.innerHTML = element26.symbolnumber; 
    symbol.innerHTML = element26.symbol; 
});