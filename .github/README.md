## 🖥️ Projeto

O FocusTimer 2.0 é um desafio proposto pela trilha Explorer da Rocketseat. É um projeto em JavaScript projetado para ajudar os usuários a gerenciar seu tempo de forma eficiente, utilizando a técnica Pomodoro. O timer é totalmente interativo, com recursos que permitem ao usuário ajustar o tempo de foco, alterarnar entre diferentes modos de áudio ambiente, e escolher entre modos de exibição, como tema claro ou tema escuro.

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML
- CSS
- Javascript
- Git e Github

## ⏱️ Funcionalidades Principais

- **Temporizador Personalizável:** O usuário pode definir o tempo de foco e de descanso, e o temporizador conta regressivamente, exibindo o tempo restante na interface.

- **Modos de Áudio:** O projeto oferece diferentes sons de fundo, como floresta, chuva, cafeteria e lareira, que podem ser ativados durante o tempo de foco para melhorar a concentração. Os sons tocam em loop e podem ser alternados ou silenciados conforme necessário.

- **Alternância de Modo (Claro/Escuro):** O usuário pode alternar entre os modos claro e escuro para ajustar a interface de acordo com sua preferência ou ambiente de trabalho.

- **Controle Interativo:** O usuário interage com a interface por meio de botões que permitem iniciar, pausar, resetar o temporizador, aumentar ou diminuir o tempo em 5 minutos, e alternar os modos de áudio e exibição.

- **Feedback Sonoro:** Sons específicos são reproduzidos durante as interações do usuário, como ao iniciar ou resetar o temporizador.


## 💡 Técnicas Utilizadas

- **Manipulação do DOM:** O projeto usa manipulação direta do DOM para atualizar a interface do usuário, como mostrar o tempo restante no temporizador, alternar entre modos claro e escuro, e interagir com botões e controles.

- **Modularização em JS:** O projeto está dividido em múltiplos módulos JavaScript, cada um responsável por uma parte específica da funcionalidade (como manipulação do DOM, gerenciamento de estado, controle de áudio e temporizador). Isso facilita a manutenção e a escalabilidade do código.

- **Event Listeners:** São usados para capturar as interações do usuário, nesse projeto capturamos através do click e identificamos pelo `data-action`.

- **Controle de Estado Global:** É utilizado um controle de estado global para manter o estado atual do temporizador, incluindo o tempo restante, se o temporizador está em execução, e se o áudio está silenciado. Isso permite que diferentes partes da aplicação acessem e modifiquem o estado de maneira consistente.

- **Controle de Áudio:** O projeto inclui o uso de objetos `Audio` para gerenciar a reprodução de sons de fundo e efeitos sonoros. Os sons podem ser controlados, alternados e tocados em loop, oferecendo uma experiência auditiva personalizada ao usuário.

- **Temas:** A alternância entre modos claro e escuro é feita através da manipulação de classes CSS no elemento raiz `<html>`, permitindo que o usuário personalize a aparência da aplicação.

- **Phosphor Icons:** Utilização de ícones personalizados usando o `Phosphor Icons`.