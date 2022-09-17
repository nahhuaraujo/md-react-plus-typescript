import { useState } from 'react';
import { Subscriber } from '../../models';
import * as S from './SubsForm.styled';

interface Props {
  addSub: (sub: Subscriber) => void;
}

const SubsForm = (props: Props) => {
  const [inputValues, setInputValues] = useState<Subscriber>({
    nick: '',
    subMonths: 0,
    description: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.name === 'subMonths' ? Number.parseInt(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.preventDefault());
    props.addSub(inputValues);
    setInputValues({ nick: '', subMonths: 0, description: '' });
  };

  return (
    <S.SubsForm>
      <form onSubmit={handleSubmit}>
        <input name='nick' value={inputValues.nick} onChange={changeHandler} type='text' placeholder='Nick' />
        <input
          name='subMonths'
          value={inputValues.subMonths}
          onChange={changeHandler}
          type='number'
          placeholder='Sub Month'
        />
        <textarea
          name='description'
          value={inputValues.description}
          onChange={changeHandler}
          placeholder='Description'
        />
        <button type='submit'>Save new sub</button>
      </form>
    </S.SubsForm>
  );
};

export default SubsForm;
