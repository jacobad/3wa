'use strict'

var HT= parseFloat(window.prompt("HT"));
var TVA= HT * 0.20;

var TTC =  TVA +  HT;

document.write('<p>Pour un montant HT de ' + HT + ' € il y a ' + TVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + TTC + ' €.</p>');
 