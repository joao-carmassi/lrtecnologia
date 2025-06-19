import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ExportedImage from 'next-image-export-optimizer';

const ExplorerPowerBi = () => {
  return (
    <section
      id="power-bi"
      className="max-w-5xl py-14 pt-10 md:py-20 px-6 mx-auto"
    >
      <div className="text-center">
        <h2 className="text-balance text-2xl font-semibold lg:text-4xl">
          Explorar como Power BI, inteligência Artificial (IA) e Office 365
          transformam o dia a dia no trabalho
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-5 md:gap-16 mt-8 md:mt-16">
        <Accordion
          defaultValue="item-1"
          className="flex-1 w-full"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Tomada de decisão com base em dados:
            </AccordionTrigger>
            <AccordionContent>
              Use dados confiáveis para decisões mais estratégicas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Automatização de relatórios e dashboards:
            </AccordionTrigger>
            <AccordionContent>
              Economize tempo com relatórios automáticos e visuais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Conexão com múltiplas fontes de dados:
            </AccordionTrigger>
            <AccordionContent>
              Integre dados de diferentes origens em um só lugar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Modelos preditivos de resultados:
            </AccordionTrigger>
            <AccordionContent>
              Antecipe tendências e resultados com inteligência artificial.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Automação de processos:</AccordionTrigger>
            <AccordionContent>
              Otimize tarefas com chatbots e análise de texto inteligente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Integração com ferramentas Microsoft:
            </AccordionTrigger>
            <AccordionContent>
              Use IA no Power Apps, Excel, Teams e Copilot para mais
              produtividade.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Ferramentas integradas e colaboração:
            </AccordionTrigger>
            <AccordionContent>
              Compartilhe documentos e colabore em tempo real com Teams e
              SharePoint.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Automação e boas práticas:</AccordionTrigger>
            <AccordionContent>
              Use Power Automate, Outlook e dicas práticas para trabalhar
              melhor.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex-1 shadow-sm rounded-lg">
          <ExportedImage
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img_explorar.jpg`}
            alt=""
            className="rounded-lg hidden md:block"
            width={596}
            height={835}
          />
          <ExportedImage
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img_explorar_celular.jpg`}
            alt=""
            className="rounded-lg md:hidden"
            height={596}
            width={835}
          />
        </div>
      </div>
    </section>
  );
};

export default ExplorerPowerBi;
