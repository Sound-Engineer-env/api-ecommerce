## Motivación y contexto
<!---->

<!---
¿Por qué hay que hacer este cambio?
¿Qué problema resuelve?
¿Qué nueva funcionalidad implementa?
-->

## ¿Cómo fue probado?
<!----->

<!--- Describí, si es necesario, cómo probaste este cambio. -->

## Checklist

- [ ] Hice un __code review__ de mi propio PR.
- [ ] He __comentado__ el código, especialmente en lugares difíciles de comprender, [respondiendo al _why_ y no al _how_](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/).
- [ ] He agregado __tests__ que prueban que mi cambio funciona tanto en los buenos casos como en los malos.
- [ ] He agregado tests unitarios donde corresponde.
- [ ] He agregado tests de integración donde corresponde.


---------------------------------

Convención de merge:
<table style="width:100%">
  <tr>
    <th>Branch desde</th>
    <th>Branch hacia</th>
    <th>Merge commit</th>
    <th>Squash and Merge</th>
  </tr>
  <tr>
    <td>feature/</td>
    <td>develop</td>
    <td>&#10060</td>	
    <td>&#9989</td>
  </tr>
  <tr>
    <td>hotfix/</td>
    <td>master - release/</td>
    <td>&#10060</td>
    <td>&#9989</td>
  </tr>
  <tr>
    <td>fix/</td>
    <td>release/</td>
    <td>&#10060</td>
    <td>&#9989</td>
  </tr>
  <tr>
    <td>release/</td>
    <td>master</td>
    <td>&#9989</td>
    <td>&#10060</td>
  </tr>
  <tr>
    <td>backport/</td>
    <td>develop</td>
    <td>&#9989</td>
    <td>&#10060</td>
  </tr>
</table>

¿Qué pasa si hago <b>merge commit</b> cuando debía hacer un <b>squash</b>?
- Nada grave, simplemente nos estaríamos llevando commits innecesarios al branch donde mergeemos, ejemplo, si en mi branch feature/ tengo 15 commits y los comentarios no son descriptivos (fix, fix tests, working) me estaría llevando todos esos a develop, cuando con el Squash voy a llevar uno solo.

¿Qué pasa si hago <b>Squash</b> cuando debía hacer un <b>merge commit</b>?
- En este caso no estaríamos cumpliendo la función que esperamos que es llevar los commits de un branch a otro para emparejarlos, por ejemplo, cuando mergeamos una release a master, el objetivo es dejar parejos develop y master, y si usamos squash como estrategia de merge van a seguir teniendo commits distintos, por lo que en el siguiente release podríamos tener conflictos.