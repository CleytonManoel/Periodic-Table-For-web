var element15 = new Object();
element15.btn = '#e15';
element15.elementname = 'phosphorus';
element15.atomicmass = '30.97376200 u';
element15.protons = '15';
element15.electrons = '15';
element15.neutrons = '15';
element15.fusion = '317.3 K';
element15.boiling = '553.65 K';
element15.symbolnumber = '15';
element15.symbol = 'p';


var btn = document.querySelector(element15.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element15.elementname; 
    atomicmass.innerHTML = element15.atomicmass;
    protons.innerHTML = element15.protons;
    electrons.innerHTML = element15.electrons; 
    neutrons.innerHTML = element15.neutrons; 
    fusion.innerHTML = element15.fusion;
    boiling.innerHTML = element15.boiling; 
    symbolnumber.innerHTML = element15.symbolnumber; 
    symbol.innerHTML = element15.symbol; 
});