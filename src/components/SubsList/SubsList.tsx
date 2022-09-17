import { Subscriber } from '../../models';
import { Loading } from '../Loading';
import { Sub } from '../Sub';

interface Props {
  subs: Subscriber[];
}

const SubsList = (props: Props) => {
  return <ul>{props.subs.length > 0 ? props.subs.map(sub => <Sub key={sub.id} subscriber={sub} />) : <Loading />}</ul>;
};

export default SubsList;
