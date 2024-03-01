import { Button } from '../components/Button'
import Input from '../components/Input'
import {  useForm } from 'react-hook-form'
import InputMask from "react-input-mask"
import { AuthController } from '../controllers/AuthController'
import { useNavigate } from 'react-router-dom'
import { IRegisterUserInputModel } from 'inputModels'
import { useRegister } from '../context'

const Form = () => {
  const {user,setUser} = useRegister()
  const navigate = useNavigate();

  const { register , handleSubmit, formState:{ errors }} = useForm<IRegisterUserInputModel>({
    defaultValues: {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      cel: user.cel,
      cep: user.cep,
      uf: user.uf,
      city: user.city,
      end: user.end,
      num: user.num,
      comp: user.comp,
      bairro: user.bairro,
      ref: user.ref
    }})

 
  const onSubmit = (data:IRegisterUserInputModel) => {
    AuthController.updateDataUser({...data,id: user.id})
    .then((data) => {
      setUser((prev) => ({...prev, ...data}))
      navigate('/mydata')
      console.log(data)
      console.log('Formulário enviado com sucesso!')
    }).catch((err) => {
      alert('Dados inválidos')
    })}
    
  return (
    <form className='flex flex-col gap-2 mt-10 md:mt-14 w-[300px] md:w-[375px] min-h-[860px] p-7 bg-white rounded-lg shadow-md'>
      <label className='text-sm'>Nome *</label>
      <Input 
        className={errors?.name ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Informe seu nome' 
        {...register('name', {required: true})}
      />
      {errors?.name?.type === 'required' && <span className='text-red-500'>Nome obrigatório</span>}

      <label className='text-sm'>E-mail *</label>
      <Input 
        disabled
        className={errors?.email ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Informe seu e-mail' 
        width={100}
        {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
      />
      {errors?.email?.type === 'required' && <span className='text-red-500'>E-mail obrigatório</span>}
      {errors?.email?.type === 'pattern' && <span className='text-red-500'>Email inválido</span>}

      <label className='text-sm'>Informe seu CPF *</label>
      <InputMask
        mask="999.999.999-99"
        maskChar={null}
        className={`ring-1 ring-zinc-200 text-xs md:text-sm border-gray-300 focus:outline-1 focus:outline-nav rounded-md p-2 w-full h-9 shadow-sm ${errors?.cpf ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}`}
        type='text' 
        placeholder='XXX.XXX.XXX-XX' 
        {...register('cpf', {required: true})}
      />
      {errors?.cpf?.type === 'required' && <span className='text-red-500'>CPF obrigatório</span>}

      <label className='text-sm'>Informe seu Celular *</label>
      <InputMask
        mask="(99) 99999-9999"
        maskChar={null}
        className={`ring-1 ring-zinc-200 text-xs md:text-sm border-gray-300 focus:outline-1 focus:outline-nav rounded-md p-2 w-full h-9 shadow-sm ${errors?.cpf ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}`}
        type='text' 
        placeholder='XX.XXX-XXX' 
        {...register('cel', {required: true})}
      />
      {errors?.cel?.type === 'required' && <span className='text-red-500'>Celular obrigatório</span>}

      <label className='text-sm'>Informe seu CEP *</label>
      <div className='flex flex-row items-center gap-7'>
        <InputMask
          mask="99.999-999"
          maskChar={null}
          className={`ring-1 ring-zinc-200 text-xs md:text-sm border-gray-300 w-28 md:w-36 focus:outline-1 focus:outline-nav rounded-md p-2 h-9 shadow-sm ${errors?.cep ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}`}
          type='text' 
          placeholder='XX.XXX-XXX' 
          {...register('cep', {required: true})}
        />
        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php/"  target='_blank' className='text-link hover:underline text-sm' rel="noreferrer">Não sei o CEP</a>
      </div>
        {errors?.cep?.type === 'required' && <span className='text-red-500'>CEP obrigatório</span>}

      <div className='flex flex-row items-center gap-7'>
        <div>
          <label className='text-sm'>UF *</label>
          <Input 
            className={errors?.uf ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='UF'
            {...register('uf', {required: true})}
          />
          {errors?.uf?.type === 'required' && <span className='text-red-500'>UF obrigatório</span>}
        </div>

        <div>
          <label className='text-sm'>Cidade *</label>
          <Input 
           className={errors?.city ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='Cidade'
            {...register('city', {required: true})}
          />            
          {errors?.city?.type === 'required' && <span className='text-red-500'>Cidade obrigatória</span>}
        </div>
      </div>
      
      <label className='text-sm'>Endereço *</label>
      <Input 
       className={errors?.end ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Insira seu endereço'
        {...register('end', {required: true})}
      />
      {errors?.end?.type === 'required' && <span className='text-red-500'>Endereço obrigatório</span>}

      <div className='flex flex-row items-center gap-7'>
        <div>
          <label className='text-sm'>Número *</label>
          <Input 
            className={errors?.num ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='Nº'
            {...register('num', {required: true})}
          />
          {errors?.num?.type === 'required' && <span className='text-red-500'>Número obrigatório</span>}
        </div>

        <div>
          <label className='text-sm'>Complemento</label>
          <Input 
            type='text' 
            placeholder='Complemento'
            {...register('comp')}
          />            
        </div>
      </div>

      <label className='text-sm'>Bairro *</label>
      <Input 
        className={errors?.bairro ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Insira seu bairro'
        {...register('bairro', {required: true})}
      />
      {errors?.bairro?.type === 'required' && <span className='text-red-500'>Bairro obrigatório</span>}

      <label className='text-sm'>Referência</label>
      <Input 
        type='text' 
        placeholder='Insira uma referência'
        {...register('ref')}
      />

      <div className='flex items-center justify-center'>
        <Button 
          type='button'
          text='Ir para Envio' 
          width={100} height={45} 
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
    </form>
  )
}

export default Form