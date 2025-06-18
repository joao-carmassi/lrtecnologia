import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  BookOpen,
  ChartColumnDecreasing,
  Clipboard,
  GraduationCap,
} from 'lucide-react';
import { ReactNode } from 'react';

export default function Features() {
  return (
    <section id="perfil" className="bg-background py-10 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Perfil Profissional
          </h2>
        </div>
        <div className="md:grid-cols-2 mx-auto mt-8 grid max-w-full gap-6 md:gap-10 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <GraduationCap className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="font-medium text-lg">Formações</h3>
            </CardHeader>

            <CardContent>
              <p className="text-md">
                Formado em Redes e Infraestrutura, com especialização em
                Business Intelligence.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ChartColumnDecreasing
                  className="size-6 text-primary"
                  aria-hidden
                />
              </CardDecorator>
              <h3 className="font-medium text-lg">Atuação</h3>
            </CardHeader>
            <CardContent>
              <p className="text-md">
                Profissional de BI, especializado na criação de conteúdos para
                análise de dados.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BookOpen className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="font-medium text-lg">habilidades técnicas</h3>
            </CardHeader>

            <CardContent>
              <p className="text-md">
                Capacidade de entender a necessidade do cliente e transformá-la
                em soluções eficientes.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Clipboard className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="font-medium text-lg">experiência</h3>
            </CardHeader>

            <CardContent>
              <p className="text-md">
                Experiência na área de TI, desenvolvendo ferramentas e soluções
                estratégicas para análise e tomada de decisão baseada em dados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-card absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

