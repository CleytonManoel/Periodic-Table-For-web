var element111 = new Object();
element111.btn = '#e111';
element111.elementname = 'roentgenium';
element111.atomicmass = '282.169 u';
element111.protons = '111';
element111.electrons = '111';
element111.neutrons = '171';
element111.fusion = '---';
element111.boiling = '---';
element111.symbolnumber = '#e111';
element111.symbol = 'rg';


var btn = document.querySelector(element111.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element111.elementname; 
    atomicmass.innerHTML = element111.atomicmass;
    protons.innerHTML = element111.protons;
    electrons.innerHTML = element111.electrons; 
    neutrons.innerHTML = element111.neutrons; 
    fusion.innerHTML = element111.fusion;
    boiling.innerHTML = element111.boiling; 
    symbolnumber.innerHTML = element111.symbolnumber; 
    symbol.innerHTML = element111.symbol; 
});