import { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog';
import { data } from './data';

import '@/styles/fonts.css';
import '@/styles/style.css';
import ModalContent from './ModalContent';

function App() {
  return (
    <div className='flex min-h-screen flex-col justify-center p-8'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((item) => (
          <Dialog key={item.title}>
            <DialogTrigger className='flex flex-col gap-2 bg-green-800 p-6 text-left'>
              <h3 className='font-left font-semibold text-2xl text-white'>{item.title}</h3>
              <img
                src={`/imgs/${item.bg}`}
                alt={item.title}
                className='h-full w-full object-cover'
              />
            </DialogTrigger>
            <DialogContent className='w-2/3'>
              <ModalContent {...item} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

export default App;
