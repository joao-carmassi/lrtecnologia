import type { Metadata } from 'next';
import './globals.css';
import { HeroHeader } from '@/components/hero6-header';
import FooterSection from '@/components/footer';

export const metadata: Metadata = {
  title: 'LR soluções',
  description: 'Transformando ideias em soluções',
};

/* TODO:
  !Configurar title e description da pagina,
  !url sitemap,
  !metadata
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const containers = [
    {
      nome: 'Perfil',
      id: 'perfil',
    },
    {
      nome: 'Foco',
      id: 'foco',
    },
    {
      nome: 'Ferrramentas',
      id: 'ferramentas',
    },
    {
      nome: 'Destaque',
      id: 'destaque',
    },
    {
      nome: 'Power BI',
      id: 'power-bi',
    },
  ];

  return (
    <html lang="pt-BR" data-theme="light">
      <body>
        <HeroHeader containers={containers} />
        {children}
        <FooterSection containers={containers} />
      </body>
    </html>
  );
}
