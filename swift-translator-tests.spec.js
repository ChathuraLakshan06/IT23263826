const { test, expect } = require('@playwright/test');


const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};


const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'ammee mama parissamin gihin ennam',
      expected: 'අම්මේ මම පරිස්සමින් ගිහින් එන්නම්',
      category: 'Daily language usage',
      grammar: 'Simple sentence / frecquently used phrase',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple asking about feelings with mix',
      input: 'mata oyaa gaena crush ekak thiyenavaa eeth ahanna baee',  
      expected: 'මට ඔයා ගැන crush එකක් තියෙනවා ඒත් අහන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Compound sentence and english technical term',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Negation in past tense',
      input: 'mama dhaenan hitiyaa adha DS Lecture eka thiyenavaa kiyalaa',
      expected: 'මම දැනන් හිටියා අද DS Lecture එක තියෙනවා කියලා',
      category: 'Daily language usage',
      grammar: 'Negation in past tense',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'mama mee vaedee ivara karalama kanna enavaa',
      expected: 'මම මේ වැඩේ ඉවර කරලම කන්න එනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Weather condition compound',
      input: 'adha vaessa nisaa kudayak aran yanna',
      expected: 'අද වැස්ස නිසා කුඩයක් අරන් යන්න',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'oyaata magee laptop ekee pin eka mathaka thibbadha ?',
      expected: 'ඔයාට මගේ laptop එකේ pin එක මතක තිබ්බද ?',
      category: 'Daily language usage',
      grammar: 'Complex sentence with conditional clause',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_007',
      name: 'Question about regulations',
      input: 'kaanthaa haa Lamaa katayuthu saha samaaja aarakShaNa saha Lamaa aarakShaNa niithi gaena oyaa dhannavadha?',
      expected: 'කාන්තා හා ළමා කටයුතු සහ සමාජ ආරක්ෂණ සහ ළමා ආරක්ෂණ නීති ගැන ඔයා දන්නවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Notification about meeting',
      input: 'machQQ mata adha zoom meeting ekak thiyenavaa 3.30 PM venakam mama enakam inna bar ekata yanna epaa',
      expected: 'මචං මට අද zoom meeting එකක් තියෙනවා 3.30 PM වෙනකම් මම එනකම් ඉන්න bar එකට යන්න එපා',
      category: 'Daily language usage',
      grammar: 'branded term and time format',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'mama gedhara yanna kalin Documents tika email ekakata attach karalaa oyata evanna hithuvee namuth WIFI issue ekak nisaa eka kara ganna baeri unaa',
      expected: 'මම ගෙදර යන්න කලින් Documents ටික email එකකට attach කරලා ඔයට එවන්න හිතුවේ නමුත් WIFI issue එකක් නිසා එක කර ගන්න බැරි උනා',
      category: 'complex sentence / technical term',
      grammar: 'Compound sentence(cause effect) / past tense',
      length: 'M'
    },
    
  
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'kaNdaayama siiruven sitin',
      expected: 'කණ්ඩායම සීරුවෙන් සිටින්',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'karuNaakaralaa oyaagee pen eka mata dhenavadha ?',
      expected: 'කරුණාකරලා ඔයාගේ pen එක මට දෙනවද ?',
      category: 'Greeting / request',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'suBha udhaeesanak ',
      expected: 'සුභ උදෑසනක්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'ov hari',
      expected: 'ඔව් හරි',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Feeling expression',
      input: 'mee test nisaa mata pissu haedhilaa navathinnee',
      expected: 'මේ test නිසා මට පිස්සු හැදිලා නවතින්නේ',
      category: 'Daily language usage',
      grammar: 'feeling expression in present tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'api heta yaapanaya yamu',
      expected: 'අපි හෙට යාපනය යමු',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'mata oonee naee oyaagee udhav',
      expected: 'මට ඕනේ නෑ ඔයාගේ උදව්',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_018',
      name: 'Plural future tense usage',
      input: 'eyaala heta apee dhihaa enavaa apee akkagee marriage eka gaen kathaa karaganna kiiyata eyidha dhannee naee eeth anivaaren enavaa kiyuvaa velaava 7.30 vagee veyi kiyalaa thamaa kiyu​vee',
      expected: 'එයාල හෙට අපේ දිහා එනවා අපේ අක්කගේ marriage එක ගැන් කතා කරගන්න කීයට එයිද දන්නේ නෑ ඒත් අනිවාරෙන් එනවා කියුවා වෙලාව 7.30 වගේ වෙයි කියලා තමා කියු​වේ',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'L'
    },
    
    
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'poddak innako mama ennam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'mata oyaagee whatsapp ID eka dhenna puLuvandha ? baee eeka mokatadha oyaa​ta',
      expected: 'මට ඔයාගේ whatsapp ID එක දෙන්න පුළුවන්ද ? බෑ ඒක මොකටද ඔයා​ට',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'nimeelaa Kandy giyaa',
      expected: 'නිමේලා Kandy ගියා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'jeesu pihitayi !',
      expected: 'ජේසු පිහිටයි !',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'thaaththee mata ru 1000 oonee ',
      expected: 'තාත්තේ මට රු 1000 ඕනේ',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_024',
      name: 'Medium length conversation',
      input: 'magee NIC eka naethi velaa bus ekee gedhara enakota dhaekapu kavuruhari magee address ekata thaepael karanavadha ?',
      expected: 'මගේ NIC එක නැති වෙලා bus එකේ ගෙදර එනකොට දැකපු කවුරුහරි මගේ address එකට තැපැල් කරනවද ?',
      category: 'Daily language usage',
      grammar: 'Compound sentence and English abbreviations and short forms',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata    oyaa     ekka    aadharaen    inna   oonee   eeth   oyata   hariyatamata   oyaa   ekka   aadharen   inna oonee   eeth   oyaa   maava   haemathissema   tharaha   gassanavaa   nee',
      expected: 'මට ඔයා එක්ක ආදරෙන් ඉන්න ඕනේ ඒත් ඔයා මාව හැමතිස්සෙම තරහ ගස්සනවා නේ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'ithihaasayee godak minissu apee rata venuven\nlee vaegiru​vaa',
      expected: 'ඉතිහාසයේ ගොඩක් මිනිස්සු අපේ රට වෙනුවෙන්\nලේ වැගිරු​වා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple past sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang supiriyaane',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'machQQ mata adha epaa velaa innee mokatadha mandhaa mee degree eka mama thooragaththadha man​dhaa',
      expected: 'මචං මට අද එපා වෙලා ඉන්නේ මොකටද මන්දා මේ degree එක මම තෝරගත්තද මන්​දා',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mamamaedamtalecturestikaillalaaemailekakyaevvaaeethreplykaree​naee',
      expected: 'මම මැඩම්ට lectures ටික ඉල්ලලා email එකක් යැව්වා ඒත් reply කරේ ​නෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP mata mee vaedee karalaa oonee',
      expected: 'මට ASAP මට මේ වැඩේ කරලා ඕනේ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee?',
      expected: 'ඔයා කොහෙද ඉන්නේ?',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eeyi bro mata peennee assignment ekata kela venna yannee deadline laga​yi',
      expected: 'එයි ​බ්‍රෝ මට පේන්නේ assignment එකට කෙල වෙන්න යන්නේ deadline ලග​යි',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.fill('');
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}


test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
   
      await input.type(TEST_DATA.ui.partialInput, { delay: 150 });
      
      
      await page.waitForTimeout(1500);
      
      
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      
      await input.type(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      
      await translator.waitForOutput();
      
      
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
