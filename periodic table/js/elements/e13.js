var element13 = new Object();
element13.btn = '#e13';
element13.elementname = 'aluminum';
element13.atomicmass = '26.981538 u';
element13.protons = '13';
element13.electrons = '13';
element13.neutrons = '14';
element13.fusion = '933.437 K';
element13.boiling = '2792 K';
element13.symbolnumber = '13';
element13.symbol = 'al';


var btn = document.querySelector(element13.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element13.elementname; 
    atomicmass.innerHTML = element13.atomicmass;
    protons.innerHTML = element13.protons;
    electrons.innerHTML = element13.electrons; 
    neutrons.innerHTML = element13.neutrons; 
    fusion.innerHTML = element13.fusion;
    boiling.innerHTML = element13.boiling; 
    symbolnumber.innerHTML = element13.symbolnumber; 
    symbol.innerHTML = element13.symbol; 
});