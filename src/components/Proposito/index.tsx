import ExportedImage from 'next-image-export-optimizer';

const Proposito = () => {
  return (
    <section
      id="ferramentas"
      className="max-w-5xl pb-20 md:pb-32 pt-8 md:pt-10 px-6 mx-auto"
    >
      <div className="text-center">
        <h2 className="text-balance text-2xl font-semibold lg:text-4xl">
          PROPÓSITO DAS FERRAMENTAS TECNOLÓGICAS
        </h2>
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row gap-5 md:gap-16 mt-8 md:mt-16">
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-lg">
            Ferramentas tecnológicas, como o Power BI, só fazem sentido quando
            utilizadas para simplificar e potencializar o trabalho das pessoas.
          </p>
          <div>
            <h3 className="text-xl font-medium mb-2">ÓBSTÁCULOS</h3>
            <p className="text-lg">
              A falta de alinhamento entre as ferramentas e as demandas reais
              dos usuários dificulta a eficiência no uso da tecnologia,
              resultando em desperdício de recursos e frustração dos usuários
            </p>
          </div>
        </div>
        <div className="flex-1 shadow-sm rounded-lg">
          <ExportedImage
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img_explorar_celular.jpg`}
            alt=""
            className="rounded-lg"
            height={596}
            width={835}
          />
        </div>
      </div>
    </section>
  );
};

export default Proposito;
