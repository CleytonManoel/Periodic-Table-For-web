var element99 = new Object();
element99.btn = '#e99';
element99.elementname = 'einsteinium';
element99.atomicmass = '252.0830 u';
element99.protons = '99';
element99.electrons = '99';
element99.neutrons = '153';
element99.fusion = '1133 K';
element99.boiling = '1269.2 K';
element99.symbolnumber = '99';
element99.symbol = 'es';


var btn = document.querySelector(element99.btn)


btn.addEventListener('click',function(){

    info.style.display = 'block';
    elementname.innerHTML = element99.elementname; 
    atomicmass.innerHTML = element99.atomicmass;
    protons.innerHTML = element99.protons;
    electrons.innerHTML = element99.electrons; 
    neutrons.innerHTML = element99.neutrons; 
    fusion.innerHTML = element99.fusion;
    boiling.innerHTML = element99.boiling; 
    symbolnumber.innerHTML = element99.symbolnumber; 
    symbol.innerHTML = element99.symbol; 
});