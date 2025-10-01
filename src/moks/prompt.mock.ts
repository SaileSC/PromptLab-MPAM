import { PromptCategory } from "@/types/prompt.type";

export const promptCategories: PromptCategory[] = [
  {
    id: "atuacao_extrajudicial",
    titulo: "Atuação Extrajudicial",
    descricao:
      "Prompts focados na resolução de conflitos e fiscalização sem a necessidade de iniciar um processo judicial.",
    prompts: [
      {
        id: "prompt_recomendacao",
        titulo: "Elaborar Recomendação",
        template:
          "Elabore uma minuta de Recomendação, em tom formal e com base na Constituição Federal e na Lei Orgânica do Ministério Público, destinada ao Secretário Municipal de [NOME DA SECRETARIA] do município de [NOME DO MUNICÍPIO]. O objetivo é recomendar a adoção de providências urgentes para resolver o problema de [DESCRIÇÃO DO PROBLEMA, ex: falta de medicamentos no posto de saúde local]. Aponte as possíveis consequências legais em caso de inércia, como ajuizamento de Ação Civil Pública por improbidade administrativa.",
      },
      {
        id: "prompt_tac",
        titulo: "Estruturar Termo de Ajustamento de Conduta (TAC)",
        template:
          "Estruture uma minuta de Termo de Ajustamento de Conduta (TAC) a ser celebrado entre o Ministério Público do Estado do Amazonas e a empresa [NOME DA EMPRESA]. O objeto do TAC é a reparação de dano ambiental causado por [DESCRIÇÃO DO DANO] no município de [NOME DO MUNICÍPIO]. Detalhe as seguintes cláusulas: Objeto, Obrigações do Compromissário (com metas e prazos claros), Penalidades por Descumprimento (multa diária) e Fiscalização.",
      },
      {
        id: "prompt_audiencia_publica",
        titulo: "Convocação para Audiência Pública",
        template:
          "Redija um edital de convocação para uma audiência pública a ser realizada pela Promotoria de Justiça de [NOME DA PROMOTORIA]. O tema da audiência é '[TEMA DA AUDIÊNCIA, ex: a segurança nas escolas públicas]'. O texto deve incluir: o objetivo da audiência, data, horário, local (físico e/ou virtual), regras para inscrição de expositores e como a população pode participar.",
      },
    ],
  },
  {
    id: "atuacao_judicial",
    titulo: "Atuação Judicial",
    descricao:
      "Prompts para a elaboração de peças processuais para iniciar ou intervir em ações na Justiça.",
    prompts: [
      {
        id: "prompt_acp",
        titulo: "Minuta de Ação Civil Pública (ACP)",
        template:
          "Crie a petição inicial completa para uma Ação Civil Pública com pedido de tutela de urgência. **Fatos:** [DESCRIÇÃO DETALHADA DOS FATOS, ex: omissão do município de Manaus em fornecer transporte escolar para alunos da comunidade ribeirinha X]. **Partes:** O MPAM como autor e o Município de [NOME DO MUNICÍPIO] como réu. **Direito:** Fundamente com base no direito à educação (Constituição Federal, ECA, LDB). **Pedidos:** Elabore os pedidos, incluindo a obrigação de fazer para que o serviço seja imediatamente estabelecido, sob pena de multa diária, e o pedido de condenação por dano moral coletivo.",
      },
      {
        id: "prompt_denuncia_criminal",
        titulo: "Estrutura de Denúncia Criminal",
        template:
          "Estruture uma denúncia criminal contra [NOME(S) DO(S) RÉU(S)], qualificado(s) nos autos do inquérito policial nº [NÚMERO]. Narre de forma clara e objetiva o fato criminoso, com todas as suas circunstâncias: [DESCRIÇÃO DO CRIME, DATA, HORA, LOCAL, MODO DE EXECUÇÃO]. Impute ao(s) denunciado(s) o(s) seguinte(s) tipo(s) penal(is): [ARTIGO(S) DO CÓDIGO PENAL OU LEI ESPECIAL]. Ao final, apresente o rol de testemunhas.",
      },
      {
        id: "prompt_recurso_apelacao",
        titulo: "Elaborar Recurso de Apelação",
        template:
          "Redija as razões de um Recurso de Apelação contra a sentença proferida pelo juízo da [VARA DE ORIGEM] no processo nº [NÚMERO], que julgou improcedente a Ação Civil Pública sobre [TEMA]. Os pontos a serem recorridos são: [PONTO 1, ex: cerceamento de defesa pelo indeferimento de prova pericial] e [PONTO 2, ex: erro na interpretação da Lei X]. Desenvolva a argumentação jurídica para cada ponto, citando doutrina e jurisprudência do TJAM e de tribunais superiores.",
      },
    ],
  },
  {
    id: "defesa_meio_ambiente",
    titulo: "Defesa do Meio Ambiente (Foco Amazônia)",
    descricao:
      "Prompts específicos para a realidade e os desafios ambientais do estado do Amazonas.",
    prompts: [
      {
        id: "prompt_desmatamento",
        titulo: "Análise de Relatório de Desmatamento",
        template:
          "Analise o seguinte relatório técnico do INPE/DETER que aponta um polígono de desmatamento de [NÚMERO] hectares na zona rural do município de [NOME DO MUNICÍPIO]. Com base nos dados, elabore um despacho para instauração de inquérito civil, determinando a expedição de ofícios ao IPAAM, IBAMA e à delegacia de polícia local para apurar a autoria e a materialidade do dano ambiental. Liste as principais leis ambientais federais e estaduais violadas.",
      },
      {
        id: "prompt_garimpo_ilegal",
        titulo: "Apurar Denúncia de Garimpo Ilegal",
        template:
          "Com base em uma notícia de fato que relata a presença de garimpo ilegal no Rio [NOME DO RIO], próximo à terra indígena [NOME DA TERRA INDÍGENA], identifique as providências investigatórias a serem tomadas. Liste os órgãos a serem oficiados (ANM, FUNAI, Polícia Federal, IBAMA) e quais informações devem ser solicitadas de cada um. Estruture os quesitos para uma eventual perícia técnica na área.",
      },
      {
        id: "prompt_licenciamento_ambiental",
        titulo: "Elaborar Parecer em Licenciamento Ambiental",
        template:
          "Atue como promotor de justiça e elabore um parecer em um procedimento de licenciamento ambiental para a instalação de [TIPO DE EMPREENDIMENTO, ex: um porto privado] às margens do Rio Negro. Analise o Estudo de Impacto Ambiental (EIA/RIMA) apresentado, focando nos seguintes pontos: supressão de vegetação, impacto sobre a fauna local e possíveis danos às comunidades ribeirinhas. Aponte eventuais falhas e, se for o caso, recomende a não expedição da licença ou a inclusão de condicionantes.",
      },
    ],
  },
  {
    id: "atos_administrativos_comunicacao",
    titulo: "Atos Administrativos e Comunicação",
    descricao:
      "Prompts para a gestão interna da promotoria e comunicação com outros órgãos e com a sociedade.",
    prompts: [
      {
        id: "prompt_oficio",
        titulo: "Solicitação de Informações (Ofício)",
        template:
          "Redija um ofício formal e conciso para a [NOME DA INSTITUIÇÃO, ex: Secretaria de Estado de Saúde - SES/AM], solicitando, com base no poder requisitório do Ministério Público, informações detalhadas e documentos sobre [ASSUNTO ESPECÍFICO, ex: a fila de espera para cirurgias eletivas no estado]. Estabeleça um prazo de [NÚMERO] dias para a resposta, sob as penas da lei.",
      },
      {
        id: "prompt_nota_imprensa",
        titulo: "Redigir Nota à Imprensa",
        template:
          "Elabore uma nota à imprensa, em linguagem clara e acessível ao público geral, comunicando a deflagração da Operação [NOME DA OPERAÇÃO]. Explique o objetivo da operação, os crimes investigados (sem citar nomes de investigados para não atrapalhar o processo), os órgãos parceiros (Polícia Civil, GAECO) e a importância da ação para a sociedade.",
      },
      {
        id: "prompt_analise_noticia_fato",
        titulo: "Análise Preliminar de Notícia de Fato",
        template:
          "Analise a seguinte notícia de fato: [COLE O TEXTO DA DENÚNCIA AQUI]. Faça um resumo dos fatos narrados. Identifique a atribuição da promotoria (ex: Promotoria de Defesa do Consumidor, do Patrimônio Público, etc.). Sugira o despacho a ser adotado: arquivamento, instauração de procedimento preparatório ou instauração de inquérito civil, justificando a escolha.",
      },
    ],
  },
];
