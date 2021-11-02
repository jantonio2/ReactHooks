import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Antonio',
    email: 'antonio@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    const {result} = renderHook(() => useForm(initialForm));
    // const [formValues, handleInputChange, reset] = result.current;

    expect(result.current[0]).toEqual(initialForm);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
  });

  test('debe de cambiar el valor del formulario (name)', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        // Porque se esta simulando un evento
        target: {
          name: 'name',
          value: 'Carlos'
        }
      });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({...initialForm, name: 'Carlos'});
  });
  
  test('debe de re-establecer el formulario con RESET', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        // Porque se esta simulando un evento
        target: {
          name: 'name',
          value: 'Carlos'
        }
      });
      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
  
});
