/*
> Maior
>= Maior ou igual
< Menor
<= Menor igual
== igualdade (valor)
=== igualdade restrita (valor e tipo)
!= Diferente
!=== diferente restrita

&& AND E
|| or
! not

FALSY (apenas false é literal, o restante js avalia como falsy)
*false
0
``
""
''
numm/undefined
NaN
*/

console.log(NaN && "Luiz" && "Maria"); //Ele causa um curto circuito e exibe o FALSY, retorna o primeiro valor falso encontrado e interrompe
console.log(0 || false || null || "Luiz" || true); //Retorna o valor verdadeiro, ele interrompe. Quando tudo for falso, retorna o ultimo
