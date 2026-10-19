/* Portfólio Victor Trindade — lógica da bancada (gerado a partir do protótipo) */
function P(a, b) { return { pt: a, en: b }; }
var STICKERS = {
  neutro: '/static/media/46d01f29495acaa10f692eaa494dba34.png', feliz: '/static/media/045e481ede67d72fdd419c7b30ce148c.png', pensando: '/static/media/2fc81ed873a2fa8a353e775e9496cf78.png',
  surpreso: '/static/media/2957f6af0fdb1d7727ded5982a4038c6.png', concentrado: '/static/media/498667e6a18d9273fe38b60f402baa66.png', piscando: '/static/media/401efebfc8d783fa0498185dd8025735.png',
  celebrando: '/static/media/010bd879877c2e742bf33cbaf29f3168.png', timido: '/static/media/ca71dd2916c2cd92dbe777d69223f2e6.png'
};
var PX = {
  neutro: '/static/media/80a3b52040bb723bd662d020549cd199.png', sorriso: '/static/media/0be8ff23d37d73fccaa589ca941e58bf.png', fala: '/static/media/8027eb29f662385a892eb504564d57fc.png',
  ri: '/static/media/663da2bb976d135eef509f7369497e31.png', pisca: '/static/media/adcf85e327a81c184cf716bcd4395055.png', o: '/static/media/1f5a69cb5672a11f90613b8ab8edf44c.png',
  olhos: '/static/media/a1c9f9cd97645b79f876b8c5d90e977b.png', pensa: '/static/media/316e6eaa891e562923e9652148028661.png', love: '/static/media/192f35d7b95565aaf40ecb9608f42e10.png',
  lado: '/static/media/8b924fe6f7b1ba74a8bc6f5867dc29fb.png', tchau: '/static/media/287cc1e3fabad017a78734a93cbc0070.png', joinha: '/static/media/bd1b7d3d17bce99ed7242d8e5bcd293b.png',
  laptop: '/static/media/aaca81d808beda5ce48ba27788aadea2.png'
};
var TALK = ['fala', 'sorriso', 'o', 'neutro'];
var IMG = {
  publicidade: ['/static/media/dd4f90ade8dc21e22e8e06882f76f0da.jpg', '/static/media/d9380f834b053c17764cd5558a14db3d.jpg', '/static/media/8f590bbd18dca83e19d5d665b2a1ca52.jpg'],
  embalagens: ['/static/media/f26c9883730ec9b14edd7ce926b862ad.jpg', '/static/media/5294fb1a858206da3b4d6886042ddb06.jpg', '/static/media/c042e28079118ef6a4ac241526e1d323.jpg'],
  personalizados: ['/static/media/86c2963934106d514913f102378dd234.jpg', '/static/media/6af9351aa58fe069575160e548feb994.jpg', '/static/media/8266f7eab40bf4cb405ad7d5a646aa46.jpg'],
  baloes: ['/static/media/66fd9395bf03ecdf45969a851759d62d.jpg', '/static/media/bb76a7d815d517eeefb61eda0301d381.jpg', '/static/media/b160ba403e594204508d710ebafb9ce0.jpg'],
  produtos: ['/static/media/86c2963934106d514913f102378dd234.jpg', '/static/media/c61741d9dfe1b8ba253c10d49f9d3459.jpg', '/static/media/71d2c15fcd5e0c72b721a12d92ddbbc0.jpg'],
  grafica: ['/static/media/936ce8703a6a7e27b9dde002d17c97b5.jpg', '/static/media/34ea2ed76560cee35cd58a2653b3f227.jpg', '/static/media/e5ff97d586484dcdd412cf845ce835cf.jpg'],
  handmade: ['/static/media/69cd89e1ec173d32fdcabca65cef94dd.jpg', '/static/media/3052ee10a5de7e803fb68663b99cf8dd.jpg', '/static/media/71d2c15fcd5e0c72b721a12d92ddbbc0.jpg', '/static/media/c61741d9dfe1b8ba253c10d49f9d3459.jpg'],
  sites: ['/static/media/eadef277e9014e1358dcf5b084d7e82c.jpg', '/static/media/62b3a125cb49a66cf95f5f3dbd5d2e07.jpg', '/static/media/1c63839c56d840f3bb76f3cc080a6618.jpg'],
  videos: ['/static/media/5df49cc097f060951ae04af4f56bcda9.jpg', '/static/media/70e80bf9174594edd183ce46a38aabc6.jpg', '/static/media/b5fcf4205ecb33e32b873b588a6ab7d3.jpg']
};
var SITE_MOB = ['/static/media/74e2b91865571d96f2601fe498b4fcc7.jpg', '/static/media/08ad0e39d43df2fed7ea3fc2c687a3a9.jpg', '/static/media/37ee4688a5c348f263002681998b8403.jpg'];
var GAL = {
  produtos: [['/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg', 0.8, '4:5 · placeholder'], ['/static/media/01ce3e826c58830d17f474884f059343.jpg', 1, '1:1 · 1080×1080'], ['/static/media/20f511eb3cf82e9eaa18a1af8818d1f0.jpg', 1.6, '16:10 · placeholder']],
  publicidade: [['/static/media/6556c658fbde6ba5673f34c09e875c3c.jpg', 0.8, '4:5 · 1080×1350'], ['/static/media/c82fa75c0d2d379fceb6d8204edd054a.jpg', 1, '1:1 · 1080×1080'], ['/static/media/528507b759a9836423562572e0f6aa4c.jpg', 1.7778, '16:9 · 1920×1080'], ['/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg', 0.8, '4:5 · placeholder']],
  baloes: [['/static/media/e316c7b7a0d0ee4df4959519e69ace19.jpg', 0.8, '4:5 · 1080×1350'], ['/static/media/c823ffa11a42c8954fa8fe1aa2419de3.jpg', 1, '1:1 · 1080×1080'], ['/static/media/1e20fd8fc25209fefa93fdc69da10aa2.jpg', 1.7778, '16:9 · 1920×1080'], ['/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg', 0.8, '4:5 · placeholder']],
  handmade: [['/static/media/fdbd573cd5ae1fd47aaaa493410da49d.jpg', 0.8, '4:5 · 1080×1350'], ['/static/media/01ce3e826c58830d17f474884f059343.jpg', 1, '1:1 · 1080×1080'], ['/static/media/9024ffed87d6db0a8fcb381821d85fd6.jpg', 1.7778, '16:9 · 1920×1080'], ['/static/media/ee83a958b395a290e8ba6b074bbaffa0.jpg', 1, '1:1 · 1080×1080'], ['/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg', 0.8, '4:5 · placeholder']]
};
function galAR(key, idx) { var g = GAL[key]; if (!g || !g.length) return 1; return g[Math.min(idx || 0, g.length - 1)][1]; }
var CLIPS = [
  { src: '/static/media/89209ffbd1d064cf29bd162d0f58d134.mp4', poster: '/static/media/bff9a31d49c8f7267fc99a0ac3497c6f.jpg' },
  { src: '/static/media/2155a5d02530347dbc02e2c8a8581dc0.mp4', poster: '/static/media/354da7a1f9d7a0058f43b7020f0ec827.jpg' },
  { src: '/static/media/9e64decfc69e9f881ab32a5193569e1e.mp4', poster: '/static/media/be476ffe9ba611812fb6bbf7f9fed1cc.jpg' }
];
var COVERS = [
  ['/static/media/80ab57524f71ad2e201f8b8b2974ed17.jpg', '/static/media/54c065ea411f422283132d5642298386.jpg', '/static/media/862cc9dc2c554e4a6375ffeab1fd860c.jpg', '/static/media/00c05ce9c57a4c95fbd53093e0434ef7.jpg', '/static/media/0b154ef5d3bac4c1564c6537de5ff114.jpg'],
  ['/static/media/7e23b1c1ce3030a0a571419c16dc073b.jpg', '/static/media/e674240b7659a2f166d6b88a1678dffe.jpg', '/static/media/cc59b2a5388e2d9aae2daf6ba0147ba9.jpg', '/static/media/c0436e29d16aa2bb5408aaa3a9fdd8b1.jpg', '/static/media/fad445708551f4a77ab356876083d0db.jpg'],
  ['/static/media/c07e76f6a0a4ce0c70b48989d6ffc6e3.jpg', '/static/media/edc48fbff4568d37924b212e9875543a.jpg', '/static/media/a00e8a379b72f4464a07657424d3c1e5.jpg', '/static/media/9cb3a4a109f2cd8210285f27deec9654.jpg', '/static/media/d56a9284388df9e98e4acf8724347d39.jpg'],
  ['/static/media/9f0fea9090cb4ff1675db09154585be3.jpg', '/static/media/cfd31061445c4440ca5c3c1ee600c239.jpg', '/static/media/1d4acfd5b361e4243dcf687d026b073d.jpg', '/static/media/7e6faf0d8ee7bff7746472e19567914c.jpg', '/static/media/b09de0fe17329d7096ed67088fe34a5a.jpg']
];
var COVER_NAMES = [['Neon Noturno', 'Verão de 98', 'Maré Alta', 'Rota 404', 'Colecionador de Nuvens'], ['Cork City', 'Box Builder', 'Dungeon Doodle', 'Ghost Pixel', 'Turbo Kart Zero'], ['Estúdio 7', 'Briefing', 'Dupla Face', 'Os Criativos', 'Linha do Tempo'], ['Lo-fi Desk', 'Cassette Blue', 'Golden Hour', 'Paper Hearts', 'Midnight Mix']];
var SPOTIFY_PLAYLIST = 'https://open.spotify.com/'; // admin: link da playlist — o backend busca capas, nomes e prévias pela API do Spotify
var TRACKS = [
  { name: 'Lo-fi Desk', src: '/static/media/0b845a49a41e6c2f3ba5e848ac5e6799.mp4', d: '0:20', c: '/static/media/9f0fea9090cb4ff1675db09154585be3.jpg' },
  { name: 'Cassette Blue', src: '/static/media/a2b37a4ac640791470f3fa978774bf8f.mp4', d: '0:25', c: '/static/media/cfd31061445c4440ca5c3c1ee600c239.jpg' },
  { name: 'Pixel Sunset', src: '/static/media/3acf0ccafd8b11276402a5b9a260ec79.mp4', d: '0:17', c: '/static/media/1d4acfd5b361e4243dcf687d026b073d.jpg' },
  { name: 'Golden Hour', src: '/static/media/0b845a49a41e6c2f3ba5e848ac5e6799.mp4', d: '0:20', c: '/static/media/7e6faf0d8ee7bff7746472e19567914c.jpg' },
  { name: 'Analógico', src: '/static/media/a2b37a4ac640791470f3fa978774bf8f.mp4', d: '0:25', c: '/static/media/b09de0fe17329d7096ed67088fe34a5a.jpg' },
  { name: 'Neon Noturno', src: '/static/media/3acf0ccafd8b11276402a5b9a260ec79.mp4', d: '0:17', c: '/static/media/80ab57524f71ad2e201f8b8b2974ed17.jpg' },
  { name: 'Maré Alta', src: '/static/media/0b845a49a41e6c2f3ba5e848ac5e6799.mp4', d: '0:20', c: '/static/media/862cc9dc2c554e4a6375ffeab1fd860c.jpg' },
  { name: 'Rota 404', src: '/static/media/a2b37a4ac640791470f3fa978774bf8f.mp4', d: '0:25', c: '/static/media/00c05ce9c57a4c95fbd53093e0434ef7.jpg' }
];
function mmss(x) { x = Math.max(0, Math.floor(x || 0)); return Math.floor(x / 60) + ':' + ('0' + (x % 60)).slice(-2); }
var T = {
  pt: {
    navAria: 'Principal', nHome: 'Home', nSobre: 'Sobre Mim', nProjetos: 'Projetos', nSkills: 'Skills', nVideos: 'Vídeos', nPlaylist: 'Playlist', nContato: 'Contato',
    langBtn: 'EN', langAria: 'Switch to English',
    band: 'PUBLICIDADE ★ DESIGN ★ EMBALAGENS ★ PERSONALIZADOS ★ BUBBLE BALLOONS ★ HANDMADE ★ SITES ★ VÍDEOS ★ ',
    h1: 'Transformando', h2: 'ideias em', h3: 'resultados', pill: '@victortrindade · publicidade, design & mais',
    blk1: 'portfólio', blkSub: 'arraste tudo pela mesa ↓', blkTag: 'feito à mão',
    imAria: 'VT Messenger: abrir Contato', imOn: 'disponível p/ projetos', imCta: '✉ Mandar mensagem',
    check: '☑ Ideias\n☑ Projetos\n☑ Experiências\n☑ Resultados', checkAria: 'Post-it: abrir Skills',
    photo: 'Sua foto do estúdio · demo', photoCap: 'grandes ideias nascem de pequenos detalhes.', photoAria: 'Foto do estúdio: abrir Sobre Mim',
    ticket: 'rascunho: caixa rosa\nabre pela tampa ↑\nfaca de corte v2', ticketAria: 'Rascunho: abrir Embalagens',
    blue: 'Explore, clique e descubra mais :)', blueAria: 'Post-it: abrir Projetos',
    ytTitle: 'assista', ytSub: 'reels & bastidores', demoClip: 'clipe demo', portraitAlt: 'Foto do Victor', portraitCap: 'eu, Victor ✦', deckDesc: 'Projetos em destaque presos no mural. Passe para o próximo ou abra o estudo de caso.', deckNext: 'Próximo ↻', deckOpen: 'Ver projeto ↗', ytAria: 'Player de vídeo: abrir Vídeos',
    badgesAria: 'Botões estilo internet antiga', togAria: 'Interruptor do modo criativo', decoAria: 'Enfeite da mesa — arraste', ballAria: 'Bolinha de papel — arraste', phonesAria: 'Fone de ouvido: abrir Playlist',
    catsAria: 'Categorias — arraste para ver mais', tidy: 'Reorganizar mesa', close: 'Fechar janela', filtersAria: 'Filtros — arraste para ver mais',
    demo: 'exemplos de demonstração', demo1: 'exemplo de demonstração',
    embIntro: 'Embalagem rígida com tampa articulada e berço interno. Gire o modelo, dê zoom e abra a tampa — o vídeo dos bastidores fica do lado.',
    embHint: 'Arraste para girar a caixa', embAria: 'Modelo 3D demonstrativo da caixa rosa. Arraste para girar.', boxFront: 'Para\nalguém\nespecial', boxIn: '♥ obrigado!',
    mugHint: 'Arraste para girar o produto', mugAria: 'Modelo 3D demonstrativo de caneca personalizada. Arraste para girar.', mugNext: 'Trocar estampa', prModes: ['Cartão de visita', 'Flyer A5', 'Banner roll-up'], prHint: 'Arraste para girar', uvOn: 'Ligar verniz', uvOff: 'Desligar verniz', maskShow: 'Ver máscara', maskHide: 'Ocultar máscara', upFront: 'Enviar arte (frente)', upBack: 'Enviar verso', upMask: 'Enviar máscara de verniz', resetArt: 'Voltar ao exemplo', popFiles: 'Acabamento', uvPub: 'Verniz localizado: o brilho fica só nas áreas da arte marcadas para o verniz. Gire o cartão e veja o reflexo passar.', uvLegend: 'brilho do verniz localizado', uvHow: 'Verniz localizado: envie um PNG do mesmo tamanho da arte, com 100% magenta (#FF00FF) só onde vai o brilho. O resto pode ser transparente ou branco.', uvTip: 'Gire o cartão para ver o reflexo do verniz.', prSpec1: 'Formato', prSpec1t: 'Cartão 9×5 cm · Flyer A5 · Banner 80×200 cm (exemplos).', prSpec2: 'Papel', prSpec2t: 'Couché 300 g, laminação fosca (exemplo).', prSpec3: 'Acabamento', prSpec3t: 'Verniz localizado, cantos arredondados, hot stamping (exemplo).', lvlScale: 'nível', radarTitle: 'Mapa de competências', ringsSmall: 'competências · passe o mouse', otherProj: 'Outros projetos', popImgs: 'Imagens', radarNote: '', levels: ['Iniciante', 'Básico', 'Intermediário', 'Avançado', 'Especialista'], nMetricas: 'Métricas', metTitle: 'Em números', metTag: 'números de exemplo', metIntro: 'Resultados que contam a história — troque pelos seus números reais no admin.', metReplay: 'Contar de novo',
    neonWord: 'ideias', swipeMore: '+7 categorias', soon: 'Em breve: projetos chegando por aqui ✦', neonAria: 'Letreiro neon — clique para ligar ou desligar', popAbout: 'Sobre o projeto', popVid: 'Bastidores', popVidTag: 'vídeo', popSites: 'Projetos de sites', popMob: 'Versão mobile', popFeats: 'Funcionalidades', reopen: 'Mostrar janelas', moreVids: 'Mais vídeos', prevAria: 'Vídeo anterior', nextAria: 'Próximo vídeo',
    playAria: 'Reproduzir vídeo', embVideo: 'Bastidores da montagem', noFile: 'Sem arquivo ainda — envie o .mp4 vertical no admin.', noFileShort: 'sem arquivo (demo)',
    zoomIn: 'Aproximar', zoomOut: 'Afastar', reset: 'Restaurar vista', lidOpen: 'Abrir embalagem', lidClose: 'Fechar embalagem', cupLidOff: 'Tirar tampa', cupLidOn: 'Colocar tampa', popDone: 'Modelos que já fiz', persTypes: { mug: 'caneca', bottle: 'garrafa', tile: 'azulejo' }, embTypes: { box: 'caixa', twist: 'copo twist', p700: 'copo 700 ml', coffee: 'copo de café', bag: 'sacola' }, doneEmpty: 'Ainda sem modelos desse tipo.', popFin: 'Acabamento', skMore: 'Mais competências', liveOpen: 'abrir ↗', liveTag: 'ao vivo',
    embProjAria: 'Projetos de embalagem', tabsAria: 'Detalhes do projeto',
    tabs: ['Sobre o projeto', 'Processo', 'Planificação', 'Fotos', 'Aplicações'],
    cConceito: 'Conceito', cDesafio: 'Desafio', cProcesso: 'Processo', cResultado: 'Resultado', cMateriais: 'Materiais', cAplicacoes: 'Aplicações', cValores: 'Valores',
    eConceito: 'Uma caixa-presente que vira lembrança: estampa floral feita à mão e mensagem escondida na tampa.', eDesafio: 'Criar uma embalagem marcante com custo baixo e montagem rápida para datas comemorativas.', eProcesso: 'Esboços, três versões de faca de corte, testes de papel e mockups até a versão final.', eResultado: 'Texto de exemplo — aqui entra o resultado real do projeto (sem números inventados).',
    eMateriais: 'Papel cartão 300 g, laminação fosca e detalhe em hot stamping (exemplo).', eAplicacoes: 'Presentes, kits corporativos e datas comemorativas.',
    gConceito: 'Uma ideia simples, contada com cor, textura e detalhe — texto de exemplo.', gDesafio: 'Comunicar a proposta da marca de um jeito que as pessoas lembrem.', gProcesso: 'Briefing, referências, esboços, testes e ajustes até a peça final.', gResultado: 'Aqui entra o resultado real do projeto (exemplo, sem números inventados).',
    steps: ['1 · Briefing', '2 · Esboço', '3 · Planificação', '4 · Mockup', '5 · Produção'],
    dieAria: 'Planificação demonstrativa da caixa', dieFront: 'FRENTE', dieLid: 'TAMPA', dieNote: 'exemplo — substitua pela faca real (PDF/SVG)',
    ph1: 'Foto real do produto · demo', ph2: 'Detalhe do acabamento · demo', ph3: 'Mockup · demo',
    mediaAria: 'Mídias do projeto', photoDemo: 'foto demo', video: 'Vídeo', img: 'Imagem · demo', year: '[ano]',
    sitesIntro: 'Landing pages, sites institucionais e interfaces — screenshots reais, desktop e mobile lado a lado.',
    shotDesk: 'Screenshot desktop · demo', shotMob: 'Tela mobile · demo', shotDet: 'Detalhe · demo', mobSub: 'versão responsiva', techs: '[tecnologias]', feats: '[funcionalidades]', visit: 'Visitar site ↗', fanHint: 'passe o mouse para abrir os cards',
    videosIntro: 'Escolha na playlist. Ao dar play em um, os outros pausam. Sem visualizações inventadas.', prev: 'Anterior', next: 'Próximo',
    allProj: 'Todos os projetos', allProjIntro: 'Filtre por categoria. Cada projeto abre o estudo de caso na sua categoria.', vitTitle: 'Projetos em destaque', vitSub: '',
    skTag: 'ficha', skTitle: 'Ficha de habilidades', skIntro: 'Níveis qualitativos, editáveis no admin — sem porcentagens inventadas.', tools: 'Ferramentas', comps: 'Competências', lvl: 'nível: a definir',
    skMarq: 'DIREÇÃO DE ARTE ✦ IDENTIDADE VISUAL ✦ EMBALAGEM ✦ PROTOTIPAGEM ✦ EDIÇÃO ✦ CRIAÇÃO DIGITAL ✦ ',
    skills: ['Direção de arte', 'Identidade visual', 'Embalagem', 'Prototipagem', 'Edição de imagem', 'Edição de vídeo', 'Criação digital', 'Criatividade', 'Organização', 'Atenção aos detalhes', 'Versatilidade'],
    portrait: 'Seu retrato real · demo', stickerSobreAlt: 'Avatar do Victor piscando', hi: 'Oi, eu sou o Victor Trindade.', bio: 'Publicitário e criador multidisciplinar. Transito entre campanhas, embalagens, peças personalizadas, papelaria, sites e vídeos — sempre buscando a ideia que transforma um briefing em resultado. (texto de exemplo)',
    valores: 'Curiosidade, atenção aos detalhes, versatilidade.', processo: 'Briefing → pesquisa → conceito → protótipo → arte final → entrega.',
    favMarq: 'ME CONHEÇA PELAS MINHAS REFERÊNCIAS ★ FILMES ★ SÉRIES ★ JOGOS ★ ÁLBUNS ★ O QUE ME INSPIRA ★ ', coversDemo: 'capas · demo', cover: '[capa]',
    favs: [['Filmes', 'Filme'], ['Jogos', 'Jogo'], ['Séries', 'Série'], ['Álbuns', 'Álbum']],
    plTag: 'faixas de exemplo', plBig: 'Trilha do\nestúdio', plGenre: 'LO-FI · CHIPTUNE · SYNTH · FEITAS PARA A PRÉVIA', plPop: 'Mais tocadas', cMarq: 'VAMOS CRIAR JUNTOS ✦ ORÇAMENTOS ✦ PARCERIAS ✦ IDEIAS ✦ ', cReply: 'respondo em até 2 dias úteis (exemplo)', ex: 'exemplo', phName: 'como posso te chamar?', phEmail: 'seu@email.com', phSubj: 'embalagem, campanha, site…', phMsg: 'conta a ideia aqui :)', pcTitle: 'enviado!', vfHint: '← arraste para o lado →', crachaAria: 'Crachá: abrir Sobre Mim', crachaRole: 'publicitário & criador', crachaFoot: 'ACESSO: ESTÚDIO', stampTxt: 'aprovado', badgeTxt: '✦ DISPONÍVEL PARA PROJETOS ✦ FREELA ✦ PARCERIAS ', pcAgain: 'Escrever outra', plTitle: 'A trilha do estúdio', plIntro: 'O que toca enquanto eu crio. Troque as faixas no admin ou cole o link da sua playlist.', plLcd: 'PLAYLIST DO ESTÚDIO',
    noAudio: 'faixas demo geradas', tracksAria: 'Faixas', track: 'Faixa', artist: 'Victor Trindade · demo', plLink: 'Ouvir no Spotify', plFrom: 'do Spotify',
    talk: 'Bora conversar?', lEmail: 'contato@victortrindade.com (exemplo)', lWpp: '(00) 00000-0000', lIn: 'in/victortrindade (exemplo)', fName: 'Nome', fSubj: 'Assunto', fMsg: 'Mensagem', fHp: 'Não preencha', fSend: 'Enviar pelo WhatsApp',
    fErrNet: 'Sem conexão — tente de novo.', fErrRate: 'Muitas mensagens seguidas — aguarde um pouco.', fErrName: 'Informe seu nome.', fErrEmail: 'Informe um e-mail válido.', fErrMsg: 'Escreva uma mensagem com pelo menos 10 caracteres.',
    fOk: 'Abri o WhatsApp com a sua mensagem — é só tocar em enviar por lá.',
    pixAlt: 'Avatar pixel do Victor', stickerAria: 'Avatar do Victor — clique para mudar a expressão'
  },
  en: {
    navAria: 'Main', nHome: 'Home', nSobre: 'About Me', nProjetos: 'Projects', nSkills: 'Skills', nVideos: 'Videos', nPlaylist: 'Playlist', nContato: 'Contact',
    langBtn: 'PT', langAria: 'Mudar para português',
    band: 'ADVERTISING ★ DESIGN ★ PACKAGING ★ CUSTOM GOODS ★ BUBBLE BALLOONS ★ HANDMADE ★ WEBSITES ★ VIDEOS ★ ',
    h1: 'Transforming', h2: 'ideas into', h3: 'results', pill: '@victortrindade · advertising, design & more',
    blk1: 'portfolio', blkSub: 'drag everything around ↓', blkTag: 'handmade',
    imAria: 'VT Messenger: open Contact', imOn: 'available for projects', imCta: '✉ Send a message',
    check: '☑ Ideas\n☑ Projects\n☑ Experiences\n☑ Results', checkAria: 'Sticky note: open Skills',
    photo: 'Your studio photo · demo', photoCap: 'big ideas are born from small details.', photoAria: 'Studio photo: open About Me',
    ticket: 'draft: pink box\nopens from the lid ↑\ndie-cut v2', ticketAria: 'Draft: open Packaging',
    blue: 'Explore, click and discover more :)', blueAria: 'Sticky note: open Projects',
    ytTitle: 'watch', ytSub: 'reels & behind the scenes', demoClip: 'demo clip', portraitAlt: 'Photo of Victor', portraitCap: 'me, Victor ✦', deckDesc: 'Featured projects pinned to the board. Flip to the next one or open the case study.', deckNext: 'Next ↻', deckOpen: 'Open project ↗', ytAria: 'Video player: open Videos',
    badgesAria: 'Old-web style buttons', togAria: 'Creative mode switch', decoAria: 'Desk decoration — drag it', ballAria: 'Paper ball — drag it', phonesAria: 'Headphones: open Playlist',
    catsAria: 'Categories — drag to see more', tidy: 'Tidy up the desk', close: 'Close window', filtersAria: 'Filters — drag to see more',
    demo: 'demo examples', demo1: 'demo example',
    embIntro: 'Rigid box with a hinged lid and an inner tray. Rotate the model, zoom in and open the lid — the behind-the-scenes video sits right beside it.',
    embHint: 'Drag to rotate the box', embAria: 'Demo 3D model of the pink box. Drag to rotate.', boxFront: 'For\nsomeone\nspecial', boxIn: '♥ thank you!',
    mugHint: 'Drag to rotate the product', mugAria: 'Demo 3D model of a custom mug. Drag to rotate.', mugNext: 'Change print', prModes: ['Business card', 'A5 flyer', 'Roll-up banner'], prHint: 'Drag to rotate', uvOn: 'Varnish on', uvOff: 'Varnish off', maskShow: 'Show mask', maskHide: 'Hide mask', upFront: 'Upload artwork (front)', upBack: 'Upload back', upMask: 'Upload varnish mask', resetArt: 'Back to sample', popFiles: 'Finishing', uvPub: 'Spot UV: the shine only sits on the areas of the artwork marked for varnish. Rotate the card and watch the reflection move.', uvLegend: 'spot UV shine', uvHow: 'Spot UV: upload a PNG the same size as the artwork, 100% magenta (#FF00FF) only where the shine goes. The rest can be transparent or white.', uvTip: 'Rotate the card to see the varnish reflection.', prSpec1: 'Size', prSpec1t: 'Card 9×5 cm · A5 flyer · 80×200 cm banner (samples).', prSpec2: 'Paper', prSpec2t: 'Coated 300 gsm, matte lamination (sample).', prSpec3: 'Finishing', prSpec3t: 'Spot UV, rounded corners, hot foil (sample).', lvlScale: 'level', radarTitle: 'Skill map', ringsSmall: 'skills · hover a ring', otherProj: 'Other projects', popImgs: 'Images', radarNote: '', levels: ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'], nMetricas: 'Metrics', metTitle: 'By the numbers', metTag: 'sample numbers', metIntro: 'Results that tell the story — swap in your real numbers in the admin.', metReplay: 'Count again',
    neonWord: 'ideas', swipeMore: '+7 categories', soon: 'Coming soon: projects on the way ✦', neonAria: 'Neon sign — click to switch on or off', popAbout: 'About the project', popVid: 'Behind the scenes', popVidTag: 'video', popSites: 'Site projects', popMob: 'Mobile version', popFeats: 'Features', reopen: 'Show windows', moreVids: 'More videos', prevAria: 'Previous video', nextAria: 'Next video',
    playAria: 'Play video', embVideo: 'Assembly behind the scenes', noFile: 'No file yet — upload the vertical .mp4 in the admin.', noFileShort: 'no file (demo)',
    zoomIn: 'Zoom in', zoomOut: 'Zoom out', reset: 'Reset view', lidOpen: 'Open the box', lidClose: 'Close the box', cupLidOff: 'Remove lid', cupLidOn: 'Put lid on', popDone: 'Models I made', persTypes: { mug: 'mug', bottle: 'bottle', tile: 'tile' }, embTypes: { box: 'box', twist: 'twist cup', p700: '700 ml cup', coffee: 'coffee cup', bag: 'bag' }, doneEmpty: 'No models of this type yet.', popFin: 'Finishing', skMore: 'More skills', liveOpen: 'open ↗', liveTag: 'live',
    embProjAria: 'Packaging projects', tabsAria: 'Project details',
    tabs: ['About the project', 'Process', 'Dieline', 'Photos', 'Applications'],
    cConceito: 'Concept', cDesafio: 'Challenge', cProcesso: 'Process', cResultado: 'Result', cMateriais: 'Materials', cAplicacoes: 'Applications', cValores: 'Values',
    eConceito: 'A gift box that becomes a keepsake: hand-drawn floral print and a hidden message on the lid.', eDesafio: 'Create a memorable box with low cost and quick assembly for special dates.', eProcesso: 'Sketches, three die-cut versions, paper tests and mockups up to the final version.', eResultado: 'Sample text — the real project result goes here (no made-up numbers).',
    eMateriais: '300 g cardboard, matte lamination and hot-stamping detail (example).', eAplicacoes: 'Gifts, corporate kits and special dates.',
    gConceito: 'A simple idea, told with color, texture and detail — sample text.', gDesafio: 'Communicate the brand promise in a way people remember.', gProcesso: 'Briefing, references, sketches, tests and tweaks up to the final piece.', gResultado: 'The real project result goes here (example, no made-up numbers).',
    steps: ['1 · Briefing', '2 · Sketch', '3 · Dieline', '4 · Mockup', '5 · Production'],
    dieAria: 'Demo dieline of the box', dieFront: 'FRONT', dieLid: 'LID', dieNote: 'example — replace with the real dieline (PDF/SVG)',
    ph1: 'Real product photo · demo', ph2: 'Finishing detail · demo', ph3: 'Mockup · demo',
    mediaAria: 'Project media', photoDemo: 'demo photo', video: 'Video', img: 'Image · demo', year: '[year]',
    sitesIntro: 'Landing pages, institutional sites and interfaces — real screenshots, desktop and mobile side by side.',
    shotDesk: 'Desktop screenshot · demo', shotMob: 'Mobile screen · demo', shotDet: 'Detail · demo', mobSub: 'responsive version', techs: '[technologies]', feats: '[features]', visit: 'Visit site ↗', fanHint: 'hover to fan out the cards',
    videosIntro: 'Pick from the playlist. Playing one pauses the others. No made-up view counts.', prev: 'Previous', next: 'Next',
    allProj: 'All projects', allProjIntro: 'Filter by category. Each project opens its case study in its category.', vitTitle: 'Featured projects', vitSub: '',
    skTag: 'sheet', skTitle: 'Skill sheet', skIntro: 'Qualitative levels, editable in the admin — no made-up percentages.', tools: 'Tools', comps: 'Skills', lvl: 'level: TBD',
    skMarq: 'ART DIRECTION ✦ VISUAL IDENTITY ✦ PACKAGING ✦ PROTOTYPING ✦ EDITING ✦ DIGITAL CREATION ✦ ',
    skills: ['Art direction', 'Visual identity', 'Packaging', 'Prototyping', 'Image editing', 'Video editing', 'Digital creation', 'Creativity', 'Organization', 'Attention to detail', 'Versatility'],
    portrait: 'Your real portrait · demo', stickerSobreAlt: 'Victor’s avatar winking', hi: 'Hi, I’m Victor Trindade.', bio: 'Advertiser and multidisciplinary creator. I move between campaigns, packaging, custom goods, stationery, websites and videos — always looking for the idea that turns a brief into results. (sample text)',
    valores: 'Curiosity, attention to detail, versatility.', processo: 'Briefing → research → concept → prototype → final art → delivery.',
    favMarq: 'GET TO KNOW ME THROUGH MY REFERENCES ★ MOVIES ★ SERIES ★ GAMES ★ ALBUMS ★ WHAT INSPIRES ME ★ ', coversDemo: 'covers · demo', cover: '[cover]',
    favs: [['Movies', 'Movie'], ['Games', 'Game'], ['Series', 'Series'], ['Albums', 'Album']],
    plTag: 'sample tracks', plBig: 'Studio\nsoundtrack', plGenre: 'LO-FI · CHIPTUNE · SYNTH · MADE FOR THE PREVIEW', plPop: 'Most played', cMarq: 'LET\u2019S CREATE TOGETHER ✦ QUOTES ✦ PARTNERSHIPS ✦ IDEAS ✦ ', cReply: 'I reply within 2 business days (example)', ex: 'example', phName: 'what should I call you?', phEmail: 'you@email.com', phSubj: 'packaging, campaign, website…', phMsg: 'tell me the idea :)', pcTitle: 'sent!', vfHint: '← drag sideways →', crachaAria: 'ID badge: open About Me', crachaRole: 'advertiser & creator', crachaFoot: 'ACCESS: STUDIO', stampTxt: 'approved', badgeTxt: '✦ AVAILABLE FOR PROJECTS ✦ FREELANCE ✦ PARTNERSHIPS ', pcAgain: 'Write another', plTitle: 'The studio soundtrack', plIntro: 'What plays while I create. Swap the tracks in the admin or paste your playlist link.', plLcd: 'STUDIO PLAYLIST',
    noAudio: 'generated demo tracks', tracksAria: 'Tracks', track: 'Track', artist: 'Victor Trindade · demo', plLink: 'Listen on Spotify', plFrom: 'from Spotify',
    talk: 'Let’s talk?', lEmail: 'contact@victortrindade.com (example)', lWpp: '+55 00 00000-0000', lIn: 'in/victortrindade (example)', fName: 'Name', fSubj: 'Subject', fMsg: 'Message', fHp: 'Do not fill', fSend: 'Send via WhatsApp',
    fErrNet: 'No connection — please try again.', fErrRate: 'Too many messages — please wait a bit.', fErrName: 'Please enter your name.', fErrEmail: 'Please enter a valid e-mail.', fErrMsg: 'Write a message with at least 10 characters.',
    fOk: 'WhatsApp is open with your message — just tap send there.',
    pixAlt: 'Victor’s pixel avatar', stickerAria: 'Victor’s avatar — click to change the expression'
  }
};
var CATS = [
  { key: 'publicidade', icon: '/static/media/efa320262f5935cdfd2cc3a1d998b8c6.png', label: P('Publicidade', 'Advertising'), sub: P('& Design', '& Design'), title: P('Publicidade & Design', 'Advertising & Design'),
    filters: [P('Todos', 'All'), P('Campanhas', 'Campaigns'), P('Branding', 'Branding'), P('Identidade visual', 'Visual identity'), P('Digital', 'Digital'), P('Impressos', 'Print')],
    intro: P('Campanhas, direção de arte, branding e peças digitais e impressas — briefing, solução e resultado.', 'Campaigns, art direction, branding and digital & print pieces — briefing, solution and result.'),
    photos: [P('Peça principal', 'Key visual'), P('Aplicação', 'Application'), P('Detalhe', 'Detail'), P('Placeholder 4:5', 'Placeholder 4:5')], video: P('Making of da campanha', 'Campaign making-of'),
    projects: [[P('Campanha de lançamento', 'Launch campaign'), 1], [P('Identidade visual — café local', 'Visual identity — local café'), 3], [P('Peças para redes sociais', 'Social media pieces'), 4], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Abrindo as campanhas... briefing, conceito e resultado.', 'Opening the campaigns... briefing, concept and result.'), mood: 'concentrado' },
  { key: 'embalagens', icon: '/static/media/30701fe1f8c812b30d8fa83e634292fe.png', label: P('Embalagens', 'Packaging'), sub: P('& Packaging', '& Boxes'), title: P('Embalagens & Packaging', 'Packaging & Boxes'),
    filters: [P('Todos', 'All'), P('Caixas', 'Boxes'), P('Sacolas', 'Bags'), P('Rótulos', 'Labels'), P('Kits Especiais', 'Special kits'), P('Datas Comemorativas', 'Holidays'), P('Empresariais', 'Corporate'), P('Copos', 'Cups')],
    projects: [[P('Caixa “Para alguém especial”', '“For someone special” box'), 1], [P('Copo twist com tampa e canudo', 'Twist cup with lid and straw'), 7], [P('Copo 700 ml personalizado', 'Custom 700 ml cup'), 7], [P('Copo de café com tampa', 'Coffee cup with lid'), 7], [P('Kit Dia das Mães', 'Mother’s Day kit'), 4], [P('Sacola decorada colorida', 'Colorful decorated bag'), 2], [P('Sacola kraft', 'Kraft bag'), 2], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Abrindo os projetos de embalagens... dá uma olhada nesses detalhes!', 'Opening the packaging projects... check out these details!'), mood: 'piscando' },
  { key: 'personalizados', icon: '/static/media/ced6c8362b1b0435d50db93c8ef0fd99.png', label: P('Personalizados', 'Custom goods'), sub: P('Canecas e Garrafas', 'Mugs & Bottles'), title: P('Personalizados', 'Custom goods'),
    filters: [P('Todos', 'All'), P('Canecas', 'Mugs'), P('Garrafas de alumínio', 'Aluminum bottles'), P('Azulejos', 'Tiles'), P('Outras peças', 'Other pieces')],
    intro: P('Canecas, garrafas de alumínio, azulejos e outras peças. Viewer 360° entra quando houver modelo GLB.', 'Mugs, aluminum bottles, tiles and other pieces. A 360° viewer appears when there is a GLB model.'),
    photos: [P('Aplicação real', 'Real application'), P('Estampa', 'Print'), P('Bastidores', 'Behind the scenes')], video: P('Estampando uma caneca', 'Printing a mug'),
    projects: [[P('Caneca personalizada', 'Custom mug'), 1], [P('Garrafa de alumínio esportiva', 'Sports aluminum bottle'), 2], [P('Azulejo decorativo', 'Decorative tile'), 3], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Separando as canecas e garrafas personalizadas...', 'Grabbing the custom mugs and bottles...'), mood: 'feliz' },
  { key: 'baloes', icon: '/static/media/d9eca637f6b8533b2838b542bcf9e095.png', label: P('Balões', 'Balloons'), sub: P('Bubble Balloons', 'Bubble Balloons'), title: P('Bubble Balloons', 'Bubble Balloons'),
    filters: [P('Todos', 'All'), P('Aniversários', 'Birthdays'), P('Datas especiais', 'Special dates'), P('Corporativo', 'Corporate')],
    intro: P('Fotografias, detalhes e processo de montagem dos bubble balloons.', 'Photos, details and the assembly process of the bubble balloons.'),
    photos: [P('Balão pronto', 'Finished balloon'), P('Detalhe do laço', 'Bow detail'), P('Montagem', 'Assembly'), P('Placeholder 4:5', 'Placeholder 4:5')], video: P('Enchendo um bubble balloon', 'Inflating a bubble balloon'),
    projects: [[P('Bubble balloon de aniversário', 'Birthday bubble balloon'), 1], [P('Balão com confete', 'Confetti balloon'), 2], [P('Arranjo corporativo', 'Corporate arrangement'), 3], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Enchendo os bubble balloons... cuidado pra não voar!', 'Inflating the bubble balloons... careful, they might fly away!'), mood: 'apaixonado' },
  { key: 'handmade', icon: '/static/media/e755b0f2ec501c94ccda3e3260606b5a.png', label: P('Handmade', 'Handmade'), sub: P('& Papelaria', '& Stationery'), title: P('Handmade & Papelaria', 'Handmade & Stationery'),
    filters: [P('Todos', 'All'), P('Papelaria', 'Stationery'), P('Protótipos', 'Prototypes'), P('Artesanal', 'Crafts')],
    intro: P('Projetos artesanais, protótipos e papelaria — materiais, etapas e resultado.', 'Handmade projects, prototypes and stationery — materials, steps and result.'),
    photos: [P('Resultado final', 'Final result'), P('Materiais', 'Materials'), P('Etapas', 'Steps'), P('Detalhe', 'Detail'), P('Placeholder 4:5', 'Placeholder 4:5')], video: null,
    projects: [[P('Convite artesanal', 'Handmade invitation'), 1], [P('Caderno costurado à mão', 'Hand-sewn notebook'), 3], [P('Protótipo de topo de bolo', 'Cake topper prototype'), 2], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Pegando a tesoura e o laço... projetos feitos à mão.', 'Grabbing the scissors and ribbon... handmade projects.'), mood: 'concentrado' },
  { key: 'sites', icon: '/static/media/f9c2141791ff92dbbb5698d68816f088.png', label: P('Sites', 'Websites'), sub: P('& Digital', '& Digital'), title: P('Sites & Digital', 'Websites & Digital'),
    filters: [P('Todos', 'All'), P('Landing pages', 'Landing pages'), P('Sites institucionais', 'Institutional sites'), P('Interfaces', 'Interfaces')],
    projects: [ [P('Landing page de lançamento', 'Launch landing page'), 1], [P('Site institucional', 'Institutional site'), 2], [P('Interface de catálogo', 'Catalog interface'), 3], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Carregando os sites... desktop e mobile lado a lado.', 'Loading the websites... desktop and mobile side by side.'), mood: 'concentrado' },
  { key: 'videos', icon: '/static/media/3bafcd823056adc29f83415c70b6a7b1.png', label: P('Vídeos', 'Videos'), sub: P('& Motion', '& Motion'), title: P('Vídeos & Motion', 'Videos & Motion'),
    filters: [P('Todos', 'All'), P('Reels', 'Reels'), P('Bastidores', 'Behind the scenes'), P('Processos', 'Processes'), P('Produtos', 'Products'), P('Institucional', 'Institutional')],
    projects: [[P('Reel de lançamento', 'Launch reel'), 1], [P('Bastidores do estúdio', 'Studio behind the scenes'), 2], [P('Processo de embalagem', 'Packaging process'), 3], [P('Produto em detalhe', 'Product close-up'), 4], [P('Vídeo institucional', 'Institutional video'), 5], [P('Reel de balões', 'Balloon reel'), 1], [P('Seu próximo projeto', 'Your next project'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Olha esse vídeo de bastidores!', 'Check out this behind-the-scenes video!'), mood: 'surpreso' },
  { key: 'grafica', icon: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cg stroke-linejoin='round'%3E%3Crect x='14' y='30' width='78' height='50' rx='7' fill='%23fff' stroke='%23fff' stroke-width='16' transform='rotate(-12 53 55)'/%3E%3Crect x='30' y='42' width='78' height='50' rx='7' fill='%23fff' stroke='%23fff' stroke-width='16' transform='rotate(6 69 67)'/%3E%3Crect x='14' y='30' width='78' height='50' rx='7' fill='%23e9558b' stroke='%232a1d14' stroke-width='5' transform='rotate(-12 53 55)'/%3E%3Crect x='30' y='42' width='78' height='50' rx='7' fill='%231b2a52' stroke='%232a1d14' stroke-width='5' transform='rotate(6 69 67)'/%3E%3Crect x='40' y='56' width='34' height='10' rx='3' fill='%23ffe14d' transform='rotate(6 69 67)'/%3E%3Cpath d='M88 60 l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z' fill='%23ffe14d' stroke='%232a1d14' stroke-width='3' transform='rotate(6 69 67)'/%3E%3Cpath d='M98 18 l6 -8 M104 28 l10 -3' stroke='%232a1d14' stroke-width='5' stroke-linecap='round'/%3E%3C/g%3E%3C/svg%3E", label: P('Papelaria', 'Print'), sub: P('Gráfica', '& Stationery'), title: P('Papelaria Gráfica', 'Print & Stationery'),
    filters: [P('Todos', 'All'), P('Cartões', 'Cards'), P('Flyers', 'Flyers'), P('Banners', 'Banners'), P('Vouchers', 'Vouchers'), P('Papel timbrado', 'Letterhead')],
    intro: P('Cartões de visita, vouchers, papel timbrado, flyers e banners em visualização 3D — inclusive com verniz localizado no cartão.', 'Business cards, vouchers, letterheads, flyers and banners in a 3D preview — including spot UV varnish on the card.'),
    photos: [P('Cartão', 'Card'), P('Flyer', 'Flyer'), P('Banner', 'Banner')], video: P('Acabamento na gráfica', 'Print finishing'),
    projects: [[P('Cartão de visita com verniz localizado', 'Business card with spot UV'), 1], [P('Flyer A5 frente e verso', 'Double-sided A5 flyer'), 2], [P('Banner roll-up 80×200', 'Roll-up banner 80×200'), 3]],
    msg: P('Abrindo a papelaria gráfica... gira o cartão pra ver o verniz!', 'Opening the print shop... rotate the card to see the varnish!'), mood: 'ideia' },
  { key: 'produtos', icon: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cg stroke-linejoin='round' stroke-linecap='round'%3E%3Cpath d='M60 14 C38 14 26 30 26 46 C26 58 33 66 40 73 L40 84 L80 84 L80 73 C87 66 94 58 94 46 C94 30 82 14 60 14 Z' fill='%23fff' stroke='%23fff' stroke-width='16'/%3E%3Crect x='40' y='88' width='40' height='18' rx='6' fill='%23fff' stroke='%23fff' stroke-width='14'/%3E%3Cpath d='M60 14 C38 14 26 30 26 46 C26 58 33 66 40 73 L40 84 L80 84 L80 73 C87 66 94 58 94 46 C94 30 82 14 60 14 Z' fill='%23ffd23f' stroke='%232a1d14' stroke-width='5'/%3E%3Cpath d='M42 92 H78 M45 101 H75' stroke='%232a1d14' stroke-width='6'/%3E%3Cpath d='M50 60 L56 48 L64 48 L70 60' fill='none' stroke='%232a1d14' stroke-width='4'/%3E%3Crect x='44' y='52' width='32' height='20' rx='3' fill='%23e9558b' stroke='%232a1d14' stroke-width='4' transform='rotate(-8 60 62)'/%3E%3Cpath d='M38 34 C42 26 50 22 56 22' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M104 22 L112 16 M106 40 L116 40 M14 26 L6 18' stroke='%232a1d14' stroke-width='5'/%3E%3C/g%3E%3C/svg%3E", label: P('Criação', 'Product'), sub: P('de Produtos', 'Design'), title: P('Criação de Produtos', 'Product Creation'),
    filters: [P('Todos', 'All'), P('Conceito', 'Concept'), P('Protótipos', 'Prototypes'), P('Produto final', 'Final product')],
    intro: P('Do esboço ao produto na mão: conceito, protótipo, testes e o produto final pronto para vender.', 'From sketch to product in hand: concept, prototype, tests and the final product ready to sell.'),
    photos: [P('Esboço', 'Sketch'), P('Protótipo', 'Prototype'), P('Produto final', 'Final product')], video: P('Do esboço ao produto', 'From sketch to product'),
    projects: [[P('Linha de velas aromáticas', 'Scented candle line'), 3], [P('Protótipo de luminária', 'Lamp prototype'), 2], [P('Kit de papelaria autoral', 'Signature stationery kit'), 1], [P('Seu próximo produto', 'Your next product'), 1, 'ph'], [P('Espaço para novo case', 'Room for a new case'), 1, 'ph']],
    msg: P('Ideia na cabeça, produto na mão!', 'Idea in mind, product in hand!'), mood: 'ideia' }
];
var PAGES = {
  sobre: { title: P('Sobre Mim', 'About Me'), icon: '/static/media/401efebfc8d783fa0498185dd8025735.png', msg: P('Prazer! Esse aqui sou eu.', 'Nice to meet you! This is me.'), mood: 'piscando', pose: 'tchau' },
  projetos: { title: P('Projetos', 'Projects'), icon: '/static/media/30701fe1f8c812b30d8fa83e634292fe.png', msg: P('Espalhando todos os projetos na mesa...', 'Spreading all the projects on the desk...'), mood: 'pensando', pose: 'laptop' },
  skills: { title: P('Skills', 'Skills'), icon: '/static/media/f9c2141791ff92dbbb5698d68816f088.png', msg: P('Abrindo minha ficha de habilidades...', 'Opening my skill sheet...'), mood: 'ideia', pose: 'joinha' },
  playlist: { title: P('Playlist', 'Playlist'), icon: '/static/media/3bafcd823056adc29f83415c70b6a7b1.png', msg: P('Dá o play na trilha do estúdio!', 'Hit play on the studio soundtrack!'), mood: 'musica', pose: 'love' },
  metricas: { title: P('Métricas', 'Metrics'), icon: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='4' y='6' width='56' height='52' rx='10' fill='%23fff'/%3E%3Crect x='8' y='10' width='48' height='44' rx='7' fill='%23fdf7f1' stroke='%231d1a17' stroke-width='3'/%3E%3Crect x='15' y='34' width='8' height='14' rx='2' fill='%23e9558b' stroke='%231d1a17' stroke-width='2.5'/%3E%3Crect x='28' y='26' width='8' height='22' rx='2' fill='%23ffd23f' stroke='%231d1a17' stroke-width='2.5'/%3E%3Crect x='41' y='18' width='8' height='30' rx='2' fill='%232f62cf' stroke='%231d1a17' stroke-width='2.5'/%3E%3C/svg%3E", msg: P('Olha os números subindo!', 'Watch the numbers go up!'), mood: 'animado', pose: 'joinha' },
  contato: { title: P('Contato', 'Contact'), icon: '/static/media/efa320262f5935cdfd2cc3a1d998b8c6.png', msg: P('Bora conversar? Me manda uma mensagem.', 'Let’s talk? Send me a message.'), mood: 'feliz', pose: 'tchau' }
};
var M = {
  hello: P('Oi! Eu sou o Victor. Bem-vindo à minha bancada criativa.', 'Hi! I’m Victor. Welcome to my creative desk.'),
  home: P('Você já está na bancada :)', 'You’re already on the desk :)'),
  done: P('Feito! Bora pro próximo?', 'Done! On to the next one?'),
  drag: P('Isso! Monta a colagem do seu jeito.', 'Yes! Build the collage your way.'),
  wheel: P('Arrasta pro lado... escolhe uma categoria!', 'Drag sideways... pick a category!'),
  badges: P('Melhor visualizado em 1024×768... brincadeira, funciona em tudo :)', 'Best viewed at 1024×768... just kidding, it works everywhere :)'),
  sketch: P('Ideias criativas, resultados melhores :)', 'Creative ideas, better results :)'),
  words: P('Arrasta as palavras pra montar a sua colagem!', 'Drag the words to build your own collage!'),
  togOn: P('Modo criativo: ligado!', 'Creative mode: on!'), togOff: P('Modo criativo: em pausa... mentira, nunca desliga.', 'Creative mode: paused... kidding, it never turns off.'),
  ball: P('Essa ideia foi pro lixo... ou não?', 'That idea went in the bin... or did it?'),
  stamp: P('Aprovado! Esse é o meu carimbo favorito.', 'Approved! That\u2019s my favorite stamp.'),
  deco: P('Pode mexer à vontade, a mesa é sua.', 'Move things around, the desk is yours.'),
  tidy: P('Mesa reorganizada! Tudo no lugar de novo.', 'Desk tidied up! Everything back in place.'),
  rotate: P('Girando o modelo 3D...', 'Rotating the 3D model...'),
  lidOpen: P('Abrindo a tampa... olha o berço interno!', 'Opening the lid... look at the inner tray!'), lidClose: P('Fechando com cuidado.', 'Closing it gently.'),
  resetv: P('Vista restaurada.', 'View reset.'),
  noVideo: P('Esse vídeo ainda não tem arquivo — envie o .mp4 vertical no admin.', 'This video has no file yet — upload the vertical .mp4 in the admin.'),
  look: P('Olha esse: ', 'Check this one: '),
  noAudio: P('Ainda sem áudio — adicione .mp3 licenciados ou o link da playlist no admin.', 'No audio yet — add licensed .mp3 files or the playlist link in the admin.'),
  nowPlaying: P('Tocando uma faixa demo gerada pra prévia — troque pelas suas no admin.', 'Playing a generated demo track for the preview — swap in yours in the admin.'),
  sent: P('Mensagem anotada! Respondo assim que puder.', 'Message noted! I’ll reply as soon as I can.'),
  lang: P('Voltamos pro português!', 'Switched to English!'),
  idle: [[P('Explorando novas ideias...', 'Exploring new ideas...'), 'lado'], [P('Arraste as categorias pro lado pra ver mais.', 'Drag the categories sideways to see more.'), 'talk'], [P('Hmm... qual será a próxima criação?', 'Hmm... what will I make next?'), 'pensa'], [P('Trabalhando num projeto novo...', 'Working on a new project...'), 'laptop']],
  sticker: { ideia: [P('Tive uma ideia!', 'I’ve got an idea!'), 'pensa'], apaixonado: [P('Amo o que eu faço <3', 'I love what I do <3'), 'love'], confuso: [P('Hã? Peraí...', 'Huh? Wait...'), 'pensa'], bravo: [P('Prazo apertado? Deixa comigo.', 'Tight deadline? Leave it to me.'), 'joinha'], nervoso: [P('Calma, tá quase no prazo...', 'Easy, it’s almost on time...'), 'o'], animado: [P('Bora criar coisa nova!', 'Let’s make something new!'), 'ri'], musica: [P('Trabalhando com trilha sonora', 'Working with a soundtrack'), 'love'], chocado: [P('Viu esse orçamento?!', 'Did you see that quote?!'), 'o'], feliz: [P('E aí! Curtiu a bancada?', 'Hey! Like the desk?'), 'sorriso'], piscando: [P('Tem coisa boa escondida nas embalagens ;)', 'There’s good stuff hidden in the packaging ;)'), 'pisca'], pensando: [P('Hmm... qual será a próxima ideia?', 'Hmm... what’s the next idea?'), 'pensa'], surpreso: [P('Opa, você me achou!', 'Oh, you found me!'), 'o'], concentrado: [P('Foco total no detalhe.', 'Full focus on the details.'), 'laptop'], celebrando: [P('Projeto entregue! Bora comemorar!', 'Project delivered! Let’s celebrate!'), 'ri'] }
};
var DEFAULT_POS = {
  hw1: { x: 29.9, y: 10.7, r: -3 }, hw2: { x: 36.3, y: 22.3, r: 2 }, hw3: { x: 27.1, y: 31.8, r: -2 }, hpill: { x: 29.9, y: 48.8, r: -1.5 },
  blk1: { x: 65.8, y: 44.4, r: -4 },
  im: { x: 1.5, y: 10.3, r: -2 }, check: { x: 2.2, y: 26.4, r: -4 }, cracha: { x: 13.2, y: 28.4, r: 5 }, ticket: { x: 0.9, y: 47.4, r: -6 },
  blue: { x: 71.9, y: 10.3, r: 4 }, yt: { x: 83.7, y: 10.3, r: 4 }, sketch: { x: 72, y: 26.6, r: 3 }, badges: { x: 92.4, y: 59, r: -3 },
  toggle: { x: 19.2, y: 9.5, r: -6 }, winbtns: { x: 61.4, y: 9.4, r: 2 }, cursor: { x: 66.4, y: 28.8, r: -8 }, bubble: { x: 29.1, y: 25, r: 0 },
  pencil: { x: 24.6, y: 12.1, r: 28 }, ball: { x: 84, y: 64.5, r: 0 }
};
var STARS = [[24, 13, 26, '#e0262e'], [70, 12, 22, '#3f9a55'], [30, 47, 24, '#2457c5'], [74, 32, 26, '#e9558b'], [40, 52, 20, '#7b3fe0'], [62, 30, 18, '#22c3e6'], [55, 9, 16, '#f2e33a'], [7, 74, 20, '#22c3e6'], [86, 76, 18, '#e0262e'], [46, 77, 16, '#e9558b']];
var TOOLS = [['Photoshop', 'Ps', '#1f6fd0'], ['Illustrator', 'Ai', '#d9822b'], ['InDesign', 'Id', '#d6336c'], ['After Effects', 'Ae', '#6a4fd6'], ['Premiere', 'Pr', '#5b3fa8'], ['Figma', 'Fg', '#1d1a17'], ['CorelDRAW', 'Cdr', '#2f8a4a']];
var COVER_BG = ['linear-gradient(160deg,#e9558b,#7b2a52)', 'linear-gradient(160deg,#2457c5,#14214f)', 'linear-gradient(160deg,#f5c842,#b4621c)', 'linear-gradient(160deg,#3f9a55,#173d24)', 'linear-gradient(160deg,#7b3fe0,#2c1458)', 'linear-gradient(160deg,#22c3e6,#0f4d66)'];
var PINS = ['pin', 'pin b', 'pin y', 'pin g'];
var FAV_AR = ['2/3', '3/4', '2/3', '1/1'];
var MOOD_ORDER = ['neutro', 'feliz', 'piscando', 'pensando', 'surpreso', 'concentrado', 'celebrando', 'timido'];
var CARD_VERTICAL = false; // definido no admin (Modelos 3D > Cartão > Orientação)
var EMB_TYPE = ['box', 'twist', 'p700', 'coffee', 'box', 'bagc', 'bagk', 'box', 'box'];
var EMB_DEF = { box: { t: 'box' }, twist: { t: 'twist', color: '#e9558b' }, p700: { t: 'p700', art: '/static/media/61791895e68f12352748aba2ab32a781.png' }, coffee: { t: 'coffee', art: '/static/media/51cd2377dd4df54d47a4b60e4ea8ff90.jpg', lid: '#f4f1ea' }, bagc: { t: 'bag', k: 'bagc', front: '/static/media/9710c66057681f78652cc604f658b1a5.jpg', back: '/static/media/9710c66057681f78652cc604f658b1a5.jpg', side: '#ff8fb6', handle: '#e9558b', inside: '#b8406a' }, bagk: { t: 'bag', k: 'bagk', front: '/static/media/3f97f09424eb5142b1dfb09359d9be44.jpg', back: '/static/media/5aa615e6de8df066d4415333d298b70c.jpg', side: '/static/media/f6d0bfbceaf6a68f2ba49666f962132f.jpg', handle: '#7a5530', inside: '#7d5a33' } };
var EMB_DONE = [
  [P('Twist vermelho', 'Red twist'), { t: 'twist', color: '#e0262e' }], [P('Twist verde limão', 'Lime twist'), { t: 'twist', color: '#62c93a' }], [P('Twist roxo', 'Purple twist'), { t: 'twist', color: '#7b3fe0' }],
  [P('700 ml “Um brinde às ideias”', '700 ml “A toast to ideas”'), { t: 'p700', art: '/static/media/61791895e68f12352748aba2ab32a781.png' }],
  [P('Café “café & ideias”', 'Coffee “coffee & ideas”'), { t: 'coffee', art: '/static/media/51cd2377dd4df54d47a4b60e4ea8ff90.jpg', lid: '#f4f1ea' }],
  [P('Café Night Shift', 'Night Shift coffee'), { t: 'coffee', art: '/static/media/0ee3b65d3c9a77eb3eb2117898899988.jpg', lid: '#1f1d1b' }],
  [P('Caixa “Para alguém especial”', '“For someone special” box'), { t: 'box' }],
  [P('Sacola floral colorida', 'Colorful floral bag'), { t: 'bag', k: 'bagc', front: '/static/media/9710c66057681f78652cc604f658b1a5.jpg', back: '/static/media/9710c66057681f78652cc604f658b1a5.jpg', side: '#ff8fb6', handle: '#e9558b', inside: '#b8406a' }],
  [P('Sacola listrada VT studio', 'Striped VT studio bag'), { t: 'bag', k: 'bagc', front: '/static/media/fc59e2857a0e14c7d9052baeefad259d.jpg', back: '/static/media/fc59e2857a0e14c7d9052baeefad259d.jpg', side: '#2f62cf', handle: '#ffe14d', inside: '#1d3f91' }],
  [P('Sacola kraft carimbada', 'Stamped kraft bag'), { t: 'bag', k: 'bagk', front: '/static/media/3f97f09424eb5142b1dfb09359d9be44.jpg', back: '/static/media/5aa615e6de8df066d4415333d298b70c.jpg', side: '/static/media/f6d0bfbceaf6a68f2ba49666f962132f.jpg', handle: '#7a5530', inside: '#7d5a33' }],
  [P('Sacola kraft lisa', 'Plain kraft bag'), { t: 'bag', k: 'bagk', front: '/static/media/5aa615e6de8df066d4415333d298b70c.jpg', back: '/static/media/5aa615e6de8df066d4415333d298b70c.jpg', side: '/static/media/f6d0bfbceaf6a68f2ba49666f962132f.jpg', handle: '#f4efe6', inside: '#7d5a33' }]
];
var EMB_ICO = {
  box: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M10 22 L30 12 L50 22 L50 44 L30 54 L10 44 Z" fill="#f5a3bd" stroke="#2a1d14" stroke-width="3" stroke-linejoin="round"/><path d="M10 22 L30 32 L50 22 M30 32 V54" fill="none" stroke="#2a1d14" stroke-width="3" stroke-linejoin="round"/><path d="M20 17 L40 27" stroke="#fff" stroke-width="3"/></svg>',
  twist: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M36 4 L36 22" stroke="#c2185b" stroke-width="4" stroke-linecap="round"/><rect x="14" y="20" width="32" height="6" rx="3" fill="#e9558b" stroke="#2a1d14" stroke-width="2.5"/><path d="M16 26 L44 26 L40 56 L20 56 Z" fill="rgba(233,85,139,.55)" stroke="#2a1d14" stroke-width="2.5" stroke-linejoin="round"/><path d="M36 26 L35 54" stroke="#c2185b" stroke-width="3"/></svg>',
  p700: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M13 10 L47 10 L42 56 L18 56 Z" fill="rgba(220,235,245,.6)" stroke="#2a1d14" stroke-width="2.5" stroke-linejoin="round"/><rect x="11" y="7" width="38" height="5" rx="2.5" fill="#fff" stroke="#2a1d14" stroke-width="2.5"/><path d="M22 28 H38 M20 34 H40 M23 40 H37" stroke="#2a1d14" stroke-width="3" stroke-linecap="round"/></svg>',
  coffee: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M17 20 L43 20 L39 56 L21 56 Z" fill="#fdf7f1" stroke="#2a1d14" stroke-width="2.5" stroke-linejoin="round"/><path d="M13 20 L47 20 L45 14 L15 14 Z" fill="#fdf7f1" stroke="#2a1d14" stroke-width="2.5" stroke-linejoin="round"/><path d="M19 14 C21 6 39 6 41 14" fill="#fdf7f1" stroke="#2a1d14" stroke-width="2.5"/><rect x="23" y="32" width="14" height="9" rx="2" fill="#5a3820"/></svg>'
};
EMB_ICO.bagc = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22 20 C22 8 38 8 38 20" fill="none" stroke="#e9558b" stroke-width="3.5"/><rect x="12" y="20" width="36" height="36" rx="3" fill="#ff7aa8" stroke="#2a1d14" stroke-width="2.5"/><circle cx="22" cy="32" r="4" fill="#ffe14d"/><circle cx="38" cy="44" r="4" fill="#fff"/><rect x="20" y="38" width="20" height="8" rx="2" fill="#fdf7f1"/></svg>';
EMB_ICO.bagk = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22 20 C22 8 38 8 38 20" fill="none" stroke="#7a5530" stroke-width="3.5"/><rect x="12" y="20" width="36" height="36" rx="3" fill="#b98a56" stroke="#2a1d14" stroke-width="2.5"/><circle cx="30" cy="38" r="9" fill="none" stroke="#3a2414" stroke-width="2.5"/></svg>';
function icoUri(k) { return 'data:image/svg+xml;utf8,' + encodeURIComponent(EMB_ICO[k] || EMB_ICO.box); }
function cuboid(x, y, z, w, h, d, bg) {
  var f = function (W, H, tf, b, bb) { return { cls: 'cf', w: W, h: H, l: -W / 2, t: -H / 2, tf: 'translate3d(' + x + 'px,' + y + 'px,' + z + 'px) ' + tf, clip: 'none', bg: b, b: bb, bd: 'none', rad: '1px' }; };
  return [f(w, h, 'translateZ(' + d / 2 + 'px)', bg.f, 1), f(w, h, 'rotateY(180deg) translateZ(' + d / 2 + 'px)', bg.b || bg.s, .85), f(d, h, 'rotateY(-90deg) translateZ(' + w / 2 + 'px)', bg.s, .8), f(d, h, 'rotateY(90deg) translateZ(' + w / 2 + 'px)', bg.s, .8), f(w, d, 'rotateX(90deg) translateZ(' + h / 2 + 'px)', bg.t || bg.s, 1.08), f(w, d, 'rotateX(-90deg) translateZ(' + h / 2 + 'px)', bg.s, .6)];
}
function bottleParts(art, ry) {
  var o = [], C = function (q) { q.n = q.n || 28; return cylParts(q, ry); };
  o.push(diskPart(46, 136, '#d6d6d2'));
  o = o.concat(C({ rt: 46, rb: 46, h: 232, y: 20, img: art, cls: 'cf', rot: -90 }));
  o = o.concat(C({ rt: 33, rb: 46, h: 16, y: -104, color: '#efefec', cls: 'cf' }));
  o = o.concat(C({ rt: 34, rb: 34, h: 12, y: -118, color: '#262626', cls: 'cf' }));
  o = o.concat(C({ rt: 31, rb: 34, h: 32, y: -140, color: '#1c1c1c', cls: 'cf' }));
  o.push(diskPart(31, -156, '#2b2b2b'));
  o = o.concat(C({ rt: 9, rb: 11, h: 12, y: -162, x: 10, color: '#111', cls: 'cf', n: 12 }));
  o.push({ cls: 'cf2', w: 50, h: 40, l: -25, t: -20, tf: 'translate3d(-8px,-172px,0) rotateZ(-14deg)', clip: 'none', bg: 'transparent', b: 1, bd: '8px solid #1c1c1c', rad: '25px 25px 8px 8px' });
  return o;
}
function tileParts(art) {
  var o = cuboid(0, -24, 0, 210, 210, 10, { f: 'url(' + art + ') center/cover', b: 'url(/static/media/05525bf4a91382942aebb8bd0e9757e8.jpg) center/cover', s: '#f1efe9', t: '#fbfaf6' });
  [-66, 66].forEach(function (x) { o = o.concat(cuboid(x, 92, 0, 24, 30, 44, { f: '#1d1d1d', s: '#111', t: '#2a2a2a' })); });
  return o;
}
function mugParts(art, hc, k) {
  var o = [], C = function (q) { q.n = 18; q.rt *= k; q.rb *= k; q.h *= k; q.y *= k; return cylParts(q, 0); };
  o = o.concat(C({ rt: 80, rb: 80, h: 180, y: 0, img: art, cls: 'cf', rot: -90 }));
  o.push(diskPart(78 * k, -90 * k, 'radial-gradient(circle,#5a3820 0 70%,#f4efe6 72%)'));
  o.push({ cls: 'cf2', w: (62 * k).toFixed(1), h: (112 * k).toFixed(1), l: (-31 * k).toFixed(1), t: (-56 * k).toFixed(1), tf: 'translate3d(' + (104 * k).toFixed(1) + 'px,0,0)', clip: 'inset(0 0 0 ' + (12 * k).toFixed(1) + 'px)', bg: 'transparent', b: 1, bd: (16 * k).toFixed(1) + 'px solid ' + hc, rad: '0 ' + (60 * k).toFixed(1) + 'px ' + (60 * k).toFixed(1) + 'px 0' });
  return o;
}
function nz(a) { return a.map(function (q) { if (q.bd == null) q.bd = 'none'; if (q.rad == null) q.rad = '0'; return q; }); }
function bagParts(c, k) {
  var W = 150, H = 180, D = 70, yc = 22, o = [];
  var u = function (v) { return v.charAt(0) === '/' ? 'url(' + v + ') center/cover' : v; };
  var f = function (w, h, tf, bg, b, cls) { return { cls: cls || 'cf', w: (w * k).toFixed(1), h: (h * k).toFixed(1), l: (-w * k / 2).toFixed(1), t: (-h * k / 2).toFixed(1), tf: tf, clip: 'none', bg: bg, b: b, bd: 'none', rad: (2 * k).toFixed(1) + 'px' }; };
  var px = function (v) { return (v * k).toFixed(1) + 'px'; };
  o.push(f(W - 6, D - 6, 'translate3d(0,' + px(yc - H / 2 + 10) + ',0) rotateX(90deg)', c.inside, 1, 'cf2'));
  o.push(f(W, H, 'translate3d(0,' + px(yc) + ',' + px(D / 2) + ')', u(c.front), 1));
  o.push(f(W, H, 'translate3d(0,' + px(yc) + ',' + px(-D / 2) + ') rotateY(180deg)', u(c.back), .8));
  var side = 'linear-gradient(90deg,rgba(0,0,0,.14),rgba(0,0,0,0) 46%,rgba(0,0,0,.18) 50%,rgba(0,0,0,0) 54%,rgba(0,0,0,.14)),' + u(c.side);
  o.push(f(D, H, 'translate3d(' + px(-W / 2) + ',' + px(yc) + ',0) rotateY(-90deg)', side, .86));
  o.push(f(D, H, 'translate3d(' + px(W / 2) + ',' + px(yc) + ',0) rotateY(90deg)', side, .86));
  o.push(f(W, D, 'translate3d(0,' + px(yc + H / 2) + ',0) rotateX(-90deg)', u(c.side), .6));
  [D / 2 - 7, -D / 2 + 7].forEach(function (z) {
    o.push({ cls: 'cf2', w: (62 * k).toFixed(1), h: (60 * k).toFixed(1), l: (-31 * k).toFixed(1), t: (-30 * k).toFixed(1), tf: 'translate3d(0,' + px(yc - H / 2 - 24) + ',' + px(z) + ')', clip: 'inset(0 0 ' + px(7) + ' 0)', bg: 'transparent', b: 1, bd: px(6) + ' solid ' + c.handle, rad: px(34) + ' ' + px(34) + ' 0 0' });
  });
  return o;
}
function hexA(h, a) { var n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
function shade(h, f) { var n = parseInt(h.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255; var m = function (x) { return Math.max(0, Math.min(255, Math.round(x * f))); }; return 'rgb(' + m(r) + ',' + m(g) + ',' + m(b) + ')'; }
function cupParts(cfg, ry, sc, lidUp, n) {
  var o = [], k = sc || 1, N = n || 28, L = lidUp || 0, add = function (a) { o = o.concat(a); };
  var C = function (q) { q.rt *= k; q.rb *= k; q.h *= k; q.y *= k; q.n = q.n || N; if (q.z) q.z *= k; return cylParts(q, ry); };
  var D = function (r, y, c, x, cls) { return diskPart(r * k, y * k, c, (x || 0) * k, cls); };
  if (cfg.t === 'twist') {
    var c = cfg.color;
    o.push(D(42, 95, hexA(c, .7), 0, 'cd2'));
    add(C({ rt: 56, rb: 42, h: 170, y: 10, color: hexA(c, .42), cls: 'cf2' }));
    add(C({ rt: 3, rb: 3, h: 210, y: -60 + L, color: shade(c, .78), cls: 'cf2', n: 6, flat: true, x: 0 }));
    add(C({ rt: 59, rb: 59, h: 9, y: -79 + L, color: hexA(c, .9), cls: 'cf2' }));
    o.push(D(59, -83.5 + L, 'radial-gradient(circle,' + hexA(c, .55) + ' 0 80%,' + hexA(c, .9) + ' 81%)', 0, 'cd2'));
  } else if (cfg.t === 'p700') {
    o.push(D(42, 100, 'rgba(225,238,248,.55)', 0, 'cd2'));
    add(C({ rt: 58, rb: 42, h: 180, y: 10, color: 'rgba(225,238,248,.30)', cls: 'cf2' }));
    add(C({ rt: 58.8, rb: 42.8, h: 180, y: 10, img: cfg.art, cls: 'cf', flat: true, rot: -90 }));
    add(C({ rt: 62, rb: 62, h: 6, y: -82, color: 'rgba(245,250,255,.85)', cls: 'cf2' }));
  } else if (cfg.t === 'coffee') {
    var lc = cfg.lid || '#f4f1ea';
    o.push(D(42, 90, shade(lc, .85), 0, 'cd2'));
    add(C({ rt: 56, rb: 42, h: 160, y: 10, img: cfg.art, cls: 'cf', rot: -90 }));
    add(C({ rt: 60, rb: 60, h: 12, y: -74 + L, color: lc, cls: 'cf' }));
    o.push(D(59, -80 + L, shade(lc, .94), 0, 'cd2'));
    add(C({ rt: 46, rb: 56, h: 12, y: -86 + L, color: shade(lc, 1.03), cls: 'cf' }));
    o.push(D(46, -92 + L, 'radial-gradient(circle,' + shade(lc, .9) + ' 0 62%,' + shade(lc, 1.04) + ' 63%)', 0, 'cd2'));
    o.push(D(5, -92.6 + L, '#2a1d14', 30, 'cd2'));
  }
  return o;
}
function boxMini(k) {
  var bg = 'radial-gradient(circle,#fff 18%,transparent 21%) 0 0/11px 11px,#ef7fa3', f = function (w, h, tf, b) { return { cls: 'cf', w: w * k, h: h * k, l: -w * k / 2, t: -h * k / 2, tf: tf, clip: 'none', bg: bg, b: b }; };
  return [f(90, 70, 'translateZ(' + 35 * k + 'px)', 1), f(90, 70, 'rotateY(180deg) translateZ(' + 35 * k + 'px)', .8), f(70, 70, 'rotateY(90deg) translateZ(' + 45 * k + 'px)', .85), f(70, 70, 'rotateY(-90deg) translateZ(' + 45 * k + 'px)', .85), f(90, 70, 'rotateX(90deg) translateZ(' + 35 * k + 'px)', 1.08), f(90, 70, 'rotateX(-90deg) translateZ(' + 35 * k + 'px)', .7)];
}
function cylParts(o, ry) {
  var out = [], n = o.n || 28, ta = Math.tan(Math.PI / n), wt = 2 * o.rt * ta + 1.4, wb = 2 * o.rb * ta + 1.4, wm = Math.max(wt, wb);
  var L = Math.sqrt(o.h * o.h + (o.rb - o.rt) * (o.rb - o.rt)), tilt = Math.atan2(o.rb - o.rt, o.h) * 180 / Math.PI, rm = (o.rt + o.rb) / 2;
  var clip = wt < wb ? 'polygon(' + ((wm - wt) / 2).toFixed(1) + 'px 0, ' + ((wm + wt) / 2).toFixed(1) + 'px 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, ' + ((wm + wb) / 2).toFixed(1) + 'px 100%, ' + ((wm - wb) / 2).toFixed(1) + 'px 100%)';
  for (var i = 0; i < n; i++) {
    var a = i * 360 / n + (o.rot || 0), lit = Math.cos((a + ry + 28) * Math.PI / 180);
    out.push({ cls: o.cls || 'cf', w: wm.toFixed(1), h: L.toFixed(1), l: (-wm / 2).toFixed(1), t: (-L / 2).toFixed(1),
      tf: 'translate3d(' + (o.x || 0) + 'px,' + o.y + 'px,' + (o.z || 0) + 'px) rotateY(' + a.toFixed(2) + 'deg) translateZ(' + rm.toFixed(1) + 'px) rotateX(' + tilt.toFixed(2) + 'deg)', clip: clip,
      bg: o.img ? 'url(' + o.img + ') ' + (-i * wm).toFixed(1) + 'px 0 / ' + (n * wm).toFixed(1) + 'px ' + L.toFixed(1) + 'px' : o.color, b: (o.flat ? 1 : 0.7 + 0.36 * Math.max(0, lit)).toFixed(2) });
  }
  return out;
}
function diskPart(r, y, color, x, cls) { return { cls: cls || 'cd2', w: 2 * r, h: 2 * r, l: -r, t: -r, tf: 'translate3d(' + (x || 0) + 'px,' + y + 'px,0) rotateX(90deg)', clip: 'circle(50%)', bg: color, b: 1 }; }
var GP_FIRST = [0, 0, 3, 4, 5, 6];
var CAT_ORDER = [0, 7, 1, 2, 8, 3, 4, 5, 6];
var MOODFX = { ideia: ['pensando', 'bulb'], apaixonado: ['feliz', 'hearts'], confuso: ['pensando', 'question'], bravo: ['concentrado', 'vein'], nervoso: ['surpreso', 'sweat'], animado: ['celebrando', 'sparkle'], musica: ['feliz', 'notes'], chocado: ['surpreso', 'shock'] };
var CYCLE = ['feliz', 'ideia', 'piscando', 'apaixonado', 'pensando', 'confuso', 'surpreso', 'nervoso', 'concentrado', 'bravo', 'celebrando', 'animado', 'musica', 'chocado'];
var FORCE_MOBILE = false;
var SITE = window.SITE || {};
var SP_EMBED = SITE.spotify_embed || '';
var SPC = { ctrl: null, host: null, uri: '', creating: null, want: false, adv: false, last: 0 };
var SP_API = null, SP_Q = [];
function spApi(cb) {
  if (SP_API) return cb(SP_API);
  SP_Q.push(cb);
  if (SP_Q.length > 1) return;
  window.onSpotifyIframeApiReady = function (api) { SP_API = api; var q = SP_Q; SP_Q = []; q.forEach(function (f) { try { f(api); } catch (e) {} }); };
  var sc = document.createElement('script'); sc.src = 'https://open.spotify.com/embed/iframe-api/v1'; sc.async = true; document.head.appendChild(sc);
}
function plCover(i) { var own = SITE.tracks && SITE.tracks[i] && SITE.tracks[i].cover; if (SITE.pl_cover && (SP_EMBED || !own)) return SITE.pl_cover; if (own) return own; return COVERS[3][i % COVERS[3].length]; }
var PERS_SITE = null, GP_SITE = null, SKILLS_SITE = null, METS_SITE = null, CAT_EMPTY = {};
function kindCfg(p) {
  var a = p.art || {}, k = p.kind;
  if (k === 'twist') return { t: 'twist', color: p.color || '#e9558b' };
  if (k === 'p700') return { t: 'p700', art: a.front || EMB_DEF.p700.art };
  if (k === 'coffee') return { t: 'coffee', art: a.front || EMB_DEF.coffee.art, lid: p.color || '#f4f1ea' };
  if (k === 'bagc' || k === 'bagk') { var base = EMB_DEF[k]; return { t: 'bag', k: k, front: a.front || base.front, back: a.back || a.front || base.back, side: a.side || p.color || base.side, handle: p.color2 || base.handle, inside: base.inside }; }
  return { t: 'box' };
}
function withGlb(cfg, p) { if (p && p.glb) cfg.glb = p.glb; return cfg; }
(function applySite() {
  try {
    if (SITE.texts) ['pt', 'en'].forEach(function (l) { if (SITE.texts[l]) Object.keys(SITE.texts[l]).forEach(function (k) { T[l][k] = SITE.texts[l][k]; }); });
    var PJ = SITE.projects || {};
    var SUBC = SITE.subcats || {};
    var tagIdx = function (key, tag) { var L = SUBC[key]; if (!L) return tag || 1; for (var q = 0; q < L.length; q++) if (L[q].id === tag) return q + 1; return -1; };
    CATS.forEach(function (c) {
      if (SUBC[c.key]) c.filters = [c.filters[0]].concat(SUBC[c.key].map(function (x) { return P(x.pt, x.en || x.pt); }));
      var list = PJ[c.key]; if (!list || !list.length) { CAT_EMPTY[c.key] = 1; return; }
      c._data = list;
      if (c.key === 'grafica') return;
      c.projects = list.map(function (p) { return [p.title, tagIdx(c.key, p.tag), undefined, p]; });
      var imgs = []; list.forEach(function (p) { (p.images || []).forEach(function (im) { imgs.push(im); }); });
      if (imgs.length) {
        IMG[c.key] = list.map(function (p) { return p.images && p.images[0] ? p.images[0].src : imgs[0].src; });
        GAL[c.key] = imgs.map(function (im) { return [im.src, im.ar || 1, im.fmt || '']; });
        c.photos = imgs.map(function (im) { return im.label || P('Foto', 'Photo'); });
      }
      var v = list.filter(function (p) { return p.video && p.video.src; })[0];
      if (v) { c._video = v.video; c.video = v.title; } else c.video = null;
    });
    if (PJ.embalagens && PJ.embalagens.length) EMB_DONE = PJ.embalagens.map(function (p) { return [p.title, withGlb(kindCfg(p), p)]; });
    if (PJ.personalizados && PJ.personalizados.length) {
      PERS_SITE = { mug: [], bottle: [], tile: [] };
      PJ.personalizados.forEach(function (p) { var k = PERS_SITE[p.kind] ? p.kind : 'mug'; if (p.art && p.art.front) PERS_SITE[k].push(p); });
    }
    if (PJ.grafica && PJ.grafica.length) {
      var MODE = { card: 0, flyer: 1, banner: 2, voucher: 3, sheet: 4 };
      GP_SITE = PJ.grafica.map(function (p) { var a = p.art || {}; return { name: p.title, tag: tagIdx('grafica', p.tag), mode: MODE[p.kind] || 0, f: a.front || '', b: a.back || '', mf: a.mask_front || '', mb: a.mask_back || '', vert: !!p.vertical }; }).filter(function (g) { return g.f; });
      if (!GP_SITE.length) GP_SITE = null;
    }
    if (SITE.tracks && SITE.tracks.length) TRACKS = SITE.tracks.map(function (x, i) { return { name: x.name, src: x.src || '', d: x.dur || '', c: x.cover || COVERS[3][i % 5], url: x.url || '', artist: x.artist || '', sp: (/track[\/:]([A-Za-z0-9]{22})/.exec(x.url || '') || [])[1] || '' }; });
    if (SITE.spotify) SPOTIFY_PLAYLIST = SITE.spotify;
    if (SITE.pl_title) ['pt', 'en'].forEach(function (l) { T[l].plBig = SITE.pl_title; T[l].plGenre = SITE.pl_sub || ''; });
    if (SITE.tools && SITE.tools.length) TOOLS = SITE.tools.map(function (x) { return [x.name, x.ab, x.color, x.level]; });
    if (SITE.comps && SITE.comps.length) SKILLS_SITE = SITE.comps;
    if (SITE.metrics && SITE.metrics.length) METS_SITE = SITE.metrics.map(function (m) { return { v: +m.v || 0, d: m.d ? 1 : 0, pre: m.pre || '', suf: P(m.suf_pt || m.suf || '', m.suf_en || m.suf || ''), l: P(m.label_pt || '', m.label_en || m.label_pt || ''), c: m.color || '#e9558b' }; });
    if (SITE.favs) SITE.favs.forEach(function (g, gi) { if (g && g.length && COVERS[gi]) { COVERS[gi] = g.map(function (x) { return x.img; }); COVER_NAMES[gi] = g.map(function (x) { return x.name; }); } });
    ['pt', 'en'].forEach(function (l) {
      ['demo', 'demo1', 'coversDemo', 'metTag', 'photoDemo', 'ex', 'lvl', 'radarNote', 'demoClip', 'noFileShort', 'dieNote'].forEach(function (k) { if (typeof T[l][k] === 'string' && !(SITE.texts && SITE.texts[l] && SITE.texts[l][k])) T[l][k] = ''; });
      Object.keys(T[l]).forEach(function (k) { var v = T[l][k]; if (typeof v === 'string' && !(SITE.texts && SITE.texts[l] && SITE.texts[l][k])) T[l][k] = v.replace(/\s*\((texto de )?(exemplo|example)\)/gi, '').replace(/\s*[—-]\s*texto de exemplo/gi, '').replace(/\s*·\s*demo/gi, '').replace(/^Texto de exemplo\s*—\s*/i, ''); });
    });
    if (SITE.stickers) Object.keys(SITE.stickers).forEach(function (k) { STICKERS[k] = SITE.stickers[k]; });
  } catch (e) { if (window.console) console.warn('applySite', e); }
})();
var FALAS = {"project":"Portfolio interativo — Victor Trindade","version":"1.0","language":"pt-BR / en-US","tone":"Criativo, profissional, humor leve inspirado no timing de Chandler Bing; referências culturais variadas, sem excesso.","notes":["Cinco variações por gatilho, selecionáveis aleatoriamente.","O texto deve surgir com efeito de digitação, sem bloquear a navegação.","Falas de contato e erros devem priorizar clareza.","As referências são pontuais, e não precisam aparecer em todas as interações."],"moods_allowed":["neutro","feliz","piscando","pensando","surpreso","concentrado","celebrando","timido","ideia","apaixonado","confuso","bravo","nervoso","animado","musica","chocado"],"poses_allowed":["fala","sorriso","ri","pisca","o","pensa","love","joinha","tchau","lado","laptop"],"triggers":[{"trigger":"hello","variants":[{"pt":"Opa, chegou! Ignora a bagunça, é criativa.","en":"Hey, welcome! Ignore the mess. It’s creative.","mood":"feliz","pose":"sorriso"},{"pt":"Bem-vindo ao episódio piloto do meu portfólio.","en":"Welcome to the pilot episode of my portfolio.","mood":"piscando","pose":"pisca"},{"pt":"Eu ia me apresentar. Acabei fazendo um site inteiro.","en":"I meant to introduce myself. Built a whole site instead.","mood":"pensando","pose":"pensa"},{"pt":"Pode entrar! Não precisa assistir às temporadas anteriores.","en":"Come on in! No need to watch previous seasons.","mood":"animado","pose":"fala"},{"pt":"Esse é meu cantinho na internet. Tem easter eggs.","en":"My little corner of the internet. Easter eggs included.","mood":"neutro","pose":"joinha"}]},{"trigger":"home","variants":[{"pt":"De volta ao início. Um clássico dos videogames.","en":"Back to the start. A gaming classic.","mood":"feliz","pose":"sorriso"},{"pt":"Voltamos pro lobby. Café não incluso.","en":"Back to the lobby. Coffee not included.","mood":"piscando","pose":"pisca"},{"pt":"Home sweet home. Até no navegador.","en":"Home sweet home. Even in a browser.","mood":"pensando","pose":"pensa"},{"pt":"O episódio em que a gente volta pra casa.","en":"The one where we go back home.","mood":"animado","pose":"fala"},{"pt":"Recomeçar também faz parte do roteiro.","en":"Starting over is part of the story.","mood":"neutro","pose":"joinha"}]},{"trigger":"done","variants":[{"pt":"Pronto! Essa parte teve um final feliz.","en":"Done! This part got a happy ending.","mood":"feliz","pose":"sorriso"},{"pt":"Missão concluída. Sem cena pós-créditos.","en":"Mission complete. No post-credits scene.","mood":"piscando","pose":"pisca"},{"pt":"Fechamos esse capítulo. Próximo episódio?","en":"That’s a wrap. Next episode?","mood":"pensando","pose":"pensa"},{"pt":"Tudo certo. Até parece que ensaiamos.","en":"All set. Almost like we rehearsed.","mood":"animado","pose":"fala"},{"pt":"Concluído! Meu mini eu aprova.","en":"Finished! Mini-me approves.","mood":"neutro","pose":"joinha"}]},{"trigger":"idle","variants":[{"pt":"Sem pressa. Eu também gosto de observar os detalhes.","en":"No rush. I like looking at the details too.","mood":"feliz","pose":"sorriso"},{"pt":"Tá admirando o cenário? Justo.","en":"Admiring the set? Fair enough.","mood":"piscando","pose":"pisca"},{"pt":"Esse silêncio tá muito The Office.","en":"This silence is very The Office.","mood":"pensando","pose":"pensa"},{"pt":"Pode explorar. Não tem prova no final.","en":"Feel free to explore. No final exam.","mood":"animado","pose":"fala"},{"pt":"A pausa dramática faz parte do roteiro.","en":"The dramatic pause is part of the script.","mood":"neutro","pose":"joinha"}]},{"trigger":"lang","variants":[{"pt":"Mudou o idioma? Internacionalizamos o episódio.","en":"New language? International episode unlocked.","mood":"feliz","pose":"sorriso"},{"pt":"Agora com legendas. Quer dizer, quase.","en":"Now with subtitles. Well, sort of.","mood":"piscando","pose":"pisca"},{"pt":"Troca de idioma desbloqueada.","en":"Language switch unlocked.","mood":"pensando","pose":"pensa"},{"pt":"Same Victor, different subtitles.","en":"Same Victor, different subtitles.","mood":"animado","pose":"fala"},{"pt":"Um pequeno crossover linguístico.","en":"A tiny linguistic crossover.","mood":"neutro","pose":"joinha"}]},{"trigger":"sticker","variants":[{"pt":"É um mini eu. Minha versão de bolso.","en":"It’s mini-me. Pocket edition.","mood":"feliz","pose":"sorriso"},{"pt":"Basicamente meu Funko Pop, só que fala.","en":"Basically my own Funko Pop, but it talks.","mood":"piscando","pose":"pisca"},{"pt":"Eu queria um assistente. Contratei a mim mesmo.","en":"I wanted an assistant. Hired myself.","mood":"pensando","pose":"pensa"},{"pt":"Fiz uma versão pequena de mim. Normal, né?","en":"Made a tiny version of myself. Totally normal.","mood":"animado","pose":"fala"},{"pt":"Esse mini eu tem menos reuniões que eu.","en":"Mini-me has fewer meetings than I do.","mood":"neutro","pose":"joinha"}]},{"trigger":"sobre","variants":[{"pt":"O episódio em que você conhece o Victor.","en":"The one where you meet Victor.","mood":"feliz","pose":"sorriso"},{"pt":"Tentar me definir em uma profissão só nunca funcionou.","en":"One job title was never going to cover it.","mood":"piscando","pose":"pisca"},{"pt":"Minha história de origem. Sem multiverso.","en":"My origin story. No multiverse required.","mood":"pensando","pose":"pensa"},{"pt":"Faço várias coisas. Chandler entenderia a explicação.","en":"I do a bit of everything. Chandler would get it.","mood":"animado","pose":"fala"},{"pt":"Prometo ser mais breve que o Michael Scott.","en":"I’ll be quicker than Michael Scott. Promise.","mood":"neutro","pose":"joinha"}]},{"trigger":"projetos","variants":[{"pt":"The One Where I Show You My Projects.","en":"The One Where I Show You My Projects.","mood":"feliz","pose":"sorriso"},{"pt":"Algumas ideias começaram pequenas. Outras nem tanto.","en":"Some ideas started small. Others, not so much.","mood":"piscando","pose":"pisca"},{"pt":"Cada projeto tem uma história. Alguns têm plot twist.","en":"Every project has a story. Some have plot twists.","mood":"pensando","pose":"pensa"},{"pt":"Meu universo criativo, sem ordem obrigatória.","en":"My creative universe. No watch order required.","mood":"animado","pose":"fala"},{"pt":"É quase um catálogo de temporadas criativas.","en":"Think of it as a catalog of creative seasons.","mood":"neutro","pose":"joinha"}]},{"trigger":"skills","variants":[{"pt":"Fui aprendendo uma coisa aqui, outra ali. Deu nisso.","en":"Learned a little here, a little there. Here we are.","mood":"feliz","pose":"sorriso"},{"pt":"Minha árvore de habilidades ficou diversificada.","en":"My skill tree got pretty diverse.","mood":"piscando","pose":"pisca"},{"pt":"Tenho skills. Telecinese ainda não é uma delas.","en":"I have skills. Telekinesis isn’t one yet.","mood":"pensando","pose":"pensa"},{"pt":"Alguns atalhos ajudam. Nenhum é magia.","en":"A few shortcuts help. None are magic.","mood":"animado","pose":"fala"},{"pt":"O modo multitarefa veio de fábrica.","en":"Multitasking came preinstalled.","mood":"neutro","pose":"joinha"}]},{"trigger":"videos","variants":[{"pt":"Luz, câmera... já editei. Pode assistir.","en":"Lights, camera… already edited. Enjoy.","mood":"feliz","pose":"sorriso"},{"pt":"Aqui as ideias ganham movimento.","en":"Here, ideas start moving.","mood":"piscando","pose":"pisca"},{"pt":"Uma boa edição sabe a hora de sair de cena.","en":"Good editing knows when to leave the scene.","mood":"pensando","pose":"pensa"},{"pt":"Tem vídeo que merece replay.","en":"Some videos deserve a replay.","mood":"animado","pose":"fala"},{"pt":"O timing faz a diferença. Até na piada.","en":"Timing matters. Even with jokes.","mood":"neutro","pose":"joinha"}]},{"trigger":"playlist","variants":[{"pt":"Toda boa ideia merece uma trilha sonora.","en":"Every good idea deserves a soundtrack.","mood":"feliz","pose":"sorriso"},{"pt":"Meu Spotify parece uma sitcom com várias temporadas.","en":"My Spotify is a sitcom with many seasons.","mood":"piscando","pose":"pisca"},{"pt":"A trilha muda, a vontade de criar continua.","en":"The soundtrack changes. The ideas keep coming.","mood":"pensando","pose":"pensa"},{"pt":"Se tocar Friends, você já sabe o clima.","en":"If Friends starts playing, you know the vibe.","mood":"animado","pose":"fala"},{"pt":"O DJ aqui é você. Sem pressão.","en":"You’re the DJ here. No pressure.","mood":"neutro","pose":"joinha"}]},{"trigger":"metricas","variants":[{"pt":"Aqui a criatividade encontra a matemática. Plot twist!","en":"Creativity meets math. Plot twist!","mood":"feliz","pose":"sorriso"},{"pt":"Gosto de ideias bonitas que também funcionam.","en":"I like pretty ideas that actually work.","mood":"piscando","pose":"pisca"},{"pt":"Os números entram em cena. Sem sustos.","en":"The numbers enter the scene. No jump scares.","mood":"pensando","pose":"pensa"},{"pt":"Design e resultado podem ser bons colegas.","en":"Design and results make a good team.","mood":"animado","pose":"fala"},{"pt":"Até as melhores ideias precisam de contexto.","en":"Even great ideas need context.","mood":"neutro","pose":"joinha"}]},{"trigger":"contato","variants":[{"pt":"Tem uma ideia? Adoro quando começa assim.","en":"Got an idea? Love when it starts like that.","mood":"feliz","pose":"sorriso"},{"pt":"Toda boa parceria começa com uma conversa.","en":"Every great collaboration starts with a chat.","mood":"piscando","pose":"pisca"},{"pt":"Quem sabe nosso próximo crossover começa aqui?","en":"Maybe our next crossover starts here?","mood":"pensando","pose":"pensa"},{"pt":"Pode chamar. Prometo não responder com um meme só.","en":"Say hi. I promise not to reply with just a meme.","mood":"animado","pose":"fala"},{"pt":"Vamos transformar esse e se em projeto?","en":"Let’s turn that what-if into a project.","mood":"neutro","pose":"joinha"}]},{"trigger":"publicidade","variants":[{"pt":"Uma boa ideia chama atenção. Uma ótima fica.","en":"A good idea gets noticed. A great one sticks.","mood":"feliz","pose":"sorriso"},{"pt":"Criatividade e estratégia: minha dupla dinâmica.","en":"Creativity and strategy: my dynamic duo.","mood":"piscando","pose":"pisca"},{"pt":"O briefing é o roteiro. A ideia muda o episódio.","en":"The brief is the script. The idea changes the plot.","mood":"pensando","pose":"pensa"},{"pt":"Uma boa campanha merece mais de cinco segundos.","en":"A good campaign deserves more than five seconds.","mood":"animado","pose":"fala"},{"pt":"O objetivo é sair do feed e ficar na memória.","en":"The goal: leave the feed and stay in your mind.","mood":"neutro","pose":"joinha"}]},{"trigger":"grafica","variants":[{"pt":"CMYK: um elenco de quatro protagonistas.","en":"CMYK: four leading characters.","mood":"feliz","pose":"sorriso"},{"pt":"Sim, eu reparo na gramatura do papel.","en":"Yes, I notice paper weight.","mood":"piscando","pose":"pisca"},{"pt":"Alguns detalhes não cabem numa tela.","en":"Some details just don’t fit on a screen.","mood":"pensando","pose":"pensa"},{"pt":"Um bom acabamento merece close-up.","en":"A great finish deserves a close-up.","mood":"animado","pose":"fala"},{"pt":"Escolher papel também é direção de arte.","en":"Choosing paper is art direction too.","mood":"neutro","pose":"joinha"}]},{"trigger":"embalagens","variants":[{"pt":"Amo vídeo de unboxing. Óbvio que faria um aqui.","en":"I love unboxing videos. Of course I made this.","mood":"feliz","pose":"sorriso"},{"pt":"Se fosse um Reels, eu assistia até o fim.","en":"If this were a Reel, I’d watch to the end.","mood":"piscando","pose":"pisca"},{"pt":"Essa caixa só precisava de um ASMR.","en":"This box just needs some ASMR.","mood":"pensando","pose":"pensa"},{"pt":"Pode olhar atrás também. Eu pensei nessa parte.","en":"Check the back too. I designed that part.","mood":"animado","pose":"fala"},{"pt":"A experiência começa antes de ver o produto.","en":"The experience starts before you see the product.","mood":"neutro","pose":"joinha"}]},{"trigger":"personalizados","variants":[{"pt":"Aqui os objetos ganham suas próprias skins.","en":"Here, everyday objects get custom skins.","mood":"feliz","pose":"sorriso"},{"pt":"Character customization, só que fora da tela.","en":"Character customization, but offline.","mood":"piscando","pose":"pisca"},{"pt":"Até uma caneca pode ter personalidade.","en":"Even a mug can have personality.","mood":"pensando","pose":"pensa"},{"pt":"A graça é fazer o comum virar único.","en":"The fun is making ordinary things unique.","mood":"animado","pose":"fala"},{"pt":"Se dá pra personalizar, eu já quero testar.","en":"If it can be customized, I want to try it.","mood":"neutro","pose":"joinha"}]},{"trigger":"produtos","variants":[{"pt":"Do e se ao existe de verdade.","en":"From what-if to actually real.","mood":"feliz","pose":"sorriso"},{"pt":"O protótipo é quase o episódio piloto.","en":"A prototype is basically the pilot episode.","mood":"piscando","pose":"pisca"},{"pt":"Algumas ideias merecem sair da tela.","en":"Some ideas deserve to leave the screen.","mood":"pensando","pose":"pensa"},{"pt":"O conceito virou objeto. Eu adoro essa parte.","en":"The concept became an object. Love this part.","mood":"animado","pose":"fala"},{"pt":"Design que dá pra pegar na mão? Sim, por favor.","en":"Design you can hold? Yes, please.","mood":"neutro","pose":"joinha"}]},{"trigger":"baloes","variants":[{"pt":"Aqui a criatividade ganha outra dimensão.","en":"Here, creativity gets another dimension.","mood":"feliz","pose":"sorriso"},{"pt":"Uma composição boa tem seu efeito especial.","en":"A great arrangement has its own special effect.","mood":"piscando","pose":"pisca"},{"pt":"Um toque de Up, sem sair voando.","en":"A little Up energy, minus the flying away.","mood":"pensando","pose":"pensa"},{"pt":"Cor, forma e um pouco de magia visual.","en":"Color, shape, and a little visual magic.","mood":"animado","pose":"fala"},{"pt":"Até o ar entrou no projeto.","en":"Even air got a role in this project.","mood":"neutro","pose":"joinha"}]},{"trigger":"handmade","variants":[{"pt":"Aqui o Ctrl+Z exige mais paciência.","en":"Undo takes a little more patience here.","mood":"feliz","pose":"sorriso"},{"pt":"Crafting na vida real. Sem botão de desfazer.","en":"Real-life crafting. No undo button.","mood":"piscando","pose":"pisca"},{"pt":"Feito à mão, com direito a bastidores.","en":"Handmade, behind-the-scenes included.","mood":"pensando","pose":"pensa"},{"pt":"O Pinterest inspirou. As mãos resolveram.","en":"Pinterest inspired it. My hands handled it.","mood":"animado","pose":"fala"},{"pt":"Nem toda ferramenta precisa de atualização.","en":"Not every tool needs an update.","mood":"neutro","pose":"joinha"}]},{"trigger":"sites","variants":[{"pt":"Era só um portfólio. Aí inventei um quarto.","en":"It was just a portfolio. Then I built a room.","mood":"feliz","pose":"sorriso"},{"pt":"Meu lado designer e meu lado dev negociam.","en":"My designer and developer sides negotiate.","mood":"piscando","pose":"pisca"},{"pt":"Sim, eu reparo nos detalhes. Às vezes demais.","en":"Yes, I notice details. Maybe too many.","mood":"pensando","pose":"pensa"},{"pt":"Uma boa interface não precisa explicar a piada.","en":"A good interface doesn’t explain the joke.","mood":"animado","pose":"fala"},{"pt":"Se explorar ficou fácil, a UX fez seu trabalho.","en":"If exploring feels easy, UX did its job.","mood":"neutro","pose":"joinha"}]},{"trigger":"videos_cat","variants":[{"pt":"Se você não percebeu o corte, talvez acertei.","en":"If you missed the cut, maybe I nailed it.","mood":"feliz","pose":"sorriso"},{"pt":"Às vezes volto a cena só pra ver a edição.","en":"Sometimes I rewind just to study the edit.","mood":"piscando","pose":"pisca"},{"pt":"Uma boa edição é questão de timing.","en":"Good editing is all about timing.","mood":"pensando","pose":"pensa"},{"pt":"O making of também merece atenção.","en":"The making-of deserves attention too.","mood":"animado","pose":"fala"},{"pt":"Cada frame tem seu momento de protagonista.","en":"Every frame gets its moment to shine.","mood":"neutro","pose":"joinha"}]},{"trigger":"filtro","variants":[{"pt":"Nova seleção. Seu algoritmo tá interessante.","en":"New selection. Your algorithm has taste.","mood":"feliz","pose":"sorriso"},{"pt":"Mudou o filtro? Novo episódio, mesmo universo.","en":"New filter? New episode, same universe.","mood":"piscando","pose":"pisca"},{"pt":"Curadoria ativada. Gostei do critério.","en":"Curation mode on. Nice choice.","mood":"pensando","pose":"pensa"},{"pt":"Organizando o elenco dos projetos.","en":"Organizing the cast of projects.","mood":"animado","pose":"fala"},{"pt":"Agora ficou mais fácil achar seu favorito.","en":"Finding your favorite just got easier.","mood":"neutro","pose":"joinha"}]},{"trigger":"trocar_modelo","variants":[{"pt":"Novo visual. Quase episódio de makeover.","en":"New look. Almost a makeover episode.","mood":"feliz","pose":"sorriso"},{"pt":"Outra versão desbloqueada.","en":"Another version unlocked.","mood":"piscando","pose":"pisca"},{"pt":"Troca de figurino, mesma ideia.","en":"Wardrobe change, same concept.","mood":"pensando","pose":"pensa"},{"pt":"Qual combina mais? Eu fico dividido.","en":"Which one fits best? I can’t decide.","mood":"animado","pose":"fala"},{"pt":"Mudou o modelo. A direção de arte continua.","en":"New model. Art direction stays.","mood":"neutro","pose":"joinha"}]},{"trigger":"modelo_ja_fiz","variants":[{"pt":"Esse eu já fiz! Temos um clássico.","en":"Made this one already! A classic.","mood":"feliz","pose":"sorriso"},{"pt":"Reprise boa também merece atenção.","en":"A good rerun deserves attention too.","mood":"piscando","pose":"pisca"},{"pt":"Já passamos por esse episódio.","en":"We’ve seen this episode before.","mood":"pensando","pose":"pensa"},{"pt":"Esse modelo tem história pra contar.","en":"This model has a story.","mood":"animado","pose":"fala"},{"pt":"Reconheceu? Ele já apareceu por aqui.","en":"Recognize it? It’s been here before.","mood":"neutro","pose":"joinha"}]},{"trigger":"girar_3d","variants":[{"pt":"É tipo a tela de escolher personagem.","en":"Like a character selection screen.","mood":"feliz","pose":"sorriso"},{"pt":"Pode olhar atrás. Modelei essa parte também.","en":"Check the back. I modeled that too.","mood":"piscando","pose":"pisca"},{"pt":"Gira à vontade. Sem truque de câmera.","en":"Spin away. No camera tricks.","mood":"pensando","pose":"pensa"},{"pt":"Uma volta completa, cortesia do 3D.","en":"A full 360, courtesy of 3D.","mood":"animado","pose":"fala"},{"pt":"Sim, eu pensei no outro lado.","en":"Yep, I designed the other side too.","mood":"neutro","pose":"joinha"}]},{"trigger":"zoom","variants":[{"pt":"Pode aproximar. Os detalhes importam.","en":"Come closer. Details matter.","mood":"feliz","pose":"sorriso"},{"pt":"Modo CSI ativado. Pode investigar.","en":"CSI mode activated. Investigate away.","mood":"piscando","pose":"pisca"},{"pt":"Tá quase vendo os pixels pensando.","en":"You can almost see the pixels thinking.","mood":"pensando","pose":"pensa"},{"pt":"Eu também daria zoom nessa parte.","en":"I’d zoom in on this too.","mood":"animado","pose":"fala"},{"pt":"Passei tempo demais nesses detalhes. Aproveita.","en":"Spent way too long on these details. Enjoy.","mood":"neutro","pose":"joinha"}]},{"trigger":"tampa_abrir","variants":[{"pt":"Amo unboxing. Agora tenho um interativo.","en":"I love unboxings. Now I have an interactive one.","mood":"feliz","pose":"sorriso"},{"pt":"Pode abrir. Essa é a parte satisfatória.","en":"Open it. This is the satisfying part.","mood":"piscando","pose":"pisca"},{"pt":"Só faltou o som de ASMR da embalagem.","en":"All that’s missing is packaging ASMR.","mood":"pensando","pose":"pensa"},{"pt":"Se fosse um vídeo, eu veria até o final.","en":"If this were a video, I’d watch it all.","mood":"animado","pose":"fala"},{"pt":"A experiência começa no primeiro abrir.","en":"The experience starts with the first opening.","mood":"neutro","pose":"joinha"}]},{"trigger":"tampa_fechar","variants":[{"pt":"Fechou? Agora dá vontade de abrir de novo.","en":"Closed it? Now you want to open it again.","mood":"feliz","pose":"sorriso"},{"pt":"Fim do unboxing. Ou será que não?","en":"Unboxing over. Or is it?","mood":"piscando","pose":"pisca"},{"pt":"Essa caixa merece um replay.","en":"This box deserves a replay.","mood":"pensando","pose":"pensa"},{"pt":"Pronto. Satisfatório até pra fechar.","en":"Done. Even closing it feels satisfying.","mood":"animado","pose":"fala"},{"pt":"Corta! Temos mais um take do unboxing.","en":"Cut! Another take of the unboxing.","mood":"neutro","pose":"joinha"}]},{"trigger":"verniz","variants":[{"pt":"Um brilho sutil faz toda a diferença.","en":"A subtle shine changes everything.","mood":"feliz","pose":"sorriso"},{"pt":"Esse detalhe merece a luz certa.","en":"This detail deserves the right lighting.","mood":"piscando","pose":"pisca"},{"pt":"O verniz entrou e roubou a cena.","en":"The finish just stole the scene.","mood":"pensando","pose":"pensa"},{"pt":"Efeito especial? Não, acabamento.","en":"Special effect? Nope, print finish.","mood":"animado","pose":"fala"},{"pt":"A diferença mora nos detalhes.","en":"The difference is in the details.","mood":"neutro","pose":"joinha"}]},{"trigger":"video_play","variants":[{"pt":"Luz, câmera... play!","en":"Lights, camera… play!","mood":"feliz","pose":"sorriso"},{"pt":"Agora deixa a edição contar o resto.","en":"Let the edit tell the rest.","mood":"piscando","pose":"pisca"},{"pt":"Aperta o play. Prometo não narrar tudo.","en":"Hit play. I promise not to narrate it all.","mood":"pensando","pose":"pensa"},{"pt":"Esse episódio tem movimento.","en":"This episode has motion.","mood":"animado","pose":"fala"},{"pt":"Boa sessão! Sem spoilers da minha parte.","en":"Enjoy! No spoilers from me.","mood":"neutro","pose":"joinha"}]},{"trigger":"video_next","variants":[{"pt":"Próximo episódio. Sem esperar uma semana.","en":"Next episode. No week-long wait.","mood":"feliz","pose":"sorriso"},{"pt":"Nova cena, nova história.","en":"New scene, new story.","mood":"piscando","pose":"pisca"},{"pt":"O universo expandido continua.","en":"The expanded universe continues.","mood":"pensando","pose":"pensa"},{"pt":"Mais um vídeo no catálogo.","en":"Another video in the catalog.","mood":"animado","pose":"fala"},{"pt":"Pode seguir. Ainda tem história.","en":"Keep going. There’s more to the story.","mood":"neutro","pose":"joinha"}]},{"trigger":"musica_play","variants":[{"pt":"Trilha sonora ativada. Agora sim.","en":"Soundtrack on. That’s better.","mood":"feliz","pose":"sorriso"},{"pt":"Até o cenário ganhou tema musical.","en":"Even the set has theme music now.","mood":"piscando","pose":"pisca"},{"pt":"Se fosse uma sitcom, entrava a abertura.","en":"If this were a sitcom, cue the intro.","mood":"pensando","pose":"pensa"},{"pt":"Dá o play. Eu cuido da vibe.","en":"Hit play. I’ll handle the vibe.","mood":"animado","pose":"fala"},{"pt":"Uma boa ideia pede uma boa música.","en":"Good ideas deserve good music.","mood":"neutro","pose":"joinha"}]},{"trigger":"musica_troca","variants":[{"pt":"Próxima faixa. O DJ é você.","en":"Next track. You’re the DJ.","mood":"feliz","pose":"sorriso"},{"pt":"Mudança de clima. Novo arco musical.","en":"Mood change. New musical arc.","mood":"piscando","pose":"pisca"},{"pt":"Essa playlist tem várias personalidades.","en":"This playlist has many personalities.","mood":"pensando","pose":"pensa"},{"pt":"Outra música, mesma vontade de criar.","en":"New song, same urge to create.","mood":"animado","pose":"fala"},{"pt":"Troca de trilha. Cena nova.","en":"New soundtrack. New scene.","mood":"neutro","pose":"joinha"}]},{"trigger":"spotify","variants":[{"pt":"Meu Spotify tem seus próprios plot twists.","en":"My Spotify has its own plot twists.","mood":"feliz","pose":"sorriso"},{"pt":"Pode julgar meu gosto musical. Com carinho.","en":"Judge my music taste. Gently.","mood":"piscando","pose":"pisca"},{"pt":"O algoritmo me conhece bem demais.","en":"The algorithm knows me a little too well.","mood":"pensando","pose":"pensa"},{"pt":"Minha trilha sonora tem vários gêneros.","en":"My soundtrack covers a lot of genres.","mood":"animado","pose":"fala"},{"pt":"A playlist entrega um pouco da personalidade.","en":"The playlist reveals some personality.","mood":"neutro","pose":"joinha"}]},{"trigger":"foto_proxima","variants":[{"pt":"Outro ângulo. A história continua.","en":"Another angle. The story continues.","mood":"feliz","pose":"sorriso"},{"pt":"Mudança de câmera. Gostei dessa perspectiva.","en":"Camera switch. Love this perspective.","mood":"piscando","pose":"pisca"},{"pt":"Mais um frame pra coleção.","en":"Another frame for the collection.","mood":"pensando","pose":"pensa"},{"pt":"O detalhe seguinte também merece atenção.","en":"The next detail deserves attention too.","mood":"animado","pose":"fala"},{"pt":"Próxima foto. Sem precisar esperar o carrossel.","en":"Next photo. No carousel wait required.","mood":"neutro","pose":"joinha"}]},{"trigger":"form_enviado","variants":[{"pt":"Mensagem enviada. To be continued...","en":"Message sent. To be continued…","mood":"feliz","pose":"sorriso"},{"pt":"Recebido! O próximo episódio é nossa conversa.","en":"Got it! Next episode: our conversation.","mood":"piscando","pose":"pisca"},{"pt":"Pronto! Agora é comigo.","en":"All set! My turn now.","mood":"pensando","pose":"pensa"},{"pt":"Deu certo. Adoro um bom começo.","en":"It worked. Love a good beginning.","mood":"animado","pose":"fala"},{"pt":"Mensagem a caminho. Obrigado pelo contato!","en":"Message on its way. Thanks for reaching out!","mood":"neutro","pose":"joinha"}]},{"trigger":"form_erro","variants":[{"pt":"Ops! Esse episódio precisa de outra tomada.","en":"Oops! This episode needs another take.","mood":"feliz","pose":"sorriso"},{"pt":"Algo não foi. Vamos tentar de novo?","en":"Something didn’t work. Try again?","mood":"piscando","pose":"pisca"},{"pt":"Pequeno plot twist. Confere os campos?","en":"Tiny plot twist. Check the fields?","mood":"pensando","pose":"pensa"},{"pt":"Até os formulários têm dias difíceis.","en":"Even forms have off days.","mood":"animado","pose":"fala"},{"pt":"Quase lá. Só falta ajustar um detalhe.","en":"Almost there. Just one detail to fix.","mood":"neutro","pose":"joinha"}]},{"trigger":"arrastar","variants":[{"pt":"Tá dirigindo a arte da minha mesa?","en":"Are you art-directing my desk?","mood":"feliz","pose":"sorriso"},{"pt":"Gostei! Uma segunda opinião de direção de arte.","en":"Nice! A second opinion on art direction.","mood":"piscando","pose":"pisca"},{"pt":"Modo decoração ativado.","en":"Decoration mode activated.","mood":"pensando","pose":"pensa"},{"pt":"Pode mover. Eu também mexeria em tudo.","en":"Move things around. I would too.","mood":"animado","pose":"fala"},{"pt":"A composição mudou. Interessante.","en":"The composition changed. Interesting.","mood":"neutro","pose":"joinha"}]},{"trigger":"reorganizar","variants":[{"pt":"A Monica Geller aprovaria essa organização.","en":"Monica Geller would approve of this setup.","mood":"feliz","pose":"sorriso"},{"pt":"Arrumou tudo? Preciso dessa energia aqui.","en":"Organized everything? I need that energy.","mood":"piscando","pose":"pisca"},{"pt":"Minha mesa ganhou um episódio de makeover.","en":"My desk got a makeover episode.","mood":"pensando","pose":"pensa"},{"pt":"Ficou organizado. Um evento raro por aqui.","en":"It’s tidy. A rare event around here.","mood":"animado","pose":"fala"},{"pt":"A direção de arte agradece a colaboração.","en":"Art direction appreciates your help.","mood":"neutro","pose":"joinha"}]},{"trigger":"cracha","variants":[{"pt":"Minha ficha de personagem. Versão profissional.","en":"My character sheet. Professional edition.","mood":"feliz","pose":"sorriso"},{"pt":"Victor Trindade. Prazer, oficialmente.","en":"Victor Trindade. Officially, nice to meet you.","mood":"piscando","pose":"pisca"},{"pt":"Meu crachá. Faltou a foto 3x4 dramática.","en":"My badge. Missing an awkward ID photo.","mood":"pensando","pose":"pensa"},{"pt":"É quase meu perfil na Dunder Mifflin.","en":"Almost my Dunder Mifflin profile.","mood":"animado","pose":"fala"},{"pt":"Identidade revelada. Sem plot twist.","en":"Identity revealed. No plot twist.","mood":"neutro","pose":"joinha"}]},{"trigger":"messenger","variants":[{"pt":"Saudades de um bom subnick no MSN.","en":"Remember when MSN statuses were a big deal?","mood":"feliz","pose":"sorriso"},{"pt":"Não dá pra chamar atenção. Melhor assim.","en":"No nudge button. Probably for the best.","mood":"piscando","pose":"pisca"},{"pt":"Se você usou MSN, conhece esse sentimento.","en":"If you used MSN, you know the feeling.","mood":"pensando","pose":"pensa"},{"pt":"Faltou o barulhinho de alguém entrando.","en":"Missing that classic sign-in sound.","mood":"animado","pose":"fala"},{"pt":"Status: ocupado criando alguma coisa.","en":"Status: busy making something.","mood":"neutro","pose":"joinha"}]},{"trigger":"postit","variants":[{"pt":"Meu Notion antes do Notion.","en":"My Notion before Notion.","mood":"feliz","pose":"sorriso"},{"pt":"Algumas ideias começam num papelzinho.","en":"Some ideas start on a tiny note.","mood":"piscando","pose":"pisca"},{"pt":"Se eu anotei, é porque achei importante.","en":"If I wrote it down, I thought it mattered.","mood":"pensando","pose":"pensa"},{"pt":"Esse post-it tem energia de pista de CSI.","en":"This note has CSI clue energy.","mood":"animado","pose":"fala"},{"pt":"Organização analógica. Um clássico.","en":"Analog organization. A classic.","mood":"neutro","pose":"joinha"}]},{"trigger":"lapis","variants":[{"pt":"A ferramenta que nunca pediu atualização.","en":"The tool that never asked for an update.","mood":"feliz","pose":"sorriso"},{"pt":"Antes do Photoshop, tinha esse clássico.","en":"Before Photoshop, there was this classic.","mood":"piscando","pose":"pisca"},{"pt":"Toda ideia pode começar num rabisco.","en":"Every idea can start as a sketch.","mood":"pensando","pose":"pensa"},{"pt":"Sem bateria, sem login. Perfeito.","en":"No battery, no login. Perfect.","mood":"animado","pose":"fala"},{"pt":"Um lápis e uma ideia: dupla antiga.","en":"A pencil and an idea: an old-school duo.","mood":"neutro","pose":"joinha"}]},{"trigger":"bolinha","variants":[{"pt":"Um easter egg. Porque não?","en":"An easter egg. Why not?","mood":"feliz","pose":"sorriso"},{"pt":"Sim, até minha mesa tem distrações.","en":"Yep, even my desk has distractions.","mood":"piscando","pose":"pisca"},{"pt":"Você achou a side quest da bolinha.","en":"You found the ball side quest.","mood":"pensando","pose":"pensa"},{"pt":"Essa interação não estava no briefing. Ou estava?","en":"This wasn’t in the brief. Or was it?","mood":"animado","pose":"fala"},{"pt":"Pequena pausa recreativa autorizada.","en":"Tiny recreational break approved.","mood":"neutro","pose":"joinha"}]},{"trigger":"toggle","variants":[{"pt":"Mudança de cenário. Plot twist visual.","en":"Scene change. Visual plot twist.","mood":"feliz","pose":"sorriso"},{"pt":"A luz mudou. A vibe também.","en":"New lighting, new vibe.","mood":"piscando","pose":"pisca"},{"pt":"Direção de fotografia, versão interativa.","en":"Cinematography, interactive edition.","mood":"pensando","pose":"pensa"},{"pt":"Outro clima, mesmo quarto.","en":"Different mood, same room.","mood":"animado","pose":"fala"},{"pt":"Essa mudança merecia um corte de sitcom.","en":"This change deserves a sitcom cut.","mood":"neutro","pose":"joinha"}]},{"trigger":"polaroid_video","variants":[{"pt":"Amo making of. Às vezes mais que o filme.","en":"Love making-ofs. Sometimes more than the movie.","mood":"feliz","pose":"sorriso"},{"pt":"Bastidores desbloqueados.","en":"Behind the scenes unlocked.","mood":"piscando","pose":"pisca"},{"pt":"Essa é a parte fora do resultado final.","en":"This is the part beyond the final result.","mood":"pensando","pose":"pensa"},{"pt":"Tem história por trás de cada frame.","en":"Every frame has a story behind it.","mood":"animado","pose":"fala"},{"pt":"O processo também merece aparecer.","en":"The process deserves screen time too.","mood":"neutro","pose":"joinha"}]}]};
var LINES = {};
var QUIET = { arrastar: 1, filtro: 1, trocar_modelo: 1, modelo_ja_fiz: 1, girar_3d: 1, zoom: 1, tampa_abrir: 1, tampa_fechar: 1, verniz: 1, video_play: 1, video_next: 1, musica_play: 1, musica_troca: 1, spotify: 1, foto_proxima: 1, done: 1, reorganizar: 1 };
var LOUD = { hello: 1, lang: 1, form_enviado: 1, form_erro: 1 };
var LOUD_OLD = { sobre: 1, projetos: 1, skills: 1, videos: 1, playlist: 1, metricas: 1, contato: 1, publicidade: 1, grafica: 1, embalagens: 1, personalizados: 1, produtos: 1, baloes: 1, handmade: 1, sites: 1, videos_cat: 1, cracha: 1, messenger: 1, postit: 1, lapis: 1, bolinha: 1, toggle: 1, polaroid_video: 1 };
var MOOD_ALIAS = { happy: 'feliz', alegre: 'feliz', sorrindo: 'feliz', contente: 'feliz', thinking: 'pensando', pensativo: 'pensando', curioso: 'pensando', cansado: 'pensando', surprised: 'surpreso', surpresa: 'surpreso', wink: 'piscando', piscadinha: 'piscando', sarcastico: 'piscando', ironico: 'piscando', debochado: 'piscando', love: 'apaixonado', apaixonada: 'apaixonado', idea: 'ideia', focused: 'concentrado', focado: 'concentrado', celebrating: 'celebrando', orgulhoso: 'celebrando', rindo: 'celebrando', confused: 'confuso', nervous: 'nervoso', ansioso: 'nervoso', excited: 'animado', empolgado: 'animado', music: 'musica', shocked: 'chocado', angry: 'bravo', irritado: 'bravo', shy: 'timido', envergonhado: 'timido', neutral: 'neutro', calmo: 'neutro', serio: 'neutro' };
var POSE_ALIAS = { wave: 'tchau', acenando: 'tchau', thumbs: 'joinha', thumbsup: 'joinha', ok: 'joinha', smile: 'sorriso', sorrindo: 'sorriso', laugh: 'ri', rindo: 'ri', risada: 'ri', wink: 'pisca', piscando: 'pisca', piscadinha: 'pisca', surpreso: 'o', surprise: 'o', espanto: 'o', think: 'pensa', pensando: 'pensa', pensativo: 'pensa', side: 'lado', olhando: 'lado', apaixonado: 'love', coracao: 'love', talk: 'fala', falando: 'fala', computador: 'laptop', notebook: 'laptop', trabalhando: 'laptop', neutral: 'neutro' };
function split2(s) {
  return String(s || '').replace(/([.!?…]+["”’)]*)\s+(?=\S)/g, '$1\n');
  s = String(s || '');
  if (s.length < 34 || s.indexOf('\n') >= 0) return s;
  var mid = s.length / 2, best = -1, bd = 1e9, re = /[.!?…:;](?=\s)|,(?=\s)| —(?=\s)/g, m, strong = /[.!?…:;]/;
  var cands = [];
  while ((m = re.exec(s))) cands.push({ i: m.index + m[0].length, w: strong.test(m[0]) ? 0 : 6 });
  cands.forEach(function (c) { var d = Math.abs(c.i - mid) + c.w; if (c.i > 5 && s.length - c.i > 8 && d < bd) { bd = d; best = c.i; } });
  if (best < 0 || bd > s.length * 0.32) {
    best = -1; bd = 1e9;
    for (var i = 1; i < s.length - 1; i++) if (s[i] === ' ') { var d2 = Math.abs(i - mid); if (d2 < bd) { bd = d2; best = i; } }
  }
  if (best < 0) return s;
  return s.slice(0, best).replace(/\s+$/, '') + '\n' + s.slice(best).replace(/^\s+/, '');
}
function deacc(x) { return String(x || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9_]/g, ''); }
function normMood(m) { m = deacc(m); if (MOODFX[m] || MOOD_ORDER.indexOf(m) >= 0) return m; return MOOD_ALIAS[m] || 'feliz'; }
function normPose(p) { p = deacc(p); if (PX[p]) return p; p = POSE_ALIAS[p]; return p && PX[p] ? p : 'sorriso'; }
function setLines(j) {
  var out = {};
  try {
    if (typeof j === 'string') j = JSON.parse(j);
    var list = j && Array.isArray(j.triggers) ? j.triggers : null;
    if (list) list.forEach(function (t) { if (t && t.trigger && Array.isArray(t.variants)) out[t.trigger] = t.variants; });
    else if (j && typeof j === 'object') Object.keys(j).forEach(function (k) { if (Array.isArray(j[k])) out[k] = j[k]; });
    Object.keys(out).forEach(function (k) { out[k] = out[k].filter(function (v) { return v && (v.pt || v.en); }); if (!out[k].length) delete out[k]; });
  } catch (e) { out = {}; }
  LINES = out;
}
setLines(window.SITE && window.SITE.lines ? window.SITE.lines : FALAS);
function winGeom(key, W, H, ar) {
  var res = W <= 1100 ? 148 : 172, fw = W * 0.965 - res, l0 = W * 0.02, h = H - 190, gap = 16;
  function place(ws) {
    var tot = ws.reduce(function (a, b) { return a + b; }, 0) + gap * (ws.length - 1);
    var l = Math.max(l0, (W - tot) / 2), out = [];
    ws.forEach(function (w) { out.push(l); l += w + gap; });
    return out;
  }
  if (key === 'videos') {
    var mw = Math.round((h - 64) * 9 / 16) + 30, lw = Math.max(260, Math.min(360, fw - mw - gap)), p = place([mw, lw]);
    return { l: p[0], t: 84, w: mw, h: h, s: [{ l: p[1], t: 118, w: lw, h: h - 60 }] };
  }
  if (key === 'skills') {
    var k1 = Math.max(300, Math.min(360, Math.round(fw * 0.3))), k2 = Math.max(250, Math.min(300, Math.round(fw * 0.24))), km = Math.min(540, fw - k1 - k2 - 2 * gap), pk = place([km, k1, k2]);
    return { l: pk[0], t: 84, w: km, h: h, s: [{ l: pk[1], t: 104, w: k1, h: Math.min(h - 40, 450) }, { l: pk[2], t: 128, w: k2, h: Math.min(h - 70, 470) }] };
  }
  if (key === 'publicidade' || key === 'baloes' || key === 'handmade' || key === 'produtos') {
    var gm = Math.round((h - 64) * 9 / 16) + 30, gt = Math.max(280, Math.min(340, Math.round(fw * 0.25)));
    var gar = ar || 1, avail = Math.min(640, fw - gm - gt - 2 * gap - 28), ih = h - 20 - 190, iw = ih * gar;
    if (iw > avail) { iw = avail; ih = iw / gar; }
    var gi = Math.max(300, Math.round(iw) + 28), gh = Math.round((gi - 28) / gar) + 190, pg = place([gt, gm, gi]);
    return { l: pg[1], t: 84, w: gm, h: h, s: [{ l: pg[0], t: 104, w: gt, h: h - 40 }, { l: pg[2], t: 84 + Math.round((h - gh) * 0.55), w: gi, h: gh }] };
  }
  if (key === 'embalagens' || key === 'sites' || key === 'personalizados' || key === 'grafica') {
    var sh = key === 'sites' ? h - 10 : key === 'grafica' ? Math.min(h, 520) : Math.round(h * 0.82), tw = Math.max(290, Math.min(370, Math.round(fw * 0.27)));
    var sw = key === 'sites' ? Math.round((sh - 40 - 60) / 2.05) + 36 : key === 'grafica' ? 310 : Math.round((sh - 64) * 9 / 16) + 30;
    var m2 = Math.min(key === 'sites' ? 720 : key === 'personalizados' ? 560 : key === 'grafica' ? 600 : 620, fw - tw - sw - 2 * gap), p2 = place([tw, m2, sw]);
    var mh = h;
    return { l: p2[1], t: 84 + Math.round((h - mh) / 3), w: m2, h: mh, s: [{ l: p2[0], t: 104, w: tw, h: h - 40 }, { l: p2[2], t: 84 + Math.round((h - sh) * 0.6), w: sw, h: sh }] };
  }
  var cap = { sobre: 800, contato: 840, playlist: 860, projetos: 820, metricas: 900 }[key] || 0;
  var maxW = W - 2 * (res + W * 0.015), ww = Math.max(320, Math.min(cap || maxW, maxW));
  return { l: (W - ww) / 2, t: 84, w: ww, h: h };
}
function isMobile() { try { return FORCE_MOBILE || window.innerWidth < 760; } catch (e) { return FORCE_MOBILE; } }
var EN_POS = {
  hw1: { x: 32.4, y: 11.8 }, hw2: { x: 29.7, y: 22 }, hw3: { x: 39, y: 29.8 }, hpill: { x: 29.5, y: 42.9 }, blk1: { x: 65.1, y: 44.6 },
  cursor: { x: 66.6, y: 30.3 }, winbtns: { x: 56.6, y: 25.5 }, bubble: { x: 29.4, y: 37.1 }, blue: { x: 66.5, y: 11.3 }, sketch: { x: 72.3, y: 26.5 },
  yt: { x: 83.5, y: 10.3 }, im: { x: 1.5, y: 10.9 }, check: { x: 2.1, y: 26.2 }, cracha: { x: 12.4, y: 28 }, pencil: { x: 26.7, y: 10.2 },
  toggle: { x: 20.2, y: 10.9 }, ticket: { x: 0.8, y: 47 }, badges: { x: 92.4, y: 58.8 }
};
function defaults(lang) { var d = JSON.parse(JSON.stringify(DEFAULT_POS)); if (lang === 'en') Object.keys(EN_POS).forEach(function (k) { Object.assign(d[k], EN_POS[k]); }); return d; }

class Component extends DCLogic {
  state = {
    lang: this.loadLang(), pos: null, z: {}, zTop: 10, dragging: null, deckIdx: 0, tossed: -1, vplaying: false, plPlaying: false, plTime: 0, plDur: 0, durs: { 0: 20.9, 1: 25.3, 2: 17.5 },
    win: null, sub: 0, tab: 0, pfilter: 0, embIdx: 0, vidIdx: 0, mediaIdx: 0, plIdx: 0,
    mood: 'neutro', msg: P('', ''), typed: 0, pose: 'talk', posePost: false, blink: false, hop: false,
    rx: -14, ry: 30, zoom: 1, lid: false, rot: false, catDrag: false, tog: true,
    form: null, reduced: false
  };

  loadLang() { try { return localStorage.getItem('vt-lang') === 'en' ? 'en' : 'pt'; } catch (e) { return 'pt'; } }
  loadPos(lang) {
    var base = defaults(lang);
    try { var s = JSON.parse(localStorage.getItem('vt-desk-v14-' + lang) || 'null'); if (s) Object.keys(s).forEach(function (k) { if (base[k]) { base[k].x = s[k].x; base[k].y = s[k].y; } }); } catch (e) {}
    return base;
  }
  savePos(pos) { try { localStorage.setItem('vt-desk-v14-' + this.state.lang, JSON.stringify(pos)); } catch (e) {} }
  tr(x) { if (!x) return ''; if (typeof x === 'string') return x; return x[this.state.lang] || x.pt || ''; }
  curText() { return this.tr(this.state.msg); }

  componentDidMount() {
    var reduced = false, self = this;
    try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    this.state.reduced = reduced;
    this.setState({ reduced: reduced });
    this.kickVideos();
    try { document.documentElement.lang = this.state.lang === 'en' ? 'en' : 'pt-BR'; } catch (e) {}
    this.lastAct = Date.now();
    this.idleI = -1;
    setTimeout(function () { if (!self.speak('hello')) self.say(M.hello, 'tchau'); }, 500);
    setTimeout(function () { self.measureCats(true); }, 80);
    this.onResize = function () { self.measureCats(false); self.forceUpdate(); };
    try { window.addEventListener('resize', this.onResize); } catch (e) {}
    this.blinkT = setInterval(function () {
      if (self.state.typed < self.curText().length || self.state.posePost) return;
      self.setState({ blink: true });
      setTimeout(function () { self.setState({ blink: false }); }, 160);
    }, 3400);
    this.idleT = setInterval(function () {
      if (self.state.win || self.drag) return;
      if (Date.now() - self.lastAct < 30000) return;
      if (!self.speak('idle')) { self.idleI = (self.idleI + 1) % M.idle.length;
      self.say(M.idle[self.idleI][0], M.idle[self.idleI][1]); }
      self.lastAct = Date.now() - 2000;
    }, 6000);
    try {
      var key = window.INITIAL_WIN || (location.hash || '').replace('#/', '').split('/').pop();
      if (key && (PAGES[key] || CATS.some(function (c) { return c.key === key; }))) {
        setTimeout(function () { self.openWin(key, document.getElementById('cat-' + key) || document.getElementById('nav-' + key)); }, 400);
      }
    } catch (e) {}
  }
  componentDidUpdate() { this.kickVideos(); if (window.syncGLB) window.syncGLB(); this.spSync(); }
  kickVideos() {
    try {
      var vs = document.querySelectorAll('video[data-auto]');
      for (var i = 0; i < vs.length; i++) { var v = vs[i]; v.muted = true; if (v.paused && !this.state.reduced && !v.dataset.k) { v.dataset.k = '1'; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } }
    } catch (e) {}
  }
  pauseOthers(keep) { try { var m = document.querySelectorAll('video,audio'); for (var i = 0; i < m.length; i++) if (m[i] !== keep && !m[i].dataset.auto) m[i].pause(); } catch (e) {} }
  componentWillUnmount() { try { window.removeEventListener('resize', this.onResize); } catch (e) {} clearInterval(this.blinkT); clearInterval(this.idleT); clearInterval(this.typeT); clearTimeout(this.moodT); clearTimeout(this.poseT); cancelAnimationFrame(this.inertia); }

  toggleLang() {
    var l = this.state.lang === 'pt' ? 'en' : 'pt';
    try { localStorage.setItem('vt-lang', l); } catch (e) {}
    try { document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR'; } catch (e) {}
    this.state.lang = l;
    this.setState({ lang: l, pos: this.loadPos(l), z: {} });
    if (!this.speak('lang')) this.say(M.lang, 'joinha');
  }

  measureCats(center) {
    var el = document.getElementById('cscroll');
    var k = el ? el.querySelectorAll('.citem') : [];
    if (k.length < 2) return;
    this.cw0 = k[0].offsetWidth;
    this.cpad = k[0].offsetLeft;
    var sc = this.scene || document.querySelector('[data-scene]');
    var sw = sc ? sc.getBoundingClientRect().width : 1440;
    var mob = FORCE_MOBILE || sw < 760;
    var avail = mob ? sw - 128 : sw * 0.97 - (sw <= 1100 ? 158 : 184);
    var minGap = mob ? 10 : 14;
    var n = Math.max(1, Math.floor((avail - 2 * this.cpad + minGap) / (this.cw0 + minGap)));
    var gap = n > 1 ? Math.max(minGap, Math.floor((avail - 2 * this.cpad - n * this.cw0) / (n - 1))) : minGap;
    this.cstep = this.cw0 + gap;
    var cl = mob ? 0 : Math.round(sw * 0.015);
    var self = this;
    if (avail !== this.state.catW || cl !== this.state.catL || gap !== this.state.catGap) this.setState({ catW: Math.floor(avail), catL: cl, catGap: gap });
    if (center) setTimeout(function () { var e2 = document.getElementById('cscroll'); if (e2) e2.scrollLeft = CAT_ORDER.length * self.cstep; }, 40);
  }
  catScrollH(e) {
    var el = e.currentTarget, self = this;
    if (!this.cstep) this.measureCats(false);
    if (!this.cstep) return;
    var fix = function () {
      var setW = self.cstep * CAT_ORDER.length;
      if (el.scrollLeft < setW * 0.5) { el.scrollLeft += setW; if (self.cd) self.cd.sl += setW; }
      else if (el.scrollLeft > setW * 1.5) { el.scrollLeft -= setW; if (self.cd) self.cd.sl -= setW; }
    };
    if (this.cd) { fix(); return; }
    clearTimeout(this.loopT);
    this.loopT = setTimeout(fix, 140);
  }
  catDownH(e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    cancelAnimationFrame(this.inertia);
    this.cd = { el: e.currentTarget, x: e.clientX, sl: e.currentTarget.scrollLeft, moved: false, lx: e.clientX, lt: Date.now(), v: 0, id: e.pointerId };
  }
  catMoveH(e) {
    var d = this.cd; if (!d) return;
    var dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 12) { d.moved = true; try { d.el.setPointerCapture(d.id); } catch (_) {} this.setState({ catDrag: true }); }
    if (!d.moved) return;
    d.el.scrollLeft = d.sl - dx;
    var now = Date.now(); d.v = (e.clientX - d.lx) / Math.max(1, now - d.lt) * 16; d.lx = e.clientX; d.lt = now;
  }
  catUpH() {
    var d = this.cd, self = this; this.cd = null;
    if (!d || !d.moved) return;
    this.catDragged = Date.now();
    try { d.el.releasePointerCapture(d.id); } catch (_) {}
    var v = d.v, el = d.el;
    var tick = function () {
      v *= 0.93; el.scrollLeft -= v;
      if (Math.abs(v) > 0.6 && !self.state.reduced) self.inertia = requestAnimationFrame(tick);
      else self.setState({ catDrag: false });
    };
    tick();
    if (!this.wheelTalked) { this.wheelTalked = true; this.say(M.wheel, 'lado'); }
  }
  hsDownH(e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
    this.hs = { el: e.currentTarget, x: e.clientX, sl: e.currentTarget.scrollLeft, moved: false, id: e.pointerId };
  }
  hsMoveH(e) {
    var h = this.hs; if (!h) return;
    var dx = e.clientX - h.x;
    if (!h.moved && Math.abs(dx) > 6) { h.moved = true; try { h.el.setPointerCapture(h.id); } catch (_) {} h.el.style.scrollSnapType = 'none'; }
    if (h.moved) h.el.scrollLeft = h.sl - dx;
  }
  hsUpH() {
    var h = this.hs; this.hs = null;
    if (h && h.moved) { this.hsDragged = Date.now(); h.el.style.scrollSnapType = ''; try { h.el.releasePointerCapture(h.id); } catch (_) {} }
  }
  dragged() { return (this.hsDragged && Date.now() - this.hsDragged < 250) || (this.catDragged && Date.now() - this.catDragged < 250); }

  say(m, pose, force) {
    var self = this;
    pose = pose || 'talk';
    if (typeof m === 'string') m = P(m, m);
    var now = Date.now();
    if (!force && this.sayUntil && now < this.sayUntil) return;
    this.sayUntil = now + 3800 + String(this.state.lang === 'en' ? m.en : m.pt).length * 55;
    m = P(split2(m.pt), split2(m.en));
    this.lastAct = Date.now();
    clearInterval(this.typeT); clearTimeout(this.poseT);
    var finish = function () {
      self.setState({ posePost: pose !== 'talk' });
      self.poseT = setTimeout(function () { self.setState({ posePost: false, pose: 'talk' }); }, 2400);
    };
    this.setState({ hop: true });
    setTimeout(function () { self.setState({ hop: false }); }, 520);
    this.state.msg = m;
    if (this.state.reduced) { this.setState({ msg: m, typed: 999, pose: pose }); finish(); return; }
    this.setState({ msg: m, typed: 0, pose: pose, posePost: false });
    this.typeT = setInterval(function () {
      var n = self.state.typed + 2;
      self.setState({ typed: n });
      if (n >= self.curText().length) { clearInterval(self.typeT); finish(); }
    }, 50);
  }
  speak(k) {
    if (QUIET[k]) return true;
    var L = LINES[k];
    if (!L || !L.length) return false;
    this.lastLine = this.lastLine || {};
    var i = 0, last = this.lastLine[k];
    if (L.length > 1) { do { i = Math.floor(Math.random() * L.length); } while (i === last); }
    this.lastLine[k] = i;
    var v = L[i];
    this.say(P(v.pt || v.en, v.en || v.pt), normPose(v.pose), !!LOUD[k]);
    this.lastMood = 0;
    this.setMood(normMood(v.mood), 3800);
    return true;
  }
  setMood(m, ms) {
    var self = this, now = Date.now();
    if (this.lastMood && now - this.lastMood < 900 && m !== 'neutro') return;
    this.lastMood = now;
    clearTimeout(this.moodT);
    this.setState({ mood: m, moodN: (this.state.moodN || 0) + 1 });
    this.moodT = setTimeout(function () { self.setState({ mood: 'neutro' }); }, Math.max(3600, ms || 0));
  }

  frame() {
    var w = this.scene ? this.scene.getBoundingClientRect() : { width: 1440, height: 900 };
    var mobile = FORCE_MOBILE || w.width < 760;
    if (mobile) return { l: 8, t: 8, w: w.width - 16, h: w.height - (w.height <= 720 ? 104 : 120) };
    return winGeom(this.nextKey, w.width, w.height, galAR(this.nextKey, 0));
  }
  originTf(el) {
    if (!el || !this.scene) return 'translate(0px, 60px) scale(0.3, 0.3)';
    var sr = this.scene.getBoundingClientRect(), br = el.getBoundingClientRect(), f = this.frame();
    var sx = Math.max(br.width / f.w, 0.04), sy = Math.max(br.height / f.h, 0.04);
    return 'translate(' + (br.left - sr.left - f.l) + 'px, ' + (br.top - sr.top - f.t) + 'px) scale(' + sx + ', ' + sy + ')';
  }
  meta(key) { return CATS.find(function (x) { return x.key === key; }) || PAGES[key]; }
  centerCat(btn) {
    var el = document.getElementById('cscroll');
    var it = btn && btn.closest ? btn.closest('.citem') : null;
    if (!el || !it || !el.contains(it)) return;
    el.scrollTo({ left: it.offsetLeft + it.offsetWidth / 2 - el.clientWidth / 2, behavior: this.state.reduced ? 'auto' : 'smooth' });
  }
  openWin(key, el) {
    var self = this;
    if (el && el.closest) this.scene = el.closest('[data-scene]') || this.scene;
    if (!this.scene) this.scene = document.querySelector('[data-scene]');
    var m = this.meta(key);
    if (!m) return;
    this.originEl = el || this.originEl;
    this.nextKey = key;
    this.centerCat(el);
    try { history.replaceState(null, '', '/' + (PAGES[key] ? key : 'categoria/' + key)); } catch (e) {}
    var trig = this.itemTrig || (key === 'videos' && !(el && el.id && el.id.indexOf('nav-') === 0) && LINES.videos_cat ? 'videos_cat' : key);
    this.itemTrig = null;
    if (!this.speak(trig) && !(trig !== key && this.speak(key))) {
    this.say(m.msg, m.pose || 'laptop');
    if (key !== 'sobre') this.setMood(m.mood, 3800); }
    if (key === 'metricas' || key === 'skills') this.startCount();
    var reset = { persTab: 0, embCfg: null, embTab: 0, sideOff: {}, radHover: -1, galIdx: 0, prMode: 0, prProj: 0, siteIdx: 0, sub: 0, tab: 0, embIdx: 0, vidIdx: 0, mediaIdx: 0, pfilter: 0, form: null, vplaying: false, plPlaying: false };
    if (key === 'videos' && isMobile()) reset.vidIdx = 1;
    if (this.state.win && this.state.win.phase !== 'closing') {
      this.setState(Object.assign({ win: Object.assign({}, this.state.win, { key: key, swap: Date.now() }) }, reset));
      return;
    }
    if (this.state.reduced) {
      this.setState(Object.assign({ win: { key: key, phase: 'open', tf: 'none' } }, reset));
    } else {
      this.setState(Object.assign({ win: { key: key, phase: 'from', tf: this.originTf(el) } }, reset));
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        if (self.state.win) self.setState({ win: Object.assign({}, self.state.win, { phase: 'open' }) });
      }); });
    }
    setTimeout(function () { var c = document.getElementById('win-close'); if (c) c.focus({ preventScroll: true }); }, 480);
  }
  makeMask(url) {
    var self = this, img = new Image();
    img.onload = function () {
      try {
        var c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
        var x = c.getContext('2d'); x.drawImage(img, 0, 0);
        var d = x.getImageData(0, 0, c.width, c.height), a = d.data;
        for (var i = 0; i < a.length; i += 4) { var on = a[i + 3] > 20 && a[i] > 140 && a[i + 2] > 140 && a[i + 1] < 120; a[i] = 255; a[i + 1] = 0; a[i + 2] = 255; a[i + 3] = on ? 255 : 0; }
        x.putImageData(d, 0, 0);
        self.setState({ prMask: c.toDataURL('image/png'), uvOn: true, prMode: 0 });
        self.say(P('Máscara de verniz aplicada! Gira o cartão.', 'Varnish mask applied! Rotate the card.'), 'love');
      } catch (e) { self.say(P('Não consegui ler essa máscara.', 'Could not read that mask.'), 'pensa'); }
    };
    img.src = url;
  }
  startCount() {
    var self = this;
    cancelAnimationFrame(this.metRaf);
    if (this.state.reduced) { this.setState({ metP: 1 }); return; }
    var t0 = null;
    this.setState({ metP: 0 });
    var step = function (now) {
      if (t0 == null) t0 = now + 380;
      var p = Math.max(0, Math.min(1, (now - t0) / 1900));
      self.setState({ metP: p });
      if (p < 1) self.metRaf = requestAnimationFrame(step);
    };
    this.metRaf = requestAnimationFrame(step);
  }
  closeWin() {
    var self = this;
    if (!this.state.win) return;
    this.nextKey = this.state.win.key;
    var el = (!this.state.win.swap && this.originEl && document.contains(this.originEl)) ? this.originEl : null;
    if (!el) el = document.getElementById('cat-' + this.state.win.key) || document.getElementById('nav-' + this.state.win.key) || this.originEl;
    try { history.replaceState(null, '', '/'); } catch (e) {}
    if (!this.speak('done')) this.say(M.done, 'joinha');
    if (this.state.reduced) { this.setState({ win: null }); if (el && el.focus) el.focus({ preventScroll: true }); return; }
    this.setState({ win: Object.assign({}, this.state.win, { phase: 'closing', tf: this.originTf(el) }) });
    setTimeout(function () { self.setState({ win: null }); if (el && el.focus) el.focus({ preventScroll: true }); }, 330);
  }

  dragDown(id, e) {
    if (isMobile()) return;
    if (e.button !== undefined && e.button !== 0) return;
    var el = e.currentTarget;
    this.scene = el.closest('[data-scene]') || this.scene;
    var st = el.closest('.stage') || this.scene; var r = st.getBoundingClientRect();
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
    var p = this.state.pos[id];
    this.drag = { id: id, el: el, sx: e.clientX, sy: e.clientY, ox: p.x, oy: p.y, w: r.width, h: r.height, moved: false };
    var zTop = this.state.zTop + 1, z = Object.assign({}, this.state.z);
    if (zTop > 500) { z = {}; zTop = 12; }
    z[id] = zTop;
    this.setState({ zTop: zTop, z: z });
  }
  dragMoveH(e) {
    var d = this.drag, self = this;
    if (!d) return;
    var dx = e.clientX - d.sx, dy = e.clientY - d.sy;
    if (!d.moved && Math.hypot(dx, dy) < 7) return;
    if (!d.moved) { d.moved = true; this.setState({ dragging: d.id }); }
    d.nx = Math.min(94, Math.max(-2, d.ox + dx / d.w * 100));
    d.ny = Math.min(80, Math.max(7, d.oy + dy / d.h * 100));
    if (!this.raf) this.raf = requestAnimationFrame(function () {
      self.raf = null;
      var dd = self.drag; if (!dd || dd.nx === undefined) return;
      var pos = Object.assign({}, self.state.pos); pos[dd.id] = Object.assign({}, pos[dd.id], { x: dd.nx, y: dd.ny });
      self.setState({ pos: pos });
    });
  }
  dragUpH(e) {
    var d = this.drag;
    if (!d) return;
    this.drag = null;
    try { d.el.releasePointerCapture(e.pointerId); } catch (_) {}
    if (d.moved) {
      this.justDragged = Date.now();
      var pos = Object.assign({}, this.state.pos);
      if (d.nx !== undefined) pos[d.id] = Object.assign({}, pos[d.id], { x: d.nx, y: d.ny });
      this.setState({ pos: pos, dragging: null });
      this.savePos(pos);
      if (!this.dragTalked || Date.now() - this.dragTalked > 15000) { this.dragTalked = Date.now(); if (!this.speak('arrastar')) { this.say(M.drag, 'pisca'); this.setMood('nervoso', 3600); } }
    }
  }
  itemClick(id, e) {
    if (this.justDragged && Date.now() - this.justDragged < 300) return;
    var el = e.currentTarget;
    var map = { blue: 'projetos', check: 'skills', cracha: 'sobre', ticket: 'embalagens', yt: 'videos', im: 'contato' };
    var ITRIG = { cracha: 'cracha', im: 'messenger', check: 'postit', blue: 'postit', ticket: 'postit', yt: 'polaroid_video' };
    if (map[id]) { this.itemTrig = LINES[ITRIG[id]] ? ITRIG[id] : null; return this.openWin(map[id], el); }
    if (id === 'toggle') { var o = !this.state.tog; this.setState({ tog: o }); if (this.speak('toggle')) return; this.say(o ? M.togOn : M.togOff, o ? 'joinha' : 'pensa'); return this.setMood(o ? 'celebrando' : 'pensando', 3600); }
    if (id === 'badges') { this.say(M.badges, 'ri'); return this.setMood('celebrando', 3600); }
    if (id === 'sketch' && this.speak('postit')) return;
    if (id === 'pencil' && this.speak('lapis')) return;
    if (id === 'sketch') { this.say(M.sketch, 'pisca'); return this.setMood('piscando', 3600); }
    if (id === 'neon') { var o = !this.state.neonOff; this.setState({ neonOff: o }); if (!o) { this.say(P('Ideias ligadas!', 'Ideas on!'), 'joinha'); this.lastMood = 0; return this.setMood('ideia', 3600); } return; }
    if (id === 'ball' && this.speak('bolinha')) return;
    if (id === 'ball') { this.say(M.ball, 'pensa'); return this.setMood('confuso', 3600); }
    if (isMobile()) return;
    if (id === 'hw1' || id === 'hw2' || id === 'hw3' || id === 'hpill' || id === 'blk1') { this.say(M.words, 'sorriso'); return this.setMood('feliz', 3600); }
    this.say(M.deco, 'pisca');
  }
  tidyUp() {
    var pos = defaults(this.state.lang);
    this.setState({ pos: pos, z: {} });
    this.savePos(pos);
    if (!this.speak('reorganizar')) { this.say(M.tidy, 'joinha');
    this.setMood('celebrando', 3600); }
  }

  playTrack(i) {
    var self = this;
    if (TRACKS[i] && TRACKS[i].sp && !TRACKS[i].src) { this.spWant = true; this.setState({ plIdx: i, plTime: 0 }); this.spSync(); return; }
    if (TRACKS[i] && !TRACKS[i].src && TRACKS[i].url) { this.setState({ plIdx: i }); window.open(TRACKS[i].url, '_blank', 'noopener'); return; }
    this.setState({ plIdx: i, plTime: 0 });
    setTimeout(function () { var a = document.getElementById('aud'); if (a) { self.pauseOthers(a); var pr = a.play(); if (pr && pr.catch) pr.catch(function () {}); } }, 60);
  }
  spSync() {
    var self = this, host = document.getElementById('sphost'), tk = TRACKS[this.state.plIdx];
    if (!host || !tk || !tk.sp || tk.src) { if (SPC.host && !document.body.contains(SPC.host)) { SPC.ctrl = null; SPC.host = null; SPC.uri = ''; } return; }
    var fb = host.querySelector('iframe[data-fb]'); if (fb) { var u = 'https://open.spotify.com/embed/track/' + tk.sp + '?utm_source=generator'; if (fb.getAttribute('src') !== u) fb.setAttribute('src', u); this.spWant = false; return; }
    var uri = 'spotify:track:' + tk.sp, want = this.spWant; this.spWant = false;
    if (SPC.ctrl && SPC.host === host && document.body.contains(host)) {
      if (SPC.uri !== uri) { SPC.uri = uri; SPC.adv = false; SPC.ctrl.loadUri(uri); if (want) setTimeout(function () { try { SPC.ctrl.play(); } catch (_) {} }, 700); }
      else if (want) { try { SPC.ctrl.play(); } catch (_) {} }
      return;
    }
    if (SPC.creating === host) { if (want) SPC.want = true; return; }
    SPC.creating = host; SPC.want = want; SPC.ctrl = null;
    host.innerHTML = '<div></div>';
    var fallback = setTimeout(function () { if (!SPC.ctrl && document.body.contains(host)) { host.innerHTML = '<iframe data-fb="1" title="Spotify" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/track/' + tk.sp + '?utm_source=generator"></iframe>'; SPC.creating = null; } }, 3500);
    spApi(function (api) {
      if (!document.body.contains(host)) { SPC.creating = null; return; }
      api.createController(host.firstChild, { uri: uri, width: '100%', height: 80 }, function (ctrl) {
        clearTimeout(fallback); SPC.creating = null; SPC.ctrl = ctrl; SPC.host = host; SPC.uri = uri; SPC.adv = false; SPC.last = 0;
        ctrl.addListener('playback_update', function (ev) {
          var d = (ev && ev.data) || {}, playing = !d.isPaused && !d.isBuffering;
          if (playing !== !!self.state.plPlaying) self.setState({ plPlaying: playing });
          var dur = d.duration || 0, pos = d.position || 0;
          var nearEnd = dur > 0 && pos >= dur - 900, droppedAtEnd = d.isPaused && pos === 0 && SPC.last > 0 && dur > 0 && SPC.last >= dur - 2500;
          if (!SPC.adv && (nearEnd || droppedAtEnd)) { SPC.adv = true; setTimeout(function () { self.speak('musica_troca'); self.playTrack((self.state.plIdx + 1) % TRACKS.length); }, nearEnd ? 900 : 200); }
          if (!d.isPaused) SPC.last = pos;
        });
        if (SPC.want) { SPC.want = false; setTimeout(function () { try { ctrl.play(); } catch (_) {} }, 400); }
      });
    });
  }
  boxDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
    this.bd = { x: e.clientX, y: e.clientY, rx: this.state.rx, ry: this.state.ry };
    this.setState({ rot: true });
  }
  boxMove(e) {
    var b = this.bd; if (!b) return;
    var rx = Math.max(-60, Math.min(30, b.rx - (e.clientY - b.y) * 0.35));
    this.setState({ ry: b.ry + (e.clientX - b.x) * 0.5, rx: rx });
    if (!this.rotTalked) { this.rotTalked = true; if (!this.speak('girar_3d')) { this.say(M.rotate, 'lado'); this.setMood('concentrado', 3600); } }
  }
  boxUp() { this.bd = null; this.rotTalked = false; this.setState({ rot: false }); }

  submitForm(e) {
    e.preventDefault();
    var f = e.currentTarget.elements;
    if (f.site && f.site.value) { this.setState({ form: { ok: true } }); return; }
    var nome = (f.nome.value || '').trim(), email = (f.email.value || '').trim(), msg = (f.mensagem.value || '').trim();
    if (nome.length < 2) { this.speak('form_erro'); return this.setState({ form: { ok: false, k: 'fErrName' } }); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { this.speak('form_erro'); return this.setState({ form: { ok: false, k: 'fErrEmail' } }); }
    if (msg.length < 10) { this.speak('form_erro'); return this.setState({ form: { ok: false, k: 'fErrMsg' } }); }
    var self = this, assunto = f.assunto ? (f.assunto.value || '').trim() : '';
    var wa = String((SITE.links && SITE.links.whatsapp) || '5511971906718').replace(/\D/g, '');
    if (wa.length <= 11) wa = '55' + wa;
    var txt = (self.state.lang === 'en' ? 'Hi Victor! I am ' : 'Olá, Victor! Sou ') + nome + ' (' + email + ').' + (assunto ? '\n' + (self.state.lang === 'en' ? 'Subject: ' : 'Assunto: ') + assunto : '') + '\n\n' + msg;
    var url = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(txt);
    var w = null; try { w = window.open(url, '_blank', 'noopener'); } catch (_) {}
    if (!w) { try { location.href = url; } catch (_) {} }
    this.setState({ form: { ok: true } });
    setTimeout(function () { self.setState({ form: { ok: true, shown: true } }); }, 650);
    if (!this.speak('form_enviado')) { this.say(M.sent, 'joinha');
    this.setMood('celebrando', 3600); }
  }

  renderVals() {
    var self = this, s = this.state, L = s.lang, t = T[L];
    (function () {
      var k0 = s.win && s.win.key, c0 = null; for (var ci = 0; ci < CATS.length; ci++) if (CATS[ci].key === k0) c0 = CATS[ci];
      var o = {};
      if ((c0 && c0._data) || (k0 === 'projetos' && SITE.projects && Object.keys(SITE.projects).length)) { o.demo = ''; o.demo1 = ''; o.photoDemo = ''; }
      if (METS_SITE) o.metTag = '';
      if (SKILLS_SITE) o.radarNote = '';
      if (SITE.tracks && SITE.tracks.length) o.plTag = '';
      var lk = SITE.links || {};
      if (lk.email) o.lEmail = lk.email;
      if (lk.whatsapp) o.lWpp = lk.whatsapp_label || lk.whatsapp;
      if (lk.linkedin) o.lIn = String(lk.linkedin).replace(/^https?:\/\/(www\.)?/, '');
      if (Object.keys(o).length) t = Object.assign({}, t, o);
    })();
    var igHandle = SITE.links && SITE.links.instagram ? '@' + String(SITE.links.instagram).replace(/^@/, '') : '';
    if (!s.pos) { s.pos = this.loadPos(L); }
    var tr = function (x) { return !x ? '' : (typeof x === 'string' ? x : (x[L] || x.pt)); };
    var win = s.win, key = win ? win.key : null;
    var cat = CATS.find(function (c) { return c.key === key; });
    var m = key ? this.meta(key) : null;
    var mobile = isMobile();

    var d = {}, DEF = defaults(L);
    Object.keys(DEF).forEach(function (id) {
      var p = s.pos[id] || DEF[id], lifted = s.dragging === id;
      d[id] = {
        x: p.x, y: p.y, z: s.z[id] || (['hw1', 'hw2', 'hw3', 'hpill', 'blk1'].indexOf(id) >= 0 ? 9 : 6), r: DEF[id].r + (lifted ? 3 : 0), s: lifted ? 1.08 : 1,
        cls: 'drag d-' + id + (lifted ? ' lifted' : ''),
        down: function (e) { self.dragDown(id, e); },
        click: function (e) { self.itemClick(id, e); }
      };
    });

    var vD = key === 'videos' && !mobile, embD = false, sitesD = key === 'sites' && !mobile, persD = false, skD = key === 'skills' && !mobile, plD = key === 'playlist' && !mobile, galD = !!cat && ['publicidade', 'baloes', 'handmade', 'produtos', 'embalagens', 'personalizados'].indexOf(key) >= 0 && !mobile, grD = key === 'grafica' && !mobile, multi = vD || embD || sitesD || persD || skD || galD || grD;
    var EMPTYC = !!(cat && CAT_EMPTY[cat.key]); if (EMPTYC) { vD = embD = sitesD = persD = galD = grD = multi = false; }
    var hasFilters = (!!cat && !multi && !EMPTYC) || key === 'projetos';
    var off = s.sideOff || {};
    var gW = 1440, gH = 900;
    try { var sr0 = this.scene ? this.scene.getBoundingClientRect() : null; gW = sr0 && sr0.width ? sr0.width : window.innerWidth; gH = sr0 && sr0.height ? sr0.height : window.innerHeight; } catch (e) {}
    var g = winGeom(key, gW, gH, galAR(key, s.galIdx));
    var px = function (n) { return Math.round(n) + 'px'; };
    var sg = function (o) { return o ? { l: px(o.l), t: px(o.t), w: px(o.w), h: px(o.h) } : { l: '', t: '', w: '', h: '' }; };
    var fit = (key === 'contato' || key === 'metricas' || key === 'playlist' || key === 'skills') && !mobile;
    var w = { cls: 'win' + (fit ? ' fit' : ''), show: !!win, title: m ? tr(m.title) : '', icon: m ? m.icon : '', hasFilters: hasFilters, noFilters: !hasFilters, mainCls: 'main' + (vD ? ' vmain' : '') + (embD || persD || grD ? ' emain' : '') + (sitesD ? ' smain2' : '') + (galD ? ' vmain' : '') + (win && win.swap ? ' swap' : ''), tf: 'none', op: 1, tr: 'none',
      l: mobile ? '' : px(g.l), t: mobile ? '' : px(g.t), wd: mobile ? '' : px(g.w), ht: mobile || fit ? '' : px(g.h), tf2: 'translate(-40px, 30px) scale(.9)', op2: 0, tr2: 'transform .3s ease-in, opacity .25s ease-in', tr3: 'transform .3s ease-in, opacity .25s ease-in',
      reopen: multi && !!(off[1] || off[2]) };
    var s1 = sg(multi && g.s ? g.s[0] : null), s2 = sg(multi && g.s && g.s[1] ? g.s[1] : null);
    var pop = { pltr: false, grtxt: grD && !off[1], grup: grD && !off[2], gtxt: galD && !off[1], gimg: galD && !off[2], ptxt: persD && !off[1], pvid: persD && !off[2], skcomp: skD && !off[1], skmore: skD && !off[2], vlist: vD && !off[1], etxt: embD && !off[1], evid: embD && !off[2], sinfo: sitesD && !off[1], sphone: sitesD && !off[2] };
    if (win && win.phase === 'open') { w.tf2 = 'none'; w.op2 = 1; w.tr2 = s.reduced ? 'opacity .15s' : 'transform .55s cubic-bezier(.2,.9,.3,1.15) .2s, opacity .3s ease-out .2s, left .45s, width .45s, top .45s, height .45s'; w.tr3 = s.reduced ? 'opacity .15s' : 'transform .55s cubic-bezier(.2,.9,.3,1.15) .32s, opacity .3s ease-out .32s, left .45s, width .45s, top .45s, height .45s'; }
    if (win) {
      if (win.phase === 'from') { w.tf = win.tf; w.op = 0.3; w.tr = 'none'; }
      else if (win.phase === 'open') { w.tf = 'translate(0px, 0px) scale(1, 1)'; w.op = 1; w.tr = s.reduced ? 'opacity .15s' : 'transform .52s cubic-bezier(.18,.9,.3,1.1), opacity .22s ease-out, left .45s cubic-bezier(.2,.8,.2,1), width .45s cubic-bezier(.2,.8,.2,1)'; }
      else { w.tf = win.tf; w.op = 0; w.tr = 'transform .32s cubic-bezier(.5,0,.8,.4), opacity .32s ease-in'; }
    }

    var cats = [];
    for (var copy = 0; copy < 3; copy++) {
      CAT_ORDER.map(function (ci) { return CATS[ci]; }).forEach(function (c, i) {
        cats.push({ id: copy === 1 ? 'cat-' + c.key : 'catc' + copy + '-' + c.key, cls: 'cat' + (key === c.key ? ' on' : ''), icon: c.icon, label: tr(c.label), sub: tr(c.sub),
          aria: tr(c.title), tab: copy === 1 ? '0' : '-1', hid: copy === 1 ? 'false' : 'true', dl: (i * 0.35).toFixed(2),
          tdown: function (e) { if (e.pointerType === 'mouse') return; self.tap = { x: e.clientX, y: e.clientY, t: Date.now() }; },
          tup: function (e) { var t = self.tap; self.tap = null; if (!t || e.pointerType === 'mouse') return; if (Math.abs(e.clientX - t.x) < 24 && Math.abs(e.clientY - t.y) < 24 && Date.now() - t.t < 1000) { self.tapOpened = Date.now(); self.openWin(c.key, e.currentTarget); } },
          open: function (e) { if (self.tapOpened && Date.now() - self.tapOpened < 800) return; if (self.dragged()) return; self.openWin(c.key, e.currentTarget); } });
      });
    }

    var flist = cat ? cat.filters : (key === 'projetos' ? [P('Todos', 'All')].concat(CATS.map(function (c) { return c.title; })) : []);
    var fsel = key === 'projetos' ? s.pfilter : s.sub;
    var filters = flist.map(function (f, i) {
      var on = fsel === i;
      return { label: tr(f), on: on ? 'true' : 'false', cls: 'chip' + (on ? ' on' : ''),
        pick: function () { if (self.dragged()) return; if (i !== fsel) self.speak('filtro'); if (key === 'projetos') self.setState({ pfilter: i }); else if (key === 'embalagens') { var fe = embCat.projects.findIndex(function (q) { return i === 0 || q[1] === i; }); self.setState({ sub: i, embCfg: null, lid: false, embIdx: fe < 0 ? self.state.embIdx : fe }); } else if (key === 'grafica') { var fi = GP_FIRST[i] || 0; self.setState({ sub: i, prProj: fi }); } else self.setState({ sub: i, vidIdx: 0, mediaIdx: 0, siteIdx: 0, mugIdx: 0, ry: key === 'personalizados' && i === 3 ? 18 : self.state.ry }); } };
    });

    filters = filters.map(function (f, i) { f.i = i; return f; }).filter(function (f) { if (f.i === 0) return false; if (key === 'projetos') return true; if (cat && cat._data) return cat.projects.some(function (q) { return q[1] === f.i; }); return true; });
    filters.forEach(function (f) { var pk = f.pick, ii = f.i; f.pick = function () { if (fsel === ii) { if (key === 'projetos') self.setState({ pfilter: 0 }); else self.setState({ sub: 0, vidIdx: 0, mediaIdx: 0, siteIdx: 0 }); } else pk(); }; });
    var curProjects = cat ? cat.projects.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return s.sub === 0 || o.p[1] === s.sub; }).map(function (o) {
      var imgs = IMG[cat.key] || IMG.publicidade, ph = o.p[2] === 'ph', live = o.p[2] === 'live', pd = o.p[3] && typeof o.p[3] === 'object' ? o.p[3] : null;
      var r = { name: (ph ? '' : (L === 'en' ? 'Example — ' : 'Exemplo — ')) + tr(o.p[0]), tag: tr(cat.filters[o.p[1]]) + (ph ? ' · placeholder' : ''), img: ph ? '/static/media/20f511eb3cf82e9eaa18a1af8818d1f0.jpg' : imgs[o.i % imgs.length], desk: ph ? '/static/media/20f511eb3cf82e9eaa18a1af8818d1f0.jpg' : IMG.sites[o.i % 3], mob: ph ? '/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg' : SITE_MOB[o.i % 3], url: live ? o.p[3].replace(/^https?:\/\//, '').replace(/\/$/, '') : 'victortrindade.com/sites/' + ['lancamento', 'institucional', 'catalogo'][o.i % 3] , live: live, notLive: !live, liveUrl: live ? o.p[3] : ''}; if (pd) { r.name = tr(pd.title); if (pd.images && pd.images[0]) r.img = pd.images[0].src; if (pd.desk) r.desk = pd.desk; if (pd.mob) r.mob = pd.mob; if (pd.url) r.url = pd.url.replace(/^https?:\/\//, '').replace(/\/$/, ''); r.href = pd.url || ''; r.data = pd; if (pd.video && pd.video.src) r.vid = pd.video.src; } return r;
    }) : [];

    var mitems = [];
    if (cat && cat.photos) {
      var ims = IMG[cat.key] || [];
      var gl = GAL[cat.key];
      cat.photos.forEach(function (p, i) { var gg = gl && gl[i % gl.length]; mitems.push({ label: tr(p), video: false, img: gg ? gg[0] : ims[i % ims.length], ar: gg ? gg[1] : 1.6, fmt: gg ? gg[2] : '' }); });
      if (cat.video) mitems.push({ label: t.video, video: true, img: '' });
    }
    var gphotos = mitems.filter(function (x) { return !x.video; });
    var gi2 = Math.min(s.galIdx || 0, Math.max(0, gphotos.length - 1));
    var gal = { img: gphotos[gi2] ? gphotos[gi2].img : '', ar: gphotos[gi2] ? String(gphotos[gi2].ar || 1) : '1', fmt: gphotos[gi2] ? gphotos[gi2].fmt || '' : '', label: gphotos[gi2] ? gphotos[gi2].label + (t.photoDemo ? ' · ' + t.photoDemo : '') : '', n: (gi2 + 1) + ' / ' + gphotos.length,
      items: gphotos.map(function (x, i) { return { img: x.img, label: x.label, cls: 'gth' + (i === gi2 ? ' on' : ''), on: i === gi2 ? 'true' : 'false', pick: function () { self.setState({ galIdx: i }); } }; }),
      prev: function () { self.speak('foto_proxima'); self.setState({ galIdx: (gi2 - 1 + gphotos.length) % Math.max(1, gphotos.length) }); },
      next: function () { self.speak('foto_proxima'); self.setState({ galIdx: (gi2 + 1) % Math.max(1, gphotos.length) }); } };
    var mi = Math.min(s.mediaIdx, Math.max(0, mitems.length - 1));
    var media = {
      hasVid: !(cat && cat._data && !cat._video), noVid: !!(cat && cat._data && !cat._video),
      isVideo: !!(mitems[mi] && mitems[mi].video), isPhoto: !(mitems[mi] && mitems[mi].video),
      label: mitems[mi] ? mitems[mi].label + (t.photoDemo ? ' · ' + t.photoDemo : '') : '',
      ar: mitems[mi] && !mitems[mi].video ? String(mitems[mi].ar || 1.6) : '1.6', img: mitems[mi] ? mitems[mi].img : '', vsrc: cat && cat._video ? cat._video.src : CLIPS[(cat ? CATS.indexOf(cat) : 0) % 3].src, vposter: cat && cat._video ? (cat._video.poster || '') : CLIPS[(cat ? CATS.indexOf(cat) : 0) % 3].poster,
      items: mitems.map(function (x, i) { return { label: x.label, video: x.video, photo: !x.video, img: x.img, on: i === mi ? 'true' : 'false', cls: 'mthumb' + (x.video ? ' vid' : '') + (i === mi ? ' on' : ''), pick: function () { if (i !== mi) self.speak('foto_proxima'); self.setState({ mediaIdx: i }); } }; })
    };

    var embCat = CATS[1];
    var colors = ['#ef7fa3', '#c9a27a', '#7b3fe0', '#f5c842', '#7aa7e6', '#d6cdb9', '#d6cdb9'];
    var embProjects = embCat.projects.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return key !== 'embalagens' || s.sub === 0 || o.p[1] === s.sub; }).map(function (o) {
      var p = o.p, i = o.i, ty = EMB_TYPE[i] || 'box';
      return { short: tr(p[0]).replace(/^(Copo|Caixa|Kit|Sacola) /, '$1\u00a0'), ico: icoUri(ty), cls: 'thumb' + (s.embIdx === i && s.embCfg == null ? ' on' : '') + (p[2] === 'ph' ? ' ph' : ''),
        pick: function () { if (self.dragged()) return; self.setState({ embIdx: i, embCfg: null, lid: false }); if (!self.speak('trocar_modelo')) self.say(P('Trocando para: ' + p[0].pt, 'Switching to: ' + p[0].en), 'o'); } };
    });
    var tabKeys = ['sobre', 'processo', 'faca', 'fotos', 'apps'];
    var tabs = t.tabs.map(function (lb, i) {
      var on = s.tab === i;
      return { label: lb, on: on ? 'true' : 'false', cls: 'chip' + (on ? ' on' : ''), pick: function () { if (self.dragged()) return; self.setState({ tab: i }); } };
    });
    var tab = {}; tabKeys.forEach(function (k, i) { tab[k] = s.tab === i; });

    var allProjects = [], deckSrc = [];
    CATS.forEach(function (c, ci) {
      var imgs = IMG[c.key] || IMG.publicidade;
      if (CAT_EMPTY[c.key]) return;
      deckSrc.push({ name: tr(c.projects[0][0]), cat: tr(c.title), img: imgs[0], key: c.key });
      if (s.pfilter !== 0 && s.pfilter !== ci + 1) return;
      c.projects.slice(0, 3).forEach(function (p, pi) {
        allProjects.push({ name: (c._data ? '' : (L === 'en' ? 'Example — ' : 'Exemplo — ')) + tr(p[0]), cat: tr(c.title), tag: tr(c.filters[p[1]]), img: imgs[pi % imgs.length], open: function () { self.openWin(c.key, document.getElementById('cat-' + c.key)); } });
      });
    });
    var DN = deckSrc.length, DR = [-4, 3, -2, 5, -6, 2, -3], PN = ['pin', 'pin b', 'pin y', 'pin g'];
    var deck = deckSrc.map(function (c, i) {
      var k = (i - s.deckIdx % DN + DN) % DN;
      return { name: c.name, img: c.img, cls: 'pol' + (i === s.tossed ? ' toss' : ''), tx: k * 5, ty: k * 4, r: k === 0 ? -1.5 : DR[i % DR.length], z: DN - k, pin: k === 0 ? PN[i % 4] : '' };
    });
    var deckCur = deckSrc[s.deckIdx % DN] || { name: '', cat: '', img: '', key: 'projetos' };

    var MUGS = [['/static/media/2638ff9c3ed473cd76fded6b09cf8552.png', '#fdf7f1', '#d8ccb8'], ['/static/media/aef7bb049e41424c716dd95f743b7be2.png', '#2f62cf', '#2853b0'], ['/static/media/b3ec7a89e47502d51e727caf45082eaa.png', '#ffd23f', '#e9bb2a']];
    if (PERS_SITE && PERS_SITE.mug.length) MUGS = PERS_SITE.mug.map(function (p) { return [p.art.front, p.color || '#fdf7f1', shade(p.color || '#fdf7f1', .85)]; });
    var mi2 = (s.mugIdx || 0) % MUGS.length, NF = 28, mugFaces = [];
    for (var fi = 0; fi < NF; fi++) { var fa = fi * 360 / NF, lit = Math.cos((fa + (s.ry || 0) + 28) * Math.PI / 180); mugFaces.push({ a: fa.toFixed(2), bp: -fi * 19, b: (0.7 + 0.36 * Math.max(0, lit)).toFixed(2) }); }
    var pmode = key === 'personalizados' ? (s.sub === 2 ? 'bottle' : s.sub === 3 ? 'tile' : 'mug') : 'mug';
    var PARTS_ART = { bottle: ['/static/media/e4d25f7777b7389466d61bd45d168a87.jpg', '/static/media/584c375681dba99111efb0902874ccf2.jpg'], tile: ['/static/media/ccdbe00a2526eda146c3646808ae8031.jpg', '/static/media/66868e5cdf6146c66e97c92c5fa0c3c8.jpg'] };
    if (PERS_SITE) ['bottle', 'tile'].forEach(function (k) { if (PERS_SITE[k].length) PARTS_ART[k] = PERS_SITE[k].map(function (p) { return p.art.front; }); });
    var nArt = pmode === 'mug' ? MUGS.length : PARTS_ART[pmode].length, ai = (s.mugIdx || 0) % nArt;
    var PNAMES = { mug: [P('Caneca corações “victor”', 'Hearts mug “victor”'), P('Caneca estrelas “criativo”', 'Stars mug “creative”'), P('Caneca café & ideias', 'Coffee & ideas mug')], bottle: [P('Garrafa “beba água & ideias”', 'Bottle “drink water & ideas”'), P('Garrafa VT team', 'VT team bottle')], tile: [P('Azulejo “lar doce lar”', 'Tile “home sweet home”'), P('Azulejo estrela — sua arte aqui', 'Star tile — your art here')] };
    if (PERS_SITE) ['mug', 'bottle', 'tile'].forEach(function (k) { if (PERS_SITE[k].length) PNAMES[k] = PERS_SITE[k].map(function (p) { return p.title; }); });
    var persDone = PNAMES[pmode].map(function (nm, j) {
      var parts = pmode === 'mug' ? mugParts(MUGS[j][0], MUGS[j][2], .42) : pmode === 'bottle' ? bottleParts(PARTS_ART.bottle[j], 0) : tileParts(PARTS_ART.tile[j]);
      return { name: tr(nm), type: t.persTypes[pmode], parts: nz(parts), sc: pmode === 'mug' ? 1 : pmode === 'bottle' ? .34 : .4, dl: (-j * 0.9).toFixed(1), cls: 'mmcard' + (j === ai ? ' on' : ''),
        pick: function () { if (self.dragged()) return; self.setState({ mugIdx: j }); if (!self.speak('modelo_ja_fiz')) self.say(P('Esse eu já fiz: ' + nm.pt + '!', 'I made this one: ' + nm.en + '!'), 'love'); } };
    });
    var mug = { isMug: pmode === 'mug', isOther: pmode !== 'mug', parts: pmode === 'bottle' ? nz(bottleParts(PARTS_ART.bottle[ai], s.ry || 0)) : pmode === 'tile' ? nz(tileParts(PARTS_ART.tile[ai])) : [],
      faces: mugFaces, print: MUGS[mi2][0], hc: MUGS[mi2][2], hc2: MUGS[mi2][1],
      next: function () { self.setState({ mugIdx: ((s.mugIdx || 0) + 1) % nArt }); if (!self.speak('trocar_modelo')) { self.say(P('Nova estampa!', 'New print!'), 'love'); self.setMood('feliz', 3000); } } };
    var RV = SKILLS_SITE ? SKILLS_SITE.map(function (c) { return Math.max(1, Math.min(5, +c.level || 3)); }) : [5, 4, 5, 4, 4, 3], RN = SKILLS_SITE ? SKILLS_SITE.map(function (c) { return tr(c.name); }) : t.skills.slice(0, 6), RA = RN.length, RC = 150, RR = 104;
    var rpt = function (i, v) { var a = -Math.PI / 2 + i * 2 * Math.PI / RA; return [RC + RR * v * Math.cos(a), RC + RR * v * Math.sin(a)]; };
    var rings = [1, 2, 3, 4, 5].map(function (lv) { return RN.map(function (_, i) { var q = rpt(i, lv / 5); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); });
    var rh = s.radHover == null ? -1 : s.radHover;
    var radar = {
      rings: rings,
      axes: RN.map(function (_, i) { var q = rpt(i, 1); return { x: q[0].toFixed(1), y: q[1].toFixed(1) }; }),
      pts: RN.map(function (_, i) { var q = rpt(i, RV[i] / 5); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '),
      dots: RN.map(function (_, i) { var q = rpt(i, RV[i] / 5); return { x: q[0].toFixed(1), y: q[1].toFixed(1), r: rh === i ? 7 : 5, on: function () { self.setState({ radHover: i }); } }; }),
      labels: RN.map(function (n, i) { var q = rpt(i, 1.22); return { t: n, x: (q[0] / 3).toFixed(1), y: (q[1] / 3).toFixed(1) }; }),
      list: RN.map(function (n, i) { return n + ': ' + t.levels[RV[i] - 1]; }),
      tip: rh >= 0 ? (function () { var q = rpt(rh, RV[rh] / 5); return { show: true, x: (q[0] / 3).toFixed(1), y: (q[1] / 3).toFixed(1), name: RN[rh], lvl: t.levels[RV[rh] - 1] + ' · ' + t.ex }; })() : { show: false, x: 0, y: 0, name: '', lvl: '' }
    };
    var RCOL = ['#e9558b', '#2f62cf', '#e0a019', '#2f8a4a', '#6a4fd6', '#d9822b'];
    var sp = s.metP == null ? 1 : s.metP;
    var arcPath = function (r, f) {
      var a0 = -Math.PI / 2, a1 = a0 + Math.max(0.0001, f) * 1.5 * Math.PI;
      var x0 = 150 + r * Math.cos(a0), y0 = 150 + r * Math.sin(a0), x1 = 150 + r * Math.cos(a1), y1 = 150 + r * Math.sin(a1);
      return { d: 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (f > 2 / 3 ? 1 : 0) + ' 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1), x: x1.toFixed(1), y: y1.toFixed(1) };
    };
    var rings = {
      items: RN.slice(0, 6).map(function (n, i) {
        var r = 132 - i * 19, pi = Math.max(0, Math.min(1, (sp - i * 0.07) / 0.65)), e = 1 - Math.pow(1 - pi, 3), f = (RV[i] / 5) * e, a = arcPath(r, f), tk = arcPath(r, 1);
        return { track: tk.d, arc: a.d, ex: a.x, ey: a.y, c: RCOL[i % RCOL.length], sw: rh === i ? 16 : 13, name: n, ly: ((150 - r) / 3).toFixed(1), lcls: 'rlab2' + (rh === i ? ' on' : ''), on: function () { self.setState({ radHover: i }); } };
      }),
      big: rh >= 0 ? t.levels[RV[rh] - 1] : String(RN.length),
      small: rh >= 0 ? RN[rh] + ' · ' + t.ex : t.ringsSmall,
      list: RN.map(function (n, i) { return n + ': ' + t.levels[RV[i] - 1]; })
    };
    var PRD = [{ f: '/static/media/497d3e0fd823c966778871bbae24cf90.jpg', b: '/static/media/f2423b63d3172257efe59d38c53a9222.jpg' }, { f: '/static/media/34ea2ed76560cee35cd58a2653b3f227.jpg', b: '/static/media/a5612ff119a45ef8f83784dade18e8d2.jpg' }, { f: '/static/media/e5ff97d586484dcdd412cf845ce835cf.jpg', b: '' }];
    var GP = [
      { name: P('Cartão de visita com verniz — Camilla Trindade', 'Business card with spot UV — Camilla Trindade'), tag: 1, mode: 0, f: '/static/media/497d3e0fd823c966778871bbae24cf90.jpg', b: '/static/media/f2423b63d3172257efe59d38c53a9222.jpg', mf: '/static/media/4e915f4c78dfbb74acf302f84e5cb9dc.png', mb: '/static/media/26ae79ca65b2d17c738623db877b8e1e.png', vert: false },
      { name: P('Cartão vertical com verniz', 'Vertical card with spot UV'), tag: 1, mode: 0, f: '/static/media/eb3114e8c87c1dedffdcf462f9bb9a58.jpg', b: '/static/media/95a449d1e0f1afd57becb29f1b7e8ca4.jpg', mf: '/static/media/8c8d67244c501ab19d883c6bf7ddbf84.png', mb: '/static/media/af27990b3e60483dbe819ed5a3417dec.png', vert: true },
      { name: P('Flyer A5 frente e verso', 'Double-sided A5 flyer'), tag: 2, mode: 1, f: '/static/media/34ea2ed76560cee35cd58a2653b3f227.jpg', b: '/static/media/a5612ff119a45ef8f83784dade18e8d2.jpg' },
      { name: P('Banner roll-up 80×200', 'Roll-up banner 80×200'), tag: 3, mode: 2, f: '/static/media/e5ff97d586484dcdd412cf845ce835cf.jpg', b: '' },
      { name: P('Voucher vale-presente', 'Gift voucher'), tag: 4, mode: 3, f: '/static/media/fc1d0c67c9a813b2d8bacdcb3cabe55e.jpg', b: '/static/media/6b5c38a1de8f98aee623159fb783897d.jpg' },
      { name: P('Papel timbrado A4', 'A4 letterhead'), tag: 5, mode: 4, f: '/static/media/afb071a2cf1cea610d3965f9d0571521.jpg', b: '' },
      { name: P('Seu próximo cartão', 'Your next card'), tag: 1, mode: 0, ph: true, f: '/static/media/20f511eb3cf82e9eaa18a1af8818d1f0.jpg', b: '/static/media/20f511eb3cf82e9eaa18a1af8818d1f0.jpg', mf: '', mb: '', vert: false },
      { name: P('Seu próximo flyer', 'Your next flyer'), tag: 2, mode: 1, ph: true, f: '/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg', b: '/static/media/00b67958c5caf7ef52a26c7c1a2ac9f0.jpg' }
    ];
    if (GP_SITE) GP = GP_SITE; else GP.splice(1, 0, { name: P('Cartão victor trindade', 'victor trindade card'), tag: 1, mode: 0, f: '/static/media/936ce8703a6a7e27b9dde002d17c97b5.jpg', b: '/static/media/8c4812a821bb58ef7d09ee6a45a95aca.jpg', mf: '/static/media/c46a3070290d9a133d9a09350dcd0523.png', mb: '', vert: false });
    var gpi = Math.min(s.prProj || 0, GP.length - 1), gp = GP[gpi];
    var MSZ = [[112, 62], [78, 110], [46, 116], [122, 44], [78, 110]];
    var grDone = GP.map(function (g, i) { return { g: g, i: i }; }).filter(function (o) { return !o.g.ph && o.g.mode === gp.mode && !!o.g.vert === !!gp.vert; }).map(function (o, n) {
      var g = o.g, sz = MSZ[g.mode] || MSZ[0], w = g.vert ? sz[1] : sz[0], h = g.vert ? sz[0] : sz[1];
      var face = function (img, back) { return { cls: 'cf', w: w, h: h, l: -w / 2, t: -h / 2, tf: back ? 'rotateY(180deg) translateZ(.6px)' : 'translateZ(.6px)', clip: 'none', bg: 'url(' + img + ') center/cover', b: back ? .92 : 1, bd: 'none', rad: '3px' }; };
      return { name: tr(g.name), type: tr(CATS[7].filters[g.tag]) + (g.vert ? ' · vertical' : ''), parts: [face(g.f, false), face(g.b || g.f, true)], dl: (-n * 0.9).toFixed(1), cls: 'mmcard' + (o.i === gpi ? ' on' : ''),
        pick: function () { if (self.dragged()) return; self.setState({ prProj: o.i, rx: -14, ry: g.vert ? 20 : 30 }); } };
    });
    var pm = gp.mode, pa = s.prArt || {};
    var grList = GP.map(function (g, i) { return { name: tr(g.name), tag: tr(CATS[7].filters[g.tag]) + (g.vert ? ' · vertical' : '') + (g.ph ? ' · placeholder' : ''), img: g.f, cls: 'pitem sitem' + (i === gpi ? ' on' : '') + (g.ph ? ' ph' : ''), cur: i === gpi ? 'true' : 'false', show: s.sub === 0 || s.sub === g.tag,
      pick: function () { self.setState({ prProj: i, rx: -14, ry: g.vert ? 20 : 30 }); if (!self.speak(g.mf || g.mb ? 'verniz' : 'modelo_ja_fiz')) self.say(P('Olha esse: ' + g.name.pt + '!', 'Check this: ' + g.name.en + '!'), 'o'); } }; }).filter(function (x) { return x.show; });
    var upl = function (kind) { return function (e) { var f = e.target.files && e.target.files[0]; if (!f) return; var u = URL.createObjectURL(f);
      if (kind === 'm') { self.makeMask(u); return; }
      var a = Object.assign({}, self.state.prArt); a[pm + kind] = u; self.setState({ prArt: a }); self.say(P('Arte aplicada no modelo!', 'Artwork applied to the model!'), 'joinha'); }; };
    var pr = {
      modes: t.prModes.map(function (lb, i) { return { label: lb, cls: 'chip' + (i === pm ? ' on' : ''), on: i === pm ? 'true' : 'false', pick: function () { self.setState({ prMode: i, sub: i + 1 }); } }; }),
      isCard: pm === 0, isFlyer: pm === 1, isBanner: pm === 2, isVoucher: pm === 3, isSheet: pm === 4,
      front: gp.f, back: gp.b || gp.f,
      mask: gp.mf || '', maskB: gp.mb || '', hasUv: !!gp.mf, cardCls: 'pobj pcard' + (gp.vert || CARD_VERTICAL ? ' vert' : ''),
      uvOn: pm === 0 && !!gp.mf, uvB: pm === 0 && !!gp.mb, showMask: false,
      shxB: (-Math.max(-70, Math.min(70, ((s.ry || 0) % 360 > 180 ? (s.ry % 360) - 360 : (s.ry || 0) % 360) * 1.3 - 234 + (s.rx || 0) * 0.8))).toFixed(1),
      shx: Math.max(-70, Math.min(70, ((s.ry || 0) % 360 > 180 ? (s.ry % 360) - 360 : (s.ry || 0) % 360) * 1.3 + (s.rx || 0) * 0.8)).toFixed(1),
      uvLabel: s.uvOn !== false ? t.uvOff : t.uvOn, maskLabel: s.showMask ? t.maskHide : t.maskShow,
      uvToggle: function () { var o = self.state.uvOn === false; self.setState({ uvOn: o }); if (o && self.speak('verniz')) return; self.say(o ? P('Verniz ligado — gira pra ver o brilho!', 'Varnish on — rotate to see the shine!') : P('Verniz desligado.', 'Varnish off.'), 'o'); },
      maskToggle: function () { self.setState({ showMask: !self.state.showMask }); },
      upFront: upl('f'), upBack: upl('b'), upMask: upl('m'),
      resetArt: function () { self.setState({ prArt: {}, prMask: null }); },
      isCardOnly: pm === 0
    };
    var starRows = RN.map(function (n, i) {
      var st = []; for (var k = 0; k < 5; k++) { var on = k < RV[i], q = Math.max(0, Math.min(1, (sp * 2.2 - i * 0.12 - k * 0.09) / 0.35)), c1 = 1.70158, c3 = c1 + 1, eb = q <= 0 ? 0 : 1 + c3 * Math.pow(q - 1, 3) + c1 * Math.pow(q - 1, 2);
        st.push({ sc: on ? eb.toFixed(3) : 0, rot: on ? ((1 - q) * -40).toFixed(1) : 0, op: on ? Math.min(1, q * 3).toFixed(2) : 0 }); }
      return { name: n, lvl: t.levels[RV[i] - 1], stars: st, aria: n + ': ' + RV[i] + '/5 — ' + t.levels[RV[i] - 1] };
    });
    var neon = { cls: 'neon' + (s.neonOff ? ' off' : ''), lbl: s.neonOff ? 'OFF' : 'ON', toggle: function () { var o = !self.state.neonOff; self.setState({ neonOff: o }); if (!o) { self.say(P('Ideias ligadas!', 'Ideas on!'), 'joinha'); self.lastMood = 0; self.setMood('ideia', 3600); } } };
    var ecfg = s.embCfg != null && EMB_DONE[s.embCfg] ? EMB_DONE[s.embCfg][1] : EMB_DEF[EMB_TYPE[s.embIdx] || 'box'];
    var etype = ecfg.t, parts = nz(etype === 'box' ? [] : etype === 'bag' ? bagParts(ecfg, 1) : cupParts(ecfg, s.ry || 0, 1, s.lid ? -70 : 0, 28));
    var cup = { isBox: etype === 'box', isCup: etype !== 'box', parts: parts };
    var embDone = EMB_DONE.map(function (d, j) { return { d: d, j: j }; }).filter(function (o) { return o.d[1].t === etype; }).map(function (o) {
      var d = o.d, j = o.j;
      return { name: tr(d[0]), type: t.embTypes[d[1].t], parts: nz(d[1].t === 'box' ? boxMini(.62) : d[1].t === 'bag' ? bagParts(d[1], .42) : cupParts(d[1], 0, .5, 0, 14)), cls: 'mmcard' + (s.embCfg === j ? ' on' : ''), dl: (-j * 0.9).toFixed(1),
        pick: function () { if (self.dragged()) return; var bi = EMB_TYPE.indexOf(d[1].k || d[1].t); self.setState({ embCfg: j, embIdx: bi < 0 ? 0 : bi, lid: false }); if (!self.speak('modelo_ja_fiz')) self.say(P('Esse eu já fiz: ' + d[0].pt + '!', 'I made this one: ' + d[0].en + '!'), 'love'); } };
    });
    var embTabDone = !s.embTab, embTabVid = !!s.embTab;
    var gauges = RN.map(function (n, i) {
      var pi = Math.max(0, Math.min(1, (sp - i * 0.08) / 0.6)), e = 1 - Math.pow(1 - pi, 3), f = (RV[i] / 5) * e, C = 251.33;
      return { name: n, c: RCOL[i % RCOL.length], da: (C * f).toFixed(1) + ' ' + C, num: pi >= 1 ? String(RV[i]) : (RV[i] * e).toFixed(1).replace('.', L === 'pt' ? ',' : '.'), lvl: t.levels[RV[i] - 1], cls: 'gauge' + (rh === i ? ' on' : ''), on: function () { self.setState({ radHover: i }); } };
    });
    var lolli = {
      ticks: [20, 40, 60, 80, 100],
      scale: t.levels.map(function (lv, i) { return { n: i + 1, x: (i + 1) * 20, t: lv }; }),
      rows: RN.map(function (n, i) {
        var pi = Math.max(0, Math.min(1, (sp - i * 0.08) / 0.6)), e = 1 - Math.pow(1 - pi, 3), x = (RV[i] / 5) * 100 * e;
        return { name: n, x: x.toFixed(1), lvl: t.levels[RV[i] - 1], cls: 'lrow' + (rh === i ? ' on' : '') + (pi > 0.95 ? ' done' : ''), on: function () { self.setState({ radHover: i }); } };
      })
    };
    var METS = METS_SITE || [
      { v: 120, pre: '+', suf: '', l: P('projetos entregues', 'projects delivered'), c: '#e9558b' },
      { v: 48, pre: '', suf: '', l: P('marcas atendidas', 'brands served'), c: '#2f62cf' },
      { v: 9, pre: '', suf: P(' anos', ' yrs'), l: P('criando e produzindo', 'creating & producing'), c: '#e0a019' },
      { v: 1.2, d: 1, pre: '', suf: 'M', l: P('visualizações em vídeos', 'video views'), c: '#2f8a4a' },
      { v: 350, pre: '+', suf: '', l: P('embalagens produzidas', 'packages produced'), c: '#d9822b' },
      { v: 98, pre: '', suf: '%', l: P('clientes que voltam', 'returning clients'), c: '#6a4fd6' }
    ];
    var mp = s.metP == null ? 1 : s.metP, me = 1 - Math.pow(1 - mp, 3);
    var mets = METS.map(function (x, i) {
      var val = x.v * me, num = x.d ? val.toFixed(x.d) : String(Math.round(val));
      if (L === 'pt') num = num.replace('.', ',');
      return { cls: 'met m' + (i % 3), label: tr(x.l), txt: x.pre + num + tr(x.suf), sub: METS_SITE ? '' : t.ex, pct: (me * 100).toFixed(1), c: x.c };
    });
    var siteSrc = key === 'sites' ? curProjects : [];
    var si = Math.min(s.siteIdx || 0, Math.max(0, siteSrc.length - 1));
    var site = siteSrc[si] || { name: '', tag: '', desk: '', mob: '', url: '', live: false, notLive: true, liveUrl: '' };
    site.showVid = !!site.vid && !site.live; site.showImg = !site.vid && !site.live;
    var siteList = siteSrc.map(function (p, i) { return { name: p.name, tag: p.tag, desk: p.desk, cls: 'pitem sitem' + (i === si ? ' on' : ''), cur: i === si ? 'true' : 'false', pick: function () { self.setState({ siteIdx: i }); if (!self.speak('trocar_modelo')) self.say(P('Olha esse site!', 'Check out this site!'), 'o'); } }; });
    var vcat = CATS[6];
    var vids = vcat.projects.filter(function (p) { return key !== 'videos' || s.sub === 0 || p[1] === s.sub; });
    var vi = Math.min(s.vidIdx, Math.max(0, vids.length - 1));
    var vclip = function (p, i) { return p && p[3] && p[3].video && p[3].video.src ? { src: p[3].video.src, poster: p[3].video.poster || '' } : CLIPS[i % 3]; };
    var videoList = vids.map(function (p, i) {
      return { name: tr(p[0]), tag: tr(vcat.filters[p[1]]), cls: 'pitem' + (i === vi ? ' on' : ''), cur: i === vi ? 'true' : 'false',
        dot: 'vdot' + (i === vi ? ' on' : ''),
        pick: function () { if (self.dragged()) return; self.setState({ vidIdx: i, vplaying: false }); if (!self.speak('video_next')) self.say(P(M.look.pt + p[0].pt + '!', M.look.en + p[0].en + '!'), 'o'); } };
    });
    videoList = videoList.map(function (x, i) { x.poster = vids[i] && vids[i][2] === 'ph' ? '/static/media/fbd0ea194810a841113ed3610f4cb269.jpg' : vclip(vids[i], i).poster; return x; });
    var vflow = vids.map(function (p, i) {
      var k = i - vi, a = Math.abs(k);
      return { cls: 'vfcard' + (k !== 0 ? ' side' : ''), name: tr(p[0]), tag: tr(vcat.filters[p[1]]), src: vclip(p, i).src, poster: vclip(p, i).poster, isCur: k === 0, notCur: k !== 0,
        tx: (k * (mobile ? 62 : 74) + (s.vfDx || 0) / (mobile ? 1.86 : 2.2)).toFixed(1), ry: Math.max(-40, Math.min(40, -k * 26)), sc: Math.max(0.5, 1 - a * 0.17).toFixed(2), z: 20 - a, op: a > 2 ? 0 : (1 - a * 0.12).toFixed(2),
        pick: function () { if (self.vfMoved) return; if (k !== 0) self.setState({ vidIdx: i, vplaying: false }); } };
    });
    var vid = vids[vi] ? { name: tr(vids[vi][0]), tag: tr(vcat.filters[vids[vi][1]]), src: vclip(vids[vi], vi).src, poster: vclip(vids[vi], vi).poster, midCls: 'mid' + (s.vplaying ? ' hide' : '') } : { name: '—', tag: '', src: '', poster: '', midCls: 'mid' };

    var vh0 = 900; try { vh0 = window.innerHeight; } catch (e) {}
    var TR = (SITE.tracks && SITE.tracks.length) ? TRACKS.length : mobile ? 5 : Math.max(3, Math.min(TRACKS.length, vh0 < 780 ? 4 : vh0 < 900 ? 5 : 6)), tracks = [];
    for (var ti = 0; ti < TR; ti++) {
      (function (i) {
        tracks.push({ n: '0' + (i + 1), cover: TRACKS[i].c, name: TRACKS[i].name, artist: TRACKS[i].artist != null ? TRACKS[i].artist : t.artist, dur: (TRACKS[i].src && s.durs[i]) ? mmss(s.durs[i]) : TRACKS[i].d, cls: 'cdrow' + (s.plIdx === i ? ' on' : ''), cur: s.plIdx === i ? 'true' : 'false',
          pick: function () { self.playTrack(i); } });
      })(ti);
    }

    var favs = t.favs.map(function (f, fi) {
      var items = [];
      ((SITE.favs && SITE.favs[fi]) || []).forEach(function (x, i) { if (x && x.img) items.push({ name: x.name || '', img: x.img, bg: COVER_BG[(i + fi) % COVER_BG.length], rot: [-2, 1.5, -1, 2.5, -2.5, 1][i % 6], pin: PINS[(i + fi) % PINS.length] }); });
      return { title: f[0], ar: FAV_AR[fi], items: items };
    }).filter(function (g) { return g.items.length; });

    var full = tr(s.msg);
    var typing = s.typed < full.length;
    var pixKey;
    if (s.pose !== 'talk' && (typing || s.posePost)) pixKey = s.pose;
    else if (typing) pixKey = TALK[(s.typed >> 1) % TALK.length];
    else if (s.blink) pixKey = 'olhos';
    else pixKey = (s.mood === 'celebrando' || s.mood === 'feliz') ? 'sorriso' : 'neutro';

    var away = key === 'sobre' && win && win.phase !== 'closing';
    var face = MOODFX[s.mood] ? MOODFX[s.mood][0] : s.mood, fxk = MOODFX[s.mood] ? MOODFX[s.mood][1] : '';
    var stk = MOOD_ORDER.map(function (k) { return { src: STICKERS[k], op: k === face ? 1 : 0, cls: k === face ? ((s.moodN || 0) % 2 ? 'pa' : 'pb') : '' }; });
    var fxCls = 'fx' + (fxk ? ' on fx-' + fxk + ((s.moodN || 0) % 2 ? ' fa' : ' fb') : '');
    var stars = STARS.map(function (a, i) { return { x: a[0], y: a[1], w: a[2], c: a[3], dl: (i * 0.4).toFixed(1), cls: 'st' + (i > 5 ? ' desk-only' : '') }; });
    var formMsg = { showForm: !(s.form && s.form.ok && s.form.shown), done: !!(s.form && s.form.ok && s.form.shown), cls: 'letter' + (s.form && s.form.ok ? ' sent' : ''), msg: s.form && !s.form.ok ? t[s.form.k] : '', color: '#a3172f' };

    var navc = function (k) { return 'navlink' + (key === k ? ' on' : ''); };
    return {
      t: t,
      bandTop: (function () { try { var W = window.innerWidth, H = Math.max(680, window.innerHeight); return Math.round(Math.min(W / 1180, H / 736) * 736 * 0.6); } catch (e) { return 440; } })(),
      stS: (function () { try { var W = window.innerWidth, H = Math.max(680, window.innerHeight); return Math.min(W / 1180, H / 736).toFixed(4); } catch (e) { return 1; } })(),
      dimCls: 'dim' + (win && win.phase !== 'closing' ? ' on' : ''),
      sceneCls: 'scene lang-' + L, isPt: L === 'pt', isEn: L === 'en',
      catGap: (s.catGap || 14) + 'px', catW: s.catW ? s.catW + 'px' : 'auto', catL: s.catL != null ? s.catL + 'px' : '1.5%',
      deck: deck, deckCur: deckCur,
      deckNext: function () { var cur = self.state.deckIdx % DN; self.setState({ deckIdx: self.state.deckIdx + 1, tossed: cur }); setTimeout(function () { self.setState({ tossed: -1 }); }, 720); },
      deckOpen: function (e) { var c = deckSrc[self.state.deckIdx % DN]; self.openWin(c.key, document.getElementById('cat-' + c.key)); },
      vflowCls: 'vflow' + (s.vfDx ? ' dragging' : ''),
      vfDown: function (e) { if (e.target.closest && e.target.closest('button')) return; self.vfx = e.clientX; self.vfMoved = false; try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {} },
      vfMove: function (e) { if (self.vfx == null) return; var dx = e.clientX - self.vfx; if (Math.abs(dx) > 6) self.vfMoved = true; self.setState({ vfDx: dx }); },
      vfUp: function (e) { if (self.vfx == null) return; var dx = e.clientX - self.vfx; self.vfx = null; var n = vids.length; if (Math.abs(dx) > 40) { self.speak('video_next'); } if (Math.abs(dx) > 40) self.setState({ vfDx: 0, vidIdx: (vi + (dx < 0 ? 1 : -1) + n) % n, vplaying: false }); else self.setState({ vfDx: 0 }); setTimeout(function () { self.vfMoved = false; }, 60); },
      vflow: vflow,
      vToggle: function () { var v = document.getElementById('vplayer'); if (!v) return; if (v.paused) { self.pauseOthers(v); var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); self.speak('video_play'); } else v.pause(); },
      vOnPlay: function () { self.setState({ vplaying: true }); },
      vOnPause: function () { self.setState({ vplaying: false }); },
      plTime: function (e) { var a = e.currentTarget; var d = Object.assign({}, self.state.durs); if (a.duration && !d[self.state.plIdx]) d[self.state.plIdx] = a.duration; self.setState({ plTime: a.currentTime, plDur: a.duration || 0, durs: d }); },
      plOnPlay: function () { self.setState({ plPlaying: true }); },
      plOnPause: function () { self.setState({ plPlaying: false }); },
      nav: { home: 'navlink' + (!key ? ' on' : ''), sobre: navc('sobre'), projetos: navc('projetos'), skills: navc('skills'), videos: navc('videos'), playlist: navc('playlist'), contato: navc('contato'), metricas: navc('metricas') },
      toggleLang: function () { self.toggleLang(); },
      goHome: function () { if (self.state.win) self.closeWin(); else if (!self.speak('home')) { self.say(M.home, 'pisca'); self.setMood('piscando', 3600); } },
      openSobre: function (e) { self.openWin('sobre', e.currentTarget); },
      openProjetos: function (e) { self.openWin('projetos', e.currentTarget); },
      openSkills: function (e) { self.openWin('skills', e.currentTarget); },
      openVideos: function (e) { self.openWin('videos', e.currentTarget); },
      openPlaylist: function (e) { self.openWin('playlist', e.currentTarget); },
      openContato: function (e) { self.openWin('contato', e.currentTarget); },
      openMetricas: function (e) { self.openWin('metricas', e.currentTarget); },
      metReplay: function () { self.startCount(); },
      radarOff: function () { self.setState({ radHover: -1 }); },
      bubbles: t.skills.map(function (x, i) { var pal = [['#e9558b', '#fff'], ['#ffe14d', '#1d1a17'], ['#2f62cf', '#fff'], ['#3f9a55', '#fff'], ['#fbf8f1', '#1d1a17'], ['#7b3fe0', '#fff']][i % 6]; return { t: x, bg: pal[0], fg: pal[1], d1: (0.25 + i * 0.09).toFixed(2), d2: (0.9 + i * 0.09).toFixed(2), dur: (2.4 + (i % 4) * 0.5).toFixed(1), r: [-4, 3, -2, 5, -5, 2][i % 6] }; }),
      persDone: persDone, persTabDone: !s.persTab, persTabVid: !!s.persTab, persTabs: [t.popDone, t.popVid].map(function (lb, i) { return { label: lb, cls: 'chip' + ((!!s.persTab) === (i === 1) ? ' on' : ''), pick: function () { self.setState({ persTab: i }); } }; }),
      caseT: (function () { var d = curProjects[0] && curProjects[0].data, c = d && d.case; var g = function (k, f) { return c && c[k] && tr(c[k]) ? tr(c[k]) : (d ? '' : t[f]); }; var o = { concept: g('concept', 'gConceito'), challenge: g('challenge', 'gDesafio'), process: g('process', 'gProcesso'), result: g('result', 'gResultado') }; o.hc = !!o.concept; o.hd = !!o.challenge; o.hp = !!o.process; o.hr = !!o.result; return o; })(),
      aboutPhoto: SITE.about_photo || '/static/media/ecd9f3220c8da80258847023ff1b25e2.jpg',
      links: { email: (SITE.links && SITE.links.email) ? 'mailto:' + SITE.links.email : '#', whatsapp: (SITE.links && SITE.links.whatsapp) ? 'https://wa.me/' + String(SITE.links.whatsapp).replace(/\D/g, '') : '#', instagram: (SITE.links && SITE.links.instagram) ? 'https://instagram.com/' + String(SITE.links.instagram).replace(/^@/, '') : '#', linkedin: (SITE.links && SITE.links.linkedin) ? SITE.links.linkedin : '#' },
      glbSrc: key === 'embalagens' ? (ecfg.glb || '') : (key === 'personalizados' && PERS_SITE && PERS_SITE[pmode] && PERS_SITE[pmode][ai] ? (PERS_SITE[pmode][ai].glb || '') : ''),
      igLabel: igHandle || ('@victortrindade (' + t.ex + ')'),
      grList: grList, grDone: grDone, grTabDone: !s.grTab, grTabFin: !!s.grTab, grTabs: [t.popDone, t.popFin].map(function (lb, i) { return { label: lb, cls: 'chip' + ((!!s.grTab) === (i === 1) ? ' on' : ''), pick: function () { self.setState({ grTab: i }); } }; }), cup: cup, embDone: embDone, embDoneEmpty: embDone.length === 0, embTabDone: embTabDone, embTabVid: embTabVid, embTabs: [t.popDone, t.popVid].map(function (lb, i) { return { label: lb, cls: 'chip' + ((!!s.embTab) === (i === 1) ? ' on' : ''), pick: function () { self.setState({ embTab: i }); } }; }), mug: mug, lolli: lolli, gauges: gauges, starRows: starRows, neon: neon, mets: mets, gal: gal, pr: pr,
      stars: stars, d: d, fxCls: fxCls,
      togCls: 'tog' + (s.tog ? ' on' : ''), togOn: s.tog ? 'true' : 'false',
      dragMove: function (e) { self.dragMoveH(e); },
      dragUp: function (e) { self.dragUpH(e); },
      tidy: function () { self.tidyUp(); },
      cats: cats,
      catsCls: 'cats' + (s.catDrag ? ' grabbing' : ''),
      catScroll: function (e) { self.catScrollH(e); },
      catDown: function (e) { self.catDownH(e); },
      catMove: function (e) { self.catMoveH(e); },
      catUp: function (e) { self.catUpH(e); },
      catWheel: function (e) { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) e.currentTarget.scrollLeft += e.deltaY; },
      hsDown: function (e) { self.hsDownH(e); },
      hsMove: function (e) { self.hsMoveH(e); },
      hsUp: function (e) { self.hsUpH(e); },
      w: w,
      close: function () { self.closeWin(); },
      winKey: function (e) { if (e.key === 'Escape') { e.stopPropagation(); self.closeWin(); } },
      filters: filters,
      v: (function (vv) { if (EMPTYC) { Object.keys(vv).forEach(function (k) { vv[k] = false; }); vv.emptyCat = true; } return vv; })({
        emb: false, embD: embD, sites: key === 'sites' && mobile, sitesD: sitesD, videos: key === 'videos' && mobile, videosD: vD, baloes: key === 'baloes',
        plM: key === 'playlist' && mobile, generic: !!cat && ['sites', 'videos', 'grafica'].indexOf(key) < 0 && !persD && !galD && key !== 'grafica', grafica: key === 'grafica', grafM: key === 'grafica' && mobile, persD: persD, persM: false, genVid: !!cat && mobile && ['sites', 'videos', 'grafica'].indexOf(key) < 0 && !!(cat._video || !cat._data), galD: galD, skillsD: skD, metricas: key === 'metricas',
        projetos: key === 'projetos', skills: key === 'skills' && mobile, sobre: key === 'sobre', contato: key === 'contato', playlist: key === 'playlist'
      }),
      cur: cat ? { key: cat.key, title: tr(cat.title), intro: tr(cat.intro), video: tr(cat.video), icon: cat.icon } : { key: '', title: '', intro: '', video: '', icon: '' },
      curProjects: curProjects, media: media,
      emb: { name: s.embCfg != null && EMB_DONE[s.embCfg] ? tr(EMB_DONE[s.embCfg][0]) : (L === 'en' ? 'Example — ' : 'Exemplo — ') + tr(embCat.projects[s.embIdx][0]) },
      embProjects: embProjects, tabs: tabs, tab: tab,
      box: {
        rx: s.rx, ry: s.ry, zoom: s.zoom, lid: s.lid ? 212 : 90,
        cls: 'p3' + (s.rot ? '' : ' ease'), stageCls: 'embstage' + (s.rot ? ' grabbing' : ''),
        hasLid: etype !== 'p700' && etype !== 'bag', lidLabel: etype !== 'box' ? (s.lid ? t.cupLidOn : t.cupLidOff) : (s.lid ? t.lidClose : t.lidOpen),
        down: function (e) { self.boxDown(e); }, move: function (e) { self.boxMove(e); }, up: function () { self.boxUp(); },
        toggle: function () { var o = !self.state.lid; self.setState({ lid: o }); if (self.speak(o ? 'tampa_abrir' : 'tampa_fechar')) return; self.say(o ? M.lidOpen : M.lidClose, o ? 'love' : 'sorriso'); self.setMood(o ? 'surpreso' : 'feliz', 3600); },
        zin: function () { if (!self.zoomTalked || Date.now() - self.zoomTalked > 12000) { self.zoomTalked = Date.now(); self.speak('zoom'); } self.setState({ zoom: Math.min(1.5, +(self.state.zoom + 0.15).toFixed(2)) }); },
        zout: function () { if (!self.zoomTalked || Date.now() - self.zoomTalked > 12000) { self.zoomTalked = Date.now(); self.speak('zoom'); } self.setState({ zoom: Math.max(0.7, +(self.state.zoom - 0.15).toFixed(2)) }); },
        reset: function () { self.setState({ rx: -14, ry: 30, zoom: 1 }); self.say(M.resetv, 'joinha'); }
      },
      stop: function (e) { e.stopPropagation(); },
      noVideo: function () { self.say(M.noVideo, 'pensa'); self.setMood('pensando', 3600); },
      allProjects: allProjects,
      videoList: videoList, vid: vid, s1: s1, s2: s2, pop: pop,
      hide1: function () { self.setState({ sideOff: Object.assign({}, self.state.sideOff, { 1: true }) }); },
      hide2: function () { self.setState({ sideOff: Object.assign({}, self.state.sideOff, { 2: true }) }); },
      reopenSides: function () { self.setState({ sideOff: {} }); },
      site: site, siteList: siteList,
      vidPrev: function () { self.speak('video_next'); self.setState({ vidIdx: (vi - 1 + vids.length) % Math.max(1, vids.length), vplaying: false }); },
      vidNext: function () { self.speak('video_next'); self.setState({ vidIdx: (vi + 1) % Math.max(1, vids.length), vplaying: false }); },
      tracks: tracks,
      pl: { spTrack: !!(TRACKS[s.plIdx] && TRACKS[s.plIdx].sp && !TRACKS[s.plIdx].src), noSpTrack: !(TRACKS[s.plIdx] && TRACKS[s.plIdx].sp && !TRACKS[s.plIdx].src), spTrackSrc: TRACKS[s.plIdx] && TRACKS[s.plIdx].sp ? 'https://open.spotify.com/embed/track/' + TRACKS[s.plIdx].sp + '?utm_source=generator' : '', ctrlCls: 'cdctrl' + (TRACKS[s.plIdx] && TRACKS[s.plIdx].sp && !TRACKS[s.plIdx].src ? ' sp' : ''), showTag: !SP_EMBED && !(SITE.tracks && SITE.tracks.length), embed: !!SP_EMBED, noEmbed: !SP_EMBED, embedSrc: SP_EMBED, spUrl: SPOTIFY_PLAYLIST, cur: TRACKS[s.plIdx].name.toUpperCase() + ((TRACKS[s.plIdx].artist != null ? TRACKS[s.plIdx].artist : t.artist) ? ' — ' + (TRACKS[s.plIdx].artist != null ? TRACKS[s.plIdx].artist : t.artist).toUpperCase() : ''), src: TRACKS[s.plIdx].src, time: mmss(s.plTime), pct: s.plDur ? Math.min(100, s.plTime / s.plDur * 100).toFixed(1) : 0,
        spinCls: 'cdimg' + (s.plPlaying ? ' on' : ''), label: '0' + (s.plIdx + 1) + '. ' + TRACKS[s.plIdx].name, cover: plCover(s.plIdx), discCls: 'disc2' + (s.plPlaying || s.plTime > 0 ? ' out' : ''), durTxt: s.plDur ? mmss(s.plDur) : '--:--', cdCls: 'cd' + (s.plPlaying ? ' on' : ''),
        dash: ((s.plDur ? s.plTime / s.plDur : 0) * 1583.4).toFixed(1) + ' 1583.4', deg: ((s.plDur ? s.plTime / s.plDur : 0) * 360).toFixed(1),
        playing: s.plPlaying, paused: !s.plPlaying, playLabel: s.plPlaying ? 'Pause' : 'Play', vizCls: 'viz' + (s.plPlaying ? ' on' : '') },
      plPrev: function () { self.speak('musica_troca'); self.playTrack((self.state.plIdx + TR - 1) % TR); },
      plNext: function () { self.speak('musica_troca'); self.playTrack((self.state.plIdx + 1) % TR); },
      spClick: function () { self.speak('spotify'); },
      plPlay: function () { var a = document.getElementById('aud'); var tk = TRACKS[s.plIdx]; if (tk && tk.sp && !tk.src) { if (SPC.ctrl && SPC.host && document.body.contains(SPC.host)) SPC.ctrl.togglePlay(); else { self.spWant = true; self.spSync(); } return; } if (tk && !tk.src && tk.url) { window.open(tk.url, '_blank', 'noopener'); return; } if (!a) return; if (a.paused) { self.pauseOthers(a); var pr = a.play(); if (pr && pr.catch) pr.catch(function () {}); if (!self.speak('musica_play')) self.say(M.nowPlaying, 'love'); } else a.pause(); },
      favs: favs, favsAny: favs.length > 0,
      homeVid: SITE.home_video && SITE.home_video.src ? { src: SITE.home_video.src, poster: SITE.home_video.poster || '' } : { src: '/static/media/2155a5d02530347dbc02e2c8a8581dc0.mp4', poster: '/static/media/354da7a1f9d7a0058f43b7020f0ec827.jpg' },
      tools: TOOLS.map(function (x, i) { return { name: x[0], ab: x[1], color: x[2], lvl: x[3] || t.lvl, dl: (i * 0.3).toFixed(1) }; }),
      skills: t.skills,
      submit: function (e) { self.submitForm(e); },
      formReset: function () { self.setState({ form: null }); },
      form: formMsg,
      pixSrc: PX[pixKey] || PX.neutro,
      pixCls: 'pix' + (s.hop ? ' hop' : ''),
      typed: full.slice(0, s.typed), typedRest: full.slice(s.typed),
      typing: typing,
      msg: full,
      stk: stk,
      stickerTab: away ? '-1' : '0',
      stickerCls: 'sticker' + (away ? ' away' : ''),
      stickerClick: function () {
        if (self.speak('sticker')) return;
        var i = CYCLE.indexOf(self.state.mood); var next = CYCLE[(i + 1) % CYCLE.length];
        self.lastMood = 0;
        self.setMood(next, 4200);
        var l = M.sticker[next];
        self.say(l[0], l[1]);
      },
      stickerHover: function () { if (self.state.mood === 'neutro') self.setMood('piscando', 3600); }
    };
  }
}

document.addEventListener('DOMContentLoaded', function () {
  window.__app = dcMount(Component, document.getElementById('app'), document.getElementById('dc-template'));
});
