import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Translate from '../lib/Translate';
import { translateType } from '../types';
import { translateDefault } from '../data/default';

class Localization extends Component {
	static displayName = 'Localization';

  static propTypes = {
	  translate: translateType,
	  onLocaleChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
	  translate: translateDefault,
  };

	state = {
	  translate: this.props.translate,
	};

  handleCountry = ({ target: { value } }) => {
    const { onLocaleChange } = this.props;
    this.setState({
      translate: new Translate(value).translate,
    });
	  onLocaleChange({ country: value });
  };

  render() {
    const { translate } = this.state;

    return (
      <div>
        <form className="locale-form">
          <select
            onChange={this.handleCountry}
            id="countrySelect"
            name="country"
          >
            <option value="US">{translate('UNITED_STATES')}</option>
            <option value="BE">{translate('BELGIUM')}</option>
            <option value="SE">{translate('SWEDEN')}</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Localization;
