import * as languages from '../data/languages';

const DEFAULT_LANGUAGE = 'US';

class Translate {
  constructor(lang = DEFAULT_LANGUAGE) {
    this.setLanguage(lang);
  }

	setLanguage = (lang) => {
  	this.lang = languages[lang] ? lang : DEFAULT_LANGUAGE;
	};

	translate = str => languages[this.lang][str] || str;
}

export default Translate;
