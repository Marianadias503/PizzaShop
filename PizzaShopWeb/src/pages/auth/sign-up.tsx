import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { toast } from 'sonner'
import { Link, useNavigate } from "react-router-dom";


const signUpForm = z.object({ //estrutura do zod
    restaurantName: z.string(),
    email: z.string().email(),
    managerName: z.string(),
    phone: z.string(),

})

type SignUpForm = z.infer<typeof signUpForm> // converte a estrutura do zod para tipagem do JavaScript





export function SignUp(){
    const navigate = useNavigate()

const {register, handleSubmit, formState: {  isSubmitting }} = useForm<SignUpForm>();

async function handleSignUp(data:SignUpForm){ //Criando uma função para não permitir que o usuário clique em 'acessar painel' antes de realizar o primeiro envio
                                                // a função handleSignUp usa como parâmetro o SignUpForm, que é a conversão da constante 'signUpForm' que recebe os emails digitados          
           try{

            console.log(data)
            
            await new Promise ((resolve)=> setTimeout(resolve,2000))
            toast.success('Restaurante cadatsrado com sucesso.',{
                action:{
                    label:'Login',
                    onClick:() => navigate('/sign-in'),
                }
            })

           } catch{
            toast.error('Erro ao cadastrar restaurante.')
           }    
    
}


    return(
        <>
        <Helmet title="Cadastro" />

        <div className="p-8">

        <Button variant="ghost" asChild className="absolute right-8 top-8"> 
          {/* 'asChild' permite passar todas as propriedades do Button para o componente Link */}
          <Link to="/sign-in"> Fazer login</Link>
        </Button>


            <div className="w-[350px] flex flex-col justify-center gap-6">

                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight"> Criar conta grátis</h1>
                   <p className="text-sm text-muted-foreground"> 
                     Seja um parceiro e comece suas vendas !
                 </p>
                </div>

               <form onSubmit={handleSubmit (handleSignUp)} className="space-y-4"> {/*formulario fica desabilitado quando o usuário clicar em 'acessar painel */ }
                <div className="space-y-2">
                    <Label htmlFor="restaurantName"> Nome do estabelecimento  </Label>
                    <Input id="restaurantName"
                     type="text"
                     {...register('restaurantName')}>
                     </Input>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="text"> Seu nome </Label>
                    <Input id="managerName" type="text" {...register('managerName')}></Input>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email"> Seu e-mail </Label>
                    <Input id="email" type="email" {...register('email')}></Input>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email"> Seu celular </Label>
                    <Input id="phone" type="cel" {...register('phone')}></Input>
                </div>

                <Button className="w-full" type="submit" disabled={isSubmitting}> Finalizar cadastro </Button>
               </form>

               <p className="px-6 text-center test-sm leading-relaxed text-muted-foreground">
                 Ao continuar, você concorda com nossos <a className="underline underline-offset-4" href="">termos de serviços</a> {'  '}
                  e {'  '}
                   <a className="underline underline-offset-4" href="">políticas de privacidade.</a>
                </p>

            </div>

        </div>
        
        </>
    )
}