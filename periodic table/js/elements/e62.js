var element62 = new Object();
element62.btn = '#e62';
element62.elementname = 'samarium';
element62.atomicmass = '150.4 u';
element62.protons = '62';
element62.electrons = '62';
element62.neutrons = '88';
element62.fusion = '1347 K';
element62.boiling = '2067 K';
element62.symbolnumber = '62';
element62.symbol = 'sm';


var btn = document.querySelector(element62.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element62.elementname; 
    atomicmass.innerHTML = element62.atomicmass;
    protons.innerHTML = element62.protons;
    electrons.innerHTML = element62.electrons; 
    neutrons.innerHTML = element62.neutrons; 
    fusion.innerHTML = element62.fusion;
    boiling.innerHTML = element62.boiling; 
    symbolnumber.innerHTML = element62.symbolnumber; 
    symbol.innerHTML = element62.symbol; 
});