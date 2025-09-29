// Dados dos funcionários
const funcionariosData = [
  {
    "nome": "ARQUIMEDES JOSE DE OLIVEIRA",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC"
  },
  {
    "nome": "NILCE NEIDE ANDRADE SMITH",
    "cargo": "PEB-II",
    "setor": "DPAT"
  },
  {
    "nome": "MARINA LEONEL APARECIDA VERRONE",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DZEL"
  },
  {
    "nome": "MARIANA CRISTINA SIQUEIRA DE MELO",
    "cargo": "CHEFE DE DIVISÃO",
    "setor": "DZEL"
  },
  {
    "nome": "MARILENE GARCIA DE MEDEIROS",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/EFAPE"
  },
  {
    "nome": "MARA SILVIA RUZZA",
    "cargo": "COORDENADOR GERAL",
    "setor": "COGESPA"
  },
  {
    "nome": "RITA APARECIDA DA SILVA",
    "cargo": "",
    "setor": "COPROG"
  },
  {
    "nome": "RONALDO MARTINS",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DZEL"
  },
  {
    "nome": "NEUSA MARIA DE OLIVEIRA",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "LUCILENE MARIA NASCIMENTO CARDEAL",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DZEL"
  },
  {
    "nome": "SONIA DAS DORES DE OLIVEIRA",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/ ARMENIA"
  },
  {
    "nome": "ROSILDA CAVALCANTE DE OLIVEIRA",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DZEL/EFAPE"
  },
  {
    "nome": "SOLANGE APARECIDA ALVES CALDARA",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPAT"
  },
  {
    "nome": "JOSE RICARDO ZARANTONELLI",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/AROUCHE"
  },

  {
    "nome": "JUSSARA DE CAMARGO",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DZEL"
  },
  {
    "nome": "ALBERTO ZARDO ZILINSKAS",
    "cargo": "ASSISTENTE II",
    "setor": "DTRAN/ARMÊNIA"
  },
  {
    "nome": "DIONE LUIZ DOS SANTOS",
    "cargo": "ASSISTENTE TÉCNICO I",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "ELAINE CRISTINA DOS SANTOS",
    "cargo": "ASSISTENTE TÉCNICO I",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "ELAINE DE CAMPOS SALLES",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/EFAPE"
  },
  {
    "nome": "MARCIA GONÇALVES PEREIRA COLAZELLI",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPAT"
  },
  {
    "nome": "DARLENE ARAUJO DAMACIANO",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DTRAN/ARMÊNIA"
  },
  {
    "nome": "MARIA APARECIDA RAMOS GARCIA",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DZEL/ARMENIA"
  },
  {
    "nome": "KAREN PERMAGNANI PEREZ",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC/ ARMENIA"
  },
  {
    "nome": "ODAIR DE OLIVEIRA",
    "cargo": "ASSISTENTE II",
    "setor": "DGPDOC/AROUCHE"
  },
  {
    "nome": "LAIS RIBEIRO DO NASCIMENTO",
    "cargo": "AUXILIAR DE SERVIÇOS GERAIS",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "IARLY MIRANDA GAMA DANTAS",
    "cargo": "ASSISTENTE II",
    "setor": "DZEL"
  },
  {
    "nome": "EDEGARD CLEMENTE FILHO",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "RODRIGO TIAGO DE TOLEDO",
    "cargo": "EXECUTIVO PUBLICO",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "SHEILA DE OLIVEIRA COSTA",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "MARCIA CRISTINA GALLO",
    "cargo": "COORDENADOR",
    "setor": "COEX"
  },
  {
    "nome": "ROBERTO ANDRADE DE OLIVEIRA",
    "cargo": "CHEFE DE DIVISÃO",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "ROGERIO COSTELA DOS REIS FONSECA",
    "cargo": "ASSISTENTE III",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "MARIANA SILVA ADOLFO",
    "cargo": "ASSISTENTE TÉCNICO II",
    "setor": "DZEL"
  },
  {
    "nome": "RAUL ESTEVES RODRIGUES BRANCO",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "MARIA DA GLORIA MACHADO",
    "cargo": "OFICIAL ADMINISTRATIVO",
    "setor": "DPGDOC/ARMÊNIA"
  },
  {
    "nome": "JOSIMERE BARBOSA DE OLIVEIRA",
    "cargo": "ASSISTENTE IV",
    "setor": "DZEL"
  },
  {
    "nome": "MARIA SOFIA SANTOS DE OLIVEIRA",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC"
  },
  {
    "nome": "WESLEY CAVALCANTE DOS REIS",
    "cargo": "ASSISTENTE III",
    "setor": "DGPDOC/AROUCHE"
  },
  {
    "nome": "JULIA NASCIMENTO TOMAS",
    "cargo": "ASSISTENTE III",
    "setor": "COEX"
  },
  {
    "nome": "BRUNA CORDEIRO DA COSTA BARBOSA",
    "cargo": "ASSISTENTE III",
    "setor": "DPAT"
  },
  {
    "nome": "JOYCE CAROLINE SOUZA DA SILVA",
    "cargo": "ASSESSOR I",
    "setor": "DPGDOC/NUPROE"
  },
  {
    "nome": "HEMARTESON LEMOS MUNIZ",
    "cargo": "ASSESSOR ESPECIAL I",
    "setor": "COGESPA"
  },
  {
    "nome": "ERICA ALEXANDRA GIMENES ALVES",
    "cargo": "ASSISTENTE II",
    "setor": "DGPDOC/AROUCHE"
  },
  {
    "nome": "JOSE HENRIQUE CARMIGNANI NEVES",
    "cargo": "ASSISTENTE III",
    "setor": "DPAT"
  },
  {
    "nome": "WARLEY ALVES FERREIRA",
    "cargo": "CHEFE DE DEPARTAMENTO",
    "setor": "DPGDOC"
  },
  {
    "nome": "DANIELE IRACEMA DE AQUINO",
    "cargo": "ASSISTENTE III",
    "setor": "DPAT"
  },
  {
    "nome": "JANAINA AMARAL SOUZA",
    "cargo": "ASSESSOR I",
    "setor": "DPGDOC"
  },
  {
    "nome": "SURYA CAROLINE DA CRUZ VIEIRA SILVA",
    "cargo": "COORDENADOR",
    "setor": "COPROG"
  },
  {
    "nome": "BRUNO SOARES VARGAS",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC"
  },
  {
    "nome": "RAFAELLA SANTANA DA CONCEIÇÃO",
    "cargo": "ASSISTENTE III",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "LUCIENE MARIA DA CONCEIÇÃO FREIRE",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC/NUPROE"
  },
  {
    "nome": "BEATRIZ MARTINS PERES",
    "cargo": "ASSISTENTE III",
    "setor": "COPROG"
  },
    {
    "nome": "JAQUELINE SANTOS ZANCHETTA",
    "cargo": "ASSISTENTE III",
    "setor": "COPROG"
  },
  {
    "nome": "HENRIQUE ALVES CAMARGO",
    "cargo": "ASSISTENTE IV",
    "setor": "DZEL"
  },
  {
    "nome": "WELLINGTON HENRIQUE CAVALCANTE",
    "cargo": "ASSISTENTE III",
    "setor": "DTRAN/ARMENIA"
  },
  {
    "nome": "DANIEL FERREIRA CHAGAS",
    "cargo": "ASSISTENTE III",
    "setor": "DPAT"
  },
  {
    "nome": "JULIA REIS DA CRUZ",
    "cargo": "ASSISTENTE III",
    "setor": "DZEL"
  },
  {
    "nome": "EVELLYN CRUZ TRINDADE",
    "cargo": "ASSISTENTE III",
    "setor": "COPROG"
  },
  {
    "nome": "BRUNA ARAUJO DE ANDRADE",
    "cargo": "ASSISTENTE II",
    "setor": "DPGDOC/NUPROE"
  },
  {
    "nome": "ADRIANO DOS SANTOS CHAVES",
    "cargo": "ASSISTENTE II",
    "setor": "DZEL"
  }
];
