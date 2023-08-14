import { ScrollProps } from '../types/types';

const Scroll = (props: ScrollProps) => {
  return (
    <div className=''>
      <div className={`px-2 overflow-scroll h-2/6 w-auto`}>
        {props.children}
      </div>
    </div>

  );
};

export default Scroll;