import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(
    <TodoAdd 
      handleAddTodo={handleAddTodo}
    />
  );
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('no debe de llamar handleAddTodo', () => {
    // Forma alternativa al .simulate
    const formSubmit =wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamar la función handleAddTodo', () => {
    const value = 'Aprender Firebase';
    wrapper.find('input').simulate('change', {target: {value, name: 'description'}});
    wrapper.find('form').simulate('submit', {preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
