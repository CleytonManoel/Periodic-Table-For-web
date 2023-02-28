var element116 = new Object();
element116.btn = '#e116';
element116.elementname = 'livermorium';
element116.atomicmass = '293.205 u';
element116.protons = '116';
element116.electrons = '116';
element116.neutrons = '177';
element116.fusion = '---';
element116.boiling = '---';
element116.symbolnumber = '116';
element116.symbol = 'lv';


var btn = document.querySelector(element116.btn)


btn.addEventListener('click', function () {

    info.style.display = 'block';
    elementname.innerHTML = element116.elementname;
    atomicmass.innerHTML = element116.atomicmass;
    protons.innerHTML = element116.protons;
    electrons.innerHTML = element116.electrons;
    neutrons.innerHTML = element116.neutrons;
    fusion.innerHTML = element116.fusion;
    boiling.innerHTML = element116.boiling;
    symbolnumber.innerHTML = element116.symbolnumber;
    symbol.innerHTML = element116.symbol;
});