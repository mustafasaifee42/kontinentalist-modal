import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function ModalContent({
  title,
  content,
}: {
  title: string;
  content: {
    id: string;
    action: string;
    img: string;
    desc: string;
  }[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className='flex w-full flex-wrap gap-x-0 gap-y-4 bg-white'>
      <div className='w-full bg-green-100 md:w-1/3'>
        <img
          src={`/imgs/${content[index].img}`}
          alt='Carrousel visual'
          className='h-full w-full border-green-900 border-b-2 object-cover md:border-r-2 md:border-b-0'
        />
      </div>
      <div className='flex w-full flex-col items-center gap-2 p-6 md:w-2/3'>
        <div className='flex w-full grow flex-col gap-4'>
          <h4 className='text-lg md:text-2xl'>{title}</h4>
          <h3 className='text-2xl text-green-900 md:text-4xl'>{content[index].action}</h3>
          <p className='text-base md:text-xl'>{content[index].desc}</p>
        </div>
        <div className='flex items-center gap-4'>
          <button
            type='button'
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
            className='cursor-pointer text-green-900 disabled:cursor-not-allowed disabled:text-black disabled:opacity-30'
          >
            <ChevronLeft size={24} />
          </button>
          <span className='m-0 text-green-900 text-xl'>
            {index + 1} of {content.length}
          </span>
          <button
            type='button'
            onClick={() => setIndex(index + 1)}
            disabled={index === content.length - 1}
            className='cursor-pointer text-green-900 disabled:cursor-not-allowed disabled:text-black disabled:opacity-30'
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
