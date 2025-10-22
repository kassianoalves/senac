let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
document.write(matriz+'<br>');


  const matri = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  document.write("<table>"); // Inicia uma tabela para organizar
  for (let i = 0; i < matri.length; i++) {
    document.write("<tr>"); // Inicia uma nova linha
    for (let j = 0; j < matri[i].length; j++) {
      document.write("<td>" + matri[i][j] + "</td>"); // Escreve o elemento em uma célula
    }
    document.write("</tr>"); // Fecha a linha
  }
  document.write("</table>");