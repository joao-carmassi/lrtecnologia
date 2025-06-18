import { Lightbulb, Sparkle } from 'lucide-react';

const Foco = () => {
  return (
    <section
      id="foco"
      className="max-w-5xl py-8 md:py-22 px-6 mx-auto flex flex-col gap-y-5"
    >
      <div className="p-10 gap-20 bg-primary flex text-background shadow-md md:rounded-r-full">
        <div>
          <h2 className="text-balance text-3xl font-semibold lg:text-4xl">
            FOCO
          </h2>
          <p className="mt-8">
            Entender as necessidades e objetivos dos clientes para
            transformá-los em ferramentas e processos que realmente agreguem
            valor ao trabalho no dia a dia
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Lightbulb className="size-40 ring-2 ring-background rounded-full p-10" />
        </div>
      </div>
      <div className="p-10 gap-20 flex md:justify-end bg-card shadow-md md:rounded-l-full">
        <div className="hidden md:flex items-center justify-center">
          <Sparkle className="size-40 ring-2 ring-foreground rounded-full p-10" />
        </div>
        <div>
          <h2 className="text-balance text-end text-3xl font-semibold lg:text-4xl">
            COMO ISSO É POSSÍVEL?
          </h2>
          <p className="mt-8 text-end">
            Envolvendo desde a análise inicial dos processos, passando pela
            construção de dashboards dinâmicos, até a entrega de soluções que
            otimizam operações e melhoram a tomada de decisão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Foco;
