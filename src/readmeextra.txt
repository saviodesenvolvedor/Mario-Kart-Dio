Aqui está um relatório detalhado sobre os problemas enfrentados, as correções feitas e os aprendizados no processo. Esse relatório é ideal para acompanhamento no GitHub e mostra o seu progresso no aprendizado de programação.

---

# Relatório de Aprendizado e Correções

## Objetivo
Este relatório documenta os erros encontrados e as correções feitas ao desenvolver um jogo de corrida em JavaScript. 
Utilizei uma ferramenta de assistência para identificar e resolver esses problemas, o que faz parte do meu processo de aprendizado. O objetivo é mostrar o progresso e os passos tomados para resolver cada situação, assim como aprender mais sobre JavaScript.

---

### 1. **Erro na Aplicação do Boost de Pontuação**
   - **Problema:** O boost não estava sendo aplicado corretamente aos jogadores. Mesmo quando sorteado, o valor de boost retornava `0` ao invés do esperado.
   - **Solução:** 
     - Verificou-se que, na função `getRandomBoost()`, as condições de aplicação de boost estavam incorretas ou pouco claras. A função foi ajustada para incluir a verificação `if((boostONLINE.boostON1 || boostONLINE.boostON2) && Brandom < 0.22)`, o que garantiu que o boost fosse aplicado aleatoriamente e apenas uma vez durante o confronto.
     - **Explicação do Aprendizado:** Condições em `if` precisam ser específicas e lógicas para garantir que todas as variáveis envolvidas tenham o comportamento esperado. Aqui, aprendi a estruturar corretamente uma condição com vários operadores lógicos.

### 2. **Erro com [object Object] na Exibição de Variáveis**
   - **Problema:** Ao exibir o resultado dos cálculos com o boost, o console mostrava `[object Object]` em vez do valor numérico do boost.
   - **Solução:** 
     - Verifiquei que o boost estava sendo referenciado diretamente como objeto. Para resolver, foi garantido que `boost.BOOST` fosse passado diretamente à função `logARollResult`, onde o valor numérico correto é somado aos outros valores no cálculo.
     - **Explicação do Aprendizado:** Sempre que se trata de objetos, é necessário acessar diretamente suas propriedades (por exemplo, `boost.BOOST`) para exibir ou usar os valores numéricos.

### 3. **Correção de Exibição de Resultados dos Confrontos**
   - **Problema:** No código, as mensagens de exibição de confronto (`powerResult1` e `powerResult2`) eram inconsistentes, especialmente nos casos de empate.
   - **Solução:** 
     - Refatoramos a comparação e adicionamos uma mensagem mais clara para os empates, fazendo uso da condição `powerResult2 === powerResult1 ? "Drawn confrontation! No points were lost!" : ""`.
     - **Explicação do Aprendizado:** O uso de operadores ternários é útil para simplificar a exibição de mensagens quando uma condição precisa ser verificada antes da exibição. Também aprendi a organizar as condições para evitar repetições desnecessárias.

### 4. **Correção de Exibição na Função `logARollResult`**
   - **Problema:** Os cálculos finais de boost e armamento na função `logARollResult` estavam incorretos, resultando em exibições confusas.
   - **Solução:** 
     - A função foi ajustada para somar corretamente cada parâmetro: `diceResult + attribute + army + boost`.
     - **Explicação do Aprendizado:** Quando se trata de uma função com múltiplos parâmetros, como essa, é importante verificar a ordem e os valores passados. Somar valores ao exibir o resultado ajuda a manter o código compreensível.

### 5. **Melhoria de Legibilidade e Otimização do Código**
   - **Problema:** O código inicial apresentava condições longas e repetitivas, dificultando a legibilidade.
   - **Solução:** 
     - Foram removidas condições duplicadas e simplificadas partes redundantes do código.
     - **Explicação do Aprendizado:** Melhorar a legibilidade do código facilita a identificação de erros e a manutenção. Além disso, simplificar condições ajuda a manter o código organizado e eficiente.

### 6. **Exibição dos Pontos e Declaração de Vencedor**
   - **Problema:** A exibição final dos pontos estava correta, mas o código não cobria todas as possibilidades de empate.
   - **Solução:** 
     - Atualizamos a função `declaredWinner` para incluir uma mensagem clara em caso de empate total entre os dois jogadores.
     - **Explicação do Aprendizado:** Escrever uma função que trate todas as possibilidades garante um fluxo claro e direto de resultados, especialmente em jogos onde várias condições de vitória são possíveis.

---

Esses foram os principais desafios encontrados e corrigidos no desenvolvimento do código. Cada correção adicionou um entendimento importante sobre como escrever e organizar o código de maneira funcional e eficaz.