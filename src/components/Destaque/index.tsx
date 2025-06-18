const Destaque = () => {
  return (
    <section
      id="destaque"
      className="bg-primary text-background py-16 md:py-26 px-6 mx-auto"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold lg:text-5xl">
            O QUE ME DESTACA?
          </h2>
        </div>
        <div className="mt-8 md:mt-16">
          <div className="flex flex-col text-center gap-3">
            <p>
              A capacidade de ouvir e entender as demandas, traduzindo as em
              resultados práticos e assertivos.
            </p>
            <p>
              Somado a isso, minha formação me permite ter uma visão abrangente,
              desde os aspectos técnicos até a entrega de resultados de
              negócios.
            </p>
            <p>
              Resumindo, meu trabalho é criar pontes entre as ideias e os
              resultados. Gosto de transformar complexidade em clareza e de
              ajudar pessoas e empresas a atingirem seu potencial por meio da
              tecnologia e da análise de dados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destaque;
