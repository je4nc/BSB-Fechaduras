BSB FECHADURAS ELETRÔNICAS — PROJETO WEB
========================================

1. COMO EXECUTAR
   Abra index.html no navegador ou use Live Server no VS Code.

2. ORGANIZAÇÃO DOS ARQUIVOS
   index.html  - Estrutura e conteúdo das seções.
   style.css   - Cores, tipografia, layout e responsividade.
   script.js   - Menu mobile, links de WhatsApp e controles dos carrosséis.
   lock.svg    - Ilustração vetorial provisória.
   README.txt  - Este guia de edição.

3. COMO PERSONALIZAR
   Edite as variáveis de cores no início de style.css.
   O WhatsApp oficial já está configurado em script.js na constante
   whatsappNumber: 5561996013123 (formato internacional, somente dígitos).
   Para alterar, use 55 + DDD + número, sem espaços, parênteses ou hífen.
   A mensagem automática fica na constante whatsappMessage.
   Substitua as ilustrações do catálogo por fotos dos produtos comercializados.
   No carrossel de instalações, troque cada bloco .installation-visual por uma
   imagem real e autorizada. Dentro de .installation-visual, use:
   <img class="installation-photo" src="imagens/instalacao-01.jpg"
        alt="Fechadura eletrônica instalada em porta residencial">
   Remova também o elemento .photo-placeholder desse card.
   Crie a pasta imagens/ e coloque nela as fotografias usadas no site.
   As setas dos carrosséis funcionam no computador; em celulares, também é
   possível deslizar os cards com o dedo.
   A marca textual, a paleta, os textos e as ilustrações são provisórios;
   confirme os serviços e os dados de contato antes de publicar.

4. DEPENDÊNCIAS
   Nenhuma dependência externa. O botão do WhatsApp abre wa.me em nova aba.

5. ORGANIZAÇÃO DO CÓDIGO
   Indentação de quatro espaços, quebras de linha e comentários por seção.
   A versão foi reorganizada sem alterações intencionais no layout ou nas
   funcionalidades originais.

IDENTIDADE VISUAL
Logo: assets/logo.jpg. Paleta: variáveis no início de style.css.
Marcas: seção #marcas, nomes em texto.
Certificados: assets/certificados; substitua os espaços em #credenciais e .footer-seals por imagens reais autorizadas.
