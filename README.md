# UseRef no React

### O hook useRef é uma função oferecida pelo React que permite a criação de referências mutáveis que podem ser associadas a elementos DOM ou a outros valores que persistem entre as renderizações de um componente. Ele é frequentemente usado para acessar ou manipular elementos diretamente, sem a necessidade de re-renderizar o componente quando ocorrem mudanças na referência. Além disso, o useRef pode ser usado para manter dados que não causam re-renderizações, agindo como uma forma de armazenamento persistente para valores que precisam ser mantidos ao longo do ciclo de vida do componente.

### Usando em uma chamada de API

Quando combinado com setTimeout, você pode atrasar a execução de determinada ação, como uma chamada de API.

Ao usar o useRef para criar uma referência, você pode armazenar um valor que persiste entre as renderizações do componente. Isso é útil quando você precisa rastrear um intervalo de tempo entre as ações, como em uma chamada de API com atraso.

Quando é usando um onChange na tag input, por exemplo, a cada inserção de dados no input, a página será renderizada.

Ao combinar o useRef dentro do useEffect, passando a chamada da API dentro de função de setTimeout do JavaScript, podemos setar um tempo dentro da função de setTimeout e quando 
for digitado a busca no campo input, ele só chamará a API depois do tempo que foi determinado  
dentro da função setTimeout, fazendo com que a tela só seja renderizada quando a função for chamada.
