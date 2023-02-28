var element59 = new Object();
element59.btn = '#e59';
element59.elementname = 'praseodymiun';
element59.atomicmass = '140.90766 u';
element59.protons = '59';
element59.electrons = '59';
element59.neutrons = '';
element59.fusion = '1204 K';
element59.boiling = '3793 K';
element59.symbolnumber = '59';
element59.symbol = 'pr';


var btn = document.querySelector(element59.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element59.elementname; 
    atomicmass.innerHTML = element59.atomicmass;
    protons.innerHTML = element59.protons;
    electrons.innerHTML = element59.electrons; 
    neutrons.innerHTML = element59.neutrons; 
    fusion.innerHTML = element59.fusion;
    boiling.innerHTML = element59.boiling; 
    symbolnumber.innerHTML = element59.symbolnumber; 
    symbol.innerHTML = element59.symbol; 
});