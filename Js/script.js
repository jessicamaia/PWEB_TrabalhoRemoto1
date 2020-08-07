//Instalei o "Live Server" para fazer os testes pois estava dando erros de segurança;
//Utilizei a bolinha (.dot), para fechar a janela;
//Fiz dois botões "Ir" e "Nova busca";
//Os detalhes do iframe são mostrados no final da página quando clica nas 3 barras;

//----------//

//Seleção dos itens
let BtnIr = document.querySelector(".submit_button");
let BtnFechar = document.querySelector(".dot");
let BtnNovo = document.querySelector(".BtnNovo");
let end = document.querySelector(".address");
let container = document.querySelector(".container-frameTab");
let BtnDetalhes = document.querySelector("#botao-detalhes");
let iframe;

//Detalhes da página: URL, Protocolo, Porta, Largura, comprimento, SO.

const createDetailItem = (value) => {
    const p = document.createElement('p');
    p.innerHTML = value;
    return p;
}

const loadWindowData = (iframeWindow) => {
    const pageUrl = iframeWindow.location.href;
    const protocol = iframeWindow.location.protocol;
    const port = iframeWindow.location.port;
    const screenHeight = iframeWindow.screen.availHeight;
    const screenWidth = iframeWindow.screen.availWidth;
    const OS = iframeWindow.navigator.appVersion;

    const pageUrlP = createDetailItem(pageUrl);
    const protocolP = createDetailItem(protocol);
    const portP = createDetailItem(port);
    const screenHeightP = createDetailItem(screenHeight);
    const screenWidthP = createDetailItem(screenWidth);
    const OSP = createDetailItem(OS);

    const div = document.createElement('div');
    div.append(pageUrlP);
    div.append(protocolP);
    div.append(portP);
    div.append(screenHeightP);
    div.append(screenWidthP);
    div.append(OSP);

    div.className ="detalhes";
    div.style.display = "none";
    document.body.append(div);
}

// Evento do botão "Ir"
BtnIr.addEventListener("click", function (e) {
    e.preventDefault(e);
    
        let value = end.value;
        iframe = open(value, "frameTab");
        loadWindowData(iframe);
    }
    
); 

//Função fechar janela
function FecharJanela (){
    let iframeBuscado = document.querySelector(".responsive-iframe");
    let detalhes  = document.querySelector (".detalhes");
    if(iframeBuscado){
        iframeBuscado.parentNode.removeChild(iframeBuscado);
        detalhes.parentNode.removeChild(detalhes);
        end.value='';
        end.disabled=true;
        BtnIr.disabled=true;
    }  
}

//Botão fechar;
BtnFechar.addEventListener('click', FecharJanela);

function criarIframe ()  {
    const Novoiframe = document.createElement('iframe');
    Novoiframe.name = 'frameTab';
    Novoiframe.className = 'responsive-iframe';
    
    return Novoiframe;
}

//Botão nova janela;
BtnNovo.addEventListener ("click", function(e){
    e.preventDefault(e);

    let iframeBuscado = document.querySelector(".responsive-iframe");
    if(iframeBuscado){
        FecharJanela();
    }

    let Novoiframe = criarIframe();
    container.append(Novoiframe);
    end.disabled=false;
    BtnIr.disabled=false;
})

//Botão detalhes;
BtnDetalhes.addEventListener("click", function(e){
    e.preventDefault(e);

    let detalhes  = document.querySelector (".detalhes");
    if (detalhes) {
        detalhes.style.display = 'block';
    }
})