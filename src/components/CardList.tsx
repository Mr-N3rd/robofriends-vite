import Card from './Card';
import { CardListProps } from '../types/types';

const CardList = ({ robots }: CardListProps) => {
  return (
    <>
      <div className="bg-purple-700 grid grid-cols-3">
        {
          robots.map((user, i) => {
            console.log(user)
            return (
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default CardList;