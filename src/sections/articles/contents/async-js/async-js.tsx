import { ArticleHeader } from "@/shared/components/article/article-header/ArticleHeader";
import { ArticleWrapper } from "@/shared/components/wrappers/article-wrapper/ArticleWrapper";
import { articlesListData } from "@/shared/datas/articles-data";

export const AsyncJsArticle = () => {
  const articleData = articlesListData[0];

  return (
    <ArticleWrapper>
      <ArticleHeader
        date={articleData.date}
        title={articleData.title}
        tags={articleData.tags}
      />
      <article className="text-gray-500">
        <p className="mb-5">
          O JavaScript é, por padrão, uma linguagem de programação de thread única (single-threaded). Isso significa que, sem o uso de conceitos assíncronos, o código é executado linha por linha, em uma sequência. Se uma função demora muito para ser concluída, ela “bloqueia” a execução de todo o código seguinte, travando a aplicação.
        </p>
        <p className="mb-5">
          Essa característica é um problema para operações que dependem de tempo, como requisições de rede, leitura de arquivos ou acesso a bancos de dados, que podem levar milissegundos ou até segundos para serem finalizadas. É aqui que entram os conceitos de programação assíncrona.
        </p>
        <p className="mb-5">
          Em ambientes como o Node.js, que frequentemente lidam com operações de I/O (Input/Output), a natureza assíncrona do JavaScript é um de seus maiores trunfos. O Node.js usa um mecanismo chamado Event Loop, que permite que a aplicação continue executando outras tarefas enquanto espera que operações demoradas sejam concluídas.
        </p>
        <p className="mb-5">
          Quando uma operação assíncrona é iniciada, o Node.js a “despacha” para ser executada em segundo plano e, em vez de esperar, continua processando a próxima linha de código. Quando a operação em segundo plano é concluída, ela coloca uma “notificação” na fila de eventos. O Event Loop monitora essa fila e, assim que a pilha de execução principal estiver vazia, ele retira essa notificação e executa a função de retorno (callback) associada a ela.
        </p>
        <p className="mb-5">
          Existem três principais maneiras de trabalhar com assincronicidade em JavaScript:
        </p>
        <ul className="mb-5 list-disc list-inside">
          <li>
            Callbacks: A forma mais antiga. Você passa uma função como argumento para outra, e essa função é chamada de volta (callback) quando a operação assíncrona termina. O problema é que isso pode levar a um “inferno de callbacks” (callback hell), onde o código fica aninhado e difícil de ler.
          </li>
          <li>
            Promises: Uma solução mais moderna. Uma Promise representa a conclusão eventual (ou falha) de uma operação assíncrona e permite encadear operações usando os métodos <code>.then()</code> e <code>.catch()</code>, tornando o código mais legível.
          </li>
          <li>
            Async/Await: A sintaxe mais recente e popular. Construída sobre Promises, ela permite escrever código assíncrono que parece síncrono. A palavra-chave <code>async</code> define uma função assíncrona e <code>await</code> “pausa” a execução da função até que a Promise seja resolvida, mas sem bloquear a thread principal da aplicação.
          </li>
        </ul>
        <p className="mb-5">
          Com o uso dessas ferramentas, o JavaScript em Node.js se torna altamente eficiente para tarefas que exigem muita I/O, garantindo que a sua aplicação seja responsiva e escalável.
        </p>
      </article>
    </ArticleWrapper>
  );
};