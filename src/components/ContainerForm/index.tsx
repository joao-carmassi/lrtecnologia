import MyForm from '../Form';

const ContainerForm = () => {
  return (
    <section
      id="containerForm"
      className="relative md:py-20 dark:bg-transparent min-h-screen"
    >
      <div className="absolute inset-0 z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#e1e1e1_1px,transparent_1px),linear-gradient(to_bottom,#e1e1e1_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="z-20 relative md:px-12">
        <MyForm />
      </div>
    </section>
  );
};

export default ContainerForm;
