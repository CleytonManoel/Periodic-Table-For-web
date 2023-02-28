var element94 = new Object();
element94.btn = '#e94';
element94.elementname = 'plutonium';
element94.atomicmass = '244.06420 u';
element94.protons = '94';
element94.electrons = '94';
element94.neutrons = '150';
element94.fusion = '913 K';
element94.boiling = '3501 K';
element94.symbolnumber = '94';
element94.symbol = 'pu';


var btn = document.querySelector(element94.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element94.elementname; 
    atomicmass.innerHTML = element94.atomicmass;
    protons.innerHTML = element94.protons;
    electrons.innerHTML = element94.electrons; 
    neutrons.innerHTML = element94.neutrons; 
    fusion.innerHTML = element94.fusion;
    boiling.innerHTML = element94.boiling; 
    symbolnumber.innerHTML = element94.symbolnumber; 
    symbol.innerHTML = element94.symbol; 
});