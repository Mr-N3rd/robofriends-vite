import { CardProps } from '../types/types'

const Card = ({ name, email, id }: CardProps) => {
  return (
    <div className={`grid justify-items-center px-2 mx-2 col-span-1`}>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div className=" ">
        <h2 className={`font-bold pt-2`}>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
