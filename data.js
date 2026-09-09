/*
  BASE DE DADOS DOS STATUS DIÁRIOS — Webmotors
  ------------------------------------------------------------------
  Para publicar um novo dia, copie um bloco { ... } inteiro, cole no
  TOPO do array STATUS (logo após "const STATUS = ["), e edite os
  campos. O site mostra automaticamente o primeiro item do array como
  o mais recente (default). Datas no formato AAAA-MM-DD.
  Regra do projeto: dados sempre vindos do Notion (somente leitura).
  Valores/números como inteiros, sem abreviação.
*/
const STATUS = [
  {
    data: "2026-09-09",
    dataBR: "09/09/2026",
    diaSemana: "quarta-feira",
    periodo: "31/08 a 09/09/2026",
    resumoCurto: "Diagnóstico estrutural das contas de Google Ads em andamento. Bloqueio dominante é a transição de gestão no cliente; foco em quick wins antes de mudanças estruturais.",
    sumario: [
      "A operação segue na fase de diagnóstico estrutural das contas de Google Ads da Webmotors, antes de mudanças de mídia. Das <b>16 auditorias mapeadas</b>, 6 estão concluídas (todo o eixo Comprar e Expansão, mais o snapshot anual e o diagnóstico de mensuração), 2 em andamento (taxonomia/UTMs e a auditoria do App) e 8 a fazer (todo o eixo Vender, a conta Santander Financiamentos, o feed do Merchant Center e o vídeo de Comprar).",
      "O bloqueio dominante não é técnico: é a <b>transição de gestão no cliente</b>, que trava novos testes por falta de plano de mídia e clareza de orçamento. A estratégia acordada é atacar quick wins de baixo risco para construir confiança antes de mexer na estrutura, e curar a informação no Notion em nível executivo, reservando as reuniões para granularidade. Marco fixado: <b>reunião executiva dia 30</b> (remarcada do dia 15) com diretores/VPs, para a qual o time precisa preparar de 3 a 5 mensagens-chave."
    ],
    auditorias: {
      concluido: [
        "Auditoria de conta — WM | Comprar (Search)",
        "Auditoria de conta — WM | Comprar (PMax)",
        "Auditoria de conta — WM | Expansão (Search)",
        "Auditoria de conta — WM | Expansão (PMax)",
        "Media Snapshot #1 — Webmotors, o ano até aqui",
        "Diagnóstico Inicial de Mensuração — Caliber 3135 (Briefing do Cliente)"
      ],
      andamento: [
        "UTM's e Taxonomia das contas de prioridade primária",
        "Auditoria de Mensuração e Mídia — App Webmotors (Caliber3135)"
      ],
      afazer: [
        "Auditoria de conta — WM | Vender (Search)",
        "Auditoria de conta — WM | Vender (Performance Max)",
        "Auditoria de conta — WM | Vender (Demand Gen)",
        "Auditoria de conta — WM | Comprar (Video)",
        "Auditoria de conta — Webmotors | Santander Financiamentos (Search)",
        "Auditoria de conta — Webmotors | Santander Financiamentos (Performance Max)",
        "Auditoria de conta — Webmotors | Santander Financiamentos (Demand Gen)",
        "Feed - Merchant Center (PMax)"
      ]
    },
    achados: [
      ["Clash PMax x Search.", "Search converte até 10x melhor que PMax; overlap de contagem entre canais na PMax é comportamento conhecido, não erro de mensuração — mas exige separação de sinais antes de escalar."],
      ["Perda de leilão por qualidade.", "Cerca de 70% das perdas em campanhas de Search vêm de problemas de qualidade — quick win sem necessidade de aporte adicional."],
      ["Conta sobrecarregada e sinais misturados.", "A conta atual tem mais de 500 campanhas; decisão de criar conta nova e limpa para separar sinais de conversão (app/iOS/Android/site) em vez de higienizar a atual."],
      ["App fora de aprendizado.", "A campanha de App teve 6 alterações de Target ROAS em 14 dias (duas com 2 minutos de intervalo) — provavelmente nunca saiu da fase de aprendizado; duplicidade configurada como CPC quando deveria ser ROAS. Orientação: não operar até correção."],
      ["Configuração descontrolada em DSA.", "Campanhas rodando com idioma inglês e \"AI Max\" ativado sem controle — prioridade de ajuste."],
      ["Metas de conversão inconsistentes entre contas.", "Expansão com 7 ações de conversão, Comprar com 5 (incluindo \"lead CDP\" importada de CRM, ainda não totalmente compreendida)."],
      ["Mensuração com pendências abertas.", "E-mails de confirmação não chegam à caixa de entrada; eventos \"hardcoded\" sem documentação; inconsistência histórica Firebase x Adjust a ser diagnosticada pelo cliente."],
      ["Taxonomia / UTMs.", "CSV de links das 5 contas primárias saiu com 200 a 300 MB, inviabilizando análise manual — reforça a padronização de taxonomia e manuais de UTM já em andamento."]
    ],
    dailies: [
      ["03/09", "quinta", "Estudo Zmes/Filipe com 3 frentes (visão geral, evidência do clash PMax x Search + quick win, roadmap de setembro); auditoria de Expansão (PMax) aberta como insumo; oportunidades em Open AI Ads e Bing; teste de brand lift proposto (pendente cientista de dados — registrado como risco)."],
      ["04/09", "sexta", "Search converte até 10x melhor que PMax; decisão de criar conta nova e limpa; pausar campanhas de instalação de app (foco em engajamento); reunião executiva dia 30; parceria com Trilha (B3) para audiências de alta intensidade."],
      ["08/09", "terça", "Padronização de taxonomias/UTMs; ajuste de idioma/segmentação em DSA como prioridade; extração de UTMs das 5 contas concluída (CSV inviabilizou análise manual); ~70% das perdas de leilão por qualidade; consolidação de achados em documento único pro cliente."],
      ["09/09", "quarta", "Protótipo de relatório diário via Notion apresentado; reunião estratégica remarcada do dia 15 para o dia 30; transição de gestão no cliente travando novos testes; Bruno Carlos enviaria hoje o 1º documento de findings para validação do Artur; sugestão de Omnibug para validar disparo de eventos."]
    ],
    proximos: [
      "Bruno Carlos entregar o 1º documento de resumo de findings para validação do Artur (que repassa ao Filipe).",
      "Consolidar achados e quick wins em documento único para apresentação ao cliente.",
      "Destravar o eixo Vender e a conta Santander Financiamentos (8 auditorias a fazer), dependente de plano de mídia e orçamento a serem definidos com a nova gestão do cliente.",
      "Corrigir a configuração da campanha de App (CPC → ROAS) antes de qualquer operação nela.",
      "Concluir a padronização de taxonomia e manuais de UTM das contas primárias.",
      "Preparar de 3 a 5 mensagens-chave para a reunião executiva do dia 30.",
      "Investigar entrega dos e-mails de confirmação (Artur com Yuri) e o diagnóstico Firebase x Adjust."
    ]
  }
];

window.STATUS = STATUS;
