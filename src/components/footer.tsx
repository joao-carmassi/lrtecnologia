'use client';
import IContainers from '@/interfaces/IContainers';
import moveTela from '@/util/moveTela';
import { Separator } from './ui/separator';

interface Props {
  containers: IContainers[];
}

export default function FooterSection({ containers }: Props) {
  return (
    <footer className="border-b bg-card py-12 dark:bg-transparent px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first mx-auto md:mx-0">
            © 2025 LR soluções, All rights reserved
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
      <Separator className="w-full max-w-5xl mx-auto my-5 bg-muted-foreground/30" />
      <div className="mx-auto max-w-5xl flex items-center justify-end text-muted-foreground">
        <a
          className="hover:underline text-sm"
          target="_blank"
          href="https://joao-carmassi.github.io/portifolio/"
        >
          Powered by João Carmassi
        </a>
      </div>
    </footer>
  );
}
