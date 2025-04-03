import { act } from 'react-dom/test-utils';
import { useLanguage } from '../../src/services/i18n'; 

describe('useLanguage store', () => {
  beforeEach(() => {
    // Simulate a Spanish browser
    Object.defineProperty(window.navigator, 'language', {
      value: 'es-ES',
      configurable: true
    });
    useLanguage.setState({ language: 'es' }); 
  });

  it('should initialize with the correct language based on navigator.language', () => {
    expect(useLanguage.getState().language).toBe('es'); 
  });

  it('should change the language when setLanguage is called', () => {
    act(() => {
      useLanguage.getState().setLanguage('fr');
    });
    expect(useLanguage.getState().language).toBe('fr');
  });

  it('should return the correct translation', () => {
    act(() => {
      useLanguage.getState().setLanguage('en');
    });
    expect(useLanguage.getState().t('tryNow')).toBe('Try it now');
  });

  it('should handle non-existent translation keys', () => {
    expect(useLanguage.getState().t('non.existent.key')).toBe('Missing translation: non.existent.key');
  });
});





