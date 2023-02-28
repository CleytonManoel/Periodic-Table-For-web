var element93 = new Object();
element93.btn = '#e93';
element93.elementname = 'neptunium';
element93.atomicmass = '237.048172 u';
element93.protons = '93';
element93.electrons = '93';
element93.neutrons = '144';
element93.fusion = '917 K';
element93.boiling = '4175 K';
element93.symbolnumber = '93';
element93.symbol = 'np';


var btn = document.querySelector(element93.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element93.elementname; 
    atomicmass.innerHTML = element93.atomicmass;
    protons.innerHTML = element93.protons;
    electrons.innerHTML = element93.electrons; 
    neutrons.innerHTML = element93.neutrons; 
    fusion.innerHTML = element93.fusion;
    boiling.innerHTML = element93.boiling; 
    symbolnumber.innerHTML = element93.symbolnumber; 
    symbol.innerHTML = element93.symbol; 
});