'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Spinner } from '../ui/spinner';
import axios from 'axios';

const API_KEY = 'https://api.web3forms.com/submit';

const formSchema = z.object({
  nome: z.string().nonempty('Este campo é obrigatório.'),
  empresa: z.string().optional(),
  email: z.string().nonempty('Este campo é obrigatório.'),
  telefone: z.string().optional(),
  servicos: z.array(z.string()).optional(),
  outro_servico: z.string().optional(),
  novo_projeto: z.string().optional(),
  projeto_atual: z.string().optional(),
  forma_contato: z.array(z.string()).optional(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      servicos: [],
      outro_servico: '',
      novo_projeto: '',
      projeto_atual: '',
      forma_contato: [],
    },
  });

  const [enviado, setEnviado] = useState<null | boolean>(null);
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);
  const selectedServicos = form.watch('servicos');

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDialogOpened(true);
    const dados = {
      access_key: '85c9e2d2-ada5-4ffd-a729-652c3314afb5',
      ...Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(values).filter(([_, v]) =>
          Array.isArray(v) ? v.length > 0 : v !== ''
        )
      ),
    };
    axios
      .post(API_KEY, dados)
      .then((response) => {
        if (response.status !== 200) {
          setEnviado(false);
          throw new Error('Erro ao enviar o formulario');
        }
        setEnviado(true);
        form.reset();
      })
      .catch((error) => {
        setEnviado(false);
        console.error(error);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto bg-background md:bg-card p-6 pt-0 md:p-12 md:rounded-xl md:shadow-2xl"
      >
        <h2 className="ext-balance text-2xl font-semibold lg:text-4xl text-center md:text-start">
          Entre em contato
        </h2>
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu nome completo"
                  type="text"
                  className="bg-muted"
                  {...field}
                />
              </FormControl>
              <FormDescription>Insira seu nome acima</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="empresa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite nome da sua empresa"
                  type="text"
                  className="bg-muted"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Insira o nome de sua empresa, se aplicavel
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      placeholder="Digite seu email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Insira seu email acima</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu telefone"
                      type="number"
                      className="bg-muted"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Insira seu telefone acima</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="servicos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quais serviços você está procurando</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value as string[]}
                  onValuesChange={(e) => {
                    field.onChange(e);
                  }}
                  loop
                  className="max-w-xs"
                >
                  <MultiSelectorTrigger
                    className={`border border-border shadow-sm bg-muted ${
                      form.formState.errors.forma_contato && 'border-red-600'
                    }`}
                  >
                    <MultiSelectorInput placeholder="Selecione os servicos" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={'Analise de dado'}>
                        Análise de dados
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'BI'}>
                        Business intelligence / dashboards
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'Consultoria de TI'}>
                        Consultoria de TI
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'Automacao'}>
                        Automação de processos
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'Treinamentos'}>
                        Treinamentos
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'Desenvolvimento Web'}>
                        Desenvolvimento Web
                      </MultiSelectorItem>
                      {/* TODO: CAMPO PARA ESCREVRE QUE OUTRO */}
                      <MultiSelectorItem value={'Outros'}>
                        Outros
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>
                Selecione os serviços que está procurando
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedServicos?.includes('Outros') && (
          <FormField
            control={form.control}
            name="outro_servico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descreva o outro serviço</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva aqui"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Faça uma breve descrição do outro serviço que você queira{' '}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="novo_projeto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do projeto</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva aqui"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Faça uma breve descrição do seu projeto{' '}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projeto_atual"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu projeto atual</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva aqui"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Você já possui alguma solução de dados/BI em uso? Se sim,
                descreva
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="forma_contato"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Forma de contato preferida</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value as string[]}
                  onValuesChange={field.onChange}
                  loop
                  className="max-w-xs"
                >
                  <MultiSelectorTrigger
                    className={`border border-border shadow-sm bg-muted ${
                      form.formState.errors.forma_contato && 'border-red-600'
                    }`}
                  >
                    <MultiSelectorInput placeholder="Selecione a forma de contato" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={'celular'}>
                        Celular
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'email'}>
                        Email
                      </MultiSelectorItem>
                      <MultiSelectorItem value={'whatsapp'}>
                        Whatsapp
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>
                Selecione a forma de contato preferida
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button
            className="flex-1 md:flex-none"
            size="lg"
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            type="submit"
            disabled={enviado as boolean}
          >
            Enviar
          </Button>
          <Button
            className="flex-1 md:flex-none"
            onClick={() => {
              form.reset();
              setEnviado(null);
            }}
            size={'lg'}
            variant={'ghost'}
            type="button"
          >
            Limpar formulario
          </Button>
        </div>
        <Dialog
          open={dialogOpened}
          onOpenChange={(open) => {
            setDialogOpened(open);
            if (!open && !enviado) {
              setEnviado(null);
            }
          }}
        >
          <DialogContent>
            {enviado === null && (
              <DialogHeader>
                <DialogTitle>Enviando...</DialogTitle>
                <DialogDescription
                  className={`grid place-items-center ${
                    enviado === null && 'min-h-20'
                  }`}
                >
                  <Spinner />
                </DialogDescription>
              </DialogHeader>
            )}
            {enviado === true && (
              <DialogHeader>
                <DialogTitle>Formulário enviado com sucesso!</DialogTitle>
                <DialogDescription>
                  Nossa equipe analisará as informações e entraremos em contato
                  com você o mais breve possível. Agradecemos pelo interesse!
                </DialogDescription>
                <DialogFooter>
                  <Button
                    effect="ringHover"
                    onClick={() => {
                      setDialogOpened(false);
                    }}
                  >
                    Fechar
                  </Button>
                </DialogFooter>
              </DialogHeader>
            )}
            {enviado === false && (
              <DialogHeader>
                <DialogTitle>Formulario não enviado</DialogTitle>
                <DialogDescription>
                  Houve um problema ao enviar o formulário. Isso pode ter
                  ocorrido por instabilidade na conexão ou no servidor. Por
                  favor, aguarde alguns minutos e tente novamente em cerca de 5
                  minutos.
                </DialogDescription>
                <DialogFooter>
                  <Button
                    className="bg-destructive hover:bg-red-700 hover:ring-red-700"
                    effect="ringHover"
                    onClick={() => {
                      setEnviado(null);
                      setDialogOpened(false);
                    }}
                  >
                    Fechar
                  </Button>
                </DialogFooter>
              </DialogHeader>
            )}
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
