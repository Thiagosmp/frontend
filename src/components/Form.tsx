import { Button } from '../components/Button'
import Input from '../components/Input'
import {  useForm } from 'react-hook-form'

type FormFields = {
  name: string
  email: string
  cpf: string
  cel: string
  cep: string
  uf: string
  city: string
  end: string
  number: string
  comp: string
  bairro: string
  ref: string
}

const Form = () => {
  const { register , handleSubmit, formState:{ errors }} = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      cel: '',
      cep: '',
      uf: '',
      city: '',
      end: '',
      number: '',
      comp: '',
      bairro: '',
      ref: ''
    }})
  
  const onSubmit = (data:FormFields) => {
    console.log(data)
    console.log('Formulário enviado com sucesso!')
  }

  return (
    <form className='flex flex-col gap-2 mt-14 w-[375px] min-h-[860px] p-7 bg-white rounded-lg shadow-md'>
      <label>Nome *</label>
      <Input 
        className={errors?.name ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Informe seu nome' 
        {...register('name', {required: true})}
      />
      {errors?.name?.type === 'required' && <span className='text-red-500'>Nome obrigatório</span>}

      <label>E-mail *</label>
      <Input 
      className={errors?.email ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Informe seu e-mail' 
        width={100}
        {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
      />
      {errors?.email?.type === 'required' && <span className='text-red-500'>E-mail obrigatório</span>}
      {errors?.email?.type === 'pattern' && <span className='text-red-500'>Email inválido</span>}

      <label>Informe seu CPF *</label>
      <Input 
        className={errors?.cpf ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='000.000.000-00' 
        {...register('cpf', {required: true})}
      />
      {errors?.cpf?.type === 'required' && <span className='text-red-500'>CPF obrigatório</span>}

      <label>Informe seu Celular *</label>
      <Input 
        className={errors?.cel ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='(XX) - 9XXXX-XXXX' 
        {...register('cel', {required: true})}
      />
      {errors?.cel?.type === 'required' && <span className='text-red-500'>Celular obrigatório</span>}

      <label>Informe seu CEP *</label>
      <div className='flex flex-row items-center gap-7'>
        <Input 
          className={errors?.cep ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
          type='text' 
          placeholder='XX.XXX-XXX' 
          {...register('cep', {required: true})}
        />
        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php/" style={{width:"13rem"}} target='_blank' className='text-link hover:underline' rel="noreferrer">Não sei o CEP</a>
      </div>
        {errors?.cep?.type === 'required' && <span className='text-red-500'>CEP obrigatório</span>}

      <div className='flex flex-row items-center gap-7'>
        <div>
          <label>UF *</label>
          <Input 
            className={errors?.uf ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='UF'
            {...register('uf', {required: true})}
          />
          {errors?.uf?.type === 'required' && <span className='text-red-500'>UF obrigatório</span>}
        </div>

        <div>
          <label>Cidade *</label>
          <Input 
           className={errors?.city ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='Cidade'
            {...register('city', {required: true})}
          />            
          {errors?.city?.type === 'required' && <span className='text-red-500'>Cidade obrigatória</span>}
        </div>
      </div>
      
      <label>Endereço *</label>
      <Input 
       className={errors?.end ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Insira seu endereço'
        {...register('end', {required: true})}
      />
      {errors?.end?.type === 'required' && <span className='text-red-500'>Endereço obrigatório</span>}

      <div className='flex flex-row items-center gap-7'>
        <div>
          <label>Número *</label>
          <Input 
            className={errors?.number ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
            type='text' 
            placeholder='Nº'
            {...register('number', {required: true})}
          />
          {errors?.number?.type === 'required' && <span className='text-red-500'>Número obrigatório</span>}
        </div>

        <div>
          <label>Complemento</label>
          <Input 
            type='text' 
            placeholder='Complemento'
            {...register('comp')}
          />            
        </div>
      </div>

      <label>Bairro *</label>
      <Input 
        className={errors?.bairro ? 'border border-primary focus:outline-1 focus:outline-primary' : ""}
        type='text' 
        placeholder='Insira seu bairro'
        {...register('bairro', {required: true})}
      />
      {errors?.bairro?.type === 'required' && <span className='text-red-500'>Bairro obrigatório</span>}

      <label>Referência</label>
      <Input 
        type='text' 
        placeholder='Insira uma referência'
        {...register('ref')}
      />

      <div className='flex items-center justify-center'>
        <Button 
          type='button'
          text='Ir para Envio' 
          width={165} height={45} 
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
    </form>
  )
}

export default Form