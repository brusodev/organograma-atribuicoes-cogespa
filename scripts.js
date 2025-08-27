document.addEventListener('DOMContentLoaded', function () {
  // Dados da estrutura hierárquica com siglas oficiais
  const data = {
    name: 'Coordenadoria Geral de Suporte Administrativo (COGESPA)',
    id: 'main',
    children: [
      {
        name: 'Coordenadoria de Execução de Serviço (COEX)',
        id: 'execucao',
        children: [
          {
            name: 'Departamento de Gestão Documental (DPGDOC)',
            id: 'gestao',
          },
          {
            name: 'Divisão de Patrimônio (DPAT)',
            id: 'patrimonio',
          },
          {
            name: 'Divisão de Transportes (DTRAN)',
            id: 'transportes',
          },
          {
            name: 'Divisão de Zeladoria (DZEL)',
            id: 'zeladoria',
          },
        ],
      },
      {
        name: 'Coordenadoria de Programação de Serviço (COPROG)',
        id: 'programacao',
      },
    ],
  };

  // ====== INFORMAÇÕES DETALHADAS COMPLETAS ======
  const competencias = {
    main: {
      title: 'Coordenadoria Geral de Suporte Administrativo',
      summary: [
        'Unidade responsável pela coordenação geral de todos os serviços de suporte administrativo da Secretaria de Educação',
        'Supervisiona as atividades das coordenadorias subordinadas',
        'Garante a integração e eficiência dos serviços administrativos',
        'Promove a otimização de recursos e processos',
      ],
      articles: {
        available: true,
        title: 'Coordenadoria Geral de Suporte Administrativo – COGESPA',
        content: `
          <h4><strong>Estrutura Organizacional</strong></h4>
          <div class="article-item">Coordena as atividades da Coordenadoria de Programação de Serviços (COPROG)</div>
          <div class="article-item">Supervisiona a Coordenadoria de Execução de Serviços (COEX)</div>
          <div class="article-item">Gerencia o Departamento de Gestão Documental (DPGDOC)</div>
          <div class="article-item">Administra as Divisões de Patrimônio, Transportes e Zeladoria</div>

          <h4><strong>Competências Gerais</strong></h4>
          <div class="article-item">Estabelecer diretrizes para o funcionamento dos órgãos centrais da Pasta</div>
          <div class="article-item">Coordenar a integração entre as unidades subordinadas</div>
          <div class="article-item">Promover a eficiência dos serviços de apoio administrativo</div>
          <div class="article-item">Garantir o cumprimento das normas e regulamentos da Secretaria</div>
          `,
      },
      article: 'Conforme estrutura organizacional da SEDUC',
    },
    programacao: {
      title: 'Coordenadoria de Programação de Serviço',
      summary: [
        'Artigo 118 - A Coordenadoria de Programação de Serviço da tem as seguintes competências:',

        'I - elaborar planos, cronogramas e agendas para a contratação e execução de serviços de gestão documental, transporte administrativo, zeladoria e patrimônio, entre outros necessários ao funcionamento dos órgãos centrais da Pasta, garantindo a organização e o cumprimento de prazos',

        'II - alocar e gerenciar recursos humanos, materiais e financeiros de forma eficiente, otimizando o uso de cada um',

        'III - mapear, analisar e otimizar atividades de administração predial, buscando a eficiência e a redução de custos',

        'IV - acompanhar a execução dos planos e programas, avaliando resultados e propondo melhorias, além de elaborar relatórios gerenciais',

        'V - gerir os serviços de limpeza das Unidades Regionais de Ensino.',
      ],
      articles: {
        available: true,
        title: 'Coordenadoria de Programação de Serviços – COPROG',
        content: `
          <p><strong>A COPROG possui as seguintes atribuições:</strong></p>

          <div class="article-item">Fornecer orientações jurídicas ao Departamento e às Divisões, elaborar justificativas e descrever objetos ou serviços para novas contratações, bem como realizar pesquisas de itens de materiais de consumo ou permanentes para os Prédios Administrativos;</div>

          <div class="article-item">Acompanhar e fiscalizar a legislação, sindicatos, sanções e multas; elaborar termos de referência, notificações e ofícios; analisar a viabilidade de novas contratações; e fornecer orientações para o Sistema de Cadastro de Serviços Terceirizados da Corregedoria, incluindo cadastro de contratos contínuos a partir da assinatura e, mensalmente, informar pagamentos e reajustes;</div>

          <h4><strong>Gestão da Vida Funcional dos Servidores</strong></h4>

          <div class="article-item">Gerenciar procedimentos para nomeação de novos servidores, orientação e conferência de documentos, registro de alocação em caso de mudança de cargo e registro de servidores novos no sistema Secretaria Escolar Digital (SED);</div>

          <div class="article-item">Controlar frequência de servidores, folhas de ponto, assinaturas de entrada e saída, férias, faltas justificadas e injustificadas, licenças médicas, licença prêmio, afastamentos e demais ocorrências funcionais;</div>

          <div class="article-item">Atualizar mensalmente férias no sistema SED;</div>

          <div class="article-item">Encaminhar atestados médicos e requerimentos de licença saúde/auxílio-doença ao Recursos Humanos;</div>

          <div class="article-item">Elaborar memorandos de substituição e gratificação;</div>

          <div class="article-item">Revisar mensalmente as folhas de frequência e enviá-las ao RH;</div>

          <div class="article-item">Realizar reuniões semanais com diretores para repassar orientações relativas aos servidores;</div>

          <div class="article-item">Acompanhar publicações no Diário Oficial do Estado (D.O.E.) sobre decretos, licenças, afastamentos e pedidos de aposentadoria, registrando nas folhas de frequência.</div>

          <h4><strong>Contato com Órgãos Fiscalizadores</strong></h4>

          <div class="article-item"><strong>Sistema de Consolidação da Informação ao Tribunal de Contas (SCT):</strong> Alimentação mensal com informações de licitações homologadas e contratos vigentes;</div>

          <div class="article-item"><strong>Sistema de Auditoria Eletrônica do Tribunal de Contas (AUDESP):</strong> Alimentação mensal com informações de licitações homologadas e contratos vigentes;</div>

          <div class="article-item"><strong>Sistema de Contas Estaduais do Tribunal de Contas (SISCOE):</strong> Atualização anual dos dados cadastrais das autoridades da pasta e envio do relatório de atividades desenvolvido pelo Gabinete do Secretário e assessorias no ano anterior.</div>

          <h4><strong>Planejamento Financeiro e Gerenciamento Orçamentário</strong></h4>

          <div class="article-item">Gerenciar recursos financeiros da COGESPA e acompanhar os recursos do Gabinete do Secretário;</div>

          <div class="article-item">Realizar reuniões periódicas com a área financeira, elaborar planilhas financeiras, comunicados, analisar disponibilidade orçamentária para novas contratações, cancelamentos e remanejamentos;</div>

          <div class="article-item">Suportar e analisar pagamentos de contratos contínuos junto aos centros de custo.</div>

          <h4><strong>Publicações no Diário Oficial</strong></h4>

          <div class="article-item">Receber atos a serem publicados via sistema Sem Papel ou Outlook, preparar laudas e enviar à PRODESP para publicação;</div>

          <div class="article-item">Realizar conferência no Diário Oficial no dia seguinte, inserir cópias nos processos e enviar à área demandante.</div>

          <h4><strong>Apuração Preliminar</strong></h4>

          <div class="article-item">Participar de apurações preliminares para identificar ou confirmar a ocorrência de ilícito administrativo, incluindo análise de processos, oitivas com servidores envolvidos e reuniões com demais participantes.</div>

          <h4><strong>Gestão de Contratos Administrativos (37 contratos)</strong></h4>

          <div class="article-item"><strong>Publicidade Governamental:</strong> Gerenciamento processual, reservas, empenhos, pagamentos e cancelamentos de saldo;</div>

          <div class="article-item"><strong>Foto, Vídeo e Filmagem:</strong> Fiscalização, administração de pagamentos, aditamentos contratuais, reajustes, ordens de serviço e acompanhamento da execução;</div>

          <div class="article-item"><strong>Certificação Digital:</strong> Autuação de processos, pesquisa de mercado, solicitação de autorização junto ao COETIC, reserva, empenho e pagamentos de notas fiscais;</div>

          <div class="article-item"><strong>Passagens Aéreas:</strong> Pesquisa de voos nacionais e internacionais, emissão de bilhetes, seguro viagem, controle de orçamento, cancelamentos, pagamento e informação ao site da transparência;</div>

          <div class="article-item"><strong>Seguro Veicular:</strong> Acompanhamento de franquia, solicitação de guincho, pagamento de franquias, reservas, empenhos e pagamentos;</div>

          <div class="article-item"><strong>Manutenção de Serviços:</strong> Reajustes contratuais, execução de aditamentos, verificação da convenção coletiva, pagamentos de salários e benefícios; controle de pagamentos mensais, reservas, empenhos e cancelamentos de saldo.</div>

          <p>Os serviços gerenciados incluem manutenção predial, recepção, vigilância patrimonial, bombeiros, manobristas, locação de veículos com e sem condutor, placas de inauguração, controle de pragas, purificadores, abastecimento de combustíveis e manutenção de veículos oficiais.</p>
          `,
      },
      article: 'Artigo 118 da RESOLUÇÃO SEDUC N° 108, DE 28 DE JULHO DE 2025',
      link: 'https://doe.sp.gov.br/executivo/secretaria-da-educacao/resolucao-seduc-n-108-de-28-de-julho-de-2025-20250728112312201228596',
    },

    execucao: {
      title: 'Coordenadoria de Execução de Serviço',
      summary: [
        ' Artigo 119 - A Coordenadoria de Execução de Serviço é responsável pelo Departamento Gestão Documental e  Divisões de Transporte, Patrimônio e Zeladoria e tendo as seguintes competências:',

        'I - coordenar e supervisionar as atividades do Departamento de Gestão Documental, Divisões de Transporte, Patrimônio e Zeladoria, garantindo a integração e a eficiência dos serviços de apoio administrativo.',

        'II - planejar, executar e controlar os processos operacionais relacionados à gestão documental, transporte, patrimônio e zeladoria.',

        'III - implementar e monitorar indicadores de desempenho para avaliar a qualidade e a eficiência dos serviços prestados.',

        'IV - planejar e executar a manutenção preventiva e corretiva de equipamentos, veículos e instalações prediais, garantindo a conservação do patrimônio e a segurança dos ambientes de trabalho.',

        'V - zelar pela organização, controle e segurança dos documentos e bens patrimoniais, implementando procedimentos de gestão documental e patrimonial.',

        'VI - assegurar o cumprimento das normas e regulamentos relacionados à gestão documental, transporte, patrimônio e zeladoria.',
      ],
      articles: {
        available: true,
        title: 'Coordenadoria de Execução de Serviços – COEX',
        content: `
        <p>A COEX, criada na reestruturação de 2025, tem como função prestar suporte técnico especializado aos departamentos e divisões da Secretaria, assegurando condições adequadas para a execução das atividades administrativas e operacionais.</p>

        <h4><strong>1. Suporte Técnico e Planejamento</strong></h4>

        <div class="article-item">Apoiar a elaboração, acompanhamento e atualização do planejamento estratégico, tático e operacional, abrangendo ações de curto, médio e longo prazo;</div>

        <div class="article-item">Realizar reuniões periódicas de alinhamento com cada unidade organizacional para definição de objetivos, indicadores de desempenho, prazos e responsabilidades;</div>

        <div class="article-item">Integrar as áreas, otimizar recursos e monitorar resultados, garantindo eficiência e qualidade na entrega dos serviços;</div>

        <div class="article-item">Analisar demandas e definir prioridades;</div>

        <div class="article-item">Gerir processos e fluxos de trabalho, reduzindo retrabalhos e gargalos;</div>

        <div class="article-item">Oferecer apoio metodológico na implementação de projetos;</div>

        <div class="article-item">Monitorar metas e elaborar relatórios de desempenho.</div>

        <h4><strong>2. Gestão de Diárias</strong></h4>

        <div class="article-item">Analisar solicitações de diárias no Sistema Secretaria Escolar Digital (SED), verificando anexos, viagens realizadas e utilização de veículos oficiais;</div>

        <div class="article-item">Montar processos completos para pagamento, incluindo recibos, publicações, notas de empenho, ordens bancárias e assinaturas de servidores, chefias e ordenadores de despesas;</div>

        <div class="article-item">Verificar glosas e autorizações, com envio ao Diário Oficial conforme Decreto nº 48.292/2003, arts. 8º, §2º e §3º.</div>

        <h4><strong>3. Gestão de Eventos</strong></h4>

        <div class="article-item">Planejar, organizar e acompanhar eventos institucionais, após autorização da Chefia de Gabinete;</div>

        <div class="article-item">Coordenar reuniões com áreas demandantes e empresas responsáveis pela execução;</div>

        <div class="article-item">Solicitar apoio de órgãos externos, como CET, SABESP e infraestrutura;</div>

        <div class="article-item">Gerir hospedagem, alimentação, transporte, execução, controle de itens, relatórios e pagamentos;</div>

        <div class="article-item">Mobilizar servidores de todos os centros do Departamento de Administração para apoio logístico na execução.</div>
        `,
      },
      article: 'Artigo 119',
      link: 'https://doe.sp.gov.br/executivo/secretaria-da-educacao/resolucao-seduc-n-108-de-28-de-julho-de-2025-20250728112312201228596',
    },
    gestao: {
      title: 'Departamento de Gestão Documental',
      summary: [
        'Artigo 120 - O Departamento de Gestão Documental tem as seguintes competências:',

        'I - apoiar o planejamento, normatização e execução dos serviços de gestão documental;',

        'II - prestar serviços de classificação, organização e conservação de arquivos, fornecendo certidões e cópias de documentos arquivados nas unidades centrais da Secretaria;',

        'III - gerenciar os sistemas de controle processual;',

        'IV - receber, protocolar, classificar, expedir e controlar a distribuição de processos;',

        'V - informar e atualizar a localização de processos em trâmite;',

        'VI - providenciar, mediante autorização específica, vista de processos aos interessados;',

        'VII - organizar e viabilizar serviços de malotes, distribuição e entrega de correspondência da   Rede.',
      ],
      articles: {
        available: true,
        title: 'Departamento de Gestão Documental – DPGDOC',
        content: `
          <p>O DPGDOC é responsável pela administração das atividades dos grupos subordinados, garantindo a correta gestão documental da Secretaria.</p>

          <h4><strong>1. Sistemas de Gestão Documental</strong></h4>

          <div class="article-item"><strong>NCPB:</strong> Sistema iniciado na década de 1990, encerrado para cadastro em 2018, mas ainda vigente para consulta de processos arquivados;</div>

          <div class="article-item"><strong>SPDOC:</strong> Finalizado para cadastro de documentos vigentes em 2019. Processos cadastrados no NCPB devem ser recadastrados para tramitação e histórico completo;</div>

          <div class="article-item"><strong>SPSP (São Paulo Sem Papel):</strong> Sistema finalizado em 2023, utilizado para consulta;</div>

          <div class="article-item"><strong>SEI (Sistema Eletrônico de Informações):</strong> Sistema vigente, utilizado para tramitação e gestão de processos eletrônicos.</div>

          <h4><strong>2. Suporte e Orientação</strong></h4>

          <div class="article-item">Orientação às 91 Diretorias de Ensino e órgãos centrais quanto à aplicação da gestão documental;</div>

          <div class="article-item">Atendimento às normas e procedimentos de protocolo, conforme o Manual de Normas e Procedimentos de Protocolo e a Tabela de Temporalidade de Documentos;</div>

          <div class="article-item">Interlocução com o Serviço de Informação ao Cidadão (SIC) do Departamento de Administração;</div>

          <div class="article-item">Execução das atividades da <strong>Comissão de Avaliação de Documentos e Acesso (CADA)</strong>, incluindo análise de documentos passíveis de eliminação, planejamento de visitas para verificação de prazos e montagem de editais;</div>

          <div class="article-item">Orientação por e-mail, telefone, WhatsApp e visitas presenciais;</div>

          <div class="article-item">Fiscalização de processos de contratação de serviços de correios, motofrete e serviços gráficos, atendendo demandas internas e externas da Secretaria.</div>

          <h4><strong>Grupo de Trabalho Protocolo e Malote – SEDE</strong></h4>

          <p>O Grupo de Trabalho Protocolo e Malote é responsável por receber, organizar e tramitar processos, documentos e correspondências, garantindo celeridade e controle adequado.</p>

          <h4><strong>1. Recepção e Triagem</strong></h4>

          <div class="article-item">Receber, protocolar, cadastrar e encaminhar expedientes e processos da Secretaria e para outros órgãos (PGE, Casa Civil, Corregedoria, etc.);</div>

          <div class="article-item">Pesquisar documentos e acompanhar andamento de processos disciplinares para advogados e interessados;</div>

          <div class="article-item">Conferir páginas de processos recebidos de outras secretarias e procuradorias;</div>

          <div class="article-item">Solicitar desarquivamento para juntada de documentos, recursos ou reivindicações;</div>

          <div class="article-item">Receber e controlar correspondências e encomendas via correio ou motoboy, incluindo entrega de amostras de alimentos;</div>

          <div class="article-item">Dar vistas e carga de processos administrativos, após autorização da autoridade competente.</div>

          <h4><strong>2. Organização e Distribuição</strong></h4>

          <div class="article-item">Separar, organizar e viabilizar serviços de malotes, distribuição e entrega de correspondência e processos físicos entre órgãos centrais e as 91 Diretorias de Ensino;</div>

          <div class="article-item">Gerenciar quantitativo de 1.630 sacolas de malote entre entrada e saída no Núcleo de Protocolo;</div>

          <div class="article-item">Guardar processos administrativos disciplinares aguardando prazo recursal por 30 dias;</div>

          <h4><strong>Grupo de Trabalho Arquivo – Prédio Armênia</strong></h4>

          <p>O Grupo de Trabalho Arquivo é responsável pela gestão física e digital dos processos e documentos dos órgãos centrais da Secretaria, garantindo a conservação e eliminação conforme prazos legais.</p>

          <h4><strong>1. Gestão Documental</strong></h4>

          <div class="article-item">Arquivamento e desarquivamento de processos físicos;</div>

          <div class="article-item">Organização e classificação de documentos arquivados, aguardando prazo para eliminação;</div>

          <div class="article-item">Triagem de documentos com prazo de guarda cumprido e preservação dos de guarda permanente;</div>

          <div class="article-item">Custódia do legado documental de unidades extintas (Coordenadoria de Ensino do Interior – CEI, Coordenadoria de Ensino da Grande São Paulo – COGSP, Coordenadoria de Ensino e Normas Pedagógicas – CENP, Departamento de Suprimentos Escolares – DSE e Diretorias Regionais de Ensino).</div>

          <h4><strong>Grupo de Trabalho Protocolo – Arouche</strong></h4>

          <p>O Grupo de Trabalho Protocolo – Arouche executa atividades de protocolo e expedição de documentos, atendendo integralmente a unidade.</p>

          <h4><strong>1. Recepção e Triagem</strong></h4>

          <div class="article-item">Recebimento, triagem e controle de correspondências e encomendas;</div>

          <div class="article-item">Arquivamento de processos na unidade;</div>

          <div class="article-item">Fiscalização de serviços terceirizados de protocolo;</div>

          <div class="article-item">Atendimento às demandas de entrega de documentos para Assessoria Técnica das Subsecretárias.</div>

          <h4><strong>Grupo de Trabalho Protocolo – EFAPE</strong></h4>

          <p>O Grupo de Trabalho Protocolo – EFAPE realiza atividades de protocolo e expedição de documentos e processos da <strong>Escola de Formação e Aperfeiçoamento dos Profissionais da Educação – EFAPE</strong>.</p>

          <h4><strong>1. Recepção e Triagem</strong></h4>

          <div class="article-item">Recebimento, triagem e controle de correspondências e encomendas;</div>

          <div class="article-item">Atendimento às demandas de entrega de documentos para a Assessoria Técnica da Subsecretária.</div>
          `,
      },
      article: 'Artigo 120',
    },
    patrimonio: {
      title: 'Divisão de Patrimônio',
      summary: [
        'Artigo 122 - A Divisão de Patrimônio tem as seguintes competências:',

        'I - acompanhar por meio de sistema informatizado a depreciação de bens patrimoniais da Secretaria e sugerir às demais unidades da Pasta o momento de sua renovação;',

        'II - administrar e controlar bens patrimoniais utilizando-se de cadastro, formas de identificação, inventário periódico e baixa patrimonial;',

        'III - providenciar seguro de bens patrimoniais móveis e imóveis e promover outras medidas necessárias à sua defesa e preservação;',

        'VI - orientar as demais áreas da Pasta na gestão de seus bens patrimoniais;',

        'VII - apoiar à Assessoria Técnica das Unidades Regionais de Ensino e o Serviço de Obras e Manutenção Escolar na regularização documental dos imóveis sob sua administração;',

        'VIII - fiscalizar, orientar e apoiar as demais unidades da Pasta para que mantenham as fichas dos imóveis sob sua administração atualizadas perante o Sistema de Gerenciamento de Imóveis – SGI;',

        'IX - gerir o controle de materiais: a) exercendo atividades relativas a recebimento, conferência, guarda, distribuição e controle de materiais, para atendimento de unidades centrais da Secretaria, localizadas fora do seu edifício sede; b) fixar níveis de estoque mínimo, máximo e ponto de reposição; c) emitindo Atestado de Recebimento Definitivo - ARD; d) efetuar inventário periódico de itens armazenados, gerenciar a conta contábil de material em estoque.',
      ],
      articles: {
        available: true,
        title: 'Divisão de Patrimônio e Almoxarifado – DPAT',
        content: `
          <p>O DPAT, por meio do Centro de Patrimônio (CEPAT), é responsável pela orientação e assessoria às 91 Diretorias de Ensino e Prédios Administrativos, utilizando os sistemas de gerenciamento <strong>SGI (Sistema de Gerenciamento de Imóveis)</strong> e <strong>GEMAT (Sistema de Gerenciamento de Patrimônio)</strong>.</p>

          <h4><strong>1. Gestão de Imóveis</strong></h4>

          <div class="article-item">O SGI reflete a situação real dos imóveis da Secretaria, considerando atos administrativos como desapropriação, doação, permuta, concessão e permissão de uso;</div>

          <div class="article-item">A Secretaria é responsável por 7.592 imóveis no Estado de São Paulo, distribuídos entre 9 departamentos e 91 Diretorias de Ensino;</div>

          <div class="article-item">Analisar e tramitar processos relacionados à regularização de imóveis, avaliando matrícula, certidões, plantas, relatórios fotográficos e memoriais descritivos;</div>

          <div class="article-item">Encaminhar processos às áreas competentes (FDE, DIISE, DGREM e Unidades Regionais de Ensino) para subsidiar decisões da Secretaria sobre doações, permissões e comodatos;</div>

          <div class="article-item">Autuar processos do PAINSP e receber terrenos doados pelas prefeituras para construção de unidades escolares;</div>

          <div class="article-item">Capacitar as Diretorias de Ensino sobre o SGI e a importância da regularização fundiária de imóveis sem documentação formal;</div>

          <div class="article-item">Elaborar manuais e guias de procedimentos, atendendo aos decretos:</div>

          <div style="margin-left: 40px;">
            <div class="article-item"><strong>Decreto nº 61.163/2015:</strong> Reformula o Sistema de Gestão do Patrimônio Imobiliário do Estado (SGPI);</div>
            <div class="article-item"><strong>Decreto nº 64.030/2018:</strong> Estabelece diretrizes para atualização cadastral no SGI, alterando dispositivos do Decreto nº 61.163/2015.</div>
          </div>

          <h4><strong>2. Atualização e Controle de Dados</strong></h4>

          <div class="article-item">Gestão e atualização cadastral de imóveis no SGI, incluindo inclusão, alteração e inativação de dados;</div>

          <div class="article-item">Orientação para abertura de processos de unidades escolarizadas municipalmente, conforme Lei nº 14.461/2011 e resoluções SEDUC;</div>

          <div class="article-item">Preenchimento de minutas de termos e escrituras;</div>

          <div class="article-item">Tratativas com CDHU e COHAB para regularização fundiária via comodato.</div>

          <h4><strong>3. Gestão de Bens Móveis – GEMAT</strong></h4>

          <div class="article-item">Gestão e atualização de dados de bens móveis cadastrados das Diretorias de Ensino, Unidades Escolares e Prédios Administrativos;</div>

          <div class="article-item">Inclusão, alteração e inativação de perfis de usuários responsáveis pelo sistema;</div>

          <div class="article-item">Orientação às Diretorias sobre descarte de materiais inservíveis/excedentes, roubo/furto e doações;</div>

          <div class="article-item">Conciliação de contas contábeis de material permanente;</div>

          <div class="article-item">Inventário físico de todos os bens permanentes da COGESPA e unidades correlatas, com confecção de termos de responsabilidade;</div>

          <div class="article-item">Disponibilização e armazenamento de mobiliário nos depósitos da Casa Verde e São Domingos;</div>

          <div class="article-item">Arrolamento de materiais inservíveis e entrega ao Fundo Social de São Paulo, após publicação no D.O.E.;</div>

          <div class="article-item">Gestão de passagem de ônibus via GEMAT às Diretorias de Ensino;</div>

          <div class="article-item">Fiscalização e controle de etiquetas patrimoniais;</div>

          <div class="article-item">Responsabilidade pela renovação dos AVCBs dos prédios administrativos;</div>

          <div class="article-item">Guarda, liberação e formalização de empréstimo de notebooks;</div>

          <div class="article-item">Implantação do sistema SAM Patrimônio para substituir o GEMAT;</div>

          <div class="article-item">Controle de adesivagem, patrimoniamento, numeração de ordem, verificação de chassi e movimentação de ônibus escolares.</div>

          <h4><strong>4. Suporte e Orientação</strong></h4>

          <div class="article-item">Fornecer orientações e esclarecimentos sobre os sistemas SGI e GEMAT às Diretorias de Ensino e Unidades Gestoras, por e-mail, telefone, Teams e presencialmente.</div>
          `,
      },
      article: 'Artigo 122',
    },
    transportes: {
      title: 'Divisão de Transportes',
      summary: [
        'Artigo 123 - A Divisão de Transportes, da Coordenadoria Geral de Suporte Administrativo, tem as seguintes competências:',

        'I - no âmbito da Secretaria, as previstas no artigo 7º do Decreto nº 9.543, de 1º de março de 1977;',

        'II - em relação às unidades centrais da Secretaria: a)executar as previstas nos artigos 8º e 9º do Decreto nº 9.543, de 1º de março de 1977; b) propor a especificação das contratações de serviços e aquisições de veículos; c) planejar o custo e o uso da frota e de serviços motorizados;',

        'III - em relação à cessão de veículos às Prefeituras; a) regularizar a documentação e efetuar a entrega física dos veículos oficiais;b) redigir os termos de cessão de uso dos veículos cedidos às Prefeituras; c) apoiar às Unidades Regionais de Ensino na aplicação das obrigações contratuais estabelecidas nos convênios junto às Prefeituras, referente a débitos veiculares; d) instruir processo de doação permanente dos veículos quando determinado pelo Gabinete.',
      ],
      articles: {
        available: true,
        title: 'Divisão de Transportes – DTRAN',
        content: `
        <p>A DTRAN é responsável por atender as 91 Diretorias de Ensino, prestando suporte integral aos procedimentos relacionados aos veículos oficiais e locados, incluindo manutenção, abastecimento, controle de tráfego e fiscalização, por meio dos sistemas <strong>SAF (Sistema de Administração de Frota)</strong> e <strong>SIGEF (Sistema Integrado de Gestão de Frota)</strong>.</p>

        <h4><strong>1. Gestão de Frota</strong></h4>

        <div class="article-item">Controle de cota anual de combustíveis: 5.000 litros de gasolina, 53.000 litros de diesel e 335.000 litros de etanol;</div>

        <div class="article-item">Fiscalização e cobrança de documentação de 645 municípios com mais de 4.000 ônibus cedidos via Termo de Cessão de Uso;</div>

        <div class="article-item">Identificação e encaminhamento de infrações (multas) de veículos próprios e de terceiros aos municípios, acompanhamento de pagamento e registro no sistema interno;</div>

        <div class="article-item">Lançamento de controle de tráfego no SAF, conforme Decreto nº 979/1973, e disponibilização de informações ao Tribunal de Contas e à Secretaria da Fazenda;</div>

        <div class="article-item">Capacitação das 91 Diretorias para uso dos sistemas e suporte em rotinas atualizadas pelo Decreto nº 9.543/1977.</div>

        <h4><strong>2. Frota Atual</strong></h4>

        <div class="article-item">23 veículos próprios (carros, vans, caminhões e ônibus);</div>

        <div class="article-item">48 veículos locados com condutores da empresa DeivisonTur, atendendo à SEDUC e 15 Diretorias da capital e Grande São Paulo;</div>

        <div class="article-item">63 veículos locados sem condutor, da empresa Bariri, atendendo dois lotes no interior;</div>

        <div class="article-item">Controle de condutores autorizados, motoristas locados e agendamento de saídas da frota locada;</div>

        <div class="article-item">Recebimento de requisições de transporte, análise da disponibilidade da frota e devolutiva com informações de condutores e veículos.</div>

        <h4><strong>3. Documentação e Licenciamentos</strong></h4>

        <div class="article-item">Controle e emissão de documentos de veículos cedidos a municípios e APAEs;</div>

        <div class="article-item">Emissão diária de licenciamentos digitais (aproximadamente 800 veículos/mês) e atualização de dados no Detran;</div>

        <div class="article-item">Emissão de termos de cessão de uso e rescisão;</div>

        <div class="article-item">Entrega de microônibus aos municípios, coleta de assinaturas e documentação;</div>

        <div class="article-item">Providenciar registros de veículos 0 km junto ao Detran;</div>

        <div class="article-item">Digitalização de documentos como CRLV, Termos de Cessão de Uso e notas fiscais;</div>

        <div class="article-item">Cobrança aos municípios de documentos pendentes e entrega de CRVs originais após transferência.</div>

        <h4><strong>4. Isenção de Pedágio e DPVAT</strong></h4>

        <div class="article-item">Solicitação de cartões de isenção para veículos oficiais em rodovias estaduais (Artesp) e federais;</div>

        <div class="article-item">Preparação e pagamento das guias do seguro DPVAT;</div>

        <div class="article-item">Autorização para servidores conduzirem veículos oficiais da SEDUC e das Diretorias via SEI.</div>

        <h4><strong>5. Cuidados Operacionais com a Frota</strong></h4>

        <div class="article-item">Condução de veículos próprios à oficina e pesquisa de mercado em três oficinas;</div>

        <div class="article-item">Higienização de veículos;</div>

        <div class="article-item">Entrega de livros, cadernos e mobiliários;</div>

        <div class="article-item">Transporte de servidores para eventos internos e externos;</div>

        <div class="article-item">Transporte de alunos para museus, teatros e outras atividades escolares.</div>
        `,
      },
      article: 'Artigo 123',
    },
    zeladoria: {
      title: 'Divisão de Zeladoria',
      summary: [
        'Artigo 121 - A Divisão de Zeladoria tem as seguintes competências:',

        'I - executar e organizar eventos internos e externos junto aos Demandantes;',

        'II - zelar pela organização e manutenção dos prédios administrativos e das Unidades Regionais de Ensino;',

        'III - gerenciar e fiscalizar serviços preventivos e corretivos nos prédios;',

        'IV - propor a especificação e quantitativos de materiais e equipamentos que atendem a Pasta e providenciar sua aquisição;',

        'V - propor a especificação e quantitativo para contratação de serviços terceirizados que atendem a Pasta .',
      ],
      articles: {
        available: true,
        title: 'Divisão de Zeladoria – DZEL',
        content: `
        <p>A DZEL é responsável pela manutenção, supervisão e fiscalização dos <strong>Prédios Administrativos</strong> da Secretaria, incluindo Sede, Arouche, Efape, Armênia, Casa Verde, São Domingos, Cajamar, Tenente Pena, Centro Oeste e CAPE.</p>

        <h4><strong>1. Gestão e Fiscalização Predial</strong></h4>

        <div class="article-item">Acompanhar empresas terceirizadas na execução dos serviços;</div>

        <div class="article-item">Verificar diariamente o funcionamento de elevadores, sistemas de iluminação, telefonia, monitoramento de segurança (câmeras), segurança patrimonial, instalações elétricas e hidráulicas;</div>

        <div class="article-item">Supervisão de manutenção preventiva, corretiva e emergencial;</div>

        <div class="article-item">Comunicar irregularidades às empresas prestadoras de serviços;</div>

        <div class="article-item">Fiscalizar áreas comuns, como copas e banheiros, e recepção de materiais de escritório;</div>

        <div class="article-item">Responsável pela renovação de AVCBs e manutenção de equipamentos de segurança contra incêndio.</div>

        <h4><strong>2. Gestão de Eventos e Logística</strong></h4>

        <div class="article-item">Montagem, desmontagem e operação de equipamentos de áudio, vídeo e som em eventos internos e externos;</div>

        <div class="article-item">Transporte de materiais de consumo entre os prédios administrativos;</div>

        <div class="article-item">Supervisão e execução de contratos administrativos, incluindo manutenção predial, elevadores, bombeiros, manobristas, vigilância eletrônica, controle de pragas, lavanderia, limpeza e copa;</div>

        <div class="article-item">Acompanhamento de execução contratual, pagamentos, reajustes e aditamentos, garantindo conformidade com legislações e termos de contrato.</div>

        <h4><strong>3. Serviços Específicos</strong></h4>

        <div class="article-item"><strong>Recepção:</strong> Identificação, controle de acesso e direcionamento de visitantes;</div>

        <div class="article-item"><strong>Vigilância patrimonial:</strong> Proteção preventiva do patrimônio e pessoas;</div>

        <div class="article-item"><strong>Elevadores:</strong> Verificação de funcionamento, manutenção, reajustes, execução de aditamentos e pagamentos;</div>

        <div class="article-item"><strong>Bombeiro:</strong> Fiscalização do posto, equipamentos e rondas;</div>

        <div class="article-item"><strong>Manobristas:</strong> Controle de garagem, folhas de ponto e uniforme;</div>

        <div class="article-item"><strong>Controle de pragas:</strong> Fiscalização de serviços de desratização, desinsetização e controle de aves;</div>

        <div class="article-item"><strong>Purificador:</strong> Abertura e acompanhamento de chamados de manutenção corretiva e preventiva;</div>

        <div class="article-item"><strong>Vigilância Eletrônica:</strong> Gestão de cartões de acesso, monitoramento de imagens e ajustes de câmeras;</div>

        <div class="article-item"><strong>Lavanderia:</strong> Controle de retirada e entrega de toalhas, limpeza e pagamento;</div>

        <div class="article-item"><strong>Limpeza predial:</strong> Organização de cronogramas, fornecimento de materiais de higiene e controle de consumo;</div>

        <div class="article-item"><strong>Copa do Gabinete:</strong> Serviço exclusivo para reuniões e eventos, com controle de insumos e folhas de ponto;</div>

        <div class="article-item"><strong>Ar-condicionado:</strong> Fiscalização de manutenção, controle de temperatura e acesso de colaboradores;</div>

        <div class="article-item"><strong>Telefonia móvel pessoal:</strong> Distribuição, configuração e manutenção de aparelhos, controle de linhas e pagamentos;</div>

        <div class="article-item"><strong>Utilidade pública:</strong> Monitoramento de consumo de água, energia e gás, com controle de pagamentos e prevenção de desperdícios.</div>
        `,
      },
      article: 'Artigo 121',
    },
  };

  // Função para verificar se é dispositivo móvel
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Configurações responsivas
  function getResponsiveConfig() {
    const isMobileDevice = isMobile();
    return {
      margin: isMobileDevice
        ? { top: 30, right: 20, bottom: 30, left: 20 }
        : { top: 50, right: 50, bottom: 50, left: 50 },
      width: isMobileDevice ? Math.max(800, window.innerWidth * 1.5) : 1400,
      height: isMobileDevice ? 500 : 600,
      nodeSpacing: isMobileDevice ? 1.5 : 3,
    };
  }

  function createOrganogram() {
    // Limpar SVG existente
    d3.select('#organogram').selectAll('*').remove();

    const config = getResponsiveConfig();
    const { margin, width, height, nodeSpacing } = config;

    // Criar SVG
    const svg = d3
      .select('#organogram')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Criar árvore hierárquica
    const tree = d3
      .tree()
      .size([width, height - 100])
      .separation((a, b) => {
        return a.parent === b.parent ? nodeSpacing : nodeSpacing + 1;
      });

    const root = d3.hierarchy(data);
    tree(root);

    // Ajustar posicionamento manual para melhor layout com mais espaçamento
    root.x = width / 2;
    root.y = 80;

    if (root.children) {
      root.children[0].x = width * 0.25;
      root.children[0].y = 250;
      root.children[1].x = width * 0.75;
      root.children[1].y = 250;

      // Posicionar filhos da Coordenadoria de Execução com mais espaçamento
      if (root.children[0].children) {
        const execChildren = root.children[0].children;
        const totalWidth = width * 0.8;
        const spacing = totalWidth / (execChildren.length + 1);
        const startX = width * 0.1;

        execChildren.forEach((child, i) => {
          child.x = startX + (i + 1) * spacing;
          child.y = 450;
        });
      }
    }

    // Definir gradientes com cores oficiais do Governo de SP
    const defs = svg.append('defs');

    // Gradiente principal - Vermelho oficial SP
    const gradientMain = defs
      .append('linearGradient')
      .attr('id', 'gradientMain')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    gradientMain
      .append('stop')
      .attr('offset', '0%')
      .style('stop-color', '#c41e3a');
    gradientMain
      .append('stop')
      .attr('offset', '100%')
      .style('stop-color', '#8b0000');

    // Gradiente coordenadorias - Preto e cinza
    const gradientCoord = defs
      .append('linearGradient')
      .attr('id', 'gradientCoord')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    gradientCoord
      .append('stop')
      .attr('offset', '0%')
      .style('stop-color', '#2c2c2c');
    gradientCoord
      .append('stop')
      .attr('offset', '100%')
      .style('stop-color', '#4a4a4a');

    // Gradiente divisões - Cinza claro
    const gradientDiv = defs
      .append('linearGradient')
      .attr('id', 'gradientDiv')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    gradientDiv
      .append('stop')
      .attr('offset', '0%')
      .style('stop-color', '#f7f7f7');
    gradientDiv
      .append('stop')
      .attr('offset', '100%')
      .style('stop-color', '#e2e2e2');

    // Desenhar links (conexões)
    const links = g
      .selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr(
        'd',
        d3
          .linkVertical()
          .x((d) => d.x)
          .y((d) => d.y)
      );

    // Função para determinar cor e tamanho baseado no tipo (cores oficiais SP)
    function getNodeStyle(d) {
      const isMobileDevice = isMobile();
      const scale = isMobileDevice ? 0.8 : 1;

      // Explicitly treat the Departamento de Gestão Documental (id: 'gestao')
      // as a division so it uses the same visual style as other divisões.
      if (d.data && d.data.id === 'gestao') {
        return {
          fill: 'url(#gradientDiv)',
          width: 200 * scale,
          height: 55 * scale,
          textColor: '#2c2c2c',
          stroke: '#999',
        };
      }

      if (d.depth === 0) {
        return {
          fill: 'url(#gradientMain)',
          width: 320 * scale,
          height: 70 * scale,
          textColor: 'white',
          stroke: '#8b0000',
        };
      } else if (d.depth === 1) {
        return {
          fill: 'url(#gradientCoord)',
          width: 260 * scale,
          height: 60 * scale,
          textColor: 'white',
          stroke: '#2c2c2c',
        };
      } else {
        return {
          fill: 'url(#gradientDiv)',
          width: 200 * scale,
          height: 55 * scale,
          textColor: '#2c2c2c',
          stroke: '#999',
        };
      }
    }

    // Criar grupos para os nós
    const node = g
      .selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    // Adicionar retângulos clicáveis com bordas oficiais
    node
      .append('rect')
      .attr('class', 'node-rect')
      .attr('x', (d) => -getNodeStyle(d).width / 2)
      .attr('y', (d) => -getNodeStyle(d).height / 2)
      .attr('width', (d) => getNodeStyle(d).width)
      .attr('height', (d) => getNodeStyle(d).height)
      .attr('rx', 12)
      .attr('ry', 12)
      .style('fill', (d) => getNodeStyle(d).fill)
      .style('stroke', (d) => getNodeStyle(d).stroke)
      .style('stroke-width', 2)
      .on('click', function (event, d) {
        openModal(d.data.id);
      });

    // Adicionar texto
    node
      .append('text')
      .attr('class', 'node-text')
      .attr('dy', 0)
      .style('fill', (d) => getNodeStyle(d).textColor)
      .style('font-size', (d) => {
        const baseSize = d.depth === 0 ? 14 : 12;
        return isMobile() ? baseSize - 1 + 'px' : baseSize + 'px';
      })
      .each(function (d) {
        const words = d.data.name.split(' ');
        const lineHeight = 1.1;
        const maxWidth = getNodeStyle(d).width - 40;

        let line = [];
        let lineNumber = 0;
        const text = d3.select(this);

        words.forEach((word) => {
          line.push(word);
          const testLine = line.join(' ');

          // Estimar largura do texto
          if (testLine.length * 6 > maxWidth && line.length > 1) {
            line.pop();
            text
              .append('tspan')
              .attr('x', 0)
              .attr(
                'dy',
                lineNumber === 0 ? -lineHeight * 0.3 + 'em' : lineHeight + 'em'
              )
              .text(line.join(' '));
            line = [word];
            lineNumber++;
          }
        });

        text
          .append('tspan')
          .attr('x', 0)
          .attr('dy', lineNumber === 0 ? 0 : lineHeight + 'em')
          .text(line.join(' '));
      });

    // // Adicionar ícone de informação com cores oficiais
    // node
    //   .append('circle')
    //   .attr('class', 'info-icon')
    //   .attr('cx', (d) => getNodeStyle(d).width / 2 - 18)
    //   .attr('cy', (d) => -getNodeStyle(d).height / 2 + 18)
    //   .attr('r', isMobile() ? 8 : 10)
    //   .style('fill', '#c41e3a')
    //   .style('stroke', 'white')
    //   .style('stroke-width', 2)
    //   .on('click', function (event, d) {
    //     event.stopPropagation();
    //     openModal(d.data.id);
    //   });

    node
      .append('text')
      .attr('class', 'info-text')
      .attr('x', (d) => getNodeStyle(d).width / 2 - 18)
      .attr('y', (d) => -getNodeStyle(d).height / 2 + 18)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .style('fill', 'white')
      .style('font-size', isMobile() ? '10px' : '12px')
      .style('font-weight', 'bold');
    // .text('ℹ');
  }

  const modal = document.getElementById('infoModal');
  const modalTitle = document.getElementById('modal-title');
  const resumoContent = document.getElementById('resumo');
  const detalhesContent = document.getElementById('detalhes');
  const span = document.getElementsByClassName('close')[0];

  function openModal(id) {
    const data = competencias[id];
    if (!data) return;

    modalTitle.textContent = data.title;

    // Preencher aba de resumo
    let summaryHtml = '';
    if (data.summary) {
      // suportar summary como array de strings (legacy) ou string HTML
      if (Array.isArray(data.summary)) {
        summaryHtml = data.summary
          .map(
            (item) =>
              `<div class="competencia"><span class="competencia-number">•</span> ${item}</div>`
          )
          .join('');
      } else if (typeof data.summary === 'string') {
        // Assumimos que o string pode conter HTML
        summaryHtml = data.summary;
      } else {
        summaryHtml = '<p>Nenhum resumo disponível.</p>';
      }

      summaryHtml =
        summaryHtml +
        `
          <div class="reference">
            <strong>Base Legal:</strong> ${data.article || ''}
            ${
              data.link
                ? `<a href="${data.link}" target="_blank">${data.link}</a>`
                : ''
            }
          </div>
        `;
    } else {
      summaryHtml = '<p>Nenhum resumo disponível.</p>';
    }

    resumoContent.innerHTML = summaryHtml;

    // Preencher aba de detalhes
    if (data.articles && data.articles.available) {
      detalhesContent.innerHTML = `
        <div class="article-section-full">
          <h4 class="article-title">${data.articles.title}</h4>
          <div class="article-content">${data.articles.content}</div>
        </div>
        <div class="reference"><strong>Base Legal:</strong> ${data.article}</div>
      `;
    } else {
      detalhesContent.innerHTML = `
        <div class="coming-soon">
          <div class="icon">⏳</div>
          <h3>Em breve</h3>
          <p>As informações detalhadas para esta unidade estarão disponíveis em breve.</p>
        </div>
      `;
    }

    // Preencher abas de SVG
    populateSvgTabs(id);

    modal.style.display = 'block';
    // Reset tabs to default
    document.querySelector('.tab[data-tab="resumo"]').click();
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  span.onclick = function () {
    closeModal();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  // Tab switching logic
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // ====== FUNCIONALIDADES SVG ======

  // Dados dos SVGs para cada unidade
  const svgData = {
    main: {
      fluxogramas: [
        {
          name: 'Arquivo 1',
          file: 'fluxograma_cogespa_geral.svg',
        },
        {
          name: 'Arquivo 2',
          file: 'fluxograma_processo_admin.svg',
        },
      ],
      diagramas: [{ name: 'Arquivo 1', file: 'dpgdoc.svg' }],
    },

    programacao: {
      fluxogramas: [
        {
          name: 'ATA',
          file: '/fluxogramas/coprog/ata.svg',
        },
        {
          name: 'ATA DE ALIMENTAÇÃO',
          file: '/fluxogramas/coprog/ata_alimentacao.svg',
        },
        {
          name: 'ATA DE ORGANIZAÇÃO',
          file: '/fluxogramas/coprog/ata_organizacao.svg',
        },
        {
          name: 'CERTIFICADO DIGITAL',
          file: '/fluxogramas/coprog/certificado_digital.svg',
        },
        {
          name: 'CONTRATAÇÃO DE SERVIÇOS / AQUISIÇÃO',
          file: '/fluxogramas/coprog/contratacao_servico_aquisicao.svg',
        },
        {
          name: 'CONTRATO DE CAMISETAS E MEDALHAS OMASP',
          file: '/fluxogramas/coprog/contrato_camiseta_medalhas.svg',
        },
        {
          name: 'PASSAGENS AÉREAS',
          file: '/fluxogramas/coprog/passagens_aereas.svg',
        },
        {
          name: 'PUBLICAÇÃO EM DIARIO OFICIAL',
          file: '/fluxogramas/coprog/publicacao_doe.svg',
        },
      ],
      diagramas: [{ name: 'Arquivo 1', file: 'diagrama_coprog.svg' }],
    },
    execucao: {
      fluxogramas: [
        { name: 'Arquivo 1', file: 'fluxograma_coex_execucao.svg' },
        { name: 'Arquivo 2', file: 'fluxograma_coex_controle.svg' },
      ],
      diagramas: [
        { name: 'Arquivo 1', file: 'diagrama_coex.svg' },
        {
          name: 'Arquivo 2',
          file: 'diagrama_integracao_coex.svg',
        },
      ],
    },
    gestao: {
      fluxogramas: [
        {
          name: 'PROCESSOS ADMINISTRATIVOS',
          file: '/fluxogramas/dpgdoc/processo_administrativo.svg',
        },
      ],
      diagramas: [
        {
          name: 'Arquivo 1',
          file: '/diagramas/dpgdoc/diagrama_sistemas_dpgdoc.svg',
        },
      ],
    },

    patrimonio: {
      fluxogramas: [
        {
          name: 'SAM PATRIMONIO E BENS MOVEIS',
          file: '/fluxogramas/dpat/patrimonio_bens_moveis.svg',
        },
        { name: 'SAM ESTOQUE', file: '/fluxogramas/dpat/sam_estoque.svg' },
      ],
      diagramas: [
        {
          name: 'Arquivo 1',
          file: '/diagramas/dpat/diagrama_sistemas_dpat.svg',
        },
      ],
    },

    transportes: {
      fluxogramas: [
        {
          name: 'DOAÇÃO DE ÔNIBUS',
          file: '/fluxogramas/dtran/doacao_onibus.svg',
        },
        {
          name: 'CESSÃO DE USO',
          file: '/fluxogramas/dtran/cessao_uso.svg',
        },
        {
          name: 'MULTAS',
          file: '/fluxogramas/dtran/multas.svg',
        },
        {
          name: 'SOLICITAÇÃO DE TRANSPORTE',
          file: '/fluxogramas/dtran/solicitacao_transportes.svg',
        },
      ],
      diagramas: [{ name: 'Arquivo 1', file: 'diagrama_dtran_sistemas.svg' }],
    },

    zeladoria: {
      fluxogramas: [
        { name: 'Arquivo 1', file: 'fluxograma_dzel_manutencao.svg' },
      ],
      diagramas: [
        {
          name: 'Arquivo 1',
          file: '/diagramas/dzel/diagrama_dzel_servicos.svg',
        },
      ],
    },
  };

  function populateSvgTabs(unitId) {
    const fluxogramasContent = document.getElementById('fluxogramas');
    const diagramasContent = document.getElementById('diagramas');
    const unitSvgs = svgData[unitId];

    if (!unitSvgs) {
      // Se não houver SVGs para esta unidade, mostrar mensagem
      const noContentMessage = `
        <div class="coming-soon">
          <div class="icon">📊</div>
          <h3>Em desenvolvimento</h3>
          <p>Os fluxogramas e diagramas para esta unidade estarão disponíveis em breve.</p>
        </div>
      `;
      fluxogramasContent.innerHTML = noContentMessage;
      diagramasContent.innerHTML = noContentMessage;
      return;
    }

    // Preencher fluxogramas
    if (unitSvgs.fluxogramas && unitSvgs.fluxogramas.length > 0) {
      const fluxButtons = unitSvgs.fluxogramas
        .map(
          (svg) =>
            `<button class="svg-button" onclick="openSvgViewer('${svg.file}', '${svg.name}')">
          <span class="svg-button-icon">🔁</span>${svg.name}
        </button>`
        )
        .join('');

      fluxogramasContent.innerHTML = `
        <div class="svg-buttons-container">
          <p class="section-title">Visualizar Fluxogramas:</p>
          <div class="svg-buttons-grid">
            ${fluxButtons}
          </div>
        </div>
      `;
    } else {
      fluxogramasContent.innerHTML = `
        <div class="coming-soon">
          <div class="icon">🔁</div>
          <h3>Em desenvolvimento</h3>
          <p>Os fluxogramas para esta unidade estarão disponíveis em breve.</p>
        </div>
      `;
    }

    // Preencher diagramas
    if (unitSvgs.diagramas && unitSvgs.diagramas.length > 0) {
      const diagramButtons = unitSvgs.diagramas
        .map(
          (svg) =>
            `<button class="svg-button" onclick="openSvgViewer('${svg.file}', '${svg.name}')">
          <span class="svg-button-icon">📊</span>${svg.name}
        </button>`
        )
        .join('');

      diagramasContent.innerHTML = `
        <div class="svg-buttons-container">
          <p class="section-title">Visualizar Diagramas:</p>
          <div class="svg-buttons-grid">
            ${diagramButtons}
          </div>
        </div>
      `;
    } else {
      diagramasContent.innerHTML = `
        <div class="coming-soon">
          <div class="icon">📊</div>
          <h3>Em desenvolvimento</h3>
          <p>Os diagramas para esta unidade estarão disponíveis em breve.</p>
        </div>
      `;
    }
  }

  // ====== VISUALIZADOR SVG ======
  let svgScale = 1;
  let svgTranslateX = 0;
  let svgTranslateY = 0;
  let svgIsDragging = false;
  let svgLastX = 0;
  let svgLastY = 0;

  const svgViewerModal = document.getElementById('svgViewerModal');
  const svgViewerContent = document.getElementById('svg-viewer-content');
  const svgViewerWrapper = document.getElementById('svg-viewer-wrapper');
  const svgZoomLevelSpan = document.getElementById('svg-zoom-level');

  // Initial organogram creation and responsive handling
  createOrganogram();
  window.addEventListener('resize', createOrganogram);
});

// ====== FUNÇÕES GLOBAIS DO VISUALIZADOR SVG ======

// Abrir visualizador SVG
async function openSvgViewer(filename, title) {
  const svgViewerModal = document.getElementById('svgViewerModal');
  const svgViewerSvgContent = document.getElementById('svg-viewer-svg-content');
  const svgLoading = document.getElementById('svg-loading');

  // Reset variáveis
  svgScale = 1;
  svgTranslateX = 0;
  svgTranslateY = 0;

  // Mostrar modal e loading
  svgViewerModal.style.display = 'block';
  svgLoading.style.display = 'block';
  svgLoading.innerHTML = `Carregando ${title}...`;
  svgViewerSvgContent.innerHTML = '';

  try {
    const response = await fetch(filename);
    if (!response.ok) {
      throw new Error(`Erro ao carregar SVG: ${response.status}`);
    }
    const svgContent = await response.text();

    svgViewerSvgContent.innerHTML = svgContent;
    svgLoading.style.display = 'none';

    // Adicionar classe para estilização
    const svgElement = svgViewerSvgContent.querySelector('svg');
    if (svgElement) {
      svgElement.classList.add('svg-viewer-svg');
    }

    // Ajustar à tela após carregar
    setTimeout(svgFitToScreen, 200);
  } catch (error) {
    console.error('Erro ao carregar o SVG:', error);
    svgLoading.innerHTML = `
      <div style="color: #ff6b6b;">
        <p>Erro ao carregar ${filename}</p>
        <p style="font-size: 12px; margin-top: 10px;">
          Verifique se o arquivo está na pasta raiz do projeto
        </p>
        <p style="font-size: 12px;">
          Erro: ${error.message}
        </p>
      </div>
    `;
  }
}

// Fechar visualizador SVG
function closeSvgViewer() {
  const svgViewerModal = document.getElementById('svgViewerModal');
  svgViewerModal.style.display = 'none';
}

// Funções de zoom do SVG
function svgUpdateZoomDisplay() {
  const svgZoomLevelSpan = document.getElementById('svg-zoom-level');
  svgZoomLevelSpan.textContent = Math.round(svgScale * 100) + '%';
}

function svgUpdateTransform() {
  const svgViewerWrapper = document.getElementById('svg-viewer-wrapper');
  svgViewerWrapper.style.transform = `translate(${svgTranslateX}px, ${svgTranslateY}px) scale(${svgScale})`;
}

function svgZoomIn() {
  svgScale *= 1.2;
  svgUpdateTransform();
  svgUpdateZoomDisplay();
}

function svgZoomOut() {
  svgScale /= 1.2;
  svgUpdateTransform();
  svgUpdateZoomDisplay();
}

function svgResetZoom() {
  svgScale = 1;
  svgTranslateX = 0;
  svgTranslateY = 0;
  svgUpdateTransform();
  svgUpdateZoomDisplay();
}

function svgFitToScreen() {
  const svgViewerContent = document.getElementById('svg-viewer-content');
  const svgViewerWrapper = document.getElementById('svg-viewer-wrapper');
  const svgElement = svgViewerWrapper.querySelector('svg');

  if (!svgElement) return;

  const containerRect = svgViewerContent.getBoundingClientRect();
  const svgRect = svgElement.getBoundingClientRect();

  const scaleX = containerRect.width / svgRect.width;
  const scaleY = containerRect.height / svgRect.height;

  svgScale = Math.min(scaleX, scaleY) * 0.9; // 90% para margem
  svgTranslateX = 0;
  svgTranslateY = 0;

  svgUpdateTransform();
  svgUpdateZoomDisplay();
}

// Função para alternar tela cheia do SVG
function toggleSvgFullscreen() {
  const svgViewerModal = document.getElementById('svgViewerModal');

  if (!document.fullscreenElement) {
    svgViewerModal.requestFullscreen().catch((err) => {
      console.log(`Erro ao entrar em tela cheia: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Event listeners do visualizador SVG
document.addEventListener('DOMContentLoaded', function () {
  const svgViewerContent = document.getElementById('svg-viewer-content');
  const svgViewerWrapper = document.getElementById('svg-viewer-wrapper');
  const svgZoomLevelSpan = document.getElementById('svg-zoom-level');

  // Zoom com scroll do mouse
  svgViewerContent.addEventListener('wheel', (e) => {
    e.preventDefault();

    const rect = svgViewerContent.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const oldScale = svgScale;

    if (e.deltaY < 0) {
      svgScale *= 1.1;
    } else {
      svgScale /= 1.1;
    }

    // Zoom centrado no mouse
    const scaleChange = svgScale / oldScale;
    svgTranslateX = mouseX - (mouseX - svgTranslateX) * scaleChange;
    svgTranslateY = mouseY - (mouseY - svgTranslateY) * scaleChange;

    svgUpdateTransform();
    svgUpdateZoomDisplay();
  });

  // Funcionalidade de arrastar
  svgViewerContent.addEventListener('mousedown', (e) => {
    svgIsDragging = true;
    svgLastX = e.clientX;
    svgLastY = e.clientY;
    svgViewerContent.classList.add('dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!svgIsDragging) return;

    const deltaX = e.clientX - svgLastX;
    const deltaY = e.clientY - svgLastY;

    svgTranslateX += deltaX;
    svgTranslateY += deltaY;

    svgLastX = e.clientX;
    svgLastY = e.clientY;

    svgUpdateTransform();
  });

  document.addEventListener('mouseup', () => {
    svgIsDragging = false;
    if (svgViewerContent) {
      svgViewerContent.classList.remove('dragging');
    }
  });

  // Teclas de atalho
  document.addEventListener('keydown', (e) => {
    const svgViewerModal = document.getElementById('svgViewerModal');
    if (svgViewerModal.style.display !== 'block') return;

    switch (e.key) {
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          closeSvgViewer();
        }
        break;
      case '+':
      case '=':
        svgZoomIn();
        break;
      case '-':
        svgZoomOut();
        break;
      case '0':
        svgResetZoom();
        break;
      case 'f':
      case 'F':
        if (e.ctrlKey) {
          e.preventDefault();
          toggleSvgFullscreen();
        } else {
          svgFitToScreen();
        }
        break;
      case 'F11':
        e.preventDefault();
        toggleSvgFullscreen();
        break;
    }
  });

  // Inicialização
  svgUpdateZoomDisplay();
});
