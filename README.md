# Status Executivo — Webmotors (Hotsite)

Hotsite de página única com os **status executivos diários** do projeto Webmotors
(Squad Adroq / ZMES). Um seletor de data no topo troca o dia exibido; o **dia mais
recente aparece por padrão**. Sobe no GitHub e faz deploy no Vercel sem build.

## Como funciona

- `index.html` — a página. Monta a tela dinamicamente e traz o dropdown de datas.
- `data.js` — a **base de dados**. Cada dia é um objeto no array `STATUS`.
- O site ordena os dias do mais recente para o mais antigo automaticamente. O primeiro
  (mais recente) é o default ao abrir.
- Cada dia tem um link direto via hash: `.../#2026-09-09` abre já naquela data — útil
  para mandar no Slack apontando para um dia específico.

```
/
├── index.html      # a página (dropdown + render dinâmico)
├── data.js         # a base de dados dos status  ← é só isso que você edita no dia a dia
├── vercel.json
├── README.md
└── .gitignore
```

## Publicar um novo status (fluxo diário)

Você **não mexe no HTML**. Só no `data.js`:

1. Gere o status do dia no chat ("Status do projeto — hoje").
2. Abra `data.js`, copie um bloco `{ ... }` inteiro e cole no **topo** do array `STATUS`
   (logo depois de `const STATUS = [`).
3. Edite os campos do bloco novo: `data` (AAAA-MM-DD), `dataBR`, `diaSemana`, `periodo`,
   `resumoCurto`, `sumario`, `auditorias` (concluido / andamento / afazer), `achados`,
   `dailies` e `proximos`.
4. Commit e push:
   ```bash
   git add data.js && git commit -m "status AAAA-MM-DD" && git push
   ```
   O Vercel republica sozinho. O novo dia já entra como "mais recente".

> Padrões do projeto: dados sempre do Notion (somente leitura); valores e números
> como inteiros, sem abreviação.

## Deploy no Vercel

Projeto estático, sem build step.

1. Suba o repositório no GitHub.
2. Em [vercel.com](https://vercel.com): **Add New → Project**, importe o repo.
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: `./`.
4. **Deploy**. Cada `git push` na branch principal republica.

### CLI (alternativa)
```bash
npm i -g vercel
vercel --prod
```

## Acesso

Páginas marcadas como `noindex` (fora de buscadores), mas o link é acessível a quem o
tiver. Para restringir: repositório privado + Password Protection do Vercel (plano pago).
