import * as S from './Subs.styled';
import { Subscriber } from '../../models';

interface Props {
  subscriber: Subscriber;
}

const Sub = (props: Props) => {
  return (
    <S.Sub key={props.subscriber.id}>
      <S.SubImg src={props.subscriber.avatar} alt={props.subscriber.nick} />
      <h4>
        {props.subscriber.nick} <small>({props.subscriber.subMonths})</small>
      </h4>
      <p>{props.subscriber.description}</p>
    </S.Sub>
  );
};

export default Sub;
