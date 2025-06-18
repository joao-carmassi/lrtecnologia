'use client';
import IContainers from '@/interfaces/IContainers';
import moveTela from '@/util/moveTela';

interface Props {
  containers: IContainers[];
}

export default function FooterSection({ containers }: Props) {
  return (
    <footer className="border-b bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} LR soluções, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {containers.map((item, index) => (
              <button
                onClick={() => {
                  moveTela(item.id);
                }}
                key={index}
                id={item.id}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                {item.nome}
              </button>
            ))}
            <button
              onClick={() => {
                moveTela('containerForm', 'start');
              }}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              Contatar
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

