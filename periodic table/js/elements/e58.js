var element58 = new Object();
element58.btn = '#e58';
element58.elementname = 'cerium';
element58.atomicmass = '140.116 u';
element58.protons = '58';
element58.electrons = '58';
element58.neutrons = '82';
element58.fusion = '1071 K';
element58.boiling = '3697 K';
element58.symbolnumber = '58';
element58.symbol = 'ce';


var btn = document.querySelector(element58.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element58.elementname; 
    atomicmass.innerHTML = element58.atomicmass;
    protons.innerHTML = element58.protons;
    electrons.innerHTML = element58.electrons; 
    neutrons.innerHTML = element58.neutrons; 
    fusion.innerHTML = element58.fusion;
    boiling.innerHTML = element58.boiling; 
    symbolnumber.innerHTML = element58.symbolnumber; 
    symbol.innerHTML = element58.symbol; 
});