var element50 = new Object();
element50.btn = '#e50';
element50.elementname = 'tin';
element50.atomicmass = '118.71 u';
element50.protons = '50';
element50.electrons = '50';
element50.neutrons = '68';
element50.fusion = '505.08 K';
element50.boiling = '2875 K';
element50.symbolnumber = '50';
element50.symbol = 'sn';


var btn = document.querySelector(element50.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element50.elementname; 
    atomicmass.innerHTML = element50.atomicmass;
    protons.innerHTML = element50.protons;
    electrons.innerHTML = element50.electrons; 
    neutrons.innerHTML = element50.neutrons; 
    fusion.innerHTML = element50.fusion;
    boiling.innerHTML = element50.boiling; 
    symbolnumber.innerHTML = element50.symbolnumber; 
    symbol.innerHTML = element50.symbol; 
});