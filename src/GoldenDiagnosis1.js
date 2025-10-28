/*// ====================================
// 🌟 Golden Diagnosis – All-in-One (HTML, Paged.js & html2pdf)
// ====================================
// - 4-space indentation
// - Emoji section banners
// - Translations (PT/EN), About content
// - Phone country code masks + E.164
// - Postal code → address (ViaCEP / Zippopotam)
// - Paged.js print to PDF (export/print/share) + html2pdf save/share
// - Theme toggle + meta theme-color sync
// - Flashcards, autosave, header scroll effect, mobile menu
// - Exposes all legacy function names for your inline onclicks
// ====================================*/

/*// ====================================
// 🌍 I18N Dictionary and Utilities
// ====================================*/
const I18N = {
    pt: {
        titles: { form: 'Diagnóstico de Ouro', mentorship: 'Medicina Tradicional Chinesa' },
        footer: { confidential: 'Copyright © ' + new Date().getFullYear() + ' Maria Aparecida Pereira Santos | Diagnóstico de Ouro - Medicina Tradicional Chinesa' },
        ui: {
            about: 'Sobre',
            aboutAnamnesis: 'O que é Anamnese',
            fillForm: 'Formulário',
            btnPrint: 'Imprimir',
            btnPDF: 'Salvar PDF',
            btnWhatsApp: 'Enviar WhatsApp',
            btnLang: 'EN',
            btnLangPT: 'PT',
            resetForm: 'Reiniciar Formulário',
            darkMode: 'Modo Escuro',
            lightMode: 'Modo Claro',
            btnPreview:'Pré-visualizar'
        },
        toasts: {
            pdfDownloadedAndOpeningWhatsapp: 'PDF baixado. Abrindo WhatsApp...',
            printReady: 'Pronto para imprimir!',
            generatingPDF: 'Gerando PDF...',
            pdfSaved: 'PDF salvo! Verifique seus downloads.',
            shared: 'Compartilhado!',
            saved: 'Dados salvos!',
            generatingPreview: 'Gerando pré-visualização...'
        },
        errors: {
            pdfFailed: 'Falha ao gerar PDF. Tente novamente em alguns segundos.',
            shareFailed: 'Falha ao compartilhar. Baixando PDF...',
            html2canvasError: 'Erro na renderização, tente novamente.',
            jsPDFError: 'Erro na geração do PDF, verifique os dados preenchidos.',
            networkError: 'Erro de conexão. Verifique sua internet.',
            noDataToExport: 'Preencha pelo menos uma seção antes de exportar.',
            libraryNotLoaded: 'Biblioteca de PDF não carregada. Recarregue a página.',
            printFailed: 'Falha ao imprimir.',
            exportFailed: 'Falha na exportação.'
        },
        share: { message: 'Segue a ficha de anamnese do(a) ${name}.' },
        menuTitle: 'Menu de Navegação',
        alertResetConfirm: 'Tem certeza que deseja reiniciar o formulário? Todos os dados serão perdidos.',
        labels: {
            generatedOn: 'Gerado em',
            patient: 'Paciente',

            // Dados Gerais
            date: 'Data',
            treatmentDate: 'Data de Início do Tratamento',
            formNumber: 'Número do Formulário',
            therapistName: 'Nome do Terapeuta',
            patientName: 'Nome do Paciente',
            address: 'Endereço',
            profession: 'Profissão',
            maritalStatus: 'Estado Civil',
            birthDate: 'Data de Nascimento (Idade)',
            referral: 'Indicação',
            phone: 'Telefone',
            email: 'Email',
            country: 'País',
            zip: 'CEP',
            selectCountry: 'Selecione o país',
            zipHintBR: 'Digite o CEP (#####-###)',
            phoneHintBR: 'Telefone (com DDD)',

            // Seções
            sweat: 'Sudorese',
            thirst: 'Sede',
            appetite: 'Fome & Digestão',

            // Queixa Principal
            onsetPain: 'Início',
            painLocation: 'Localização da dor',
            associatedFactors: 'Fatores associados',
            painIntensity: 'Intensidade (0–10)',
            painFrequency: 'Frequência',
            painCharacteristics: 'Características',
            improveWorsen: 'O que melhora ou piora?',
            accompanyingSymptoms: 'Sintomas acompanhantes',
            painObservations: 'Observações',

            // Termorregulação
            feelsColdHot: 'Sente mais frio ou calor?',
            normalTemperature: 'Normal',
            preferSeason: 'Prefere verão ou inverno?',
            preferDrinks: 'Prefere bebidas quentes ou frias?',
            severeCold: 'Tipo 1. Frio intenso',
            yangDeficiency: 'Tipo 2. Deficiência de Yang Qi',
            feverChills: 'Tipo 1. Febre com calafrios',
            strongChills: 'Calafrios intensos e febre leve',
            mildChills: 'Calafrios leves e febre alta',
            feverNoChills: 'Tipo 2. Febre sem calafrios',
            wavyFever: 'a) Febre oscilante',
            severeFever: 'b) Febre intensa – sinais de infecção',
            lowFever: 'Tipo 3. Febre baixa (Deficiência de Qi)',
            excessiveHeat: 'Tipo 4. Calor excessivo sem febre',
            temperatureObservations: 'Observações',

            // Sudorese
            normalSweat: 'Sua normalmente',
            anhidrosisType1: 'Tipo 1. Lesão de Fluidos Corporais',
            anhidrosisType2: 'Tipo 2. Por Vento-Frio',
            hyperhidrosisType1: 'Tipo 1. Exógena: por fator climático',
            hyperhidrosisType2: 'Tipo 2. Endógena: Espontânea (Deficiência de Qi)',
            hyperhidrosisType3: 'Tipo 2. Endógena: Noturna (Deficiência de Yin)',
            hyperhidrosisType4: 'Tipo 2. Endógena: Profusa (Por Excesso/Deficiência)',
            halfBody: 'Em metade do corpo: (Vento-Fleuma ou Vento-Umidade – AVC)',
            chest: 'No peito: (Deficiência de Qi do Coração e Baço)',
            head: 'Na cabeça ou cervical: (Invasão de Calor Patogênico)',
            palms: 'Palmas e plantas: (Deficiência de Yin)',
            sweatObservations: 'Observações',

            // Sede
            normalThirst: 'Normal',
            thirstType1: 'Tipo 1. Ausência de sede: (Frio, Umidade, Deficiência de Qi)',
            thirstType2a: 'a) Boca seca, mas não ingere: (Deficiência de Yin)',
            thirstType2b: 'b) Sente sede, mas bebe pouco: (Calor/Umidade)',
            thirstType2c: 'c) Sente sede e bebe quente: (Acúmulo de Fleuma)',
            thirstType2d: 'd) Sente sede, bochecha e não engole: (Estagnação de Sangue)',
            thirstType3a: 'a) Sede e prefere frio: (Calor Excessivo)',
            thirstType3b: 'b) Sede + Poliúria e Polifagia: (Xiao Ke – Diabetes)',
            thirstType3c: 'c) Sede e polidipsia excessiva: (Lesão de Fluidos)',
            thirstObservations: 'Observações',

            // Fome & Digestão
            normalHunger: 'Normal',
            hungerType1a: 'a) Pouco apetite: (Deficiência de Qi do Baço/Estômago)',
            hungerType1b: 'b) Com plenitude abdominal: (Umidade Patogênica – Baço)',
            hungerType1c: 'c) Aversão a gorduras: (Calor-Umidade – Fígado/VB)',
            hungerType1d: 'd) Repugnância alimentar: (Retenção de Alimento)',
            hungerType2a: 'a) Fogo de Estômago hiperativo',
            hungerType2b: 'b) Estômago forte e Baço fraco',
            hungerType3: 'Tipo 3. Fome sem Polifagia: Deficiência de Yin do Estômago',
            hungerObservations: 'Observações',

            // Micção
            urinationDetails: 'Detalhes da Micção',
            urinationFrequency: 'Frequência',
            frequentUrination: 'Micção frequente',
            painfulUrination: 'Micção dolorosa',
            urineColor: 'Mudanças de cor',
            urineVolume: 'Mudanças de volume',
            urineSensations: 'Sensações (ardor, etc.)',
            urinationObservations: 'Observações',

            // Evacuações
            bowelDetails: 'Detalhes das Evacuações',
            bowelColor: 'Cor',
            bowelVolume: 'Volume',
            bowelSmell: 'Odor',
            bowelTexture: 'Textura',
            bowelFrequency: 'Frequência',
            constipation: 'Prisão de ventre',
            diarrhea: 'Diarreia',
            bowelObservations: 'Observações',

            // Sono
            sleepDetails: 'Detalhes do Sono',
            insomniaType1: 'Dificuldade para adormecer',
            insomniaType2: 'Acordar frequentemente',
            insomniaType3: 'Acordar cedo',
            insomniaType4: 'Sono inquieto',
            insomniaType5: 'Sono perturbado por sonhos',
            insomniaType6: 'Incapacidade de dormir',
            sleepinessType1: 'Sonolência diurna excessiva',
            sleepinessType2: 'Sonolência após comer',
            sleepinessType3: 'Fadiga constante',
            sleepinessType4: 'Sintomas tipo narcolepsia',
            sleepObservations: 'Observações',

            // Emoções
            emotionsDetails: 'Detalhes das Emoções',
            predominantEmotion: 'Emoção Predominante',
            intenseEmotion: 'Período de Emoção Intensa',
            emotionsObservations: 'Observações',

            // Reprodutiva
            reproductiveHealthDetails: 'Detalhes da Saúde Reprodutiva',
            female: 'Feminino',
            male: 'Masculino',
            menstruation: 'Menstruação',
            menstruationRegularity: 'Regularidade',
            menstruationVolume: 'Volume',
            menstruationCramps: 'Cólicas',
            menstruationAbsence: 'Ausência',
            menstruationPMS: 'TPM',
            femaleObservations: 'Observações',
            maleReproductive: 'Reprodutivo Masculino',
            maleFertility: 'Fertilidade',
            maleLibido: 'Libido',
            maleFrequency: 'Frequência Sexual',
            maleObservations: 'Observações',

            // Pulso
            pulseDetails: 'Detalhes do Pulso',
            pulseTypeFloating: 'Flutuante',
            pulseTypeSinking: 'Submerso',
            pulseTypeSlow: 'Lento',
            pulseTypeRapid: 'Rápido',
            pulseTypeWeak: 'Fraco',
            pulseTypeStrong: 'Forte',
            pulseDepth: 'Profundidade',
            pulseSpeed: 'Velocidade',
            pulseObservations: 'Observações',

            // Língua
            tongueDetails: 'Detalhes da Língua',
            tongueVitality: 'Vitalidade',
            tongueColor: 'Cor',
            tongueShape: 'Forma',
            tongueMovement: 'Movimento',
            coating: 'Saburra',
            coatingThick: 'Espessa',
            coatingThin: 'Fina',
            coatingWhite: 'Branca',
            coatingYellow: 'Amarela',
            coatingRooted: 'Enraizada',
            coatingRootless: 'Sem raízes',
            tongueObservations: 'Observações',
            // Shared
            patientInfo: 'Informações do Paciente',
            whenStarted: 'Quando começou?',
            intensityScale: 'Escala de 0 a 10',
            toleratesPressure: 'Dor tolera pressão?',
            coldAnalysis: 'Análise de Frio',
            heatAnalysis: 'Análise de Calor',
            anhidrosis: 'Anidrose',
            hyperhidrosis: 'Hiperidrose',
            bodyRegions: 'Regiões do Corpo',
            absenceOfThirst: 'Ausência de Sede',
            thirstWithoutPolidipsia: 'Sede sem Polidipsia',
            thirstWithPolidipsia: 'Sede com Polidipsia',
            anorexia: 'Anorexia',
            hungerWithPolifagia: 'Fome com Polifagia',
            hungerWithoutPolifagia: 'Fome sem Polifagia',
            howOften: 'Com que frequência?',
            types: 'Tipos',
            urineColorChanges: 'Mudanças de cor',
            urineVolumeChanges: 'Mudanças de volume',
            describeColor: 'Descreva a cor',
            odor: 'Odor',
            texture: 'Textura',
            insomniaTypes: 'Tipos de Insônia',
            sleepinessTypes: 'Tipos de Sonolência',
            mainEmotion: 'Emoção principal',
            intensePeriod: 'Período intenso',
            regularOrIrregular: 'Regular ou irregular?',
            abundantOrLight: 'Abundante ou leve?',
            crampsSeverity: 'Severidade das cólicas',
            missedPeriods: 'Períodos ausentes',
            pmsSymptoms: 'Sintomas de TPM',
            anyIssues: 'Algum problema?',
            libidoLevel: 'Nível de libido',
            superficialOrDeep: 'Superficial ou profundo?',
            ratePerMinute: 'Taxa por minuto',
            vitalOrWithered: 'Vital ou murcha?',
            paleRedPurple: 'Pálida, vermelha, púrpura?',
            swollenThin: 'Inchada ou fina?',
            tremblingDeviated: 'Tremendo ou desviada?',
            thick: 'Espessa',
            thin: 'Fina',
            white: 'Branca',
            yellow: 'Amarela',
            rooted: 'Enraizada',
            rootless: 'Sem raízes',
            observations: 'Observações'
        },
        sections: {
            general: 'Dados Gerais',
            complaint: 'Queixa Principal',
            thermo: 'Análise de Frio/Calor',
            sweat: 'Sudorese',
            thirst: 'Sede',
            appetite: 'Fome & Digestão',
            urination: 'Micção',
            bowel: 'Evacuações',
            sleep: 'Sono',
            emotions: 'Emoções',
            reproductive: 'Saúde Reprodutiva',
            pulse: 'Pulso',
            tongue: 'Língua'
        },
        about: {
            headingMaria: 'Quem é Maria?',
            headingPurpose: 'Para que serve este documento?',
            headingMission: 'Missão de Maria',
            name: 'Nome:',
            profession: 'Profissão:',
            specialization: 'Especialização:',
            experience: 'Experiência:',
            philosophy: 'Filosofia:'
        },
        maria: {
            name: 'Maria Aparecida Pereira Santos',
            profession: 'Terapeuta Holística | Especialista em Medicina Tradicional Chinesa 🌿',
            specialization: 'Diagnóstico Energético, Acupuntura, Fitoterapia Chinesa e Nutrição Funcional.',
            experience: 'Com profundo conhecimento em práticas naturais e terapias orientais, Maria ajuda pessoas a encontrarem equilíbrio e bem-estar com abordagem holística e personalizada.',
            philosophy: 'Cuidado integral, corpo, mente e espírito. Empatia, sabedoria ancestral e compromisso com a saúde plena.'
        },
        pdf: { 
            label: 'Campo', 
            value: 'Valor' 
        },
        preview: {
            title: 'Pré-visualização do Documento',
            edit: 'Editar',
            savePdf: 'Salvar PDF',
            print: 'Imprimir'
        },        
        purpose: {
            identify: {
                title: 'Identificar padrões de desequilíbrio no corpo:',
                point1: 'Analisa sintomas como frio/calor, suor, sede, apetite, micção, evacuação, sono e emoções.',
                point2: 'Observa sinais físicos como cor facial, língua, pulso e constituição corporal.'
            },
            classify: {
                title: 'Classificar os tipos de doenças segundo a MTC:',
                point1: 'Diferencia entre excesso (shi) e deficiência (xu).',
                point2: 'Relaciona órgãos e meridianos envolvidos.',
                point3: 'Análise Yin–Yang e Qi–Sangue/Fleuma.'
            },
            guide: {
                title: 'Guiar o tratamento:',
                point1: 'Plano terapêutico com acupuntura, fitoterapia, ajustes alimentares e orientações emocionais.'
            }
        },
        mission: {
            quote: 'Restabelecer o equilíbrio natural do corpo com diagnóstico preciso e tratamento personalizado.',
            body: 'Com esta ficha, Maria busca a causa raiz das enfermidades, promovendo cura real e duradoura.'
        }
    },
    en: {
        titles: { form: 'Golden Diagnosis', mentorship: 'Traditional Chinese Medicine' },
        footer: { confidential: 'Copyright © ' + new Date().getFullYear() + ' Maria Aparecida Pereira Santos | Golden Diagnosis - Traditional Chinese Medicine' },
        ui: {
            about: 'About',
            aboutAnamnesis: 'What is Anamnesis',
            fillForm: 'Form',
            btnPrint: 'Print',
            btnPDF: 'Save PDF',
            btnWhatsApp: 'Send WhatsApp',
            btnLang: 'PT',
            btnLangPT: 'EN',
            resetForm: 'Reset Form',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode',
            btnPreview:'Preview'
        },
        toasts: {
            pdfDownloadedAndOpeningWhatsapp: 'PDF downloaded. Opening WhatsApp...',
            printReady: 'Print Ready!',
            generatingPDF: 'Generating PDF...',
            pdfSaved: 'PDF saved! Check your downloads.',
            shared: 'Shared!',
            saved: 'Data saved!',
            generatingPreview: 'Generating preview...'
        },
        errors: {
            pdfFailed: 'Failed to generate PDF. Please try again.',
            shareFailed: 'Failed to share. Downloading PDF...',
            html2canvasError: 'Rendering error, please try again.',
            jsPDFError: 'PDF generation error, please check form data.',
            networkError: 'Connection error. Check your internet.',
            noDataToExport: 'Fill at least one section before exporting.',
            libraryNotLoaded: 'PDF library not loaded. Please reload the page.',
            printFailed: 'Print failed.',
            exportFailed: 'Export failed.'
        },
        share: { message: 'Here is the anamnesis form for ${name}.' },
        menuTitle: 'Navigation Menu',
        alertResetConfirm: 'Are you sure you want to reset the form? All data will be lost.',
        labels: {
            generatedOn: 'Generated on',
            patient: 'Patient',
            // General
            date: 'Date',
            treatmentDate: 'Treatment Start Date',
            formNumber: 'Form Number',
            therapistName: 'Therapist Name',
            patientName: 'Patient Name',
            address: 'Address',
            profession: 'Profession',
            maritalStatus: 'Marital Status',
            birthDate: 'Date of Birth (Age)',
            referral: 'Referral',
            phone: 'Phone',
            email: 'Email',
            country: 'Country',
            zip: 'ZIP / Postal code',
            selectCountry: 'Select country',
            zipHintBR: 'Type the ZIP/Postal code',
            phoneHintBR: 'Phone (with area code)',

            // Headings
            sweat: 'Sweating',
            thirst: 'Thirst',
            appetite: 'Appetite & Digestion',

            // Chief Complaint
            onsetPain: 'Onset',
            painLocation: 'Pain Location',
            associatedFactors: 'Associated Factors',
            painIntensity: 'Intensity (0–10)',
            painFrequency: 'Frequency',
            painCharacteristics: 'Characteristics',
            improveWorsen: 'What improves or worsens?',
            accompanyingSymptoms: 'Accompanying Symptoms',
            painObservations: 'Notes',

            // Cold/Heat
            feelsColdHot: 'Feels more cold or heat?',
            normalTemperature: 'Normal',
            preferSeason: 'Prefers summer or winter?',
            preferDrinks: 'Prefers hot or cold drinks?',
            severeCold: 'Type 1. Severe Cold',
            yangDeficiency: 'Type 2. Yang Qi Deficiency',
            feverChills: 'Type 1. Fever with chills',
            strongChills: 'Strong chills and mild fever',
            mildChills: 'Mild chills and high fever',
            feverNoChills: 'Type 2. Fever without chills',
            wavyFever: 'a) Wavy fever',
            severeFever: 'b) Severe fever – signs of infection',
            lowFever: 'Type 3. Low-grade fever (Qi Deficiency)',
            excessiveHeat: 'Type 4. Excessive heat without fever',
            temperatureObservations: 'Notes',

            // Sweating
            normalSweat: 'Sweats normally',
            anhidrosisType1: 'Type 1. Body Fluid Injury',
            anhidrosisType2: 'Type 2. Due to Wind–Cold',
            hyperhidrosisType1: 'Type 1. Exogenous: climatic factor',
            hyperhidrosisType2: 'Type 2. Endogenous: Spontaneous (Qi Deficiency)',
            hyperhidrosisType3: 'Type 2. Endogenous: Night Sweats (Yin Deficiency)',
            hyperhidrosisType4: 'Type 2. Endogenous: Profuse (Excess/Deficiency)',
            halfBody: 'On one side of the body: (Wind–Phlegm or Wind–Damp – Stroke)',
            chest: 'Chest: (Heart/Spleen Qi Deficiency)',
            head: 'Head/neck: (Invasion of Pathogenic Heat)',
            palms: 'Palms and soles: (Yin Deficiency)',
            sweatObservations: 'Notes',

            // Thirst
            normalThirst: 'Normal',
            thirstType1: 'Type 1. No thirst: (Cold, Dampness, Qi Deficiency)',
            thirstType2a: 'a) Dry mouth but does not drink: (Yin Deficiency)',
            thirstType2b: 'b) Feels thirsty but drinks little: (Damp–Heat)',
            thirstType2c: 'c) Feels thirsty and prefers warm drinks: (Phlegm Accumulation)',
            thirstType2d: 'd) Feels thirsty, swishes and does not swallow: (Blood Stagnation)',
            thirstType3a: 'a) Thirst and prefers cold drinks: (Excess Heat)',
            thirstType3b: 'b) Thirst + polyuria and polyphagia: (Xiao Ke – Diabetes Mellitus)',
            thirstType3c: 'c) Thirst with excessive polydipsia: (Fluid Injury)',
            thirstObservations: 'Notes',

            // Appetite & Digestion
            normalHunger: 'Normal',
            hungerType1a: 'a) Low appetite: (Spleen/Stomach Qi Deficiency)',
            hungerType1b: 'b) With abdominal fullness: (Pathogenic Dampness – Spleen)',
            hungerType1c: 'c) Aversion to greasy food: (Damp–Heat – Liver/Gallbladder)',
            hungerType1d: 'd) Food repugnance: (Food Retention – Stomach/Intestine)',
            hungerType2a: 'a) Stomach Fire hyperactivity',
            hungerType2b: 'b) Strong Stomach and Weak Spleen',
            hungerType3: 'Type 3. Hunger without Polyphagia: Stomach Yin Deficiency',
            hungerObservations: 'Notes',

            // Urination
            urinationDetails: 'Urination Details',
            urinationFrequency: 'Frequency',
            frequentUrination: 'Frequent urination',
            painfulUrination: 'Painful urination',
            urineColor: 'Color changes',
            urineVolume: 'Volume changes',
            urineSensations: 'Sensations (burning, etc.)',
            urinationObservations: 'Notes',

            // Bowel
            bowelDetails: 'Bowel Details',
            bowelColor: 'Color',
            bowelVolume: 'Volume',
            bowelSmell: 'Odor',
            bowelTexture: 'Texture',
            bowelFrequency: 'Frequency',
            constipation: 'Constipation',
            diarrhea: 'Diarrhea',
            bowelObservations: 'Notes',

            // Sleep
            sleepDetails: 'Sleep Details',
            insomniaType1: 'Difficulty falling asleep',
            insomniaType2: 'Frequent awakenings',
            insomniaType3: 'Early awakening',
            insomniaType4: 'Restless sleep',
            insomniaType5: 'Dream-disturbed sleep',
            insomniaType6: 'Inability to sleep',
            sleepinessType1: 'Excessive daytime sleepiness',
            sleepinessType2: 'Sleepiness after meals',
            sleepinessType3: 'Constant fatigue',
            sleepinessType4: 'Narcolepsy-like symptoms',
            sleepObservations: 'Notes',

            // Emotions
            emotionsDetails: 'Emotions Details',
            predominantEmotion: 'Predominant Emotion',
            intenseEmotion: 'Period of intense emotion',
            emotionsObservations: 'Notes',

            // Reproductive
            reproductiveHealthDetails: 'Reproductive Health Details',
            female: 'Female',
            male: 'Male',
            menstruation: 'Menstruation',
            menstruationRegularity: 'Regularity',
            menstruationVolume: 'Volume',
            menstruationCramps: 'Cramps',
            menstruationAbsence: 'Absence (missed periods)',
            menstruationPMS: 'PMS symptoms',
            femaleObservations: 'Notes',
            maleReproductive: 'Male Reproductive',
            maleFertility: 'Fertility',
            maleLibido: 'Libido',
            maleFrequency: 'Sexual Frequency',
            maleObservations: 'Notes',

            // Pulse
            pulseDetails: 'Pulse Details',
            pulseTypeFloating: 'Floating',
            pulseTypeSinking: 'Sinking',
            pulseTypeSlow: 'Slow',
            pulseTypeRapid: 'Rapid',
            pulseTypeWeak: 'Weak',
            pulseTypeStrong: 'Strong',
            pulseDepth: 'Depth',
            pulseSpeed: 'Rate',
            pulseObservations: 'Notes',

            // Tongue
            tongueDetails: 'Tongue Details',
            tongueVitality: 'Vitality',
            tongueColor: 'Color',
            tongueShape: 'Shape',
            tongueMovement: 'Movement',
            coating: 'Coating',
            coatingThick: 'Thick',
            coatingThin: 'Thin',
            coatingWhite: 'White',
            coatingYellow: 'Yellow',
            coatingRooted: 'Rooted',
            coatingRootless: 'Rootless',
            tongueObservations: 'Notes',
            // Shared
            patientInfo: 'Patient Information',
            whenStarted: 'When did it start?',
            intensityScale: 'Scale from 0 to 10',
            toleratesPressure: 'Does the pain tolerate pressure?',
            coldAnalysis: 'Cold Analysis',
            heatAnalysis: 'Heat Analysis',
            anhidrosis: 'Anidrosis',
            hyperhidrosis: 'Hyperhidrosis',
            bodyRegions: 'Body Regions',
            absenceOfThirst: 'Absence of Thirst',
            thirstWithoutPolidipsia: 'Thirst without Polydipsia',
            thirstWithPolidipsia: 'Thirst with Polydipsia',
            anorexia: 'Anorexia',
            hungerWithPolifagia: 'Hunger with Polyphagia',
            hungerWithoutPolifagia: 'Hunger without Polyphagia',
            howOften: 'How often?',
            types: 'Types',
            urineColorChanges: 'Color changes',
            urineVolumeChanges: 'Volume changes',
            describeColor: 'Describe the color',
            odor: 'Odor',
            texture: 'Texture',
            insomniaTypes: 'Types of Insomnia',
            sleepinessTypes: 'Types of Sleepiness',
            mainEmotion: 'Main emotion',
            intensePeriod: 'Intense period',
            regularOrIrregular: 'Regular or irregular?',
            abundantOrLight: 'Abundant or light?',
            crampsSeverity: 'Cramps severity',
            missedPeriods: 'Missed periods',
            pmsSymptoms: 'PMS symptoms',
            anyIssues: 'Any issues?',
            libidoLevel: 'Libido level',
            superficialOrDeep: 'Superficial or deep?',
            ratePerMinute: 'Rate per minute',
            vitalOrWithered: 'Vital or withered?',
            paleRedPurple: 'Pale, red, purple?',
            swollenThin: 'Swollen or thin?',
            tremblingDeviated: 'Trembling or deviated?',
            thick: 'Thick',
            thin: 'Thin',
            white: 'White',
            yellow: 'Yellow',
            rooted: 'Rooted',
            rootless: 'Rootless',
            observations: 'Notes'
        },
        sections: {
            general: 'General Data',
            complaint: 'Chief Complaint',
            thermo: 'Cold/Heat Analysis',
            sweat: 'Sweating',
            thirst: 'Thirst',
            appetite: 'Appetite & Digestion',
            urination: 'Urination',
            bowel: 'Bowel Movements',
            sleep: 'Sleep',
            emotions: 'Emotions',
            reproductive: 'Reproductive Health',
            pulse: 'Pulse',
            tongue: 'Tongue'
        },
        about: {
            headingMaria: 'Who is Maria?',
            headingPurpose: 'What is this document for?',
            headingMission: 'Maria\'s Mission',
            name: 'Name:',
            profession: 'Profession:',
            specialization: 'Specialization:',
            experience: 'Experience:',
            philosophy: 'Philosophy:'
        },
        maria: {
            name: 'Maria Aparecida Pereira Santos',
            profession: 'Holistic Therapist | Traditional Chinese Medicine Specialist 🌿',
            specialization: 'Energy Diagnosis, Acupuncture, Chinese Phytotherapy and Functional Nutrition.',
            experience: 'With deep knowledge in natural practices and oriental therapies, Maria helps people find balance and well-being with a holistic and personalized approach.',
            philosophy: 'Integral care, body, mind and spirit. Empathy, ancestral wisdom and commitment to full health.'
        },
        pdf: { 
            label: 'Label', 
            value: 'Value'
        },        
        preview: {
            title: 'Document Preview',
            edit: 'Edit',
            savePdf: 'Save PDF',
            print: 'Print'
        },
        purpose: {
            identify: {
                title: 'Identify patterns of imbalance in the body:',
                point1: 'Analyzes symptoms such as cold/heat, sweat, thirst, appetite, urination, bowel, sleep and emotions.',
                point2: 'Observes physical signs such as facial color, tongue, pulse and body constitution.'
            },
            classify: {
                title: 'Classify types of diseases according to TCM:',
                point1: 'Differentiates between excess (shi) and deficiency (xu).',
                point2: 'Relates involved organs and meridians.',
                point3: 'Yin–Yang and Qi–Blood/Phlegm analysis.'
            },
            guide: {
                title: 'Guide the treatment:',
                point1: 'Therapeutic plan with acupuncture, phytotherapy, dietary adjustments and emotional guidance.'
            }
        },
        mission: {
            quote: 'Restore the natural balance of the body with precise diagnosis and personalized treatment.',
            body: 'With this form, Maria seeks the root cause of illnesses, promoting real and lasting healing.'
        }
    }
};

function t(key, params = {}) {
    const seg = key.split('.').reduce((o, p) => o?.[p], I18N[currentLanguage] || I18N.pt);
    if (typeof seg === 'string') return seg.replace(/\$\{(\w+)\}/g, (_, m) => params[m] ?? '');
    return key;
}

function escapeHTML(s) {
    /*// ------------------------------------
    // 🔒 Escape unsafe HTML without extra spaces in entities
    // ------------------------------------*/
    if (!s && s !== 0) return '';
    return String(s).replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[m]));
}

/*// ====================================
// 🗂️ Section Definitions (flashcards + export mapping)
// ====================================*/
const SECTIONS = [
    { id: 'general', title: (lang) => I18N[lang].sections.general, inputs: ['date','treatmentDate','formNumber','therapistName','patientName','address','profession','maritalStatus','birthDate','referral','country','phone','email','zip'] },
    { id: 'complaint', title: (lang) => I18N[lang].sections.complaint, inputs: ['onsetPain','painLocation','associatedFactors','painIntensity','painFrequency','painCharacteristics','improveWorsen','accompanyingSymptoms','painObservations'] },
    { id: 'thermo', title: (lang) => I18N[lang].sections.thermo, inputs: ['feelsColdHot','normalTemperature','preferSeason','preferDrinks','severeCold','yangDeficiency','feverChills','strongChills','mildChills','feverNoChills','wavyFever','severeFever','lowFever','excessiveHeat','temperatureObservations'] },
    { id: 'sweat', title: (lang) => I18N[lang].sections.sweat, inputs: ['normalSweat','anhidrosisType1','anhidrosisType2','hyperhidrosisType1','hyperhidrosisType2','hyperhidrosisType3','hyperhidrosisType4','halfBody','chest','head','palms','sweatObservations'] },
    { id: 'thirst', title: (lang) => I18N[lang].sections.thirst, inputs: ['normalThirst','thirstType1','thirstType2a','thirstType2b','thirstType2c','thirstType2d','thirstType3a','thirstType3b','thirstType3c','thirstObservations'] },
    { id: 'appetite', title: (lang) => I18N[lang].sections.appetite, inputs: ['normalHunger','hungerType1a','hungerType1b','hungerType1c','hungerType1d','hungerType2a','hungerType2b','hungerType3','hungerObservations'] },
    { id: 'urination', title: (lang) => I18N[lang].sections.urination, inputs: ['urinationFrequency','frequentUrination','painfulUrination','urineColor','urineVolume','urineSensations','urinationObservations'] },
    { id: 'bowel', title: (lang) => I18N[lang].sections.bowel, inputs: ['bowelColor','bowelVolume','bowelSmell','bowelTexture','bowelFrequency','constipation','diarrhea','bowelObservations'] },
    { id: 'sleep', title: (lang) => I18N[lang].sections.sleep, inputs: ['insomniaType1','insomniaType2','insomniaType3','insomniaType4','insomniaType5','insomniaType6','sleepinessType1','sleepinessType2','sleepinessType3','sleepinessType4','sleepObservations'] },
    { id: 'emotions', title: (lang) => I18N[lang].sections.emotions, inputs: ['predominantEmotion','intenseEmotion','emotionsObservations'] },
    { id: 'reproductive', title: (lang) => I18N[lang].sections.reproductive, inputs: ['menstruationRegularity','menstruationVolume','menstruationCramps','menstruationAbsence','menstruationPMS','femaleObservations','maleFertility','maleLibido','maleFrequency','maleObservations'] },
    { id: 'pulse', title: (lang) => I18N[lang].sections.pulse, inputs: ['pulseTypeFloating','pulseTypeSinking','pulseTypeSlow','pulseTypeRapid','pulseTypeWeak','pulseTypeStrong','pulseDepth','pulseSpeed','pulseObservations'] },
    { id: 'tongue', title: (lang) => I18N[lang].sections.tongue, inputs: ['tongueVitality','tongueColor','tongueShape','tongueMovement','coatingThick','coatingThin','coatingWhite','coatingYellow','coatingRooted','coatingRootless','tongueObservations'] }
];

/*// ====================================
// 🧠 Global State + DOM helpers
// ====================================*/
let currentLanguage = 'pt';
const STORAGE_KEY = 'goldenDiagnosisFormData';
const LANG_KEY = 'maria.lang';
const THEME_KEY = 'maria.theme';
const VIEWMODE_KEY = 'maria.viewmode';
const RESET_ONCE_KEY = 'maria.reset_once_session';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/*// ====================================
// 🎨 Shared Palette + UI Styles (checkboxes, scrollbars, language badges)
// ====================================*/
function ensureThemedUIStyles() {
    if (document.getElementById('gd-themed-styles')) return;

    const s = document.createElement('style');
    s.id = 'gd-themed-styles';
    s.textContent = `
        :root {
            --jade: #00a86b;
            --jade-light: #7fdbca;
            --jade-dark: #006b4d;
            --gold: #D4AF37;
            --gold-light: #FFE57E;
            --red: #C62a2a;
            --text-dark: #2C3E50;
            --text-light: #F8F9FA;
            --sudden: #ffffff;
            --shadow: rgba(0,0,0,0.1);
            --smoke-bg: rgba(0,0,0,0.05);
            --overlay-bg: rgba(0,0,0,0.6);
            --bamboo: #7d5d3b;
            --bamboo-light: #A88E6D;
            --theme-color-light: #D4AF37;
            --theme-color-dark: #006b4d;
            --surface: #ffffff;
        }

        /* Modal / menu helpers */
        body.no-scroll {
            overflow: hidden;
        }

        /* ✅ Consistent checkbox reset (prevents native UI vs custom mismatch) */
        input[type="checkbox"] {
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            display: inline-grid;
            place-content: center;
            margin: 0;
            line-height: 1;
            vertical-align: middle;
            border-radius: 4px;
            position: relative;
            transition: .15s all;
            --cb-size: 24px;
            width: var(--cb-size);
            height: var(--cb-size);
        }
        body:not(.dark-mode) input[type="checkbox"] {
            border: 2px solid var(--jade);
            background: #fff;
        }
        body:not(.dark-mode) input[type="checkbox"]:checked {
            background: var(--jade);
            border-color: var(--jade);
        }
        body:not(.dark-mode) input[type="checkbox"]:checked::after {
            content: "\\2713";
            font-size: 16px;
            font-weight: 800;
            line-height: 1;
            color: #fff;
            position: absolute;
            left: 3px;
            top: -2px;
        }
        body.dark-mode input[type="checkbox"] {
            border: 2px solid var(--jade-light);
            background: var(--text-dark);
        }
        body.dark-mode input[type="checkbox"]:checked {
            background: var(--jade-light);
            border-color: var(--jade-light);
        }
        body.dark-mode input[type="checkbox"]:checked::after {
            content: "\\2713";
            font-size: 16px;
            font-weight: 900;
            line-height: 1;
            color: var(--text-dark);
            position: absolute;
            left: 3px;
            top: -2px;
        }
        @media (max-width: 768px) {
            input[type="checkbox"] { --cb-size: 28px; }
            /* ✅ Column layout for smartphone */
            .checkbox-group { flex-direction: column !important; gap: 10px !important; }
        }
        @media (max-width: 480px) {
            input[type="checkbox"] { --cb-size: 20px; }
            .checkbox-group { flex-direction: column !important; gap: 8px !important; }
        }

        /* Lang selector chips (mobile & desktop) */
        .lang-option {
            display: inline-flex;
            align-items: center;
            gap: .35rem;
            padding: .35rem .6rem;
            border: 1px solid transparent;
            border-radius: 999px;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
            transition: .2s all;
        }
        .lang-option.active {
            background: var(--jade);
            border-color: var(--jade-dark);
            color: #fff;
            box-shadow: 0 2px 8px var(--shadow);
        }
        .lang-option.inactive {
            background: transparent;
            color: inherit;
            opacity: .65;
        }

        /* Gender toggle */
        .gender-toggle { display: flex; gap: .6rem; margin: .6rem 0 1rem; }
        .gender-toggle button {
            appearance: none;
            padding: .55rem .9rem;
            border-radius: 999px;
            border: 2px solid var(--jade);
            background: var(--surface);
            color: var(--text-dark);
            font-weight: 700;
            cursor: pointer;
            transition: .2s all;
        }
        .gender-toggle button:hover {
            background: var(--jade-light);
            border-color: var(--jade-dark);
            box-shadow: 0 2px 8px var(--shadow);
        }
        .gender-toggle button.active,
        .gender-toggle button[aria-pressed="true"] {
            background: var(--jade);
            color: #fff;
            border-color: var(--jade-dark);
        }
        body.dark-mode .gender-toggle button {
            background: var(--text-dark);
            color: var(--text-light);
            border-color: var(--jade-light);
        }
        body.dark-mode .gender-toggle button.active,
        body.dark-mode .gender-toggle button[aria-pressed="true"] {
            background: var(--jade-light);
            color: var(--text-dark);
            border-color: var(--jade);
        }

        /* Scrollbars — light theme */
        body:not(.dark-mode) { scrollbar-color: var(--jade) #f1f3f5; }
        body:not(.dark-mode) ::-webkit-scrollbar { width: 10px; height: 10px; background: #f1f3f5; }
        body:not(.dark-mode) ::-webkit-scrollbar-thumb { background: var(--jade); border-radius: 8px; border: 2px solid #fff; }
        body:not(.dark-mode) ::-webkit-scrollbar-thumb:hover { background: #0e8d5f; }
        body:not(.dark-mode) ::-webkit-scrollbar-track { background: #f1f3f5; }

        /* Scrollbars — dark theme */
        body.dark-mode { scrollbar-color: var(--jade-light) var(--text-dark); }
        body.dark-mode ::-webkit-scrollbar { width: 10px; height: 10px; background: var(--text-dark); }
        body.dark-mode ::-webkit-scrollbar-thumb { background: var(--jade-light); border-radius: 8px; border: 2px solid #1a2634; }
        body.dark-mode ::-webkit-scrollbar-thumb:hover { background: #a3ecd9; }
        body.dark-mode ::-webkit-scrollbar-track { background: var(--text-dark); }
    `;
    document.head.appendChild(s);
}

/*// ====================================
// 🔔 Toasts
// ====================================*/
function showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    // ✅ Accessibility
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast{position:fixed;top:20px;right:20px;padding:12px 20px;border-radius:8px;color:#fff;font-weight:600;z-index:10000;opacity:1;transition:all .3s ease;max-width:360px;word-wrap:break-word;box-shadow:0 4px 12px rgba(0,0,0,.3);backdrop-filter:blur(10px)}
            .toast.info{background:linear-gradient(135deg,#3b82f6,#1e40af)}
            .toast.success{background:linear-gradient(135deg,#10b981,#047857)}
            .toast.error{background:linear-gradient(135deg,#ef4444,#dc2626)}
            .toast.warning{background:linear-gradient(135deg,#f59e0b,#d97706)}
            @media (max-width: 768px){.toast{top:10px;right:10px;left:10px;max-width:none}}
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function disableButton(selector) {
    const btn = $(selector);
    if (!btn) return;
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.style.cursor = 'not-allowed';
    btn.style.pointerEvents = 'none';
    btn.dataset.originalText = btn.innerHTML;
}
function enableButton(selector) {
    const btn = $(selector);
    if (!btn) return;
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
    btn.style.pointerEvents = 'auto';
    if (btn.dataset.originalText) {
        btn.innerHTML = btn.dataset.originalText;
        delete btn.dataset.originalText;
    }
}

/*// ====================================
// 🌀 Yin–Yang Loader (overlay + anchored)
// ====================================*/
function ensureYinYangStyles() {
    if (document.querySelector('#yinYangStyles')) return;
    const s = document.createElement('style');
    s.id = 'yinYangStyles';
    s.textContent = `
        .yy-overlay{position:fixed;inset:0;background:rgba(17,24,39,.55);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:100000}
        .yy{width:84px;height:84px;border-radius:50%;position:relative;animation:yyspin 1.3s linear infinite;background:conic-gradient(#000 0 180deg,#fff 180deg 360deg)}
        .yy::before,.yy::after{content:"";position:absolute;border-radius:50%}
        .yy::before{width:42px;height:42px;left:21px;top:0;background:#000;box-shadow:0 42px 0 #fff}
        .yy::after{width:12px;height:12px;left:30px;top:15px;background:#fff;box-shadow:0 42px 0 #000}
        .yy-label{margin-top:14px;font-weight:700;color:#fff;text-align:center}
        @keyframes yyspin{to{transform:rotate(360deg)}}
        .yy-anchor{display:inline-flex;align-items:center;gap:8px}
        .yy-mini{width:18px;height:18px;border-radius:50%;position:relative;display:inline-block;animation:yyspin 1.1s linear infinite;background:conic-gradient(#000 0 180deg,#fff 180deg 360deg)}
        .yy-mini::before,.yy-mini::after{content:"";position:absolute;border-radius:50%}
        .yy-mini::before{width:9px;height:9px;left:4.5px;top:0;background:#000;box-shadow:0 9px 0 #fff}
        .yy-mini::after{width:4px;height:4px;left:7px;top:3px;background:#fff;box-shadow:0 9px 0 #000}
        .yy-fab{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
        .yy-fab .yy-mini{width:20px;height:20px}
        .yy-has-inline{position:relative}
    `;
    document.head.appendChild(s);
}
function showYinYangLoader(text, anchorSelector) {
    /*// ------------------------------------
    // ☯️ Show loader (overlay or anchored) without destroying button content
    // ------------------------------------*/
    ensureYinYangStyles();
    hideYinYangLoader();
    const anchor = anchorSelector ? document.querySelector(anchorSelector) : null;
    if (anchor) {
        anchor.classList.add('yy-has-inline');
        if (anchor.classList.contains('raform')) {
            if (!anchor.querySelector('.yy-fab')) {
                const fabWrap = document.createElement('span');
                fabWrap.className = 'yy-fab';
                fabWrap.innerHTML = `<span class="yy-mini" aria-hidden="true"></span>`;
                anchor.appendChild(fabWrap);
            }
        } else {
            if (!anchor.querySelector(':scope > .yy-anchor')) {
                const wrap = document.createElement('span');
                wrap.className = 'yy-anchor';
                wrap.innerHTML = `<span class="yy-mini" aria-hidden="true"></span>`;
                anchor.insertBefore(wrap, anchor.firstChild);
            }
        }
        if (text && !anchor.querySelector('.yy-sr')) {
            const sr = document.createElement('span');
            sr.className = 'yy-sr';
            sr.style.position = 'absolute';
            sr.style.left = '-9999px';
            sr.textContent = text;
            anchor.appendChild(sr);
        }
        return;
    }
    const o = document.createElement('div');
    o.id = 'yy-overlay';
    o.className = 'yy-overlay';
    o.innerHTML = `
        <div>
            <div class="yy" aria-label="${escapeHTML(text || t('toasts.generatingPDF'))}"></div>
            <div class="yy-label">${escapeHTML(text || t('toasts.generatingPDF'))}</div>
        </div>`;
    document.body.appendChild(o);
}
function hideYinYangLoader() {
    /*// ------------------------------------
    // 🧽 Remove any loader artifacts from DOM
    // ------------------------------------*/
    document.getElementById('yy-overlay')?.remove();
    document.querySelectorAll('.yy-anchor').forEach(el => el.remove());
    document.querySelectorAll('.yy-fab').forEach(el => el.remove());
    document.querySelectorAll('.yy-sr').forEach(el => el.remove());
    document.querySelectorAll('.yy-has-inline').forEach(el => el.classList.remove('yy-has-inline'));
}

/*// ====================================
// 🎨 Theme Management + meta theme-color
// ====================================*/
function getCurrentTheme() {
    return document.body.classList.contains('dark-mode') ? 'dark' : 'light';
}

function applyTheme(theme, persist = true) {
    /*// ------------------------------------
    // 🎛️ Apply theme class + (optionally) persist + update icon/text/toggle + sync meta theme-color
    // ------------------------------------*/
    try {
        if (theme !== 'light' && theme !== 'dark') theme = 'light';
        if (theme === 'dark') document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');

        updateThemeIcon(theme);
        updateThemeButtonText(theme);
        updateToggleState(theme);
        if (persist) localStorage.setItem(THEME_KEY, theme);

        // Sync browser UI color with the active theme (Edge-safe)
        syncBrowserThemeColor(theme);
    } catch (e) {
        document.body.classList.remove('dark-mode');
        if (persist) localStorage.setItem(THEME_KEY, 'light');
        // Safe fallback
        try { syncBrowserThemeColor('light'); } catch {}
    }
}

function updateThemeIcon(theme) {
    /*// ------------------------------------
    // 🌙/☀️ Keep both emoji and FA icon in sync
    // ------------------------------------*/
    ['#themeIcon', '#darkModeIcon'].forEach(id => {
        const el = $(id);
        if (!el) return;
        if (theme === 'dark') {
            el.className = 'fa-solid fa-moon';
            el.setAttribute('aria-label', 'Dark Mode Active');
            el.setAttribute('title', 'Dark Mode Active');
        } else {
            el.className = 'fa-solid fa-sun';
            el.setAttribute('aria-label', 'Light Mode Active');
            el.setAttribute('title', 'Light Mode Active');
        }
    });
}

function updateThemeButtonText(theme) {
    const els = [
        $('#themeText'),
        $('[data-i18n="ui.darkMode"]') // i18n target; we flip label based on current theme
    ];
    els.forEach(textEl => {
        if (!textEl) return;
        try {
            const label = (theme === 'dark')
                ? (typeof t === 'function' ? t('ui.lightMode') : 'Light Mode')
                : (typeof t === 'function' ? t('ui.darkMode') : 'Dark Mode');
            textEl.textContent = label;
        } catch (e) { /* no-op */ }
    });
}

function updateToggleState(theme) {
    const toggle = $('#darkModeToggle');
    if (toggle) toggle.checked = theme === 'dark';
}

function toggleTheme() {
    const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next, true); // user action → persist
}

function initTheme() {
    /*// ------------------------------------
    // 🌞 Always start LIGHT on first visit. If a saved preference exists, use it.
    //  - We do NOT auto-switch to dark based on OS preference until the user chooses a theme.
    // ------------------------------------*/
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'dark' || saved === 'light') {
            applyTheme(saved, true);
        } else {
            // First load → force light, without persisting (so the first manual toggle will persist)
            applyTheme('light', false);
        }

        // If the OS theme changes later and the user has a manual preference,
        // just ensure the meta color reflects that manual choice (do not change theme automatically).
        if (window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const onChange = () => {
                const manual = localStorage.getItem(THEME_KEY);
                if (manual) {
                    // Keep current theme, only sync meta chrome color to the stored theme.
                    syncBrowserThemeColor(manual);
                }
            };
            mq.addEventListener?.('change', onChange);
            mq.addListener?.(onChange); // legacy Safari
        }
    } catch (e) {
        console.warn('Theme init failed, defaulting to light.', e);
        try { applyTheme('light', false); } catch {}
    }
}

/* =======================================================================
   📱 View Mode (Smartphone vs PC)
   ======================================================================= */
function getCurrentViewMode() {
    return document.body.classList.contains('phone-mode') ? 'phone' : 'pc';
}

function applyViewMode(mode) {
    /*// ------------------------------------
    // 🧩 Apply phone/pc class + persist + refresh meta theme-color
    // ------------------------------------*/
    try {
        if (mode !== 'phone' && mode !== 'pc') mode = 'pc';
        document.body.classList.toggle('phone-mode', mode === 'phone');
        document.body.classList.toggle('pc-mode', mode === 'pc');

        localStorage.setItem(VIEWMODE_KEY, mode);

        // keep meta color consistent with current theme
        syncBrowserThemeColor(getCurrentTheme());
    } catch (e) {
        document.body.classList.remove('phone-mode');
        document.body.classList.add('pc-mode');
        localStorage.setItem(VIEWMODE_KEY, 'pc');
    }
}

function initViewMode() {
    /*// ------------------------------------
    // 🧠 Default based on viewport first time; persist afterwards
    // ------------------------------------*/
    let saved = localStorage.getItem(VIEWMODE_KEY);
    if (!saved) saved = (window.innerWidth <= 768) ? 'phone' : 'pc';
    applyViewMode(saved);
}

/*// ====================================
// 🧷 Backward-compatibility aliases (Theme)
//  - Older code might call these expecting DARK/LIGHT, not PC/PHONE
// ====================================*/
function getCurrentDarkMode() {
    // Return 'dark' or 'light' to reflect THEME
    return getCurrentTheme();
}

function applyDarkMode(mode) {
    // Accepts 'dark' or 'light' (anything else falls back to 'light')
    applyTheme(mode === 'dark' ? 'dark' : 'light', true);
}

/*// ====================================
// 🔁 View Mode toggle (PC/Phone)
// ====================================*/
function toggleViewMode() {
    applyViewMode(getCurrentViewMode() === 'phone' ? 'pc' : 'phone');
}

/*// ====================================
// 🧩 UI Wiring (Theme Toggle)
// ====================================*/
function setupThemeToggle() {
    const themeBtn = $('#themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        themeBtn.setAttribute('role', 'button');
        themeBtn.setAttribute('tabindex', '0');
    }

    const darkToggle = $('#darkModeToggle');
    if (darkToggle) {
        darkToggle.addEventListener('change', () => {
            applyTheme(darkToggle.checked ? 'dark' : 'light', true);
        });
        updateToggleState(getCurrentTheme());
    }
}

/* DOM boot reinforcement: safe, idempotent */
document.addEventListener('DOMContentLoaded', () => {
    // Keep dark/light mode via #darkModeToggle (initTheme is called during boot)
    try { initViewMode?.(); } catch {}
    try { setupThemeToggle?.(); } catch {}

    // i18n and action wiring are handled in boot; reinforce here idempotently
    try { updateI18nInDOM?.(document); } catch {}
    try { wireActions?.(); } catch {}

    /* ✅ Ensure print/PDF overrides are active */
    try { injectPrintFixes?.(); } catch {}
});

/*// ====================================
    // 🧱 Meta theme-color sync (browser chrome)
    //  - Exposes window.syncBrowserThemeColor(theme)
    //  - Avoids overriding if already defined elsewhere
    // ====================================*/
(function () {
    function normalizeHex(color) {
        if (typeof color !== 'string') return '#D4AF37';
        let c = color.trim();
        if (/^#([0-9a-f]{8})$/i.test(c)) c = '#' + c.slice(1, 7);
        if (/^#([0-9a-f]{3})$/i.test(c)) c = '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
        return /^#([0-9a-f]{6})$/i.test(c) ? c : '#D4AF37';
    }

    function setThemeColorMeta(hex) {
        try {
            const head = document.head || document.getElementsByTagName('head')[0];
            head.querySelectorAll('meta[name="theme-color"]').forEach(m => m.remove());
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'theme-color');
            meta.setAttribute('content', hex);
            head.appendChild(meta);
            // Edge/Android nudge: update again next frame
            setTimeout(() => meta.setAttribute('content', hex), 0);
        } catch {}
    }

    function getActiveTheme() {
        try { if (typeof getCurrentTheme === 'function') return getCurrentTheme(); } catch {}
        return (document.body?.classList?.contains('dark-mode')) ? 'dark' : 'light';
    }

    function trimSafe(s) { return (s || '').replace(/^\s+|\s+$/g, ''); }
    function resolveThemeColor(theme) {
        let light = '#d4af37'; // gold
        let dark  = '#006b4d'; // deep jade
        try {
            if (window.getComputedStyle) {
                const root = document.documentElement;
                const varLight = trimSafe(getComputedStyle(root).getPropertyValue('--theme-color-light'));
                const varDark  = trimSafe(getComputedStyle(root).getPropertyValue('--theme-color-dark'));
                if (varLight && varLight[0] === '#') light = varLight;
                if (varDark  && varDark[0]  === '#') dark  = varDark;
            }
        } catch {}
        return theme === 'dark' ? dark : light;
    }

    function updateThemeColor() {
        const theme = getActiveTheme();
        setThemeColorMeta(normalizeHex(resolveThemeColor(theme)));
    }

    if (typeof window.syncBrowserThemeColor !== 'function') {
        window.syncBrowserThemeColor = function (theme) {
            const hex = normalizeHex(resolveThemeColor(theme || getActiveTheme()));
            setThemeColorMeta(hex);
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(() => setThemeColorMeta(hex));
            }
        };
    }
    if (typeof window.setThemeColor !== 'function') {
        window.setThemeColor = (color) => setThemeColorMeta(normalizeHex(color));
    }

    function observeBodyClass() {
        try {
            if (typeof MutationObserver === 'undefined' || !document.body) return;
            const mo = new MutationObserver((muts) => {
                for (let i = 0; i < muts.length; i++) {
                    const m = muts[i];
                    if (m.type === 'attributes' && m.attributeName === 'class') {
                        updateThemeColor();
                        break;
                    }
                }
            });
            mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        } catch {}
    }

    function listenSystemTheme() {
        if (!window.matchMedia) return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            // Only adjust meta color if a manual preference exists; we don't auto-change theme anymore.
            const saved = localStorage.getItem(THEME_KEY);
            if (saved) updateThemeColor();
        };
        mq.addEventListener?.('change', handler);
        mq.addListener?.(handler);
    }

    window.addEventListener?.('storage', () => updateThemeColor(), false);

    function initMetaSync() {
        try { updateThemeColor(); } catch {}
        observeBodyClass();
        listenSystemTheme();
    }

    if (document.readyState === 'loading') {
        document.addEventListener?.('DOMContentLoaded', initMetaSync, { once:true });
    } else {
        initMetaSync();
    }
    window.addEventListener?.('load', () => updateThemeColor(), { once:true });
})();

/*// ====================================
// 💾 Form Data Storage
// ====================================*/
function readStore() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } }
function writeStore(obj) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch {} }
function saveFormData(root = document, silent = true) {
    try {
        const data = readStore();
        $$('input, textarea, select', root).forEach(el => {
            if (!el.id) return;
            data[el.id] = (el.type === 'checkbox' || el.type === 'radio') ? !!el.checked : el.value;
        });
        data.darkMode = document.body.classList.contains('dark-mode');
        data.language = currentLanguage;
        writeStore(data);
        if (!silent) showToast(t('toasts.saved'), 'success');
    } catch {}
}
function hydrateFromStorage(root = document) {
    try {
        const data = readStore();
        $$('input, textarea, select', root).forEach(el => {
            if (!el.id || !(el.id in data)) return;
            if (el.type === 'checkbox' || el.type === 'radio') el.checked = !!data[el.id];
            else el.value = data[el.id];
        });
    } catch {}
}

/*// ====================================
// 🧾 About content builder (Intro + PDF)
// ====================================*/
function buildAboutCardsHTML() {
    return `
        <fieldset class="about-fieldset">
            <legend><i class="fas fa-circle-info"></i> ${t('ui.about')}</legend>
            <div class="intro-card about-card">
                <h3><i class="fas fa-user-md"></i> <span data-i18n="about.headingMaria"></span></h3>
                <ul>
                    <li><strong data-i18n="about.name"></strong> <span data-i18n="maria.name"></span></li>
                    <li><strong data-i18n="about.profession"></strong> <span data-i18n="maria.profession"></span></li>
                    <li><strong data-i18n="about.specialization"></strong> <span data-i18n="maria.specialization"></span></li>
                    <li><strong data-i18n="about.experience"></strong> <span data-i18n="maria.experience"></span></li>
                    <li><strong data-i18n="about.philosophy"></strong> <span data-i18n="maria.philosophy"></span></li> 
                </ul>
            </div>
            <div class="intro-card about-card">
                <h3><i class="fas fa-bullseye"></i> <span data-i18n="about.headingPurpose"></span></h3>
                <ol>
                    <li>
                        <strong data-i18n="purpose.identify.title"></strong>
                        <ul>
                            <li data-i18n="purpose.identify.point1"></li>
                            <li data-i18n="purpose.identify.point2"></li>
                        </ul>
                    </li>
                    <li>
                        <strong data-i18n="purpose.classify.title"></strong>
                        <ul>
                            <li data-i18n="purpose.classify.point1"></li>
                            <li data-i18n="purpose.classify.point2"></li>
                            <li data-i18n="purpose.classify.point3"></li>
                        </ul>
                    </li>
                    <li>
                        <strong data-i18n="purpose.guide.title"></strong>
                        <ul>
                            <li data-i18n="purpose.guide.point1"></li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div class="intro-card about-card">
                <h3><i class="fas fa-heartbeat"></i> <span data-i18n="about.headingMission"></span></h3>
                <p>🌟 <q data-i18n="mission.quote"></q></p>
                <p data-i18n="mission.body"></p>
            </div>
        </fieldset>
    `;
}

/*// ====================================
// 🃏 Flashcards (grid) → modal forms
// ====================================*/
function renderAllFlashcards() {
    const container = $('#diagnosticForm');
    if (!container) return;

    container.innerHTML = '';

    SECTIONS.forEach(section => {
        const title = section.title(currentLanguage);
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.dataset.sectionId = section.id;
        card.dataset.title = title;

        card.innerHTML = `
            <div class="card-header">
                <h2><i class="fas fa-${getSectionIcon(section.id)}"></i> ${title}</h2>
                <i class="fas fa-expand"></i>
            </div>`;

        card.addEventListener('click', () => {
            const content = getCardContent(section.id);
            openFlashcardModal(title, content, section.id);
        });

        container.appendChild(card);
    });

    markFilledFlashcards();
}

function getSectionIcon(sectionId) {
    const icons = {
        general: 'user', 
        complaint: 'stethoscope', 
        thermo: 'thermometer-half',
        sweat: 'tint', 
        thirst: 'glass-water', 
        appetite: 'utensils',
        urination: 'tint-slash', 
        bowel: 'toilet', 
        sleep: 'bed',
        emotions: 'heart', 
        reproductive: 'venus-mars', 
        pulse: 'heartbeat', 
        tongue: 'face-grin-tongue'
    };

    return icons[sectionId] || 'file-medical';
}

function L(key) { return t(`labels.${key}`); }

function getCardContent(sectionId) {
    switch (sectionId) {
        case 'general':
            return `
                <fieldset>
                    <legend>${t('labels.patientInfo')}</legend>
                    <!-- Administrative -->
                    <label>${L('formNumber')}: <input type="text" id="formNumber"></label>
                    <label>${L('date')}: <input type="date" id="date"></label>
                    <label>${L('treatmentDate')}: <input type="date" id="treatmentDate"></label>
                    <label>${L('therapistName')}: <input type="text" id="therapistName"></label>
                    <!-- Identity -->
                    <label>${L('patientName')}: <input type="text" id="patientName"></label>
                    <label>${L('birthDate')}: <input type="date" id="birthDate"></label>
                    <label>${L('maritalStatus')}: <input type="text" id="maritalStatus"></label>
                    <label>${L('profession')}: <input type="text" id="profession"></label>
                    <!-- Contact -->
                    <label>${L('country')}:
                        <select id="country">
                            <option value="">${L('selectCountry')}</option>
                            <option value="BR">🇧🇷 Brasil</option>
                            <option value="US">🇺🇸 United States</option>
                            <option value="GB">🇬🇧 United Kingdom</option>
                            <option value="PT">🇵🇹 Portugal</option>
                            <option value="ES">🇪🇸 España</option>
                            <option value="FR">🇫🇷 France</option>
                        </select>
                    </label>
                    <label>${t('labels.zip')}: <input type="text" id="zip" placeholder="${t('labels.zipHintBR')}" inputmode="numeric"></label>
                    <label>${L('address')}: <input type="text" id="address" placeholder="Rua, Bairro, Cidade - UF"></label>
                    <label>${L('phone')}: <input type="tel" id="phone" placeholder="${L('phoneHintBR')}"></label>
                    <label>${L('email')}: <input type="email" id="email"></label>
                    <!-- Other -->
                    <label>${L('referral')}: <input type="text" id="referral"></label>
                </fieldset>`;
        case 'complaint':
            return `
                <fieldset>
                    <legend>${L('complaintDetails')}</legend>
                    <label>${L('onsetPain')}: <input type="text" id="onsetPain" placeholder="${L('whenStarted')}"></label>
                    <label>${L('painLocation')}: <input type="text" id="painLocation"></label>
                    <label>${L('associatedFactors')}: <input type="text" id="associatedFactors"></label>
                    <label>${L('painIntensity')}: <input type="number" id="painIntensity" min="0" max="10" placeholder="${L('intensityScale')}"></label>
                    <label>${L('painFrequency')}: <input type="text" id="painFrequency"></label>
                    <label>${L('painCharacteristics')}: <input type="text" id="painCharacteristics" placeholder="${L('toleratesPressure')}"></label>
                    <label>${L('improveWorsen')}: <input type="text" id="improveWorsen"></label>
                    <label>${L('accompanyingSymptoms')}: <textarea rows="3" id="accompanyingSymptoms"></textarea></label>
                    <label>${L('painObservations')}: <textarea rows="3" id="painObservations"></textarea></label>
                </fieldset>`;
        case 'thermo':
            return `
                <fieldset>
                    <legend>${L('thermoregulation')}</legend>
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="feelsColdHot"> ${L('feelsColdHot')}</label>
                        <label><input type="checkbox" id="normalTemperature"> ${L('normalTemperature')}</label>
                    </div>
                    <label>${L('preferSeason')}: <input type="text" id="preferSeason"></label>
                    <label>${L('preferDrinks')}: <input type="text" id="preferDrinks"></label>
                    <div class="checkbox-group">
                        <h3>${L('coldAnalysis')}</h3>
                        <label><input type="checkbox" name="cold" id="severeCold"> ${L('severeCold')}</label>
                        <label><input type="checkbox" name="cold" id="yangDeficiency"> ${L('yangDeficiency')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('heatAnalysis')}</h3>
                        <label><input type="checkbox" name="heat" id="feverChills"> ${L('feverChills')}</label>
                        <label><input type="checkbox" name="heat-type1" id="strongChills"> ${L('strongChills')}</label>
                        <label><input type="checkbox" name="heat-type1" id="mildChills"> ${L('mildChills')}</label>
                        <label><input type="checkbox" name="heat" id="feverNoChills"> ${L('feverNoChills')}</label>
                        <label><input type="checkbox" name="heat-type2" id="wavyFever"> ${L('wavyFever')}</label>
                        <label><input type="checkbox" name="heat-type2" id="severeFever"> ${L('severeFever')}</label>
                        <label><input type="checkbox" name="heat" id="lowFever"> ${L('lowFever')}</label>
                        <label><input type="checkbox" name="heat" id="excessiveHeat"> ${L('excessiveHeat')}</label>
                    </div>
                    <label>${L('temperatureObservations')}: <textarea rows="3" id="temperatureObservations"></textarea></label>
                </fieldset>`;
        case 'sweat':
            return `
                <fieldset>
                    <legend>${L('sweat')}</legend>
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="normalSweat"> ${L('normalSweat')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('anhidrosis')}</h3>
                        <label><input type="checkbox" name="anhidrosis" id="anhidrosisType1"> ${L('anhidrosisType1')}</label>
                        <label><input type="checkbox" name="anhidrosis" id="anhidrosisType2"> ${L('anhidrosisType2')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('hyperhidrosis')}</h3>
                        <label><input type="checkbox" name="hyperhidrosis" id="hyperhidrosisType1"> ${L('hyperhidrosisType1')}</label>
                        <label><input type="checkbox" name="hyperhidrosis" id="hyperhidrosisType2"> ${L('hyperhidrosisType2')}</label>
                        <label><input type="checkbox" name="hyperhidrosis" id="hyperhidrosisType3"> ${L('hyperhidrosisType3')}</label>
                        <label><input type="checkbox" name="hyperhidrosis" id="hyperhidrosisType4"> ${L('hyperhidrosisType4')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('bodyRegions')}</h3>
                        <label><input type="checkbox" name="sweatRegion" id="halfBody"> ${L('halfBody')}</label>
                        <label><input type="checkbox" name="sweatRegion" id="chest"> ${L('chest')}</label>
                        <label><input type="checkbox" name="sweatRegion" id="head"> ${L('head')}</label>
                        <label><input type="checkbox" name="sweatRegion" id="palms"> ${L('palms')}</label>
                    </div>
                    <label>${L('sweatObservations')}: <textarea rows="3" id="sweatObservations"></textarea></label>
                </fieldset>`;
        case 'thirst':
            return `
                <fieldset>
                    <legend>${L('thirst')}</legend>
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="normalThirst"> ${L('normalThirst')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('absenceOfThirst')}</h3>
                        <label><input type="checkbox" name="thirstType" id="thirstType1"> ${L('thirstType1')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('thirstWithoutPolidipsia')}</h3>
                        <label><input type="checkbox" name="thirstType" id="thirstType2a"> ${L('thirstType2a')}</label>
                        <label><input type="checkbox" name="thirstType" id="thirstType2b"> ${L('thirstType2b')}</label>
                        <label><input type="checkbox" name="thirstType" id="thirstType2c"> ${L('thirstType2c')}</label>
                        <label><input type="checkbox" name="thirstType" id="thirstType2d"> ${L('thirstType2d')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('thirstWithPolidipsia')}</h3>
                        <label><input type="checkbox" name="thirstType" id="thirstType3a"> ${L('thirstType3a')}</label>
                        <label><input type="checkbox" name="thirstType" id="thirstType3b"> ${L('thirstType3b')}</label>
                        <label><input type="checkbox" name="thirstType" id="thirstType3c"> ${L('thirstType3c')}</label>
                    </div>
                    <label>${L('thirstObservations')}: <textarea rows="3" id="thirstObservations"></textarea></label>
                </fieldset>`;
        case 'appetite':
            return `
                <fieldset>
                    <legend>${L('appetite')}</legend>
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="normalHunger"> ${L('normalHunger')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('anorexia')}</h3>
                        <label><input type="checkbox" name="hungerType" id="hungerType1a"> ${L('hungerType1a')}</label>
                        <label><input type="checkbox" name="hungerType" id="hungerType1b"> ${L('hungerType1b')}</label>
                        <label><input type="checkbox" name="hungerType" id="hungerType1c"> ${L('hungerType1c')}</label>
                        <label><input type="checkbox" name="hungerType" id="hungerType1d"> ${L('hungerType1d')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('hungerWithPolifagia')}</h3>
                        <label><input type="checkbox" name="hungerType" id="hungerType2a"> ${L('hungerType2a')}</label>
                        <label><input type="checkbox" name="hungerType" id="hungerType2b"> ${L('hungerType2b')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('hungerWithoutPolifagia')}</h3>
                        <label><input type="checkbox" name="hungerType" id="hungerType3"> ${L('hungerType3')}</label>
                    </div>
                    <label>${L('hungerObservations')}: <textarea rows="3" id="hungerObservations"></textarea></label>
                </fieldset>`;
        case 'urination':
            return `
                <fieldset>
                    <legend>${L('urinationDetails')}</legend>
                    <label>${L('urinationFrequency')}: <input type="text" id="urinationFrequency" placeholder="${L('howOften')}"></label>
                    <div class="checkbox-group">
                        <h3>${L('types')}</h3>
                        <label><input type="checkbox" id="frequentUrination"> ${L('frequentUrination')}</label>
                        <label><input type="checkbox" id="painfulUrination"> ${L('painfulUrination')}</label>
                        <label><input type="checkbox" id="urineColor"> ${L('urineColor')}</label>
                        <label><input type="checkbox" id="urineVolume"> ${L('urineVolume')}</label>
                        <label><input type="checkbox" id="urineSensations"> ${L('urineSensations')}</label>
                    </div>
                    <label>${L('urinationObservations')}: <textarea rows="3" id="urinationObservations"></textarea></label>
                </fieldset>`;
        case 'bowel':
            return `
                <fieldset>
                    <legend>${L('bowelDetails')}</legend>
                    <label>${L('bowelColor')}: <input type="text" id="bowelColor" placeholder="${L('describeColor')}"></label>
                    <label>${L('bowelVolume')}: <input type="text" id="bowelVolume" placeholder="${L('bowelVolume')}"></label>
                    <label>${L('bowelSmell')}: <input type="text" id="bowelSmell" placeholder="${L('bowelSmell')}"></label>
                    <label>${L('bowelTexture')}: <input type="text" id="bowelTexture" placeholder="${L('bowelTexture')}"></label>
                    <label>${L('bowelFrequency')}: <input type="text" id="bowelFrequency" placeholder="${L('bowelFrequency')}"></label>
                    <div class="checkbox-group">
                        <h3>${L('types')}</h3>
                        <label><input type="checkbox" id="constipation"> ${L('constipation')}</label>
                        <label><input type="checkbox" id="diarrhea"> ${L('diarrhea')}</label>
                    </div>
                    <label>${L('bowelObservations')}: <textarea rows="3" id="bowelObservations"></textarea></label>
                </fieldset>`;
        case 'sleep':
            return `
                <fieldset>
                    <legend>${L('sleepDetails')}</legend>
                    <div class="checkbox-group">
                        <h3>${L('insomniaTypes')}</h3>
                        <label><input type="checkbox" id="insomniaType1"> ${L('insomniaType1')}</label>
                        <label><input type="checkbox" id="insomniaType2"> ${L('insomniaType2')}</label>
                        <label><input type="checkbox" id="insomniaType3"> ${L('insomniaType3')}</label>
                        <label><input type="checkbox" id="insomniaType4"> ${L('insomniaType4')}</label>
                        <label><input type="checkbox" id="insomniaType5"> ${L('insomniaType5')}</label>
                        <label><input type="checkbox" id="insomniaType6"> ${L('insomniaType6')}</label>
                    </div>
                    <div class="checkbox-group">
                        <h3>${L('sleepinessTypes')}</h3>
                        <label><input type="checkbox" id="sleepinessType1"> ${L('sleepinessType1')}</label>
                        <label><input type="checkbox" id="sleepinessType2"> ${L('sleepinessType2')}</label>
                        <label><input type="checkbox" id="sleepinessType3"> ${L('sleepinessType3')}</label>
                        <label><input type="checkbox" id="sleepinessType4"> ${L('sleepinessType4')}</label>
                    </div>
                    <label>${L('sleepObservations')}: <textarea rows="3" id="sleepObservations"></textarea></label>
                </fieldset>`;
        case 'emotions':
            return `
                <fieldset>
                    <legend>${L('emotionsDetails')}</legend>
                    <label>${L('predominantEmotion')}: <input type="text" id="predominantEmotion" placeholder="${L('mainEmotion')}"></label>
                    <label>${L('intenseEmotion')}: <input type="text" id="intenseEmotion" placeholder="${L('intensePeriod')}"></label>
                    <label>${L('emotionsObservations')}: <textarea rows="3" id="emotionsObservations"></textarea></label>
                </fieldset>`;
        case 'reproductive':
            return `
                <fieldset>
                    <legend>${L('reproductiveHealthDetails')}</legend>
                    <div class="gender-toggle">
                        <button type="button" onclick="showFemale()">${L('female')}</button>
                        <button type="button" onclick="showMale()">${L('male')}</button>
                    </div>
                    <fieldset id="femaleFieldset" style="display: none;">
                        <legend>${L('menstruation')}</legend>
                        <label>${L('menstruationRegularity')}: <input type="text" id="menstruationRegularity" placeholder="${L('regularOrIrregular')}"></label>
                        <label>${L('menstruationVolume')}: <input type="text" id="menstruationVolume" placeholder="${L('abundantOrLight')}"></label>
                        <label>${L('menstruationCramps')}: <input type="text" id="menstruationCramps" placeholder="${L('crampsSeverity')}"></label>
                        <label>${L('menstruationAbsence')}: <input type="text" id="menstruationAbsence" placeholder="${L('missedPeriods')}"></label>
                        <label>${L('menstruationPMS')}: <input type="text" id="menstruationPMS" placeholder="${L('pmsSymptoms')}"></label>
                        <label>${L('femaleObservations')}: <textarea rows="3" id="femaleObservations"></textarea></label>
                    </fieldset>
                    <fieldset id="maleFieldset" style="display: none;">
                        <legend>${L('maleReproductive')}</legend>
                        <label>${L('maleFertility')}: <input type="text" id="maleFertility" placeholder="${L('anyIssues')}"></label>
                        <label>${L('maleLibido')}: <input type="text" id="maleLibido" placeholder="${L('libidoLevel')}"></label>
                        <label>${L('maleFrequency')}: <input type="text" id="maleFrequency" placeholder="${L('maleFrequency')}"></label>
                        <label>${L('maleObservations')}: <textarea rows="3" id="maleObservations"></textarea></label>
                    </fieldset>
                </fieldset>`;
        case 'pulse':
            return `
                <fieldset>
                    <legend>${L('pulseDetails')}</legend>
                    <div class="checkbox-group">
                        <h3>${L('types')}</h3>
                        <label><input type="checkbox" id="pulseTypeFloating"> ${L('pulseTypeFloating')}</label>
                        <label><input type="checkbox" id="pulseTypeSinking"> ${L('pulseTypeSinking')}</label>
                        <label><input type="checkbox" id="pulseTypeSlow"> ${L('pulseTypeSlow')}</label>
                        <label><input type="checkbox" id="pulseTypeRapid"> ${L('pulseTypeRapid')}</label>
                        <label><input type="checkbox" id="pulseTypeWeak"> ${L('pulseTypeWeak')}</label>
                        <label><input type="checkbox" id="pulseTypeStrong"> ${L('pulseTypeStrong')}</label>
                    </div>
                    <label>${L('pulseDepth')}: <input type="text" id="pulseDepth" placeholder="${L('superficialOrDeep')}"></label>
                    <label>${L('pulseSpeed')}: <input type="text" id="pulseSpeed" placeholder="${L('ratePerMinute')}"></label>
                    <label>${L('pulseObservations')}: <textarea rows="3" id="pulseObservations"></textarea></label>
                </fieldset>`;
        case 'tongue':
            return `
                <fieldset>
                    <legend>${L('tongueDetails')}</legend>
                    <label>${L('tongueVitality')}: <input type="text" id="tongueVitality" placeholder="${L('vitalOrWithered')}"></label>
                    <label>${L('tongueColor')}: <input type="text" id="tongueColor" placeholder="${L('paleRedPurple')}"></label>
                    <label>${L('tongueShape')}: <input type="text" id="tongueShape" placeholder="${L('swollenThin')}"></label>
                    <label>${L('tongueMovement')}: <input type="text" id="tongueMovement" placeholder="${L('tremblingDeviated')}"></label>
                    <div class="checkbox-group">
                        <h3>${L('coating')}</h3>
                        <label><input type="checkbox" id="coatingThick"> ${L('coatingThick')}</label>
                        <label><input type="checkbox" id="coatingThin"> ${L('coatingThin')}</label>
                        <label><input type="checkbox" id="coatingWhite"> ${L('coatingWhite')}</label>
                        <label><input type="checkbox" id="coatingYellow"> ${L('coatingYellow')}</label>
                        <label><input type="checkbox" id="coatingRooted"> ${L('coatingRooted')}</label>
                        <label><input type="checkbox" id="coatingRootless"> ${L('coatingRootless')}</label>
                    </div>
                    <label>${L('tongueObservations')}: <textarea rows="3" id="tongueObservations"></textarea></label>
                </fieldset>`;
        default:
            return `<p>${t('sections.' + sectionId)}...</p>`;
    }
}

function markFilledFlashcards() {
    document.querySelectorAll('.flashcard').forEach(card => {
        const sectionId = card.dataset.sectionId;
        const inputs = SECTIONS.find(s => s.id === sectionId)?.inputs || [];
        const data = readStore();
        const isFilled = inputs.some(id => {
            const value = data[id];
            return value !== undefined && value !== null && value !== '' && value !== false;
        });
        if (isFilled) card.classList.add('filled'); 
        else card.classList.remove('filled');
    });
}

/*// ====================================
// 📦 Phone + Postal → Address
// ====================================*/
const COUNTRY_PHONE = {
    BR: { dial: '55', mask: '(##) #####-####', example: '(11) 98765-4321' },
    US: { dial: '1', mask: '(###) ###-####', example: '(415) 555-2671' },
    GB: { dial: '44', mask: '#### ### ####', example: '0207 123 4567' },
    PT: { dial: '351', mask: '## ### ####', example: '21 234 5678' },
    ES: { dial: '34', mask: '### ### ###', example: '612 345 678' },
    FR: { dial: '33', mask: '## ## ## ## ##', example: '06 12 34 56 78' }
};

function digitsOnly(s) { 
    return (s || '').replace(/\D+/g, ''); 
}

function applyMask(digits, pattern) {
    let out = '', di = 0;
    for (let i = 0; i < pattern.length; i++) {
        out += pattern[i] === '#'
            ? (di < digits.length ? digits[di++] : '')
            : pattern[i];
    }
    return out;
}

function setPhoneMaskBasedOnCountry(countryCode, phoneInput) {
    const cfg = COUNTRY_PHONE[countryCode] || COUNTRY_PHONE.US;
    phoneInput.placeholder = `+${cfg.dial} ${cfg.example}`;
    phoneInput.setAttribute('data-mask', cfg.mask);
    phoneInput.value = applyMask(digitsOnly(phoneInput.value), cfg.mask);
}

function applyPhoneMaskForCountry(countryCode, digits) {
    const cfg = COUNTRY_PHONE[countryCode] || COUNTRY_PHONE.US;
    return applyMask(digitsOnly(digits), cfg.mask);
}

// 👉 Normalize to E.164 for WhatsApp (e.g. 5511999998888)
function toE164(countryCode, nationalDigits) {
    const cfg = COUNTRY_PHONE[countryCode] || COUNTRY_PHONE.US;
    let n = digitsOnly(nationalDigits);
    if (/^(GB|PT|FR|ES)$/i.test(countryCode)) n = n.replace(/^0+/, '');
    return cfg.dial + n;
}

// ====================================
// 🏷️ Postal code (CEP/ZIP) → Address
// ====================================
// Country masks for postal input (UX-only)
function maskPostal(country, raw) {
    const cc = (country || 'BR').toUpperCase();
    const d  = (raw || '').toString();

    switch (cc) {
        case 'BR': { const z = d.replace(/\D+/g,''); return z.length <= 5 ? z : z.slice(0,5) + '-' + z.slice(5,8); }
        case 'PT': { const z = d.replace(/\D+/g,''); return z.length <= 4 ? z : z.slice(0,4) + '-' + z.slice(4,7); }
        case 'US': { const z = d.replace(/\D+/g,''); return z.length <= 5 ? z : z.slice(0,5) + '-' + z.slice(5,9); }
        case 'FR':
        case 'ES': return d.replace(/\D+/g,'').slice(0,5);
        case 'GB': {
            // Normalize: uppercase, collapse spaces, then re-insert a single space before the last 3 chars if length >= 5
            let s = d.toUpperCase().replace(/\s+/g,'').replace(/[^A-Z0-9]/g,'');
            if (s.length > 3) s = s.slice(0, -3) + ' ' + s.slice(-3);
            return s;
        }
        default: return d.replace(/\s+/g,' ').trim();
    }
}

// ViaCEP (Brazil)
async function fetchViaCEP(cepDigits) {
    const r = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
    if (!r.ok) throw new Error('ViaCEP HTTP');
    const j = await r.json();
    if (j.erro) throw new Error('ViaCEP not found');
    return [
        j.logradouro, 
        j.bairro, 
        `${j.localidade} - ${j.uf}`, 
        j.cep
    ].filter(Boolean).join(', ');
}

// Zippopotam (multi-country)
async function fetchZippopotam(country, postal) {
    const r = await fetch(`https://api.zippopotam.us/${country.toLowerCase()}/${postal}`);
    if (!r.ok) throw new Error('Zippopotam HTTP');
    const j = await r.json();
    const p = j.places?.[0];
    const place = p ? [p['place name'], p['state abbreviation'] || p['state']].filter(Boolean).join(' - ') : '';
    return [place, j.postcode || postal, j.country].filter(Boolean).join(', ');
}

// Unified: fills #address when possible
async function fillAddressFromPostal(country, postalDigits, root = document) {
    try {
        let addr = '';
        if ((country || 'BR').toUpperCase() === 'BR') addr = await fetchViaCEP(postalDigits);
        else addr = await fetchZippopotam(country, postalDigits);
        const addressInput = root.querySelector('#address');
        if (addressInput) { 
            addressInput.value = addr; 
            saveFormData(root, true); 
        }
    } catch (e) { 
        console.warn('Postal lookup failed:', e?.message || e); 
    }
}

/*// ====================================
// 📊 Collect Data For Export
// ====================================*/
function collectFilledData() {
    const sections = [];
    const data = readStore();

    SECTIONS.forEach(section => {
        const title = section.title(currentLanguage);
        const entries = [];

        section.inputs.forEach(inputId => {
            const value = data[inputId];
            if (value !== undefined && value !== null && value !== '' && value !== false) {
                const label = t(`labels.${inputId}`) || inputId;
                let displayValue = value;

                // Format date values for Brazil (dd/mm/yyyy)
                if (['date', 'birthDate', 'treatmentDate'].includes(inputId) && typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    const [y, m, d] = value.split('-');
                    displayValue = currentLanguage === 'pt' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
                }

                if (typeof value === 'boolean') displayValue = currentLanguage === 'pt' ? 'Sim' : 'Yes';
                entries.push({ label, value: displayValue, section: title, id: inputId });
            }
        });

        if (entries.length > 0) sections.push({ title, entries });
    });
    return { 
        meta: { 
            patientName: data.patientName || undefined 
        }, sections 
    };
}


/*// ====================================
// 🖼️ Logo Helpers (local/remote/fallback)
// ====================================*/
const LOGO_BASE64_FALLBACK = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgdmlld0JveD0iMCAwIDIyMCAyMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJnIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI3MCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEyYTA4ZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBmNzY2ZSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjExMCIgY3k9IjExMCIgcj0iMTAwIiBmaWxsPSJ1cmwoI2cpIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS13aWR0aD0iMTAiLz48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMTAiIHI9Ijg0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmUzYTYiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iLjgiLz48dGV4dCB4PSIxMTAiIHk9IjEzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Ik5vdG8gU2VyaWYgU0MsIHNlcmlmIiBmb250LXNpemU9Ijk2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjYmYxZTJlIj7kuK3lvI08L3RleHQ+PC9zdmc+";

// Pin a known-good commit; fall back to main if needed
const REPO_COMMIT_SHA = "18a7e5a28929655ad6bc1bc81d35b3bb6cb3505d";

async function chooseWorkingLogoSrc() {
    const el = document.getElementById('brandLogo') || document.querySelector('img.logo, .site-logo img');
    if (el?.src) return el.src;

    // Prefer source repo layout first (/src/Images), then generic /Images paths
    const local = [
        '/src/Images/MariaLogo.png',
        'src/Images/MariaLogo.png',
        '/Images/MariaLogo.png',
        'Images/MariaLogo.png',
        './Images/MariaLogo.png'
    ];

    // CDN (pinned commit first, then main)
    const remote = [
        `https://cdn.jsdelivr.net/gh/PublicClassInfo/GoldenDiagnosis@${REPO_COMMIT_SHA}/src/Images/MariaLogo.png`,
        'https://cdn.jsdelivr.net/gh/PublicClassInfo/GoldenDiagnosis@main/src/Images/MariaLogo.png'
    ];

    for (const url of local) {
        if (await preloadImage(url).catch(() => false)) return url;
    }
    for (const url of remote) {
        if (await preloadImage(url, true).catch(() => false)) return url;
    }
    return LOGO_BASE64_FALLBACK;
}

function preloadImage(url, cross = false, timeoutMs = 6000) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        if (cross) img.crossOrigin = 'anonymous';
        const t = setTimeout(() => reject(false), timeoutMs);
        img.onload = () => { clearTimeout(t); resolve(true); };
        img.onerror = () => { clearTimeout(t); reject(false); };
        img.src = url;
    });
}

function buildFallbackLogoDataURL() {
    return LOGO_BASE64_FALLBACK;
}

async function toDataURL(url) {
    /*// ------------------------------------
    // 🖼️ Convert image to data URL when possible; otherwise fall back to inline SVG
    // ------------------------------------*/
    if (!url) return LOGO_BASE64_FALLBACK;

    try {
        const u = new URL(url, location.href);

        // When opened via file://, avoid network/CORS attempts
        if (location.protocol === 'file:') return LOGO_BASE64_FALLBACK;

        const res = await fetch(u.href, { mode: 'cors', credentials: 'omit' });
        if (!res.ok) throw new Error('HTTP ' + res.status);

        const blob = await res.blob();
        return await new Promise((resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result);
            fr.onerror = reject;
            fr.readAsDataURL(blob);
        });
    } catch {
        return LOGO_BASE64_FALLBACK;
    }
}

/*// ====================================
// 🧱 PDF/Print HTML (shared) — single source of truth (Preview → Print/PDF/WhatsApp)
//  — Keeps your original print CSS as-is
//  — Desktop PRINT → Paged.js (native dialog, perfect pagination)
//  — Mobile PRINT → generate PDF blob (share/open → print from viewer)
//  — PDF button → generate/download (desktop & phone)
//  — WhatsApp button → attach PDF via Web Share (fallback: download + wa.me)
// ====================================*/
function getSharedStyles() {
    /* NOTE: requested to keep the print style "beautiful and perfect".
       The block below is preserved verbatim (minor whitespace only). */
    return `
        <style>
            @page { size: A4; margin: 14mm; }

            :root {
                --jade:#0f766e;
                --jade-600:#0d5e58;
                --gold:#d4af37;
                --cinnabar:#bf1e2e;
                --ink:#1f2937;
                --ink-2:#374151;
                --paper:#ffffff;
                --smoke:#f6f7f9;
                --line:rgba(0,0,0,.1);
            }

            *{ box-sizing:border-box; margin:0; padding:0; }
            html,body{
                background:#fff;
                color:var(--ink);
                font:14px/1.6 Inter, system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
            }

            img{ max-width:100%; height:auto; display:block; }

            .page{
                width:794px;                  /* A4 width @96dpi */
                min-height:1123px;            /* A4 height @96dpi */
                margin:0 auto;
                padding:18px;
                position:relative;
                background:#fff;
                box-shadow:0 0 10px rgba(0,0,0,.1);
            }

            body.pdf .page::before{ content:"" !important; display:none !important; }
            body.pdf footer{
                background:#fff !important;
                border-top:2px solid var(--gold) !important;
            }

            @media print{
                html,body{ -webkit-print-color-adjust:exact; print-color-adjust:exact; background:#fff; }
                /* Real printable width: 210mm - 2×14mm margins */
                .page{
                    width:calc(210mm - 28mm) !important; min-height:auto !important;
                    margin:0 auto !important; padding:0 !important; box-shadow:none !important;
                }
                .no-print{ display:none !important; }

                /* SPOOLER STABILITY: keep print layout simple */
                *{
                    text-shadow:none !important;
                    -webkit-text-stroke:0 !important;
                    box-shadow:none !important;
                    filter:none !important;
                }
                html,body{ width:auto !important; height:auto !important; }
            }

            .masthead{
                position:relative; overflow:hidden; margin-bottom:22px; padding:20px;
                border:1.5px solid var(--gold); border-radius:16px;
                background:linear-gradient(135deg, rgba(15,118,110,.05), rgba(212,175,55,.05));
                display:grid; grid-template-columns:120px 1fr; gap:18px; align-items:center;
            }
            .masthead::after{ content:""; position:absolute; left:0; right:0; top:0; height:4px;
                background:linear-gradient(90deg, var(--jade), var(--gold), var(--jade)); }
            .logo{ height:110px; width:110px; border-radius:50%; object-fit:cover; border:3px solid var(--gold); background:#fff; padding:4px; }
            .title h1{ font-family:"Noto Serif SC",serif; font-size:28px; font-weight:800; color:var(--jade-600); margin:0 0 6px; }
            .title h2{ font-family:"Noto Serif SC",serif; font-size:19px; font-weight:700; color:var(--cinnabar); margin:0 0 10px; }
            .gen{
                display:inline-block; font-weight:600; font-size:13px; color:var(--ink-2); padding:6px 10px; border-radius:999px;
                border:1px solid rgba(212,175,55,.5); background:linear-gradient(90deg, rgba(245,230,167,.35), rgba(245,230,167,.12));
            }
            .seal{
                position:absolute; right:14px; bottom:12px; color:var(--cinnabar); border:2px solid var(--cinnabar);
                border-radius:6px; padding:4px 6px; font-family:"Noto Serif SC",serif; font-weight:700; font-size:12px; transform:rotate(-2deg);
            }

            .patient{
                background:linear-gradient(135deg, rgba(15,118,110,.05), rgba(127,219,202,.08));
                border-left:6px solid var(--jade); border-right:1px solid var(--line);
                border-radius:14px; padding:18px 20px; margin:18px 0; break-inside:avoid; page-break-inside:avoid;
            }
            .patient h3{
                font-family:"Noto Serif SC",serif; color:var(--jade-600); font-size:18px; font-weight:800;
                margin:0 0 12px; padding-bottom:8px; border-bottom:2px solid rgba(212,175,55,.35);
            }
            .pgrid{ display:grid; gap:12px; grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); }
            .pitem{
                background:#fff; border:1px solid var(--line); border-radius:10px; padding:12px 14px; position:relative;
                break-inside:avoid; page-break-inside:avoid;
            }
            .pitem::before{
                content:""; position:absolute; left:0; top:0; bottom:0; width:4px;
                background:linear-gradient(180deg, var(--jade), var(--gold)); border-radius:10px 0 0 10px;
            }
            .pitem strong{ display:block; color:var(--jade-600); font-size:11px; letter-spacing:.6px; text-transform:uppercase; margin-bottom:6px; }

            .section{
                position:relative; overflow:hidden; background:#fff; border:1px solid var(--line); border-radius:14px;
                padding:18px; margin:18px 0; break-inside:avoid; page-break-inside:avoid;
            }
            .section::before{ content:""; position:absolute; left:0; right:0; top:0; height:3px; background:linear-gradient(90deg, var(--jade), var(--gold)); }
            .section h3{
                font-family:"Noto Serif SC",serif; color:var(--jade-600); font-size:18px; font-weight:800;
                margin:0 0 14px; padding-bottom:8px; border-bottom:1.5px dashed rgba(15,118,110,.25);
            }

            .grid{ display:grid; gap:12px; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); }
            .entry{
                background:linear-gradient(180deg, #fff, var(--smoke)); border:1px solid var(--line); border-radius:12px;
                padding:12px 12px 12px 16px; position:relative; break-inside:avoid; page-break-inside:avoid;
            }
            .entry::after{
                content:""; position:absolute; left:0; top:0; bottom:0; width:4px;
                background:linear-gradient(180deg, var(--jade), var(--gold)); border-radius:12px 0 0 12px;
            }
            .entry strong{ display:block; font-size:.8rem; letter-spacing:.8px; text-transform:uppercase; color:var(--jade-600); margin-bottom:6px; }
            .entry .val{ font-size:1rem; color:var(--ink); white-space:pre-line; overflow-wrap:anywhere; }

            .table-grid{ width:100%; border-collapse:collapse; table-layout:fixed; }
            .table-grid th, .table-grid td{
                padding:8px 10px; border:1px solid rgba(0,0,0,.1); vertical-align:top; word-break:break-word; overflow-wrap:anywhere;
            }

            footer{
                margin-top:24px; padding:14px; text-align:center; color:var(--ink-2); border-top:3px solid var(--gold);
                background:linear-gradient(135deg, rgba(15,118,110,.04), rgba(212,175,55,.04)); border-radius:12px;
            }

            /* Responsive */
            @media screen and (max-width:768px){
                .page{ width:100%; padding:12px; }
                .masthead{ grid-template-columns:80px 1fr; padding:15px; }
                .logo{ height:80px; width:80px; }
                .title h1{ font-size:22px; }
                .title h2{ font-size:16px; }
                .pgrid, .grid{ grid-template-columns:1fr; }
                .pitem, .entry{ padding:10px; }
            }
        </style>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;700;800&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    `;
}

/*// ====================================
// 🎨 ENHANCED PDF STYLING (Beautiful like Print.pdf)
// ====================================*/
function getEnhancedStyles() {
    return `
        <style>
            @page { 
                size: A4; 
                margin: 15mm;
                @bottom-left {
                    content: "Confidencial - Uso Terapêutico";
                    font-size: 10px;
                    color: #666;
                }
            }

            :root {
                --jade: #0f766e;
                --jade-light: #7fdbca;
                --jade-dark: #006b4d;
                --gold: #D4AF37;
                --gold-light: #FFE57E;
                --cinnabar: #C62a2a;
                --text-dark: #2C3E50;
                --text-light: #F8F9FA;
                --border-color: #e0e0e0;
                --header-bg: #f8fdfb;
            }

            * { 
                box-sizing: border-box; 
                margin: 0; 
                padding: 0; 
            }

            body {
                font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif;
                line-height: 1.5;
                color: var(--text-dark);
                background: #ffffff;
                font-size: 13px;
            }

            .page {
                width: 794px;
                min-height: 1123px;
                margin: 0 auto;
                padding: 20mm;
                position: relative;
                background: #ffffff;
            }

            /* Enhanced Header */
            .document-header {
                text-align: center;
                margin-bottom: 25px;
                padding-bottom: 20px;
                border-bottom: 3px double var(--gold);
            }

            .document-title {
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 28px;
                font-weight: 700;
                color: var(--jade-dark);
                margin-bottom: 8px;
                letter-spacing: 0.5px;
            }

            .document-subtitle {
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 18px;
                font-weight: 600;
                color: var(--cinnabar);
                margin-bottom: 15px;
                font-style: italic;
            }

            .generation-info {
                font-size: 12px;
                color: #666;
                background: var(--header-bg);
                padding: 8px 15px;
                border-radius: 20px;
                display: inline-block;
                border: 1px solid var(--gold-light);
            }

            /* Enhanced Patient Information */
            .patient-section {
                background: linear-gradient(135deg, #f8fdfb, #f0f9f6);
                border-left: 5px solid var(--jade);
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }

            .patient-section h2 {
                font-family: 'Georgia', serif;
                color: var(--jade-dark);
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 2px solid var(--gold-light);
            }

            .patient-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 12px;
            }

            .patient-item {
                display: flex;
                flex-direction: column;
            }

            .patient-label {
                font-weight: 700;
                font-size: 11px;
                color: var(--jade);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 4px;
            }

            .patient-value {
                font-size: 14px;
                color: var(--text-dark);
                font-weight: 500;
            }

            /* Enhanced Sections */
            .data-section {
                margin: 25px 0;
                break-inside: avoid;
            }

            .section-header {
                background: linear-gradient(135deg, var(--jade), var(--jade-dark));
                color: white;
                padding: 12px 18px;
                border-radius: 6px 6px 0 0;
                font-family: 'Georgia', serif;
                font-size: 16px;
                font-weight: 700;
            }

            .section-content {
                border: 1px solid var(--border-color);
                border-top: none;
                border-radius: 0 0 6px 6px;
                padding: 18px;
                background: #fff;
            }

            .data-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 15px;
            }

            .data-item {
                background: #fafafa;
                border: 1px solid #e8e8e8;
                border-radius: 6px;
                padding: 12px 15px;
                position: relative;
            }

            .data-item::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 4px;
                background: linear-gradient(to bottom, var(--jade), var(--gold));
                border-radius: 6px 0 0 6px;
            }

            .data-label {
                font-weight: 700;
                font-size: 11px;
                color: var(--jade-dark);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 6px;
                display: block;
            }

            .data-value {
                font-size: 13px;
                color: var(--text-dark);
                line-height: 1.4;
            }

            /* Pulse Section - Special Formatting */
            .pulse-section .data-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }

            .pulse-item {
                text-align: center;
                background: #fff;
                border: 2px solid var(--gold-light);
                border-radius: 8px;
                padding: 15px 10px;
            }

            .pulse-item.checked {
                background: linear-gradient(135deg, #f0f9f6, #e6f7f2);
                border-color: var(--jade);
            }

            /* Tongue Section - Special Formatting */
            .tongue-section .data-grid {
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            }

            .tongue-item {
                text-align: center;
                background: #fff;
                border: 2px solid var(--gold-light);
                border-radius: 8px;
                padding: 12px 8px;
            }

            .tongue-item.checked {
                background: linear-gradient(135deg, #fff9f0, #fff4e6);
                border-color: var(--gold);
            }

            /* Footer */
            .document-footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid var(--gold);
                text-align: center;
                color: #666;
                font-size: 11px;
                background: var(--header-bg);
                padding: 15px;
                border-radius: 8px;
            }

            /* Print Optimizations */
            @media print {
                .page {
                    width: auto;
                    min-height: auto;
                    padding: 0;
                    margin: 0;
                    box-shadow: none;
                }
                
                .data-section {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                
                .patient-section {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
            }

            /* Responsive */
            @media (max-width: 768px) {
                .page {
                    width: 100%;
                    padding: 10mm;
                }
                
                .patient-grid,
                .data-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Georgia&display=swap" rel="stylesheet">
    `;
}

/*// ====================================
// 🧯 Print & PDF Fixes (no cropping, stable tables)
// ====================================*/
function injectPrintFixes() {
    if (document.getElementById('gd-print-fixes')) return;
    const s = document.createElement('style');
    s.id = 'gd-print-fixes';
    s.textContent = `
        .section { break-inside:auto !important; page-break-inside:auto !important; }
        .no-split { break-inside:avoid !important; page-break-inside:avoid !important; }
        .table-grid thead { display:table-header-group !important; }
        .table-grid tbody { display:table-row-group !important; }
        .table-grid tr { break-inside:avoid !important; page-break-inside:avoid !important; }
    `;
    document.head.appendChild(s);
}

/*// ====================================
// 📄 Compose A4 HTML (Preview = Print = PDF)
// ====================================*/
function buildDocHTML(exportData, logoSrc) {
    const patientData = readStore() || {};
    const patientFields = [
        { key:'patientName', label:L('patientName') },
        { key:'birthDate',  label:L('birthDate')  },
        { key:'phone',      label:L('phone')      },
        { key:'email',      label:L('email')      },
        { key:'address',    label:L('address')    },
        { key:'profession', label:L('profession') }
    ].filter(f => patientData[f.key]).map(f => {
        let value = patientData[f.key];
        if (f.key === 'birthDate' && typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            const [y,m,d] = value.split('-');
            value = currentLanguage === 'pt' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
        }
        return { ...f, value };
    });

    const patientHTML = patientFields.length ? `
        <section class="patient no-split" aria-label="${L('patientInfo')}">
            <h3>${L('patientInfo')}</h3>
            <div class="pgrid">
                ${patientFields.map(f => `
                    <div class="pitem">
                        <strong>${escapeHTML(String(f.label))}</strong>
                        <div class="val">${escapeHTML(String(f.value))}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    ` : '';

    const sectionsHTML = (exportData.sections || []).map(sec => {
        if (!sec?.entries?.length) return '';
        return `
            <section class="section">
                <h3>${escapeHTML(String(sec.title))}</h3>
                <div class="grid">
                    ${sec.entries.map(e => `
                        <div class="entry">
                            <strong>${escapeHTML(String(e.label))}</strong>
                            <div class="val">${escapeHTML(String(e.value ?? ''))}</div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }).join('');

    const today = new Date();
    const formattedDate = currentLanguage === 'pt'
        ? today.toLocaleDateString('pt-BR')
        : today.toLocaleDateString('en-US');

    return `
    <!DOCTYPE html>
    <html lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="color-scheme" content="light only" />
            <title>${t('titles.form')}</title>
            ${getSharedStyles()}
        </head>
        <body class="pdf">
            <main class="page">
                <header class="masthead" aria-label="Header">
                    <img src="${logoSrc}" alt="Logo" class="logo" crossorigin="anonymous" referrerpolicy="no-referrer">
                    <div class="title">
                        <h1>${t('titles.form')}</h1>
                        <h2>${t('titles.mentorship')}</h2>
                        <div class="gen">${L('generatedOn')}: ${formattedDate}</div>
                    </div>
                </header>

                ${patientHTML}
                ${sectionsHTML}

                <footer>${t('footer.confidential')}</footer>
            </main>
        </body>
    </html>`;
}

/*// ====================================
// 🎯 ENHANCED PDF CONTENT BUILDER
// ====================================*/
function buildEnhancedDocHTML(exportData, logoSrc) {
    const patientData = readStore() || {};
    
    // Format date properly
    const today = new Date();
    const formattedDate = currentLanguage === 'pt' 
        ? today.toLocaleDateString('pt-BR')
        : today.toLocaleDateString('en-US');

    // Build patient information section
    const patientFields = [
        { key: 'patientName', label: L('patientName') },
        { key: 'birthDate', label: L('birthDate') },
        { key: 'phone', label: L('phone') },
        { key: 'email', label: L('email') },
        { key: 'address', label: L('address') },
        { key: 'profession', label: L('profession') },
        { key: 'maritalStatus', label: L('maritalStatus') },
        { key: 'referral', label: L('referral') },
        { key: 'treatmentDate', label: L('treatmentDate') },
        { key: 'therapistName', label: L('therapistName') }
    ].filter(f => patientData[f.key]).map(f => {
        let value = patientData[f.key];
        
        // Format dates
        if (['birthDate', 'treatmentDate', 'date'].includes(f.key) && 
            typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            const [y, m, d] = value.split('-');
            value = currentLanguage === 'pt' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
        }
        
        // Format boolean values
        if (typeof value === 'boolean') {
            value = currentLanguage === 'pt' ? 'Sim' : 'Yes';
        }
        
        return { ...f, value };
    });

    const patientHTML = patientFields.length ? `
        <section class="patient-section">
            <h2>${L('patientInfo')}</h2>
            <div class="patient-grid">
                ${patientFields.map(f => `
                    <div class="patient-item">
                        <span class="patient-label">${escapeHTML(String(f.label))}</span>
                        <span class="patient-value">${escapeHTML(String(f.value))}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    ` : '';

    // Build sections with enhanced formatting
    const sectionsHTML = (exportData.sections || []).map(sec => {
        if (!sec?.entries?.length) return '';

        // Special handling for Pulse and Tongue sections
        const isPulseSection = sec.title.toLowerCase().includes('pulse') || sec.title.toLowerCase().includes('pulso');
        const isTongueSection = sec.title.toLowerCase().includes('tongue') || sec.title.toLowerCase().includes('língua');

        const sectionClass = isPulseSection ? 'pulse-section' : isTongueSection ? 'tongue-section' : '';

        return `
            <section class="data-section ${sectionClass}">
                <div class="section-header">
                    ${escapeHTML(String(sec.title))}
                </div>
                <div class="section-content">
                    <div class="data-grid">
                        ${sec.entries.map(entry => {
                            const isChecked = typeof entry.value === 'string' && 
                                (entry.value.toLowerCase().includes('sim') || 
                                 entry.value.toLowerCase().includes('yes') ||
                                 entry.value === 'Sim' || 
                                 entry.value === 'Yes');
                            
                            const itemClass = (isPulseSection || isTongueSection) && isChecked ? 'checked' : '';
                            
                            return `
                                <div class="data-item ${itemClass}">
                                    <span class="data-label">${escapeHTML(String(entry.label))}</span>
                                    <span class="data-value">${escapeHTML(String(entry.value))}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>
        `;
    }).join('');

    return `
    <!DOCTYPE html>
    <html lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>${t('titles.form')} - ${patientData.patientName || 'Paciente'}</title>
            ${getEnhancedStyles()}
        </head>
        <body>
            <main class="page">
                <!-- Enhanced Header -->
                <header class="document-header">
                    <h1 class="document-title">${t('titles.form')}</h1>
                    <h2 class="document-subtitle">${t('titles.mentorship')}</h2>
                    <div class="generation-info">
                        ${L('generatedOn')}: ${formattedDate}
                    </div>
                </header>

                ${patientHTML}
                ${sectionsHTML}

                <!-- Enhanced Footer -->
                <footer class="document-footer">
                    ${t('footer.confidential')}
                </footer>
            </main>
        </body>
    </html>`;
}

/*// ====================================
// 🔧 ENHANCED PDF GENERATION
// ====================================*/
async function generateEnhancedPdf(exportData = null, logoSrc = null) {
    disableButton?.('#savePDF');
    showYinYangLoader(t('toasts.generatingPDF'), '#savePDF');

    try {
        if (!exportData) {
            saveFormData(document, true);
            exportData = collectFilledData() || {};
        }
        
        if (!exportData.sections?.length) {
            showToast(t('errors.noDataToExport'), 'warning');
            return;
        }

        // Use enhanced HTML builder
        const html = buildEnhancedDocHTML(exportData, logoSrc);
        
        // Create hidden iframe for rendering
        const iframe = createHiddenIframe();
        iframe.srcdoc = html;
        
        await new Promise(resolve => {
            iframe.onload = resolve;
            setTimeout(resolve, 1500);
        });

        await waitForAssetsWindow(iframe.contentWindow);
        
        const node = iframe.contentDocument.querySelector('.page') || iframe.contentDocument.body;
        
        // Enhanced PDF options
        const { filename, blob } = await generateEnhancedPdfBlob(node);
        
        // Trigger download
        await triggerDownloadBlob(filename, blob);
        
        showToast(t('toasts.pdfSaved'), 'success');
        
    } catch (error) {
        console.error('Enhanced PDF generation error:', error);
        showToast(t('errors.pdfFailed'), 'error');
    } finally {
        hideYinYangLoader();
        enableButton?.('#savePDF');
    }
}

async function generateEnhancedPdfBlob(node) {
    await ensureHtml2PdfLibrary();

    const rawName = (readStore()?.patientName || (currentLanguage === 'pt' ? 'Paciente' : 'Patient')).toString().trim();
    const safeName = (rawName || (currentLanguage === 'pt' ? 'Paciente' : 'Patient')).replace(/[^a-zA-Z0-9]/g, '_');
    const title = t('titles.form');
    const filename = `${safeName}_${title}_${new Date().toISOString().slice(0, 10)}.pdf`;

    const blob = await window.html2pdf().set({
        margin: [15, 15, 15, 15],
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            logging: false,
            removeContainer: true,
            onclone: (clonedDoc) => {
                try {
                    // Ensure all fonts and styles are loaded
                    const style = clonedDoc.createElement('style');
                    style.textContent = `
                        * { 
                            -webkit-print-color-adjust: exact !important; 
                            print-color-adjust: exact !important;
                            color-adjust: exact !important;
                        }
                    `;
                    clonedDoc.head.appendChild(style);
                } catch (e) {}
            }
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            compress: true,
            hotfixes: ['px_scaling']
        },
        pagebreak: {
            mode: ['css', 'legacy'],
            before: '.data-section',
            avoid: '.patient-section, .data-item, .section-header'
        }
    }).from(node).output('blob');

    return { filename, blob };
}

/*// ====================================
// 🎯 UPDATE THE PREVIEW SYSTEM WITH ENHANCED PDF
// ====================================*/
async function showEnhancedPreviewModal(exportData, logoSrc) {
    currentExportData = exportData;
    currentLogoSrc = logoSrc;

    // If a previous modal exists, close it first for idempotency
    try { closePreviewModal(); } catch {}

    const modal = document.createElement('div');
    modal.id = 'golden-preview-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'golden-preview-title');
    modal.innerHTML = `
        <div class="preview-modal-content">
            <div class="preview-modal-header">
                <h3 id="golden-preview-title">${t('preview.title') || 'Document Preview'}</h3>
                <span class="preview-close" aria-label="Close" title="Close" type="button">&times;</span>
            </div>
            <div class="preview-modal-body">
                <iframe id="preview-iframe" style="width:100%;height:100%;border:none;"></iframe>
            </div>
            <div class="preview-modal-footer">
                <button id="preview-edit-btn" class="preview-btn preview-btn-edit" type="button">
                    <i class="fas fa-edit" aria-hidden="true"></i> ${t('preview.edit') || 'Edit'}
                </button>
                <button id="preview-pdf-btn" class="preview-btn preview-btn-primary" type="button">
                    <i class="fas fa-file-pdf" aria-hidden="true"></i> ${t('preview.savePdf') || 'Save PDF'}
                </button>
                <button id="preview-print-btn" class="preview-btn preview-btn-primary" type="button">
                    <i class="fas fa-print" aria-hidden="true"></i> ${t('preview.print') || 'Print'}
                </button>
                <button id="preview-whatsapp-btn" class="preview-btn preview-btn-success" type="button">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Lock page scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const iframe = document.getElementById('preview-iframe');
    
    // Use enhanced HTML for preview
    const docHTML = buildEnhancedDocHTML(exportData, logoSrc);

    iframe.onload = function () {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const style = iframeDoc.createElement('style');
            style.textContent = getChineseCulturalStyles();
            iframeDoc.head.appendChild(style);
            addCulturalElements(iframeDoc);
        } catch (e) { console.warn('Could not enhance preview with cultural elements:', e); }
    };
    iframe.srcdoc = docHTML;

    // Handlers - NOTE: only the "X" closes the modal now (Edit will close explicitly)
    const onCloseClick = () => closePreviewModal();

    const withBusy = async (btn, fn) => {
        if (!btn) return;
        const prevDisabled = btn.disabled;
        btn.disabled = true;
        btn.setAttribute('aria-busy', 'true');
        try { await fn(); } catch {} finally {
            btn.disabled = prevDisabled;
            btn.removeAttribute('aria-busy');
        }
    };

    const onPdfClick = async (e) => {
        await withBusy(e.currentTarget, async () =>
            generateEnhancedPdf(currentExportData, currentLogoSrc)
        );
    };

    const onPrintClick = async (e) => {
        await withBusy(e.currentTarget, async () =>
            printDocumentUnified?.(currentExportData, currentLogoSrc)
        );
    };

    const onWhatsClick = async (e) => {
        await withBusy(e.currentTarget, async () =>
            sharePdfToWhatsApp?.(currentExportData, currentLogoSrc)
        );
    };

    // "Edit" now returns to the form: close modal, focus a good field, and highlight briefly
    const onEditClick = async (e) => {
        await withBusy(e.currentTarget, async () => {
            // Inject a tiny highlight style once
            if (!document.getElementById('gd-edit-flash-style')) {
                const s = document.createElement('style');
                s.id = 'gd-edit-flash-style';
                s.textContent = `
                    .gd-edit-flash {
                        outline: 3px solid var(--jade, #0f766e);
                        outline-offset: 2px;
                        transition: outline-color .8s ease, outline-offset .8s ease;
                    }
                `;
                document.head.appendChild(s);
            }

            // Close preview first (restores scroll via cleanup)
            closePreviewModal();

            // Wait a tick so underlying layout is ready, then focus a sensible target
            await new Promise(r => requestAnimationFrame(() => setTimeout(r, 0)));

            // Preference order: explicit target, autofocus, first enabled text-like control
            const findEditTarget = () => {
                const explicit = document.querySelector('[data-edit-focus]');
                if (explicit) return explicit;

                const auto = document.querySelector('[autofocus]');
                if (auto && !auto.disabled && auto.offsetParent !== null) return auto;

                const candidates = Array.from(document.querySelectorAll('input, textarea, select'));
                for (const el of candidates) {
                    if (el.disabled) continue;
                    if (el.type === 'hidden') continue;
                    if (el.offsetParent === null) continue; // not visible
                    return el;
                }
                return null;
            };

            const target = findEditTarget();
            if (target) {
                try {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
                } catch {}
                try {
                    target.focus({ preventScroll: true });
                } catch {}
                try {
                    target.classList.add('gd-edit-flash');
                    setTimeout(() => target.classList.remove('gd-edit-flash'), 1200);
                } catch {}
            }
        });
    };

    modal.querySelector('.preview-close').addEventListener('click', onCloseClick);
    modal.querySelector('#preview-edit-btn').addEventListener('click', onEditClick);
    modal.querySelector('#preview-pdf-btn').addEventListener('click', onPdfClick);
    modal.querySelector('#preview-print-btn').addEventListener('click', onPrintClick);
    modal.querySelector('#preview-whatsapp-btn').addEventListener('click', onWhatsClick);

    modal.style.display = 'block';

    // Move focus to close button for accessibility
    const closeBtn = modal.querySelector('.preview-close');
    try { closeBtn?.focus(); } catch {}

    // Cleanup function to remove listeners and restore scroll when X is clicked
    _previewCleanup = () => {
        try { modal.querySelector('.preview-close')?.removeEventListener('click', onCloseClick); } catch {}
        try { modal.querySelector('#preview-edit-btn')?.removeEventListener('click', onEditClick); } catch {}
        try { modal.querySelector('#preview-pdf-btn')?.removeEventListener('click', onPdfClick); } catch {}
        try { modal.querySelector('#preview-print-btn')?.removeEventListener('click', onPrintClick); } catch {}
        try { modal.querySelector('#preview-whatsapp-btn')?.removeEventListener('click', onWhatsClick); } catch {}
        document.body.style.overflow = prevOverflow || '';
    };
}

/*// ====================================
// 🔄 ENHANCED EXPORT ENTRY POINT
// ====================================*/
async function prepareEnhancedExport(actionType) {
    const btnMap = { preview: '#previewButton', pdf: '#savePDF', print: '#printButton', whatsapp: '#whatsappButton' };
    const btnSel = btnMap[actionType] || '#previewButton';

    disableButton?.(btnSel);
    showYinYangLoader(t('toasts.generatingPreview') || t('toasts.generatingPDF'), btnSel);
    
    try {
        saveFormData(document, true);
        const exportData = collectFilledData() || {};
        
        if (!exportData.sections?.length) {
            showToast(t('errors.noDataToExport'), 'warning');
            return;
        }
        
        let logoSrc = await chooseWorkingLogoSrc();
        try { logoSrc = await toDataURL(logoSrc); } catch { logoSrc = LOGO_BASE64_FALLBACK; }
        
        // Use enhanced preview modal
        await showEnhancedPreviewModal(exportData, logoSrc);
        
    } catch (e) {
        console.error('Enhanced export error:', e);
        showToast(t('errors.exportFailed') || (currentLanguage === 'pt' ? 'Falha na exportação.' : 'Export failed.'), 'error');
    } finally {
        hideYinYangLoader();
        enableButton?.(btnSel);
    }
}

/*// ====================================
// 🎉 FINAL INTEGRATION - OVERRIDE EXISTING FUNCTIONS
// ====================================*/
// Add this to override the existing functions with enhanced versions
function initializeEnhancedPDF() {
    // Override the default PDF generation functions
    if (typeof window !== 'undefined') {
        // Override main export functions
        window.savePdfUnified = generateEnhancedPdf;
        window.saveToPDF = generateEnhancedPdf;
        window.prepareExport = prepareEnhancedExport;
        
        // Keep backward compatibility
        window.GoldenDiagnosis = window.GoldenDiagnosis || {};
        window.GoldenDiagnosis.generateEnhancedPDF = generateEnhancedPdf;
        window.GoldenDiagnosis.buildEnhancedDocHTML = buildEnhancedDocHTML;
        
        console.log('Enhanced PDF system initialized');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnhancedPDF);
} else {
    initializeEnhancedPDF();
}

// ... [KEEP ALL YOUR EXISTING CODE BELOW THIS POINT - the rest of your original functions remain unchanged]

/*// ====================================
// 📞 Phone helpers
// ====================================*/
function phoneE164IfPossible() {
    try {
        const data = readStore() || {};
        const digits = (data.phone || '').replace(/\D+/g,'');
        const country = data.country || (currentLanguage==='pt'?'BR':'US');
        const dial = (COUNTRY_PHONE?.[country] || COUNTRY_PHONE?.US || { dial:'1' }).dial;
        if (!digits) return null;
        const e164 = digits.startsWith(dial) ? digits : (dial + digits.replace(/^0+/, ''));
        return e164;
    } catch { return null; }
}

/*// ====================================
// 📤 Helpers to re-use current preview content (optional)
// ====================================*/
async function sendPreviewToWhatsApp(){
    try {
        const hasPreview = !!(currentExportData && currentExportData.sections?.length);
        if (hasPreview) {
            await sharePdfToWhatsApp(currentExportData, currentLogoSrc);
            return;
        }
        await sharePdfToWhatsApp(null, null);
    } catch (e) {
        console.error('sendPreviewToWhatsApp error:', e);
        showToast(t('errors.shareFailed'), 'error');
    }
}


/*// ====================================
// 🪟 Modals + Autosave + Menu + Header
// ====================================*/

/*// ------------------------------------
// 🧱 Ensure flashcard modal scaffold exists (create on demand)
// ------------------------------------*/
function ensureFlashcardModalExists() {
    if (!document.getElementById('flashcardModal')) {
        const wrap = document.createElement('div');
        wrap.id = 'flashcardModal';
        wrap.className = 'gd-modal';
        wrap.setAttribute('role', 'dialog');
        wrap.setAttribute('aria-modal', 'true');
        wrap.setAttribute('aria-labelledby', 'flashcardTitle');
        wrap.style.display = 'none';
        wrap.innerHTML = `
            <div class="gd-modal-backdrop" data-close="1"></div>
            <div class="gd-modal-dialog" role="document">
                <button id="closeFlashcardModal" class="gd-modal-close" aria-label="Close">&times;</button>
                <h2 id="flashcardTitle"></h2>
                <div id="flashcardBody"></div>
            </div>
        `;
        document.body.appendChild(wrap);
    }
    if (!document.getElementById('flashcard-modal-styles')) {
        const s = document.createElement('style');
        s.id = 'flashcard-modal-styles';
        s.textContent = `
            .gd-modal{position:fixed;inset:0;z-index:10010;display:none;opacity:0;transform:scale(.98)}
            .gd-modal-backdrop{position:absolute;inset:0;background:rgba(17,24,39,.55);backdrop-filter:blur(6px)}
            .gd-modal-dialog{position:relative;max-width:920px;margin:6vh auto;background:#fff;border-radius:16px;
                padding:18px;border:1px solid rgba(0,0,0,.1);box-shadow:0 24px 60px rgba(0,0,0,.2)}
            body.dark-mode .gd-modal-dialog{background:#111827;color:#e5e7eb;border-color:rgba(255,255,255,.12)}
            .gd-modal-close{position:absolute;top:8px;right:10px;font-size:24px;border:0;background:transparent;cursor:pointer}
        `;
        document.head.appendChild(s);
    }
}

/*// ------------------------------------
// 🃏 Open flashcard modal (safe if scaffold missing)
// ------------------------------------*/
function openFlashcardModal(title, content, sectionId) {
    const modal = $('#flashcardModal');
    if (!modal) return;
    
    const flashcardTitle = $('#flashcardTitle');
    const flashcardBody = $('#flashcardBody');
    
    if (flashcardTitle) flashcardTitle.textContent = title;
    if (flashcardBody) flashcardBody.innerHTML = content;
    
    hydrateFromStorage(flashcardBody);
    enableAutosave(flashcardBody);
    
    // 👉 attach phone/ZIP/address enhancers correctly
    if (sectionId === 'general') attachGeneralEnhancers(flashcardBody);
    
    document.body.classList.add('no-scroll');
    modal.style.display = 'block';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.95)';
    
    requestAnimationFrame(() => {
        modal.style.transition = 'all 0.3s ease';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    });
    
    const firstInput = flashcardBody?.querySelector('input, textarea, select');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
    
    setupModalKeyboardNavigation(modal);
}

/*// ------------------------------------
// 📦 Generic modal open (for #introModal etc.)
// ------------------------------------*/
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    document.body.classList.add('no-scroll');
    modal.style.display = 'block';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.95)';
    requestAnimationFrame(() => {
        modal.style.transition = 'all 0.25s ease';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    });
    updateI18nInDOM(modal);
    setupModalKeyboardNavigation(modal);
}

/*// ------------------------------------
// ⌨️ Keyboard nav (Esc to close) — bind once
// ------------------------------------*/
function setupModalKeyboardNavigation(modal) {
    const focusables = modal.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    const handler = (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
        } else if (e.key === 'Escape') {
            closeModal(modal.id);
        }
    };

    // Remove any previous handler we added
    const prev = modal.__kbHandler;
    if (prev) modal.removeEventListener('keydown', prev);
    modal.__kbHandler = handler;
    modal.addEventListener('keydown', handler);
}

/*// ------------------------------------
// ❌ Close modal (persist flashcard data)
// ------------------------------------*/
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.transition = 'all 0.3s ease';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.transition = '';
        document.body.classList.remove('no-scroll');
        
        if (modalId === 'flashcardModal') {
            saveFormData(document, true);
            markFilledFlashcards();
        }
    }, 300);
}

/*// ------------------------------------
// 💾 Autosave (debounced) for any container
// ------------------------------------*/
function enableAutosave(root = document) {
    const debounce = (fn, delay) => { 
        let t; 
        return (...args) => { 
            clearTimeout(t); 
            t = setTimeout(() => fn(...args), delay); 
        }; 
    };
    const saveDebounced = debounce(() => { 
        saveFormData(root, true); 
        markFilledFlashcards(); 
    }, 400);

    root.addEventListener('input', saveDebounced);
    root.addEventListener('change', saveDebounced);
}

/*// ------------------------------------
// 🧭 Header styles + shadow on scroll
// ------------------------------------*/
function ensureHeaderScrollStyles() {
    if (document.querySelector('#header-scroll-styles')) return;
    const s = document.createElement('style');
    s.id = 'header-scroll-styles';
    s.textContent = `
        header.app-header{
            position:fixed; 
            top:0; 
            z-index:1000;
            backdrop-filter:saturate(140%) blur(6px);
            transition: background .2s ease, box-shadow .2s ease, padding .2s ease, border-color .2s ease;
            background: rgba(255,255,255,.65); border-bottom: 1px solid rgba(0,0,0,.06);
        }
        header.app-header.scrolled{
            background: rgba(255,255,255,.92);
            box-shadow: 0 8px 16px rgba(0,0,0,.08);
        }
        body.dark-mode header.app-header{
            background: rgba(17,24,39,.55);
            border-bottom-color: rgba(255,255,255,.08);
        }
        body.dark-mode header.app-header.scrolled{
            background: rgba(17,24,39,.85);
            box-shadow: 0 8px 16px rgba(0,0,0,.55);
        }
    `;
    document.head.appendChild(s);
}

function setupHeaderScroll(selector = 'header.app-header') {
    /*// ------------------------------------
    // 🧭 Apply header shadow when scrolled
    // ------------------------------------*/
    const header = document.querySelector(selector);
    if (!header) return;
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 50) header.classList.add('scrolled');

        else header.classList.remove('scrolled');
        ticking = false;
    }

    function requestTick() {
        if (!ticking) { 
            requestAnimationFrame(updateHeader); ticking = true; 
        }
    }

    requestTick();
    window.addEventListener('scroll', requestTick, { passive: true });
}

/*// ====================================
// 🎛️ Mobile FAB reveal on scroll (existing behavior preserved)
// ====================================*/
(function () {
    const btnContainer = document.querySelector('.button-container');
    const raformButtons = document.querySelectorAll('.button-container .raform');
    if (!btnContainer) return;

    // Scroll threshold (in pixels) to reveal the buttons
    const SHOW_AT = 120;
    let isVisible = false;

    // Apply staggered animation delays (keeps in sync with CSS)
    function applyStagger() { 
        raformButtons.forEach((btn, i) => { 
            btn.style.animationDelay = (i * 80) + 'ms'; 
        }); 
    }

    function showButtons() {
        if (isVisible) return;
        applyStagger();
        btnContainer.classList.add('is-visible');
        isVisible = true;
    }

    function hideButtons() {
        if (!isVisible) return;
        btnContainer.classList.remove('is-visible');
        // Reset animation so it can play again next time
        raformButtons.forEach(b => { b.style.animation = 'none'; });
        // Force reflow to flush the reset
        void btnContainer.offsetWidth;
        raformButtons.forEach(b => { b.style.animation = ''; });
        isVisible = false;
    }

    function onScroll() { 
        if (window.scrollY > SHOW_AT) showButtons(); 
        else hideButtons(); 
    }

    // Initialize correct state on load and keep it updated on scroll
    window.addEventListener('load', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
})();

/* =======================================================================
// 🧩 Menus & Actions (About must keep menu open; close only via ❌)
// ======================================================================= */

/*// ------------------------------------
// 🔒 Close slide-in/mobile menus (only when explicit ❌ is clicked)
// ------------------------------------*/
function closeMobileMenu() {
    const modalMenu = $('#modalMenu');
    if (modalMenu && modalMenu.style.display === 'block') {
        modalMenu.style.opacity = '0';
        modalMenu.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            modalMenu.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }
    const appMenu = $('#appMenu');
    const toggle = $('#menuToggle');
    if (appMenu && appMenu.classList.contains('open')) {
        appMenu.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }
}
function closeAnyMenu() { closeMobileMenu(); }

/*// ------------------------------------
// 🔗 Wire [data-action] triggers (do NOT auto-close the menu)
// ------------------------------------*/
function setupActionLinks(root = document) {
    const map = {
        about: (e) => openIntroModal(e),     // keep menu open
        form: (e) => scrollToForm(e),        // keep menu open
        pdf: () => saveToPDF(),
        print: () => printDocumentPaged(),
        whatsapp: () => shareViaWhatsApp(),
        reset: () => resetAll(document),
        'lang-pt': () => switchLanguage('pt'),
        'lang-en': () => switchLanguage('en'),
        theme: () => toggleTheme()
    };
    root.querySelectorAll('[data-action]').forEach(el => {
        if (el.dataset.actionBound === '1') return;
        el.dataset.actionBound = '1';
        const action = el.getAttribute('data-action');
        const handler = (evt) => {
            if (evt) evt.preventDefault();
            const fn = map[action];
            if (typeof fn === 'function') fn(evt);
            else console.warn('Unknown action:', action);
        };
        el.addEventListener('click', handler);
        el.addEventListener('touchend', (evt) => { evt.preventDefault(); handler(evt); }, { passive: false });
    });
}
function setupMobileMenuItems() { setupActionLinks(document); }

/*// ------------------------------------
// 👆 Single-fire tap helper (prevents click+touch double triggers)
// ------------------------------------*/
function bindTap(el, handler) {
    if (!el || typeof handler !== 'function') return;
    let busy = false;
    const run = (e) => {
        // Avoid double-trigger (click + touchend)
        e && e.preventDefault && e.preventDefault();
        if (busy) return;
        busy = true;
        try { handler(e); } finally {
            // Small cooldown to swallow the paired event
            setTimeout(() => { busy = false; }, 60);
        }
    };
    el.addEventListener('click', run, { passive: false });
    el.addEventListener('touchend', run, { passive: false });
}

/*// ------------------------------------
// 📱 Mobile menu (overlay + legacy drawer) — only ❌ closes
// ------------------------------------*/
function setupMobileMenu() {
    const mobileMenuBtn = $('#mobileMenuBtn');
    const modalMenu = $('#modalMenu');
    const closeMenuBtn = $('#closeMenuBtn');

    // Open overlay menu
    if (mobileMenuBtn && modalMenu) {
        const openMenu = (e) => {
            e && e.stopPropagation && e.stopPropagation();
            modalMenu.style.display = 'block';
            document.body.classList.add('no-scroll');
            requestAnimationFrame(() => {
                modalMenu.style.opacity = '1';
                modalMenu.style.transform = 'translateX(0)';
            });
        };
        mobileMenuBtn.removeAttribute('onclick');
        bindTap(mobileMenuBtn, openMenu);
    }

    // Only ❌ closes
    if (closeMenuBtn && modalMenu) {
        const closeMenu = (e) => {
            e && e.stopPropagation && e.stopPropagation();
            closeMobileMenu();
        };
        closeMenuBtn.removeAttribute('onclick');
        bindTap(closeMenuBtn, closeMenu);
    }

    // Do NOT close on overlay click anymore (requirement)
    if (modalMenu) {
        const overlay = modalMenu.querySelector('.modal-overlay');
        if (overlay) {
            bindTap(overlay, (e) => {
                e && e.stopPropagation && e.stopPropagation();
                // no auto-close
            });
        }
    }

    // Legacy drawer still toggles (no implicit auto-close after actions)
    const toggle = $('#menuToggle');
    const appMenu = $('#appMenu');
    if (toggle && appMenu) {
        const onToggle = (e) => {
            e && e.stopPropagation && e.stopPropagation();
            const willOpen = !appMenu.classList.contains('open');
            appMenu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            if (willOpen) document.body.classList.add('no-scroll');
            else document.body.classList.remove('no-scroll');
        };
        bindTap(toggle, onToggle);
    }

    setupMobileMenuItems();
}

/*// ------------------------------------
// 🪪 Open intro modal (About) — keep menu OPEN
// ------------------------------------*/
function openIntroModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    openModal('introModal');
    // do NOT close the nav/menu here (requirement)
}

/*// ------------------------------------
// 🧭 Scroll to form grid and focus General card (menu stays open)
// ------------------------------------*/
function scrollToForm(e) {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.querySelector('#diagnosticForm') ||
                   document.querySelector('[data-form-start]') ||
                   document.querySelector('.flashcard') ||
                   document.body;
    try { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch {}
    const generalCard = document.querySelector('.flashcard[data-section-id="general"]');
    if (generalCard && generalCard.focus) setTimeout(() => generalCard.focus(), 350);
}

/*// ====================================
// 👥 Gender + Reset + Language (with Jade highlight)
// ====================================*/
function patchI18N() {
    const pt = I18N.pt.labels, en = I18N.en.labels;
    if (!pt.complaintDetails) pt.complaintDetails = I18N.pt.sections.complaint;
    if (!en.complaintDetails) en.complaintDetails = I18N.en.sections.complaint;
    if (!pt.thermoregulation) pt.thermoregulation = I18N.pt.sections.thermo;
    if (!en.thermoregulation) en.thermoregulation = I18N.en.sections.thermo;
}

function showFemale() {
    const f = document.getElementById('femaleFieldset');
    const m = document.getElementById('maleFieldset');
    if (f) f.style.display = 'block';
    if (m) m.style.display = 'none';
    const data = readStore(); data.gender = 'female'; writeStore(data);
}

function showMale() {
    const f = document.getElementById('femaleFieldset');
    const m = document.getElementById('maleFieldset');
    if (f) f.style.display = 'none';
    if (m) m.style.display = 'block';
    const data = readStore(); data.gender = 'male'; writeStore(data);
}

let _resetBusy = false;

function resetForm(root = document) {
    try {
        // keep the PC-only guard (optional)
        if (getCurrentViewMode?.() !== 'pc') {
            showToast(
                currentLanguage === 'pt'
                    ? 'O reset do formulário está disponível apenas no modo PC.'
                    : 'Form reset is available only in PC mode.',
                'warning'
            );
            return;
        }

        // prevent fast double-clicks only while we’re doing the reset
        if (_resetBusy) return;

        if (!confirm(t('alertResetConfirm'))) return;

        _resetBusy = true;
        disableButton?.('#resetForm');

        // do the real reset (no second confirm)
        resetAll(root, { skipConfirm: true });

        // re-enable shortly so user can reset again if needed
        setTimeout(() => {
            _resetBusy = false;
            enableButton?.('#resetForm');
        }, 400);
    } catch (e) {
        _resetBusy = false;
        enableButton?.('#resetForm');
        console.warn('resetForm error:', e);
    }
}

function resetAll(root = document, { skipConfirm = false } = {}) {
    if (!skipConfirm && !confirm(t('alertResetConfirm'))) return;

    localStorage.removeItem(STORAGE_KEY);

    $$('input, textarea, select', root).forEach(el => {
        if (!el.id) return;
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
        else el.value = '';
    });

    markFilledFlashcards();
    showToast(currentLanguage === 'pt' ? 'Formulário limpo.' : 'Form cleared.', 'success');
}

function updateI18nInDOM(ctx = document) {
    ctx.querySelectorAll('[data-i18n]').forEach(node => {
        const key = node.getAttribute('data-i18n');
        if (!key) return;
        node.textContent = t(key);
    });
    ctx.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        el.setAttribute('placeholder', t(key));
    });

    // Language highlight: ensure classes exist
    ['#langPT', '#langEN', '#menuLangPT', '#menuLangEN'].forEach(sel => {
        const el = $(sel);
        if (el) el.classList.add('lang-option');
    });

    // Toggle Jade highlight
    ['#langPT', '#menuLangPT'].forEach(sel => {
        const el = $(sel);
        if (!el) return;
        if (currentLanguage === 'pt') { el.classList.add('active'); el.classList.remove('inactive'); el.setAttribute('aria-pressed', 'true'); }
        else { el.classList.add('inactive'); el.classList.remove('active'); el.setAttribute('aria-pressed', 'false'); }
    });
    ['#langEN', '#menuLangEN'].forEach(sel => {
        const el = $(sel);
        if (!el) return;
        if (currentLanguage === 'en') { el.classList.add('active'); el.classList.remove('inactive'); el.setAttribute('aria-pressed', 'true'); }
        else { el.classList.add('inactive'); el.classList.remove('active'); el.setAttribute('aria-pressed', 'false'); }
    });
}

function switchLanguage(lang) {
    currentLanguage = (lang === 'en') ? 'en' : 'pt';
    localStorage.setItem(LANG_KEY, currentLanguage);
    document.documentElement.setAttribute('lang', currentLanguage);
    updateI18nInDOM(document);
    renderAllFlashcards();
    updateThemeButtonText(getCurrentTheme());
}

/*// ------------------------------------
// 📞 Enhance General section inputs (phone/zip lookups & masks)
// ------------------------------------*/
function attachGeneralEnhancers(root = document) {
    const countrySel = root.querySelector('#country');
    const phoneInput = root.querySelector('#phone');
    const zipInput = root.querySelector('#zip');

    if (countrySel && phoneInput) {
        const apply = () => setPhoneMaskBasedOnCountry((countrySel.value || 'BR').toUpperCase(), phoneInput);
        countrySel.addEventListener('change', () => { apply(); saveFormData(root, true); });
        phoneInput.addEventListener('input', () => {
            const cc = (countrySel.value || 'BR').toUpperCase();
            phoneInput.value = applyPhoneMaskForCountry(cc, phoneInput.value);
        });
        apply();
    }

    if (zipInput) {
        const maskZip = () => {
            const cc = (countrySel?.value || 'BR').toUpperCase();
            zipInput.value = maskPostal(cc, zipInput.value);
        };
        zipInput.addEventListener('input', maskZip);
        zipInput.addEventListener('blur', async () => {
            try {
                const cc = (countrySel?.value || 'BR').toUpperCase();
                const raw = zipInput.value || '';

                // Token sent to the API:
                const token = (cc === 'GB')
                    ? raw.toUpperCase().replace(/\s+/g,'').replace(/[^A-Z0-9]/g,'')  // keep alphanumerics
                    : raw.replace(/\D+/g,'');

                const enough =
                    (cc === 'BR' && token.length === 8) ||
                    (cc === 'US' && (token.length === 5 || token.length === 9)) ||
                    (cc === 'PT' && token.length === 7) ||
                    (cc === 'FR' && token.length === 5) ||
                    (cc === 'ES' && token.length === 5) ||
                    (cc === 'GB' && token.length >= 5 && token.length <= 7);

                if (!enough) return;
                await fillAddressFromPostal(cc, token, root);
            } catch (e) { console.warn(e); }
        });
        maskZip();
    }
}

/*// ------------------------------------
// 🔗 Fixed UI actions wiring
// ------------------------------------*/
function wireActions() {
    const actions = [
        ['#savePDF',        () => prepareExport('pdf')],
        ['#printButton',    () => prepareExport('print')],
        ['#whatsappButton', () => prepareExport('whatsapp')],
        ['#resetForm',      () => resetForm(document)],
        ['#themeToggle',    toggleTheme],
        ['#langPT',         () => switchLanguage('pt')],
        ['#langEN',         () => switchLanguage('en')],
        ['#closeFlashcardModal', () => closeModal('flashcardModal')]
    ];
    actions.forEach(([sel, fn]) => $(sel)?.addEventListener('click', fn));
}

function printDocument() { window.print(); }

/*// ====================================
// 📲 Action Sheet (tap / swipe) — floating vertical FAB stack (phone/tablet only)
//  — Minimal: only "Preview" and "Reset"
// ====================================*/
function ensureActionSheet() {
    /*// ------------------------------------
    // 🧩 Create action sheet only once (and only for phone/tablet)
    // ------------------------------------*/
    const isHandheld = () => {
        try {
            return window.matchMedia('(max-width:1024px)').matches || window.matchMedia('(pointer:coarse)').matches;
        } catch { return true; }
    };
    if (!isHandheld()) return;
    if (document.getElementById('gd-action-sheet')) return;

    const styles = document.createElement('style');
    styles.id = 'gd-action-sheet-styles';
    styles.textContent = `
        /* Hide on desktop */
        @media (min-width:1025px){
            #gd-action-sheet, #gd-action-fab, #gd-edge-swipe-right{ display:none !important; }
        }

        /* Kill any old toolbar visuals on handheld */
        @media (max-width:1024px){
            .button-container{
                background: transparent !important;
                border: 0 !important;
                box-shadow: none !important;
            }
            .button-container .raform{ display:none !important; }
        }

        /* Full-screen shell toggled by JS */
        #gd-action-sheet{
            position: fixed;
            inset: 0;
            display: none;
            z-index: 10020;
        }
        #gd-action-sheet.active{ display: block; }

        /* Transparent overlay—only to catch clicks outside */
        #gd-action-overlay{
            position: absolute;
            inset: 0;
            background: transparent;
        }

        /* Floating vertical stack (right side) */
        .gd-fab-stack{
            position: fixed;
            right: 20px;
            bottom: 90px; /* sits above main FAB */
            display: flex;
            flex-direction: column;
            gap: 14px;
            transform: translateX(24px);
            opacity: 0;
            pointer-events: none;
            transition: transform .25s ease, opacity .25s ease;
        }
        #gd-action-sheet.active .gd-fab-stack{
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
        }

        /* Mini FABs (round, colored, shadow) */
        .gd-mini-fab{
            width: 56px;
            height: 56px;
            border-radius: 999px;
            border: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 12px 18px rgba(0,0,0,.18);
            color: #fff;
            transition: transform .12s ease, opacity .2s ease;
        }
        .gd-mini-fab:active{ transform: scale(.96); }
        .gd-mini-fab i{ font-size: 20px; line-height: 1; }

        /* Palette */
        .gd-mini--preview{ background: linear-gradient(135deg, var(--jade, #0f766e), var(--gold, #d4af37)); }
        .gd-mini--reset{ background: linear-gradient(135deg, #C62a2a, #a31f1f); }

        /* Right-edge swipe zone (swipe left to open) */
        #gd-edge-swipe-right{
            position: fixed;
            top: 0;
            right: 0;
            width: 22px;
            height: 100vh;
            z-index: 10005;
            touch-action: manipulation;
        }

        /* Bottom-right main FAB (bolt) */
        #gd-action-fab{
            position: fixed;
            right: 20px;
            bottom: 20px;
            height: 56px;
            width: 56px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--jade, #0f766e), var(--gold, #d4af37));
            color: #fff;
            border: none;
            box-shadow: 0 10px 16px rgba(0,0,0,.16);
            z-index: 10010;
            cursor: pointer;
        }
    `;
    document.head.appendChild(styles);

    /*// ------------------------------------
    // 🧱 Build floating stack + transparent overlay
    // ------------------------------------*/
    const sheet = document.createElement('div');
    sheet.id = 'gd-action-sheet';
    sheet.innerHTML = `
        <div id="gd-action-overlay" aria-hidden="true"></div>
        <div class="gd-fab-stack" role="menu" aria-label="Quick actions">
            <button class="gd-mini-fab gd-mini--preview" id="gd-act-preview" title="${t?.('ui.btnPreview') || t?.('preview.title') || 'Preview'}">
                <i class="fa-solid fa-eye" aria-hidden="true"></i>
            </button>
            <button class="gd-mini-fab gd-mini--reset" id="gd-act-reset" title="${t?.('ui.resetForm') || 'Reset form'}">
                <i class="fa-solid fa-rotate" aria-hidden="true"></i>
            </button>
        </div>
    `;
    document.body.appendChild(sheet);

    /*// ------------------------------------
    // 🔘 Keep your floating FAB trigger (if none exists)
    // ------------------------------------*/
    if (!document.getElementById('actionMenuBtn') && !document.getElementById('gd-action-fab')) {
        const fab = document.createElement('button');
        fab.id = 'gd-action-fab';
        fab.setAttribute('aria-label', 'Actions');
        fab.innerHTML = '<i class="fa-solid fa-bolt"></i>';
        document.body.appendChild(fab);
        fab.addEventListener('click', () => actionSheetOpen());
    }

    /*// ------------------------------------
    // 🔗 Wire actions (overlay closes; buttons run and then close)
    // ------------------------------------*/
    document.getElementById('gd-action-overlay')?.addEventListener('click', () => actionSheetClose());

    document.getElementById('gd-act-preview')?.addEventListener('click', () => {
        try { prepareExport?.('preview'); } finally { actionSheetClose(); }
    });

    document.getElementById('gd-act-reset')?.addEventListener('click', () => {
        try { resetAll?.(document); } finally { actionSheetClose(); }
    });

    /*// ------------------------------------
    // 👆 Right-edge swipe to OPEN (leftward)
    // ------------------------------------*/
    if (!document.getElementById('gd-edge-swipe-right')) {
        const edge = document.createElement('div');
        edge.id = 'gd-edge-swipe-right';
        document.body.appendChild(edge);

        let startX = null, opened = false;
        edge.addEventListener('touchstart', (e) => { startX = e.touches?.[0]?.clientX ?? null; opened = false; }, { passive: true });
        edge.addEventListener('touchmove', (e) => {
            if (startX == null) return;
            const dx = (e.touches?.[0]?.clientX ?? startX) - startX;
            if (dx < -28 && !opened) { opened = true; actionSheetOpen(); }
        }, { passive: true });
        edge.addEventListener('touchend', () => { startX = null; opened = false; }, { passive: true });
    }

    /*// ------------------------------------
    // 👇 Swipe DOWN on the stack to CLOSE
    // ------------------------------------*/
    (function bindStackSwipeToClose() {
        const stack = sheet.querySelector('.gd-fab-stack');
        let y0 = null, didClose = false;
        stack.addEventListener('touchstart', (e) => { y0 = e.touches?.[0]?.clientY ?? null; didClose = false; }, { passive: true });
        stack.addEventListener('touchmove', (e) => {
            if (y0 == null || didClose) return;
            const dy = (e.touches?.[0]?.clientY ?? y0) - y0;
            if (dy > 28) { didClose = true; actionSheetClose(); }
        }, { passive: true });
        stack.addEventListener('touchend', () => { y0 = null; didClose = false; }, { passive: true });
    })();

    // ESC closes
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') actionSheetClose(); });

    // Close if resized to desktop
    window.addEventListener('resize', () => { if (!isHandheld()) actionSheetClose(); }, { passive: true });
}

/*// ------------------------------------
// 🔓 Public toggles
// ------------------------------------*/
function actionSheetOpen()  {
    document.getElementById('gd-action-sheet')?.classList.add('active');
    document.body.classList.add('no-scroll');
}
function actionSheetClose() {
    document.getElementById('gd-action-sheet')?.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

/*// ====================================
    // 🧭 Boot and Initialization (guarded + idempotent + SSR-safe)
    // - If window.__GD_HEADLESS__ === true we skip heavy UI work
    // - Prevent double-boot across partial reloads/HTMX swaps/etc.
    // - Defer non-critical work to idle/next tick for faster FCP
    // ====================================*/
(function boot() {
    try {
        const g = typeof window !== 'undefined' ? window : globalThis;
        if (g.__GD_BOOT_DONE__) return;            // idempotency guard
        g.__GD_BOOT_DONE__ = true;

        // Minimal i18n + theme scaffolding (works in headless too)
        try { patchI18N?.(); } catch {}
        try { ensureThemedUIStyles?.(); } catch {}

        // Language detection (localStorage may be blocked in some headless/iframes → guarded)
        let savedLang = 'pt';
        try {
            savedLang = localStorage.getItem(LANG_KEY) || document.documentElement.getAttribute('lang') || 'pt';
        } catch {}
        g.currentLanguage = (savedLang === 'en') ? 'en' : 'pt';
        try { document.documentElement.setAttribute('lang', g.currentLanguage); } catch {}

        // If headless rendering (Puppeteer/Server), bail after minimal setup
        if (g.__GD_HEADLESS__ === true) return;

        // Wire legacy shims early so inline onclick/data-action work immediately
        try { wireLegacyGlobalShims(); } catch {}

        // Critical, lightweight UI init (synchronous)
        try { initTheme?.(); } catch {}
        try { ensureHeaderScrollStyles?.(); setupHeaderScroll?.('header.app-header'); } catch {}

        // Non-critical heavy work → next tick / idle
        const idle = g.requestIdleCallback || ((fn) => setTimeout(fn, 0));
        idle(() => {
            try { renderAllFlashcards?.(); } catch {}
            try { enableAutosave?.(document); } catch {}
            try { attachGeneralEnhancers?.(document); } catch {}
            try { updateI18nInDOM?.(document); } catch {}

            try { setupMobileMenu?.(); } catch {}
            try { wireActions?.(); } catch {}

            try { ensureActionSheet?.(); } catch {}

            // Gender-specific toggles (tolerant to empty store)
            try {
                const gstate = readStore?.() || {};
                if (gstate.gender === 'female') { try { showFemale?.(); } catch {} }
                else if (gstate.gender === 'male') { try { showMale?.(); } catch {} }
            } catch {}
        });

        // Finally, set up legacy onclicks/data-action wiring (idempotent)
        try { setupLegacyOnClicks(); } catch {}
    } catch (e) {
        console.warn('Boot error:', e);
    }
})();

/*// ====================================
    // 🧭 Backwards-compat shims (GLOBAL)
    // - Guarantees inline onclick="saveToPDF()" works
    // - Maps legacy names → unified implementations without redeclaration
    // - Safe even if site overrides already exist
    // ====================================*/
function wireLegacyGlobalShims(){
    const g = typeof window !== 'undefined' ? window : globalThis;

    // Primary modern APIs (ensure they exist before mapping)
    //  - printDocumentUnified / savePdfUnified / sharePdfToWhatsApp are defined elsewhere in your file.
    const map = {
        printDocumentSmart:       () => g.printDocumentUnified,
        saveToPDF:                () => g.savePdfUnified,
        shareViaWhatsApp:         () => g.sharePdfToWhatsApp,
        // Extra aliases found in your codebase / historically referenced:
        printDocumentPaged:       () => g.printDocumentUnified,     // desktop uses Paged.js internally
        exportPDFPaged:           () => g.savePdfUnified,
        shareViaWhatsAppPaged:    () => g.sharePdfToWhatsApp,
        sendPreviewToWhatsApp:    () => g.sharePdfToWhatsApp        // convenience alias
    };

    Object.keys(map).forEach((legacy) => {
        try {
            if (typeof g[legacy] !== 'function') {
                const target = map[legacy]();
                if (typeof target === 'function') g[legacy] = target;
            }
        } catch {}
    });
}

/*// ====================================
    // 🪟 Expose legacy names (onclicks antigos) — ROBUST VERSION
    // - Uses event delegation so late/dynamic nodes work
    // - MutationObserver rescans for [data-action] changes
    // - Prevents default on anchors with href="#" to avoid jumps
    // - Still mirrors functions to window for inline onclick support
    // ====================================*/
function setupLegacyOnClicks(){
    // 1) Mirror a curated allowlist from globalThis → window (inline onclick safety)
    const allow = [
        'exportPDFPaged','printDocumentPaged','printDocument',
        'saveToPDF','shareViaWhatsApp','shareViaWhatsAppPaged','sendPreviewToWhatsApp',
        'switchLanguage','toggleTheme','openFlashcardModal','closeModal',
        'renderAllFlashcards','resetAll','showFemale','showMale','saveFormData',
        'hydrateFromStorage','readStore','openIntroModal','scrollToForm',
        'showPreviewModal','prepareExport',
        // Modern unified names too, for completeness:
        'printDocumentUnified','savePdfUnified','sharePdfToWhatsApp'
    ];
    const available = {};
    for (const n of allow) {
        const fn = (typeof globalThis[n] === 'function') ? globalThis[n] : null;
        if (fn) { try { window[n] = fn; } catch {} available[n] = fn; }
    }

    // 2) Resolve handler name → function, honoring legacy aliases
    const alias = {
        exportPDFPaged:        'savePdfUnified',
        printDocumentPaged:    'printDocumentUnified',
        saveToPDF:             'savePdfUnified',
        shareViaWhatsApp:      'sharePdfToWhatsApp',
        shareViaWhatsAppPaged: 'sharePdfToWhatsApp',
        sendPreviewToWhatsApp: 'sharePdfToWhatsApp'
    };
    function getHandler(name){
        const direct = available[name] || globalThis[name];
        if (typeof direct === 'function') return direct;
        const mapped = alias[name];
        if (mapped && typeof globalThis[mapped] === 'function') return globalThis[mapped];
        return null;
    }

    // 3) Event delegation: single listener for the whole document
    function clickDelegate(e){
        const el = e.target.closest?.('[data-action]');
        if (!el) return;
        const action = el.getAttribute('data-action');
        const handler = getHandler(action);
        if (typeof handler === 'function') {
            // Avoid accidental page jumps on anchors used as buttons
            const tag = el.tagName?.toLowerCase();
            const href = el.getAttribute?.('href') || '';
            if (tag === 'a' && (href === '#' || href.startsWith('javascript:'))) e.preventDefault();
            try { handler.call(el, e); } catch (err) { console.error(`Handler error for ${action}:`, err); }
        }
    }

    // Avoid duplicate delegates
    document.removeEventListener('click', clickDelegate, true);
    document.addEventListener('click', clickDelegate, true);

    // 4) MutationObserver to auto-mark late nodes (optional but handy)
    const mo = new MutationObserver((muts) => {
        for (const m of muts) {
            if (m.type === 'attributes' && m.attributeName === 'data-action') continue;
            m.addedNodes?.forEach?.(node => {
                if (!(node instanceof Element)) return;
                // Accessibility polish for any newly added [data-action] items
                node.querySelectorAll?.('[data-action]').forEach(btn => {
                    if (!btn.hasAttribute('role')) btn.setAttribute('role','button');
                    if (!btn.hasAttribute('tabindex')) btn.setAttribute('tabindex','0');
                });
            });
        }
    });
    try { mo.observe(document.body, { subtree:true, childList:true, attributes:true, attributeFilter:['data-action'] }); } catch {}
}

/*// ====================================
// 🔌 Public render helpers for headless/server
// ====================================*/
if (typeof window !== 'undefined') {
    try {
        window.GoldenDiagnosis = window.GoldenDiagnosis || {};
        window.GoldenDiagnosis.buildDocHTML          = window.GoldenDiagnosis.buildDocHTML          || buildDocHTML;
        window.GoldenDiagnosis.buildDocHTMLForPaged  = window.GoldenDiagnosis.buildDocHTMLForPaged  || buildDocHTMLForPaged;
        window.GoldenDiagnosis.injectPrintFixes      = window.GoldenDiagnosis.injectPrintFixes      || injectPrintFixes;
        window.GoldenDiagnosis.ensureHtml2PdfLibrary = window.GoldenDiagnosis.ensureHtml2PdfLibrary || ensureHtml2PdfLibrary;

        if (typeof printDocumentUnified === 'function')  window.GoldenDiagnosis.print  = printDocumentUnified;
        if (typeof savePdfUnified === 'function')        window.GoldenDiagnosis.pdf    = savePdfUnified;
        if (typeof sharePdfToWhatsApp === 'function')    window.GoldenDiagnosis.share  = sharePdfToWhatsApp;

        window.GoldenDiagnosis.generateHTML = function (exportData, logoSrc, usePaged = false) {
            return usePaged
                ? window.GoldenDiagnosis.buildDocHTMLForPaged(exportData, logoSrc)
                : window.GoldenDiagnosis.buildDocHTML(exportData, logoSrc);
        };
    } catch {}
}