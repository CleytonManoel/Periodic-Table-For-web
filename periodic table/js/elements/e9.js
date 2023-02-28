var element9 = new Object();
element9.btn = '#e9';
element9.elementname = 'fluorine';
element9.atomicmass = '18.99840316 u';
element9.protons = '9';
element9.electrons = '9';
element9.neutrons = '7';
element9.fusion = '53.53 K';
element9.boiling = '85.03 K';
element9.symbolnumber = '9';
element9.symbol = 'f';


var btn = document.querySelector(element9.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element9.elementname; 
    atomicmass.innerHTML = element9.atomicmass;
    protons.innerHTML = element9.protons;
    electrons.innerHTML = element9.electrons; 
    neutrons.innerHTML = element9.neutrons; 
    fusion.innerHTML = element9.fusion;
    boiling.innerHTML = element9.boiling; 
    symbolnumber.innerHTML = element9.symbolnumber; 
    symbol.innerHTML = element9.symbol; 
});