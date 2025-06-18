const moveTela = (
  elemento: string,
  block: ScrollLogicalPosition = 'center'
) => {
  const container = document.getElementById(elemento) as HTMLElement;
  container.scrollIntoView({ behavior: 'smooth', block });
};

export default moveTela;
