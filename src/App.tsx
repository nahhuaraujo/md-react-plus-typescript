import { useEffect, useState } from 'react';
import * as S from './styled-components';
import { SubsForm, SubsList } from './components';
import { DUMMY_SUBS } from './data';
import { Subscriber } from './models';

const App = () => {
  const [subs, setSubs] = useState<Subscriber[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSubs(DUMMY_SUBS);
    }, 2000);
  }, []);

  const addSub = (sub: Subscriber) => {
    setSubs([
      ...subs,
      {
        id: Math.random(),
        nick: sub.nick,
        subMonths: sub.subMonths,
        avatar: `https://i.pravatar.cc/150?u=${sub.nick}`,
        description: sub.description,
      },
    ]);
  };

  return (
    <S.App>
      <S.AppTitle>Subs</S.AppTitle>
      <SubsForm addSub={addSub} />
      <SubsList subs={subs} />
    </S.App>
  );
};

export default App;
